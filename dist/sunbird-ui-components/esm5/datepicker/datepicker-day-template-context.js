/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The context for the datepicker 'day' template.
 *
 * You can override the way dates are displayed in the datepicker via the `[dayTemplate]` input.
 * @record
 */
export function DayTemplateContext() { }
if (false) {
    /**
     * The date that corresponds to the template. Same as the `date` parameter.
     *
     * Can be used for convenience as a default template key, ex. `let-d`.
     *
     * \@since 3.3.0
     * @type {?}
     */
    DayTemplateContext.prototype.$implicit;
    /**
     * The month currently displayed by the datepicker.
     * @type {?}
     */
    DayTemplateContext.prototype.currentMonth;
    /**
     * Any data you pass using the `[dayTemplateData]` input in the datepicker.
     *
     * \@since 3.3.0
     * @type {?|undefined}
     */
    DayTemplateContext.prototype.data;
    /**
     * The date that corresponds to the template.
     * @type {?}
     */
    DayTemplateContext.prototype.date;
    /**
     * `True` if the current date is disabled.
     * @type {?}
     */
    DayTemplateContext.prototype.disabled;
    /**
     * `True` if the current date is focused.
     * @type {?}
     */
    DayTemplateContext.prototype.focused;
    /**
     * `True` if the current date is selected.
     * @type {?}
     */
    DayTemplateContext.prototype.selected;
    /**
     * `True` if the current date is today (equal to `NgbCalendar.getToday()`).
     *
     * \@since 4.1.0
     * @type {?}
     */
    DayTemplateContext.prototype.today;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kYXktdGVtcGxhdGUtY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdW5iaXJkLWVkL3N1bmJpcmQtdWktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIvZGF0ZXBpY2tlci1kYXktdGVtcGxhdGUtY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsd0NBZ0RDOzs7Ozs7Ozs7O0lBeENDLHVDQUFtQjs7Ozs7SUFLbkIsMENBQXFCOzs7Ozs7O0lBT3JCLGtDQUFXOzs7OztJQUtYLGtDQUFjOzs7OztJQUtkLHNDQUFrQjs7Ozs7SUFLbEIscUNBQWlCOzs7OztJQUtqQixzQ0FBa0I7Ozs7Ozs7SUFPbEIsbUNBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nYkRhdGV9IGZyb20gJy4vbmdiLWRhdGUnO1xuLyoqXG4gKiBUaGUgY29udGV4dCBmb3IgdGhlIGRhdGVwaWNrZXIgJ2RheScgdGVtcGxhdGUuXG4gKlxuICogWW91IGNhbiBvdmVycmlkZSB0aGUgd2F5IGRhdGVzIGFyZSBkaXNwbGF5ZWQgaW4gdGhlIGRhdGVwaWNrZXIgdmlhIHRoZSBgW2RheVRlbXBsYXRlXWAgaW5wdXQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGF5VGVtcGxhdGVDb250ZXh0IHtcbiAgLyoqXG4gICAqIFRoZSBkYXRlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHRlbXBsYXRlLiBTYW1lIGFzIHRoZSBgZGF0ZWAgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBDYW4gYmUgdXNlZCBmb3IgY29udmVuaWVuY2UgYXMgYSBkZWZhdWx0IHRlbXBsYXRlIGtleSwgZXguIGBsZXQtZGAuXG4gICAqXG4gICAqIEBzaW5jZSAzLjMuMFxuICAgKi9cbiAgJGltcGxpY2l0OiBOZ2JEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgbW9udGggY3VycmVudGx5IGRpc3BsYXllZCBieSB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIGN1cnJlbnRNb250aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBbnkgZGF0YSB5b3UgcGFzcyB1c2luZyB0aGUgYFtkYXlUZW1wbGF0ZURhdGFdYCBpbnB1dCBpbiB0aGUgZGF0ZXBpY2tlci5cbiAgICpcbiAgICogQHNpbmNlIDMuMy4wXG4gICAqL1xuICBkYXRhPzogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSB0ZW1wbGF0ZS5cbiAgICovXG4gIGRhdGU6IE5nYkRhdGU7XG5cbiAgLyoqXG4gICAqIGBUcnVlYCBpZiB0aGUgY3VycmVudCBkYXRlIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIGBUcnVlYCBpZiB0aGUgY3VycmVudCBkYXRlIGlzIGZvY3VzZWQuXG4gICAqL1xuICBmb2N1c2VkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBgVHJ1ZWAgaWYgdGhlIGN1cnJlbnQgZGF0ZSBpcyBzZWxlY3RlZC5cbiAgICovXG4gIHNlbGVjdGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBgVHJ1ZWAgaWYgdGhlIGN1cnJlbnQgZGF0ZSBpcyB0b2RheSAoZXF1YWwgdG8gYE5nYkNhbGVuZGFyLmdldFRvZGF5KClgKS5cbiAgICpcbiAgICogQHNpbmNlIDQuMS4wXG4gICAqL1xuICB0b2RheTogYm9vbGVhbjtcbn1cbiJdfQ==