import { Component, Prop, h, Event, EventEmitter, State, Host, Method } from '@stencil/core';

@Component({
    tag: 'ur-image-uploader',
    styleUrl: './ur-image-uploader.css',
    shadow: true,
})
export class UrImageUploader {
    private fileInputRef?: HTMLInputElement;

    @Prop() width: string = '300px';
    @Prop() height: string = '200px';
    @Prop() maxHeight: string = '250px';
    @Prop() borderRadius: string = '8px';
    @Prop() borderStyle: string = '2px dashed rgb(var(--mdui-color-outline))';
    @Prop() backgroundColor: string = 'rgb(var(--mdui-color-surface))';
    @Prop() hoverBackgroundColor: string = 'rgb(var(--mdui-color-surface-variant))';
    @Prop() acceptTypes: string = 'image/*';
    @Prop() disabled: boolean = false;
    @Prop() placeholderText: string = 'Select a file or drag and drop here';
    @Prop() showFileName: boolean = true;
    @Prop() maxFileSize: number = 5 * 1024 * 1024; // 5MB default
    @Prop() enableNativeUpload: boolean = false; // For Ionic native integration
    @Prop() loading: boolean = false; // Controlled by parent application

    @State() isDragOver: boolean = false;
    @State() selectedFile: File | null = null;
    @State() previewUrl: string | null = null;
    @State() isUploading: boolean = false;

    @Event() fileSelected: EventEmitter<File>;
    @Event() fileDropped: EventEmitter<File>;
    @Event() fileCleared: EventEmitter<void>;
    @Event() uploadError: EventEmitter<{ error: string; file?: File }>;
    @Event() nativeUploadRequested: EventEmitter<void>; // For Ionic native camera/gallery

    componentDidLoad() {
        console.log('ur-image-uploader loaded with props:', {
            width: this.width,
            height: this.height,
            acceptTypes: this.acceptTypes,
            maxFileSize: this.maxFileSize
        });
    }

    private handleClick = () => {
        if (this.disabled) return;
        
        // If native upload is enabled (for Ionic), emit event instead of opening file dialog
        if (this.enableNativeUpload) {
            this.nativeUploadRequested.emit();
            return;
        }
        
        this.fileInputRef?.click();
    };

    private handleFileInput = (event: Event) => {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (file) {
            this.handleFile(file);
        }
    };

    private handleFile = (file: File) => {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            this.uploadError.emit({ error: 'Please select an image file', file });
            return;
        }

        // Validate file size
        if (file.size > this.maxFileSize) {
            const sizeMB = (this.maxFileSize / (1024 * 1024)).toFixed(1);
            this.uploadError.emit({ error: `File size must be less than ${sizeMB}MB`, file });
            return;
        }

        this.selectedFile = file;
        
        // Create preview URL
        const reader = new FileReader();
        reader.onload = (e) => {
            this.previewUrl = e.target?.result as string;
        };
        reader.readAsDataURL(file);

        this.fileSelected.emit(file);
    };

    private handleDragOver = (event: DragEvent) => {
        if (this.disabled) return;
        event.preventDefault();
        this.isDragOver = true;
    };

    private handleDragLeave = (event: DragEvent) => {
        if (this.disabled) return;
        event.preventDefault();
        this.isDragOver = false;
    };

    private handleDrop = (event: DragEvent) => {
        if (this.disabled) return;
        event.preventDefault();
        this.isDragOver = false;

        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            const file = files[0];
            this.handleFile(file);
            this.fileDropped.emit(file);
        }
    };

    private clearFile = (event: Event) => {
        event.stopPropagation();
        this.selectedFile = null;
        this.previewUrl = null;
        this.isUploading = false;
        if (this.fileInputRef) {
            this.fileInputRef.value = '';
        }
        this.fileCleared.emit();
    };

    /**
     * Method to programmatically set image URL (useful for Ionic native camera results)
     */
    @Method()
    async setImageUrl(url: string, fileName?: string): Promise<void> {
        this.previewUrl = url;
        // Create a mock file object for consistency
        if (fileName) {
            // This is mainly for display purposes since we can't create actual File from URL
            this.selectedFile = new File([], fileName, { type: 'image/jpeg' });
        }
    }

    /**
     * Method to get current image URL
     */
    @Method()
    async getImageUrl(): Promise<string | null> {
        return this.previewUrl;
    }

    /**
     * Method to clear image programmatically
     */
    @Method()
    async clearImage(): Promise<void> {
        this.selectedFile = null;
        this.previewUrl = null;
        this.isUploading = false;
        if (this.fileInputRef) {
            this.fileInputRef.value = '';
        }
        this.fileCleared.emit();
    }

    /**
     * Method to get selected file for manual upload
     */
    @Method()
    async getSelectedFile(): Promise<File | null> {
        return this.selectedFile;
    }

    /**
     * Method to set uploading state from application
     */
    @Method()
    async setUploadingState(uploading: boolean): Promise<void> {
        this.isUploading = uploading;
    }

    render() {
        const containerStyles = {
            width: this.width,
            height: this.height,
            maxHeight: this.maxHeight,
            borderRadius: this.borderRadius,
            border: this.borderStyle,
            backgroundColor: this.isDragOver ? this.hoverBackgroundColor : this.backgroundColor,
            cursor: this.disabled ? 'not-allowed' : 'pointer',
            opacity: this.disabled ? '0.6' : '1',
        };

        return (
            <Host>
                <div
                    class="uploader-container"
                    style={containerStyles}
                    onClick={this.handleClick}
                    onDragOver={this.handleDragOver}
                    onDragLeave={this.handleDragLeave}
                    onDrop={this.handleDrop}
                >
                    <input
                        type="file"
                        accept={this.acceptTypes}
                        ref={(el) => this.fileInputRef = el}
                        onChange={this.handleFileInput}
                        style={{ display: 'none' }}
                        disabled={this.disabled}
                    />

                    {this.previewUrl ? (
                        <div class="preview-container">
                            <img src={this.previewUrl} alt="Preview" class="preview-image" />
                            {!this.isUploading && !this.loading && (
                                <button
                                    class="clear-button"
                                    onClick={this.clearFile}
                                    type="button"
                                >
                                    ×
                                </button>
                            )}
                            {this.showFileName && this.selectedFile && (
                                <div class="file-name">{this.selectedFile.name}</div>
                            )}
                            {(this.isUploading || this.loading) && (
                                <div class="upload-overlay">
                                    <mdui-circular-progress class="upload-loader"></mdui-circular-progress>
                                    <div class="upload-text">Uploading...</div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div class="placeholder">
                            {(this.isUploading || this.loading) ? (
                                <div class="loading-content">
                                    <mdui-circular-progress class="upload-loader"></mdui-circular-progress>
                                    <div class="placeholder-text">Uploading...</div>
                                </div>
                            ) : (
                                <div class="upload-content">
                                    <mdui-icon class="upload-icon" name="cloud_upload--outlined"></mdui-icon>
                                    <div class="placeholder-text">{this.placeholderText}</div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </Host>
        );
    }
}