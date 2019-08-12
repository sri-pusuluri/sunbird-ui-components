/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A configuration service for the [`NgbDatepicker`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
export class NgbDatepickerConfig {
    constructor() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekdays = true;
        this.showWeekNumbers = false;
    }
}
NgbDatepickerConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ NgbDatepickerConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbDatepickerConfig_Factory() { return new NgbDatepickerConfig(); }, token: NgbDatepickerConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgbDatepickerConfig.prototype.dayTemplate;
    /** @type {?} */
    NgbDatepickerConfig.prototype.dayTemplateData;
    /** @type {?} */
    NgbDatepickerConfig.prototype.footerTemplate;
    /** @type {?} */
    NgbDatepickerConfig.prototype.displayMonths;
    /** @type {?} */
    NgbDatepickerConfig.prototype.firstDayOfWeek;
    /** @type {?} */
    NgbDatepickerConfig.prototype.markDisabled;
    /** @type {?} */
    NgbDatepickerConfig.prototype.minDate;
    /** @type {?} */
    NgbDatepickerConfig.prototype.maxDate;
    /** @type {?} */
    NgbDatepickerConfig.prototype.navigation;
    /** @type {?} */
    NgbDatepickerConfig.prototype.outsideDays;
    /** @type {?} */
    NgbDatepickerConfig.prototype.showWeekdays;
    /** @type {?} */
    NgbDatepickerConfig.prototype.showWeekNumbers;
    /** @type {?} */
    NgbDatepickerConfig.prototype.startDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJkYXRlcGlja2VyL2RhdGVwaWNrZXItY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFjLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVd0RCxNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBS0Usa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFJbkIsZUFBVSxHQUFpQyxRQUFRLENBQUM7UUFDcEQsZ0JBQVcsR0FBdUMsU0FBUyxDQUFDO1FBQzVELGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0tBRXpCOzs7WUFmQSxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7OztJQUU5QiwwQ0FBNkM7O0lBQzdDLDhDQUFzRjs7SUFDdEYsNkNBQWlDOztJQUNqQyw0Q0FBa0I7O0lBQ2xCLDZDQUFtQjs7SUFDbkIsMkNBQXVGOztJQUN2RixzQ0FBdUI7O0lBQ3ZCLHNDQUF1Qjs7SUFDdkIseUNBQW9EOztJQUNwRCwwQ0FBNEQ7O0lBQzVELDJDQUFvQjs7SUFDcEIsOENBQXdCOztJQUN4Qix3Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF5VGVtcGxhdGVDb250ZXh0fSBmcm9tICcuL2RhdGVwaWNrZXItZGF5LXRlbXBsYXRlLWNvbnRleHQnO1xuaW1wb3J0IHtOZ2JEYXRlU3RydWN0fSBmcm9tICcuL25nYi1kYXRlLXN0cnVjdCc7XG5cbi8qKlxuICogQSBjb25maWd1cmF0aW9uIHNlcnZpY2UgZm9yIHRoZSBbYE5nYkRhdGVwaWNrZXJgXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9hcGkjTmdiRGF0ZXBpY2tlcikgY29tcG9uZW50LlxuICpcbiAqIFlvdSBjYW4gaW5qZWN0IHRoaXMgc2VydmljZSwgdHlwaWNhbGx5IGluIHlvdXIgcm9vdCBjb21wb25lbnQsIGFuZCBjdXN0b21pemUgdGhlIHZhbHVlcyBvZiBpdHMgcHJvcGVydGllcyBpblxuICogb3JkZXIgdG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIHRoZSBkYXRlcGlja2VycyB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTmdiRGF0ZXBpY2tlckNvbmZpZyB7XG4gIGRheVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxEYXlUZW1wbGF0ZUNvbnRleHQ+O1xuICBkYXlUZW1wbGF0ZURhdGE6IChkYXRlOiBOZ2JEYXRlU3RydWN0LCBjdXJyZW50OiB7eWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyfSkgPT4gYW55O1xuICBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgZGlzcGxheU1vbnRocyA9IDE7XG4gIGZpcnN0RGF5T2ZXZWVrID0gMTtcbiAgbWFya0Rpc2FibGVkOiAoZGF0ZTogTmdiRGF0ZVN0cnVjdCwgY3VycmVudDoge3llYXI6IG51bWJlciwgbW9udGg6IG51bWJlcn0pID0+IGJvb2xlYW47XG4gIG1pbkRhdGU6IE5nYkRhdGVTdHJ1Y3Q7XG4gIG1heERhdGU6IE5nYkRhdGVTdHJ1Y3Q7XG4gIG5hdmlnYXRpb246ICdzZWxlY3QnIHwgJ2Fycm93cycgfCAnbm9uZScgPSAnc2VsZWN0JztcbiAgb3V0c2lkZURheXM6ICd2aXNpYmxlJyB8ICdjb2xsYXBzZWQnIHwgJ2hpZGRlbicgPSAndmlzaWJsZSc7XG4gIHNob3dXZWVrZGF5cyA9IHRydWU7XG4gIHNob3dXZWVrTnVtYmVycyA9IGZhbHNlO1xuICBzdGFydERhdGU6IHt5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXJ9O1xufVxuIl19