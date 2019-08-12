/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/** @type {?} */
export var ARIA_LIVE_DELAY = new InjectionToken('live announcer delay', { providedIn: 'root', factory: ARIA_LIVE_DELAY_FACTORY });
/**
 * @return {?}
 */
export function ARIA_LIVE_DELAY_FACTORY() {
    return 100;
}
/**
 * @param {?} document
 * @param {?=} lazyCreate
 * @return {?}
 */
function getLiveElement(document, lazyCreate) {
    if (lazyCreate === void 0) { lazyCreate = false; }
    /** @type {?} */
    var element = (/** @type {?} */ (document.body.querySelector('#ngb-live')));
    if (element == null && lazyCreate) {
        element = document.createElement('div');
        element.setAttribute('id', 'ngb-live');
        element.setAttribute('aria-live', 'polite');
        element.setAttribute('aria-atomic', 'true');
        element.classList.add('sr-only');
        document.body.appendChild(element);
    }
    return element;
}
var Live = /** @class */ (function () {
    function Live(_document, _delay) {
        this._document = _document;
        this._delay = _delay;
    }
    /**
     * @return {?}
     */
    Live.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = getLiveElement(this._document);
        if (element) {
            element.parentElement.removeChild(element);
        }
    };
    /**
     * @param {?} message
     * @return {?}
     */
    Live.prototype.say = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        /** @type {?} */
        var element = getLiveElement(this._document, true);
        /** @type {?} */
        var delay = this._delay;
        element.textContent = '';
        /** @type {?} */
        var setText = (/**
         * @return {?}
         */
        function () { return element.textContent = message; });
        if (delay === null) {
            setText();
        }
        else {
            setTimeout(setText, delay);
        }
    };
    Live.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Live.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [ARIA_LIVE_DELAY,] }] }
    ]; };
    /** @nocollapse */ Live.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Live_Factory() { return new Live(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(ARIA_LIVE_DELAY)); }, token: Live, providedIn: "root" });
    return Live;
}());
export { Live };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Live.prototype._document;
    /**
     * @type {?}
     * @private
     */
    Live.prototype._delay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdW5iaXJkLWVkL3N1bmJpcmQtdWktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInV0aWwvYWNjZXNzaWJpbGl0eS9saXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7O0FBT3pDLE1BQU0sS0FBTyxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQzdDLHNCQUFzQixFQUFFLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQzs7OztBQUNuRixNQUFNLFVBQVUsdUJBQXVCO0lBQ3JDLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7O0FBR0QsU0FBUyxjQUFjLENBQUMsUUFBYSxFQUFFLFVBQWtCO0lBQWxCLDJCQUFBLEVBQUEsa0JBQWtCOztRQUNuRCxPQUFPLEdBQUcsbUJBQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQWU7SUFFckUsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLFVBQVUsRUFBRTtRQUNqQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4QyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU1QyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNwQztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFJRDtJQUVFLGNBQXNDLFNBQWMsRUFBbUMsTUFBVztRQUE1RCxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQW1DLFdBQU0sR0FBTixNQUFNLENBQUs7SUFBRyxDQUFDOzs7O0lBRXRHLDBCQUFXOzs7SUFBWDs7WUFDUSxPQUFPLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDOUMsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7Ozs7O0lBRUQsa0JBQUc7Ozs7SUFBSCxVQUFJLE9BQWU7O1lBQ1gsT0FBTyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQzs7WUFDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBRXpCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDOztZQUNuQixPQUFPOzs7UUFBRyxjQUFNLE9BQUEsT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLEVBQTdCLENBQTZCLENBQUE7UUFDbkQsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2xCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7YUFBTTtZQUNMLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDOztnQkF0QkYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztnREFFakIsTUFBTSxTQUFDLFFBQVE7Z0RBQTJCLE1BQU0sU0FBQyxlQUFlOzs7ZUFyQy9FO0NBMERDLEFBdkJELElBdUJDO1NBdEJZLElBQUk7Ozs7OztJQUNILHlCQUF3Qzs7Ozs7SUFBRSxzQkFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cblxuLy8gdXNlZnVsbmVzcyAoYW5kIGRlZmF1bHQgdmFsdWUpIG9mIGRlbGF5IGRvY3VtZW50ZWQgaW4gTWF0ZXJpYWwncyBDREtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9ibG9iLzY0MDVkYTliOGU4NTMyYTdlNWM4NTRjOTIwZWUxODE1YzI3NWQ3MzQvc3JjL2Nkay9hMTF5L2xpdmUtYW5ub3VuY2VyL2xpdmUtYW5ub3VuY2VyLnRzI0w1MFxuZXhwb3J0IHR5cGUgQVJJQV9MSVZFX0RFTEFZX1RZUEUgPSBudW1iZXIgfCBudWxsO1xuZXhwb3J0IGNvbnN0IEFSSUFfTElWRV9ERUxBWSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBUklBX0xJVkVfREVMQVlfVFlQRT4oXG4gICAgJ2xpdmUgYW5ub3VuY2VyIGRlbGF5Jywge3Byb3ZpZGVkSW46ICdyb290JywgZmFjdG9yeTogQVJJQV9MSVZFX0RFTEFZX0ZBQ1RPUll9KTtcbmV4cG9ydCBmdW5jdGlvbiBBUklBX0xJVkVfREVMQVlfRkFDVE9SWSgpOiBudW1iZXIge1xuICByZXR1cm4gMTAwO1xufVxuXG5cbmZ1bmN0aW9uIGdldExpdmVFbGVtZW50KGRvY3VtZW50OiBhbnksIGxhenlDcmVhdGUgPSBmYWxzZSk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcjbmdiLWxpdmUnKSBhcyBIVE1MRWxlbWVudDtcblxuICBpZiAoZWxlbWVudCA9PSBudWxsICYmIGxhenlDcmVhdGUpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmdiLWxpdmUnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWF0b21pYycsICd0cnVlJyk7XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuXG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIExpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LCBASW5qZWN0KEFSSUFfTElWRV9ERUxBWSkgcHJpdmF0ZSBfZGVsYXk6IGFueSkge31cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0TGl2ZUVsZW1lbnQodGhpcy5fZG9jdW1lbnQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2F5KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRMaXZlRWxlbWVudCh0aGlzLl9kb2N1bWVudCwgdHJ1ZSk7XG4gICAgY29uc3QgZGVsYXkgPSB0aGlzLl9kZWxheTtcblxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBzZXRUZXh0ID0gKCkgPT4gZWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgaWYgKGRlbGF5ID09PSBudWxsKSB7XG4gICAgICBzZXRUZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoc2V0VGV4dCwgZGVsYXkpO1xuICAgIH1cbiAgfVxufVxuIl19