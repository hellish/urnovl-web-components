# ur-image-uploader



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description | Type      | Default                                       |
| ---------------------- | ------------------------ | ----------- | --------- | --------------------------------------------- |
| `acceptTypes`          | `accept-types`           |             | `string`  | `'image/*'`                                   |
| `backgroundColor`      | `background-color`       |             | `string`  | `'rgb(var(--mdui-color-surface))'`            |
| `borderRadius`         | `border-radius`          |             | `string`  | `'8px'`                                       |
| `borderStyle`          | `border-style`           |             | `string`  | `'2px dashed rgb(var(--mdui-color-outline))'` |
| `disabled`             | `disabled`               |             | `boolean` | `false`                                       |
| `enableNativeUpload`   | `enable-native-upload`   |             | `boolean` | `false`                                       |
| `height`               | `height`                 |             | `string`  | `'200px'`                                     |
| `hoverBackgroundColor` | `hover-background-color` |             | `string`  | `'rgb(var(--mdui-color-surface-variant))'`    |
| `loading`              | `loading`                |             | `boolean` | `false`                                       |
| `maxFileSize`          | `max-file-size`          |             | `number`  | `5 * 1024 * 1024`                             |
| `maxHeight`            | `max-height`             |             | `string`  | `'250px'`                                     |
| `placeholderText`      | `placeholder-text`       |             | `string`  | `'Select a file or drag and drop here'`       |
| `showFileName`         | `show-file-name`         |             | `boolean` | `true`                                        |
| `width`                | `width`                  |             | `string`  | `'300px'`                                     |


## Events

| Event                   | Description | Type                                           |
| ----------------------- | ----------- | ---------------------------------------------- |
| `fileCleared`           |             | `CustomEvent<void>`                            |
| `fileDropped`           |             | `CustomEvent<File>`                            |
| `fileSelected`          |             | `CustomEvent<File>`                            |
| `nativeUploadRequested` |             | `CustomEvent<void>`                            |
| `uploadError`           |             | `CustomEvent<{ error: string; file?: File; }>` |


## Methods

### `clearImage() => Promise<void>`

Method to clear image programmatically

#### Returns

Type: `Promise<void>`



### `getImageUrl() => Promise<string | null>`

Method to get current image URL

#### Returns

Type: `Promise<string>`



### `getSelectedFile() => Promise<File | null>`

Method to get selected file for manual upload

#### Returns

Type: `Promise<File>`



### `setImageUrl(url: string, fileName?: string) => Promise<void>`

Method to programmatically set image URL (useful for Ionic native camera results)

#### Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| `url`      | `string` |             |
| `fileName` | `string` |             |

#### Returns

Type: `Promise<void>`



### `setUploadingState(uploading: boolean) => Promise<void>`

Method to set uploading state from application

#### Parameters

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| `uploading` | `boolean` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
