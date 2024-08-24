import { Component, Element, Host, Prop, h } from '@stencil/core';
import { Novl } from '../../models/novl';
import { Breakpoints, Grid } from '../../data/novl-carousel';

@Component({
    tag: 'ur-novl-carousel',
    styleUrl: 'ur-novl-carousel.css',
    shadow: true,
})
export class UrNovlCarousel {

    @Element()
    el: HTMLElement;

    @Prop()
    novls: Array<Novl> = [];

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
    navigation?: boolean = false;

    componentDidLoad() {
        const container: any = this.el.shadowRoot.querySelector('swiper-container');

        if (this.navigation) {
            this.el.shadowRoot.querySelector('ur-button-arrow-left').addEventListener('click', () => {
                container?.swiper?.slidePrev();
            });
            this.el.shadowRoot.querySelector('ur-button-arrow-right').addEventListener('click', () => {
                container?.swiper?.slideNext();
            });
        }
    }

    render() {
        return (
            <Host>
                <div class="carousel">
                    {this.navigation && (
                        <ur-button-arrow-left />
                    )}
                    {this.navigation && (
                        <ur-button-arrow-right />
                    )}
                    <swiper-container
                        breakpoint-base="container"
                        grid={this.grid}
                        breakpoints={this.breakpoints}
                        slides-per-view={this.slidesPerView}
                        space-between={this.spaceBetween}>
                        {this.novls.map(novl => {
                            return (<swiper-slide>
                                <ur-novl {...novl}></ur-novl>
                            </swiper-slide>)
                        })}
                    </swiper-container>
                </div>
            </Host>
        );
    }
}
