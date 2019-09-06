/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-card',
                    template: "<!-- card component -->\r\n<div class=\"sbcard sbcard--resource sbcard--course\">\r\n  <div class=\"sbcard__main_area\">\r\n    <!-- card img -->\r\n    <div class=\"sbcard__img\"><img src={{data.img}} alt=\"{{data.title}}\" title=\"{{data.title}}\"></div>\r\n    <!-- card mobile view details -->\r\n    <div class=\"sbcard__info\">\r\n      <h4 class=\"sbcard__title sb__ellipsis sb__ellipsis--two\">{{data.title}}</h4>\r\n      <div class=\"sbcard__meta1\"><span>{{data.subject}}</span><span class=\"dot-divider\"></span><span>{{data.class}}</span></div>\r\n    </div>\r\n  </div>\r\n  <!-- content for only desktop -->\r\n  <div class=\"sb__DesktopOnly\">\r\n    <div class=\"sbcard__moreinfo\">\r\n      <!-- other meta info Medium, Organization etc -->\r\n      <div class=\"sbcard__meta2\">\r\n        <div class=\"sbcard__medium\"><span class=\"medium\">{{data.medium}}</span></div>\r\n        <div class=\"sbcard__org sb__ellipsis\">{{data.org}}</div>\r\n      </div>\r\n      <!-- other meta info Badge and card category Book, learn, practice -->\r\n      <div class=\"sbcard__tags\">\r\n        <span class=\"sbcard__badge\"><img src=\"assets/images/badge.svg\" alt=\"\" title=\"\" /></span>\r\n        <span class=\"sbcard__type\">{{data.category}}</span>\r\n      </div>\r\n    </div>\r\n    <!-- progress bar -->\r\n    <div class=\"sbcard__progressbar sbcard__progressbar--green\">\r\n      <span style=\"width:50%\"></span>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".sb__DesktopOnly{display:none}@media screen and (min-width:768px){.sb__DesktopOnly{display:block}}.sbcard__grid{display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));grid-gap:0}.sbcard__flex{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.sbcard__flex sb-card{margin-bottom:16px;min-width:320px;margin-right:16px}.sbcard__flex--wrap{flex-wrap:wrap;justify-content:flex-start}.sbcard{width:100%;border-radius:0;background-color:#fff;box-shadow:0 2px 7px 0 rgba(0,0,0,.16);display:flex;flex-direction:column;cursor:pointer;position:relative}.sbcard__main_area{display:flex;flex-direction:row;align-items:center;padding:8px;height:88px}.sbcard__img{height:76px;width:76px;overflow:hidden;margin-right:8px;flex:inherit}@media screen and (min-width:768px){.sbcard__grid{grid-gap:1rem}.sbcard{border-radius:2px}.sbcard__img{flex:0 0 76px}}.sbcard__img img{width:100%}.sbcard__title{color:#333;font-size:14px;margin-bottom:0;line-height:normal}.sbcard__meta1{color:#979797;font-size:12px;display:inline-flex;align-items:center}.sbcard .dot-divider{width:4px;height:4px;border-radius:100%;background-color:#d8d8d8;display:inline-block;margin:0 8px}.sbcard__moreinfo{border-top:1px solid #e9e5e5;border-radius:0 0 2px 2px;background-color:#fafafa;display:flex;flex-direction:row;align-items:stretch;justify-content:space-between;padding:8px;max-height:56px}.sbcard__meta2{color:#666;font-size:12px;line-height:14px;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-around}.sbcard__tags{display:flex;flex-direction:row;align-items:center}.sbcard__badge{display:flex}.sbcard__badge img{width:16px}.sbcard__type{margin-left:24px;background:#999;position:relative;height:20px;padding:0 8px 0 4px;color:#fff;margin-right:-8px;font-size:11px;display:flex;align-items:center}.sbcard__type:before{content:\"\";width:0;height:0;border-width:10px 5px;border-style:solid;border-color:#999 #999 #999 transparent;position:absolute;left:-10px}.sbcard__progressbar{height:4px;position:absolute;margin:0;background:#999;border-radius:0;box-shadow:inset 0 -1px 1px rgba(255,255,255,.3);width:100%;bottom:0}.sbcard__progressbar>span{display:block;height:100%;background-color:#2bc253;background-image:-webkit-gradient(center bottom,#2bc253 37%,#54f054 69%);box-shadow:inset 0 2px 9px rgba(255,255,255,.3),inset 0 -2px 6px rgba(0,0,0,.4);position:relative;overflow:hidden}.animate>span>span,.sbcard__progressbar>span:after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;background-image:-webkit-gradient(linear,0 0,100% 100%,color-stop(.25,rgba(255,255,255,.2)),color-stop(.25,transparent),color-stop(.5,transparent),color-stop(.5,rgba(255,255,255,.2)),color-stop(.75,rgba(255,255,255,.2)),color-stop(.75,transparent),to(transparent));z-index:1;background-size:50px 50px;-webkit-animation:2s linear infinite move;overflow:hidden;border-radius:20px 8px 8px 20px}.animate>span:after{display:none}@-webkit-keyframes move{0%{background-position:0 0}100%{background-position:50px 50px}}.orange>span{background-color:#f1a165;background-image:-webkit-linear-gradient(#f1a165,#f36d0a)}.red>span{background-color:#f0a3a3;background-image:-webkit-linear-gradient(#f0a3a3,#f42323)}.nostripes>span:after,.nostripes>span>span{-webkit-animation:none;-moz-animation:none;background-image:none}.sb__ellipsis{cursor:pointer;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1}.sb__ellipsis--two{-webkit-line-clamp:2}"]
                }] }
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return []; };
    CardComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return CardComponent;
}());
export { CardComponent };
if (false) {
    /** @type {?} */
    CardComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zYi11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NhcmQvY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFHLE1BQU0sZUFBZSxDQUFDO0FBRTFEO0lBUUU7SUFDQSxDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQiwrOENBQW9DOztpQkFFckM7Ozs7O3VCQUVFLEtBQUs7O0lBT1Isb0JBQUM7Q0FBQSxBQWJELElBYUM7U0FSWSxhQUFhOzs7SUFDeEIsNkJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0ICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzYi1jYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==