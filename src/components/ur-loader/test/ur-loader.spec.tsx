import { newSpecPage } from '@stencil/core/testing';
import { UrLoader } from '../ur-loader';

describe('ur-loader', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UrLoader],
            html: `<ur-loader></ur-loader>`,
        });
        expect(page.root).toEqualHtml(`
        <ur-loader>
            <mock:shadow-root>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path opacity="0.3" d="M60 30.5C60 47.0685 46.5685 60.5 30 60.5C13.4315 60.5 0 47.0685 0 30.5C0 13.9315 13.4315 0.5 30 0.5C46.5685 0.5 60 13.9315 60 30.5ZM9.35451 30.5C9.35451 41.9022 18.5978 51.1455 30 51.1455C41.4022 51.1455 50.6455 41.9022 50.6455 30.5C50.6455 19.0978 41.4022 9.85451 30 9.85451C18.5978 9.85451 9.35451 19.0978 9.35451 30.5Z" fill="white" />
                        <path d="M55.3227 30.5C57.9059 30.5 60.0372 28.3935 59.6361 25.8416C59.2689 23.5051 58.6257 21.2148 57.7164 19.0195C56.2087 15.3797 53.999 12.0726 51.2132 9.2868C48.4274 6.50104 45.1203 4.29125 41.4805 2.78361C39.2852 1.8743 36.9949 1.23115 34.6584 0.863878C32.1065 0.462764 30 2.59408 30 5.17725V5.17725C30 7.76043 32.1202 9.80184 34.6374 10.3821C35.7496 10.6384 36.8412 10.9872 37.9007 11.4261C40.4055 12.4636 42.6815 13.9843 44.5986 15.9014C46.5157 17.8185 48.0364 20.0945 49.0739 22.5993C49.5128 23.6588 49.8616 24.7504 50.1179 25.8626C50.6982 28.3798 52.7396 30.5 55.3227 30.5V30.5Z" fill="white">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                dur="1s"
                                from="0 30 30"
                                to="360 30 30"
                                repeatCount="indefinite" />
                        </path>
                    </svg>
            </mock:shadow-root>
        </ur-loader>
    `);
    });
});
