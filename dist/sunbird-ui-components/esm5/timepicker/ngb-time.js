/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isNumber, toInteger } from '../util/util';
var NgbTime = /** @class */ (function () {
    function NgbTime(hour, minute, second) {
        this.hour = toInteger(hour);
        this.minute = toInteger(minute);
        this.second = toInteger(second);
    }
    /**
     * @param {?=} step
     * @return {?}
     */
    NgbTime.prototype.changeHour = /**
     * @param {?=} step
     * @return {?}
     */
    function (step) {
        if (step === void 0) { step = 1; }
        this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NgbTime.prototype.updateHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        if (isNumber(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        }
        else {
            this.hour = NaN;
        }
    };
    /**
     * @param {?=} step
     * @return {?}
     */
    NgbTime.prototype.changeMinute = /**
     * @param {?=} step
     * @return {?}
     */
    function (step) {
        if (step === void 0) { step = 1; }
        this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NgbTime.prototype.updateMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        if (isNumber(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        }
        else {
            this.minute = NaN;
        }
    };
    /**
     * @param {?=} step
     * @return {?}
     */
    NgbTime.prototype.changeSecond = /**
     * @param {?=} step
     * @return {?}
     */
    function (step) {
        if (step === void 0) { step = 1; }
        this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NgbTime.prototype.updateSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        if (isNumber(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        }
        else {
            this.second = NaN;
        }
    };
    /**
     * @param {?=} checkSecs
     * @return {?}
     */
    NgbTime.prototype.isValid = /**
     * @param {?=} checkSecs
     * @return {?}
     */
    function (checkSecs) {
        if (checkSecs === void 0) { checkSecs = true; }
        return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
    };
    /**
     * @return {?}
     */
    NgbTime.prototype.toString = /**
     * @return {?}
     */
    function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
    return NgbTime;
}());
export { NgbTime };
if (false) {
    /** @type {?} */
    NgbTime.prototype.hour;
    /** @type {?} */
    NgbTime.prototype.minute;
    /** @type {?} */
    NgbTime.prototype.second;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRpbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJ0aW1lcGlja2VyL25nYi10aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVqRDtJQUtFLGlCQUFZLElBQWEsRUFBRSxNQUFlLEVBQUUsTUFBZTtRQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELDRCQUFVOzs7O0lBQVYsVUFBVyxJQUFRO1FBQVIscUJBQUEsRUFBQSxRQUFRO1FBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQUMsQ0FBQzs7Ozs7SUFFcEYsNEJBQVU7Ozs7SUFBVixVQUFXLElBQVk7UUFDckIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNoRDthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7OztJQUVELDhCQUFZOzs7O0lBQVosVUFBYSxJQUFRO1FBQVIscUJBQUEsRUFBQSxRQUFRO1FBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQUMsQ0FBQzs7Ozs7SUFFNUYsOEJBQVk7Ozs7SUFBWixVQUFhLE1BQWM7UUFDekIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUNuQjtJQUNILENBQUM7Ozs7O0lBRUQsOEJBQVk7Ozs7SUFBWixVQUFhLElBQVE7UUFBUixxQkFBQSxFQUFBLFFBQVE7UUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFBQyxDQUFDOzs7OztJQUU1Riw4QkFBWTs7OztJQUFaLFVBQWEsTUFBYztRQUN6QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7OztJQUVELHlCQUFPOzs7O0lBQVAsVUFBUSxTQUFnQjtRQUFoQiwwQkFBQSxFQUFBLGdCQUFnQjtRQUN0QixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEcsQ0FBQzs7OztJQUVELDBCQUFROzs7SUFBUixjQUFhLE9BQU8sQ0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsV0FBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUNwRixjQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQzs7OztJQS9DQyx1QkFBYTs7SUFDYix5QkFBZTs7SUFDZix5QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNOdW1iZXIsIHRvSW50ZWdlcn0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuZXhwb3J0IGNsYXNzIE5nYlRpbWUge1xuICBob3VyOiBudW1iZXI7XG4gIG1pbnV0ZTogbnVtYmVyO1xuICBzZWNvbmQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihob3VyPzogbnVtYmVyLCBtaW51dGU/OiBudW1iZXIsIHNlY29uZD86IG51bWJlcikge1xuICAgIHRoaXMuaG91ciA9IHRvSW50ZWdlcihob3VyKTtcbiAgICB0aGlzLm1pbnV0ZSA9IHRvSW50ZWdlcihtaW51dGUpO1xuICAgIHRoaXMuc2Vjb25kID0gdG9JbnRlZ2VyKHNlY29uZCk7XG4gIH1cblxuICBjaGFuZ2VIb3VyKHN0ZXAgPSAxKSB7IHRoaXMudXBkYXRlSG91cigoaXNOYU4odGhpcy5ob3VyKSA/IDAgOiB0aGlzLmhvdXIpICsgc3RlcCk7IH1cblxuICB1cGRhdGVIb3VyKGhvdXI6IG51bWJlcikge1xuICAgIGlmIChpc051bWJlcihob3VyKSkge1xuICAgICAgdGhpcy5ob3VyID0gKGhvdXIgPCAwID8gMjQgKyBob3VyIDogaG91cikgJSAyNDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ob3VyID0gTmFOO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU1pbnV0ZShzdGVwID0gMSkgeyB0aGlzLnVwZGF0ZU1pbnV0ZSgoaXNOYU4odGhpcy5taW51dGUpID8gMCA6IHRoaXMubWludXRlKSArIHN0ZXApOyB9XG5cbiAgdXBkYXRlTWludXRlKG1pbnV0ZTogbnVtYmVyKSB7XG4gICAgaWYgKGlzTnVtYmVyKG1pbnV0ZSkpIHtcbiAgICAgIHRoaXMubWludXRlID0gbWludXRlICUgNjAgPCAwID8gNjAgKyBtaW51dGUgJSA2MCA6IG1pbnV0ZSAlIDYwO1xuICAgICAgdGhpcy5jaGFuZ2VIb3VyKE1hdGguZmxvb3IobWludXRlIC8gNjApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taW51dGUgPSBOYU47XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU2Vjb25kKHN0ZXAgPSAxKSB7IHRoaXMudXBkYXRlU2Vjb25kKChpc05hTih0aGlzLnNlY29uZCkgPyAwIDogdGhpcy5zZWNvbmQpICsgc3RlcCk7IH1cblxuICB1cGRhdGVTZWNvbmQoc2Vjb25kOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOdW1iZXIoc2Vjb25kKSkge1xuICAgICAgdGhpcy5zZWNvbmQgPSBzZWNvbmQgPCAwID8gNjAgKyBzZWNvbmQgJSA2MCA6IHNlY29uZCAlIDYwO1xuICAgICAgdGhpcy5jaGFuZ2VNaW51dGUoTWF0aC5mbG9vcihzZWNvbmQgLyA2MCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlY29uZCA9IE5hTjtcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkKGNoZWNrU2VjcyA9IHRydWUpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5ob3VyKSAmJiBpc051bWJlcih0aGlzLm1pbnV0ZSkgJiYgKGNoZWNrU2VjcyA/IGlzTnVtYmVyKHRoaXMuc2Vjb25kKSA6IHRydWUpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7IHJldHVybiBgJHt0aGlzLmhvdXIgfHwgMH06JHt0aGlzLm1pbnV0ZSB8fCAwfToke3RoaXMuc2Vjb25kIHx8IDB9YDsgfVxufVxuIl19