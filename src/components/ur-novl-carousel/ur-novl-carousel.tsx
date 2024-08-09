import { Component, Host, Prop, h } from '@stencil/core';
import { Novl } from '../../models/novl';

@Component({
    tag: 'ur-novl-carousel',
    styleUrl: 'ur-novl-carousel.css',
    shadow: true,
})
export class UrNovlCarousel {

    @Prop()
    novls: Array<Novl> = [];

    render() {
        return (
            <Host>
                <swiper-container slides-per-view="1" speed="500" loop="true" css-mode="true">
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
