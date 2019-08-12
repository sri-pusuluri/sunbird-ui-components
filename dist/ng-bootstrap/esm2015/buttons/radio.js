/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, forwardRef, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbButtonLabel } from './label';
/** @type {?} */
const NGB_RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NgbRadioGroup)),
    multi: true
};
/** @type {?} */
let nextId = 0;
/**
 * Allows to easily create Bootstrap-style radio buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
export class NgbRadioGroup {
    constructor() {
        this._radios = new Set();
        this._value = null;
        /**
         * Name of the radio group applied to radio input elements.
         *
         * Will be applied to all radio input elements inside the group,
         * unless [`NgbRadio`](#/components/buttons/api#NgbRadio)'s specify names themselves.
         *
         * If not provided, will be generated in the `ngb-radio-xx` format.
         */
        this.name = `ngb-radio-${nextId++}`;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    set disabled(isDisabled) { this.setDisabledState(isDisabled); }
    /**
     * @param {?} radio
     * @return {?}
     */
    onRadioChange(radio) {
        this.writeValue(radio.value);
        this.onChange(radio.value);
    }
    /**
     * @return {?}
     */
    onRadioValueUpdate() { this._updateRadiosValue(); }
    /**
     * @param {?} radio
     * @return {?}
     */
    register(radio) { this._radios.add(radio); }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._disabled = isDisabled;
        this._updateRadiosDisabled();
    }
    /**
     * @param {?} radio
     * @return {?}
     */
    unregister(radio) { this._radios.delete(radio); }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        this._updateRadiosValue();
    }
    /**
     * @private
     * @return {?}
     */
    _updateRadiosValue() { this._radios.forEach((/**
     * @param {?} radio
     * @return {?}
     */
    (radio) => radio.updateValue(this._value))); }
    /**
     * @private
     * @return {?}
     */
    _updateRadiosDisabled() { this._radios.forEach((/**
     * @param {?} radio
     * @return {?}
     */
    (radio) => radio.updateDisabled())); }
}
NgbRadioGroup.decorators = [
    { type: Directive, args: [{ selector: '[ngbRadioGroup]', host: { 'role': 'radiogroup' }, providers: [NGB_RADIO_VALUE_ACCESSOR] },] }
];
NgbRadioGroup.propDecorators = {
    name: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbRadioGroup.prototype._radios;
    /**
     * @type {?}
     * @private
     */
    NgbRadioGroup.prototype._value;
    /**
     * @type {?}
     * @private
     */
    NgbRadioGroup.prototype._disabled;
    /**
     * Name of the radio group applied to radio input elements.
     *
     * Will be applied to all radio input elements inside the group,
     * unless [`NgbRadio`](#/components/buttons/api#NgbRadio)'s specify names themselves.
     *
     * If not provided, will be generated in the `ngb-radio-xx` format.
     * @type {?}
     */
    NgbRadioGroup.prototype.name;
    /** @type {?} */
    NgbRadioGroup.prototype.onChange;
    /** @type {?} */
    NgbRadioGroup.prototype.onTouched;
}
/**
 * A directive that marks an input of type "radio" as a part of the
 * [`NgbRadioGroup`](#/components/buttons/api#NgbRadioGroup).
 */
export class NgbRadio {
    /**
     * @param {?} _group
     * @param {?} _label
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _cd
     */
    constructor(_group, _label, _renderer, _element, _cd) {
        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._cd = _cd;
        this._value = null;
        this._group.register(this);
        this.updateDisabled();
    }
    /**
     * The form control value when current radio button is checked.
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        /** @type {?} */
        const stringValue = value ? value.toString() : '';
        this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);
        this._group.onRadioValueUpdate();
    }
    /**
     * If `true`, current radio button will be disabled.
     * @param {?} isDisabled
     * @return {?}
     */
    set disabled(isDisabled) {
        this._disabled = isDisabled !== false;
        this.updateDisabled();
    }
    /**
     * @param {?} isFocused
     * @return {?}
     */
    set focused(isFocused) {
        if (this._label) {
            this._label.focused = isFocused;
        }
        if (!isFocused) {
            this._group.onTouched();
        }
    }
    /**
     * @return {?}
     */
    get checked() { return this._checked; }
    /**
     * @return {?}
     */
    get disabled() { return this._group.disabled || this._disabled; }
    /**
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @return {?}
     */
    get nameAttr() { return this.name || this._group.name; }
    /**
     * @return {?}
     */
    ngOnDestroy() { this._group.unregister(this); }
    /**
     * @return {?}
     */
    onChange() { this._group.onRadioChange(this); }
    /**
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        // label won't be updated, if it is inside the OnPush component when [ngModel] changes
        if (this.value !== value) {
            this._cd.markForCheck();
        }
        this._checked = this.value === value;
        this._label.active = this._checked;
    }
    /**
     * @return {?}
     */
    updateDisabled() { this._label.disabled = this.disabled; }
}
NgbRadio.decorators = [
    { type: Directive, args: [{
                selector: '[ngbButton][type=radio]',
                host: {
                    '[checked]': 'checked',
                    '[disabled]': 'disabled',
                    '[name]': 'nameAttr',
                    '(change)': 'onChange()',
                    '(focus)': 'focused = true',
                    '(blur)': 'focused = false'
                }
            },] }
];
/** @nocollapse */
NgbRadio.ctorParameters = () => [
    { type: NgbRadioGroup },
    { type: NgbButtonLabel },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
NgbRadio.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input, args: ['value',] }],
    disabled: [{ type: Input, args: ['disabled',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbRadio.prototype._checked;
    /**
     * @type {?}
     * @private
     */
    NgbRadio.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    NgbRadio.prototype._value;
    /**
     * The value for the 'name' property of the input element.
     *
     * All inputs of the radio group should have the same name. If not specified,
     * the name of the enclosing group is used.
     * @type {?}
     */
    NgbRadio.prototype.name;
    /**
     * @type {?}
     * @private
     */
    NgbRadio.prototype._group;
    /**
     * @type {?}
     * @private
     */
    NgbRadio.prototype._label;
    /**
     * @type {?}
     * @private
     */
    NgbRadio.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    NgbRadio.prototype._element;
    /**
     * @type {?}
     * @private
     */
    NgbRadio.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJidXR0b25zL3JhZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLFNBQVMsQ0FBQzs7TUFFakMsd0JBQXdCLEdBQUc7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFDO0lBQzVDLEtBQUssRUFBRSxJQUFJO0NBQ1o7O0lBRUcsTUFBTSxHQUFHLENBQUM7Ozs7Ozs7QUFTZCxNQUFNLE9BQU8sYUFBYTtJQUQxQjtRQUVVLFlBQU8sR0FBa0IsSUFBSSxHQUFHLEVBQVksQ0FBQztRQUM3QyxXQUFNLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7UUFjYixTQUFJLEdBQUcsYUFBYSxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBRXhDLGFBQVE7Ozs7UUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBQzFCLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztJQTZCdkIsQ0FBQzs7OztJQTNDQyxJQUFJLFFBQVEsS0FBSyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7OztJQUN6QyxJQUFJLFFBQVEsQ0FBQyxVQUFtQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBZXhFLGFBQWEsQ0FBQyxLQUFlO1FBQzNCLElBQUksQ0FBQyxV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QUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxjQUFjLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OztZQWxGM0QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLElBQUksRUFBRTtvQkFDSixXQUFXLEVBQUUsU0FBUztvQkFDdEIsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLFFBQVEsRUFBRSxVQUFVO29CQUNwQixVQUFVLEVBQUUsWUFBWTtvQkFDeEIsU0FBUyxFQUFFLGdCQUFnQjtvQkFDM0IsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7YUFDRjs7OztZQW9EcUIsYUFBYTtZQXRJM0IsY0FBYztZQUgwRCxTQUFTO1lBQW5ELFVBQVU7WUFBeEMsaUJBQWlCOzs7bUJBaUd0QixLQUFLO29CQUtMLEtBQUssU0FBQyxPQUFPO3VCQVdiLEtBQUssU0FBQyxVQUFVOzs7Ozs7O0lBMUJqQiw0QkFBMEI7Ozs7O0lBQzFCLDZCQUEyQjs7Ozs7SUFDM0IsMEJBQTJCOzs7Ozs7OztJQVEzQix3QkFBc0I7Ozs7O0lBd0NsQiwwQkFBNkI7Ozs7O0lBQUUsMEJBQThCOzs7OztJQUFFLDZCQUE0Qjs7Ozs7SUFDM0YsNEJBQThDOzs7OztJQUFFLHVCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7TmdiQnV0dG9uTGFiZWx9IGZyb20gJy4vbGFiZWwnO1xuXG5jb25zdCBOR0JfUkFESU9fVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ2JSYWRpb0dyb3VwKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmxldCBuZXh0SWQgPSAwO1xuXG4vKipcbiAqIEFsbG93cyB0byBlYXNpbHkgY3JlYXRlIEJvb3RzdHJhcC1zdHlsZSByYWRpbyBidXR0b25zLlxuICpcbiAqIEludGVncmF0ZXMgd2l0aCBmb3Jtcywgc28gdGhlIHZhbHVlIG9mIGEgY2hlY2tlZCBidXR0b24gaXMgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgZm9ybSBjb250cm9sXG4gKiBlaXRoZXIgaW4gYSByZWFjdGl2ZSBvciB0ZW1wbGF0ZS1kcml2ZW4gd2F5LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tuZ2JSYWRpb0dyb3VwXScsIGhvc3Q6IHsncm9sZSc6ICdyYWRpb2dyb3VwJ30sIHByb3ZpZGVyczogW05HQl9SQURJT19WQUxVRV9BQ0NFU1NPUl19KVxuZXhwb3J0IGNsYXNzIE5nYlJhZGlvR3JvdXAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgX3JhZGlvczogU2V0PE5nYlJhZGlvPiA9IG5ldyBTZXQ8TmdiUmFkaW8+KCk7XG4gIHByaXZhdGUgX3ZhbHVlID0gbnVsbDtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHsgdGhpcy5zZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQpOyB9XG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIHJhZGlvIGdyb3VwIGFwcGxpZWQgdG8gcmFkaW8gaW5wdXQgZWxlbWVudHMuXG4gICAqXG4gICAqIFdpbGwgYmUgYXBwbGllZCB0byBhbGwgcmFkaW8gaW5wdXQgZWxlbWVudHMgaW5zaWRlIHRoZSBncm91cCxcbiAgICogdW5sZXNzIFtgTmdiUmFkaW9gXSgjL2NvbXBvbmVudHMvYnV0dG9ucy9hcGkjTmdiUmFkaW8pJ3Mgc3BlY2lmeSBuYW1lcyB0aGVtc2VsdmVzLlxuICAgKlxuICAgKiBJZiBub3QgcHJvdmlkZWQsIHdpbGwgYmUgZ2VuZXJhdGVkIGluIHRoZSBgbmdiLXJhZGlvLXh4YCBmb3JtYXQuXG4gICAqL1xuICBASW5wdXQoKSBuYW1lID0gYG5nYi1yYWRpby0ke25leHRJZCsrfWA7XG5cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgb25SYWRpb0NoYW5nZShyYWRpbzogTmdiUmFkaW8pIHtcbiAgICB0aGlzLndyaXRlVmFsdWUocmFkaW8udmFsdWUpO1xuICAgIHRoaXMub25DaGFuZ2UocmFkaW8udmFsdWUpO1xuICB9XG5cbiAgb25SYWRpb1ZhbHVlVXBkYXRlKCkgeyB0aGlzLl91cGRhdGVSYWRpb3NWYWx1ZSgpOyB9XG5cbiAgcmVnaXN0ZXIocmFkaW86IE5nYlJhZGlvKSB7IHRoaXMuX3JhZGlvcy5hZGQocmFkaW8pOyB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5fdXBkYXRlUmFkaW9zRGlzYWJsZWQoKTtcbiAgfVxuXG4gIHVucmVnaXN0ZXIocmFkaW86IE5nYlJhZGlvKSB7IHRoaXMuX3JhZGlvcy5kZWxldGUocmFkaW8pOyB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fdXBkYXRlUmFkaW9zVmFsdWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVJhZGlvc1ZhbHVlKCkgeyB0aGlzLl9yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHJhZGlvLnVwZGF0ZVZhbHVlKHRoaXMuX3ZhbHVlKSk7IH1cbiAgcHJpdmF0ZSBfdXBkYXRlUmFkaW9zRGlzYWJsZWQoKSB7IHRoaXMuX3JhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4gcmFkaW8udXBkYXRlRGlzYWJsZWQoKSk7IH1cbn1cblxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgbWFya3MgYW4gaW5wdXQgb2YgdHlwZSBcInJhZGlvXCIgYXMgYSBwYXJ0IG9mIHRoZVxuICogW2BOZ2JSYWRpb0dyb3VwYF0oIy9jb21wb25lbnRzL2J1dHRvbnMvYXBpI05nYlJhZGlvR3JvdXApLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdiQnV0dG9uXVt0eXBlPXJhZGlvXScsXG4gIGhvc3Q6IHtcbiAgICAnW2NoZWNrZWRdJzogJ2NoZWNrZWQnLFxuICAgICdbZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW25hbWVdJzogJ25hbWVBdHRyJyxcbiAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoKScsXG4gICAgJyhmb2N1cyknOiAnZm9jdXNlZCA9IHRydWUnLFxuICAgICcoYmx1ciknOiAnZm9jdXNlZCA9IGZhbHNlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE5nYlJhZGlvIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY2hlY2tlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgZm9yIHRoZSAnbmFtZScgcHJvcGVydHkgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqXG4gICAqIEFsbCBpbnB1dHMgb2YgdGhlIHJhZGlvIGdyb3VwIHNob3VsZCBoYXZlIHRoZSBzYW1lIG5hbWUuIElmIG5vdCBzcGVjaWZpZWQsXG4gICAqIHRoZSBuYW1lIG9mIHRoZSBlbmNsb3NpbmcgZ3JvdXAgaXMgdXNlZC5cbiAgICovXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGZvcm0gY29udHJvbCB2YWx1ZSB3aGVuIGN1cnJlbnQgcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWQuXG4gICAqL1xuICBASW5wdXQoJ3ZhbHVlJylcbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gdmFsdWUgPyB2YWx1ZS50b1N0cmluZygpIDogJyc7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBzdHJpbmdWYWx1ZSk7XG4gICAgdGhpcy5fZ3JvdXAub25SYWRpb1ZhbHVlVXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogSWYgYHRydWVgLCBjdXJyZW50IHJhZGlvIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgQElucHV0KCdkaXNhYmxlZCcpXG4gIHNldCBkaXNhYmxlZChpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBpc0Rpc2FibGVkICE9PSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkKCk7XG4gIH1cblxuICBzZXQgZm9jdXNlZChpc0ZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fbGFiZWwpIHtcbiAgICAgIHRoaXMuX2xhYmVsLmZvY3VzZWQgPSBpc0ZvY3VzZWQ7XG4gICAgfVxuICAgIGlmICghaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLl9ncm91cC5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2hlY2tlZCgpIHsgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7IH1cblxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9ncm91cC5kaXNhYmxlZCB8fCB0aGlzLl9kaXNhYmxlZDsgfVxuXG4gIGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG5cbiAgZ2V0IG5hbWVBdHRyKCkgeyByZXR1cm4gdGhpcy5uYW1lIHx8IHRoaXMuX2dyb3VwLm5hbWU7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2dyb3VwOiBOZ2JSYWRpb0dyb3VwLCBwcml2YXRlIF9sYWJlbDogTmdiQnV0dG9uTGFiZWwsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+LCBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLl9ncm91cC5yZWdpc3Rlcih0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHsgdGhpcy5fZ3JvdXAudW5yZWdpc3Rlcih0aGlzKTsgfVxuXG4gIG9uQ2hhbmdlKCkgeyB0aGlzLl9ncm91cC5vblJhZGlvQ2hhbmdlKHRoaXMpOyB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWUpIHtcbiAgICAvLyBsYWJlbCB3b24ndCBiZSB1cGRhdGVkLCBpZiBpdCBpcyBpbnNpZGUgdGhlIE9uUHVzaCBjb21wb25lbnQgd2hlbiBbbmdNb2RlbF0gY2hhbmdlc1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2hlY2tlZCA9IHRoaXMudmFsdWUgPT09IHZhbHVlO1xuICAgIHRoaXMuX2xhYmVsLmFjdGl2ZSA9IHRoaXMuX2NoZWNrZWQ7XG4gIH1cblxuICB1cGRhdGVEaXNhYmxlZCgpIHsgdGhpcy5fbGFiZWwuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkOyB9XG59XG4iXX0=