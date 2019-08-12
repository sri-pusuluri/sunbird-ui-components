/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { FormStyle, getLocaleDayNames, getLocaleMonthNames, TranslationWidth, formatDate } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * @param {?} locale
 * @return {?}
 */
export function NGB_DATEPICKER_18N_FACTORY(locale) {
    return new NgbDatepickerI18nDefault(locale);
}
/**
 * A service supplying i18n data to the datepicker component.
 *
 * The default implementation of this service uses the Angular locale and registered locale data for
 * weekdays and month names (as explained in the Angular i18n guide).
 *
 * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
 * numerals. For other static labels the datepicker uses the default Angular i18n.
 *
 * See the [i18n demo](#/components/datepicker/examples#i18n) and
 * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
 * a custom provider for i18n.
 * @abstract
 */
export class NgbDatepickerI18n {
    /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * \@since 3.0.0
     * @param {?} date
     * @return {?}
     */
    getDayNumerals(date) { return `${date.day}`; }
    /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * \@since 3.0.0
     * @param {?} weekNumber
     * @return {?}
     */
    getWeekNumerals(weekNumber) { return `${weekNumber}`; }
    /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * \@since 3.0.0
     * @param {?} year
     * @return {?}
     */
    getYearNumerals(year) { return `${year}`; }
}
NgbDatepickerI18n.decorators = [
    { type: Injectable, args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_18N_FACTORY, deps: [LOCALE_ID] },] }
];
/** @nocollapse */ NgbDatepickerI18n.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbDatepickerI18n_Factory() { return NGB_DATEPICKER_18N_FACTORY(i0.ɵɵinject(i0.LOCALE_ID)); }, token: NgbDatepickerI18n, providedIn: "root" });
if (false) {
    /**
     * Returns the short weekday name to display in the heading of the month view.
     *
     * With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun.
     * @abstract
     * @param {?} weekday
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getWeekdayShortName = function (weekday) { };
    /**
     * Returns the short month name to display in the date picker navigation.
     *
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * @abstract
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getMonthShortName = function (month, year) { };
    /**
     * Returns the full month name to display in the date picker navigation.
     *
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * @abstract
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getMonthFullName = function (month, year) { };
    /**
     * Returns the value of the `aria-label` attribute for a specific date.
     *
     * \@since 2.0.0
     * @abstract
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getDayAriaLabel = function (date) { };
}
export class NgbDatepickerI18nDefault extends NgbDatepickerI18n {
    /**
     * @param {?} _locale
     */
    constructor(_locale) {
        super();
        this._locale = _locale;
        /** @type {?} */
        const weekdaysStartingOnSunday = getLocaleDayNames(_locale, FormStyle.Standalone, TranslationWidth.Short);
        this._weekdaysShort = weekdaysStartingOnSunday.map((/**
         * @param {?} day
         * @param {?} index
         * @return {?}
         */
        (day, index) => weekdaysStartingOnSunday[(index + 1) % 7]));
        this._monthsShort = getLocaleMonthNames(_locale, FormStyle.Standalone, TranslationWidth.Abbreviated);
        this._monthsFull = getLocaleMonthNames(_locale, FormStyle.Standalone, TranslationWidth.Wide);
    }
    /**
     * @param {?} weekday
     * @return {?}
     */
    getWeekdayShortName(weekday) { return this._weekdaysShort[weekday - 1]; }
    /**
     * @param {?} month
     * @return {?}
     */
    getMonthShortName(month) { return this._monthsShort[month - 1]; }
    /**
     * @param {?} month
     * @return {?}
     */
    getMonthFullName(month) { return this._monthsFull[month - 1]; }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayAriaLabel(date) {
        /** @type {?} */
        const jsDate = new Date(date.year, date.month - 1, date.day);
        return formatDate(jsDate, 'fullDate', this._locale);
    }
}
NgbDatepickerI18nDefault.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgbDatepickerI18nDefault.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerI18nDefault.prototype._weekdaysShort;
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerI18nDefault.prototype._monthsShort;
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerI18nDefault.prototype._monthsFull;
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerI18nDefault.prototype._locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pMThuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1bmJpcmQtZWQvc3VuYmlyZC11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci9kYXRlcGlja2VyLWkxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7QUFHaEgsTUFBTSxVQUFVLDBCQUEwQixDQUFDLE1BQU07SUFDL0MsT0FBTyxJQUFJLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWdCRCxNQUFNLE9BQWdCLGlCQUFpQjs7Ozs7Ozs7SUFrQ3JDLGNBQWMsQ0FBQyxJQUFtQixJQUFZLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7OztJQU9yRSxlQUFlLENBQUMsVUFBa0IsSUFBWSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7OztJQU92RSxlQUFlLENBQUMsSUFBWSxJQUFZLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztZQWpENUQsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUM7Ozs7Ozs7Ozs7OztJQU96Rix5RUFBc0Q7Ozs7Ozs7Ozs7SUFPdEQsMkVBQWlFOzs7Ozs7Ozs7O0lBT2pFLDBFQUFnRTs7Ozs7Ozs7O0lBT2hFLGtFQUFzRDs7QUF5QnhELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxpQkFBaUI7Ozs7SUFLN0QsWUFBdUMsT0FBZTtRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQUQ2QixZQUFPLEdBQVAsT0FBTyxDQUFROztjQUc5Qyx3QkFBd0IsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDekcsSUFBSSxDQUFDLGNBQWMsR0FBRyx3QkFBd0IsQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUU5RyxJQUFJLENBQUMsWUFBWSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxPQUFlLElBQVksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBRXpGLGlCQUFpQixDQUFDLEtBQWEsSUFBWSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFFakYsZ0JBQWdCLENBQUMsS0FBYSxJQUFZLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUUvRSxlQUFlLENBQUMsSUFBbUI7O2NBQzNCLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDNUQsT0FBTyxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBekJGLFVBQVU7Ozs7eUNBTUksTUFBTSxTQUFDLFNBQVM7Ozs7Ozs7SUFKN0Isa0RBQXNDOzs7OztJQUN0QyxnREFBb0M7Ozs7O0lBQ3BDLCtDQUFtQzs7Ozs7SUFFdkIsMkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIExPQ0FMRV9JRH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1TdHlsZSwgZ2V0TG9jYWxlRGF5TmFtZXMsIGdldExvY2FsZU1vbnRoTmFtZXMsIFRyYW5zbGF0aW9uV2lkdGgsIGZvcm1hdERhdGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nYkRhdGVTdHJ1Y3R9IGZyb20gJy4vbmdiLWRhdGUtc3RydWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIE5HQl9EQVRFUElDS0VSXzE4Tl9GQUNUT1JZKGxvY2FsZSkge1xuICByZXR1cm4gbmV3IE5nYkRhdGVwaWNrZXJJMThuRGVmYXVsdChsb2NhbGUpO1xufVxuXG4vKipcbiAqIEEgc2VydmljZSBzdXBwbHlpbmcgaTE4biBkYXRhIHRvIHRoZSBkYXRlcGlja2VyIGNvbXBvbmVudC5cbiAqXG4gKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIHNlcnZpY2UgdXNlcyB0aGUgQW5ndWxhciBsb2NhbGUgYW5kIHJlZ2lzdGVyZWQgbG9jYWxlIGRhdGEgZm9yXG4gKiB3ZWVrZGF5cyBhbmQgbW9udGggbmFtZXMgKGFzIGV4cGxhaW5lZCBpbiB0aGUgQW5ndWxhciBpMThuIGd1aWRlKS5cbiAqXG4gKiBJdCBhbHNvIHByb3ZpZGVzIGEgd2F5IHRvIGkxOG4gZGF0YSB0aGF0IGRlcGVuZHMgb24gY2FsZW5kYXIgY2FsY3VsYXRpb25zLCBsaWtlIGFyaWEgbGFiZWxzLCBkYXksIHdlZWsgYW5kIHllYXJcbiAqIG51bWVyYWxzLiBGb3Igb3RoZXIgc3RhdGljIGxhYmVscyB0aGUgZGF0ZXBpY2tlciB1c2VzIHRoZSBkZWZhdWx0IEFuZ3VsYXIgaTE4bi5cbiAqXG4gKiBTZWUgdGhlIFtpMThuIGRlbW9dKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2V4YW1wbGVzI2kxOG4pIGFuZFxuICogW0hlYnJldyBjYWxlbmRhciBkZW1vXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9jYWxlbmRhcnMjaGVicmV3KSBvbiBob3cgdG8gZXh0ZW5kIHRoaXMgY2xhc3MgYW5kIGRlZmluZVxuICogYSBjdXN0b20gcHJvdmlkZXIgZm9yIGkxOG4uXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCcsIHVzZUZhY3Rvcnk6IE5HQl9EQVRFUElDS0VSXzE4Tl9GQUNUT1JZLCBkZXBzOiBbTE9DQUxFX0lEXX0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmdiRGF0ZXBpY2tlckkxOG4ge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2hvcnQgd2Vla2RheSBuYW1lIHRvIGRpc3BsYXkgaW4gdGhlIGhlYWRpbmcgb2YgdGhlIG1vbnRoIHZpZXcuXG4gICAqXG4gICAqIFdpdGggZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDE6ICd3ZWVrZGF5JyBpcyAxPU1vbiAuLi4gNz1TdW4uXG4gICAqL1xuICBhYnN0cmFjdCBnZXRXZWVrZGF5U2hvcnROYW1lKHdlZWtkYXk6IG51bWJlcik6IHN0cmluZztcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2hvcnQgbW9udGggbmFtZSB0byBkaXNwbGF5IGluIHRoZSBkYXRlIHBpY2tlciBuYXZpZ2F0aW9uLlxuICAgKlxuICAgKiBXaXRoIGRlZmF1bHQgY2FsZW5kYXIgd2UgdXNlIElTTyA4NjAxOiAnbW9udGgnIGlzIDE9SmFuIC4uLiAxMj1EZWMuXG4gICAqL1xuICBhYnN0cmFjdCBnZXRNb250aFNob3J0TmFtZShtb250aDogbnVtYmVyLCB5ZWFyPzogbnVtYmVyKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmdWxsIG1vbnRoIG5hbWUgdG8gZGlzcGxheSBpbiB0aGUgZGF0ZSBwaWNrZXIgbmF2aWdhdGlvbi5cbiAgICpcbiAgICogV2l0aCBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMTogJ21vbnRoJyBpcyAxPUphbiAuLi4gMTI9RGVjLlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0TW9udGhGdWxsTmFtZShtb250aDogbnVtYmVyLCB5ZWFyPzogbnVtYmVyKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSBmb3IgYSBzcGVjaWZpYyBkYXRlLlxuICAgKlxuICAgKiBAc2luY2UgMi4wLjBcbiAgICovXG4gIGFic3RyYWN0IGdldERheUFyaWFMYWJlbChkYXRlOiBOZ2JEYXRlU3RydWN0KTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIGEgZGF5IHRoYXQgaXMgcmVuZGVyZWQgaW4gYSBkYXkgY2VsbC5cbiAgICpcbiAgICogQHNpbmNlIDMuMC4wXG4gICAqL1xuICBnZXREYXlOdW1lcmFscyhkYXRlOiBOZ2JEYXRlU3RydWN0KTogc3RyaW5nIHsgcmV0dXJuIGAke2RhdGUuZGF5fWA7IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiBhIHdlZWsgbnVtYmVyIHJlbmRlcmVkIGJ5IGRhdGVwaWNrZXIuXG4gICAqXG4gICAqIEBzaW5jZSAzLjAuMFxuICAgKi9cbiAgZ2V0V2Vla051bWVyYWxzKHdlZWtOdW1iZXI6IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBgJHt3ZWVrTnVtYmVyfWA7IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiBhIHllYXIgdGhhdCBpcyByZW5kZXJlZCBpbiB0aGUgZGF0ZXBpY2tlciB5ZWFyIHNlbGVjdCBib3guXG4gICAqXG4gICAqIEBzaW5jZSAzLjAuMFxuICAgKi9cbiAgZ2V0WWVhck51bWVyYWxzKHllYXI6IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBgJHt5ZWFyfWA7IH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nYkRhdGVwaWNrZXJJMThuRGVmYXVsdCBleHRlbmRzIE5nYkRhdGVwaWNrZXJJMThuIHtcbiAgcHJpdmF0ZSBfd2Vla2RheXNTaG9ydDogQXJyYXk8c3RyaW5nPjtcbiAgcHJpdmF0ZSBfbW9udGhzU2hvcnQ6IEFycmF5PHN0cmluZz47XG4gIHByaXZhdGUgX21vbnRoc0Z1bGw6IEFycmF5PHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IHdlZWtkYXlzU3RhcnRpbmdPblN1bmRheSA9IGdldExvY2FsZURheU5hbWVzKF9sb2NhbGUsIEZvcm1TdHlsZS5TdGFuZGFsb25lLCBUcmFuc2xhdGlvbldpZHRoLlNob3J0KTtcbiAgICB0aGlzLl93ZWVrZGF5c1Nob3J0ID0gd2Vla2RheXNTdGFydGluZ09uU3VuZGF5Lm1hcCgoZGF5LCBpbmRleCkgPT4gd2Vla2RheXNTdGFydGluZ09uU3VuZGF5WyhpbmRleCArIDEpICUgN10pO1xuXG4gICAgdGhpcy5fbW9udGhzU2hvcnQgPSBnZXRMb2NhbGVNb250aE5hbWVzKF9sb2NhbGUsIEZvcm1TdHlsZS5TdGFuZGFsb25lLCBUcmFuc2xhdGlvbldpZHRoLkFiYnJldmlhdGVkKTtcbiAgICB0aGlzLl9tb250aHNGdWxsID0gZ2V0TG9jYWxlTW9udGhOYW1lcyhfbG9jYWxlLCBGb3JtU3R5bGUuU3RhbmRhbG9uZSwgVHJhbnNsYXRpb25XaWR0aC5XaWRlKTtcbiAgfVxuXG4gIGdldFdlZWtkYXlTaG9ydE5hbWUod2Vla2RheTogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRbd2Vla2RheSAtIDFdOyB9XG5cbiAgZ2V0TW9udGhTaG9ydE5hbWUobW9udGg6IG51bWJlcik6IHN0cmluZyB7IHJldHVybiB0aGlzLl9tb250aHNTaG9ydFttb250aCAtIDFdOyB9XG5cbiAgZ2V0TW9udGhGdWxsTmFtZShtb250aDogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX21vbnRoc0Z1bGxbbW9udGggLSAxXTsgfVxuXG4gIGdldERheUFyaWFMYWJlbChkYXRlOiBOZ2JEYXRlU3RydWN0KTogc3RyaW5nIHtcbiAgICBjb25zdCBqc0RhdGUgPSBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSk7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUoanNEYXRlLCAnZnVsbERhdGUnLCB0aGlzLl9sb2NhbGUpO1xuICB9XG59XG4iXX0=