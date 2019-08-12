/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Directive, EventEmitter, Inject, Input, NgZone, Output, PLATFORM_ID, QueryList, TemplateRef, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgbCarouselConfig } from './carousel-config';
import { Subject, timer, BehaviorSubject, combineLatest, NEVER } from 'rxjs';
import { startWith, map, switchMap, takeUntil, distinctUntilChanged } from 'rxjs/operators';
/** @type {?} */
let nextId = 0;
/**
 * A directive that wraps the individual carousel slide.
 */
export class NgbSlide {
    /**
     * @param {?} tplRef
     */
    constructor(tplRef) {
        this.tplRef = tplRef;
        /**
         * Slide id that must be unique for the entire document.
         *
         * If not provided, will be generated in the `ngb-slide-xx` format.
         */
        this.id = `ngb-slide-${nextId++}`;
    }
}
NgbSlide.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[ngbSlide]' },] }
];
/** @nocollapse */
NgbSlide.ctorParameters = () => [
    { type: TemplateRef }
];
NgbSlide.propDecorators = {
    id: [{ type: Input }]
};
if (false) {
    /**
     * Slide id that must be unique for the entire document.
     *
     * If not provided, will be generated in the `ngb-slide-xx` format.
     * @type {?}
     */
    NgbSlide.prototype.id;
    /** @type {?} */
    NgbSlide.prototype.tplRef;
}
/**
 * Carousel is a component to easily create and control slideshows.
 *
 * Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.
 */
export class NgbCarousel {
    /**
     * @param {?} config
     * @param {?} _platformId
     * @param {?} _ngZone
     * @param {?} _cd
     */
    constructor(config, _platformId, _ngZone, _cd) {
        this._platformId = _platformId;
        this._ngZone = _ngZone;
        this._cd = _cd;
        this.NgbSlideEventSource = NgbSlideEventSource;
        this._destroy$ = new Subject();
        this._interval$ = new BehaviorSubject(0);
        this._mouseHover$ = new BehaviorSubject(false);
        this._pauseOnHover$ = new BehaviorSubject(false);
        this._pause$ = new BehaviorSubject(false);
        this._wrap$ = new BehaviorSubject(false);
        /**
         * An event emitted right after the slide transition is completed.
         *
         * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
         */
        this.slide = new EventEmitter();
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
        this.pauseOnHover = config.pauseOnHover;
        this.showNavigationArrows = config.showNavigationArrows;
        this.showNavigationIndicators = config.showNavigationIndicators;
    }
    /**
     * Time in milliseconds before the next slide is shown.
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this._interval$.next(value);
    }
    /**
     * @return {?}
     */
    get interval() { return this._interval$.value; }
    /**
     * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
     * @param {?} value
     * @return {?}
     */
    set wrap(value) {
        this._wrap$.next(value);
    }
    /**
     * @return {?}
     */
    get wrap() { return this._wrap$.value; }
    /**
     * If `true`, will pause slide switching when mouse cursor hovers the slide.
     *
     * \@since 2.2.0
     * @param {?} value
     * @return {?}
     */
    set pauseOnHover(value) {
        this._pauseOnHover$.next(value);
    }
    /**
     * @return {?}
     */
    get pauseOnHover() { return this._pauseOnHover$.value; }
    /**
     * @return {?}
     */
    mouseEnter() {
        this._mouseHover$.next(true);
    }
    /**
     * @return {?}
     */
    mouseLeave() {
        this._mouseHover$.next(false);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // setInterval() doesn't play well with SSR and protractor,
        // so we should run it in the browser and outside Angular
        if (isPlatformBrowser(this._platformId)) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const hasNextSlide$ = combineLatest(this.slide.pipe(map((/**
                 * @param {?} slideEvent
                 * @return {?}
                 */
                slideEvent => slideEvent.current)), startWith(this.activeId)), this._wrap$, this.slides.changes.pipe(startWith(null)))
                    .pipe(map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([currentSlideId, wrap]) => {
                    /** @type {?} */
                    const slideArr = this.slides.toArray();
                    /** @type {?} */
                    const currentSlideIdx = this._getSlideIdxById(currentSlideId);
                    return wrap ? slideArr.length > 1 : currentSlideIdx < slideArr.length - 1;
                })), distinctUntilChanged());
                combineLatest(this._pause$, this._pauseOnHover$, this._mouseHover$, this._interval$, hasNextSlide$)
                    .pipe(map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([pause, pauseOnHover, mouseHover, interval, hasNextSlide]) => ((pause || (pauseOnHover && mouseHover) || !hasNextSlide) ? 0 : interval))), distinctUntilChanged(), switchMap((/**
                 * @param {?} interval
                 * @return {?}
                 */
                interval => interval > 0 ? timer(interval, interval) : NEVER)), takeUntil(this._destroy$))
                    .subscribe((/**
                 * @return {?}
                 */
                () => this._ngZone.run((/**
                 * @return {?}
                 */
                () => this.next(NgbSlideEventSource.TIMER)))));
            }));
        }
        this.slides.changes.pipe(takeUntil(this._destroy$)).subscribe((/**
         * @return {?}
         */
        () => this._cd.markForCheck()));
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        let activeSlide = this._getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { this._destroy$.next(); }
    /**
     * Navigates to a slide with the specified identifier.
     * @param {?} slideId
     * @param {?=} source
     * @return {?}
     */
    select(slideId, source) {
        this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId), source);
    }
    /**
     * Navigates to the previous slide.
     * @param {?=} source
     * @return {?}
     */
    prev(source) {
        this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.RIGHT, source);
    }
    /**
     * Navigates to the next slide.
     * @param {?=} source
     * @return {?}
     */
    next(source) {
        this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.LEFT, source);
    }
    /**
     * Pauses cycling through the slides.
     * @return {?}
     */
    pause() { this._pause$.next(true); }
    /**
     * Restarts cycling through the slides from left to right.
     * @return {?}
     */
    cycle() { this._pause$.next(false); }
    /**
     * @private
     * @param {?} slideIdx
     * @param {?} direction
     * @param {?=} source
     * @return {?}
     */
    _cycleToSelected(slideIdx, direction, source) {
        /** @type {?} */
        let selectedSlide = this._getSlideById(slideIdx);
        if (selectedSlide && selectedSlide.id !== this.activeId) {
            this.slide.emit({ prev: this.activeId, current: selectedSlide.id, direction: direction, paused: this._pause$.value, source });
            this.activeId = selectedSlide.id;
        }
        // we get here after the interval fires or any external API call like next(), prev() or select()
        this._cd.markForCheck();
    }
    /**
     * @private
     * @param {?} currentActiveSlideId
     * @param {?} nextActiveSlideId
     * @return {?}
     */
    _getSlideEventDirection(currentActiveSlideId, nextActiveSlideId) {
        /** @type {?} */
        const currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
        /** @type {?} */
        const nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
        return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.RIGHT : NgbSlideEventDirection.LEFT;
    }
    /**
     * @private
     * @param {?} slideId
     * @return {?}
     */
    _getSlideById(slideId) { return this.slides.find((/**
     * @param {?} slide
     * @return {?}
     */
    slide => slide.id === slideId)); }
    /**
     * @private
     * @param {?} slideId
     * @return {?}
     */
    _getSlideIdxById(slideId) {
        return this.slides.toArray().indexOf(this._getSlideById(slideId));
    }
    /**
     * @private
     * @param {?} currentSlideId
     * @return {?}
     */
    _getNextSlide(currentSlideId) {
        /** @type {?} */
        const slideArr = this.slides.toArray();
        /** @type {?} */
        const currentSlideIdx = this._getSlideIdxById(currentSlideId);
        /** @type {?} */
        const isLastSlide = currentSlideIdx === slideArr.length - 1;
        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
            slideArr[currentSlideIdx + 1].id;
    }
    /**
     * @private
     * @param {?} currentSlideId
     * @return {?}
     */
    _getPrevSlide(currentSlideId) {
        /** @type {?} */
        const slideArr = this.slides.toArray();
        /** @type {?} */
        const currentSlideIdx = this._getSlideIdxById(currentSlideId);
        /** @type {?} */
        const isFirstSlide = currentSlideIdx === 0;
        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
            slideArr[currentSlideIdx - 1].id;
    }
}
NgbCarousel.decorators = [
    { type: Component, args: [{
                selector: 'ngb-carousel',
                exportAs: 'ngbCarousel',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'class': 'carousel slide',
                    '[style.display]': '"block"',
                    'tabIndex': '0',
                    '(keydown.arrowLeft)': 'keyboard && prev(NgbSlideEventSource.ARROW_LEFT)',
                    '(keydown.arrowRight)': 'keyboard && next(NgbSlideEventSource.ARROW_RIGHT)'
                },
                template: `
    <ol class="carousel-indicators" *ngIf="showNavigationIndicators">
      <li *ngFor="let slide of slides" [id]="slide.id" [class.active]="slide.id === activeId"
          (click)="select(slide.id, NgbSlideEventSource.INDICATOR)"></li>
    </ol>
    <div class="carousel-inner">
      <div *ngFor="let slide of slides" class="carousel-item" [class.active]="slide.id === activeId">
        <ng-template [ngTemplateOutlet]="slide.tplRef"></ng-template>
      </div>
    </div>
    <a class="carousel-control-prev" role="button" (click)="prev(NgbSlideEventSource.ARROW_LEFT)" *ngIf="showNavigationArrows">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only" i18n="@@ngb.carousel.previous">Previous</span>
    </a>
    <a class="carousel-control-next" role="button" (click)="next(NgbSlideEventSource.ARROW_RIGHT)" *ngIf="showNavigationArrows">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only" i18n="@@ngb.carousel.next">Next</span>
    </a>
  `
            }] }
];
/** @nocollapse */
NgbCarousel.ctorParameters = () => [
    { type: NgbCarouselConfig },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
NgbCarousel.propDecorators = {
    slides: [{ type: ContentChildren, args: [NgbSlide,] }],
    activeId: [{ type: Input }],
    interval: [{ type: Input }],
    wrap: [{ type: Input }],
    keyboard: [{ type: Input }],
    pauseOnHover: [{ type: Input }],
    showNavigationArrows: [{ type: Input }],
    showNavigationIndicators: [{ type: Input }],
    slide: [{ type: Output }],
    mouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    mouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
if (false) {
    /** @type {?} */
    NgbCarousel.prototype.slides;
    /** @type {?} */
    NgbCarousel.prototype.NgbSlideEventSource;
    /**
     * @type {?}
     * @private
     */
    NgbCarousel.prototype._destroy$;
    /**
     * @type {?}
     * @private
     */
    NgbCarousel.prototype._interval$;
    /**
     * @type {?}
     * @private
     */
    NgbCarousel.prototype._mouseHover$;
    /**
     * @type {?}
     * @private
     */
    NgbCarousel.prototype._pauseOnHover$;
    /**
     * @type {?}
     * @private
     */
    NgbCarousel.prototype._pause$;
    /**
     * @type {?}
     * @private
     */
    NgbCarousel.prototype._wrap$;
    /**
     * The slide id that should be displayed **initially**.
     *
     * For subsequent interactions use methods `select()`, `next()`, etc. and the `(slide)` output.
     * @type {?}
     */
    NgbCarousel.prototype.activeId;
    /**
     * If `true`, allows to interact with carousel using keyboard 'arrow left' and 'arrow right'.
     * @type {?}
     */
    NgbCarousel.prototype.keyboard;
    /**
     * If `true`, 'previous' and 'next' navigation arrows will be visible on the slide.
     *
     * \@since 2.2.0
     * @type {?}
     */
    NgbCarousel.prototype.showNavigationArrows;
    /**
     * If `true`, navigation indicators at the bottom of the slide will be visible.
     *
     * \@since 2.2.0
     * @type {?}
     */
    NgbCarousel.prototype.showNavigationIndicators;
    /**
     * An event emitted right after the slide transition is completed.
     *
     * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
     * @type {?}
     */
    NgbCarousel.prototype.slide;
    /**
     * @type {?}
     * @private
     */
    NgbCarousel.prototype._platformId;
    /**
     * @type {?}
     * @private
     */
    NgbCarousel.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    NgbCarousel.prototype._cd;
}
/**
 * A slide change event emitted right after the slide transition is completed.
 * @record
 */
export function NgbSlideEvent() { }
if (false) {
    /**
     * The previous slide id.
     * @type {?}
     */
    NgbSlideEvent.prototype.prev;
    /**
     * The current slide id.
     * @type {?}
     */
    NgbSlideEvent.prototype.current;
    /**
     * The slide event direction.
     *
     * Possible values are `'left' | 'right'`.
     * @type {?}
     */
    NgbSlideEvent.prototype.direction;
    /**
     * Whether the pause() method was called (and no cycle() call was done afterwards).
     *
     * \@since 5.1.0
     * @type {?}
     */
    NgbSlideEvent.prototype.paused;
    /**
     * Source triggering the slide change event.
     *
     * Possible values are `'timer' | 'arrowLeft' | 'arrowRight' | 'indicator'`
     *
     * \@since 5.1.0
     * @type {?|undefined}
     */
    NgbSlideEvent.prototype.source;
}
/** @enum {string} */
const NgbSlideEventDirection = {
    LEFT: (/** @type {?} */ ('left')),
    RIGHT: (/** @type {?} */ ('right')),
};
export { NgbSlideEventDirection };
/** @enum {string} */
const NgbSlideEventSource = {
    TIMER: 'timer',
    ARROW_LEFT: 'arrowLeft',
    ARROW_RIGHT: 'arrowRight',
    INDICATOR: 'indicator',
};
export { NgbSlideEventSource };
/** @type {?} */
export const NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjYXJvdXNlbC9jYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDM0UsT0FBTyxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztJQUV0RixNQUFNLEdBQUcsQ0FBQzs7OztBQU1kLE1BQU0sT0FBTyxRQUFROzs7O0lBT25CLFlBQW1CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCOzs7Ozs7UUFEbEMsT0FBRSxHQUFHLGFBQWEsTUFBTSxFQUFFLEVBQUUsQ0FBQztJQUNRLENBQUM7OztZQVJoRCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7Ozs7WUFmNUMsV0FBVzs7O2lCQXNCVixLQUFLOzs7Ozs7Ozs7SUFBTixzQkFBc0M7O0lBQzFCLDBCQUErQjs7Ozs7OztBQXVDN0MsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7SUE4RXRCLFlBQ0ksTUFBeUIsRUFBK0IsV0FB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Ozs7SUF5QjFCLCtCQUEyQjs7Ozs7OztJQW1CM0IsMkNBQXVDOzs7Ozs7O0lBT3ZDLCtDQUEyQzs7Ozs7OztJQU8zQyw0QkFBb0Q7Ozs7O0lBR3JCLGtDQUF3Qzs7Ozs7SUFBRSw4QkFBdUI7Ozs7O0lBQzVGLDBCQUE4Qjs7Ozs7O0FBcUlwQyxtQ0FpQ0M7Ozs7OztJQTdCQyw2QkFBYTs7Ozs7SUFLYixnQ0FBZ0I7Ozs7Ozs7SUFPaEIsa0NBQWtDOzs7Ozs7O0lBT2xDLCtCQUFnQjs7Ozs7Ozs7O0lBU2hCLCtCQUE2Qjs7OztJQU83QixNQUFPLG1CQUFLLE1BQU0sRUFBQTtJQUNsQixPQUFRLG1CQUFLLE9BQU8sRUFBQTs7Ozs7SUFJcEIsT0FBUSxPQUFPO0lBQ2YsWUFBYSxXQUFXO0lBQ3hCLGFBQWMsWUFBWTtJQUMxQixXQUFZLFdBQVc7Ozs7QUFHekIsTUFBTSxPQUFPLHVCQUF1QixHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtOZ2JDYXJvdXNlbENvbmZpZ30gZnJvbSAnLi9jYXJvdXNlbC1jb25maWcnO1xuXG5pbXBvcnQge1N1YmplY3QsIHRpbWVyLCBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE5FVkVSfSBmcm9tICdyeGpzJztcbmltcG9ydCB7c3RhcnRXaXRoLCBtYXAsIHN3aXRjaE1hcCwgdGFrZVVudGlsLCBkaXN0aW5jdFVudGlsQ2hhbmdlZH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5sZXQgbmV4dElkID0gMDtcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHdyYXBzIHRoZSBpbmRpdmlkdWFsIGNhcm91c2VsIHNsaWRlLlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW25nYlNsaWRlXSd9KVxuZXhwb3J0IGNsYXNzIE5nYlNsaWRlIHtcbiAgLyoqXG4gICAqIFNsaWRlIGlkIHRoYXQgbXVzdCBiZSB1bmlxdWUgZm9yIHRoZSBlbnRpcmUgZG9jdW1lbnQuXG4gICAqXG4gICAqIElmIG5vdCBwcm92aWRlZCwgd2lsbCBiZSBnZW5lcmF0ZWQgaW4gdGhlIGBuZ2Itc2xpZGUteHhgIGZvcm1hdC5cbiAgICovXG4gIEBJbnB1dCgpIGlkID0gYG5nYi1zbGlkZS0ke25leHRJZCsrfWA7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0cGxSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbi8qKlxuICogQ2Fyb3VzZWwgaXMgYSBjb21wb25lbnQgdG8gZWFzaWx5IGNyZWF0ZSBhbmQgY29udHJvbCBzbGlkZXNob3dzLlxuICpcbiAqIEFsbG93cyB0byBzZXQgaW50ZXJ2YWxzLCBjaGFuZ2UgdGhlIHdheSB1c2VyIGludGVyYWN0cyB3aXRoIHRoZSBzbGlkZXMgYW5kIHByb3ZpZGVzIGEgcHJvZ3JhbW1hdGljIEFQSS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdiLWNhcm91c2VsJyxcbiAgZXhwb3J0QXM6ICduZ2JDYXJvdXNlbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2Nhcm91c2VsIHNsaWRlJyxcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogJ1wiYmxvY2tcIicsXG4gICAgJ3RhYkluZGV4JzogJzAnLFxuICAgICcoa2V5ZG93bi5hcnJvd0xlZnQpJzogJ2tleWJvYXJkICYmIHByZXYoTmdiU2xpZGVFdmVudFNvdXJjZS5BUlJPV19MRUZUKScsXG4gICAgJyhrZXlkb3duLmFycm93UmlnaHQpJzogJ2tleWJvYXJkICYmIG5leHQoTmdiU2xpZGVFdmVudFNvdXJjZS5BUlJPV19SSUdIVCknXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiICpuZ0lmPVwic2hvd05hdmlnYXRpb25JbmRpY2F0b3JzXCI+XG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHNsaWRlIG9mIHNsaWRlc1wiIFtpZF09XCJzbGlkZS5pZFwiIFtjbGFzcy5hY3RpdmVdPVwic2xpZGUuaWQgPT09IGFjdGl2ZUlkXCJcbiAgICAgICAgICAoY2xpY2spPVwic2VsZWN0KHNsaWRlLmlkLCBOZ2JTbGlkZUV2ZW50U291cmNlLklORElDQVRPUilcIj48L2xpPlxuICAgIDwvb2w+XG4gICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBzbGlkZSBvZiBzbGlkZXNcIiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIiBbY2xhc3MuYWN0aXZlXT1cInNsaWRlLmlkID09PSBhY3RpdmVJZFwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xpZGUudHBsUmVmXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJwcmV2KE5nYlNsaWRlRXZlbnRTb3VyY2UuQVJST1dfTEVGVClcIiAqbmdJZj1cInNob3dOYXZpZ2F0aW9uQXJyb3dzXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCIgaTE4bj1cIkBAbmdiLmNhcm91c2VsLnByZXZpb3VzXCI+UHJldmlvdXM8L3NwYW4+XG4gICAgPC9hPlxuICAgIDxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJuZXh0KE5nYlNsaWRlRXZlbnRTb3VyY2UuQVJST1dfUklHSFQpXCIgKm5nSWY9XCJzaG93TmF2aWdhdGlvbkFycm93c1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiIGkxOG49XCJAQG5nYi5jYXJvdXNlbC5uZXh0XCI+TmV4dDwvc3Bhbj5cbiAgICA8L2E+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTmdiQ2Fyb3VzZWwgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLFxuICAgIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTmdiU2xpZGUpIHNsaWRlczogUXVlcnlMaXN0PE5nYlNsaWRlPjtcblxuICBwdWJsaWMgTmdiU2xpZGVFdmVudFNvdXJjZSA9IE5nYlNsaWRlRXZlbnRTb3VyY2U7XG5cbiAgcHJpdmF0ZSBfZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9pbnRlcnZhbCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuICBwcml2YXRlIF9tb3VzZUhvdmVyJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBwcml2YXRlIF9wYXVzZU9uSG92ZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHByaXZhdGUgX3BhdXNlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBwcml2YXRlIF93cmFwJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gIC8qKlxuICAgKiBUaGUgc2xpZGUgaWQgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkICoqaW5pdGlhbGx5KiouXG4gICAqXG4gICAqIEZvciBzdWJzZXF1ZW50IGludGVyYWN0aW9ucyB1c2UgbWV0aG9kcyBgc2VsZWN0KClgLCBgbmV4dCgpYCwgZXRjLiBhbmQgdGhlIGAoc2xpZGUpYCBvdXRwdXQuXG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmVJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaW1lIGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgdGhlIG5leHQgc2xpZGUgaXMgc2hvd24uXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgaW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2ludGVydmFsJC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGdldCBpbnRlcnZhbCgpIHsgcmV0dXJuIHRoaXMuX2ludGVydmFsJC52YWx1ZTsgfVxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHdpbGwgJ3dyYXAnIHRoZSBjYXJvdXNlbCBieSBzd2l0Y2hpbmcgZnJvbSB0aGUgbGFzdCBzbGlkZSBiYWNrIHRvIHRoZSBmaXJzdC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB3cmFwKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fd3JhcCQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBnZXQgd3JhcCgpIHsgcmV0dXJuIHRoaXMuX3dyYXAkLnZhbHVlOyB9XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYWxsb3dzIHRvIGludGVyYWN0IHdpdGggY2Fyb3VzZWwgdXNpbmcga2V5Ym9hcmQgJ2Fycm93IGxlZnQnIGFuZCAnYXJyb3cgcmlnaHQnLlxuICAgKi9cbiAgQElucHV0KCkga2V5Ym9hcmQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2lsbCBwYXVzZSBzbGlkZSBzd2l0Y2hpbmcgd2hlbiBtb3VzZSBjdXJzb3IgaG92ZXJzIHRoZSBzbGlkZS5cbiAgICpcbiAgICogQHNpbmNlIDIuMi4wXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgcGF1c2VPbkhvdmVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcGF1c2VPbkhvdmVyJC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGdldCBwYXVzZU9uSG92ZXIoKSB7IHJldHVybiB0aGlzLl9wYXVzZU9uSG92ZXIkLnZhbHVlOyB9XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgJ3ByZXZpb3VzJyBhbmQgJ25leHQnIG5hdmlnYXRpb24gYXJyb3dzIHdpbGwgYmUgdmlzaWJsZSBvbiB0aGUgc2xpZGUuXG4gICAqXG4gICAqIEBzaW5jZSAyLjIuMFxuICAgKi9cbiAgQElucHV0KCkgc2hvd05hdmlnYXRpb25BcnJvd3M6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgbmF2aWdhdGlvbiBpbmRpY2F0b3JzIGF0IHRoZSBib3R0b20gb2YgdGhlIHNsaWRlIHdpbGwgYmUgdmlzaWJsZS5cbiAgICpcbiAgICogQHNpbmNlIDIuMi4wXG4gICAqL1xuICBASW5wdXQoKSBzaG93TmF2aWdhdGlvbkluZGljYXRvcnM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFuIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYWZ0ZXIgdGhlIHNsaWRlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkLlxuICAgKlxuICAgKiBTZWUgW2BOZ2JTbGlkZUV2ZW50YF0oIy9jb21wb25lbnRzL2Nhcm91c2VsL2FwaSNOZ2JTbGlkZUV2ZW50KSBmb3IgcGF5bG9hZCBkZXRhaWxzLlxuICAgKi9cbiAgQE91dHB1dCgpIHNsaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2JTbGlkZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgY29uZmlnOiBOZ2JDYXJvdXNlbENvbmZpZywgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBfcGxhdGZvcm1JZCwgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmludGVydmFsID0gY29uZmlnLmludGVydmFsO1xuICAgIHRoaXMud3JhcCA9IGNvbmZpZy53cmFwO1xuICAgIHRoaXMua2V5Ym9hcmQgPSBjb25maWcua2V5Ym9hcmQ7XG4gICAgdGhpcy5wYXVzZU9uSG92ZXIgPSBjb25maWcucGF1c2VPbkhvdmVyO1xuICAgIHRoaXMuc2hvd05hdmlnYXRpb25BcnJvd3MgPSBjb25maWcuc2hvd05hdmlnYXRpb25BcnJvd3M7XG4gICAgdGhpcy5zaG93TmF2aWdhdGlvbkluZGljYXRvcnMgPSBjb25maWcuc2hvd05hdmlnYXRpb25JbmRpY2F0b3JzO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy5fbW91c2VIb3ZlciQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBtb3VzZUxlYXZlKCkge1xuICAgIHRoaXMuX21vdXNlSG92ZXIkLm5leHQoZmFsc2UpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vIHNldEludGVydmFsKCkgZG9lc24ndCBwbGF5IHdlbGwgd2l0aCBTU1IgYW5kIHByb3RyYWN0b3IsXG4gICAgLy8gc28gd2Ugc2hvdWxkIHJ1biBpdCBpbiB0aGUgYnJvd3NlciBhbmQgb3V0c2lkZSBBbmd1bGFyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMuX3BsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYXNOZXh0U2xpZGUkID0gY29tYmluZUxhdGVzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlLnBpcGUobWFwKHNsaWRlRXZlbnQgPT4gc2xpZGVFdmVudC5jdXJyZW50KSwgc3RhcnRXaXRoKHRoaXMuYWN0aXZlSWQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl93cmFwJCwgdGhpcy5zbGlkZXMuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aChudWxsKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcCgoW2N1cnJlbnRTbGlkZUlkLCB3cmFwXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNsaWRlQXJyID0gdGhpcy5zbGlkZXMudG9BcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZUlkeCA9IHRoaXMuX2dldFNsaWRlSWR4QnlJZChjdXJyZW50U2xpZGVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXAgPyBzbGlkZUFyci5sZW5ndGggPiAxIDogY3VycmVudFNsaWRlSWR4IDwgc2xpZGVBcnIubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICBjb21iaW5lTGF0ZXN0KHRoaXMuX3BhdXNlJCwgdGhpcy5fcGF1c2VPbkhvdmVyJCwgdGhpcy5fbW91c2VIb3ZlciQsIHRoaXMuX2ludGVydmFsJCwgaGFzTmV4dFNsaWRlJClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoW3BhdXNlLCBwYXVzZU9uSG92ZXIsIG1vdXNlSG92ZXIsIGludGVydmFsLCBoYXNOZXh0U2xpZGVdKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgKChwYXVzZSB8fCAocGF1c2VPbkhvdmVyICYmIG1vdXNlSG92ZXIpIHx8ICFoYXNOZXh0U2xpZGUpID8gMCA6IGludGVydmFsKSksXG5cbiAgICAgICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLCBzd2l0Y2hNYXAoaW50ZXJ2YWwgPT4gaW50ZXJ2YWwgPiAwID8gdGltZXIoaW50ZXJ2YWwsIGludGVydmFsKSA6IE5FVkVSKSxcbiAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHRoaXMubmV4dChOZ2JTbGlkZUV2ZW50U291cmNlLlRJTUVSKSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zbGlkZXMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgbGV0IGFjdGl2ZVNsaWRlID0gdGhpcy5fZ2V0U2xpZGVCeUlkKHRoaXMuYWN0aXZlSWQpO1xuICAgIHRoaXMuYWN0aXZlSWQgPSBhY3RpdmVTbGlkZSA/IGFjdGl2ZVNsaWRlLmlkIDogKHRoaXMuc2xpZGVzLmxlbmd0aCA/IHRoaXMuc2xpZGVzLmZpcnN0LmlkIDogbnVsbCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHsgdGhpcy5fZGVzdHJveSQubmV4dCgpOyB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byBhIHNsaWRlIHdpdGggdGhlIHNwZWNpZmllZCBpZGVudGlmaWVyLlxuICAgKi9cbiAgc2VsZWN0KHNsaWRlSWQ6IHN0cmluZywgc291cmNlPzogTmdiU2xpZGVFdmVudFNvdXJjZSkge1xuICAgIHRoaXMuX2N5Y2xlVG9TZWxlY3RlZChzbGlkZUlkLCB0aGlzLl9nZXRTbGlkZUV2ZW50RGlyZWN0aW9uKHRoaXMuYWN0aXZlSWQsIHNsaWRlSWQpLCBzb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgcHJldmlvdXMgc2xpZGUuXG4gICAqL1xuICBwcmV2KHNvdXJjZT86IE5nYlNsaWRlRXZlbnRTb3VyY2UpIHtcbiAgICB0aGlzLl9jeWNsZVRvU2VsZWN0ZWQodGhpcy5fZ2V0UHJldlNsaWRlKHRoaXMuYWN0aXZlSWQpLCBOZ2JTbGlkZUV2ZW50RGlyZWN0aW9uLlJJR0hULCBzb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgbmV4dCBzbGlkZS5cbiAgICovXG4gIG5leHQoc291cmNlPzogTmdiU2xpZGVFdmVudFNvdXJjZSkge1xuICAgIHRoaXMuX2N5Y2xlVG9TZWxlY3RlZCh0aGlzLl9nZXROZXh0U2xpZGUodGhpcy5hY3RpdmVJZCksIE5nYlNsaWRlRXZlbnREaXJlY3Rpb24uTEVGVCwgc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZXMgY3ljbGluZyB0aHJvdWdoIHRoZSBzbGlkZXMuXG4gICAqL1xuICBwYXVzZSgpIHsgdGhpcy5fcGF1c2UkLm5leHQodHJ1ZSk7IH1cblxuICAvKipcbiAgICogUmVzdGFydHMgY3ljbGluZyB0aHJvdWdoIHRoZSBzbGlkZXMgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgKi9cbiAgY3ljbGUoKSB7IHRoaXMuX3BhdXNlJC5uZXh0KGZhbHNlKTsgfVxuXG4gIHByaXZhdGUgX2N5Y2xlVG9TZWxlY3RlZChzbGlkZUlkeDogc3RyaW5nLCBkaXJlY3Rpb246IE5nYlNsaWRlRXZlbnREaXJlY3Rpb24sIHNvdXJjZT86IE5nYlNsaWRlRXZlbnRTb3VyY2UpIHtcbiAgICBsZXQgc2VsZWN0ZWRTbGlkZSA9IHRoaXMuX2dldFNsaWRlQnlJZChzbGlkZUlkeCk7XG4gICAgaWYgKHNlbGVjdGVkU2xpZGUgJiYgc2VsZWN0ZWRTbGlkZS5pZCAhPT0gdGhpcy5hY3RpdmVJZCkge1xuICAgICAgdGhpcy5zbGlkZS5lbWl0KFxuICAgICAgICAgIHtwcmV2OiB0aGlzLmFjdGl2ZUlkLCBjdXJyZW50OiBzZWxlY3RlZFNsaWRlLmlkLCBkaXJlY3Rpb246IGRpcmVjdGlvbiwgcGF1c2VkOiB0aGlzLl9wYXVzZSQudmFsdWUsIHNvdXJjZX0pO1xuICAgICAgdGhpcy5hY3RpdmVJZCA9IHNlbGVjdGVkU2xpZGUuaWQ7XG4gICAgfVxuXG4gICAgLy8gd2UgZ2V0IGhlcmUgYWZ0ZXIgdGhlIGludGVydmFsIGZpcmVzIG9yIGFueSBleHRlcm5hbCBBUEkgY2FsbCBsaWtlIG5leHQoKSwgcHJldigpIG9yIHNlbGVjdCgpXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRTbGlkZUV2ZW50RGlyZWN0aW9uKGN1cnJlbnRBY3RpdmVTbGlkZUlkOiBzdHJpbmcsIG5leHRBY3RpdmVTbGlkZUlkOiBzdHJpbmcpOiBOZ2JTbGlkZUV2ZW50RGlyZWN0aW9uIHtcbiAgICBjb25zdCBjdXJyZW50QWN0aXZlU2xpZGVJZHggPSB0aGlzLl9nZXRTbGlkZUlkeEJ5SWQoY3VycmVudEFjdGl2ZVNsaWRlSWQpO1xuICAgIGNvbnN0IG5leHRBY3RpdmVTbGlkZUlkeCA9IHRoaXMuX2dldFNsaWRlSWR4QnlJZChuZXh0QWN0aXZlU2xpZGVJZCk7XG5cbiAgICByZXR1cm4gY3VycmVudEFjdGl2ZVNsaWRlSWR4ID4gbmV4dEFjdGl2ZVNsaWRlSWR4ID8gTmdiU2xpZGVFdmVudERpcmVjdGlvbi5SSUdIVCA6IE5nYlNsaWRlRXZlbnREaXJlY3Rpb24uTEVGVDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFNsaWRlQnlJZChzbGlkZUlkOiBzdHJpbmcpOiBOZ2JTbGlkZSB7IHJldHVybiB0aGlzLnNsaWRlcy5maW5kKHNsaWRlID0+IHNsaWRlLmlkID09PSBzbGlkZUlkKTsgfVxuXG4gIHByaXZhdGUgX2dldFNsaWRlSWR4QnlJZChzbGlkZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy50b0FycmF5KCkuaW5kZXhPZih0aGlzLl9nZXRTbGlkZUJ5SWQoc2xpZGVJZCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TmV4dFNsaWRlKGN1cnJlbnRTbGlkZUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNsaWRlQXJyID0gdGhpcy5zbGlkZXMudG9BcnJheSgpO1xuICAgIGNvbnN0IGN1cnJlbnRTbGlkZUlkeCA9IHRoaXMuX2dldFNsaWRlSWR4QnlJZChjdXJyZW50U2xpZGVJZCk7XG4gICAgY29uc3QgaXNMYXN0U2xpZGUgPSBjdXJyZW50U2xpZGVJZHggPT09IHNsaWRlQXJyLmxlbmd0aCAtIDE7XG5cbiAgICByZXR1cm4gaXNMYXN0U2xpZGUgPyAodGhpcy53cmFwID8gc2xpZGVBcnJbMF0uaWQgOiBzbGlkZUFycltzbGlkZUFyci5sZW5ndGggLSAxXS5pZCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlQXJyW2N1cnJlbnRTbGlkZUlkeCArIDFdLmlkO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJldlNsaWRlKGN1cnJlbnRTbGlkZUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNsaWRlQXJyID0gdGhpcy5zbGlkZXMudG9BcnJheSgpO1xuICAgIGNvbnN0IGN1cnJlbnRTbGlkZUlkeCA9IHRoaXMuX2dldFNsaWRlSWR4QnlJZChjdXJyZW50U2xpZGVJZCk7XG4gICAgY29uc3QgaXNGaXJzdFNsaWRlID0gY3VycmVudFNsaWRlSWR4ID09PSAwO1xuXG4gICAgcmV0dXJuIGlzRmlyc3RTbGlkZSA/ICh0aGlzLndyYXAgPyBzbGlkZUFycltzbGlkZUFyci5sZW5ndGggLSAxXS5pZCA6IHNsaWRlQXJyWzBdLmlkKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlQXJyW2N1cnJlbnRTbGlkZUlkeCAtIDFdLmlkO1xuICB9XG59XG5cbi8qKlxuICogQSBzbGlkZSBjaGFuZ2UgZXZlbnQgZW1pdHRlZCByaWdodCBhZnRlciB0aGUgc2xpZGUgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiU2xpZGVFdmVudCB7XG4gIC8qKlxuICAgKiBUaGUgcHJldmlvdXMgc2xpZGUgaWQuXG4gICAqL1xuICBwcmV2OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNsaWRlIGlkLlxuICAgKi9cbiAgY3VycmVudDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc2xpZGUgZXZlbnQgZGlyZWN0aW9uLlxuICAgKlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGAnbGVmdCcgfCAncmlnaHQnYC5cbiAgICovXG4gIGRpcmVjdGlvbjogTmdiU2xpZGVFdmVudERpcmVjdGlvbjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgcGF1c2UoKSBtZXRob2Qgd2FzIGNhbGxlZCAoYW5kIG5vIGN5Y2xlKCkgY2FsbCB3YXMgZG9uZSBhZnRlcndhcmRzKS5cbiAgICpcbiAgICogQHNpbmNlIDUuMS4wXG4gICAqL1xuICBwYXVzZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNvdXJjZSB0cmlnZ2VyaW5nIHRoZSBzbGlkZSBjaGFuZ2UgZXZlbnQuXG4gICAqXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgYCd0aW1lcicgfCAnYXJyb3dMZWZ0JyB8ICdhcnJvd1JpZ2h0JyB8ICdpbmRpY2F0b3InYFxuICAgKlxuICAgKiBAc2luY2UgNS4xLjBcbiAgICovXG4gIHNvdXJjZT86IE5nYlNsaWRlRXZlbnRTb3VyY2U7XG59XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgY2Fyb3VzZWwgc2xpZGUgdHJhbnNpdGlvbiBkaXJlY3Rpb24uXG4gKi9cbmV4cG9ydCBlbnVtIE5nYlNsaWRlRXZlbnREaXJlY3Rpb24ge1xuICBMRUZUID0gPGFueT4nbGVmdCcsXG4gIFJJR0hUID0gPGFueT4ncmlnaHQnXG59XG5cbmV4cG9ydCBlbnVtIE5nYlNsaWRlRXZlbnRTb3VyY2Uge1xuICBUSU1FUiA9ICd0aW1lcicsXG4gIEFSUk9XX0xFRlQgPSAnYXJyb3dMZWZ0JyxcbiAgQVJST1dfUklHSFQgPSAnYXJyb3dSaWdodCcsXG4gIElORElDQVRPUiA9ICdpbmRpY2F0b3InXG59XG5cbmV4cG9ydCBjb25zdCBOR0JfQ0FST1VTRUxfRElSRUNUSVZFUyA9IFtOZ2JDYXJvdXNlbCwgTmdiU2xpZGVdO1xuIl19