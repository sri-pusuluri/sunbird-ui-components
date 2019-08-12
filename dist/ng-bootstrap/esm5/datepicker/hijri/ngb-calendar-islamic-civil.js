/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgbCalendarHijri } from './ngb-calendar-hijri';
import { NgbDate } from '../ngb-date';
import { Injectable } from '@angular/core';
/**
 * Checks if islamic year is a leap year
 * @param {?} hYear
 * @return {?}
 */
function isIslamicLeapYear(hYear) {
    return (14 + 11 * hYear) % 30 < 11;
}
/**
 * Checks if gregorian years is a leap year
 * @param {?} gDate
 * @return {?}
 */
function isGregorianLeapYear(gDate) {
    /** @type {?} */
    var year = gDate.getFullYear();
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
/**
 * Returns the start of Hijri Month.
 * `hMonth` is 0 for Muharram, 1 for Safar, etc.
 * `hYear` is any Hijri hYear.
 * @param {?} hYear
 * @param {?} hMonth
 * @return {?}
 */
function getIslamicMonthStart(hYear, hMonth) {
    return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30.0);
}
/**
 * Returns the start of Hijri year.
 * `year` is any Hijri year.
 * @param {?} year
 * @return {?}
 */
function getIslamicYearStart(year) {
    return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function mod(a, b) {
    return a - b * Math.floor(a / b);
}
/**
 * The civil calendar is one type of Hijri calendars used in islamic countries.
 * Uses a fixed cycle of alternating 29- and 30-day months,
 * with a leap day added to the last month of 11 out of every 30 years.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
 * Dershowitz.
 * @type {?}
 */
var GREGORIAN_EPOCH = 1721425.5;
/** @type {?} */
var ISLAMIC_EPOCH = 1948439.5;
var NgbCalendarIslamicCivil = /** @class */ (function (_super) {
    tslib_1.__extends(NgbCalendarIslamicCivil, _super);
    function NgbCalendarIslamicCivil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gDate` is a JS Date to be converted to Hijri.
     */
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gDate` is a JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    NgbCalendarIslamicCivil.prototype.fromGregorian = /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gDate` is a JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    function (gDate) {
        /** @type {?} */
        var gYear = gDate.getFullYear();
        /** @type {?} */
        var gMonth = gDate.getMonth();
        /** @type {?} */
        var gDay = gDate.getDate();
        /** @type {?} */
        var julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) +
            -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
            Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gDate) ? -1 : -2) + gDay);
        julianDay = Math.floor(julianDay) + 0.5;
        /** @type {?} */
        var days = julianDay - ISLAMIC_EPOCH;
        /** @type {?} */
        var hYear = Math.floor((30 * days + 10646) / 10631.0);
        /** @type {?} */
        var hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
        hMonth = Math.min(hMonth, 11);
        /** @type {?} */
        var hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
        return new NgbDate(hYear, hMonth + 1, hDay);
    };
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hDate` is an islamic(civil) date to be converted to Gregorian.
     */
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hDate` is an islamic(civil) date to be converted to Gregorian.
     * @param {?} hDate
     * @return {?}
     */
    NgbCalendarIslamicCivil.prototype.toGregorian = /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hDate` is an islamic(civil) date to be converted to Gregorian.
     * @param {?} hDate
     * @return {?}
     */
    function (hDate) {
        /** @type {?} */
        var hYear = hDate.year;
        /** @type {?} */
        var hMonth = hDate.month - 1;
        /** @type {?} */
        var hDay = hDate.day;
        /** @type {?} */
        var julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
        /** @type {?} */
        var wjd = Math.floor(julianDay - 0.5) + 0.5;
        /** @type {?} */
        var depoch = wjd - GREGORIAN_EPOCH;
        /** @type {?} */
        var quadricent = Math.floor(depoch / 146097);
        /** @type {?} */
        var dqc = mod(depoch, 146097);
        /** @type {?} */
        var cent = Math.floor(dqc / 36524);
        /** @type {?} */
        var dcent = mod(dqc, 36524);
        /** @type {?} */
        var quad = Math.floor(dcent / 1461);
        /** @type {?} */
        var dquad = mod(dcent, 1461);
        /** @type {?} */
        var yindex = Math.floor(dquad / 365);
        /** @type {?} */
        var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
        if (!(cent === 4 || yindex === 4)) {
            year++;
        }
        /** @type {?} */
        var gYearStart = GREGORIAN_EPOCH + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400);
        /** @type {?} */
        var yearday = wjd - gYearStart;
        /** @type {?} */
        var tjd = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear(new Date(year, 3, 1)) ? -1 : -2) + 1);
        /** @type {?} */
        var leapadj = wjd < tjd ? 0 : isGregorianLeapYear(new Date(year, 3, 1)) ? 1 : 2;
        /** @type {?} */
        var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
        /** @type {?} */
        var tjd2 = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) +
            Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear(new Date(year, month - 1, 1)) ? -1 : -2) +
                1);
        /** @type {?} */
        var day = wjd - tjd2 + 1;
        return new Date(year, month - 1, day);
    };
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     */
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    NgbCalendarIslamicCivil.prototype.getDaysPerMonth = /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    function (month, year) {
        year = year + Math.floor(month / 13);
        month = ((month - 1) % 12) + 1;
        /** @type {?} */
        var length = 29 + month % 2;
        if (month === 12 && isIslamicLeapYear(year)) {
            length++;
        }
        return length;
    };
    NgbCalendarIslamicCivil.decorators = [
        { type: Injectable }
    ];
    return NgbCalendarIslamicCivil;
}(NgbCalendarHijri));
export { NgbCalendarIslamicCivil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWNhbGVuZGFyLWlzbGFtaWMtY2l2aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJkYXRlcGlja2VyL2hpanJpL25nYi1jYWxlbmRhci1pc2xhbWljLWNpdmlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFLekMsU0FBUyxpQkFBaUIsQ0FBQyxLQUFhO0lBQ3RDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckMsQ0FBQzs7Ozs7O0FBS0QsU0FBUyxtQkFBbUIsQ0FBQyxLQUFXOztRQUNoQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRTtJQUNoQyxPQUFPLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2hFLENBQUM7Ozs7Ozs7OztBQU9ELFNBQVMsb0JBQW9CLENBQUMsS0FBYSxFQUFFLE1BQWM7SUFDekQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDNUYsQ0FBQzs7Ozs7OztBQU1ELFNBQVMsbUJBQW1CLENBQUMsSUFBWTtJQUN2QyxPQUFPLENBQUMsSUFBSSxH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QUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsYUFBYSxHQUFHLENBQUM7O1lBRXpHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHOztZQUFFLE1BQU0sR0FBRyxHQUFHLEdBQUcsZUFBZTs7WUFDdkUsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7WUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7O1lBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQzs7WUFDbkcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDOztZQUFFLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1lBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDOztZQUNsRixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDOztZQUNsQyxJQUFJLEdBQUcsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsTUFBTTtRQUM1RCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqQyxJQUFJLEVBQUUsQ0FBQztTQUNSOztZQUVLLFVBQVUsR0FBRyxlQUFlLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDN0csSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7O1lBRTFCLE9BQU8sR0FBRyxHQUFHLEdBQUcsVUFBVTs7WUFFMUIsR0FBRyxHQUFHLGVBQWUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDMUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFFN0csT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRTNFLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs7WUFDMUQsSUFBSSxHQUFHLGVBQWUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDM0csSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FDTixDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pHLENBQUMsQ0FBQzs7WUFFSixHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO1FBRTFCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7OztJQUNILGlEQUFlOzs7Ozs7OztJQUFmLFVBQWdCLEtBQWEsRUFBRSxJQUFZO1FBQ3pDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUMzQixNQUFNLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDO1FBQzNCLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQyxNQUFNLEVBQUUsQ0FBQztTQUNWO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0JBOUVGLFVBQVU7O0lBK0VYLDhCQUFDO0NBQUEsQUEvRUQsQ0FDNkMsZ0JBQWdCLEdBOEU1RDtTQTlFWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nYkNhbGVuZGFySGlqcml9IGZyb20gJy4vbmdiLWNhbGVuZGFyLWhpanJpJztcbmltcG9ydCB7TmdiRGF0ZX0gZnJvbSAnLi4vbmdiLWRhdGUnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBDaGVja3MgaWYgaXNsYW1pYyB5ZWFyIGlzIGEgbGVhcCB5ZWFyXG4gKi9cbmZ1bmN0aW9uIGlzSXNsYW1pY0xlYXBZZWFyKGhZZWFyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuICgxNCArIDExICogaFllYXIpICUgMzAgPCAxMTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgZ3JlZ29yaWFuIHllYXJzIGlzIGEgbGVhcCB5ZWFyXG4gKi9cbmZ1bmN0aW9uIGlzR3JlZ29yaWFuTGVhcFllYXIoZ0RhdGU6IERhdGUpOiBib29sZWFuIHtcbiAgY29uc3QgeWVhciA9IGdEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDA7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3RhcnQgb2YgSGlqcmkgTW9udGguXG4gKiBgaE1vbnRoYCBpcyAwIGZvciBNdWhhcnJhbSwgMSBmb3IgU2FmYXIsIGV0Yy5cbiAqIGBoWWVhcmAgaXMgYW55IEhpanJpIGhZZWFyLlxuICovXG5mdW5jdGlvbiBnZXRJc2xhbWljTW9udGhTdGFydChoWWVhcjogbnVtYmVyLCBoTW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmNlaWwoMjkuNSAqIGhNb250aCkgKyAoaFllYXIgLSAxKSAqIDM1NCArIE1hdGguZmxvb3IoKDMgKyAxMSAqIGhZZWFyKSAvIDMwLjApO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0YXJ0IG9mIEhpanJpIHllYXIuXG4gKiBgeWVhcmAgaXMgYW55IEhpanJpIHllYXIuXG4gKi9cbmZ1bmN0aW9uIGdldElzbGFtaWNZZWFyU3RhcnQoeWVhcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuICh5ZWFyIC0gMSkgKiAzNTQgKyBNYXRoLmZsb29yKCgzICsgMTEgKiB5ZWFyKSAvIDMwLjApO1xufVxuXG5mdW5jdGlvbiBtb2QoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gYSAtIGIgKiBNYXRoLmZsb29yKGEgLyBiKTtcbn1cblxuLyoqXG4gKiBUaGUgY2l2aWwgY2FsZW5kYXIgaXMgb25lIHR5cGUgb2YgSGlqcmkgY2FsZW5kYXJzIHVzZWQgaW4gaXNsYW1pYyBjb3VudHJpZXMuXG4gKiBVc2VzIGEgZml4ZWQgY3ljbGUgb2YgYWx0ZXJuYXRpbmcgMjktIGFuZCAzMC1kYXkgbW9udGhzLFxuICogd2l0aCBhIGxlYXAgZGF5IGFkZGVkIHRvIHRoZSBsYXN0IG1vbnRoIG9mIDExIG91dCBvZiBldmVyeSAzMCB5ZWFycy5cbiAqIGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL2RldmVsb3BtZW50L2RldmVsb3BtZW50LXByb2Nlc3MvZGVzaWduLXByb3Bvc2Fscy9pc2xhbWljLWNhbGVuZGFyLXR5cGVzXG4gKiBBbGwgdGhlIGNhbGN1bGF0aW9ucyBoZXJlIGFyZSBiYXNlZCBvbiB0aGUgZXF1YXRpb25zIGZyb20gXCJDYWxlbmRyaWNhbCBDYWxjdWxhdGlvbnNcIiBCeSBFZHdhcmQgTS4gUmVpbmdvbGQsIE5hY2h1bVxuICogRGVyc2hvd2l0ei5cbiAqL1xuXG5jb25zdCBHUkVHT1JJQU5fRVBPQ0ggPSAxNzIxNDI1LjU7XG5jb25zdCBJU0xBTUlDX0VQT0NIID0gMTk0ODQzOS41O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmdiQ2FsZW5kYXJJc2xhbWljQ2l2aWwgZXh0ZW5kcyBOZ2JDYWxlbmRhckhpanJpIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVxdWl2YWxlbnQgaXNsYW1pYyhjaXZpbCkgZGF0ZSB2YWx1ZSBmb3IgYSBnaXZlIGlucHV0IEdyZWdvcmlhbiBkYXRlLlxuICAgKiBgZ0RhdGVgIGlzIGEgSlMgRGF0ZSB0byBiZSBjb252ZXJ0ZWQgdG8gSGlqcmkuXG4gICAqL1xuICBmcm9tR3JlZ29yaWFuKGdEYXRlOiBEYXRlKTogTmdiRGF0ZSB7XG4gICAgY29uc3QgZ1llYXIgPSBnRGF0ZS5nZXRGdWxsWWVhcigpLCBnTW9udGggPSBnRGF0ZS5nZXRNb250aCgpLCBnRGF5ID0gZ0RhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgbGV0IGp1bGlhbkRheSA9IEdSRUdPUklBTl9FUE9DSCAtIDEgKyAzNjUgKiAoZ1llYXIgLSAxKSArIE1hdGguZmxvb3IoKGdZZWFyIC0gMSkgLyA0KSArXG4gICAgICAgIC1NYXRoLmZsb29yKChnWWVhciAtIDEpIC8gMTAwKSArIE1hdGguZmxvb3IoKGdZZWFyIC0gMSkgLyA0MDApICtcbiAgICAgICAgTWF0aC5mbG9vcihcbiAgICAgICAgICAgICgzNjcgKiAoZ01vbnRoICsgMSkgLSAzNjIpIC8gMTIgKyAoZ01vbnRoICsgMSA8PSAyID8gMCA6IGlzR3JlZ29yaWFuTGVhcFllYXIoZ0RhdGUpID8gLTEgOiAtMikgKyBnRGF5KTtcbiAgICBqdWxpYW5EYXkgPSBNYXRoLmZsb29yKGp1bGlhbkRheSkgKyAwLjU7XG5cbiAgICBjb25zdCBkYXlzID0ganVsaWFuRGF5IC0gSVNMQU1JQ19FUE9DSDtcbiAgICBjb25zdCBoWWVhciA9IE1hdGguZmxvb3IoKDMwICogZGF5cyArIDEwNjQ2KSAvIDEwNjMxLjApO1xuICAgIGxldCBoTW9udGggPSBNYXRoLmNlaWwoKGRheXMgLSAyOSAtIGdldElzbGFtaWNZZWFyU3RhcnQoaFllYXIpKSAvIDI5LjUpO1xuICAgIGhNb250aCA9IE1hdGgubWluKGhNb250aCwgMTEpO1xuICAgIGNvbnN0IGhEYXkgPSBNYXRoLmNlaWwoZGF5cyAtIGdldElzbGFtaWNNb250aFN0YXJ0KGhZZWFyLCBoTW9udGgpKSArIDE7XG4gICAgcmV0dXJuIG5ldyBOZ2JEYXRlKGhZZWFyLCBoTW9udGggKyAxLCBoRGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcXVpdmFsZW50IEpTIGRhdGUgdmFsdWUgZm9yIGEgZ2l2ZSBpbnB1dCBpc2xhbWljKGNpdmlsKSBkYXRlLlxuICAgKiBgaERhdGVgIGlzIGFuIGlzbGFtaWMoY2l2aWwpIGRhdGUgdG8gYmUgY29udmVydGVkIHRvIEdyZWdvcmlhbi5cbiAgICovXG4gIHRvR3JlZ29yaWFuKGhEYXRlOiBOZ2JEYXRlKTogRGF0ZSB7XG4gICAgY29uc3QgaFllYXIgPSBoRGF0ZS55ZWFyO1xuICAgIGNvbnN0IGhNb250aCA9IGhEYXRlLm1vbnRoIC0gMTtcbiAgICBjb25zdCBoRGF5ID0gaERhdGUuZGF5O1xuICAgIGNvbnN0IGp1bGlhbkRheSA9XG4gICAgICAgIGhEYXkgKyBNYXRoLmNlaWwoMjkuNSAqIGhNb250aCkgKyAoaFllYXIgLSAxKSAqIDM1NCArIE1hdGguZmxvb3IoKDMgKyAxMSAqIGhZZWFyKSAvIDMwKSArIElTTEFNSUNfRVBPQ0ggLSAxO1xuXG4gICAgY29uc3Qgd2pkID0gTWF0aC5mbG9vcihqdWxpYW5EYXkgLSAwLjUpICsgMC41LCBkZXBvY2ggPSB3amQgLSBHUkVHT1JJQU5fRVBPQ0gsXG4gICAgICAgICAgcXVhZHJpY2VudCA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTQ2MDk3KSwgZHFjID0gbW9kKGRlcG9jaCwgMTQ2MDk3KSwgY2VudCA9IE1hdGguZmxvb3IoZHFjIC8gMzY1MjQpLFxuICAgICAgICAgIGRjZW50ID0gbW9kKGRxYywgMzY1MjQpLCBxdWFkID0gTWF0aC5mbG9vcihkY2VudCAvIDE0NjEpLCBkcXVhZCA9IG1vZChkY2VudCwgMTQ2MSksXG4gICAgICAgICAgeWluZGV4ID0gTWF0aC5mbG9vcihkcXVhZCAvIDM2NSk7XG4gICAgbGV0IHllYXIgPSBxdWFkcmljZW50ICogNDAwICsgY2VudCAqIDEwMCArIHF1YWQgKiA0ICsgeWluZGV4O1xuICAgIGlmICghKGNlbnQgPT09IDQgfHwgeWluZGV4ID09PSA0KSkge1xuICAgICAgeWVhcisrO1xuICAgIH1cblxuICAgIGNvbnN0IGdZZWFyU3RhcnQgPSBHUkVHT1JJQU5fRVBPQ0ggKyAzNjUgKiAoeWVhciAtIDEpICsgTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNCkgLSBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyAxMDApICtcbiAgICAgICAgTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNDAwKTtcblxuICAgIGNvbnN0IHllYXJkYXkgPSB3amQgLSBnWWVhclN0YXJ0O1xuXG4gICAgY29uc3QgdGpkID0gR1JFR09SSUFOX0VQT0NIIC0gMSArIDM2NSAqICh5ZWFyIC0gMSkgKyBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0KSAtIE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDEwMCkgK1xuICAgICAgICBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0MDApICsgTWF0aC5mbG9vcig3MzkgLyAxMiArIChpc0dyZWdvcmlhbkxlYXBZZWFyKG5ldyBEYXRlKHllYXIsIDMsIDEpKSA/IC0xIDogLTIpICsgMSk7XG5cbiAgICBjb25zdCBsZWFwYWRqID0gd2pkIDwgdGpkID8gMCA6IGlzR3JlZ29yaWFuTGVhcFllYXIobmV3IERhdGUoeWVhciwgMywgMSkpID8gMSA6IDI7XG5cbiAgICBjb25zdCBtb250aCA9IE1hdGguZmxvb3IoKCh5ZWFyZGF5ICsgbGVhcGFkaikgKiAxMiArIDM3MykgLyAzNjcpO1xuICAgIGNvbnN0IHRqZDIgPSBHUkVHT1JJQU5fRVBPQ0ggLSAxICsgMzY1ICogKHllYXIgLSAxKSArIE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQpIC0gTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gMTAwKSArXG4gICAgICAgIE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQwMCkgK1xuICAgICAgICBNYXRoLmZsb29yKFxuICAgICAgICAgICAgKDM2NyAqIG1vbnRoIC0gMzYyKSAvIDEyICsgKG1vbnRoIDw9IDIgPyAwIDogaXNHcmVnb3JpYW5MZWFwWWVhcihuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIDEpKSA/IC0xIDogLTIpICtcbiAgICAgICAgICAgIDEpO1xuXG4gICAgY29uc3QgZGF5ID0gd2pkIC0gdGpkMiArIDE7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgc3BlY2lmaWMgSGlqcmkgbW9udGguXG4gICAqIGBtb250aGAgaXMgMSBmb3IgTXVoYXJyYW0sIDIgZm9yIFNhZmFyLCBldGMuXG4gICAqIGB5ZWFyYCBpcyBhbnkgSGlqcmkgeWVhci5cbiAgICovXG4gIGdldERheXNQZXJNb250aChtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHllYXIgPSB5ZWFyICsgTWF0aC5mbG9vcihtb250aCAvIDEzKTtcbiAgICBtb250aCA9ICgobW9udGggLSAxKSAlIDEyKSArIDE7XG4gICAgbGV0IGxlbmd0aCA9IDI5ICsgbW9udGggJSAyO1xuICAgIGlmIChtb250aCA9PT0gMTIgJiYgaXNJc2xhbWljTGVhcFllYXIoeWVhcikpIHtcbiAgICAgIGxlbmd0aCsrO1xuICAgIH1cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG59XG4iXX0=