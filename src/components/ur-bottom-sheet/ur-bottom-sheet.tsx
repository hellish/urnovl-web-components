import { Component, Prop, h, State, Event, Element, EventEmitter, Watch, Method } from '@stencil/core';

@Component({
    tag: 'ur-bottom-sheet',
    styleUrl: 'ur-bottom-sheet.css',
    shadow: true,
})
export class UrBottomSheet {
    private initialY: number = 0;
    private sheetElement: HTMLDivElement;
    private headerElement: HTMLDivElement;
    private dragStartTime: number = 0;
    private isDragging: boolean = false;

    @Element()
    el: HTMLElement;

    @Prop()
    open = false;

    @Prop()
    selectedDetent: 'large' | 'medium' | 'small' = 'large';

    @Prop()
    backdropDismiss = true;

    @State()
    private currentDetent: 'large' | 'medium' | 'small' = 'large';

    @State()
    private dragPosition: number = 0;

    @State()
    private isVisible: boolean = false;

    @Event()
    dismiss: EventEmitter<void>;

    @Event()
    detentChange: EventEmitter<string>;

    @Watch('open')
    watchOpen(newValue: boolean) {
        if (newValue) {
            this.showSheet();
        } else {
            this.hideSheet();
        }
    }

    @Method()
    async showSheet() {
        this.isVisible = true;
        this.currentDetent = this.selectedDetent;
        document.body.style.overflow = 'hidden';
        // Reset position when showing
        if (this.sheetElement) {
            this.sheetElement.style.transform = '';
        }
    }

    @Method()
    async hideSheet() {
        if (this.sheetElement) {
            // Start both transitions simultaneously
            this.sheetElement.style.transition = 'transform var(--transition-duration) ease';
            this.sheetElement.style.transform = 'translateY(100%)';

            // Start fading out the backdrop
            const backdrop = this.el.shadowRoot.querySelector('.bottom-sheet-backdrop') as HTMLElement;
            if (backdrop) {
                backdrop.style.opacity = '0';
            }

            // Wait for animation to complete before cleanup
            setTimeout(() => {
                this.isVisible = false;
                document.body.style.overflow = '';

                // Remove all inline styles to allow CSS to take over
                this.sheetElement.style.transform = '';
                this.sheetElement.style.transition = '';

                // Clear backdrop inline styles too
                if (backdrop) {
                    backdrop.style.opacity = '';
                }
            }, 300);
        } else {
            this.isVisible = false;
            document.body.style.overflow = '';
        }
    }

    private handlePointerDown = (event: MouseEvent | TouchEvent) => {
        // Only handle drag if it started from the header
        const target = event.target as HTMLElement;
        if (!this.headerElement.contains(target)) {
            return;
        }

        this.initialY = 'touches' in event ? event.touches[0].clientY : event.clientY;
        this.dragStartTime = Date.now();
        this.isDragging = true;
        this.sheetElement.style.transition = 'none';

        // Attach drag listeners
        document.addEventListener('mousemove', this.handlePointerMove);
        document.addEventListener('mouseup', this.handlePointerUp);
        document.addEventListener('touchmove', this.handlePointerMove, { passive: true });
        document.addEventListener('touchend', this.handlePointerUp);
    };

    private handlePointerMove = (event: MouseEvent | TouchEvent) => {
        if (!this.isDragging) return;

        const currentY = 'touches' in event ? event.touches[0].clientY : event.clientY;
        const deltaY = currentY - this.initialY;

        // Only allow dragging downwards
        if (deltaY < 0) return;

        this.dragPosition = deltaY;
        this.sheetElement.style.transform = `translateY(${deltaY}px)`;
    };

    private handlePointerUp = () => {
        if (!this.isDragging) return;

        this.isDragging = false;
        const deltaTime = Date.now() - this.dragStartTime;
        const velocity = Math.abs(this.dragPosition / deltaTime);

        if (this.dragPosition > 200 || (this.dragPosition > 100 && velocity > 0.5)) {
            this.dismiss.emit();
        } else {
            this.snapToNearestDetent();
        }

        this.dragPosition = 0;

        // Remove drag listeners
        document.removeEventListener('mousemove', this.handlePointerMove);
        document.removeEventListener('mouseup', this.handlePointerUp);
        document.removeEventListener('touchmove', this.handlePointerMove);
        document.removeEventListener('touchend', this.handlePointerUp);
    };

    private handleBackdropClick = () => {
        if (this.backdropDismiss) {
            this.dismiss.emit();
        }
    };

    private snapToNearestDetent() {
        // Reset to the selected detent
        this.currentDetent = this.selectedDetent;
        this.detentChange.emit(this.selectedDetent);

        // Simply remove the transform to let CSS handle the positioning
        this.sheetElement.style.transition = 'transform var(--transition-duration) ease';
        this.sheetElement.style.transform = '';
    }

    render() {
        const sheetClasses = {
            'bottom-sheet': true,
            'is-visible': this.isVisible,
            [`detent-${this.currentDetent}`]: true,
        };

        const backdropClasses = {
            'bottom-sheet-backdrop': true,
            'is-visible': this.isVisible,
        };

        const handleSheetClick = (e: Event) => {
            // Stop click from reaching backdrop
            e.stopPropagation();
        };

        return (
            <div class={backdropClasses} onClick={this.handleBackdropClick} aria-hidden={!this.isVisible}>
                <div class={sheetClasses} ref={el => (this.sheetElement = el)} onClick={handleSheetClick}>
                    <div class="sheet-header" ref={el => (this.headerElement = el)} onMouseDown={this.handlePointerDown} onTouchStart={this.handlePointerDown} role="banner">
                        <div class="sheet-handle" />
                        <slot name="header" />
                    </div>
                    <div class="sheet-content" role="main">
                        <slot />
                    </div>
                    <div class="sheet-footer" role="contentinfo">
                        <slot name="footer" />
                    </div>
                </div>
            </div>
        );
    }
}
