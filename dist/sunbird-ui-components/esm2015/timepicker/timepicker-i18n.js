/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { FormStyle, getLocaleDayPeriods, TranslationWidth } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * @param {?} locale
 * @return {?}
 */
export function NGB_TIMEPICKER_I18N_FACTORY(locale) {
    return new NgbTimepickerI18nDefault(locale);
}
/**
 * Type of the service supplying day periods (for example, 'AM' and 'PM') to NgbTimepicker component.
 * The default implementation of this service honors the Angular locale, and uses the registered locale data,
 * as explained in the Angular i18n guide.
 * @abstract
 */
export class NgbTimepickerI18n {
}
NgbTimepickerI18n.decorators = [
    { type: Injectable, args: [{ providedIn: 'root', useFactory: NGB_TIMEPICKER_I18N_FACTORY, deps: [LOCALE_ID] },] }
];
/** @nocollapse */ NgbTimepickerI18n.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbTimepickerI18n_Factory() { return NGB_TIMEPICKER_I18N_FACTORY(i0.ɵɵinject(i0.LOCALE_ID)); }, token: NgbTimepickerI18n, providedIn: "root" });
if (false) {
    /**
     * Returns the name for the period before midday.
     * @abstract
     * @return {?}
     */
    NgbTimepickerI18n.prototype.getMorningPeriod = function () { };
    /**
     * Returns the name for the period after midday.
     * @abstract
     * @return {?}
     */
    NgbTimepickerI18n.prototype.getAfternoonPeriod = function () { };
}
export class NgbTimepickerI18nDefault extends NgbTimepickerI18n {
    /**
     * @param {?} locale
     */
    constructor(locale) {
        super();
        this._periods = getLocaleDayPeriods(locale, FormStyle.Standalone, TranslationWidth.Narrow);
    }
    /**
     * @return {?}
     */
    getMorningPeriod() { return this._periods[0]; }
    /**
     * @return {?}
     */
    getAfternoonPeriod() { return this._periods[1]; }
}
NgbTimepickerI18nDefault.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgbTimepickerI18nDefault.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbTimepickerI18nDefault.prototype._periods;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1pMThuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1bmJpcmQtZWQvc3VuYmlyZC11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsidGltZXBpY2tlci90aW1lcGlja2VyLWkxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsU0FBUyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQUVqRixNQUFNLFVBQVUsMkJBQTJCLENBQUMsTUFBTTtJQUNoRCxPQUFPLElBQUksd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUMsQ0FBQzs7Ozs7OztBQVFELE1BQU0sT0FBZ0IsaUJBQWlCOzs7WUFEdEMsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUM7Ozs7Ozs7OztJQUsxRiwrREFBb0M7Ozs7OztJQUtwQyxpRUFBc0M7O0FBSXhDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxpQkFBaUI7Ozs7SUFHN0QsWUFBK0IsTUFBYztRQUMzQyxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7OztJQUVELGdCQUFnQixLQUFhLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7SUFFdkQsa0JBQWtCLEtBQWEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1lBWjFELFVBQVU7Ozs7eUNBSUksTUFBTSxTQUFDLFNBQVM7Ozs7Ozs7SUFGN0IsNENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIExPQ0FMRV9JRH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1TdHlsZSwgZ2V0TG9jYWxlRGF5UGVyaW9kcywgVHJhbnNsYXRpb25XaWR0aH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIE5HQl9USU1FUElDS0VSX0kxOE5fRkFDVE9SWShsb2NhbGUpIHtcbiAgcmV0dXJuIG5ldyBOZ2JUaW1lcGlja2VySTE4bkRlZmF1bHQobG9jYWxlKTtcbn1cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBzZXJ2aWNlIHN1cHBseWluZyBkYXkgcGVyaW9kcyAoZm9yIGV4YW1wbGUsICdBTScgYW5kICdQTScpIHRvIE5nYlRpbWVwaWNrZXIgY29tcG9uZW50LlxuICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBzZXJ2aWNlIGhvbm9ycyB0aGUgQW5ndWxhciBsb2NhbGUsIGFuZCB1c2VzIHRoZSByZWdpc3RlcmVkIGxvY2FsZSBkYXRhLFxuICogYXMgZXhwbGFpbmVkIGluIHRoZSBBbmd1bGFyIGkxOG4gZ3VpZGUuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCcsIHVzZUZhY3Rvcnk6IE5HQl9USU1FUElDS0VSX0kxOE5fRkFDVE9SWSwgZGVwczogW0xPQ0FMRV9JRF19KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nYlRpbWVwaWNrZXJJMThuIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5hbWUgZm9yIHRoZSBwZXJpb2QgYmVmb3JlIG1pZGRheS5cbiAgICovXG4gIGFic3RyYWN0IGdldE1vcm5pbmdQZXJpb2QoKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuYW1lIGZvciB0aGUgcGVyaW9kIGFmdGVyIG1pZGRheS5cbiAgICovXG4gIGFic3RyYWN0IGdldEFmdGVybm9vblBlcmlvZCgpOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ2JUaW1lcGlja2VySTE4bkRlZmF1bHQgZXh0ZW5kcyBOZ2JUaW1lcGlja2VySTE4biB7XG4gIHByaXZhdGUgX3BlcmlvZHM6IFtzdHJpbmcsIHN0cmluZ107XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX3BlcmlvZHMgPSBnZXRMb2NhbGVEYXlQZXJpb2RzKGxvY2FsZSwgRm9ybVN0eWxlLlN0YW5kYWxvbmUsIFRyYW5zbGF0aW9uV2lkdGguTmFycm93KTtcbiAgfVxuXG4gIGdldE1vcm5pbmdQZXJpb2QoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3BlcmlvZHNbMF07IH1cblxuICBnZXRBZnRlcm5vb25QZXJpb2QoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3BlcmlvZHNbMV07IH1cbn1cbiJdfQ==