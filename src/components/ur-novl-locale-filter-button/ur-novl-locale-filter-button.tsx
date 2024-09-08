import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/button';

@Component({
    tag: 'ur-novl-locale-filter-button',
    styleUrl: 'ur-novl-locale-filter-button.css',
    shadow: true,
})
export class UrNovlLocaleFilterButton {

    @Prop()
    count = 0;

    render() {
        return (
            <Host>
                <mdui-button variant="outlined" class={this.count > 0 ? "with-count" : ""}>
                    <span class="label">Filter</span>
                    {
                        this.count > 0 && <span class="count">{this.count}</span>
                    }
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <g>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M18.3521 1.59702C18.3622 1.44254 18.308 1.29076 18.2022 1.17768C18.0965 1.0646 17.9487 1.00029 17.7939 1H2.15809C2.00321 1.00007 1.85528 1.06431 1.7495 1.17744C1.64372 1.29057 1.58955 1.44248 1.59988 1.59702C1.86961 5.35281 4.60617 8.47002 8.2954 9.22388V16.5933C8.29548 16.8104 8.42112 17.0079 8.61774 17.1C8.81436 17.192 9.04649 17.1621 9.21331 17.0231L11.4521 15.1575C11.5799 15.0513 11.6538 14.8937 11.6536 14.7276V9.22388C15.3442 8.47143 18.0823 5.35381 18.3521 1.59702Z"
                                    stroke="#191C20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </g>
                    </svg>
                </mdui-button>
            </Host>
        );
    }
}
