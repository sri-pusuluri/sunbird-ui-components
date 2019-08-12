/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgbDate } from '../ngb-date';
/**
 * Returns the equivalent JS date value for a give input Jalali date.
 * `jalaliDate` is an Jalali date to be converted to Gregorian.
 * @param {?} jalaliDate
 * @return {?}
 */
export function toGregorian(jalaliDate) {
    /** @type {?} */
    let jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
    /** @type {?} */
    let date = julianToGregorian(jdn);
    date.setHours(6, 30, 3, 200);
    return date;
}
/**
 * Returns the equivalent jalali date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to jalali.
 * utc to local
 * @param {?} gdate
 * @return {?}
 */
export function fromGregorian(gdate) {
    /** @type {?} */
    let g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
    return julianToJalali(g2d);
}
/**
 * @param {?} date
 * @param {?} yearValue
 * @return {?}
 */
export function setJalaliYear(date, yearValue) {
    date.year = +yearValue;
    return date;
}
/**
 * @param {?} date
 * @param {?} month
 * @return {?}
 */
export function setJalaliMonth(date, month) {
    month = +month;
    date.year = date.year + Math.floor((month - 1) / 12);
    date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
    return date;
}
/**
 * @param {?} date
 * @param {?} day
 * @return {?}
 */
export function setJalaliDay(date, day) {
    /** @type {?} */
    let mDays = getDaysPerMonth(date.month, date.year);
    if (day <= 0) {
        while (day <= 0) {
            date = setJalaliMonth(date, date.month - 1);
            mDays = getDaysPerMonth(date.month, date.year);
            day += mDays;
        }
    }
    else if (day > mDays) {
        while (day > mDays) {
            day -= mDays;
            date = setJalaliMonth(date, date.month + 1);
            mDays = getDaysPerMonth(date.month, date.year);
        }
    }
    date.day = day;
    return date;
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
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function div(a, b) {
    return Math.trunc(a / b);
}
/*
 This function determines if the Jalali (Persian) year is
 leap (366-day long) or is the common year (365 days), and
 finds the day in March (Gregorian calendar) of the first
 day of the Jalali year (jalaliYear).
 @param jalaliYear Jalali calendar year (-61 to 3177)
 @return
 leap: number of years since the last leap year (0 to 4)
 gYear: Gregorian year of the beginning of Jalali year
 march: the March day of Farvardin the 1st (1st day of jalaliYear)
 @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
 @see: http://www.fourmilab.ch/documents/calendar/
 */
/**
 * @param {?} jalaliYear
 * @return {?}
 */
function jalCal(jalaliYear) {
    // Jalali years starting the 33-year rule.
    /** @type {?} */
    let breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
    /** @type {?} */
    const breaksLength = breaks.length;
    /** @type {?} */
    const gYear = jalaliYear + 621;
    /** @type {?} */
    let leapJ = -14;
    /** @type {?} */
    let jp = breaks[0];
    if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
        throw new Error('Invalid Jalali year ' + jalaliYear);
    }
    // Find the limiting years for the Jalali year jalaliYear.
    /** @type {?} */
    let jump;
    for (let i = 1; i < breaksLength; i += 1) {
        /** @type {?} */
        const jm = breaks[i];
        jump = jm - jp;
        if (jalaliYear < jm) {
            break;
        }
        leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
        jp = jm;
    }
    /** @type {?} */
    let n = jalaliYear - jp;
    // Find the number of leap years from AD 621 to the beginning
    // of the current Jalali year in the Persian calendar.
    leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
    if (mod(jump, 33) === 4 && jump - n === 4) {
        leapJ += 1;
    }
    // And the same in the Gregorian calendar (until the year gYear).
    /** @type {?} */
    const leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150;
    // Determine the Gregorian date of Farvardin the 1st.
    /** @type {?} */
    const march = 20 + leapJ - leapG;
    // Find how many years have passed since the last leap year.
    if (jump - n < 6) {
        n = n - jump + div(jump + 4, 33) * 33;
    }
    /** @type {?} */
    let leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
        leap = 4;
    }
    return { leap: leap, gy: gYear, march: march };
}
/*
 Calculates Gregorian and Julian calendar dates from the Julian Day number
 (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
 calendars) to some millions years ahead of the present.
 @param jdn Julian Day number
 @return
 gYear: Calendar year (years BC numbered 0, -1, -2, ...)
 gMonth: Calendar month (1 to 12)
 gDay: Calendar day of the month M (1 to 28/29/30/31)
 */
/**
 * @param {?} julianDayNumber
 * @return {?}
 */
function julianToGregorian(julianDayNumber) {
    /** @type {?} */
    let j = 4 * julianDayNumber + 139361631;
    j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
    /** @type {?} */
    const i = div(mod(j, 1461), 4) * 5 + 308;
    /** @type {?} */
    const gDay = div(mod(i, 153), 5) + 1;
    /** @type {?} */
    const gMonth = mod(div(i, 153), 12) + 1;
    /** @type {?} */
    const gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
    return new Date(gYear, gMonth - 1, gDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jy Jalali year (1 to 3100)
 @param jm Jalali month (1 to 12)
 @param jd Jalali day (1 to 29/31)
 @return Julian Day number
 */
/**
 * @param {?} gy
 * @param {?} gm
 * @param {?} gd
 * @return {?}
 */
function gregorianToJulian(gy, gm, gd) {
    /** @type {?} */
    let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
    d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
    return d;
}
/*
 Converts the Julian Day number to a date in the Jalali calendar.
 @param julianDayNumber Julian Day number
 @return
 jalaliYear: Jalali year (1 to 3100)
 jalaliMonth: Jalali month (1 to 12)
 jalaliDay: Jalali day (1 to 29/31)
 */
/**
 * @param {?} julianDayNumber
 * @return {?}
 */
function julianToJalali(julianDayNumber) {
    /** @type {?} */
    let gy = julianToGregorian(julianDayNumber).getFullYear() // Calculate Gregorian year (gy).
    ;
    /** @type {?} */
    let jalaliYear = gy - 621;
    /** @type {?} */
    let r = jalCal(jalaliYear);
    /** @type {?} */
    let gregorianDay = gregorianToJulian(gy, 3, r.march);
    /** @type {?} */
    let jalaliDay;
    /** @type {?} */
    let jalaliMonth;
    /** @type {?} */
    let numberOfDays;
    // Find number of days that passed since 1 Farvardin.
    numberOfDays = julianDayNumber - gregorianDay;
    if (numberOfDays >= 0) {
        if (numberOfDays <= 185) {
            // The first 6 months.
            jalaliMonth = 1 + div(numberOfDays, 31);
            jalaliDay = mod(numberOfDays, 31) + 1;
            return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
        }
        else {
            // The remaining months.
            numberOfDays -= 186;
        }
    }
    else {
        // Previous Jalali year.
        jalaliYear -= 1;
        numberOfDays += 179;
        if (r.leap === 1) {
            numberOfDays += 1;
        }
    }
    jalaliMonth = 7 + div(numberOfDays, 30);
    jalaliDay = mod(numberOfDays, 30) + 1;
    return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jYear Jalali year (1 to 3100)
 @param jMonth Jalali month (1 to 12)
 @param jDay Jalali day (1 to 29/31)
 @return Julian Day number
 */
/**
 * @param {?} jYear
 * @param {?} jMonth
 * @param {?} jDay
 * @return {?}
 */
function jalaliToJulian(jYear, jMonth, jDay) {
    /** @type {?} */
    let r = jalCal(jYear);
    return gregorianToJulian(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
}
/**
 * Returns the number of days in a specific jalali month.
 * @param {?} month
 * @param {?} year
 * @return {?}
 */
function getDaysPerMonth(month, year) {
    if (month <= 6) {
        return 31;
    }
    if (month <= 11) {
        return 30;
    }
    if (jalCal(year).leap === 0) {
        return 30;
    }
    return 29;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamFsYWxpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1bmJpcmQtZWQvc3VuYmlyZC11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci9qYWxhbGkvamFsYWxpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7O0FBTXBDLE1BQU0sVUFBVSxXQUFXLENBQUMsVUFBbUI7O1FBQ3pDLEdBQUcsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7O1FBQ3ZFLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7SUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QixPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFXOztRQUNuQyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZGLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsSUFBYSxFQUFFLFNBQWlCO0lBQzVELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDdkIsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLElBQWEsRUFBRSxLQUFhO0lBQ3pELEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJ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SUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ2QsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUNELElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtRQUNmLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1FBQzNCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nYkRhdGV9IGZyb20gJy4uL25nYi1kYXRlJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlcXVpdmFsZW50IEpTIGRhdGUgdmFsdWUgZm9yIGEgZ2l2ZSBpbnB1dCBKYWxhbGkgZGF0ZS5cbiAqIGBqYWxhbGlEYXRlYCBpcyBhbiBKYWxhbGkgZGF0ZSB0byBiZSBjb252ZXJ0ZWQgdG8gR3JlZ29yaWFuLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9HcmVnb3JpYW4oamFsYWxpRGF0ZTogTmdiRGF0ZSk6IERhdGUge1xuICBsZXQgamRuID0gamFsYWxpVG9KdWxpYW4oamFsYWxpRGF0ZS55ZWFyLCBqYWxhbGlEYXRlLm1vbnRoLCBqYWxhbGlEYXRlLmRheSk7XG4gIGxldCBkYXRlID0ganVsaWFuVG9HcmVnb3JpYW4oamRuKTtcbiAgZGF0ZS5zZXRIb3Vycyg2LCAzMCwgMywgMjAwKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZXF1aXZhbGVudCBqYWxhbGkgZGF0ZSB2YWx1ZSBmb3IgYSBnaXZlIGlucHV0IEdyZWdvcmlhbiBkYXRlLlxuICogYGdkYXRlYCBpcyBhIEpTIERhdGUgdG8gYmUgY29udmVydGVkIHRvIGphbGFsaS5cbiAqIHV0YyB0byBsb2NhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUdyZWdvcmlhbihnZGF0ZTogRGF0ZSk6IE5nYkRhdGUge1xuICBsZXQgZzJkID0gZ3JlZ29yaWFuVG9KdWxpYW4oZ2RhdGUuZ2V0RnVsbFllYXIoKSwgZ2RhdGUuZ2V0TW9udGgoKSArIDEsIGdkYXRlLmdldERhdGUoKSk7XG4gIHJldHVybiBqdWxpYW5Ub0phbGFsaShnMmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SmFsYWxpWWVhcihkYXRlOiBOZ2JEYXRlLCB5ZWFyVmFsdWU6IG51bWJlcik6IE5nYkRhdGUge1xuICBkYXRlLnllYXIgPSAreWVhclZhbHVlO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEphbGFsaU1vbnRoKGRhdGU6IE5nYkRhdGUsIG1vbnRoOiBudW1iZXIpOiBOZ2JEYXRlIHtcbiAgbW9udGggPSArbW9udGg7XG4gIGRhdGUueWVhciA9IGRhdGUueWVhciArIE1hdGguZmxvb3IoKG1vbnRoIC0gMSkgLyAxMik7XG4gIGRhdGUubW9udGggPSBNYXRoLmZsb29yKCgobW9udGggLSAxKSAlIDEyICsgMTIpICUgMTIpICsgMTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRKYWxhbGlEYXkoZGF0ZTogTmdiRGF0ZSwgZGF5OiBudW1iZXIpOiBOZ2JEYXRlIHtcbiAgbGV0IG1EYXlzID0gZ2V0RGF5c1Blck1vbnRoKGRhdGUubW9udGgsIGRhdGUueWVhcik7XG4gIGlmIChkYXkgPD0gMCkge1xuICAgIHdoaWxlIChkYXkgPD0gMCkge1xuICAgICAgZGF0ZSA9IHNldEphbGFsaU1vbnRoKGRhdGUsIGRhdGUubW9udGggLSAxKTtcbiAgICAgIG1EYXlzID0gZ2V0RGF5c1Blck1vbnRoKGRhdGUubW9udGgsIGRhdGUueWVhcik7XG4gICAgICBkYXkgKz0gbURheXM7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRheSA+IG1EYXlzKSB7XG4gICAgd2hpbGUgKGRheSA+IG1EYXlzKSB7XG4gICAgICBkYXkgLT0gbURheXM7XG4gICAgICBkYXRlID0gc2V0SmFsYWxpTW9udGgoZGF0ZSwgZGF0ZS5tb250aCArIDEpO1xuICAgICAgbURheXMgPSBnZXREYXlzUGVyTW9udGgoZGF0ZS5tb250aCwgZGF0ZS55ZWFyKTtcbiAgICB9XG4gIH1cbiAgZGF0ZS5kYXkgPSBkYXk7XG4gIHJldHVybiBkYXRlO1xufVxuXG5mdW5jdGlvbiBtb2QoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gYSAtIGIgKiBNYXRoLmZsb29yKGEgLyBiKTtcbn1cblxuZnVuY3Rpb24gZGl2KGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gIHJldHVybiBNYXRoLnRydW5jKGEgLyBiKTtcbn1cblxuLypcbiBUaGlzIGZ1bmN0aW9uIGRldGVybWluZXMgaWYgdGhlIEphbGFsaSAoUGVyc2lhbikgeWVhciBpc1xuIGxlYXAgKDM2Ni1kYXkgbG9uZykgb3IgaXMgdGhlIGNvbW1vbiB5ZWFyICgzNjUgZGF5cyksIGFuZFxuIGZpbmRzIHRoZSBkYXkgaW4gTWFyY2ggKEdyZWdvcmlhbiBjYWxlbmRhcikgb2YgdGhlIGZpcnN0XG4gZGF5IG9mIHRoZSBKYWxhbGkgeWVhciAoamFsYWxpWWVhcikuXG4gQHBhcmFtIGphbGFsaVllYXIgSmFsYWxpIGNhbGVuZGFyIHllYXIgKC02MSB0byAzMTc3KVxuIEByZXR1cm5cbiBsZWFwOiBudW1iZXIgb2YgeWVhcnMgc2luY2UgdGhlIGxhc3QgbGVhcCB5ZWFyICgwIHRvIDQpXG4gZ1llYXI6IEdyZWdvcmlhbiB5ZWFyIG9mIHRoZSBiZWdpbm5pbmcgb2YgSmFsYWxpIHllYXJcbiBtYXJjaDogdGhlIE1hcmNoIGRheSBvZiBGYXJ2YXJkaW4gdGhlIDFzdCAoMXN0IGRheSBvZiBqYWxhbGlZZWFyKVxuIEBzZWU6IGh0dHA6Ly93d3cuYXN0cm8udW5pLnRvcnVuLnBsL35rYi9QYXBlcnMvRU1QL1BlcnNpYW5DLUVNUC5odG1cbiBAc2VlOiBodHRwOi8vd3d3LmZvdXJtaWxhYi5jaC9kb2N1bWVudHMvY2FsZW5kYXIvXG4gKi9cbmZ1bmN0aW9uIGphbENhbChqYWxhbGlZZWFyOiBudW1iZXIpIHtcbiAgLy8gSmFsYWxpIHllYXJzIHN0YXJ0aW5nIHRoZSAzMy15ZWFyIHJ1bGUuXG4gIGxldCBicmVha3MgPVxuICAgICAgWy02MSwgOSwgMzgsIDE5OSwgNDI2LCA2ODYsIDc1NiwgODE4LCAxMTExLCAxMTgxLCAxMjEwLCAxNjM1LCAyMDYwLCAyMDk3LCAyMTkyLCAyMjYyLCAyMzI0LCAyMzk0LCAyNDU2LCAzMTc4XTtcbiAgY29uc3QgYnJlYWtzTGVuZ3RoID0gYnJlYWtzLmxlbmd0aDtcbiAgY29uc3QgZ1llYXIgPSBqYWxhbGlZZWFyICsgNjIxO1xuICBsZXQgbGVhcEogPSAtMTQ7XG4gIGxldCBqcCA9IGJyZWFrc1swXTtcblxuICBpZiAoamFsYWxpWWVhciA8IGpwIHx8IGphbGFsaVllYXIgPj0gYnJlYWtzW2JyZWFrc0xlbmd0aCAtIDFdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEphbGFsaSB5ZWFyICcgKyBqYWxhbGlZZWFyKTtcbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGxpbWl0aW5nIHllYXJzIGZvciB0aGUgSmFsYWxpIHllYXIgamFsYWxpWWVhci5cbiAgbGV0IGp1bXA7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYnJlYWtzTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBqbSA9IGJyZWFrc1tpXTtcbiAgICBqdW1wID0gam0gLSBqcDtcbiAgICBpZiAoamFsYWxpWWVhciA8IGptKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgbGVhcEogPSBsZWFwSiArIGRpdihqdW1wLCAzMykgKiA4ICsgZGl2KG1vZChqdW1wLCAzMyksIDQpO1xuICAgIGpwID0gam07XG4gIH1cbiAgbGV0IG4gPSBqYWxhbGlZZWFyIC0ganA7XG5cbiAgLy8gRmluZCB0aGUgbnVtYmVyIG9mIGxlYXAgeWVhcnMgZnJvbSBBRCA2MjEgdG8gdGhlIGJlZ2lubmluZ1xuICAvLyBvZiB0aGUgY3VycmVudCBKYWxhbGkgeWVhciBpbiB0aGUgUGVyc2lhbiBjYWxlbmRhci5cbiAgbGVhcEogPSBsZWFwSiArIGRpdihuLCAzMykgKiA4ICsgZGl2KG1vZChuLCAzMykgKyAzLCA0KTtcbiAgaWYgKG1vZChqdW1wLCAzMykgPT09IDQgJiYganVtcCAtIG4gPT09IDQpIHtcbiAgICBsZWFwSiArPSAxO1xuICB9XG5cbiAgLy8gQW5kIHRoZSBzYW1lIGluIHRoZSBHcmVnb3JpYW4gY2FsZW5kYXIgKHVudGlsIHRoZSB5ZWFyIGdZZWFyKS5cbiAgY29uc3QgbGVhcEcgPSBkaXYoZ1llYXIsIDQpIC0gZGl2KChkaXYoZ1llYXIsIDEwMCkgKyAxKSAqIDMsIDQpIC0gMTUwO1xuXG4gIC8vIERldGVybWluZSB0aGUgR3JlZ29yaWFuIGRhdGUgb2YgRmFydmFyZGluIHRoZSAxc3QuXG4gIGNvbnN0IG1hcmNoID0gMjAgKyBsZWFwSiAtIGxlYXBHO1xuXG4gIC8vIEZpbmQgaG93IG1hbnkgeWVhcnMgaGF2ZSBwYXNzZWQgc2luY2UgdGhlIGxhc3QgbGVhcCB5ZWFyLlxuICBpZiAoanVtcCAtIG4gPCA2KSB7XG4gICAgbiA9IG4gLSBqdW1wICsgZGl2KGp1bXAgKyA0LCAzMykgKiAzMztcbiAgfVxuICBsZXQgbGVhcCA9IG1vZChtb2QobiArIDEsIDMzKSAtIDEsIDQpO1xuICBpZiAobGVhcCA9PT0gLTEpIHtcbiAgICBsZWFwID0gNDtcbiAgfVxuXG4gIHJldHVybiB7bGVhcDogbGVhcCwgZ3k6IGdZZWFyLCBtYXJjaDogbWFyY2h9O1xufVxuXG4vKlxuIENhbGN1bGF0ZXMgR3JlZ29yaWFuIGFuZCBKdWxpYW4gY2FsZW5kYXIgZGF0ZXMgZnJvbSB0aGUgSnVsaWFuIERheSBudW1iZXJcbiAoamRuKSBmb3IgdGhlIHBlcmlvZCBzaW5jZSBqZG49LTM0ODM5NjU1IChpLmUuIHRoZSB5ZWFyIC0xMDAxMDAgb2YgYm90aFxuIGNhbGVuZGFycykgdG8gc29tZSBtaWxsaW9ucyB5ZWFycyBhaGVhZCBvZiB0aGUgcHJlc2VudC5cbiBAcGFyYW0gamRuIEp1bGlhbiBEYXkgbnVtYmVyXG4gQHJldHVyblxuIGdZZWFyOiBDYWxlbmRhciB5ZWFyICh5ZWFycyBCQyBudW1iZXJlZCAwLCAtMSwgLTIsIC4uLilcbiBnTW9udGg6IENhbGVuZGFyIG1vbnRoICgxIHRvIDEyKVxuIGdEYXk6IENhbGVuZGFyIGRheSBvZiB0aGUgbW9udGggTSAoMSB0byAyOC8yOS8zMC8zMSlcbiAqL1xuZnVuY3Rpb24ganVsaWFuVG9HcmVnb3JpYW4oanVsaWFuRGF5TnVtYmVyOiBudW1iZXIpIHtcbiAgbGV0IGogPSA0ICoganVsaWFuRGF5TnVtYmVyICsgMTM5MzYxNjMxO1xuICBqID0gaiArIGRpdihkaXYoNCAqIGp1bGlhbkRheU51bWJlciArIDE4MzE4NzcyMCwgMTQ2MDk3KSAqIDMsIDQpICogNCAtIDM5MDg7XG4gIGNvbnN0IGkgPSBkaXYobW9kKGosIDE0NjEpLCA0KSAqIDUgKyAzMDg7XG4gIGNvbnN0IGdEYXkgPSBkaXYobW9kKGksIDE1MyksIDUpICsgMTtcbiAgY29uc3QgZ01vbnRoID0gbW9kKGRpdihpLCAxNTMpLCAxMikgKyAxO1xuICBjb25zdCBnWWVhciA9IGRpdihqLCAxNDYxKSAtIDEwMDEwMCArIGRpdig4IC0gZ01vbnRoLCA2KTtcblxuICByZXR1cm4gbmV3IERhdGUoZ1llYXIsIGdNb250aCAtIDEsIGdEYXkpO1xufVxuXG4vKlxuIENvbnZlcnRzIGEgZGF0ZSBvZiB0aGUgSmFsYWxpIGNhbGVuZGFyIHRvIHRoZSBKdWxpYW4gRGF5IG51bWJlci5cbiBAcGFyYW0gankgSmFsYWxpIHllYXIgKDEgdG8gMzEwMClcbiBAcGFyYW0gam0gSmFsYWxpIG1vbnRoICgxIHRvIDEyKVxuIEBwYXJhbSBqZCBKYWxhbGkgZGF5ICgxIHRvIDI5LzMxKVxuIEByZXR1cm4gSnVsaWFuIERheSBudW1iZXJcbiAqL1xuZnVuY3Rpb24gZ3JlZ29yaWFuVG9KdWxpYW4oZ3k6IG51bWJlciwgZ206IG51bWJlciwgZ2Q6IG51bWJlcikge1xuICBsZXQgZCA9IGRpdigoZ3kgKyBkaXYoZ20gLSA4LCA2KSArIDEwMDEwMCkgKiAxNDYxLCA0KSArIGRpdigxNTMgKiBtb2QoZ20gKyA5LCAxMikgKyAyLCA1KSArIGdkIC0gMzQ4NDA0MDg7XG4gIGQgPSBkIC0gZGl2KGRpdihneSArIDEwMDEwMCArIGRpdihnbSAtIDgsIDYpLCAxMDApICogMywgNCkgKyA3NTI7XG4gIHJldHVybiBkO1xufVxuXG4vKlxuIENvbnZlcnRzIHRoZSBKdWxpYW4gRGF5IG51bWJlciB0byBhIGRhdGUgaW4gdGhlIEphbGFsaSBjYWxlbmRhci5cbiBAcGFyYW0ganVsaWFuRGF5TnVtYmVyIEp1bGlhbiBEYXkgbnVtYmVyXG4gQHJldHVyblxuIGphbGFsaVllYXI6IEphbGFsaSB5ZWFyICgxIHRvIDMxMDApXG4gamFsYWxpTW9udGg6IEphbGFsaSBtb250aCAoMSB0byAxMilcbiBqYWxhbGlEYXk6IEphbGFsaSBkYXkgKDEgdG8gMjkvMzEpXG4gKi9cbmZ1bmN0aW9uIGp1bGlhblRvSmFsYWxpKGp1bGlhbkRheU51bWJlcjogbnVtYmVyKSB7XG4gIGxldCBneSA9IGp1bGlhblRvR3JlZ29yaWFuKGp1bGlhbkRheU51bWJlcikuZ2V0RnVsbFllYXIoKSAgLy8gQ2FsY3VsYXRlIEdyZWdvcmlhbiB5ZWFyIChneSkuXG4gICAgICAsXG4gICAgICBqYWxhbGlZZWFyID0gZ3kgLSA2MjEsIHIgPSBqYWxDYWwoamFsYWxpWWVhciksIGdyZWdvcmlhbkRheSA9IGdyZWdvcmlhblRvSnVsaWFuKGd5LCAzLCByLm1hcmNoKSwgamFsYWxpRGF5LFxuICAgICAgamFsYWxpTW9udGgsIG51bWJlck9mRGF5cztcblxuICAvLyBGaW5kIG51bWJlciBvZiBkYXlzIHRoYXQgcGFzc2VkIHNpbmNlIDEgRmFydmFyZGluLlxuICBudW1iZXJPZkRheXMgPSBqdWxpYW5EYXlOdW1iZXIgLSBncmVnb3JpYW5EYXk7XG4gIGlmIChudW1iZXJPZkRheXMgPj0gMCkge1xuICAgIGlmIChudW1iZXJPZkRheXMgPD0gMTg1KSB7XG4gICAgICAvLyBUaGUgZmlyc3QgNiBtb250aHMuXG4gICAgICBqYWxhbGlNb250aCA9IDEgKyBkaXYobnVtYmVyT2ZEYXlzLCAzMSk7XG4gICAgICBqYWxhbGlEYXkgPSBtb2QobnVtYmVyT2ZEYXlzLCAzMSkgKyAxO1xuICAgICAgcmV0dXJuIG5ldyBOZ2JEYXRlKGphbGFsaVllYXIsIGphbGFsaU1vbnRoLCBqYWxhbGlEYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgcmVtYWluaW5nIG1vbnRocy5cbiAgICAgIG51bWJlck9mRGF5cyAtPSAxODY7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFByZXZpb3VzIEphbGFsaSB5ZWFyLlxuICAgIGphbGFsaVllYXIgLT0gMTtcbiAgICBudW1iZXJPZkRheXMgKz0gMTc5O1xuICAgIGlmIChyLmxlYXAgPT09IDEpIHtcbiAgICAgIG51bWJlck9mRGF5cyArPSAxO1xuICAgIH1cbiAgfVxuICBqYWxhbGlNb250aCA9IDcgKyBkaXYobnVtYmVyT2ZEYXlzLCAzMCk7XG4gIGphbGFsaURheSA9IG1vZChudW1iZXJPZkRheXMsIDMwKSArIDE7XG5cbiAgcmV0dXJuIG5ldyBOZ2JEYXRlKGphbGFsaVllYXIsIGphbGFsaU1vbnRoLCBqYWxhbGlEYXkpO1xufVxuXG4vKlxuIENvbnZlcnRzIGEgZGF0ZSBvZiB0aGUgSmFsYWxpIGNhbGVuZGFyIHRvIHRoZSBKdWxpYW4gRGF5IG51bWJlci5cbiBAcGFyYW0galllYXIgSmFsYWxpIHllYXIgKDEgdG8gMzEwMClcbiBAcGFyYW0gak1vbnRoIEphbGFsaSBtb250aCAoMSB0byAxMilcbiBAcGFyYW0gakRheSBKYWxhbGkgZGF5ICgxIHRvIDI5LzMxKVxuIEByZXR1cm4gSnVsaWFuIERheSBudW1iZXJcbiAqL1xuZnVuY3Rpb24gamFsYWxpVG9KdWxpYW4oalllYXI6IG51bWJlciwgak1vbnRoOiBudW1iZXIsIGpEYXk6IG51bWJlcikge1xuICBsZXQgciA9IGphbENhbChqWWVhcik7XG4gIHJldHVybiBncmVnb3JpYW5Ub0p1bGlhbihyLmd5LCAzLCByLm1hcmNoKSArIChqTW9udGggLSAxKSAqIDMxIC0gZGl2KGpNb250aCwgNykgKiAoak1vbnRoIC0gNykgKyBqRGF5IC0gMTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIHNwZWNpZmljIGphbGFsaSBtb250aC5cbiAqL1xuZnVuY3Rpb24gZ2V0RGF5c1Blck1vbnRoKG1vbnRoOiBudW1iZXIsIHllYXI6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChtb250aCA8PSA2KSB7XG4gICAgcmV0dXJuIDMxO1xuICB9XG4gIGlmIChtb250aCA8PSAxMSkge1xuICAgIHJldHVybiAzMDtcbiAgfVxuICBpZiAoamFsQ2FsKHllYXIpLmxlYXAgPT09IDApIHtcbiAgICByZXR1cm4gMzA7XG4gIH1cbiAgcmV0dXJuIDI5O1xufVxuIl19