/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { isInteger } from '../util/util';
import * as i0 from "@angular/core";
/**
 * @return {?}
 */
export function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
    return new NgbTimeStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
 * any provided user time model `T`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding timepicker to a form control,
 * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
 *
 * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
 *
 * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
 *
 * \@since 2.2.0
 * @abstract
 * @template T
 */
export class NgbTimeAdapter {
}
NgbTimeAdapter.decorators = [
    { type: Injectable, args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY },] }
];
/** @nocollapse */ NgbTimeAdapter.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY, token: NgbTimeAdapter, providedIn: "root" });
if (false) {
    /**
     * Converts a user-model time of type `T` to an `NgbTimeStruct` for internal use.
     * @abstract
     * @param {?} value
     * @return {?}
     */
    NgbTimeAdapter.prototype.fromModel = function (value) { };
    /**
     * Converts an internal `NgbTimeStruct` time to a user-model time of type `T`.
     * @abstract
     * @param {?} time
     * @return {?}
     */
    NgbTimeAdapter.prototype.toModel = function (time) { };
}
export class NgbTimeStructAdapter extends NgbTimeAdapter {
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     * @param {?} time
     * @return {?}
     */
    fromModel(time) {
        return (time && isInteger(time.hour) && isInteger(time.minute)) ?
            { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
            null;
    }
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     * @param {?} time
     * @return {?}
     */
    toModel(time) {
        return (time && isInteger(time.hour) && isInteger(time.minute)) ?
            { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
            null;
    }
}
NgbTimeStructAdapter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRpbWUtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdW5iaXJkLWVkL3N1bmJpcmQtdWktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInRpbWVwaWNrZXIvbmdiLXRpbWUtYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7OztBQUV2QyxNQUFNLFVBQVUsbUNBQW1DO0lBQ2pELE9BQU8sSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0FBQ3BDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkQsTUFBTSxPQUFnQixjQUFjOzs7WUFEbkMsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsbUNBQW1DLEVBQUM7Ozs7Ozs7Ozs7SUFLL0UsMERBQTRDOzs7Ozs7O0lBSzVDLHVEQUF5Qzs7QUFJM0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGNBQTZCOzs7Ozs7SUFJckUsU0FBUyxDQUFDLElBQW1CO1FBQzNCLE9BQU8sQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQztJQUNYLENBQUM7Ozs7OztJQUtELE9BQU8sQ0FBQyxJQUFtQjtRQUN6QixPQUFPLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUM7SUFDWCxDQUFDOzs7WUFsQkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nYlRpbWVTdHJ1Y3R9IGZyb20gJy4vbmdiLXRpbWUtc3RydWN0JztcbmltcG9ydCB7aXNJbnRlZ2VyfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gTkdCX0RBVEVQSUNLRVJfVElNRV9BREFQVEVSX0ZBQ1RPUlkoKSB7XG4gIHJldHVybiBuZXcgTmdiVGltZVN0cnVjdEFkYXB0ZXIoKTtcbn1cblxuLyoqXG4gKiBBbiBhYnN0cmFjdCBzZXJ2aWNlIHRoYXQgZG9lcyB0aGUgY29udmVyc2lvbiBiZXR3ZWVuIHRoZSBpbnRlcm5hbCB0aW1lcGlja2VyIGBOZ2JUaW1lU3RydWN0YCBtb2RlbCBhbmRcbiAqIGFueSBwcm92aWRlZCB1c2VyIHRpbWUgbW9kZWwgYFRgLCBleC4gYSBzdHJpbmcsIGEgbmF0aXZlIGRhdGUsIGV0Yy5cbiAqXG4gKiBUaGUgYWRhcHRlciBpcyB1c2VkICoqb25seSoqIGZvciBjb252ZXJzaW9uIHdoZW4gYmluZGluZyB0aW1lcGlja2VyIHRvIGEgZm9ybSBjb250cm9sLFxuICogZXguIGBbKG5nTW9kZWwpXT1cInVzZXJUaW1lTW9kZWxcImAuIEhlcmUgYHVzZXJUaW1lTW9kZWxgIGNhbiBiZSBvZiBhbnkgdHlwZS5cbiAqXG4gKiBUaGUgZGVmYXVsdCB0aW1lcGlja2VyIGltcGxlbWVudGF0aW9uIGFzc3VtZXMgd2UgdXNlIGBOZ2JUaW1lU3RydWN0YCBhcyBhIHVzZXIgbW9kZWwuXG4gKlxuICogU2VlIHRoZSBbY3VzdG9tIHRpbWUgYWRhcHRlciBkZW1vXSgjL2NvbXBvbmVudHMvdGltZXBpY2tlci9leGFtcGxlcyNhZGFwdGVyKSBmb3IgYW4gZXhhbXBsZS5cbiAqXG4gKiBAc2luY2UgMi4yLjBcbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290JywgdXNlRmFjdG9yeTogTkdCX0RBVEVQSUNLRVJfVElNRV9BREFQVEVSX0ZBQ1RPUll9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nYlRpbWVBZGFwdGVyPFQ+IHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgdXNlci1tb2RlbCB0aW1lIG9mIHR5cGUgYFRgIHRvIGFuIGBOZ2JUaW1lU3RydWN0YCBmb3IgaW50ZXJuYWwgdXNlLlxuICAgKi9cbiAgYWJzdHJhY3QgZnJvbU1vZGVsKHZhbHVlOiBUKTogTmdiVGltZVN0cnVjdDtcblxuICAvKipcbiAgICogQ29udmVydHMgYW4gaW50ZXJuYWwgYE5nYlRpbWVTdHJ1Y3RgIHRpbWUgdG8gYSB1c2VyLW1vZGVsIHRpbWUgb2YgdHlwZSBgVGAuXG4gICAqL1xuICBhYnN0cmFjdCB0b01vZGVsKHRpbWU6IE5nYlRpbWVTdHJ1Y3QpOiBUO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmdiVGltZVN0cnVjdEFkYXB0ZXIgZXh0ZW5kcyBOZ2JUaW1lQWRhcHRlcjxOZ2JUaW1lU3RydWN0PiB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIE5nYlRpbWVTdHJ1Y3QgdmFsdWUgaW50byBOZ2JUaW1lU3RydWN0IHZhbHVlXG4gICAqL1xuICBmcm9tTW9kZWwodGltZTogTmdiVGltZVN0cnVjdCk6IE5nYlRpbWVTdHJ1Y3Qge1xuICAgIHJldHVybiAodGltZSAmJiBpc0ludGVnZXIodGltZS5ob3VyKSAmJiBpc0ludGVnZXIodGltZS5taW51dGUpKSA/XG4gICAgICAgIHtob3VyOiB0aW1lLmhvdXIsIG1pbnV0ZTogdGltZS5taW51dGUsIHNlY29uZDogaXNJbnRlZ2VyKHRpbWUuc2Vjb25kKSA/IHRpbWUuc2Vjb25kIDogbnVsbH0gOlxuICAgICAgICBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgTmdiVGltZVN0cnVjdCB2YWx1ZSBpbnRvIE5nYlRpbWVTdHJ1Y3QgdmFsdWVcbiAgICovXG4gIHRvTW9kZWwodGltZTogTmdiVGltZVN0cnVjdCk6IE5nYlRpbWVTdHJ1Y3Qge1xuICAgIHJldHVybiAodGltZSAmJiBpc0ludGVnZXIodGltZS5ob3VyKSAmJiBpc0ludGVnZXIodGltZS5taW51dGUpKSA/XG4gICAgICAgIHtob3VyOiB0aW1lLmhvdXIsIG1pbnV0ZTogdGltZS5taW51dGUsIHNlY29uZDogaXNJbnRlZ2VyKHRpbWUuc2Vjb25kKSA/IHRpbWUuc2Vjb25kIDogbnVsbH0gOlxuICAgICAgICBudWxsO1xuICB9XG59XG4iXX0=