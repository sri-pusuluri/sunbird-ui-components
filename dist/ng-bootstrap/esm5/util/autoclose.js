/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { fromEvent, race } from 'rxjs';
import { delay, filter, map, takeUntil, withLatestFrom } from 'rxjs/operators';
import { Key } from './key';
import { closest } from './util';
/** @type {?} */
var isContainedIn = (/**
 * @param {?} element
 * @param {?=} array
 * @return {?}
 */
function (element, array) {
    return array ? array.some((/**
     * @param {?} item
     * @return {?}
     */
    function (item) { return item.contains(element); })) : false;
});
var ɵ0 = isContainedIn;
/** @type {?} */
var matchesSelectorIfAny = (/**
 * @param {?} element
 * @param {?=} selector
 * @return {?}
 */
function (element, selector) {
    return !selector || closest(element, selector) != null;
});
var ɵ1 = matchesSelectorIfAny;
// we'll have to use 'touch' events instead of 'mouse' events on iOS and add a more significant delay
// to avoid re-opening when handling (click) on a toggling element
// TODO: use proper Angular platform detection when NgbAutoClose becomes a service and we can inject PLATFORM_ID
/** @type {?} */
var iOS = false;
if (typeof navigator !== 'undefined') {
    iOS = !!navigator.userAgent && /iPad|iPhone|iPod/.test(navigator.userAgent);
}
/**
 * @param {?} zone
 * @param {?} document
 * @param {?} type
 * @param {?} close
 * @param {?} closed$
 * @param {?} insideElements
 * @param {?=} ignoreElements
 * @param {?=} insideSelector
 * @return {?}
 */
export function ngbAutoClose(zone, document, type, close, closed$, insideElements, ignoreElements, insideSelector) {
    // closing on ESC and outside clicks
    if (type) {
        zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var shouldCloseOnClick = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var element = (/** @type {?} */ (event.target));
                if ((event instanceof MouseEvent && event.button === 2) || isContainedIn(element, ignoreElements)) {
                    return false;
                }
                if (type === 'inside') {
                    return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
                }
                else if (type === 'outside') {
                    return !isContainedIn(element, insideElements);
                }
                else /* if (type === true) */ {
                    return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
                }
            });
            /** @type {?} */
            var escapes$ = fromEvent(document, 'keydown')
                .pipe(takeUntil(closed$), 
            // tslint:disable-next-line:deprecation
            filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.which === Key.Escape; })));
            // we have to pre-calculate 'shouldCloseOnClick' on 'mousedown/touchstart',
            // because on 'mouseup/touchend' DOM nodes might be detached
            /** @type {?} */
            var mouseDowns$ = fromEvent(document, iOS ? 'touchstart' : 'mousedown')
                .pipe(map(shouldCloseOnClick), takeUntil(closed$));
            /** @type {?} */
            var closeableClicks$ = (/** @type {?} */ (fromEvent(document, iOS ? 'touchend' : 'mouseup')
                .pipe(withLatestFrom(mouseDowns$), filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), _ = _b[0], shouldClose = _b[1];
                return shouldClose;
            })), delay(iOS ? 16 : 0), takeUntil(closed$))));
            race([escapes$, closeableClicks$]).subscribe((/**
             * @return {?}
             */
            function () { return zone.run(close); }));
        }));
    }
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2Nsb3NlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1bmJpcmQtZWQvc3VuYmlyZC11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsidXRpbC9hdXRvY2xvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFjLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFFBQVEsQ0FBQzs7SUFFekIsYUFBYTs7Ozs7QUFBRyxVQUFDLE9BQW9CLEVBQUUsS0FBcUI7SUFDOUQsT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUF0QixDQUFzQixFQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7QUFBMUQsQ0FBMEQsQ0FBQTs7O0lBRXhELG9CQUFvQjs7Ozs7QUFBRyxVQUFDLE9BQW9CLEVBQUUsUUFBaUI7SUFDakUsT0FBQSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUk7QUFBL0MsQ0FBK0MsQ0FBQTs7Ozs7O0lBSy9DLEdBQUcsR0FBRyxLQUFLO0FBQ2YsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLEVBQUU7SUFDcEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7Q0FDN0U7Ozs7Ozs7Ozs7OztBQUVELE1BQU0sVUFBVSxZQUFZLENBQ3hCLElBQVksRUFBRSxRQUFhLEVBQUUsSUFBb0MsRUFBRSxLQUFpQixFQUFFLE9BQXdCLEVBQzlHLGNBQTZCLEVBQUUsY0FBOEIsRUFBRSxjQUF1QjtJQUN4RixvQ0FBb0M7SUFDcEMsSUFBSSxJQUFJLEVBQUU7UUFDUixJQUFJLENBQUMsaUJBQWlCOzs7UUFBQzs7Z0JBRWYsa0JBQWtCOzs7O1lBQUcsVUFBQyxLQUE4Qjs7b0JBQ2xELE9BQU8sR0FBRyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFlO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxZQUFZLFVBQVUsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLEVBQUU7b0JBQ2pHLE9BQU8sS0FBSyxDQUFDO2lCQUNkO2dCQUNELElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtvQkFDckIsT0FBTyxhQUFhLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztpQkFDaEc7cUJBQU0sSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO29CQUM3QixPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztpQkFDaEQ7cUJBQU0sd0JBQXdCLENBQUM7b0JBQzlCLE9BQU8sb0JBQW9CLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztpQkFDakc7WUFDSCxDQUFDLENBQUE7O2dCQUVLLFFBQVEsR0FBRyxTQUFTLENBQWdCLFFBQVEsRUFBRSxTQUFTLENBQUM7aUJBQ3hDLElBQUksQ0FDRCxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ2xCLHVDQUF1QztZQUN2QyxNQUFNOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQXRCLENBQXNCLEVBQUMsQ0FBQzs7OztnQkFLdkQsV0FBVyxHQUFHLFNBQVMsQ0FBYSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztpQkFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Z0JBRXBFLGdCQUFnQixHQUFHLG1CQUFBLFNBQVMsQ0FBYSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztpQkFDeEQsSUFBSSxDQUNELGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNOzs7O1lBQUMsVUFBQyxFQUFnQjtvQkFBaEIsMEJBQWdCLEVBQWYsU0FBQyxFQUFFLG1CQUFXO2dCQUFNLE9BQUEsV0FBVztZQUFYLENBQVcsRUFBQyxFQUN0RSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUEwQjtZQUduRyxJQUFJLENBQVEsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztZQUFDLGNBQU0sT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFmLENBQWUsRUFBQyxDQUFDO1FBQzdFLENBQUMsRUFBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtmcm9tRXZlbnQsIE9ic2VydmFibGUsIHJhY2V9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkZWxheSwgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCwgd2l0aExhdGVzdEZyb219IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7S2V5fSBmcm9tICcuL2tleSc7XG5pbXBvcnQge2Nsb3Nlc3R9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IGlzQ29udGFpbmVkSW4gPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGFycmF5PzogSFRNTEVsZW1lbnRbXSkgPT5cbiAgICBhcnJheSA/IGFycmF5LnNvbWUoaXRlbSA9PiBpdGVtLmNvbnRhaW5zKGVsZW1lbnQpKSA6IGZhbHNlO1xuXG5jb25zdCBtYXRjaGVzU2VsZWN0b3JJZkFueSA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0b3I/OiBzdHJpbmcpID0+XG4gICAgIXNlbGVjdG9yIHx8IGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpICE9IG51bGw7XG5cbi8vIHdlJ2xsIGhhdmUgdG8gdXNlICd0b3VjaCcgZXZlbnRzIGluc3RlYWQgb2YgJ21vdXNlJyBldmVudHMgb24gaU9TIGFuZCBhZGQgYSBtb3JlIHNpZ25pZmljYW50IGRlbGF5XG4vLyB0byBhdm9pZCByZS1vcGVuaW5nIHdoZW4gaGFuZGxpbmcgKGNsaWNrKSBvbiBhIHRvZ2dsaW5nIGVsZW1lbnRcbi8vIFRPRE86IHVzZSBwcm9wZXIgQW5ndWxhciBwbGF0Zm9ybSBkZXRlY3Rpb24gd2hlbiBOZ2JBdXRvQ2xvc2UgYmVjb21lcyBhIHNlcnZpY2UgYW5kIHdlIGNhbiBpbmplY3QgUExBVEZPUk1fSURcbmxldCBpT1MgPSBmYWxzZTtcbmlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICBpT1MgPSAhIW5hdmlnYXRvci51c2VyQWdlbnQgJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZ2JBdXRvQ2xvc2UoXG4gICAgem9uZTogTmdab25lLCBkb2N1bWVudDogYW55LCB0eXBlOiBib29sZWFuIHwgJ2luc2lkZScgfCAnb3V0c2lkZScsIGNsb3NlOiAoKSA9PiB2b2lkLCBjbG9zZWQkOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgaW5zaWRlRWxlbWVudHM6IEhUTUxFbGVtZW50W10sIGlnbm9yZUVsZW1lbnRzPzogSFRNTEVsZW1lbnRbXSwgaW5zaWRlU2VsZWN0b3I/OiBzdHJpbmcpIHtcbiAgLy8gY2xvc2luZyBvbiBFU0MgYW5kIG91dHNpZGUgY2xpY2tzXG4gIGlmICh0eXBlKSB7XG4gICAgem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHNob3VsZENsb3NlT25DbGljayA9IChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaWYgKChldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgJiYgZXZlbnQuYnV0dG9uID09PSAyKSB8fCBpc0NvbnRhaW5lZEluKGVsZW1lbnQsIGlnbm9yZUVsZW1lbnRzKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2luc2lkZScpIHtcbiAgICAgICAgICByZXR1cm4gaXNDb250YWluZWRJbihlbGVtZW50LCBpbnNpZGVFbGVtZW50cykgJiYgbWF0Y2hlc1NlbGVjdG9ySWZBbnkoZWxlbWVudCwgaW5zaWRlU2VsZWN0b3IpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvdXRzaWRlJykge1xuICAgICAgICAgIHJldHVybiAhaXNDb250YWluZWRJbihlbGVtZW50LCBpbnNpZGVFbGVtZW50cyk7XG4gICAgICAgIH0gZWxzZSAvKiBpZiAodHlwZSA9PT0gdHJ1ZSkgKi8ge1xuICAgICAgICAgIHJldHVybiBtYXRjaGVzU2VsZWN0b3JJZkFueShlbGVtZW50LCBpbnNpZGVTZWxlY3RvcikgfHwgIWlzQ29udGFpbmVkSW4oZWxlbWVudCwgaW5zaWRlRWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBlc2NhcGVzJCA9IGZyb21FdmVudDxLZXlib2FyZEV2ZW50Pihkb2N1bWVudCwgJ2tleWRvd24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFrZVVudGlsKGNsb3NlZCQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcihlID0+IGUud2hpY2ggPT09IEtleS5Fc2NhcGUpKTtcblxuXG4gICAgICAvLyB3ZSBoYXZlIHRvIHByZS1jYWxjdWxhdGUgJ3Nob3VsZENsb3NlT25DbGljaycgb24gJ21vdXNlZG93bi90b3VjaHN0YXJ0JyxcbiAgICAgIC8vIGJlY2F1c2Ugb24gJ21vdXNldXAvdG91Y2hlbmQnIERPTSBub2RlcyBtaWdodCBiZSBkZXRhY2hlZFxuICAgICAgY29uc3QgbW91c2VEb3ducyQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsIGlPUyA/ICd0b3VjaHN0YXJ0JyA6ICdtb3VzZWRvd24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBpcGUobWFwKHNob3VsZENsb3NlT25DbGljayksIHRha2VVbnRpbChjbG9zZWQkKSk7XG5cbiAgICAgIGNvbnN0IGNsb3NlYWJsZUNsaWNrcyQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsIGlPUyA/ICd0b3VjaGVuZCcgOiAnbW91c2V1cCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aExhdGVzdEZyb20obW91c2VEb3ducyQpLCBmaWx0ZXIoKFtfLCBzaG91bGRDbG9zZV0pID0+IHNob3VsZENsb3NlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5KGlPUyA/IDE2IDogMCksIHRha2VVbnRpbChjbG9zZWQkKSkgYXMgT2JzZXJ2YWJsZTxNb3VzZUV2ZW50PjtcblxuXG4gICAgICByYWNlPEV2ZW50PihbZXNjYXBlcyQsIGNsb3NlYWJsZUNsaWNrcyRdKS5zdWJzY3JpYmUoKCkgPT4gem9uZS5ydW4oY2xvc2UpKTtcbiAgICB9KTtcbiAgfVxufVxuIl19