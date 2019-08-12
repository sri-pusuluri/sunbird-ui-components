/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isInteger } from '../util/util';
/**
 * A simple class that represents a date that datepicker also uses internally.
 *
 * It is the implementation of the `NgbDateStruct` interface that adds some convenience methods,
 * like `.equals()`, `.before()`, etc.
 *
 * All datepicker APIs consume `NgbDateStruct`, but return `NgbDate`.
 *
 * In many cases it is simpler to manipulate these objects together with
 * [`NgbCalendar`](#/components/datepicker/api#NgbCalendar) than native JS Dates.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 *
 * \@since 3.0.0
 */
export class NgbDate {
    /**
     * A **static method** that creates a new date object from the `NgbDateStruct`,
     *
     * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
     *
     * If the `date` is already of `NgbDate` type, the method will return the same object.
     * @param {?} date
     * @return {?}
     */
    static from(date) {
        if (date instanceof NgbDate) {
            return date;
        }
        return date ? new NgbDate(date.year, date.month, date.day) : null;
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     */
    constructor(year, month, day) {
        this.year = isInteger(year) ? year : null;
        this.month = isInteger(month) ? month : null;
        this.day = isInteger(day) ? day : null;
    }
    /**
     * Checks if the current date is equal to another date.
     * @param {?} other
     * @return {?}
     */
    equals(other) {
        return other && this.year === other.year && this.month === other.month && this.day === other.day;
    }
    /**
     * Checks if the current date is before another date.
     * @param {?} other
     * @return {?}
     */
    before(other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    }
    /**
     * Checks if the current date is after another date.
     * @param {?} other
     * @return {?}
     */
    after(other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    }
}
if (false) {
    /**
     * The year, for example 2016
     * @type {?}
     */
    NgbDate.prototype.year;
    /**
     * The month, for example 1=Jan ... 12=Dec as in ISO 8601
     * @type {?}
     */
    NgbDate.prototype.month;
    /**
     * The day of month, starting with 1
     * @type {?}
     */
    NgbDate.prototype.day;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJkYXRlcGlja2VyL25nYi1kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ2QyxNQUFNLE9BQU8sT0FBTzs7Ozs7Ozs7OztJQXVCbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFtQjtRQUM3QixJQUFJLElBQUksWUFBWSxPQUFPLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEUsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxJQUFZLEVBQUUsS0FBYSxFQUFFLEdBQVc7UUFDbEQsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFDLEtBQW9CO1FBQ3pCLE9BQU8sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ25HLENBQUM7Ozs7OztJQUtELE1BQU0sQ0FBQyxLQUFvQjtRQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzVCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUM5QixPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDakM7U0FDRjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7Ozs7SUFLRCxLQUFLLENBQUMsS0FBb0I7UUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDOUIsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ2pDO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7SUEzRUMsdUJBQWE7Ozs7O0lBS2Isd0JBQWM7Ozs7O0lBS2Qsc0JBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nYkRhdGVTdHJ1Y3R9IGZyb20gJy4vbmdiLWRhdGUtc3RydWN0JztcbmltcG9ydCB7aXNJbnRlZ2VyfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG4vKipcbiAqIEEgc2ltcGxlIGNsYXNzIHRoYXQgcmVwcmVzZW50cyBhIGRhdGUgdGhhdCBkYXRlcGlja2VyIGFsc28gdXNlcyBpbnRlcm5hbGx5LlxuICpcbiAqIEl0IGlzIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgYE5nYkRhdGVTdHJ1Y3RgIGludGVyZmFjZSB0aGF0IGFkZHMgc29tZSBjb252ZW5pZW5jZSBtZXRob2RzLFxuICogbGlrZSBgLmVxdWFscygpYCwgYC5iZWZvcmUoKWAsIGV0Yy5cbiAqXG4gKiBBbGwgZGF0ZXBpY2tlciBBUElzIGNvbnN1bWUgYE5nYkRhdGVTdHJ1Y3RgLCBidXQgcmV0dXJuIGBOZ2JEYXRlYC5cbiAqXG4gKiBJbiBtYW55IGNhc2VzIGl0IGlzIHNpbXBsZXIgdG8gbWFuaXB1bGF0ZSB0aGVzZSBvYmplY3RzIHRvZ2V0aGVyIHdpdGhcbiAqIFtgTmdiQ2FsZW5kYXJgXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9hcGkjTmdiQ2FsZW5kYXIpIHRoYW4gbmF0aXZlIEpTIERhdGVzLlxuICpcbiAqIFNlZSB0aGUgW2RhdGUgZm9ybWF0IG92ZXJ2aWV3XSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9vdmVydmlldyNkYXRlLW1vZGVsKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzaW5jZSAzLjAuMFxuICovXG5leHBvcnQgY2xhc3MgTmdiRGF0ZSBpbXBsZW1lbnRzIE5nYkRhdGVTdHJ1Y3Qge1xuICAvKipcbiAgICogVGhlIHllYXIsIGZvciBleGFtcGxlIDIwMTZcbiAgICovXG4gIHllYXI6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIG1vbnRoLCBmb3IgZXhhbXBsZSAxPUphbiAuLi4gMTI9RGVjIGFzIGluIElTTyA4NjAxXG4gICAqL1xuICBtb250aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IG9mIG1vbnRoLCBzdGFydGluZyB3aXRoIDFcbiAgICovXG4gIGRheTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBICoqc3RhdGljIG1ldGhvZCoqIHRoYXQgY3JlYXRlcyBhIG5ldyBkYXRlIG9iamVjdCBmcm9tIHRoZSBgTmdiRGF0ZVN0cnVjdGAsXG4gICAqXG4gICAqIGV4LiBgTmdiRGF0ZS5mcm9tKHt5ZWFyOiAyMDAwLCBtb250aDogNSwgZGF5OiAxfSlgLlxuICAgKlxuICAgKiBJZiB0aGUgYGRhdGVgIGlzIGFscmVhZHkgb2YgYE5nYkRhdGVgIHR5cGUsIHRoZSBtZXRob2Qgd2lsbCByZXR1cm4gdGhlIHNhbWUgb2JqZWN0LlxuICAgKi9cbiAgc3RhdGljIGZyb20oZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IE5nYkRhdGUge1xuICAgIGlmIChkYXRlIGluc3RhbmNlb2YgTmdiRGF0ZSkge1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIHJldHVybiBkYXRlID8gbmV3IE5nYkRhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSkgOiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXk6IG51bWJlcikge1xuICAgIHRoaXMueWVhciA9IGlzSW50ZWdlcih5ZWFyKSA/IHllYXIgOiBudWxsO1xuICAgIHRoaXMubW9udGggPSBpc0ludGVnZXIobW9udGgpID8gbW9udGggOiBudWxsO1xuICAgIHRoaXMuZGF5ID0gaXNJbnRlZ2VyKGRheSkgPyBkYXkgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCBkYXRlIGlzIGVxdWFsIHRvIGFub3RoZXIgZGF0ZS5cbiAgICovXG4gIGVxdWFscyhvdGhlcjogTmdiRGF0ZVN0cnVjdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBvdGhlciAmJiB0aGlzLnllYXIgPT09IG90aGVyLnllYXIgJiYgdGhpcy5tb250aCA9PT0gb3RoZXIubW9udGggJiYgdGhpcy5kYXkgPT09IG90aGVyLmRheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgZGF0ZSBpcyBiZWZvcmUgYW5vdGhlciBkYXRlLlxuICAgKi9cbiAgYmVmb3JlKG90aGVyOiBOZ2JEYXRlU3RydWN0KTogYm9vbGVhbiB7XG4gICAgaWYgKCFvdGhlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnllYXIgPT09IG90aGVyLnllYXIpIHtcbiAgICAgIGlmICh0aGlzLm1vbnRoID09PSBvdGhlci5tb250aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXkgPT09IG90aGVyLmRheSA/IGZhbHNlIDogdGhpcy5kYXkgPCBvdGhlci5kYXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5tb250aCA8IG90aGVyLm1vbnRoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy55ZWFyIDwgb3RoZXIueWVhcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IGRhdGUgaXMgYWZ0ZXIgYW5vdGhlciBkYXRlLlxuICAgKi9cbiAgYWZ0ZXIob3RoZXI6IE5nYkRhdGVTdHJ1Y3QpOiBib29sZWFuIHtcbiAgICBpZiAoIW90aGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnllYXIgPT09IG90aGVyLnllYXIpIHtcbiAgICAgIGlmICh0aGlzLm1vbnRoID09PSBvdGhlci5tb250aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXkgPT09IG90aGVyLmRheSA/IGZhbHNlIDogdGhpcy5kYXkgPiBvdGhlci5kYXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5tb250aCA+IG90aGVyLm1vbnRoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy55ZWFyID4gb3RoZXIueWVhcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==