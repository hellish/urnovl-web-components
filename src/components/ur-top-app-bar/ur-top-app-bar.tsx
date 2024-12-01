import { Component, Prop, Host, h } from '@stencil/core';

import 'mdui/components/top-app-bar';
import 'mdui/components/top-app-bar-title';

@Component({
    tag: 'ur-top-app-bar',
    styleUrl: 'ur-top-app-bar.css',
    shadow: true,
})
export class UrTopAppBar {

    @Prop()
    headerTitle = 'Default Title'; // Set a default value if desired

    @Prop()
    variant = 'small'; // Variant prop with a default value

    @Prop()
    logoRotation = 0; // Rotation angle for the logo, default 0 degrees

    @Prop()
    logoOpacity = 1; // Opacity for the logo

    @Prop()
    scrollBehavior: 'hide' | 'shrink' | 'elevate'; // Scroll behavior with default "hide"

    @Prop()
    scrollThreshold: number = 30; // Default value

    render() {
        return (
            <Host>
                <mdui-top-app-bar
                    variant={this.variant}
                    scroll-target=".example-scroll-target"
                    scroll-behavior={this.scrollBehavior}
                    scroll-threshold={this.scrollThreshold}>
                    {/* Logo */}
                    <ur-logo
                        width="70" // Custom width for the logo
                        height="19" // Custom height for the logo
                        color="currentColor" // Dynamic fill color of the logo
                        rotation={this.logoRotation} // Rotation angle for the logo
                        opacity={this.logoOpacity} // Opacity for the logo
                    ></ur-logo>

                    {/* Title */}
                    <mdui-top-app-bar-title>{this.headerTitle}</mdui-top-app-bar-title>
                </mdui-top-app-bar>
            </Host>
        );
    }
}
