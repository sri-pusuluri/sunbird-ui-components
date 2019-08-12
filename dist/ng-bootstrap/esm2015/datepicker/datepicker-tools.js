/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgbDate } from './ngb-date';
import { isDefined } from '../util/util';
/**
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */
export function isChangedDate(prev, next) {
    return !dateComparator(prev, next);
}
/**
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */
export function isChangedMonth(prev, next) {
    return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
}
/**
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */
export function dateComparator(prev, next) {
    return (!prev && !next) || (!!prev && !!next && prev.equals(next));
}
/**
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
export function checkMinBeforeMax(minDate, maxDate) {
    if (maxDate && minDate && maxDate.before(minDate)) {
        throw new Error(`'maxDate' ${maxDate} should be greater than 'minDate' ${minDate}`);
    }
}
/**
 * @param {?} date
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
export function checkDateInRange(date, minDate, maxDate) {
    if (date && minDate && date.before(minDate)) {
        return minDate;
    }
    if (date && maxDate && date.after(maxDate)) {
        return maxDate;
    }
    return date;
}
/**
 * @param {?} date
 * @param {?} state
 * @return {?}
 */
export function isDateSelectable(date, state) {
    const { minDate, maxDate, disabled, markDisabled } = state;
    // clang-format off
    return !(!isDefined(date) ||
        disabled ||
        (markDisabled && markDisabled(date, { year: date.year, month: date.month })) ||
        (minDate && date.before(minDate)) ||
        (maxDate && date.after(maxDate)));
    // clang-format on
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
export function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    /** @type {?} */
    let months = calendar.getMonths(date.year);
    if (minDate && date.year === minDate.year) {
        /** @type {?} */
        const index = months.findIndex((/**
         * @param {?} month
         * @return {?}
         */
        month => month === minDate.month));
        months = months.slice(index);
    }
    if (maxDate && date.year === maxDate.year) {
        /** @type {?} */
        const index = months.findIndex((/**
         * @param {?} month
         * @return {?}
         */
        month => month === maxDate.month));
        months = months.slice(0, index + 1);
    }
    return months;
}
/**
 * @param {?} date
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
export function generateSelectBoxYears(date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    /** @type {?} */
    const start = minDate && minDate.year || date.year - 10;
    /** @type {?} */
    const end = maxDate && maxDate.year || date.year + 10;
    return Array.from({ length: end - start + 1 }, (/**
     * @param {?} e
     * @param {?} i
     * @return {?}
     */
    (e, i) => start + i));
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} maxDate
 * @return {?}
 */
export function nextMonthDisabled(calendar, date, maxDate) {
    return maxDate && calendar.getNext(date, 'm').after(maxDate);
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} minDate
 * @return {?}
 */
export function prevMonthDisabled(calendar, date, minDate) {
    /** @type {?} */
    const prevDate = calendar.getPrev(date, 'm');
    return minDate && (prevDate.year === minDate.year && prevDate.month < minDate.month ||
        prevDate.year < minDate.year && minDate.month === 1);
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} state
 * @param {?} i18n
 * @param {?} force
 * @return {?}
 */
export function buildMonths(calendar, date, state, i18n, force) {
    const { displayMonths, months } = state;
    // move old months to a temporary array
    /** @type {?} */
    const monthsToReuse = months.splice(0, months.length);
    // generate new first dates, nullify or reuse months
    /** @type {?} */
    const firstDates = Array.from({ length: displayMonths }, (/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    (_, i) => {
        /** @type {?} */
        const firstDate = calendar.getNext(date, 'm', i);
        months[i] = null;
        if (!force) {
            /** @type {?} */
            const reusedIndex = monthsToReuse.findIndex((/**
             * @param {?} month
             * @return {?}
             */
            month => month.firstDate.equals(firstDate)));
            // move reused month back to months
            if (reusedIndex !== -1) {
                months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
            }
        }
        return firstDate;
    }));
    // rebuild nullified months
    firstDates.forEach((/**
     * @param {?} firstDate
     * @param {?} i
     * @return {?}
     */
    (firstDate, i) => {
        if (months[i] === null) {
            months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || (/** @type {?} */ ({})));
        }
    }));
    return months;
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} state
 * @param {?} i18n
 * @param {?=} month
 * @return {?}
 */
export function buildMonth(calendar, date, state, i18n, month = (/** @type {?} */ ({}))) {
    const { dayTemplateData, minDate, maxDate, firstDayOfWeek, markDisabled, outsideDays } = state;
    /** @type {?} */
    const calendarToday = calendar.getToday();
    month.firstDate = null;
    month.lastDate = null;
    month.number = date.month;
    month.year = date.year;
    month.weeks = month.weeks || [];
    month.weekdays = month.weekdays || [];
    date = getFirstViewDate(calendar, date, firstDayOfWeek);
    // month has weeks
    for (let week = 0; week < calendar.getWeeksPerMonth(); week++) {
        /** @type {?} */
        let weekObject = month.weeks[week];
        if (!weekObject) {
            weekObject = month.weeks[week] = { number: 0, days: [], collapsed: true };
        }
        /** @type {?} */
        const days = weekObject.days;
        // week has days
        for (let day = 0; day < calendar.getDaysPerWeek(); day++) {
            if (week === 0) {
                month.weekdays[day] = calendar.getWeekday(date);
            }
            /** @type {?} */
            const newDate = new NgbDate(date.year, date.month, date.day);
            /** @type {?} */
            const nextDate = calendar.getNext(newDate);
            /** @type {?} */
            const ariaLabel = i18n.getDayAriaLabel(newDate);
            // marking date as disabled
            /** @type {?} */
            let disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
            if (!disabled && markDisabled) {
                disabled = markDisabled(newDate, { month: month.number, year: month.year });
            }
            // today
            /** @type {?} */
            let today = newDate.equals(calendarToday);
            // adding user-provided data to the context
            /** @type {?} */
            let contextUserData = dayTemplateData ? dayTemplateData(newDate, { month: month.number, year: month.year }) : undefined;
            // saving first date of the month
            if (month.firstDate === null && newDate.month === month.number) {
                month.firstDate = newDate;
            }
            // saving last date of the month
            if (newDate.month === month.number && nextDate.month !== month.number) {
                month.lastDate = newDate;
            }
            /** @type {?} */
            let dayObject = days[day];
            if (!dayObject) {
                dayObject = days[day] = (/** @type {?} */ ({}));
            }
            dayObject.date = newDate;
            dayObject.context = Object.assign(dayObject.context || {}, {
                $implicit: newDate,
                date: newDate,
                data: contextUserData,
                currentMonth: month.number, disabled,
                focused: false,
                selected: false, today
            });
            dayObject.tabindex = -1;
            dayObject.ariaLabel = ariaLabel;
            dayObject.hidden = false;
            date = nextDate;
        }
        weekObject.number = calendar.getWeekNumber(days.map((/**
         * @param {?} day
         * @return {?}
         */
        day => day.date)), firstDayOfWeek);
        // marking week as collapsed
        weekObject.collapsed = outsideDays === 'collapsed' && days[0].date.month !== month.number &&
            days[days.length - 1].date.month !== month.number;
    }
    return month;
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} firstDayOfWeek
 * @return {?}
 */
export function getFirstViewDate(calendar, date, firstDayOfWeek) {
    /** @type {?} */
    const daysPerWeek = calendar.getDaysPerWeek();
    /** @type {?} */
    const firstMonthDate = new NgbDate(date.year, date.month, 1);
    /** @type {?} */
    const dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
    return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci10b29scy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdW5iaXJkLWVkL3N1bmJpcmQtdWktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIvZGF0ZXBpY2tlci10b29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUduQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFHdkMsTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUFhLEVBQUUsSUFBYTtJQUN4RCxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyQyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLElBQWEsRUFBRSxJQUFhO0lBQ3pELE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztBQUMvRyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLElBQWEsRUFBRSxJQUFhO0lBQ3pELE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNyRSxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsT0FBZ0IsRUFBRSxPQUFnQjtJQUNsRSxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksT0FB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QUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDO0tBQ3ZEO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLFFBQXFCLEVBQUUsSUFBYSxFQUFFLGNBQXNCOztVQUNyRixXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsRUFBRTs7VUFDdkMsY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7O1VBQ3RELFNBQVMsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFdBQVc7SUFDbkUsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEdBQUcsU0FBUyxHQUFHLGNBQWMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0FBQ3pHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nYkRhdGV9IGZyb20gJy4vbmdiLWRhdGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyVmlld01vZGVsLCBEYXlWaWV3TW9kZWwsIE1vbnRoVmlld01vZGVsfSBmcm9tICcuL2RhdGVwaWNrZXItdmlldy1tb2RlbCc7XG5pbXBvcnQge05nYkNhbGVuZGFyfSBmcm9tICcuL25nYi1jYWxlbmRhcic7XG5pbXBvcnQge2lzRGVmaW5lZH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7TmdiRGF0ZXBpY2tlckkxOG59IGZyb20gJy4vZGF0ZXBpY2tlci1pMThuJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hhbmdlZERhdGUocHJldjogTmdiRGF0ZSwgbmV4dDogTmdiRGF0ZSkge1xuICByZXR1cm4gIWRhdGVDb21wYXJhdG9yKHByZXYsIG5leHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaGFuZ2VkTW9udGgocHJldjogTmdiRGF0ZSwgbmV4dDogTmdiRGF0ZSkge1xuICByZXR1cm4gIXByZXYgJiYgIW5leHQgPyBmYWxzZSA6ICFwcmV2IHx8ICFuZXh0ID8gdHJ1ZSA6IHByZXYueWVhciAhPT0gbmV4dC55ZWFyIHx8IHByZXYubW9udGggIT09IG5leHQubW9udGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRlQ29tcGFyYXRvcihwcmV2OiBOZ2JEYXRlLCBuZXh0OiBOZ2JEYXRlKSB7XG4gIHJldHVybiAoIXByZXYgJiYgIW5leHQpIHx8ICghIXByZXYgJiYgISFuZXh0ICYmIHByZXYuZXF1YWxzKG5leHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluQmVmb3JlTWF4KG1pbkRhdGU6IE5nYkRhdGUsIG1heERhdGU6IE5nYkRhdGUpIHtcbiAgaWYgKG1heERhdGUgJiYgbWluRGF0ZSAmJiBtYXhEYXRlLmJlZm9yZShtaW5EYXRlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJ21heERhdGUnICR7bWF4RGF0ZX0gc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiAnbWluRGF0ZScgJHttaW5EYXRlfWApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RhdGVJblJhbmdlKGRhdGU6IE5nYkRhdGUsIG1pbkRhdGU6IE5nYkRhdGUsIG1heERhdGU6IE5nYkRhdGUpOiBOZ2JEYXRlIHtcbiAgaWYgKGRhdGUgJiYgbWluRGF0ZSAmJiBkYXRlLmJlZm9yZShtaW5EYXRlKSkge1xuICAgIHJldHVybiBtaW5EYXRlO1xuICB9XG4gIGlmIChkYXRlICYmIG1heERhdGUgJiYgZGF0ZS5hZnRlcihtYXhEYXRlKSkge1xuICAgIHJldHVybiBtYXhEYXRlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGVTZWxlY3RhYmxlKGRhdGU6IE5nYkRhdGUsIHN0YXRlOiBEYXRlcGlja2VyVmlld01vZGVsKSB7XG4gIGNvbnN0IHttaW5EYXRlLCBtYXhEYXRlLCBkaXNhYmxlZCwgbWFya0Rpc2FibGVkfSA9IHN0YXRlO1xuICAvLyBjbGFuZy1mb3JtYXQgb2ZmXG4gIHJldHVybiAhKFxuICAgICFpc0RlZmluZWQoZGF0ZSkgfHxcbiAgICBkaXNhYmxlZCB8fFxuICAgIChtYXJrRGlzYWJsZWQgJiYgbWFya0Rpc2FibGVkKGRhdGUsIHt5ZWFyOiBkYXRlLnllYXIsIG1vbnRoOiBkYXRlLm1vbnRofSkpIHx8XG4gICAgKG1pbkRhdGUgJiYgZGF0ZS5iZWZvcmUobWluRGF0ZSkpIHx8XG4gICAgKG1heERhdGUgJiYgZGF0ZS5hZnRlcihtYXhEYXRlKSlcbiAgKTtcbiAgLy8gY2xhbmctZm9ybWF0IG9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNlbGVjdEJveE1vbnRocyhjYWxlbmRhcjogTmdiQ2FsZW5kYXIsIGRhdGU6IE5nYkRhdGUsIG1pbkRhdGU6IE5nYkRhdGUsIG1heERhdGU6IE5nYkRhdGUpIHtcbiAgaWYgKCFkYXRlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgbGV0IG1vbnRocyA9IGNhbGVuZGFyLmdldE1vbnRocyhkYXRlLnllYXIpO1xuXG4gIGlmIChtaW5EYXRlICYmIGRhdGUueWVhciA9PT0gbWluRGF0ZS55ZWFyKSB7XG4gICAgY29uc3QgaW5kZXggPSBtb250aHMuZmluZEluZGV4KG1vbnRoID0+IG1vbnRoID09PSBtaW5EYXRlLm1vbnRoKTtcbiAgICBtb250aHMgPSBtb250aHMuc2xpY2UoaW5kZXgpO1xuICB9XG5cbiAgaWYgKG1heERhdGUgJiYgZGF0ZS55ZWFyID09PSBtYXhEYXRlLnllYXIpIHtcbiAgICBjb25zdCBpbmRleCA9IG1vbnRocy5maW5kSW5kZXgobW9udGggPT4gbW9udGggPT09IG1heERhdGUubW9udGgpO1xuICAgIG1vbnRocyA9IG1vbnRocy5zbGljZSgwLCBpbmRleCArIDEpO1xuICB9XG5cbiAgcmV0dXJuIG1vbnRocztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU2VsZWN0Qm94WWVhcnMoZGF0ZTogTmdiRGF0ZSwgbWluRGF0ZTogTmdiRGF0ZSwgbWF4RGF0ZTogTmdiRGF0ZSkge1xuICBpZiAoIWRhdGUpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBzdGFydCA9IG1pbkRhdGUgJiYgbWluRGF0ZS55ZWFyIHx8IGRhdGUueWVhciAtIDEwO1xuICBjb25zdCBlbmQgPSBtYXhEYXRlICYmIG1heERhdGUueWVhciB8fCBkYXRlLnllYXIgKyAxMDtcblxuICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiBlbmQgLSBzdGFydCArIDF9LCAoZSwgaSkgPT4gc3RhcnQgKyBpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHRNb250aERpc2FibGVkKGNhbGVuZGFyOiBOZ2JDYWxlbmRhciwgZGF0ZTogTmdiRGF0ZSwgbWF4RGF0ZTogTmdiRGF0ZSkge1xuICByZXR1cm4gbWF4RGF0ZSAmJiBjYWxlbmRhci5nZXROZXh0KGRhdGUsICdtJykuYWZ0ZXIobWF4RGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2TW9udGhEaXNhYmxlZChjYWxlbmRhcjogTmdiQ2FsZW5kYXIsIGRhdGU6IE5nYkRhdGUsIG1pbkRhdGU6IE5nYkRhdGUpIHtcbiAgY29uc3QgcHJldkRhdGUgPSBjYWxlbmRhci5nZXRQcmV2KGRhdGUsICdtJyk7XG4gIHJldHVybiBtaW5EYXRlICYmIChwcmV2RGF0ZS55ZWFyID09PSBtaW5EYXRlLnllYXIgJiYgcHJldkRhdGUubW9udGggPCBtaW5EYXRlLm1vbnRoIHx8XG4gICAgICAgICAgICAgICAgICAgICBwcmV2RGF0ZS55ZWFyIDwgbWluRGF0ZS55ZWFyICYmIG1pbkRhdGUubW9udGggPT09IDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRNb250aHMoXG4gICAgY2FsZW5kYXI6IE5nYkNhbGVuZGFyLCBkYXRlOiBOZ2JEYXRlLCBzdGF0ZTogRGF0ZXBpY2tlclZpZXdNb2RlbCwgaTE4bjogTmdiRGF0ZXBpY2tlckkxOG4sXG4gICAgZm9yY2U6IGJvb2xlYW4pOiBNb250aFZpZXdNb2RlbFtdIHtcbiAgY29uc3Qge2Rpc3BsYXlNb250aHMsIG1vbnRoc30gPSBzdGF0ZTtcbiAgLy8gbW92ZSBvbGQgbW9udGhzIHRvIGEgdGVtcG9yYXJ5IGFycmF5XG4gIGNvbnN0IG1vbnRoc1RvUmV1c2UgPSBtb250aHMuc3BsaWNlKDAsIG1vbnRocy5sZW5ndGgpO1xuXG4gIC8vIGdlbmVyYXRlIG5ldyBmaXJzdCBkYXRlcywgbnVsbGlmeSBvciByZXVzZSBtb250aHNcbiAgY29uc3QgZmlyc3REYXRlcyA9IEFycmF5LmZyb20oe2xlbmd0aDogZGlzcGxheU1vbnRoc30sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgZmlyc3REYXRlID0gY2FsZW5kYXIuZ2V0TmV4dChkYXRlLCAnbScsIGkpO1xuICAgIG1vbnRoc1tpXSA9IG51bGw7XG5cbiAgICBpZiAoIWZvcmNlKSB7XG4gICAgICBjb25zdCByZXVzZWRJbmRleCA9IG1vbnRoc1RvUmV1c2UuZmluZEluZGV4KG1vbnRoID0+IG1vbnRoLmZpcnN0RGF0ZS5lcXVhbHMoZmlyc3REYXRlKSk7XG4gICAgICAvLyBtb3ZlIHJldXNlZCBtb250aCBiYWNrIHRvIG1vbnRoc1xuICAgICAgaWYgKHJldXNlZEluZGV4ICE9PSAtMSkge1xuICAgICAgICBtb250aHNbaV0gPSBtb250aHNUb1JldXNlLnNwbGljZShyZXVzZWRJbmRleCwgMSlbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0RGF0ZTtcbiAgfSk7XG5cbiAgLy8gcmVidWlsZCBudWxsaWZpZWQgbW9udGhzXG4gIGZpcnN0RGF0ZXMuZm9yRWFjaCgoZmlyc3REYXRlLCBpKSA9PiB7XG4gICAgaWYgKG1vbnRoc1tpXSA9PT0gbnVsbCkge1xuICAgICAgbW9udGhzW2ldID0gYnVpbGRNb250aChjYWxlbmRhciwgZmlyc3REYXRlLCBzdGF0ZSwgaTE4biwgbW9udGhzVG9SZXVzZS5zaGlmdCgpIHx8IHt9IGFzIE1vbnRoVmlld01vZGVsKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBtb250aHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE1vbnRoKFxuICAgIGNhbGVuZGFyOiBOZ2JDYWxlbmRhciwgZGF0ZTogTmdiRGF0ZSwgc3RhdGU6IERhdGVwaWNrZXJWaWV3TW9kZWwsIGkxOG46IE5nYkRhdGVwaWNrZXJJMThuLFxuICAgIG1vbnRoOiBNb250aFZpZXdNb2RlbCA9IHt9IGFzIE1vbnRoVmlld01vZGVsKTogTW9udGhWaWV3TW9kZWwge1xuICBjb25zdCB7ZGF5VGVtcGxhdGVEYXRhLCBtaW5EYXRlLCBtYXhEYXRlLCBmaXJzdERheU9mV2VlaywgbWFya0Rpc2FibGVkLCBvdXRzaWRlRGF5c30gPSBzdGF0ZTtcbiAgY29uc3QgY2FsZW5kYXJUb2RheSA9IGNhbGVuZGFyLmdldFRvZGF5KCk7XG5cbiAgbW9udGguZmlyc3REYXRlID0gbnVsbDtcbiAgbW9udGgubGFzdERhdGUgPSBudWxsO1xuICBtb250aC5udW1iZXIgPSBkYXRlLm1vbnRoO1xuICBtb250aC55ZWFyID0gZGF0ZS55ZWFyO1xuICBtb250aC53ZWVrcyA9IG1vbnRoLndlZWtzIHx8IFtdO1xuICBtb250aC53ZWVrZGF5cyA9IG1vbnRoLndlZWtkYXlzIHx8IFtdO1xuXG4gIGRhdGUgPSBnZXRGaXJzdFZpZXdEYXRlKGNhbGVuZGFyLCBkYXRlLCBmaXJzdERheU9mV2Vlayk7XG5cbiAgLy8gbW9udGggaGFzIHdlZWtzXG4gIGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgY2FsZW5kYXIuZ2V0V2Vla3NQZXJNb250aCgpOyB3ZWVrKyspIHtcbiAgICBsZXQgd2Vla09iamVjdCA9IG1vbnRoLndlZWtzW3dlZWtdO1xuICAgIGlmICghd2Vla09iamVjdCkge1xuICAgICAgd2Vla09iamVjdCA9IG1vbnRoLndlZWtzW3dlZWtdID0ge251bWJlcjogMCwgZGF5czogW10sIGNvbGxhcHNlZDogdHJ1ZX07XG4gICAgfVxuICAgIGNvbnN0IGRheXMgPSB3ZWVrT2JqZWN0LmRheXM7XG5cbiAgICAvLyB3ZWVrIGhhcyBkYXlzXG4gICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgY2FsZW5kYXIuZ2V0RGF5c1BlcldlZWsoKTsgZGF5KyspIHtcbiAgICAgIGlmICh3ZWVrID09PSAwKSB7XG4gICAgICAgIG1vbnRoLndlZWtkYXlzW2RheV0gPSBjYWxlbmRhci5nZXRXZWVrZGF5KGRhdGUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdEYXRlID0gbmV3IE5nYkRhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSk7XG4gICAgICBjb25zdCBuZXh0RGF0ZSA9IGNhbGVuZGFyLmdldE5leHQobmV3RGF0ZSk7XG5cbiAgICAgIGNvbnN0IGFyaWFMYWJlbCA9IGkxOG4uZ2V0RGF5QXJpYUxhYmVsKG5ld0RhdGUpO1xuXG4gICAgICAvLyBtYXJraW5nIGRhdGUgYXMgZGlzYWJsZWRcbiAgICAgIGxldCBkaXNhYmxlZCA9ICEhKChtaW5EYXRlICYmIG5ld0RhdGUuYmVmb3JlKG1pbkRhdGUpKSB8fCAobWF4RGF0ZSAmJiBuZXdEYXRlLmFmdGVyKG1heERhdGUpKSk7XG4gICAgICBpZiAoIWRpc2FibGVkICYmIG1hcmtEaXNhYmxlZCkge1xuICAgICAgICBkaXNhYmxlZCA9IG1hcmtEaXNhYmxlZChuZXdEYXRlLCB7bW9udGg6IG1vbnRoLm51bWJlciwgeWVhcjogbW9udGgueWVhcn0pO1xuICAgICAgfVxuXG4gICAgICAvLyB0b2RheVxuICAgICAgbGV0IHRvZGF5ID0gbmV3RGF0ZS5lcXVhbHMoY2FsZW5kYXJUb2RheSk7XG5cbiAgICAgIC8vIGFkZGluZyB1c2VyLXByb3ZpZGVkIGRhdGEgdG8gdGhlIGNvbnRleHRcbiAgICAgIGxldCBjb250ZXh0VXNlckRhdGEgPVxuICAgICAgICAgIGRheVRlbXBsYXRlRGF0YSA/IGRheVRlbXBsYXRlRGF0YShuZXdEYXRlLCB7bW9udGg6IG1vbnRoLm51bWJlciwgeWVhcjogbW9udGgueWVhcn0pIDogdW5kZWZpbmVkO1xuXG4gICAgICAvLyBzYXZpbmcgZmlyc3QgZGF0ZSBvZiB0aGUgbW9udGhcbiAgICAgIGlmIChtb250aC5maXJzdERhdGUgPT09IG51bGwgJiYgbmV3RGF0ZS5tb250aCA9PT0gbW9udGgubnVtYmVyKSB7XG4gICAgICAgIG1vbnRoLmZpcnN0RGF0ZSA9IG5ld0RhdGU7XG4gICAgICB9XG5cbiAgICAgIC8vIHNhdmluZyBsYXN0IGRhdGUgb2YgdGhlIG1vbnRoXG4gICAgICBpZiAobmV3RGF0ZS5tb250aCA9PT0gbW9udGgubnVtYmVyICYmIG5leHREYXRlLm1vbnRoICE9PSBtb250aC5udW1iZXIpIHtcbiAgICAgICAgbW9udGgubGFzdERhdGUgPSBuZXdEYXRlO1xuICAgICAgfVxuXG4gICAgICBsZXQgZGF5T2JqZWN0ID0gZGF5c1tkYXldO1xuICAgICAgaWYgKCFkYXlPYmplY3QpIHtcbiAgICAgICAgZGF5T2JqZWN0ID0gZGF5c1tkYXldID0ge30gYXMgRGF5Vmlld01vZGVsO1xuICAgICAgfVxuICAgICAgZGF5T2JqZWN0LmRhdGUgPSBuZXdEYXRlO1xuICAgICAgZGF5T2JqZWN0LmNvbnRleHQgPSBPYmplY3QuYXNzaWduKGRheU9iamVjdC5jb250ZXh0IHx8IHt9LCB7XG4gICAgICAgICRpbXBsaWNpdDogbmV3RGF0ZSxcbiAgICAgICAgZGF0ZTogbmV3RGF0ZSxcbiAgICAgICAgZGF0YTogY29udGV4dFVzZXJEYXRhLFxuICAgICAgICBjdXJyZW50TW9udGg6IG1vbnRoLm51bWJlciwgZGlzYWJsZWQsXG4gICAgICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2UsIHRvZGF5XG4gICAgICB9KTtcbiAgICAgIGRheU9iamVjdC50YWJpbmRleCA9IC0xO1xuICAgICAgZGF5T2JqZWN0LmFyaWFMYWJlbCA9IGFyaWFMYWJlbDtcbiAgICAgIGRheU9iamVjdC5oaWRkZW4gPSBmYWxzZTtcblxuICAgICAgZGF0ZSA9IG5leHREYXRlO1xuICAgIH1cblxuICAgIHdlZWtPYmplY3QubnVtYmVyID0gY2FsZW5kYXIuZ2V0V2Vla051bWJlcihkYXlzLm1hcChkYXkgPT4gZGF5LmRhdGUpLCBmaXJzdERheU9mV2Vlayk7XG5cbiAgICAvLyBtYXJraW5nIHdlZWsgYXMgY29sbGFwc2VkXG4gICAgd2Vla09iamVjdC5jb2xsYXBzZWQgPSBvdXRzaWRlRGF5cyA9PT0gJ2NvbGxhcHNlZCcgJiYgZGF5c1swXS5kYXRlLm1vbnRoICE9PSBtb250aC5udW1iZXIgJiZcbiAgICAgICAgZGF5c1tkYXlzLmxlbmd0aCAtIDFdLmRhdGUubW9udGggIT09IG1vbnRoLm51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBtb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0Vmlld0RhdGUoY2FsZW5kYXI6IE5nYkNhbGVuZGFyLCBkYXRlOiBOZ2JEYXRlLCBmaXJzdERheU9mV2VlazogbnVtYmVyKTogTmdiRGF0ZSB7XG4gIGNvbnN0IGRheXNQZXJXZWVrID0gY2FsZW5kYXIuZ2V0RGF5c1BlcldlZWsoKTtcbiAgY29uc3QgZmlyc3RNb250aERhdGUgPSBuZXcgTmdiRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIDEpO1xuICBjb25zdCBkYXlPZldlZWsgPSBjYWxlbmRhci5nZXRXZWVrZGF5KGZpcnN0TW9udGhEYXRlKSAlIGRheXNQZXJXZWVrO1xuICByZXR1cm4gY2FsZW5kYXIuZ2V0UHJldihmaXJzdE1vbnRoRGF0ZSwgJ2QnLCAoZGF5c1BlcldlZWsgKyBkYXlPZldlZWsgLSBmaXJzdERheU9mV2VlaykgJSBkYXlzUGVyV2Vlayk7XG59XG4iXX0=