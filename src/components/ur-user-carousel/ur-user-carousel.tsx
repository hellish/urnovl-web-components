import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { UserCustomContent, is_custom_data, User } from '../../models/user';
import { UserBreakpoints, UserGrid } from '../../data/user-carousel';

@Component({
  tag: 'ur-user-carousel',
  styleUrl: 'ur-user-carousel.css',
  shadow: true,
})

export class UrUserCarousel {

    private swiperContainer!: any;
    private leftArrow?: HTMLElement;
    private rightArrow?: HTMLElement;
    private observer: IntersectionObserver;

    @Element()
    el: HTMLElement;

    @Prop()
    users: Array<User | UserCustomContent> = [];

    @Prop()
    breakpoints?: UserBreakpoints = {
        // add default
    };

    @Prop()
    grid?: UserGrid = {
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
            this.rightArrow.setAttribute('disabled', `${this.users.length === 0}`);
            this.leftArrow.addEventListener('click', this.onLeftClick);
            this.rightArrow .addEventListener('click', this.onRightClick);
            this.swiperContainer?.swiper.on('slideChange', this.onSlideChange);
        }

        const users = this.el.shadowRoot.querySelectorAll('ur-user');
        this.observer = new IntersectionObserver(this.onIntersection);
        users.forEach(user => {
            this.observer.observe(user);
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
                        {this.users.map((user, index) => {
                            if (is_custom_data(user)) {
                                return (<swiper-slide>
                                    <div class="custom" innerHTML={user.content(index)}></div>
                                </swiper-slide>)
                            } else {
                                return (<swiper-slide>
                                    <ur-user {...user}></ur-user>
                                </swiper-slide>)
                            }
                        })}
                    </swiper-container>
                </div>
            </Host>
        );
    }
}
