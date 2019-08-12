/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, Directive, TemplateRef, Output, EventEmitter } from '@angular/core';
import { NgbTabsetConfig } from './tabset-config';
/** @type {?} */
var nextId = 0;
/**
 * A directive to wrap tab titles that need to contain HTML markup or other directives.
 *
 * Alternatively you could use the `NgbTab.title` input for string titles.
 */
var NgbTabTitle = /** @class */ (function () {
    function NgbTabTitle(templateRef) {
        this.templateRef = templateRef;
    }
    NgbTabTitle.decorators = [
        { type: Directive, args: [{ selector: 'ng-template[ngbTabTitle]' },] }
    ];
    /** @nocollapse */
    NgbTabTitle.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgbTabTitle;
}());
export { NgbTabTitle };
if (false) {
    /** @type {?} */
    NgbTabTitle.prototype.templateRef;
}
/**
 * A directive to wrap content to be displayed in a tab.
 */
var NgbTabContent = /** @class */ (function () {
    function NgbTabContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbTabContent.decorators = [
        { type: Directive, args: [{ selector: 'ng-template[ngbTabContent]' },] }
    ];
    /** @nocollapse */
    NgbTabContent.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgbTabContent;
}());
export { NgbTabContent };
if (false) {
    /** @type {?} */
    NgbTabContent.prototype.templateRef;
}
/**
 * A directive representing an individual tab.
 */
var NgbTab = /** @class */ (function () {
    function NgbTab() {
        /**
         * The tab identifier.
         *
         * Must be unique for the entire document for proper accessibility support.
         */
        this.id = "ngb-tab-" + nextId++;
        /**
         * If `true`, the current tab is disabled and can't be toggled.
         */
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    NgbTab.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.contentTpl = this.contentTpls.first;
    };
    NgbTab.decorators = [
        { type: Directive, args: [{ selector: 'ngb-tab' },] }
    ];
    NgbTab.propDecorators = {
        id: [{ type: Input }],
        title: [{ type: Input }],
        disabled: [{ type: Input }],
        titleTpls: [{ type: ContentChildren, args: [NgbTabTitle, { descendants: false },] }],
        contentTpls: [{ type: ContentChildren, args: [NgbTabContent, { descendants: false },] }]
    };
    return NgbTab;
}());
export { NgbTab };
if (false) {
    /**
     * The tab identifier.
     *
     * Must be unique for the entire document for proper accessibility support.
     * @type {?}
     */
    NgbTab.prototype.id;
    /**
     * The tab title.
     *
     * Use the [`NgbTabTitle`](#/components/tabset/api#NgbTabTitle) directive for non-string titles.
     * @type {?}
     */
    NgbTab.prototype.title;
    /**
     * If `true`, the current tab is disabled and can't be toggled.
     * @type {?}
     */
    NgbTab.prototype.disabled;
    /** @type {?} */
    NgbTab.prototype.titleTpl;
    /** @type {?} */
    NgbTab.prototype.contentTpl;
    /** @type {?} */
    NgbTab.prototype.titleTpls;
    /** @type {?} */
    NgbTab.prototype.contentTpls;
}
/**
 * The payload of the change event fired right before the tab change.
 * @record
 */
export function NgbTabChangeEvent() { }
if (false) {
    /**
     * The id of the currently active tab.
     * @type {?}
     */
    NgbTabChangeEvent.prototype.activeId;
    /**
     * The id of the newly selected tab.
     * @type {?}
     */
    NgbTabChangeEvent.prototype.nextId;
    /**
     * Calling this function will prevent tab switching.
     * @type {?}
     */
    NgbTabChangeEvent.prototype.preventDefault;
}
/**
 * A component that makes it easy to create tabbed interface.
 */
var NgbTabset = /** @class */ (function () {
    function NgbTabset(config) {
        /**
         * If `true`, non-visible tabs content will be removed from DOM. Otherwise it will just be hidden.
         */
        this.destroyOnHide = true;
        /**
         * A tab change event emitted right before the tab change happens.
         *
         * See [`NgbTabChangeEvent`](#/components/tabset/api#NgbTabChangeEvent) for payload details.
         */
        this.tabChange = new EventEmitter();
        this.type = config.type;
        this.justify = config.justify;
        this.orientation = config.orientation;
    }
    Object.defineProperty(NgbTabset.prototype, "justify", {
        /**
         * The horizontal alignment of the tabs with flexbox utilities.
         */
        set: /**
         * The horizontal alignment of the tabs with flexbox utilities.
         * @param {?} className
         * @return {?}
         */
        function (className) {
            if (className === 'fill' || className === 'justified') {
                this.justifyClass = "nav-" + className;
            }
            else {
                this.justifyClass = "justify-content-" + className;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects the tab with the given id and shows its associated content panel.
     *
     * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
     * hidden depending on the `destroyOnHide` value.
     */
    /**
     * Selects the tab with the given id and shows its associated content panel.
     *
     * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
     * hidden depending on the `destroyOnHide` value.
     * @param {?} tabId
     * @return {?}
     */
    NgbTabset.prototype.select = /**
     * Selects the tab with the given id and shows its associated content panel.
     *
     * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
     * hidden depending on the `destroyOnHide` value.
     * @param {?} tabId
     * @return {?}
     */
    function (tabId) {
        /** @type {?} */
        var selectedTab = this._getTabById(tabId);
        if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
            /** @type {?} */
            var defaultPrevented_1 = false;
            this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: (/**
                 * @return {?}
                 */
                function () { defaultPrevented_1 = true; }) });
            if (!defaultPrevented_1) {
                this.activeId = selectedTab.id;
            }
        }
    };
    /**
     * @return {?}
     */
    NgbTabset.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        // auto-correct activeId that might have been set incorrectly as input
        /** @type {?} */
        var activeTab = this._getTabById(this.activeId);
        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
    };
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    NgbTabset.prototype._getTabById = /**
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var tabsWithId = this.tabs.filter((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) { return tab.id === id; }));
        return tabsWithId.length ? tabsWithId[0] : null;
    };
    NgbTabset.decorators = [
        { type: Component, args: [{
                    selector: 'ngb-tabset',
                    exportAs: 'ngbTabset',
                    template: "\n    <ul [class]=\"'nav nav-' + type + (orientation == 'horizontal'?  ' ' + justifyClass : ' flex-column')\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"select(tab.id); $event.preventDefault()\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-selected]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl?.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NgbTabset.ctorParameters = function () { return [
        { type: NgbTabsetConfig }
    ]; };
    NgbTabset.propDecorators = {
        tabs: [{ type: ContentChildren, args: [NgbTab,] }],
        activeId: [{ type: Input }],
        destroyOnHide: [{ type: Input }],
        justify: [{ type: Input }],
        orientation: [{ type: Input }],
        type: [{ type: Input }],
        tabChange: [{ type: Output }]
    };
    return NgbTabset;
}());
export { NgbTabset };
if (false) {
    /** @type {?} */
    NgbTabset.prototype.justifyClass;
    /** @type {?} */
    NgbTabset.prototype.tabs;
    /**
     * The identifier of the tab that should be opened **initially**.
     *
     * For subsequent tab switches use the `.select()` method and the `(tabChange)` event.
     * @type {?}
     */
    NgbTabset.prototype.activeId;
    /**
     * If `true`, non-visible tabs content will be removed from DOM. Otherwise it will just be hidden.
     * @type {?}
     */
    NgbTabset.prototype.destroyOnHide;
    /**
     * The orientation of the tabset.
     * @type {?}
     */
    NgbTabset.prototype.orientation;
    /**
     * Type of navigation to be used for tabs.
     *
     * Currently Bootstrap supports only `"tabs"` and `"pills"`.
     *
     * Since `3.0.0` can also be an arbitrary string (ex. for custom themes).
     * @type {?}
     */
    NgbTabset.prototype.type;
    /**
     * A tab change event emitted right before the tab change happens.
     *
     * See [`NgbTabChangeEvent`](#/components/tabset/api#NgbTabChangeEvent) for payload details.
     * @type {?}
     */
    NgbTabset.prototype.tabChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1bmJpcmQtZWQvc3VuYmlyZC11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsidGFic2V0L3RhYnNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUVYLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztJQUU1QyxNQUFNLEdBQUcsQ0FBQzs7Ozs7O0FBT2Q7SUFFRSxxQkFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQUcsQ0FBQzs7Z0JBRnJELFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBQzs7OztnQkFkL0MsV0FBVzs7SUFpQmIsa0JBQUM7Q0FBQSxBQUhELElBR0M7U0FGWSxXQUFXOzs7SUFDVixrQ0FBb0M7Ozs7O0FBTWxEO0lBRUUsdUJBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFHLENBQUM7O2dCQUZyRCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUM7Ozs7Z0JBdEJqRCxXQUFXOztJQXlCYixvQkFBQztDQUFBLEFBSEQsSUFHQztTQUZZLGFBQWE7OztJQUNaLG9DQUFvQzs7Ozs7QUFNbEQ7SUFBQTs7Ozs7O1FBT1csT0FBRSxHQUFHLGFBQVcsTUFBTSxFQUFJLENBQUM7Ozs7UUFZM0IsYUFBUSxHQUFHLEtBQUssQ0FBQztJQWdCNUIsQ0FBQzs7OztJQVJDLHNDQUFxQjs7O0lBQXJCO1FBQ0UsOEZBQThGO1FBQzlGLDhFQUE4RTtRQUM5RSxpRUFBaUU7UUFDakUsMkRBQTJEO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENB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LE9BQUEsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWIsQ0FBYSxFQUFDO1FBQ2pFLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQzs7Z0JBaEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxxdUNBc0JUO2lCQUNGOzs7O2dCQS9HTyxlQUFlOzs7dUJBbUhwQixlQUFlLFNBQUMsTUFBTTsyQkFPdEIsS0FBSztnQ0FLTCxLQUFLOzBCQUtMLEtBQUs7OEJBWUwsS0FBSzt1QkFTTCxLQUFLOzRCQU9MLE1BQU07O0lBc0NULGdCQUFDO0NBQUEsQUFqSEQsSUFpSEM7U0F0RlksU0FBUzs7O0lBQ3BCLGlDQUFxQjs7SUFFckIseUJBQWlEOzs7Ozs7O0lBT2pELDZCQUEwQjs7Ozs7SUFLMUIsa0NBQThCOzs7OztJQWlCOUIsZ0NBQWdEOzs7Ozs7Ozs7SUFTaEQseUJBQXlDOzs7Ozs7O0lBT3pDLDhCQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBEaXJlY3RpdmUsXG4gIFRlbXBsYXRlUmVmLFxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiVGFic2V0Q29uZmlnfSBmcm9tICcuL3RhYnNldC1jb25maWcnO1xuXG5sZXQgbmV4dElkID0gMDtcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB3cmFwIHRhYiB0aXRsZXMgdGhhdCBuZWVkIHRvIGNvbnRhaW4gSFRNTCBtYXJrdXAgb3Igb3RoZXIgZGlyZWN0aXZlcy5cbiAqXG4gKiBBbHRlcm5hdGl2ZWx5IHlvdSBjb3VsZCB1c2UgdGhlIGBOZ2JUYWIudGl0bGVgIGlucHV0IGZvciBzdHJpbmcgdGl0bGVzLlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW25nYlRhYlRpdGxlXSd9KVxuZXhwb3J0IGNsYXNzIE5nYlRhYlRpdGxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHdyYXAgY29udGVudCB0byBiZSBkaXNwbGF5ZWQgaW4gYSB0YWIuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbbmdiVGFiQ29udGVudF0nfSlcbmV4cG9ydCBjbGFzcyBOZ2JUYWJDb250ZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHJlcHJlc2VudGluZyBhbiBpbmRpdmlkdWFsIHRhYi5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZ2ItdGFiJ30pXG5leHBvcnQgY2xhc3MgTmdiVGFiIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIC8qKlxuICAgKiBUaGUgdGFiIGlkZW50aWZpZXIuXG4gICAqXG4gICAqIE11c3QgYmUgdW5pcXVlIGZvciB0aGUgZW50aXJlIGRvY3VtZW50IGZvciBwcm9wZXIgYWNjZXNzaWJpbGl0eSBzdXBwb3J0LlxuICAgKi9cbiAgQElucHV0KCkgaWQgPSBgbmdiLXRhYi0ke25leHRJZCsrfWA7XG5cbiAgLyoqXG4gICAqIFRoZSB0YWIgdGl0bGUuXG4gICAqXG4gICAqIFVzZSB0aGUgW2BOZ2JUYWJUaXRsZWBdKCMvY29tcG9uZW50cy90YWJzZXQvYXBpI05nYlRhYlRpdGxlKSBkaXJlY3RpdmUgZm9yIG5vbi1zdHJpbmcgdGl0bGVzLlxuICAgKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY3VycmVudCB0YWIgaXMgZGlzYWJsZWQgYW5kIGNhbid0IGJlIHRvZ2dsZWQuXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIHRpdGxlVHBsOiBOZ2JUYWJUaXRsZSB8IG51bGw7XG4gIGNvbnRlbnRUcGw6IE5nYlRhYkNvbnRlbnQgfCBudWxsO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmdiVGFiVGl0bGUsIHtkZXNjZW5kYW50czogZmFsc2V9KSB0aXRsZVRwbHM6IFF1ZXJ5TGlzdDxOZ2JUYWJUaXRsZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oTmdiVGFiQ29udGVudCwge2Rlc2NlbmRhbnRzOiBmYWxzZX0pIGNvbnRlbnRUcGxzOiBRdWVyeUxpc3Q8TmdiVGFiQ29udGVudD47XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIC8vIFdlIGFyZSB1c2luZyBAQ29udGVudENoaWxkcmVuIGluc3RlYWQgb2YgQENvbnRlbnRDaGlsZCBhcyBpbiB0aGUgQW5ndWxhciB2ZXJzaW9uIGJlaW5nIHVzZWRcbiAgICAvLyBvbmx5IEBDb250ZW50Q2hpbGRyZW4gYWxsb3dzIHVzIHRvIHNwZWNpZnkgdGhlIHtkZXNjZW5kYW50czogZmFsc2V9IG9wdGlvbi5cbiAgICAvLyBXaXRob3V0IHtkZXNjZW5kYW50czogZmFsc2V9IHdlIGFyZSBoaXR0aW5nIGJ1Z3MgZGVzY3JpYmVkIGluOlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1ib290c3RyYXAvbmctYm9vdHN0cmFwL2lzc3Vlcy8yMjQwXG4gICAgdGhpcy50aXRsZVRwbCA9IHRoaXMudGl0bGVUcGxzLmZpcnN0O1xuICAgIHRoaXMuY29udGVudFRwbCA9IHRoaXMuY29udGVudFRwbHMuZmlyc3Q7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgcGF5bG9hZCBvZiB0aGUgY2hhbmdlIGV2ZW50IGZpcmVkIHJpZ2h0IGJlZm9yZSB0aGUgdGFiIGNoYW5nZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JUYWJDaGFuZ2VFdmVudCB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiLlxuICAgKi9cbiAgYWN0aXZlSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBuZXdseSBzZWxlY3RlZCB0YWIuXG4gICAqL1xuICBuZXh0SWQ6IHN0cmluZztcblxuICAvKipcbiAgICogQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIHdpbGwgcHJldmVudCB0YWIgc3dpdGNoaW5nLlxuICAgKi9cbiAgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCBtYWtlcyBpdCBlYXN5IHRvIGNyZWF0ZSB0YWJiZWQgaW50ZXJmYWNlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2ItdGFic2V0JyxcbiAgZXhwb3J0QXM6ICduZ2JUYWJzZXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx1bCBbY2xhc3NdPVwiJ25hdiBuYXYtJyArIHR5cGUgKyAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnPyAgJyAnICsganVzdGlmeUNsYXNzIDogJyBmbGV4LWNvbHVtbicpXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCI+XG4gICAgICAgIDxhIFtpZF09XCJ0YWIuaWRcIiBjbGFzcz1cIm5hdi1saW5rXCIgW2NsYXNzLmFjdGl2ZV09XCJ0YWIuaWQgPT09IGFjdGl2ZUlkXCIgW2NsYXNzLmRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXG4gICAgICAgICAgaHJlZiAoY2xpY2spPVwic2VsZWN0KHRhYi5pZCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCIgcm9sZT1cInRhYlwiIFthdHRyLnRhYmluZGV4XT1cIih0YWIuZGlzYWJsZWQgPyAnLTEnOiB1bmRlZmluZWQpXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cIighZGVzdHJveU9uSGlkZSB8fCB0YWIuaWQgPT09IGFjdGl2ZUlkID8gdGFiLmlkICsgJy1wYW5lbCcgOiBudWxsKVwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJ0YWIuaWQgPT09IGFjdGl2ZUlkXCIgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIj5cbiAgICAgICAgICB7e3RhYi50aXRsZX19PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRhYi50aXRsZVRwbD8udGVtcGxhdGVSZWZcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XG4gICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXRhYiBbbmdGb3JPZl09XCJ0YWJzXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIHt7dGFiLmlkID09PSBhY3RpdmVJZCA/ICdhY3RpdmUnIDogbnVsbH19XCJcbiAgICAgICAgICAqbmdJZj1cIiFkZXN0cm95T25IaWRlIHx8IHRhYi5pZCA9PT0gYWN0aXZlSWRcIlxuICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cInRhYi5pZFwiIGlkPVwie3t0YWIuaWR9fS1wYW5lbFwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0YWIuY29udGVudFRwbD8udGVtcGxhdGVSZWZcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTmdiVGFic2V0IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIGp1c3RpZnlDbGFzczogc3RyaW5nO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmdiVGFiKSB0YWJzOiBRdWVyeUxpc3Q8TmdiVGFiPjtcblxuICAvKipcbiAgICogVGhlIGlkZW50aWZpZXIgb2YgdGhlIHRhYiB0aGF0IHNob3VsZCBiZSBvcGVuZWQgKippbml0aWFsbHkqKi5cbiAgICpcbiAgICogRm9yIHN1YnNlcXVlbnQgdGFiIHN3aXRjaGVzIHVzZSB0aGUgYC5zZWxlY3QoKWAgbWV0aG9kIGFuZCB0aGUgYCh0YWJDaGFuZ2UpYCBldmVudC5cbiAgICovXG4gIEBJbnB1dCgpIGFjdGl2ZUlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgbm9uLXZpc2libGUgdGFicyBjb250ZW50IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIERPTS4gT3RoZXJ3aXNlIGl0IHdpbGwganVzdCBiZSBoaWRkZW4uXG4gICAqL1xuICBASW5wdXQoKSBkZXN0cm95T25IaWRlID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIGhvcml6b250YWwgYWxpZ25tZW50IG9mIHRoZSB0YWJzIHdpdGggZmxleGJveCB1dGlsaXRpZXMuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQganVzdGlmeShjbGFzc05hbWU6ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ2ZpbGwnIHwgJ2p1c3RpZmllZCcpIHtcbiAgICBpZiAoY2xhc3NOYW1lID09PSAnZmlsbCcgfHwgY2xhc3NOYW1lID09PSAnanVzdGlmaWVkJykge1xuICAgICAgdGhpcy5qdXN0aWZ5Q2xhc3MgPSBgbmF2LSR7Y2xhc3NOYW1lfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuanVzdGlmeUNsYXNzID0gYGp1c3RpZnktY29udGVudC0ke2NsYXNzTmFtZX1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgb3JpZW50YXRpb24gb2YgdGhlIHRhYnNldC5cbiAgICovXG4gIEBJbnB1dCgpIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuXG4gIC8qKlxuICAgKiBUeXBlIG9mIG5hdmlnYXRpb24gdG8gYmUgdXNlZCBmb3IgdGFicy5cbiAgICpcbiAgICogQ3VycmVudGx5IEJvb3RzdHJhcCBzdXBwb3J0cyBvbmx5IGBcInRhYnNcImAgYW5kIGBcInBpbGxzXCJgLlxuICAgKlxuICAgKiBTaW5jZSBgMy4wLjBgIGNhbiBhbHNvIGJlIGFuIGFyYml0cmFyeSBzdHJpbmcgKGV4LiBmb3IgY3VzdG9tIHRoZW1lcykuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiAndGFicycgfCAncGlsbHMnIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHRhYiBjaGFuZ2UgZXZlbnQgZW1pdHRlZCByaWdodCBiZWZvcmUgdGhlIHRhYiBjaGFuZ2UgaGFwcGVucy5cbiAgICpcbiAgICogU2VlIFtgTmdiVGFiQ2hhbmdlRXZlbnRgXSgjL2NvbXBvbmVudHMvdGFic2V0L2FwaSNOZ2JUYWJDaGFuZ2VFdmVudCkgZm9yIHBheWxvYWQgZGV0YWlscy5cbiAgICovXG4gIEBPdXRwdXQoKSB0YWJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE5nYlRhYkNoYW5nZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTmdiVGFic2V0Q29uZmlnKSB7XG4gICAgdGhpcy50eXBlID0gY29uZmlnLnR5cGU7XG4gICAgdGhpcy5qdXN0aWZ5ID0gY29uZmlnLmp1c3RpZnk7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IGNvbmZpZy5vcmllbnRhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSB0YWIgd2l0aCB0aGUgZ2l2ZW4gaWQgYW5kIHNob3dzIGl0cyBhc3NvY2lhdGVkIGNvbnRlbnQgcGFuZWwuXG4gICAqXG4gICAqIEFueSBvdGhlciB0YWIgdGhhdCB3YXMgcHJldmlvdXNseSBzZWxlY3RlZCBiZWNvbWVzIHVuc2VsZWN0ZWQgYW5kIGl0cyBhc3NvY2lhdGVkIHBhbmUgaXMgcmVtb3ZlZCBmcm9tIERPTSBvclxuICAgKiBoaWRkZW4gZGVwZW5kaW5nIG9uIHRoZSBgZGVzdHJveU9uSGlkZWAgdmFsdWUuXG4gICAqL1xuICBzZWxlY3QodGFiSWQ6IHN0cmluZykge1xuICAgIGxldCBzZWxlY3RlZFRhYiA9IHRoaXMuX2dldFRhYkJ5SWQodGFiSWQpO1xuICAgIGlmIChzZWxlY3RlZFRhYiAmJiAhc2VsZWN0ZWRUYWIuZGlzYWJsZWQgJiYgdGhpcy5hY3RpdmVJZCAhPT0gc2VsZWN0ZWRUYWIuaWQpIHtcbiAgICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMudGFiQ2hhbmdlLmVtaXQoXG4gICAgICAgICAge2FjdGl2ZUlkOiB0aGlzLmFjdGl2ZUlkLCBuZXh0SWQ6IHNlbGVjdGVkVGFiLmlkLCBwcmV2ZW50RGVmYXVsdDogKCkgPT4geyBkZWZhdWx0UHJldmVudGVkID0gdHJ1ZTsgfX0pO1xuXG4gICAgICBpZiAoIWRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJZCA9IHNlbGVjdGVkVGFiLmlkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAvLyBhdXRvLWNvcnJlY3QgYWN0aXZlSWQgdGhhdCBtaWdodCBoYXZlIGJlZW4gc2V0IGluY29ycmVjdGx5IGFzIGlucHV0XG4gICAgbGV0IGFjdGl2ZVRhYiA9IHRoaXMuX2dldFRhYkJ5SWQodGhpcy5hY3RpdmVJZCk7XG4gICAgdGhpcy5hY3RpdmVJZCA9IGFjdGl2ZVRhYiA/IGFjdGl2ZVRhYi5pZCA6ICh0aGlzLnRhYnMubGVuZ3RoID8gdGhpcy50YWJzLmZpcnN0LmlkIDogbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUYWJCeUlkKGlkOiBzdHJpbmcpOiBOZ2JUYWIge1xuICAgIGxldCB0YWJzV2l0aElkOiBOZ2JUYWJbXSA9IHRoaXMudGFicy5maWx0ZXIodGFiID0+IHRhYi5pZCA9PT0gaWQpO1xuICAgIHJldHVybiB0YWJzV2l0aElkLmxlbmd0aCA/IHRhYnNXaXRoSWRbMF0gOiBudWxsO1xuICB9XG59XG4iXX0=