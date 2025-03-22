import { Component, Host, Prop, h, Listen, Method, Element, Watch } from '@stencil/core';
import 'mdui/components/navigation-bar.js';
import 'mdui/components/navigation-bar-item.js';
import 'mdui/components/badge.js';
import 'mdui/components/icon.js';

@Component({
    tag: 'ur-navigation-bar',
    styleUrl: 'ur-navigation-bar.css',
    shadow: true,
})
export class UrNavigationBar {
    @Element()
    el!: HTMLElement;

    /** Position of the navigation bar */
    @Prop()
    position: 'bottom' | 'top' = 'bottom';

    /** Label visibility */
    @Prop()
    labelVisibility: 'auto' | 'selected' | 'labeled' | 'unlabeled' = 'auto';

    /** Scroll behavior */
    @Prop()
    scrollBehavior: '' | 'hide' = '';

    /** Scroll threshold in pixels */
    @Prop()
    scrollThreshold: number;

    /** Selected value */
    @Prop({ mutable: true, reflect: true })
    value: string = '';

    /** Scroll target (CSS selector or DOM element) */
    @Prop()
    scrollTarget: string;

    /** Listen for value changes from the MDUI component */
    @Listen('change')
    changeHandler(event: CustomEvent) {
        // Prevent handling events that originated from our own re-emission
        if (event.target !== this.el) {
            console.log('MDUI change event inside Stencil component:', event.detail);
            this.value = event.detail.value;
            
            // Re-emit the event with a different name to avoid infinite loops
            this.el.dispatchEvent(
                new CustomEvent('nav-change', {
                    detail: event.detail,
                    bubbles: true,
                    composed: true
                })
            );
        }
    }

    /** Watch for value changes to update MDUI component */
    @Watch('value')
    valueChanged(newValue: string) {
        const mduiNavBar = this.el.shadowRoot?.querySelector('mdui-navigation-bar');
        if (mduiNavBar) {
            mduiNavBar.setAttribute('value', newValue);
        }
    }

    componentDidLoad() {
        // Initialize with the current value
        this.valueChanged(this.value);
    }

    /** Method to set active item by value */
    @Method()
    async setValue(value: string) {
        this.value = value;
    }

    render() {
        const { position, value, labelVisibility, scrollBehavior, scrollThreshold, scrollTarget } = this;

        return (
            <Host>
                <mdui-navigation-bar
                    class={position === 'top' ? 'top-position' : ''}
                    value={value}
                    label-visibility={labelVisibility}
                    scroll-behavior={scrollBehavior}
                    scroll-threshold={scrollThreshold}
                    scroll-target={scrollTarget}
                >
                    <slot></slot>
                </mdui-navigation-bar>
            </Host>
        );
    }
}
