import { Component, Host, Prop, h } from '@stencil/core';
import { Novl } from '../../models/novl';
import { Breakpoints, Grid } from '../../data/novl-carousel';

@Component({
    tag: 'ur-novl-carousel',
    styleUrl: 'ur-novl-carousel.css',
    shadow: true,
})
export class UrNovlCarousel {

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

    render() {
        return (
            <Host>
                <swiper-container
                    grid={this.grid}
                    breakpoint-base="container"
                    breakpoints={this.breakpoints}
                    slides-per-view={this.slidesPerView}
                    space-between={this.spaceBetween}>
                    {this.novls.map(novl => {
                        return (<swiper-slide>
                            <ur-novl {...novl}></ur-novl>
                        </swiper-slide>)
                    })}
                </swiper-container>
            </Host>
        );
    }
}
