import { Component, Host, h, Prop, State, Element, Event, EventEmitter, Method } from '@stencil/core';
import '../ur-button/ur-button';
import '../ur-chip/ur-chip';

@Component({
    tag: 'ur-stepper',
    styleUrl: 'ur-stepper.css',
    shadow: true,
})
export class UrStepper {
    @Element() el: HTMLElement;

    /**
     * Number of steps in the stepper
     */
    @Prop() stepCount: number = 3;

    /**
     * Currently active step (1-based index)
     */
    @Prop({ mutable: true }) currentStep: number = 1;

    /**
     * Whether completed steps can be clicked to navigate back
     */
    @Prop() allowStepNavigation: boolean = true;

    /**
     * Custom CSS class for styling
     */
    @Prop() customClass: string;

    /**
     * Step titles array
     */
    @Prop() stepTitles: string[] = [];

    /**
     * Step descriptions array
     */
    @Prop() stepDescriptions: string[] = [];

    /**
     * Whether to show step numbers
     */
    @Prop() showStepNumbers: boolean = true;

    /**
     * Icon to show for completed steps
     */
    @Prop() completedStepIcon: string = 'check';

    /**
     * Text for the Next button
     */
    @Prop() nextButtonText: string = 'Next';

    /**
     * Text for the Previous button
     */
    @Prop() previousButtonText: string = 'Back';

    /**
     * Text for the Complete button (last step)
     */
    @Prop() completeButtonText: string = 'Complete';

    /**
     * Text for the Complete step
     */
    @Prop() completeStepText: string = 'Complete';

    /**
     * Text for the Ongoing step
     */
    @Prop() ongoingStepText: string = 'Ongoing';

    /**
     * Whether the next button should be disabled
     */
    @Prop() nextButtonDisabled: boolean = false;

    /**
     * Internal state to track completed steps
     */
    @State() completedSteps: Set<number> = new Set();

    /**
     * Internal state to track step validation
     */
    @State() stepValidation: Map<number, boolean> = new Map();

    /**
     * Event emitted when step changes
     */
    @Event() stepChanged: EventEmitter<{ from: number; to: number }>;

    /**
     * Event emitted when step is completed
     */
    @Event() stepCompleted: EventEmitter<{ step: number; data?: any }>;

    /**
     * Event emitted when all steps are completed
     */
    @Event() allStepsCompleted: EventEmitter<void>;

    /**
     * Navigate to a specific step
     */
    @Method()
    async goToStep(stepNumber: number): Promise<void> {
        if (stepNumber < 1 || stepNumber > this.stepCount) {
            console.warn(`Invalid step number: ${stepNumber}`);
            return;
        }

        const previousStep = this.currentStep;
        this.currentStep = stepNumber;

        this.stepChanged.emit({ from: previousStep, to: stepNumber });
    }

    /**
     * Mark a step as completed
     */
    @Method()
    async markStepComplete(stepNumber: number): Promise<void> {
        this.completedSteps = new Set([...this.completedSteps, stepNumber]);
        this.stepValidation.set(stepNumber, true);
    }

    /**
     * Mark a step as invalid
     */
    @Method()
    async markStepInvalid(stepNumber: number): Promise<void> {
        this.stepValidation.set(stepNumber, false);
    }

    /**
     * Reset the stepper to first step
     */
    @Method()
    async reset(): Promise<void> {
        this.currentStep = 1;
        this.completedSteps = new Set();
        this.stepValidation = new Map();
        this.updateStepVisibility();
    }

    /**
     * Update step states
     */
    private updateStepVisibility() {
        // Component will re-render automatically when currentStep changes
    }

    /**
     * Handle step indicator click
     */
    private handleStepClick = (stepNumber: number) => {
        if (this.allowStepNavigation && (stepNumber <= this.currentStep || this.completedSteps.has(stepNumber - 1))) {
            this.goToStep(stepNumber);
        }
    };

    /**
     * Handle Next button click
     */
    private handleNext = () => {
        if (this.currentStep < this.stepCount) {
            // Mark current step as completed
            this.completedSteps = new Set([...this.completedSteps, this.currentStep]);
            this.stepValidation.set(this.currentStep, true);

            // Emit step completed event
            this.stepCompleted.emit({ step: this.currentStep });

            // Move to next step
            this.goToStep(this.currentStep + 1);
        }
    };

    /**
     * Handle Previous button click
     */
    private handlePrevious = () => {
        if (this.currentStep > 1) {
            this.goToStep(this.currentStep - 1);
        }
    };

    /**
     * Handle Complete button click (last step)
     */
    private handleComplete = () => {
        // Mark current step as completed
        this.completedSteps = new Set([...this.completedSteps, this.currentStep]);
        this.stepValidation.set(this.currentStep, true);

        // Emit step completed event
        this.stepCompleted.emit({ step: this.currentStep });

        // Emit all steps completed event
        this.allStepsCompleted.emit();
    };

    /**
     * Get step indicator class
     */
    private getStepIndicatorClass(stepNumber: number): string {
        const classes = ['step-indicator'];

        if (stepNumber === this.currentStep) {
            classes.push('active');
        }

        if (this.completedSteps.has(stepNumber)) {
            classes.push('completed');
        }

        if (stepNumber < this.currentStep && !this.completedSteps.has(stepNumber)) {
            classes.push('skipped');
        }

        if (this.allowStepNavigation && (stepNumber <= this.currentStep || this.completedSteps.has(stepNumber - 1))) {
            classes.push('clickable');
        }

        return classes.join(' ');
    }

    /**
     * Render step indicator with embedded slot
     */
    private renderStepIndicator(stepNumber: number) {
        const isCompleted = this.completedSteps.has(stepNumber);
        const isActive = stepNumber === this.currentStep;
        const title = this.stepTitles[stepNumber - 1] || `Step ${stepNumber}`;
        const description = this.stepDescriptions[stepNumber - 1];

        return (
            <div class={this.getStepIndicatorClass(stepNumber)} onClick={() => this.handleStepClick(stepNumber)}>
                <div class="step-inline-info-holder">
                    <div class="step-marker">
                        {isCompleted ? <mdui-icon name={this.completedStepIcon}></mdui-icon> : this.showStepNumbers && <span class="step-number">{stepNumber}</span>}
                    </div>
                    <div class="step-information">
                        <div class="step-title">{title}</div>
                        {description && <div class="step-description">{description}</div>}
                    </div>
                    <div class="step-status">
                        {isCompleted && !isActive && (
                            <ur-chip
                                fontColor="#1A5100"
                                backColor="#C6F4D0"
                                size="32px"
                                class="status-chip"
                                border="2px"
                                radius="50px"
                                clickable={false}
                                label={this.completeStepText}
                            ></ur-chip>
                        )}
                        {isActive && (
                            <ur-chip
                                fontColor="rgb(var(--ur-color-primary))"
                                backColor="rgb(var(--ur-color-primary-container))"
                                size="32px"
                                class="status-chip"
                                border="2px"
                                radius="50px"
                                clickable={false}
                                label={this.ongoingStepText}
                            ></ur-chip>
                        )}
                    </div>
                </div>
                <div class="step-content">
                    {isActive && (
                        <div class="step-slot-content">
                            <div class="step-content-wrapper">
                                <slot name={`step-${stepNumber}`}></slot>
                            </div>
                            <div class="step-actions">
                                {stepNumber > 1 && (
                                    <ur-button
                                        variant="outlined"
                                        onClick={e => {
                                            e.stopPropagation();
                                            this.handlePrevious();
                                        }}
                                    >
                                        {this.previousButtonText}
                                    </ur-button>
                                )}
                                {stepNumber < this.stepCount ? (
                                    <ur-button
                                        variant="filled"
                                        disabled={this.nextButtonDisabled}
                                        onClick={e => {
                                            e.stopPropagation();
                                            this.handleNext();
                                        }}
                                    >
                                        {this.nextButtonText}
                                    </ur-button>
                                ) : (
                                    <ur-button
                                        variant="filled"
                                        disabled={this.nextButtonDisabled}
                                        onClick={e => {
                                            e.stopPropagation();
                                            this.handleComplete();
                                        }}
                                    >
                                        {this.completeButtonText}
                                    </ur-button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    componentDidLoad() {
        this.updateStepVisibility();
    }

    render() {
        return (
            <Host class={this.customClass}>
                <div class="stepper-container">{Array.from({ length: this.stepCount }, (_, index) => this.renderStepIndicator(index + 1))}</div>
            </Host>
        );
    }
}
