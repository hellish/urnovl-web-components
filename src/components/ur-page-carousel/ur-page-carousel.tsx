import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, forceUpdate, h } from '@stencil/core';
import { PageCustomContent, is_custom_data, Page } from '../../models/page';
import { PageGrid } from '../../data/page-carousel';
import { Breakpoints, CustomContent } from '../../components';

@Component({
    tag: 'ur-page-carousel',
    styleUrl: 'ur-page-carousel.css',
    shadow: true,
})
export class UrPageCarousel {

    private swiperContainer!: any;
    private leftArrow?: HTMLElement;
    private rightArrow?: HTMLElement;

    @Element()
    el: HTMLElement;

    @Prop()
    pages: Array<Page | PageCustomContent> = [];

    @Prop()
    @State()
    loading = false;

    @State()
    disabledPrev = true;

    @State()
    disabledNext = false;

    @Prop()
    breakpoints?: Breakpoints = {
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

    @Prop()
    destroyListeners = true;

    @Prop()
    debug = false;

    @Event()
    prevClicked: EventEmitter<void>;

    @Event()
    nextClicked: EventEmitter<void>;

    /*
    @Event()
    slideChange: EventEmitter<[boolean, boolean, number]>;

    @Event()
    snapIndexChange: EventEmitter<Swiper>;*/

    @Event()
    progressUpdated: EventEmitter<[ number, number ]>;

    @Method()
    async addPages(pages: Array<Page | CustomContent>) {
        this.pages = this.pages.concat(...pages);
        forceUpdate(this)
    }

    @Method()
    async updateNovlsByIndex(updates: Map<number, Page | CustomContent>) {
        this.pages = this.pages.map((oldNovl, oldIdx) => {
            if (updates.has(oldIdx)) {
                const newPage = updates.get(oldIdx);
                return newPage;
            }

            return oldNovl;
        });

        forceUpdate(this);
    }

    @Method()
    async reset() {
        const visibleElements = this.swiperContainer.getElementsByClassName('swiper-slide-visible').length;
        const progress = 0;
        this.progressUpdated.emit([ progress, visibleElements ]);
    }

    private onSlideChange = () => {
        this.leftArrow?.setAttribute('disabled', this.swiperContainer?.swiper?.isBeginning);
        this.rightArrow?.setAttribute('disabled', this.swiperContainer?.swiper?.isEnd);
    };

    private onLeftClick = () => {
        if (this.disabledPrev) {
            return;
        }

        this.swiperContainer?.swiper?.slidePrev();
        this.prevClicked.emit();
    };

    private onRightClick = () => {
        if (this.disabledNext) {
            return;
        }

        this.swiperContainer?.swiper?.slideNext();
        this.nextClicked.emit();
    };

    componentDidLoad() {
        this.swiperContainer = this.el.shadowRoot.querySelector('swiper-container');

        if (this.navigation) {
            this.leftArrow = this.el.shadowRoot.querySelector('ur-button-arrow-left');
            this.rightArrow = this.el.shadowRoot.querySelector('ur-button-arrow-right');
            this.leftArrow.addEventListener('click', this.onLeftClick);
            this.rightArrow.addEventListener('click', this.onRightClick);
            this.swiperContainer?.swiper.on('slideChange', this.onSlideChange);
        }

        this.swiperContainer?.swiper.on('reachBeginning', () => {
            this.disabledPrev = true;
        });

        this.swiperContainer?.swiper.on('reachEnd', () => {
            this.disabledNext = true;
        });

        this.swiperContainer?.swiper.on('progress', (event, value) => {
            const progress = parseInt(Math.round(value * 100).toFixed(0), 10)
            const visibleElements = event.slidesEl.getElementsByClassName('swiper-slide-visible').length;
            this.progressUpdated.emit([ progress, visibleElements ]);
        });

        /*
        this.swiperContainer?.swiper.on('fromEdge', (ss) => {
            // console.log('fromEdge', ss);
        });

        this.swiperContainer?.swiper.on('slidesGridLengthChange', (ss) => {
            // console.log('slidesGridLengthChange', ss);
        });

        this.swiperContainer?.swiper.on('slidesLengthChange', (ss) => {
            // console.log('slidesLengthChange', ss);
        });

        this.swiperContainer?.swiper.on('slidesUpdated', (ss) => {
            // console.log('slidesUpdated', ss);
        });

        this.swiperContainer?.swiper.on('snapIndexChange', (swiper) => {
            // this.snapIndexChange.emit(swiper);
        });
        */
    }

    disconnectedCallback() {
        if (this.destroyListeners) {
            this.leftArrow?.removeEventListener('click', this.onLeftClick);
            this.rightArrow?.removeEventListener('click', this.onRightClick);
            this.swiperContainer?.swiper.destroy(true, true);
        }
    }

    renderPage(page: Page | CustomContent, index: number) {
        if (is_custom_data(page)) {
            return (<swiper-slide>
                {this.debug && <span class="index">{index + 1}</span>}
                <div class="custom" innerHTML={page.content(index)}></div>
            </swiper-slide>)
        }

        return (<swiper-slide>
            {this.debug && <span class="index">{index + 1}</span>}
            <ur-page {...page}></ur-page>
        </swiper-slide>)
    }

    render() {
        return (
            <Host>
                <div class="carousel">
                    {this.navigation && (
                        <ur-button-arrow-left disabled={this.disabledPrev} />
                    )}
                    {this.navigation && (
                        <ur-button-arrow-right disabled={this.loading || this.disabledNext} />
                    )}
                    <swiper-container
                        init
                        observer
                        observe-slide-children
                        slides-per-group-auto
                        watch-slides-progress
                        breakpoint-base="container"
                        grid={this.grid}
                        breakpoints={this.breakpoints}
                        slides-per-view={this.slidesPerView}
                        space-between={this.spaceBetween}>
                        {this.pages.map((page, index) => this.renderPage(page, index))}
                    </swiper-container>
                </div>
            </Host>
        );
    }
}
