import { Component, Host, h } from '@stencil/core';

import 'mdui/components/button';
import 'mdui/components/checkbox';

@Component({
    tag: 'ur-locale-filter-panel',
    styleUrl: 'ur-locale-filter-panel.css',
    shadow: true,
})
export class UrLocaleFilterPanel {
    render() {
        return (
            <div class="locale-filter-panel">
                <header>
                    <mdui-button variant="text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#43474E" />
                        </svg>
                    </mdui-button>
                    <label>Filters</label>
                </header>
                <main>
                    <mdui-checkbox checked>Checkbox</mdui-checkbox>
                </main>
                <footer>
                    <mdui-button>
                        Save
                    </mdui-button>
                    <mdui-button variant="text">
                        Cancel
                    </mdui-button>
                </footer>
            </div>
        );
    }
}
