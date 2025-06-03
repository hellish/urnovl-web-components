import { html } from 'lit';
import '../components/ur-image-uploader/ur-image-uploader';

const ImageUploader = ({
    width = '300px',
    height = '200px',
    maxHeight = '250px',
    borderRadius = '8px',
    borderStyle = '2px dashed rgb(var(--mdui-color-outline))',
    backgroundColor = 'rgb(var(--mdui-color-surface))',
    hoverBackgroundColor = 'rgb(var(--mdui-color-surface-variant))',
    acceptTypes = 'image/*',
    disabled = false,
    placeholderText = 'Select a file or drag and drop here',
    showFileName = true,
    maxFileSize = 5242880,
    enableNativeUpload = false,
    loading = false
}) => html`
    <div>
        <ur-image-uploader
            width="${width}"
            height="${height}"
            max-height="${maxHeight}"
            border-radius="${borderRadius}"
            border-style="${borderStyle}"
            background-color="${backgroundColor}"
            hover-background-color="${hoverBackgroundColor}"
            accept-types="${acceptTypes}"
            ?disabled="${disabled}"
            placeholder-text="${placeholderText}"
            ?show-file-name="${showFileName}"
            max-file-size="${maxFileSize}"
            ?enable-native-upload="${enableNativeUpload}"
            ?loading="${loading}"
            @fileSelected="${(e) => {
                const uploader = e.target;
                console.log('File selected, starting simulated upload...');
                
                // Simulate upload delay
                setTimeout(async () => {
                    await uploader.setUploadingState(true);
                    console.log('Upload started...');
                    
                    // Simulate upload time (3 seconds)
                    setTimeout(async () => {
                        await uploader.setUploadingState(false);
                        console.log('Upload completed!');
                        
                        // Show success message
                        const existingMessage = document.querySelector('.upload-message');
                        if (existingMessage) existingMessage.remove();
                        
                        const message = document.createElement('div');
                        message.className = 'upload-message';
                        message.style.cssText = 'margin-top: 10px; padding: 10px; background: #d4edda; color: #155724; border: 1px solid #c3e6cb; border-radius: 4px;';
                        message.textContent = '✅ Upload completed successfully!';
                        uploader.parentElement.appendChild(message);
                        
                        setTimeout(() => {
                            if (message.parentElement) message.remove();
                        }, 3000);
                    }, 3000);
                }, 500);
            }}"
        ></ur-image-uploader>
        <p style="margin-top: 20px; font-size: 14px; color: #666;">
            Click to select an image or drag and drop one here
        </p>
    </div>
`;

export default {
    title: 'Urnovl/Basic/Image Uploader',
    render: args => ImageUploader(args),
    argTypes: {
        width: { control: 'text' },
        height: { control: 'text' },
        maxHeight: { control: 'text' },
        borderRadius: { control: 'text' },
        borderStyle: { control: 'text' },
        backgroundColor: { control: 'color' },
        hoverBackgroundColor: { control: 'color' },
        acceptTypes: { control: 'text' },
        disabled: { control: 'boolean' },
        placeholderText: { control: 'text' },
        showFileName: { control: 'boolean' },
        maxFileSize: { control: 'number' },
        enableNativeUpload: { control: 'boolean' },
        loading: { control: 'boolean' }
    }
};

export const Default = {
    render: () => ImageUploader({}),
};

export const Square = {
    render: () => ImageUploader({
        width: '200px',
        height: '200px',
        placeholderText: 'Upload square image'
    }),
};

export const Large = {
    render: () => ImageUploader({
        width: '500px',
        height: '300px',
        placeholderText: 'Drop your cover image here'
    }),
};

export const CustomStyling = {
    render: () => ImageUploader({
        borderRadius: '16px',
        borderStyle: '3px solid #007bff',
        backgroundColor: '#e3f2fd',
        hoverBackgroundColor: '#bbdefb',
        placeholderText: 'Custom styled uploader'
    }),
};

export const Disabled = {
    render: () => ImageUploader({
        disabled: true,
        placeholderText: 'Upload disabled'
    }),
};

export const Loading = {
    render: () => ImageUploader({
        loading: true,
        placeholderText: 'Uploading...'
    }),
};

export const WithUploadSimulation = {
    render: () => html`
        <div>
            <ur-image-uploader
                width="400px"
                height="250px"
                border-radius="8px"
                border-style="2px dashed rgb(var(--mdui-color-outline))"
                background-color="rgb(var(--mdui-color-surface))"
                hover-background-color="rgb(var(--mdui-color-surface-variant))"
                accept-types="image/*"
                placeholder-text="Select an image to test upload simulation"
                ?show-file-name="true"
                max-file-size="5242880"
                @fileSelected="${async (e) => {
                    const uploader = e.target;
                    const file = e.detail;
                    console.log('Starting upload simulation for:', file.name);
                    
                    // Show initial message
                    const existingMessage = document.querySelector('.upload-message');
                    if (existingMessage) existingMessage.remove();
                    
                    let message = document.createElement('div');
                    message.className = 'upload-message';
                    message.style.cssText = 'margin-top: 10px; padding: 10px; background: #fff3cd; color: #856404; border: 1px solid #ffeaa7; border-radius: 4px;';
                    message.textContent = '⏳ Preparing upload...';
                    uploader.parentElement.appendChild(message);
                    
                    // Start upload simulation after 500ms
                    setTimeout(async () => {
                        await uploader.setUploadingState(true);
                        message.style.cssText = 'margin-top: 10px; padding: 10px; background: #cce7ff; color: #004085; border: 1px solid #99d6ff; border-radius: 4px;';
                        message.textContent = '📤 Uploading... (simulated 3s delay)';
                        console.log('Upload in progress...');
                        
                        // Complete upload after 3 seconds
                        setTimeout(async () => {
                            await uploader.setUploadingState(false);
                            message.style.cssText = 'margin-top: 10px; padding: 10px; background: #d4edda; color: #155724; border: 1px solid #c3e6cb; border-radius: 4px;';
                            message.textContent = `✅ Upload completed! File: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
                            console.log('Upload completed successfully!');
                            
                            // Remove message after 5 seconds
                            setTimeout(() => {
                                if (message.parentElement) message.remove();
                            }, 5000);
                        }, 3000);
                    }, 500);
                }}"
            ></ur-image-uploader>
            <p style="margin-top: 20px; font-size: 14px; color: #666;">
                <strong>📋 Upload Simulation Flow:</strong><br>
                1. Select a file → "Preparing upload..." message<br>
                2. After 500ms → Loading spinner appears + "Uploading..." message<br>
                3. After 3 seconds → Upload completes + Success message<br>
                4. Success message auto-removes after 5 seconds
            </p>
        </div>
    `,
};