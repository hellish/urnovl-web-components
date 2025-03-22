import { Component, Host, Prop, h, Event, EventEmitter, Watch, State } from '@stencil/core';
import '../ur-button-icon/ur-button-icon';
import '../ur-list/ur-list';
import '../ur-list/ur-list-item';

@Component({
    tag: 'ur-autosave-drawer',
    styleUrl: 'ur-autosave-drawer.css',
    shadow: true,
})
export class UrAutosaveDrawer {

    // Add a state variable to trigger re-renders
    @State() private forceRender: number = 0;

    /**
     * Array of autosave items to display in the drawer
     */
    @Prop({ mutable: true })
    autosaves: any[] = [];

    /**
     * Watch for changes in the autosaves array
     */
    @Watch('autosaves')
    autosavesChanged(newValue: any[]) {
        console.log('Autosaves changed in web component:', newValue);
        // You can add additional logic here if needed
        // Force a re-render if needed
        this.forceRender++;
    }

    /**
     * Empty drawer message
     */
    @Prop()
    emptyMessage: string = "You don't have anything saved in your drawer, yet!";

    /**
     * Text for the chapter label
     */
    @Prop()
    chapterText: string = 'Chapter';

    /**
     * Text for the yes button
     */
    @Prop()
    yesText: string = 'Yes';

    /**
     * Text for the no button
     */
    @Prop()
    noText: string = 'No';

    /**
     * Text for the autosaves title
     */
    @Prop()
    autosavesTitle: string = 'Autosaves';

    /**
     * Text for delete confirmation
     */
    @Prop()
    deleteConfirmMessage: string = 'Delete chapter?';

    /**
     * Event emitted when an autosave is selected to open
     */
    @Event()
    autosaveOpen: EventEmitter<any>;

    /**
     * Event emitted when delete icon is clicked for an autosave
     */
    @Event()
    autosaveDeleteRequest: EventEmitter<any>;

    /**
     * Event emitted when delete confirmation "Yes" button is clicked
     */
    @Event()
    autosaveDeleteConfirm: EventEmitter<any>;

    /**
     * Event emitted when delete confirmation "No" button is clicked
     */
    @Event()
    autosaveDeleteCancel: EventEmitter<any>;

    /**
     * Handle opening an autosave
     */
    handleOpenAutosave(event: Event, autosave: any) {
        event.stopPropagation();
        this.autosaveOpen.emit(autosave);
    }

    /**
     * Handle clicking the delete icon
     */
    handleDeleteRequest(event: Event, autosave: any) {
        event.stopPropagation();
        // Set showOptions to true for this autosave
        this.autosaves = this.autosaves.map(item => {
            if ((item.id && item.id === autosave.id) || (item._id && item._id === autosave._id)) {
                return { ...item, showOptions: true };
            }
            return item;
        });
        this.autosaveDeleteRequest.emit(autosave);
    }

    /**
     * Handle confirming deletion
     */
    handleDeleteConfirm(event: Event, autosave: any) {
        event.stopPropagation();
        this.autosaveDeleteConfirm.emit(autosave);
    }

    /**
     * Handle canceling deletion
     */
    handleDeleteCancel(event: Event, autosave: any) {
        event.stopPropagation();
        // Set showOptions back to false
        this.autosaves = this.autosaves.map(item => {
            if ((item.id && item.id === autosave.id) || (item._id && item._id === autosave._id)) {
                return { ...item, showOptions: false };
            }
            return item;
        });
        this.autosaveDeleteCancel.emit(autosave);
    }

    renderAutosaveContent(autosave) {
        // Display novl title as the main title
        const mainTitle = autosave.novl?.title || 'Untitled Story';
        
        // Use the autosave title as subtitle if available
        const subtitle = autosave.title || 'Untitled Chapter';
        
        // Display chapter sequence
        const chapterSequence = autosave.sequence ? `${this.chapterText} ${autosave.sequence}` : '';
        
        return (
            <div class="autosave-content">
                <div class="content-info">
                    <div class="title">{mainTitle}</div>
                    <div class="subtitle">{subtitle}</div>
                    {chapterSequence && <div class="chapter">{chapterSequence}</div>}
                </div>
            </div>
        );
    }

    renderDeleteConfirmation(autosave) {
        return (
            <div class="confirmation-content">
                <div class="confirmation-title">{this.deleteConfirmMessage}</div>
                <div class="confirmation-buttons">
                    <ur-button-icon
                        icon="check"
                        variant="standard"
                        buttonHeight="32px"
                        buttonWidth="32px"
                        onClick={event => this.handleDeleteConfirm(event, autosave)}
                    ></ur-button-icon>
                    <ur-button-icon
                        icon="close"
                        variant="standard"
                        buttonHeight="32px"
                        buttonWidth="32px"
                        onClick={event => this.handleDeleteCancel(event, autosave)}
                    ></ur-button-icon>
                </div>
            </div>
        );
    }

    render() {
        return (
            <Host>
                <div class="drawer">
                    {this.autosaves && this.autosaves.length > 0 && (
                        <div class="autosaves-container">
                            <div class="autosaves-title">{this.autosavesTitle}</div>
                            <ur-list>
                                {this.autosaves.map((autosave, index) =>
                                    autosave.showOptions ? (
                                        <ur-list-item key={autosave.id || autosave._id || index} nonclickable={true} class="confirmation-item">
                                            {this.renderDeleteConfirmation(autosave)}
                                        </ur-list-item>
                                    ) : (
                                        <div class="autosave-item">
                                            <ur-list-item key={autosave.id || autosave._id || index} onClick={event => this.handleOpenAutosave(event, autosave)}>
                                                {this.renderAutosaveContent(autosave)}
                                            </ur-list-item>
                                            <ur-button-icon
                                                class="delete-button"
                                                icon="delete"
                                                variant="standard"
                                                buttonHeight="40px"
                                                buttonWidth="40px"
                                                onClick={event => this.handleDeleteRequest(event, autosave)}
                                            ></ur-button-icon>
                                        </div>
                                    ),
                                )}
                            </ur-list>
                        </div>
                    )}
                </div>
            </Host>
        );
    }
}
