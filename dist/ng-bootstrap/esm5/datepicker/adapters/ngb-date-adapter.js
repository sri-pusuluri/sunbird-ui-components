/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { isInteger } from '../../util/util';
import * as i0 from "@angular/core";
/**
 * @return {?}
 */
export function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
    return new NgbDateStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal datepicker `NgbDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgbDateStruct` as a user model.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details
 * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
 * @abstract
 * @template D
 */
var NgbDateAdapter = /** @class */ (function () {
    function NgbDateAdapter() {
    }
    NgbDateAdapter.decorators = [
        { type: Injectable, args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY },] }
    ];
    /** @nocollapse */ NgbDateAdapter.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY, token: NgbDateAdapter, providedIn: "root" });
    return NgbDateAdapter;
}());
export { NgbDateAdapter };
if (false) {
    /**
     * Converts a user-model date of type `D` to an `NgbDateStruct` for internal use.
     * @abstract
     * @param {?} value
     * @return {?}
     */
    NgbDateAdapter.prototype.fromModel = function (value) { };
    /**
     * Converts an internal `NgbDateStruct` date to a user-model date of type `D`.
     * @abstract
     * @param {?} date
     * @return {?}
     */
    NgbDateAdapter.prototype.toModel = function (date) { };
}
var NgbDateStructAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(NgbDateStructAdapter, _super);
    function NgbDateStructAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param {?} date
     * @return {?}
     */
    NgbDateStructAdapter.prototype.fromModel = /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
            { year: date.year, month: date.month, day: date.day } :
            null;
    };
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param {?} date
     * @return {?}
     */
    NgbDateStructAdapter.prototype.toModel = /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
            { year: date.year, month: date.month, day: date.day } :
            null;
    };
    NgbDateStructAdapter.decorators = [
        { type: Injectable }
    ];
    return NgbDateStructAdapter;
}(NgbDateAdapter));
export { NgbDateStructAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdW5iaXJkLWVkL3N1bmJpcmQtdWktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIvYWRhcHRlcnMvbmdiLWRhdGUtYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUUxQyxNQUFNLFVBQVUsbUNBQW1DO0lBQ2pELE9BQU8sSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0FBQ3BDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWNEO0lBQUE7S0FXQzs7Z0JBWEEsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsbUNBQW1DLEVBQUM7Ozt5QkFwQmpGO0NBK0JDLEFBWEQsSUFXQztTQVZxQixjQUFjOzs7Ozs7OztJQUlsQywwREFBNEM7Ozs7Ozs7SUFLNUMsdURBQXlDOztBQUczQztJQUMwQyxnREFBNkI7SUFEdkU7O0lBbUJBLENBQUM7SUFqQkM7O09BRUc7Ozs7OztJQUNILHdDQUFTOzs7OztJQUFULFVBQVUsSUFBbUI7UUFDM0IsT0FBTyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkYsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDO0lBQ1gsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxzQ0FBTzs7Ozs7SUFBUCxVQUFRLElBQW1CO1FBQ3pCLE9BQU8sQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25GLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQztJQUNYLENBQUM7O2dCQWxCRixVQUFVOztJQW1CWCwyQkFBQztDQUFBLEFBbkJELENBQzBDLGNBQWMsR0FrQnZEO1NBbEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nYkRhdGVTdHJ1Y3R9IGZyb20gJy4uL25nYi1kYXRlLXN0cnVjdCc7XG5pbXBvcnQge2lzSW50ZWdlcn0gZnJvbSAnLi4vLi4vdXRpbC91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIE5HQl9EQVRFUElDS0VSX0RBVEVfQURBUFRFUl9GQUNUT1JZKCkge1xuICByZXR1cm4gbmV3IE5nYkRhdGVTdHJ1Y3RBZGFwdGVyKCk7XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3Qgc2VydmljZSB0aGF0IGRvZXMgdGhlIGNvbnZlcnNpb24gYmV0d2VlbiB0aGUgaW50ZXJuYWwgZGF0ZXBpY2tlciBgTmdiRGF0ZVN0cnVjdGAgbW9kZWwgYW5kXG4gKiBhbnkgcHJvdmlkZWQgdXNlciBkYXRlIG1vZGVsIGBEYCwgZXguIGEgc3RyaW5nLCBhIG5hdGl2ZSBkYXRlLCBldGMuXG4gKlxuICogVGhlIGFkYXB0ZXIgaXMgdXNlZCAqKm9ubHkqKiBmb3IgY29udmVyc2lvbiB3aGVuIGJpbmRpbmcgZGF0ZXBpY2tlciB0byBhIGZvcm0gY29udHJvbCxcbiAqIGV4LiBgWyhuZ01vZGVsKV09XCJ1c2VyRGF0ZU1vZGVsXCJgLiBIZXJlIGB1c2VyRGF0ZU1vZGVsYCBjYW4gYmUgb2YgYW55IHR5cGUuXG4gKlxuICogVGhlIGRlZmF1bHQgZGF0ZXBpY2tlciBpbXBsZW1lbnRhdGlvbiBhc3N1bWVzIHdlIHVzZSBgTmdiRGF0ZVN0cnVjdGAgYXMgYSB1c2VyIG1vZGVsLlxuICpcbiAqIFNlZSB0aGUgW2RhdGUgZm9ybWF0IG92ZXJ2aWV3XSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9vdmVydmlldyNkYXRlLW1vZGVsKSBmb3IgbW9yZSBkZXRhaWxzXG4gKiBhbmQgdGhlIFtjdXN0b20gYWRhcHRlciBkZW1vXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9leGFtcGxlcyNhZGFwdGVyKSBmb3IgYW4gZXhhbXBsZS5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290JywgdXNlRmFjdG9yeTogTkdCX0RBVEVQSUNLRVJfREFURV9BREFQVEVSX0ZBQ1RPUll9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nYkRhdGVBZGFwdGVyPEQ+IHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgdXNlci1tb2RlbCBkYXRlIG9mIHR5cGUgYERgIHRvIGFuIGBOZ2JEYXRlU3RydWN0YCBmb3IgaW50ZXJuYWwgdXNlLlxuICAgKi9cbiAgYWJzdHJhY3QgZnJvbU1vZGVsKHZhbHVlOiBEKTogTmdiRGF0ZVN0cnVjdDtcblxuICAvKipcbiAgICogQ29udmVydHMgYW4gaW50ZXJuYWwgYE5nYkRhdGVTdHJ1Y3RgIGRhdGUgdG8gYSB1c2VyLW1vZGVsIGRhdGUgb2YgdHlwZSBgRGAuXG4gICAqL1xuICBhYnN0cmFjdCB0b01vZGVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBEO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmdiRGF0ZVN0cnVjdEFkYXB0ZXIgZXh0ZW5kcyBOZ2JEYXRlQWRhcHRlcjxOZ2JEYXRlU3RydWN0PiB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIE5nYkRhdGVTdHJ1Y3QgdmFsdWUgaW50byBOZ2JEYXRlU3RydWN0IHZhbHVlXG4gICAqL1xuICBmcm9tTW9kZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IE5nYkRhdGVTdHJ1Y3Qge1xuICAgIHJldHVybiAoZGF0ZSAmJiBpc0ludGVnZXIoZGF0ZS55ZWFyKSAmJiBpc0ludGVnZXIoZGF0ZS5tb250aCkgJiYgaXNJbnRlZ2VyKGRhdGUuZGF5KSkgP1xuICAgICAgICB7eWVhcjogZGF0ZS55ZWFyLCBtb250aDogZGF0ZS5tb250aCwgZGF5OiBkYXRlLmRheX0gOlxuICAgICAgICBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgTmdiRGF0ZVN0cnVjdCB2YWx1ZSBpbnRvIE5nYkRhdGVTdHJ1Y3QgdmFsdWVcbiAgICovXG4gIHRvTW9kZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IE5nYkRhdGVTdHJ1Y3Qge1xuICAgIHJldHVybiAoZGF0ZSAmJiBpc0ludGVnZXIoZGF0ZS55ZWFyKSAmJiBpc0ludGVnZXIoZGF0ZS5tb250aCkgJiYgaXNJbnRlZ2VyKGRhdGUuZGF5KSkgP1xuICAgICAgICB7eWVhcjogZGF0ZS55ZWFyLCBtb250aDogZGF0ZS5tb250aCwgZGF5OiBkYXRlLmRheX0gOlxuICAgICAgICBudWxsO1xuICB9XG59XG4iXX0=