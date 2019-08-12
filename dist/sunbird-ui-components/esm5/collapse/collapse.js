/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
/**
 * A directive to provide a simple way of hiding and showing elements on the page.
 */
var NgbCollapse = /** @class */ (function () {
    function NgbCollapse() {
        /**
         * If `true`, will collapse the element or show it otherwise.
         */
        this.collapsed = false;
    }
    NgbCollapse.decorators = [
        { type: Directive, args: [{
                    selector: '[ngbCollapse]',
                    exportAs: 'ngbCollapse',
                    host: { '[class.collapse]': 'true', '[class.show]': '!collapsed' }
                },] }
    ];
    NgbCollapse.propDecorators = {
        collapsed: [{ type: Input, args: ['ngbCollapse',] }]
    };
    return NgbCollapse;
}());
export { NgbCollapse };
if (false) {
    /**
     * If `true`, will collapse the element or show it otherwise.
     * @type {?}
     */
    NgbCollapse.prototype.collapsed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb2xsYXBzZS9jb2xsYXBzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFLL0M7SUFBQTs7OztRQVN3QixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7O2dCQVZBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLElBQUksRUFBRSxFQUFDLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFDO2lCQUNqRTs7OzRCQUtFLEtBQUssU0FBQyxhQUFhOztJQUN0QixrQkFBQztDQUFBLEFBVkQsSUFVQztTQUxZLFdBQVc7Ozs7OztJQUl0QixnQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHByb3ZpZGUgYSBzaW1wbGUgd2F5IG9mIGhpZGluZyBhbmQgc2hvd2luZyBlbGVtZW50cyBvbiB0aGUgcGFnZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nYkNvbGxhcHNlXScsXG4gIGV4cG9ydEFzOiAnbmdiQ29sbGFwc2UnLFxuICBob3N0OiB7J1tjbGFzcy5jb2xsYXBzZV0nOiAndHJ1ZScsICdbY2xhc3Muc2hvd10nOiAnIWNvbGxhcHNlZCd9XG59KVxuZXhwb3J0IGNsYXNzIE5nYkNvbGxhcHNlIHtcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2lsbCBjb2xsYXBzZSB0aGUgZWxlbWVudCBvciBzaG93IGl0IG90aGVyd2lzZS5cbiAgICovXG4gIEBJbnB1dCgnbmdiQ29sbGFwc2UnKSBjb2xsYXBzZWQgPSBmYWxzZTtcbn1cbiJdfQ==