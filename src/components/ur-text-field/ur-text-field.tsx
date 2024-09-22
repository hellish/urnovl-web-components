import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/text-field';

@Component({
    tag: 'ur-text-field',
    styleUrl: 'ur-text-field.css',
    shadow: true,
})
export class UrTextField {

    @Prop()
    label = "text field"

    @Prop()
    placeholder: string | null = null;

    @Prop()
    helper: string | null = null;

    @Prop()
    disabled = false;

    @Prop()
    variant: 'filled' | 'outlined' = 'filled';

    @Prop()
    value = '';

    @Prop()
    endIcon = null;

    render() {
        return (
            <Host>
                <mdui-text-field
                    variant={this.variant}
                    disabled={this.disabled}
                    value={this.value}
                    label={!!this.label ? this.label : ''}
                    helper={!!this.helper ? this.helper : ''}
                    end-icon={this.endIcon}
                    placeholder={!!this.placeholder ? this.placeholder : ''}></mdui-text-field>
            </Host>
        );
    }
}
