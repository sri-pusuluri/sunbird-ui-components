/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { regExpEscape, toString } from '../util/util';
/**
 * A component that helps with text highlighting.
 *
 * If splits the `result` text into parts that contain the searched `term` and generates the HTML markup to simplify
 * highlighting:
 *
 * Ex. `result="Alaska"` and `term="as"` will produce `Al<span class="ngb-highlight">as</span>ka`.
 */
export class NgbHighlight {
    constructor() {
        /**
         * The CSS class for `<span>` elements wrapping the `term` inside the `result`.
         */
        this.highlightClass = 'ngb-highlight';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const result = toString(this.result);
        /** @type {?} */
        const terms = Array.isArray(this.term) ? this.term : [this.term];
        /** @type {?} */
        const escapedTerms = terms.map((/**
         * @param {?} term
         * @return {?}
         */
        term => regExpEscape(toString(term)))).filter((/**
         * @param {?} term
         * @return {?}
         */
        term => term));
        this.parts = escapedTerms.length ? result.split(new RegExp(`(${escapedTerms.join('|')})`, 'gmi')) : [result];
    }
}
NgbHighlight.decorators = [
    { type: Component, args: [{
                selector: 'ngb-highlight',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `<ng-template ngFor [ngForOf]="parts" let-part let-isOdd="odd">` +
                    `<span *ngIf="isOdd; else even" [class]="highlightClass">{{part}}</span><ng-template #even>{{part}}</ng-template>` +
                    `</ng-template>`,
                styles: [".ngb-highlight{font-weight:700}"]
            }] }
];
NgbHighlight.propDecorators = {
    highlightClass: [{ type: Input }],
    result: [{ type: Input }],
    term: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgbHighlight.prototype.parts;
    /**
     * The CSS class for `<span>` elements wrapping the `term` inside the `result`.
     * @type {?}
     */
    NgbHighlight.prototype.highlightClass;
    /**
     * The text highlighting is added to.
     *
     * If the `term` is found inside this text, it will be highlighted.
     * If the `term` contains array then all the items from it will be highlighted inside the text.
     * @type {?}
     */
    NgbHighlight.prototype.result;
    /**
     * The term or array of terms to be highlighted.
     * Since version `v4.2.0` term could be a `string[]`
     * @type {?}
     */
    NgbHighlight.prototype.term;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1bmJpcmQtZWQvc3VuYmlyZC11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsidHlwZWFoZWFkL2hpZ2hsaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQWEsdUJBQXVCLEVBQWlCLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7QUFtQnBELE1BQU0sT0FBTyxZQUFZO0lBVHpCOzs7O1FBZVcsbUJBQWMsR0FBRyxlQUFlLENBQUM7SUF3QjVDLENBQUM7Ozs7O0lBUkMsV0FBVyxDQUFDLE9BQXNCOztjQUMxQixNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O2NBRTlCLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztjQUMxRCxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBQztRQUV6RixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRyxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxnRUFBZ0U7b0JBQ3RFLGtIQUFrSDtvQkFDbEgsZ0JBQWdCOzthQUVyQjs7OzZCQU9FLEtBQUs7cUJBUUwsS0FBSzttQkFNTCxLQUFLOzs7O0lBbkJOLDZCQUFnQjs7Ozs7SUFLaEIsc0NBQTBDOzs7Ozs7OztJQVExQyw4QkFBd0I7Ozs7OztJQU14Qiw0QkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7cmVnRXhwRXNjYXBlLCB0b1N0cmluZ30gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IGhlbHBzIHdpdGggdGV4dCBoaWdobGlnaHRpbmcuXG4gKlxuICogSWYgc3BsaXRzIHRoZSBgcmVzdWx0YCB0ZXh0IGludG8gcGFydHMgdGhhdCBjb250YWluIHRoZSBzZWFyY2hlZCBgdGVybWAgYW5kIGdlbmVyYXRlcyB0aGUgSFRNTCBtYXJrdXAgdG8gc2ltcGxpZnlcbiAqIGhpZ2hsaWdodGluZzpcbiAqXG4gKiBFeC4gYHJlc3VsdD1cIkFsYXNrYVwiYCBhbmQgYHRlcm09XCJhc1wiYCB3aWxsIHByb2R1Y2UgYEFsPHNwYW4gY2xhc3M9XCJuZ2ItaGlnaGxpZ2h0XCI+YXM8L3NwYW4+a2FgLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2ItaGlnaGxpZ2h0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cInBhcnRzXCIgbGV0LXBhcnQgbGV0LWlzT2RkPVwib2RkXCI+YCArXG4gICAgICBgPHNwYW4gKm5nSWY9XCJpc09kZDsgZWxzZSBldmVuXCIgW2NsYXNzXT1cImhpZ2hsaWdodENsYXNzXCI+e3twYXJ0fX08L3NwYW4+PG5nLXRlbXBsYXRlICNldmVuPnt7cGFydH19PC9uZy10ZW1wbGF0ZT5gICtcbiAgICAgIGA8L25nLXRlbXBsYXRlPmAsICAvLyB0ZW1wbGF0ZSBuZWVkcyB0byBiZSBmb3JtYXR0ZWQgaW4gYSBjZXJ0YWluIHdheSBzbyB3ZSBkb24ndCBhZGQgZW1wdHkgdGV4dCBub2Rlc1xuICBzdHlsZVVybHM6IFsnLi9oaWdobGlnaHQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nYkhpZ2hsaWdodCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHBhcnRzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogVGhlIENTUyBjbGFzcyBmb3IgYDxzcGFuPmAgZWxlbWVudHMgd3JhcHBpbmcgdGhlIGB0ZXJtYCBpbnNpZGUgdGhlIGByZXN1bHRgLlxuICAgKi9cbiAgQElucHV0KCkgaGlnaGxpZ2h0Q2xhc3MgPSAnbmdiLWhpZ2hsaWdodCc7XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IGhpZ2hsaWdodGluZyBpcyBhZGRlZCB0by5cbiAgICpcbiAgICogSWYgdGhlIGB0ZXJtYCBpcyBmb3VuZCBpbnNpZGUgdGhpcyB0ZXh0LCBpdCB3aWxsIGJlIGhpZ2hsaWdodGVkLlxuICAgKiBJZiB0aGUgYHRlcm1gIGNvbnRhaW5zIGFycmF5IHRoZW4gYWxsIHRoZSBpdGVtcyBmcm9tIGl0IHdpbGwgYmUgaGlnaGxpZ2h0ZWQgaW5zaWRlIHRoZSB0ZXh0LlxuICAgKi9cbiAgQElucHV0KCkgcmVzdWx0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXJtIG9yIGFycmF5IG9mIHRlcm1zIHRvIGJlIGhpZ2hsaWdodGVkLlxuICAgKiBTaW5jZSB2ZXJzaW9uIGB2NC4yLjBgIHRlcm0gY291bGQgYmUgYSBgc3RyaW5nW11gXG4gICAqL1xuICBASW5wdXQoKSB0ZXJtOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdG9TdHJpbmcodGhpcy5yZXN1bHQpO1xuXG4gICAgY29uc3QgdGVybXMgPSBBcnJheS5pc0FycmF5KHRoaXMudGVybSkgPyB0aGlzLnRlcm0gOiBbdGhpcy50ZXJtXTtcbiAgICBjb25zdCBlc2NhcGVkVGVybXMgPSB0ZXJtcy5tYXAodGVybSA9PiByZWdFeHBFc2NhcGUodG9TdHJpbmcodGVybSkpKS5maWx0ZXIodGVybSA9PiB0ZXJtKTtcblxuICAgIHRoaXMucGFydHMgPSBlc2NhcGVkVGVybXMubGVuZ3RoID8gcmVzdWx0LnNwbGl0KG5ldyBSZWdFeHAoYCgke2VzY2FwZWRUZXJtcy5qb2luKCd8Jyl9KWAsICdnbWknKSkgOiBbcmVzdWx0XTtcbiAgfVxufVxuIl19