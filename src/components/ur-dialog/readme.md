# ur-dialog



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute                | Description | Type                    | Default     |
| --------------------- | ------------------------ | ----------- | ----------------------- | ----------- |
| `borderRadius`        | `border-radius`          |             | `string`                | `'12px'`    |
| `closeOnEsc`          | `close-on-esc`           |             | `boolean`               | `true`      |
| `closeOnOverlayClick` | `close-on-overlay-click` |             | `boolean`               | `true`      |
| `description`         | `description`            |             | `string`                | `null`      |
| `fullscreen`          | `fullscreen`             |             | `boolean`               | `false`     |
| `open`                | `open`                   |             | `boolean`               | `false`     |
| `showHeader`          | `show-header`            |             | `boolean`               | `true`      |
| `variant`             | `variant`                |             | `"desktop" \| "mobile"` | `'desktop'` |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `urDialogClose` |             | `CustomEvent<any>` |


## Methods

### `closeDialog(result?: any) => Promise<void>`



#### Parameters

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| `result` | `any` |             |

#### Returns

Type: `Promise<void>`



### `openDialog() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
