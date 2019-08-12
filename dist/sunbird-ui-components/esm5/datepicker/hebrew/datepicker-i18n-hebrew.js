/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgbDatepickerI18n } from '../datepicker-i18n';
import { hebrewNumerals, isHebrewLeapYear } from './hebrew';
import { Injectable } from '@angular/core';
/** @type {?} */
var WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
/** @type {?} */
var MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/** @type {?} */
var MONTHS_LEAP = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/**
 * \@since 3.2.0
 */
var NgbDatepickerI18nHebrew = /** @class */ (function (_super) {
    tslib_1.__extends(NgbDatepickerI18nHebrew, _super);
    function NgbDatepickerI18nHebrew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getMonthShortName = /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    function (month, year) { return this.getMonthFullName(month, year); };
    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getMonthFullName = /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    function (month, year) {
        return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] : MONTHS[month - 1];
    };
    /**
     * @param {?} weekday
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getWeekdayShortName = /**
     * @param {?} weekday
     * @return {?}
     */
    function (weekday) { return WEEKDAYS[weekday - 1]; };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getDayAriaLabel = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return hebrewNumerals(date.day) + " " + this.getMonthFullName(date.month, date.year) + " " + hebrewNumerals(date.year);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getDayNumerals = /**
     * @param {?} date
     * @return {?}
     */
    function (date) { return hebrewNumerals(date.day); };
    /**
     * @param {?} weekNumber
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getWeekNumerals = /**
     * @param {?} weekNumber
     * @return {?}
     */
    function (weekNumber) { return hebrewNumerals(weekNumber); };
    /**
     * @param {?} year
     * @return {?}
     */
    NgbDatepickerI18nHebrew.prototype.getYearNumerals = /**
     * @param {?} year
     * @return {?}
     */
    function (year) { return hebrewNumerals(year); };
    NgbDatepickerI18nHebrew.decorators = [
        { type: Injectable }
    ];
    return NgbDatepickerI18nHebrew;
}(NgbDatepickerI18n));
export { NgbDatepickerI18nHebrew };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pMThuLWhlYnJldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdW5iaXJkLWVkL3N1bmJpcmQtdWktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIvaGVicmV3L2RhdGVwaWNrZXItaTE4bi1oZWJyZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzFELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0lBR25DLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQzs7SUFDckUsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7O0lBQ3BHLFdBQVcsR0FDYixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQzs7OztBQUs1RztJQUM2QyxtREFBaUI7SUFEOUQ7O0lBbUJBLENBQUM7Ozs7OztJQWpCQyxtREFBaUI7Ozs7O0lBQWpCLFVBQWtCLEtBQWEsRUFBRSxJQUFhLElBQVksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBRXRHLGtEQUFnQjs7Ozs7SUFBaEIsVUFBaUIsS0FBYSxFQUFFLElBQWE7UUFDM0MsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7OztJQUVELHFEQUFtQjs7OztJQUFuQixVQUFvQixPQUFlLElBQVksT0FBTyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFFOUUsaURBQWU7Ozs7SUFBZixVQUFnQixJQUFtQjtRQUNqQyxPQUFVLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUM7SUFDcEgsQ0FBQzs7Ozs7SUFFRCxnREFBYzs7OztJQUFkLFVBQWUsSUFBbUIsSUFBWSxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUVoRixpREFBZTs7OztJQUFmLFVBQWdCLFVBQWtCLElBQVksT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUVsRixpREFBZTs7OztJQUFmLFVBQWdCLElBQVksSUFBWSxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQWxCdkUsVUFBVTs7SUFtQlgsOEJBQUM7Q0FBQSxBQW5CRCxDQUM2QyxpQkFBaUIsR0FrQjdEO1NBbEJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdiRGF0ZXBpY2tlckkxOG59IGZyb20gJy4uL2RhdGVwaWNrZXItaTE4bic7XG5pbXBvcnQge05nYkRhdGVTdHJ1Y3R9IGZyb20gJy4uLy4uL2luZGV4JztcbmltcG9ydCB7aGVicmV3TnVtZXJhbHMsIGlzSGVicmV3TGVhcFllYXJ9IGZyb20gJy4vaGVicmV3JztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuY29uc3QgV0VFS0RBWVMgPSBbJ9ep16DXmScsICfXqdec15nXqdeZJywgJ9eo15HXmdei15knLCAn15fXnteZ16nXmScsICfXqdeZ16nXmScsICfXqdeR16onLCAn16jXkNep15XXnyddO1xuY29uc3QgTU9OVEhTID0gWyfXqtep16jXmScsICfXl9ep15XXnycsICfXm9eh15zXlScsICfXmNeR16onLCAn16nXkdeYJywgJ9eQ15PXqCcsICfXoNeZ16HXnycsICfXkNeZ15nXqCcsICfXodeZ15XXnycsICfXqtee15XXlicsICfXkNeRJywgJ9eQ15zXldecJ107XG5jb25zdCBNT05USFNfTEVBUCA9XG4gICAgWyfXqtep16jXmScsICfXl9ep15XXnycsICfXm9eh15zXlScsICfXmNeR16onLCAn16nXkdeYJywgJ9eQ15PXqCDXkNezJywgJ9eQ15PXqCDXkdezJywgJ9eg15nXodefJywgJ9eQ15nXmdeoJywgJ9eh15nXldefJywgJ9eq157XldeWJywgJ9eQ15EnLCAn15DXnNeV15wnXTtcblxuLyoqXG4gKiBAc2luY2UgMy4yLjBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nYkRhdGVwaWNrZXJJMThuSGVicmV3IGV4dGVuZHMgTmdiRGF0ZXBpY2tlckkxOG4ge1xuICBnZXRNb250aFNob3J0TmFtZShtb250aDogbnVtYmVyLCB5ZWFyPzogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuZ2V0TW9udGhGdWxsTmFtZShtb250aCwgeWVhcik7IH1cblxuICBnZXRNb250aEZ1bGxOYW1lKG1vbnRoOiBudW1iZXIsIHllYXI/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBpc0hlYnJld0xlYXBZZWFyKHllYXIpID8gTU9OVEhTX0xFQVBbbW9udGggLSAxXSA6IE1PTlRIU1ttb250aCAtIDFdO1xuICB9XG5cbiAgZ2V0V2Vla2RheVNob3J0TmFtZSh3ZWVrZGF5OiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gV0VFS0RBWVNbd2Vla2RheSAtIDFdOyB9XG5cbiAgZ2V0RGF5QXJpYUxhYmVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtoZWJyZXdOdW1lcmFscyhkYXRlLmRheSl9ICR7dGhpcy5nZXRNb250aEZ1bGxOYW1lKGRhdGUubW9udGgsIGRhdGUueWVhcil9ICR7aGVicmV3TnVtZXJhbHMoZGF0ZS55ZWFyKX1gO1xuICB9XG5cbiAgZ2V0RGF5TnVtZXJhbHMoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZyB7IHJldHVybiBoZWJyZXdOdW1lcmFscyhkYXRlLmRheSk7IH1cblxuICBnZXRXZWVrTnVtZXJhbHMod2Vla051bWJlcjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIGhlYnJld051bWVyYWxzKHdlZWtOdW1iZXIpOyB9XG5cbiAgZ2V0WWVhck51bWVyYWxzKHllYXI6IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBoZWJyZXdOdW1lcmFscyh5ZWFyKTsgfVxufVxuIl19