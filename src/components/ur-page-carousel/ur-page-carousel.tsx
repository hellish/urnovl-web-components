import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { PageCustomContent, is_custom_data, Page } from '../../models/page';
import { PageBreakpoints, PageGrid } from '../../data/page-carousel';

@Component({
    tag: 'ur-page-carousel',
    styleUrl: 'ur-page-carousel.css',
    shadow: true,
})
export class UrPageCarousel {

    private swiperContainer!: any;
    private leftArrow?: HTMLElement;
    private rightArrow?: HTMLElement;
    private observer: IntersectionObserver;

    @Element()
    el: HTMLElement;

    @Prop()
    pages: Array<Page | PageCustomContent> = [];

    @Prop()
    breakpoints?: PageBreakpoints = {
        // add default
    };

    @Prop()
    grid?: PageGrid = {
        rows: 1,
        fill: 'row'
    };

    @Prop()
    slidesPerView?: number | 'auto' = 'auto';

    @Prop()
    spaceBetween?: number | string = '0';

    @Prop()
    navigation? = false;

    @Event()
    intersectionUpdated: EventEmitter<Array<IntersectionObserverEntry>>;

    @Event()
    prevClicked: EventEmitter<void>;

    @Event()
    nextClicked: EventEmitter<void>;

    private onIntersection = async (entries: Array<IntersectionObserverEntry>) => {
        this.intersectionUpdated.emit(entries);
    };

    private onSlideChange = () => {
        this.leftArrow?.setAttribute('disabled', this.swiperContainer?.swiper?.isBeginning);
        this.rightArrow?.setAttribute('disabled', this.swiperContainer?.swiper?.isEnd);
    };

    private onLeftClick = () => {
        this.swiperContainer?.swiper?.slidePrev();
        this.prevClicked.emit();
    };

    private onRightClick = () => {
        this.swiperContainer?.swiper?.slideNext();
        this.nextClicked.emit();
    };

    componentDidLoad() {
        this.swiperContainer = this.el.shadowRoot.querySelector('swiper-container');

        if (this.navigation) {
            this.leftArrow = this.el.shadowRoot.querySelector('ur-button-arrow-left');
            this.rightArrow = this.el.shadowRoot.querySelector('ur-button-arrow-right');
            this.leftArrow.setAttribute('disabled', 'true');
            this.rightArrow.setAttribute('disabled', `${this.pages.length === 0}`);
            this.leftArrow.addEventListener('click', this.onLeftClick);
            this.rightArrow .addEventListener('click', this.onRightClick);
            this.swiperContainer?.swiper.on('slideChange', this.onSlideChange);
        }

        const pages = this.el.shadowRoot.querySelectorAll('ur-page');
        this.observer = new IntersectionObserver(this.onIntersection);
        pages.forEach(page => {
            this.observer.observe(page);
        })
    }

    disconnectedCallback() {
        this.leftArrow?.removeEventListener('click', this.onLeftClick);
        this.rightArrow?.removeEventListener('click', this.onRightClick);
        this.swiperContainer?.swiper.destroy(true, true);
        this.observer.disconnect();
    }

    render() {
        return (
            <Host>
                <div class="carousel">
                    {this.navigation && (
                        <ur-button-arrow-left disabled />
                    )}
                    {this.navigation && (
                        <ur-button-arrow-right disabled />
                    )}
                    <swiper-container
                        breakpoint-base="container"
                        grid={this.grid}
                        breakpoints={this.breakpoints}
                        slides-per-view={this.slidesPerView}
                        space-between={this.spaceBetween}>
                        {this.pages.map((page, index) => {
                            if (is_custom_data(page)) {
                                return (<swiper-slide>
                                    <div class="custom" innerHTML={page.content(index)}></div>
                                </swiper-slide>)
                            } else {
                                return (<swiper-slide>
                                    <ur-page {...page}></ur-page>
                                </swiper-slide>)
                            }
                        })}
                    </swiper-container>
                </div>
            </Host>
        );
    }
}
