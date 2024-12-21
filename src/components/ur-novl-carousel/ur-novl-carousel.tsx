import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, h } from '@stencil/core';
import { CustomContent, is_custom_data, Novl } from '../../models/novl';
import { Breakpoints, Grid } from '../../data/novl-carousel';

@Component({
    tag: 'ur-novl-carousel',
    styleUrl: 'ur-novl-carousel.css',
    shadow: true,
})
export class UrNovlCarousel {

    private swiperContainer!: any;
    private leftArrow?: HTMLElement;
    private rightArrow?: HTMLElement;

    @Element()
    el: HTMLElement;

    @Prop()
    @State()
    novls: Array<Novl | CustomContent> = [];

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
    grid?: Grid = {
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
    async addNovls(novls: Array<Novl | CustomContent>) {
        console.log('>> add novls', novls);

        this.swiperContainer?.swiper.appendSlide(novls.map((novl, index) => {
           return this.renderNovl(novl, index);
        }));
    }

    @Method()
    async updateNovl(newIdx: number, newNovl: Novl | CustomContent) {
        console.log('>> update novl', newIdx, newNovl);

        this.updateNovls( new Map([
            [ newIdx, newNovl ]
        ]));
    }

    @Method()
    async updateNovls(updates: Map<number, Novl | CustomContent>) {
        console.log('>> update novls', updates);

        this.novls = this.novls.map((oldNovl, oldIdx) => {
            if (updates.has(oldIdx)) {
                const newNovl = updates.get(oldIdx);
                return newNovl;
            }

            return oldNovl;
        });
    }

    private onSlideChange = () => {
        this.disabledPrev = this.swiperContainer?.swiper?.isBeginning;
        this.disabledNext = this.swiperContainer?.swiper?.isEnd;
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

        this.swiperContainer?.swiper.on('progress', (ss, num) => {
            const progress = parseInt(Math.round(num * 100).toFixed(0), 10)
            const visibleElements = ss.slidesEl.getElementsByClassName('swiper-slide-visible').length;
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
        this.leftArrow?.removeEventListener('click', this.onLeftClick);
        this.rightArrow?.removeEventListener('click', this.onRightClick);
        this.swiperContainer?.swiper.destroy(true, true);
    }

    renderNovl(novl: Novl | CustomContent, index: number) {
        if (is_custom_data(novl)) {
            return (<swiper-slide>
                <span class="numnum">{index + 1}</span>
                <div class="custom" innerHTML={novl.content(index)}></div>
            </swiper-slide>)
        }

        return (<swiper-slide>
            <span class="numnum">{index + 1}</span>
            <ur-novl {...novl}></ur-novl>
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
                        {this.novls.map((novl, index) => this.renderNovl(novl, index))}
                    </swiper-container>
                </div>
            </Host>
        );
    }
}
