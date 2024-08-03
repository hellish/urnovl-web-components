import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'ur-novl',
    styleUrl: 'ur-novl.css',
    shadow: true,
})
export class UrNovl {

    @Prop()
    novlTitle = 'Novl title'

    render() {
        return (
            <Host>
                <section class='cover'></section>
                <section class='info'>
                    <div class='title'>{this.novlTitle}</div>
                </section>
            </Host>
        );
    }
}
