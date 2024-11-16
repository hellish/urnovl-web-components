import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'ur-logo',
    styleUrl: 'ur-logo.css',
    shadow: true,
})
export class UrLogo {
    /**
     * Width of the logo
     */
    @Prop() width: string = '70';

    /**
     * Height of the logo
     */
    @Prop() height: string = '19';

    /**
     * Color of the logo
     */
    @Prop() color: string = 'currentColor';

    /**
     * Rotation angle of the logo in degrees
     */
    @Prop() rotation: number = 0; // Default rotation is 0 degrees

    /**
     * Opacity of the logo
     */
    @Prop() opacity: number = 0.9; // Default opacity is 0.9
    render() {
        // Apply rotation as an inline style
        const rotationStyle = {
            transform: `rotate(${this.rotation}deg)`,
            opacity: `${this.opacity}`,
        };

        return (
            <Host style={{ display: 'inline-block', ...rotationStyle }}>
                <svg class="urnovl-logo" xmlns="http://www.w3.org/2000/svg" width={this.width} height={this.height} viewBox="0 0 200 53.997" style={{ fill: this.color }}>
                    <path
                        d="M35.252,15.875v36.373h-9.375v-2.922C23.025,51.873,19.576,53,16.053,53c-5.025,0-9.527-2.326-12.377-5.852
       C1.352,44.299,0,40.55,0,35.15V15.875h9.752v19.648c0,3.302,0.676,4.951,1.799,6.226c1.5,1.651,3.6,2.253,5.475,2.253
       c4.125,0,7.125-2.779,8.475-4.502V15.875H35.252z"
                    />
                    <path
                        d="M64.119,24.5c-0.675-0.225-2.098-0.375-3.523-0.375c-4.275,0-7.65,3.074-8.85,5.25v22.873h-9.752V15.875
       h9.375v3.676c2.176-2.701,6.15-4.426,10.576-4.426c1.426,0,2.25,0.15,3.3,0.3L64.119,24.5z"
                    />
                    <path
                        d="M68.242,52.248V15.876h9.373v2.926c2.775-2.252,6.227-3.677,10.277-3.677c5.023,0,9.6,2.25,12.599,5.849
       c2.401,2.851,3.75,6.526,3.75,12.751v18.523H94.49V32.976c0-3.601-0.822-5.476-2.174-6.827c-1.273-1.273-3.225-2.023-5.477-2.023
       c-4.121,0-7.499,2.626-8.849,4.5v23.623H68.242z"
                    />
                    <path
                        d="M128.086,15.125c11.024,0,19.348,8.477,19.348,18.973c0,10.5-8.323,18.902-19.348,18.902
       s-19.35-8.402-19.35-18.902C108.736,23.602,117.062,15.125,128.086,15.125 M128.086,44.002c5.699,0,9.598-4.428,9.598-9.904
       c0-5.473-3.898-9.973-9.598-9.973c-5.701,0-9.602,4.5-9.602,9.973C118.484,39.574,122.385,44.002,128.086,44.002"
                    />
                    <polygon points="166.78,38.074 176.756,15.875 186.879,15.875 170.156,52.248 163.405,52.248 146.682,15.875 156.808,15.875" />
                    <rect x="190.252" y="-0.997" width="9.748" height="53.245" />
                </svg>
            </Host>
        );
    }
}
