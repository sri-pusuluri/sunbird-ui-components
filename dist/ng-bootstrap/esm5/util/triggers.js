/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable, merge } from 'rxjs';
import { share, filter, delay, map } from 'rxjs/operators';
var Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    /**
     * @return {?}
     */
    Trigger.prototype.isManual = /**
     * @return {?}
     */
    function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
export { Trigger };
if (false) {
    /** @type {?} */
    Trigger.prototype.open;
    /** @type {?} */
    Trigger.prototype.close;
}
/** @type {?} */
var DEFAULT_ALIASES = {
    'hover': ['mouseenter', 'mouseleave'],
    'focus': ['focusin', 'focusout'],
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
export function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    /** @type {?} */
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    var parsedTriggers = trimmedTriggers.split(/\s+/).map((/**
     * @param {?} trigger
     * @return {?}
     */
    function (trigger) { return trigger.split(':'); })).map((/**
     * @param {?} triggerPair
     * @return {?}
     */
    function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    }));
    /** @type {?} */
    var manualTriggers = parsedTriggers.filter((/**
     * @param {?} triggerPair
     * @return {?}
     */
    function (triggerPair) { return triggerPair.isManual(); }));
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} nativeElement
 * @param {?} triggers
 * @param {?} isOpenedFn
 * @return {?}
 */
export function observeTriggers(renderer, nativeElement, triggers, isOpenedFn) {
    return new Observable((/**
     * @param {?} subscriber
     * @return {?}
     */
    function (subscriber) {
        /** @type {?} */
        var listeners = [];
        /** @type {?} */
        var openFn = (/**
         * @return {?}
         */
        function () { return subscriber.next(true); });
        /** @type {?} */
        var closeFn = (/**
         * @return {?}
         */
        function () { return subscriber.next(false); });
        /** @type {?} */
        var toggleFn = (/**
         * @return {?}
         */
        function () { return subscriber.next(!isOpenedFn()); });
        triggers.forEach((/**
         * @param {?} trigger
         * @return {?}
         */
        function (trigger) {
            if (trigger.open === trigger.close) {
                listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
            }
            else {
                listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
            }
        }));
        return (/**
         * @return {?}
         */
        function () { listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        function (unsubscribeFn) { return unsubscribeFn(); })); });
    }));
}
/** @type {?} */
var delayOrNoop = (/**
 * @template T
 * @param {?} time
 * @return {?}
 */
function (time) { return time > 0 ? delay(time) : (/**
 * @param {?} a
 * @return {?}
 */
function (a) { return a; }); });
var ɵ0 = delayOrNoop;
/**
 * @param {?} openDelay
 * @param {?} closeDelay
 * @param {?} isOpenedFn
 * @return {?}
 */
export function triggerDelay(openDelay, closeDelay, isOpenedFn) {
    return (/**
     * @param {?} input$
     * @return {?}
     */
    function (input$) {
        /** @type {?} */
        var pending = null;
        /** @type {?} */
        var filteredInput$ = input$.pipe(map((/**
         * @param {?} open
         * @return {?}
         */
        function (open) { return ({ open: open }); })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var currentlyOpen = isOpenedFn();
            if (currentlyOpen !== event.open && (!pending || pending.open === currentlyOpen)) {
                pending = event;
                return true;
            }
            if (pending && pending.open !== event.open) {
                pending = null;
            }
            return false;
        })), share());
        /** @type {?} */
        var delayedOpen$ = filteredInput$.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.open; })), delayOrNoop(openDelay));
        /** @type {?} */
        var delayedClose$ = filteredInput$.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return !event.open; })), delayOrNoop(closeDelay));
        return merge(delayedOpen$, delayedClose$)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event === pending) {
                pending = null;
                return event.open !== isOpenedFn();
            }
            return false;
        })), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.open; })));
    });
}
/**
 * @param {?} renderer
 * @param {?} nativeElement
 * @param {?} triggers
 * @param {?} isOpenedFn
 * @param {?} openFn
 * @param {?} closeFn
 * @param {?=} openDelay
 * @param {?=} closeDelay
 * @return {?}
 */
export function listenToTriggers(renderer, nativeElement, triggers, isOpenedFn, openFn, closeFn, openDelay, closeDelay) {
    if (openDelay === void 0) { openDelay = 0; }
    if (closeDelay === void 0) { closeDelay = 0; }
    /** @type {?} */
    var parsedTriggers = parseTriggers(triggers);
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return (/**
         * @return {?}
         */
        function () { });
    }
    /** @type {?} */
    var subscription = observeTriggers(renderer, nativeElement, parsedTriggers, isOpenedFn)
        .pipe(triggerDelay(openDelay, closeDelay, isOpenedFn))
        .subscribe((/**
     * @param {?} open
     * @return {?}
     */
    function (open) { return (open ? openFn() : closeFn()); }));
    return (/**
     * @return {?}
     */
    function () { return subscription.unsubscribe(); });
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJ1dGlsL3RyaWdnZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFFLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQ7SUFDRSxpQkFBbUIsSUFBWSxFQUFTLEtBQWM7UUFBbkMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDcEQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7OztJQUVELDBCQUFROzs7SUFBUixjQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzFFLGNBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBhLHVCQUFtQjs7SUFBRSx3QkFBcUI7OztJQVNsRCxlQUFlLEdBQUc7SUFDdEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztJQUNyQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO0NBQ2pDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLFFBQWdCLEVBQUUsT0FBeUI7SUFBekIsd0JBQUEsRUFBQSx5QkFBeUI7O1FBQ2pFLGVBQWUsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7SUFFL0MsSUFBSSxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNoQyxPQUFPLEVBQUUsQ0FBQztLQUNYOztRQUVLLGNBQWMsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLEVBQUMsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQyxXQUFXOztZQUNqRyxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVc7UUFDbEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQyxFQUFDOztRQUVJLGNBQWMsR0FBRyxjQUFjLENBQUMsTUFBTTs7OztJQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUF0QixDQUFzQixFQUFDO0lBRW5GLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDN0IsTUFBTSwwREFBMEQsQ0FBQztLQUNsRTtJQUVELElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDNUQsTUFBTSwwRUFBMEUsQ0FBQztLQUNsRjtJQUVELE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUM7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxRQUFhLEVBQUUsYUFBa0IsRUFBRSxRQUFtQixFQUFFLFVBQXlCO0lBQy9HLE9BQU8sSUFBSSxVQUFVOzs7O0lBQVUsVUFBQSxVQUFVOztZQUNqQyxTQUFTLEdBQUcsRUFBRTs7WUFDZCxNQUFNOzs7UUFBRyxjQUFNLE9BQUEsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBckIsQ0FBcUIsQ0FBQTs7WUFDcEMsT0FBTzs7O1FBQUcsY0FBTSxPQUFBLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLENBQUE7O1lBQ3RDLFFBQVE7OztRQUFHLGNBQU0sT0FBQSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQTtRQUVyRCxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsT0FBZ0I7WUFDaEMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3hFO2lCQUFNO2dCQUNMLFNBQVMsQ0FBQyxJQUFJLENBQ1YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFDcEQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSDs7O1FBQU8sY0FBUSxTQUFTLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsYUFBYSxJQUFJLE9BQUEsYUFBYSxFQUFFLEVBQWYsQ0FBZSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7SUFDeEUsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOztJQUVLLFdBQVc7Ozs7O0FBQUcsVUFBSSxJQUFZLElBQUssT0FBQSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs7OztBQUFDLFVBQUMsQ0FBZ0IsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUEsRUFBbkQsQ0FBbUQsQ0FBQTs7Ozs7Ozs7QUFFNUYsTUFBTSxVQUFVLFlBQVksQ0FBQyxTQUFpQixFQUFFLFVBQWtCLEVBQUUsVUFBeUI7SUFDM0Y7Ozs7SUFBTyxVQUFDLE1BQTJCOztZQUM3QixPQUFPLEdBQUcsSUFBSTs7WUFDWixjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FDOUIsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFDLENBQUMsRUFBUixDQUFRLEVBQUMsRUFBRSxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLOztnQkFDM0IsYUFBYSxHQUFHLFVBQVUsRUFBRTtZQUNsQyxJQUFJLGFBQWEsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsRUFBRTtnQkFDaEYsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDaEIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDMUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNoQjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLEVBQ0YsS0FBSyxFQUFFLENBQUM7O1lBQ04sWUFBWSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLEVBQUMsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBQ3ZGLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSyxDQUFDLElBQUksRUFBWCxDQUFXLEVBQUMsRUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEcsT0FBTyxLQUFLLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQzthQUNwQyxJQUFJLENBQ0QsTUFBTTs7OztRQUFDLFVBQUEsS0FBSztZQUNWLElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRTtnQkFDckIsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDZixPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFLENBQUM7YUFDcEM7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVSxFQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDLEVBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzVCLFFBQWEsRUFBRSxhQUFrQixFQUFFLFFBQWdCLEVBQUUsVUFBeUIsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQWEsRUFDOUcsVUFBYztJQURtRiwwQkFBQSxFQUFBLGFBQWE7SUFDOUcsMkJBQUEsRUFBQSxjQUFjOztRQUNWLGNBQWMsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBRTlDLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQy9EOzs7UUFBTyxjQUFPLENBQUMsRUFBQztLQUNqQjs7UUFFSyxZQUFZLEdBQUcsZUFBZSxDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFVBQVUsQ0FBQztTQUMvRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDckQsU0FBUzs7OztJQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUE3QixDQUE2QixFQUFDO0lBRTFFOzs7SUFBTyxjQUFNLE9BQUEsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUExQixDQUEwQixFQUFDO0FBQzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIG1lcmdlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7c2hhcmUsIGZpbHRlciwgZGVsYXksIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgVHJpZ2dlciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcGVuOiBzdHJpbmcsIHB1YmxpYyBjbG9zZT86IHN0cmluZykge1xuICAgIGlmICghY2xvc2UpIHtcbiAgICAgIHRoaXMuY2xvc2UgPSBvcGVuO1xuICAgIH1cbiAgfVxuXG4gIGlzTWFudWFsKCkgeyByZXR1cm4gdGhpcy5vcGVuID09PSAnbWFudWFsJyB8fCB0aGlzLmNsb3NlID09PSAnbWFudWFsJzsgfVxufVxuXG5jb25zdCBERUZBVUxUX0FMSUFTRVMgPSB7XG4gICdob3Zlcic6IFsnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ10sXG4gICdmb2N1cyc6IFsnZm9jdXNpbicsICdmb2N1c291dCddLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJpZ2dlcnModHJpZ2dlcnM6IHN0cmluZywgYWxpYXNlcyA9IERFRkFVTFRfQUxJQVNFUyk6IFRyaWdnZXJbXSB7XG4gIGNvbnN0IHRyaW1tZWRUcmlnZ2VycyA9ICh0cmlnZ2VycyB8fCAnJykudHJpbSgpO1xuXG4gIGlmICh0cmltbWVkVHJpZ2dlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSB0cmltbWVkVHJpZ2dlcnMuc3BsaXQoL1xccysvKS5tYXAodHJpZ2dlciA9PiB0cmlnZ2VyLnNwbGl0KCc6JykpLm1hcCgodHJpZ2dlclBhaXIpID0+IHtcbiAgICBsZXQgYWxpYXMgPSBhbGlhc2VzW3RyaWdnZXJQYWlyWzBdXSB8fCB0cmlnZ2VyUGFpcjtcbiAgICByZXR1cm4gbmV3IFRyaWdnZXIoYWxpYXNbMF0sIGFsaWFzWzFdKTtcbiAgfSk7XG5cbiAgY29uc3QgbWFudWFsVHJpZ2dlcnMgPSBwYXJzZWRUcmlnZ2Vycy5maWx0ZXIodHJpZ2dlclBhaXIgPT4gdHJpZ2dlclBhaXIuaXNNYW51YWwoKSk7XG5cbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyAnVHJpZ2dlcnMgcGFyc2UgZXJyb3I6IG9ubHkgb25lIG1hbnVhbCB0cmlnZ2VyIGlzIGFsbG93ZWQnO1xuICB9XG5cbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBtYW51YWwgdHJpZ2dlciBjYW5cXCd0IGJlIG1peGVkIHdpdGggb3RoZXIgdHJpZ2dlcnMnO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFRyaWdnZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZVRyaWdnZXJzKHJlbmRlcmVyOiBhbnksIG5hdGl2ZUVsZW1lbnQ6IGFueSwgdHJpZ2dlcnM6IFRyaWdnZXJbXSwgaXNPcGVuZWRGbjogKCkgPT4gYm9vbGVhbikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8Ym9vbGVhbj4oc3Vic2NyaWJlciA9PiB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gW107XG4gICAgY29uc3Qgb3BlbkZuID0gKCkgPT4gc3Vic2NyaWJlci5uZXh0KHRydWUpO1xuICAgIGNvbnN0IGNsb3NlRm4gPSAoKSA9PiBzdWJzY3JpYmVyLm5leHQoZmFsc2UpO1xuICAgIGNvbnN0IHRvZ2dsZUZuID0gKCkgPT4gc3Vic2NyaWJlci5uZXh0KCFpc09wZW5lZEZuKCkpO1xuXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogVHJpZ2dlcikgPT4ge1xuICAgICAgaWYgKHRyaWdnZXIub3BlbiA9PT0gdHJpZ2dlci5jbG9zZSkge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChyZW5kZXJlci5saXN0ZW4obmF0aXZlRWxlbWVudCwgdHJpZ2dlci5vcGVuLCB0b2dnbGVGbikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2goXG4gICAgICAgICAgICByZW5kZXJlci5saXN0ZW4obmF0aXZlRWxlbWVudCwgdHJpZ2dlci5vcGVuLCBvcGVuRm4pLFxuICAgICAgICAgICAgcmVuZGVyZXIubGlzdGVuKG5hdGl2ZUVsZW1lbnQsIHRyaWdnZXIuY2xvc2UsIGNsb3NlRm4pKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7IGxpc3RlbmVycy5mb3JFYWNoKHVuc3Vic2NyaWJlRm4gPT4gdW5zdWJzY3JpYmVGbigpKTsgfTtcbiAgfSk7XG59XG5cbmNvbnN0IGRlbGF5T3JOb29wID0gPFQ+KHRpbWU6IG51bWJlcikgPT4gdGltZSA+IDAgPyBkZWxheTxUPih0aW1lKSA6IChhOiBPYnNlcnZhYmxlPFQ+KSA9PiBhO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlckRlbGF5KG9wZW5EZWxheTogbnVtYmVyLCBjbG9zZURlbGF5OiBudW1iZXIsIGlzT3BlbmVkRm46ICgpID0+IGJvb2xlYW4pIHtcbiAgcmV0dXJuIChpbnB1dCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4pID0+IHtcbiAgICBsZXQgcGVuZGluZyA9IG51bGw7XG4gICAgY29uc3QgZmlsdGVyZWRJbnB1dCQgPSBpbnB1dCQucGlwZShcbiAgICAgICAgbWFwKG9wZW4gPT4gKHtvcGVufSkpLCBmaWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRseU9wZW4gPSBpc09wZW5lZEZuKCk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRseU9wZW4gIT09IGV2ZW50Lm9wZW4gJiYgKCFwZW5kaW5nIHx8IHBlbmRpbmcub3BlbiA9PT0gY3VycmVudGx5T3BlbikpIHtcbiAgICAgICAgICAgIHBlbmRpbmcgPSBldmVudDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGVuZGluZyAmJiBwZW5kaW5nLm9wZW4gIT09IGV2ZW50Lm9wZW4pIHtcbiAgICAgICAgICAgIHBlbmRpbmcgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLFxuICAgICAgICBzaGFyZSgpKTtcbiAgICBjb25zdCBkZWxheWVkT3BlbiQgPSBmaWx0ZXJlZElucHV0JC5waXBlKGZpbHRlcihldmVudCA9PiBldmVudC5vcGVuKSwgZGVsYXlPck5vb3Aob3BlbkRlbGF5KSk7XG4gICAgY29uc3QgZGVsYXllZENsb3NlJCA9IGZpbHRlcmVkSW5wdXQkLnBpcGUoZmlsdGVyKGV2ZW50ID0+ICFldmVudC5vcGVuKSwgZGVsYXlPck5vb3AoY2xvc2VEZWxheSkpO1xuICAgIHJldHVybiBtZXJnZShkZWxheWVkT3BlbiQsIGRlbGF5ZWRDbG9zZSQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgaWYgKGV2ZW50ID09PSBwZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcGVuZGluZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50Lm9wZW4gIT09IGlzT3BlbmVkRm4oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hcChldmVudCA9PiBldmVudC5vcGVuKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub1RyaWdnZXJzKFxuICAgIHJlbmRlcmVyOiBhbnksIG5hdGl2ZUVsZW1lbnQ6IGFueSwgdHJpZ2dlcnM6IHN0cmluZywgaXNPcGVuZWRGbjogKCkgPT4gYm9vbGVhbiwgb3BlbkZuLCBjbG9zZUZuLCBvcGVuRGVsYXkgPSAwLFxuICAgIGNsb3NlRGVsYXkgPSAwKSB7XG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gcGFyc2VUcmlnZ2Vycyh0cmlnZ2Vycyk7XG5cbiAgaWYgKHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vyc1swXS5pc01hbnVhbCgpKSB7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9XG5cbiAgY29uc3Qgc3Vic2NyaXB0aW9uID0gb2JzZXJ2ZVRyaWdnZXJzKHJlbmRlcmVyLCBuYXRpdmVFbGVtZW50LCBwYXJzZWRUcmlnZ2VycywgaXNPcGVuZWRGbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waXBlKHRyaWdnZXJEZWxheShvcGVuRGVsYXksIGNsb3NlRGVsYXksIGlzT3BlbmVkRm4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShvcGVuID0+IChvcGVuID8gb3BlbkZuKCkgOiBjbG9zZUZuKCkpKTtcblxuICByZXR1cm4gKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG59XG4iXX0=