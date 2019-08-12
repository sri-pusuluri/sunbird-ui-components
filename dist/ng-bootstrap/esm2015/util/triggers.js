/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable, merge } from 'rxjs';
import { share, filter, delay, map } from 'rxjs/operators';
export class Trigger {
    /**
     * @param {?} open
     * @param {?=} close
     */
    constructor(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    /**
     * @return {?}
     */
    isManual() { return this.open === 'manual' || this.close === 'manual'; }
}
if (false) {
    /** @type {?} */
    Trigger.prototype.open;
    /** @type {?} */
    Trigger.prototype.close;
}
/** @type {?} */
const DEFAULT_ALIASES = {
    'hover': ['mouseenter', 'mouseleave'],
    'focus': ['focusin', 'focusout'],
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
export function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
    /** @type {?} */
    const trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    const parsedTriggers = trimmedTriggers.split(/\s+/).map((/**
     * @param {?} trigger
     * @return {?}
     */
    trigger => trigger.split(':'))).map((/**
     * @param {?} triggerPair
     * @return {?}
     */
    (triggerPair) => {
        /** @type {?} */
        let alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    }));
    /** @type {?} */
    const manualTriggers = parsedTriggers.filter((/**
     * @param {?} triggerPair
     * @return {?}
     */
    triggerPair => triggerPair.isManual()));
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
    subscriber => {
        /** @type {?} */
        const listeners = [];
        /** @type {?} */
        const openFn = (/**
         * @return {?}
         */
        () => subscriber.next(true));
        /** @type {?} */
        const closeFn = (/**
         * @return {?}
         */
        () => subscriber.next(false));
        /** @type {?} */
        const toggleFn = (/**
         * @return {?}
         */
        () => subscriber.next(!isOpenedFn()));
        triggers.forEach((/**
         * @param {?} trigger
         * @return {?}
         */
        (trigger) => {
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
        () => { listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        unsubscribeFn => unsubscribeFn())); });
    }));
}
/** @type {?} */
const delayOrNoop = (/**
 * @template T
 * @param {?} time
 * @return {?}
 */
(time) => time > 0 ? delay(time) : (/**
 * @param {?} a
 * @return {?}
 */
(a) => a));
const ɵ0 = delayOrNoop;
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
    (input$) => {
        /** @type {?} */
        let pending = null;
        /** @type {?} */
        const filteredInput$ = input$.pipe(map((/**
         * @param {?} open
         * @return {?}
         */
        open => ({ open }))), filter((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            /** @type {?} */
            const currentlyOpen = isOpenedFn();
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
        const delayedOpen$ = filteredInput$.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event.open)), delayOrNoop(openDelay));
        /** @type {?} */
        const delayedClose$ = filteredInput$.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => !event.open)), delayOrNoop(closeDelay));
        return merge(delayedOpen$, delayedClose$)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event === pending) {
                pending = null;
                return event.open !== isOpenedFn();
            }
            return false;
        })), map((/**
         * @param {?} event
         * @return {?}
         */
        event => event.open)));
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
export function listenToTriggers(renderer, nativeElement, triggers, isOpenedFn, openFn, closeFn, openDelay = 0, closeDelay = 0) {
    /** @type {?} */
    const parsedTriggers = parseTriggers(triggers);
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return (/**
         * @return {?}
         */
        () => { });
    }
    /** @type {?} */
    const subscription = observeTriggers(renderer, nativeElement, parsedTriggers, isOpenedFn)
        .pipe(triggerDelay(openDelay, closeDelay, isOpenedFn))
        .subscribe((/**
     * @param {?} open
     * @return {?}
     */
    open => (open ? openFn() : closeFn())));
    return (/**
     * @return {?}
     */
    () => subscription.unsubscribe());
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJ1dGlsL3RyaWdnZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFFLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsTUFBTSxPQUFPLE9BQU87Ozs7O0lBQ2xCLFlBQW1CLElBQVksRUFBUyxLQUFjO1FBQW5DLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ3BELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Q0FDekU7OztJQVBhLHVCQUFtQjs7SUFBRSx3QkFBcUI7OztNQVNsRCxlQUFlLEdBQUc7SUFDdEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztJQUNyQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO0NBQ2pDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLFFBQWdCLEVBQUUsT0FBTyxHQUFHLGVBQWU7O1VBQ2pFLGVBQWUsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7SUFFL0MsSUFBSSxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNoQyxPQUFPLEVBQUUsQ0FBQztLQUNYOztVQUVLLGNBQWMsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEtB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SUFBSSxFQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDLEVBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzVCLFFBQWEsRUFBRSxhQUFrQixFQUFFLFFBQWdCLEVBQUUsVUFBeUIsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsR0FBRyxDQUFDLEVBQzlHLFVBQVUsR0FBRyxDQUFDOztVQUNWLGNBQWMsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBRTlDLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQy9EOzs7UUFBTyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7S0FDakI7O1VBRUssWUFBWSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxVQUFVLENBQUM7U0FDL0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3JELFNBQVM7Ozs7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBQztJQUUxRTs7O0lBQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUFDO0FBQzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIG1lcmdlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7c2hhcmUsIGZpbHRlciwgZGVsYXksIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgVHJpZ2dlciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcGVuOiBzdHJpbmcsIHB1YmxpYyBjbG9zZT86IHN0cmluZykge1xuICAgIGlmICghY2xvc2UpIHtcbiAgICAgIHRoaXMuY2xvc2UgPSBvcGVuO1xuICAgIH1cbiAgfVxuXG4gIGlzTWFudWFsKCkgeyByZXR1cm4gdGhpcy5vcGVuID09PSAnbWFudWFsJyB8fCB0aGlzLmNsb3NlID09PSAnbWFudWFsJzsgfVxufVxuXG5jb25zdCBERUZBVUxUX0FMSUFTRVMgPSB7XG4gICdob3Zlcic6IFsnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ10sXG4gICdmb2N1cyc6IFsnZm9jdXNpbicsICdmb2N1c291dCddLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJpZ2dlcnModHJpZ2dlcnM6IHN0cmluZywgYWxpYXNlcyA9IERFRkFVTFRfQUxJQVNFUyk6IFRyaWdnZXJbXSB7XG4gIGNvbnN0IHRyaW1tZWRUcmlnZ2VycyA9ICh0cmlnZ2VycyB8fCAnJykudHJpbSgpO1xuXG4gIGlmICh0cmltbWVkVHJpZ2dlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSB0cmltbWVkVHJpZ2dlcnMuc3BsaXQoL1xccysvKS5tYXAodHJpZ2dlciA9PiB0cmlnZ2VyLnNwbGl0KCc6JykpLm1hcCgodHJpZ2dlclBhaXIpID0+IHtcbiAgICBsZXQgYWxpYXMgPSBhbGlhc2VzW3RyaWdnZXJQYWlyWzBdXSB8fCB0cmlnZ2VyUGFpcjtcbiAgICByZXR1cm4gbmV3IFRyaWdnZXIoYWxpYXNbMF0sIGFsaWFzWzFdKTtcbiAgfSk7XG5cbiAgY29uc3QgbWFudWFsVHJpZ2dlcnMgPSBwYXJzZWRUcmlnZ2Vycy5maWx0ZXIodHJpZ2dlclBhaXIgPT4gdHJpZ2dlclBhaXIuaXNNYW51YWwoKSk7XG5cbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyAnVHJpZ2dlcnMgcGFyc2UgZXJyb3I6IG9ubHkgb25lIG1hbnVhbCB0cmlnZ2VyIGlzIGFsbG93ZWQnO1xuICB9XG5cbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBtYW51YWwgdHJpZ2dlciBjYW5cXCd0IGJlIG1peGVkIHdpdGggb3RoZXIgdHJpZ2dlcnMnO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFRyaWdnZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZVRyaWdnZXJzKHJlbmRlcmVyOiBhbnksIG5hdGl2ZUVsZW1lbnQ6IGFueSwgdHJpZ2dlcnM6IFRyaWdnZXJbXSwgaXNPcGVuZWRGbjogKCkgPT4gYm9vbGVhbikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8Ym9vbGVhbj4oc3Vic2NyaWJlciA9PiB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gW107XG4gICAgY29uc3Qgb3BlbkZuID0gKCkgPT4gc3Vic2NyaWJlci5uZXh0KHRydWUpO1xuICAgIGNvbnN0IGNsb3NlRm4gPSAoKSA9PiBzdWJzY3JpYmVyLm5leHQoZmFsc2UpO1xuICAgIGNvbnN0IHRvZ2dsZUZuID0gKCkgPT4gc3Vic2NyaWJlci5uZXh0KCFpc09wZW5lZEZuKCkpO1xuXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogVHJpZ2dlcikgPT4ge1xuICAgICAgaWYgKHRyaWdnZXIub3BlbiA9PT0gdHJpZ2dlci5jbG9zZSkge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChyZW5kZXJlci5saXN0ZW4obmF0aXZlRWxlbWVudCwgdHJpZ2dlci5vcGVuLCB0b2dnbGVGbikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2goXG4gICAgICAgICAgICByZW5kZXJlci5saXN0ZW4obmF0aXZlRWxlbWVudCwgdHJpZ2dlci5vcGVuLCBvcGVuRm4pLFxuICAgICAgICAgICAgcmVuZGVyZXIubGlzdGVuKG5hdGl2ZUVsZW1lbnQsIHRyaWdnZXIuY2xvc2UsIGNsb3NlRm4pKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7IGxpc3RlbmVycy5mb3JFYWNoKHVuc3Vic2NyaWJlRm4gPT4gdW5zdWJzY3JpYmVGbigpKTsgfTtcbiAgfSk7XG59XG5cbmNvbnN0IGRlbGF5T3JOb29wID0gPFQ+KHRpbWU6IG51bWJlcikgPT4gdGltZSA+IDAgPyBkZWxheTxUPih0aW1lKSA6IChhOiBPYnNlcnZhYmxlPFQ+KSA9PiBhO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlckRlbGF5KG9wZW5EZWxheTogbnVtYmVyLCBjbG9zZURlbGF5OiBudW1iZXIsIGlzT3BlbmVkRm46ICgpID0+IGJvb2xlYW4pIHtcbiAgcmV0dXJuIChpbnB1dCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4pID0+IHtcbiAgICBsZXQgcGVuZGluZyA9IG51bGw7XG4gICAgY29uc3QgZmlsdGVyZWRJbnB1dCQgPSBpbnB1dCQucGlwZShcbiAgICAgICAgbWFwKG9wZW4gPT4gKHtvcGVufSkpLCBmaWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRseU9wZW4gPSBpc09wZW5lZEZuKCk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRseU9wZW4gIT09IGV2ZW50Lm9wZW4gJiYgKCFwZW5kaW5nIHx8IHBlbmRpbmcub3BlbiA9PT0gY3VycmVudGx5T3BlbikpIHtcbiAgICAgICAgICAgIHBlbmRpbmcgPSBldmVudDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGVuZGluZyAmJiBwZW5kaW5nLm9wZW4gIT09IGV2ZW50Lm9wZW4pIHtcbiAgICAgICAgICAgIHBlbmRpbmcgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLFxuICAgICAgICBzaGFyZSgpKTtcbiAgICBjb25zdCBkZWxheWVkT3BlbiQgPSBmaWx0ZXJlZElucHV0JC5waXBlKGZpbHRlcihldmVudCA9PiBldmVudC5vcGVuKSwgZGVsYXlPck5vb3Aob3BlbkRlbGF5KSk7XG4gICAgY29uc3QgZGVsYXllZENsb3NlJCA9IGZpbHRlcmVkSW5wdXQkLnBpcGUoZmlsdGVyKGV2ZW50ID0+ICFldmVudC5vcGVuKSwgZGVsYXlPck5vb3AoY2xvc2VEZWxheSkpO1xuICAgIHJldHVybiBtZXJnZShkZWxheWVkT3BlbiQsIGRlbGF5ZWRDbG9zZSQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgaWYgKGV2ZW50ID09PSBwZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcGVuZGluZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50Lm9wZW4gIT09IGlzT3BlbmVkRm4oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hcChldmVudCA9PiBldmVudC5vcGVuKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub1RyaWdnZXJzKFxuICAgIHJlbmRlcmVyOiBhbnksIG5hdGl2ZUVsZW1lbnQ6IGFueSwgdHJpZ2dlcnM6IHN0cmluZywgaXNPcGVuZWRGbjogKCkgPT4gYm9vbGVhbiwgb3BlbkZuLCBjbG9zZUZuLCBvcGVuRGVsYXkgPSAwLFxuICAgIGNsb3NlRGVsYXkgPSAwKSB7XG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gcGFyc2VUcmlnZ2Vycyh0cmlnZ2Vycyk7XG5cbiAgaWYgKHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vyc1swXS5pc01hbnVhbCgpKSB7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9XG5cbiAgY29uc3Qgc3Vic2NyaXB0aW9uID0gb2JzZXJ2ZVRyaWdnZXJzKHJlbmRlcmVyLCBuYXRpdmVFbGVtZW50LCBwYXJzZWRUcmlnZ2VycywgaXNPcGVuZWRGbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waXBlKHRyaWdnZXJEZWxheShvcGVuRGVsYXksIGNsb3NlRGVsYXksIGlzT3BlbmVkRm4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShvcGVuID0+IChvcGVuID8gb3BlbkZuKCkgOiBjbG9zZUZuKCkpKTtcblxuICByZXR1cm4gKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG59XG4iXX0=