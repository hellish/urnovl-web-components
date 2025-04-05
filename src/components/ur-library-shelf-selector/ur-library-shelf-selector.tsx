import { Component, Host, Prop, h, Event, EventEmitter, State, Listen } from '@stencil/core';
import '../ur-text-field/ur-text-field';
import '../ur-radio-button/ur-radio-button';
import '../ur-radio-group/ur-radio-group';
import '../ur-button/ur-button';

@Component({
    tag: 'ur-library-shelf-selector',
    styleUrl: 'ur-library-shelf-selector.css',
    shadow: true,
})
export class UrLibraryShelfSelector {
    @Prop()
    chooseButtonText: string = 'Choose';

    @Prop()
    createButtonText: string = 'Create';

    @Prop()
    chooseShelfLabelText: string = 'You can add this story to a shelf in your library.';

    @Prop()
    createNewShelfLabelText: string = 'Create a new shelf';

    @Prop()
    createNewShelfSubtitleText: string = 'Create a shelve and organize your favorite stories in your Library.';

    @Prop()
    orCreateNewShelf: string = 'or create a new one';

    @Prop()
    newShelfPlaceholder: string = 'Please enter a shelf name';

    @Prop()
    shelves: { name: string }[] = [];

    @Prop({ mutable: true })
    selectedShelf: string = '';

    @State()
    newShelfName: string = '';

    @Event()
    chooseShelfEvent: EventEmitter<{ shelfName: string }>;

    @Event()
    createShelfEvent: EventEmitter<{ shelfName: string }>;

    // Capture the valueSelected event directly from radio buttons
    @Listen('valueSelected', { capture: true })
    handleRadioSelection(event: CustomEvent<{ value: string }>) {
        const newValue = event.detail.value;
        // Only update if it's a different value
        if (this.selectedShelf !== newValue) {
                this.selectedShelf = newValue;
                console.log('Direct radio selection:', this.selectedShelf);
        }
        // Stop propagation to prevent double-handling
        event.stopPropagation();
    }

    componentWillLoad() {
        // Initialize with first shelf selected if available
        if (this.shelves.length > 0 && !this.selectedShelf) {
            this.selectedShelf = this.shelves[0].name;
        }
    }

    private handleRadioGroupChange = (event: CustomEvent<{ name: string; value: string }>) => {
        if (event.detail.name === 'shelf') {
            // Set the selected shelf
            this.selectedShelf = event.detail.value;
            console.log('Radio group change:', this.selectedShelf);
        }
    };

    private handleNewShelfInput = (event: CustomEvent<{ name: string; value: string }>) => {
        this.newShelfName = event.detail.value;
    };

    private handleChoose = (event: Event) => {
        event.preventDefault();
        this.chooseShelfEvent.emit({ shelfName: this.selectedShelf });
    };

    private handleCreate = (event: Event) => {
        event.preventDefault();
        this.createShelfEvent.emit({ shelfName: this.newShelfName });
    };

    render() {
        return (
            <Host>
                <div class="library-shelf-selector">
                    {this.shelves.length > 0 && (
                        <div class="shelves-list-container">
                            <span class="section-title">{this.chooseShelfLabelText}</span>
                            <div class="shelves-list">
                                <ur-radio-group name="shelf" value={this.selectedShelf} onValueChanged={this.handleRadioGroupChange}>
                                    {this.shelves.map(shelf => (
                                        <div class="shelf-item" key={shelf.name}>
                                            <ur-radio-button
                                                value={shelf.name}
                                                // This is crucial: only one radio can be checked at a time
                                                checked={this.selectedShelf === shelf.name}
                                                name="shelf"
                                            >
                                                {shelf.name}
                                            </ur-radio-button>
                                        </div>
                                    ))}
                                </ur-radio-group>
                            </div>

                            <div class="action-button">
                                <ur-button variant="outlined" onClick={this.handleChoose}>
                                    {this.chooseButtonText}
                                </ur-button>
                            </div>
                        </div>
                    )}

                    <div class="create-new-shelf-container">
                        {this.shelves.length > 0 && <h4 class="section-subtitle">{this.orCreateNewShelf}</h4>}

                        {this.shelves.length === 0 && <h4 class="section-subtitle">{this.createNewShelfLabelText}</h4>}

                        <span class="section-title">{this.createNewShelfSubtitleText}</span>

                        <div class="new-shelf-form">
                            <ur-text-field
                                label={this.newShelfPlaceholder}
                                name="newShelf"
                                value={this.newShelfName}
                                onValueChanged={this.handleNewShelfInput}
                            ></ur-text-field>
                        </div>

                        <div class="action-button">
                            <ur-button variant="filled" color="primary" onClick={this.handleCreate}>
                                {this.createButtonText}
                            </ur-button>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }
}
