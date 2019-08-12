/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/** @type {?} */
const noop = (/**
 * @return {?}
 */
() => { });
const ɵ0 = noop;
/**
 * Utility to handle the scrollbar.
 *
 * It allows to compensate the lack of a vertical scrollbar by adding an
 * equivalent padding on the right of the body, and to remove this compensation.
 */
export class ScrollBar {
    /**
     * @param {?} _document
     */
    constructor(_document) {
        this._document = _document;
    }
    /**
     * Detects if a scrollbar is present and if yes, already compensates for its
     * removal by adding an equivalent padding on the right of the body.
     *
     * @return {?} a callback used to revert the compensation (noop if there was none,
     * otherwise a function removing the padding)
     */
    compensate() { return !this._isPresent() ? noop : this._adjustBody(this._getWidth()); }
    /**
     * Adds a padding of the given width on the right of the body.
     *
     * @private
     * @param {?} width
     * @return {?} a callback used to revert the padding to its previous value
     */
    _adjustBody(width) {
        /** @type {?} */
        const body = this._document.body;
        /** @type {?} */
        const userSetPadding = body.style.paddingRight;
        /** @type {?} */
        const paddingAmount = parseFloat(window.getComputedStyle(body)['padding-right']);
        body.style['padding-right'] = `${paddingAmount + width}px`;
        return (/**
         * @return {?}
         */
        () => body.style['padding-right'] = userSetPadding);
    }
    /**
     * Tells whether a scrollbar is currently present on the body.
     *
     * @private
     * @return {?} true if scrollbar is present, false otherwise
     */
    _isPresent() {
        /** @type {?} */
        const rect = this._document.body.getBoundingClientRect();
        return rect.left + rect.right < window.innerWidth;
    }
    /**
     * Calculates and returns the width of a scrollbar.
     *
     * @private
     * @return {?} the width of a scrollbar on this page
     */
    _getWidth() {
        /** @type {?} */
        const measurer = this._document.createElement('div');
        measurer.className = 'modal-scrollbar-measure';
        /** @type {?} */
        const body = this._document.body;
        body.appendChild(measurer);
        /** @type {?} */
        const width = measurer.getBoundingClientRect().width - measurer.clientWidth;
        body.removeChild(measurer);
        return width;
    }
}
ScrollBar.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ScrollBar.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ ScrollBar.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ScrollBar_Factory() { return new ScrollBar(i0.ɵɵinject(i1.DOCUMENT)); }, token: ScrollBar, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollBar.prototype._document;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1bmJpcmQtZWQvc3VuYmlyZC11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsidXRpbC9zY3JvbGxiYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7OztNQUduQyxJQUFJOzs7QUFBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUE7Ozs7Ozs7O0FBZ0JyQixNQUFNLE9BQU8sU0FBUzs7OztJQUNwQixZQUFzQyxTQUFjO1FBQWQsY0FBUyxHQUFULFNBQVMsQ0FBSztJQUFHLENBQUM7Ozs7Ozs7O0lBU3hELFVBQVUsS0FBMkIsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7SUFPckcsV0FBVyxDQUFDLEtBQWE7O2NBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7O2NBQzFCLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7O2NBQ3hDLGFBQWEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsR0FBRyxhQUFhLEdBQUcsS0FBSyxJQUFJLENBQUM7UUFDM0Q7OztRQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsY0FBYyxFQUFDO0lBQzVELENBQUM7Ozs7Ozs7SUFPTyxVQUFVOztjQUNWLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtRQUN4RCxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3BELENBQUM7Ozs7Ozs7SUFPTyxTQUFTOztjQUNULFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDcEQsUUFBUSxDQUFDLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQzs7Y0FFekMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTtRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztjQUNyQixLQUFLLEdBQUcsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXO1FBQzNFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFuREYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7Ozs0Q0FFakIsTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7O0lBQWhCLDhCQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5cblxuLyoqIFR5cGUgZm9yIHRoZSBjYWxsYmFjayB1c2VkIHRvIHJldmVydCB0aGUgc2Nyb2xsYmFyIGNvbXBlbnNhdGlvbi4gKi9cbmV4cG9ydCB0eXBlIENvbXBlbnNhdGlvblJldmVydGVyID0gKCkgPT4gdm9pZDtcblxuXG5cbi8qKlxuICogVXRpbGl0eSB0byBoYW5kbGUgdGhlIHNjcm9sbGJhci5cbiAqXG4gKiBJdCBhbGxvd3MgdG8gY29tcGVuc2F0ZSB0aGUgbGFjayBvZiBhIHZlcnRpY2FsIHNjcm9sbGJhciBieSBhZGRpbmcgYW5cbiAqIGVxdWl2YWxlbnQgcGFkZGluZyBvbiB0aGUgcmlnaHQgb2YgdGhlIGJvZHksIGFuZCB0byByZW1vdmUgdGhpcyBjb21wZW5zYXRpb24uXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFNjcm9sbEJhciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHt9XG5cbiAgLyoqXG4gICAqIERldGVjdHMgaWYgYSBzY3JvbGxiYXIgaXMgcHJlc2VudCBhbmQgaWYgeWVzLCBhbHJlYWR5IGNvbXBlbnNhdGVzIGZvciBpdHNcbiAgICogcmVtb3ZhbCBieSBhZGRpbmcgYW4gZXF1aXZhbGVudCBwYWRkaW5nIG9uIHRoZSByaWdodCBvZiB0aGUgYm9keS5cbiAgICpcbiAgICogQHJldHVybiBhIGNhbGxiYWNrIHVzZWQgdG8gcmV2ZXJ0IHRoZSBjb21wZW5zYXRpb24gKG5vb3AgaWYgdGhlcmUgd2FzIG5vbmUsXG4gICAqIG90aGVyd2lzZSBhIGZ1bmN0aW9uIHJlbW92aW5nIHRoZSBwYWRkaW5nKVxuICAgKi9cbiAgY29tcGVuc2F0ZSgpOiBDb21wZW5zYXRpb25SZXZlcnRlciB7IHJldHVybiAhdGhpcy5faXNQcmVzZW50KCkgPyBub29wIDogdGhpcy5fYWRqdXN0Qm9keSh0aGlzLl9nZXRXaWR0aCgpKTsgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcGFkZGluZyBvZiB0aGUgZ2l2ZW4gd2lkdGggb24gdGhlIHJpZ2h0IG9mIHRoZSBib2R5LlxuICAgKlxuICAgKiBAcmV0dXJuIGEgY2FsbGJhY2sgdXNlZCB0byByZXZlcnQgdGhlIHBhZGRpbmcgdG8gaXRzIHByZXZpb3VzIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIF9hZGp1c3RCb2R5KHdpZHRoOiBudW1iZXIpOiBDb21wZW5zYXRpb25SZXZlcnRlciB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuX2RvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgdXNlclNldFBhZGRpbmcgPSBib2R5LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICBjb25zdCBwYWRkaW5nQW1vdW50ID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib2R5KVsncGFkZGluZy1yaWdodCddKTtcbiAgICBib2R5LnN0eWxlWydwYWRkaW5nLXJpZ2h0J10gPSBgJHtwYWRkaW5nQW1vdW50ICsgd2lkdGh9cHhgO1xuICAgIHJldHVybiAoKSA9PiBib2R5LnN0eWxlWydwYWRkaW5nLXJpZ2h0J10gPSB1c2VyU2V0UGFkZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyB3aGV0aGVyIGEgc2Nyb2xsYmFyIGlzIGN1cnJlbnRseSBwcmVzZW50IG9uIHRoZSBib2R5LlxuICAgKlxuICAgKiBAcmV0dXJuIHRydWUgaWYgc2Nyb2xsYmFyIGlzIHByZXNlbnQsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgcHJpdmF0ZSBfaXNQcmVzZW50KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLl9kb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0LmxlZnQgKyByZWN0LnJpZ2h0IDwgd2luZG93LmlubmVyV2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBhbmQgcmV0dXJucyB0aGUgd2lkdGggb2YgYSBzY3JvbGxiYXIuXG4gICAqXG4gICAqIEByZXR1cm4gdGhlIHdpZHRoIG9mIGEgc2Nyb2xsYmFyIG9uIHRoaXMgcGFnZVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICBjb25zdCBtZWFzdXJlciA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lYXN1cmVyLmNsYXNzTmFtZSA9ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZSc7XG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5fZG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lYXN1cmVyKTtcbiAgICBjb25zdCB3aWR0aCA9IG1lYXN1cmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gbWVhc3VyZXIuY2xpZW50V2lkdGg7XG4gICAgYm9keS5yZW1vdmVDaGlsZChtZWFzdXJlcik7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cbn1cbiJdfQ==