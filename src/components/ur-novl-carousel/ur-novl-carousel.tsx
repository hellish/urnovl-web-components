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
                <swiper-container>
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
