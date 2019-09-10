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
                    template: "<!-- card component -->\n<div class=\"sbcard sbcard--resource sbcard--course\">\n  <div class=\"sbcard__main-area\">\n    <!-- card img -->\n    <div class=\"sbcard__img\"><img src={{data.img}} alt=\"{{data.title}}\" title=\"{{data.title}}\"></div>\n    <!-- card mobile view details -->\n    <div class=\"sbcard__info\">\n      <h4 class=\"sbcard__title sb__ellipsis sb__ellipsis--two\">{{data.title}}</h4>\n      <div class=\"sbcard__meta1\"><span>{{data.subject}}</span><span class=\"dot-divider\"></span><span>{{data.class}}</span></div>\n    </div>\n  </div>\n  <!-- content for only desktop -->\n  <div class=\"sb__DesktopOnly\">\n    <div class=\"sbcard__moreinfo\">\n      <!-- other meta info Medium, Organization etc -->\n      <div class=\"sbcard__meta2\">\n        <div class=\"sbcard__medium\"><span class=\"medium\">{{data.medium}}</span></div>\n        <div class=\"sbcard__org sb__ellipsis\">{{data.org}}</div>\n      </div>\n      <!-- other meta info Badge and card category Book, learn, practice -->\n      <div class=\"sbcard__tags\">\n        <span class=\"sbcard__badge\"><img src=\"assets/images/badge.svg\" alt=\"\" title=\"\" /></span>\n        <span class=\"sbcard__type\">{{data.category}}</span>\n      </div>\n    </div>\n    <!-- progress bar -->\n    <div class=\"sbcard__progressbar sbcard__progressbar--green\">\n      <span style=\"width:50%\"></span>\n    </div>\n  </div>\n</div>",
                    styles: [":root{--font-stack-en:'Noto Sans','Noto Sans Devanagari','Noto Sans Tamil','Noto Sans Bengali','Noto Sans Malayalam','Noto Sans Gurmukhi','Noto Sans Gujarati','Noto Sans Telugu','Noto Sans Kannada','Noto Sans Oriya','Noto Nastaliq Urdu',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;--font-stack-hi:'Noto Sans Devanagari','Noto Sans','Noto Sans Tamil','Noto Sans Bengali','Noto Sans Malayalam','Noto Sans Gurmukhi','Noto Sans Gujarati','Noto Sans Telugu','Noto Sans Kannada','Noto Sans Oriya','Noto Nastaliq Urdu',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;--font-stack-ur:'Noto Sans','Noto Nastaliq Urdu','Noto Sans Devanagari','Noto Sans Tamil','Noto Sans Bengali','Noto Sans Malayalam','Noto Sans Gurmukhi','Noto Sans Gujarati','Noto Sans Telugu','Noto Sans Kannada','Noto Sans Oriya',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;--blue:#024f9d;--black:#000000;--green:#008840;--orange:#e55a28;--red:#ff4558;--white:#ffffff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--yellow:#ffc107;--teal:#20c997;--cyan:#17a2b8;--gray-hs:0,0%;--gray:hsl(var(--gray-hs),20%);--gray-0:hsl(var(--gray-hs),95%);--gray-100:hsl(var(--gray-hs),80%);--gray-200:hsl(var(--gray-hs),60%);--gray-300:hsl(var(--gray-hs),59%);--gray-400:hsl(var(--gray-hs),40%);--gray-800:var(--gray);--primary-color:var(--blue);--secondary-color:var(--green);--tertiary-color:var(--orange);--primary-0:#F3F7FA;--primary-100:#EDF4F9;--primary-200:#80A7CE;--primary-250:#D3E7F4;--primary-300:#7AB4EE;--primary-400:var(--primary-color);--primary-600:#005391;--primary-800:#002E50;--secondary-0:#E1FFDF;--secondary-100:#00C786;--secondary-200:#07bc81;--secondary-400:var(--secondary-color);--tertiary-0:#FEEDD7;--tertiary-100:#FFA11D;--tertiary-400:var(--tertiary-color);--red-0:#FBCCD1;--red-100:#FF6979;--red-400:var(--red);--base-block-space:8px;--icon-svg-xs:calc(var(--base-block-space) * 2);--icon-svg-sm:calc(var(--base-block-space) * 2.5);--icon-svg-md:calc(var(--base-block-space) * 3);--icon-svg-lg:calc(var(--base-block-space) * 4);--icon-svg-xl:calc(var(--base-block-space) * 5)}.sb__DesktopOnly{display:none}@media (min-width:768px){.sb__DesktopOnly{display:block}}.sbcard{width:100%;border-radius:0;background-color:var(--white);display:flex;flex-direction:column;cursor:pointer;position:relative;border-bottom:1px solid var(--gray-0)}@media (min-width:768px){.sbcard{border-radius:2px;box-shadow:0 2px 7px 0 rgba(0,0,0,.16);border-bottom:0 solid var(--gray-0)}}.sbcard__main-area{display:flex;flex-direction:row;align-items:center;padding:8px;height:88px;border-bottom:1px solid var(--gray-0)}.sbcard__img{height:76px;width:76px;overflow:hidden;margin-right:8px;flex:inherit;flex:0 0 76px}.sbcard__img img{width:100%}.sbcard__title{color:var(--gray-800);font-size:14px;margin:0;line-height:normal}.sbcard__meta1{color:var(--gray-300);font-size:11.9994px;display:inline-flex;align-items:center}.sbcard .dot-divider{width:4px;height:4px;border-radius:100%;background-color:var(--gray-100);display:inline-block;margin:0 8px}.sbcard__moreinfo{border-radius:0 0 2px 2px;background-color:var(--gray-0);display:flex;flex-direction:row;align-items:stretch;justify-content:space-between;padding:8px;min-height:56px}.sbcard__meta2{color:var(--gray-400);font-size:11.9994px;line-height:14px;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-around}.sbcard__tags{display:flex;flex-direction:row;align-items:center}.sbcard__badge{display:flex}.sbcard__badge img{width:16px}.sbcard__type{margin-left:24px;background:#999;position:relative;height:20px;padding:0 8px 0 4px;color:#fff;margin-right:-8px;font-size:10.0002px;display:flex;align-items:center}.sbcard__type:before{content:\"\";width:0;height:0;border-width:10px 5px;border-style:solid;border-color:var(--gray-200) var(--gray-200) var(--gray-200) transparent;position:absolute;left:-10px}.sbcard__progressbar{height:4px;position:absolute;margin:0;background:var(--gray-200);border-radius:0;box-shadow:inset 0 -1px 1px rgba(255,255,255,.3);width:100%;bottom:0}.sbcard__progressbar>span{display:block;height:100%;background-color:#2bc253;background-image:-webkit-gradient(center bottom,#2bc253 37%,#54f054 69%);box-shadow:inset 0 2px 9px rgba(255,255,255,.3),inset 0 -2px 6px rgba(0,0,0,.4);position:relative;overflow:hidden}.animate>span>span,.sbcard__progressbar>span:after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;background-image:-webkit-gradient(linear,0 0,100% 100%,color-stop(.25,rgba(255,255,255,.2)),color-stop(.25,transparent),color-stop(.5,transparent),color-stop(.5,rgba(255,255,255,.2)),color-stop(.75,rgba(255,255,255,.2)),color-stop(.75,transparent),to(transparent));z-index:1;background-size:50px 50px;-webkit-animation:2s linear infinite move;overflow:hidden;border-radius:20px 8px 8px 20px}.animate>span:after{display:none}@-webkit-keyframes move{0%{background-position:0 0}100%{background-position:50px 50px}}.orange>span{background-color:var(--tertiary-0);background-image:-webkit-linear-gradient(var(--tertiary-100),var(--tertiary-400))}.red>span{background-color:var(--red-0);background-image:-webkit-linear-gradient(var(--red-100),var(--red-400))}.nostripes>span:after,.nostripes>span>span{-webkit-animation:none;-moz-animation:none;background-image:none}.sb__ellipsis{-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box}.sb__ellipsis--two{-webkit-line-clamp:2}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zYi11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NhcmQvY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFHLE1BQU0sZUFBZSxDQUFDO0FBRTFEO0lBUUU7SUFDQSxDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixtNUNBQW9DOztpQkFFckM7Ozs7O3VCQUVFLEtBQUs7O0lBT1Isb0JBQUM7Q0FBQSxBQWJELElBYUM7U0FSWSxhQUFhOzs7SUFDeEIsNkJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0ICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYi1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=