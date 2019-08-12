/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TemplateRef } from '@angular/core';
var ContentRef = /** @class */ (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
export { ContentRef };
if (false) {
    /** @type {?} */
    ContentRef.prototype.nodes;
    /** @type {?} */
    ContentRef.prototype.viewRef;
    /** @type {?} */
    ContentRef.prototype.componentRef;
}
/**
 * @template T
 */
var /**
 * @template T
 */
PopupService = /** @class */ (function () {
    function PopupService(_type, _injector, _viewContainerRef, _renderer, _componentFactoryResolver, _applicationRef) {
        this._type = _type;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._applicationRef = _applicationRef;
    }
    /**
     * @param {?=} content
     * @param {?=} context
     * @return {?}
     */
    PopupService.prototype.open = /**
     * @param {?=} content
     * @param {?=} context
     * @return {?}
     */
    function (content, context) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), 0, this._injector, this._contentRef.nodes);
        }
        return this._windowRef;
    };
    /**
     * @return {?}
     */
    PopupService.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this._windowRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
            this._windowRef = null;
            if (this._contentRef.viewRef) {
                this._applicationRef.detachView(this._contentRef.viewRef);
                this._contentRef.viewRef.destroy();
                this._contentRef = null;
            }
        }
    };
    /**
     * @private
     * @param {?} content
     * @param {?=} context
     * @return {?}
     */
    PopupService.prototype._getContentRef = /**
     * @private
     * @param {?} content
     * @param {?=} context
     * @return {?}
     */
    function (content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof TemplateRef) {
            /** @type {?} */
            var viewRef = content.createEmbeddedView(context);
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText("" + content)]]);
        }
    };
    return PopupService;
}());
/**
 * @template T
 */
export { PopupService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PopupService.prototype._windowRef;
    /**
     * @type {?}
     * @private
     */
    PopupService.prototype._contentRef;
    /**
     * @type {?}
     * @private
     */
    PopupService.prototype._type;
    /**
     * @type {?}
     * @private
     */
    PopupService.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    PopupService.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    PopupService.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    PopupService.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    PopupService.prototype._applicationRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJ1dGlsL3BvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsV0FBVyxFQU9aLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBQ0Usb0JBQW1CLEtBQVksRUFBUyxPQUFpQixFQUFTLFlBQWdDO1FBQS9FLFVBQUssR0FBTCxLQUFLLENBQU87UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQW9CO0lBQUcsQ0FBQztJQUN4RyxpQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBRGEsMkJBQW1COztJQUFFLDZCQUF3Qjs7SUFBRSxrQ0FBdUM7Ozs7O0FBR3BHOzs7O0lBSUUsc0JBQ1ksS0FBVSxFQUFVLFNBQW1CLEVBQVUsaUJBQW1DLEVBQ3BGLFNBQW9CLEVBQVUseUJBQW1ELEVBQ2pGLGVBQStCO1FBRi9CLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNwRixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNqRixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFBRyxDQUFDOzs7Ozs7SUFFL0MsMkJBQUk7Ozs7O0lBQUosVUFBSyxPQUFtQyxFQUFFLE9BQWE7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQ3BELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ3hGLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDRCQUFLOzs7SUFBTDtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBRXZCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN6QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLHFDQUFjOzs7Ozs7SUFBdEIsVUFBdUIsT0FBa0MsRUFBRSxPQUFhO1FBQ3RFLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO2FBQU0sSUFBSSxPQUFPLFlBQVksV0FBVyxFQUFFOztnQkFDbkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0wsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBRyxPQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7Ozs7Ozs7Ozs7SUEzQ0Msa0NBQW9DOzs7OztJQUNwQyxtQ0FBZ0M7Ozs7O0lBRzVCLDZCQUFrQjs7Ozs7SUFBRSxpQ0FBMkI7Ozs7O0lBQUUseUNBQTJDOzs7OztJQUM1RixpQ0FBNEI7Ozs7O0lBQUUsaURBQTJEOzs7OztJQUN6Rix1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RvcixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFJlbmRlcmVyMixcbiAgQ29tcG9uZW50UmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEFwcGxpY2F0aW9uUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ29udGVudFJlZiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBub2RlczogYW55W10sIHB1YmxpYyB2aWV3UmVmPzogVmlld1JlZiwgcHVibGljIGNvbXBvbmVudFJlZj86IENvbXBvbmVudFJlZjxhbnk+KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUG9wdXBTZXJ2aWNlPFQ+IHtcbiAgcHJpdmF0ZSBfd2luZG93UmVmOiBDb21wb25lbnRSZWY8VD47XG4gIHByaXZhdGUgX2NvbnRlbnRSZWY6IENvbnRlbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF90eXBlOiBhbnksIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgcHJpdmF0ZSBfYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxuXG4gIG9wZW4oY29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4sIGNvbnRleHQ/OiBhbnkpOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIGlmICghdGhpcy5fd2luZG93UmVmKSB7XG4gICAgICB0aGlzLl9jb250ZW50UmVmID0gdGhpcy5fZ2V0Q29udGVudFJlZihjb250ZW50LCBjb250ZXh0KTtcbiAgICAgIHRoaXMuX3dpbmRvd1JlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxUPih0aGlzLl90eXBlKSwgMCwgdGhpcy5faW5qZWN0b3IsXG4gICAgICAgICAgdGhpcy5fY29udGVudFJlZi5ub2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3dpbmRvd1JlZjtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLl93aW5kb3dSZWYpIHtcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYucmVtb3ZlKHRoaXMuX3ZpZXdDb250YWluZXJSZWYuaW5kZXhPZih0aGlzLl93aW5kb3dSZWYuaG9zdFZpZXcpKTtcbiAgICAgIHRoaXMuX3dpbmRvd1JlZiA9IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpIHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpO1xuICAgICAgICB0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9jb250ZW50UmVmID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRDb250ZW50UmVmKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4sIGNvbnRleHQ/OiBhbnkpOiBDb250ZW50UmVmIHtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbXSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBjb250ZW50LmNyZWF0ZUVtYmVkZGVkVmlldyhjb250ZXh0KTtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG4gICAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW3ZpZXdSZWYucm9vdE5vZGVzXSwgdmlld1JlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbW3RoaXMuX3JlbmRlcmVyLmNyZWF0ZVRleHQoYCR7Y29udGVudH1gKV1dKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==