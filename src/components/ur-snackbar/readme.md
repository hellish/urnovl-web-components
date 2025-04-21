# ur-snackbar



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute                | Description                                   | Type                                                                              | Default                                              |
| --------------------- | ------------------------ | --------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `action`              | `action`                 | Text for the action button                    | `string`                                                                          | `undefined`                                          |
| `actionColor`         | `action-color`           | Action button color                           | `string`                                                                          | `'rgb(var(--mdui-color-primary))'`                   |
| `actionLoading`       | `action-loading`         | Whether the action button is in loading state | `boolean`                                                                         | `false`                                              |
| `autoCloseDelay`      | `auto-close-delay`       | Auto close delay in milliseconds              | `number`                                                                          | `5000`                                               |
| `backColor`           | `back-color`             | Background color                              | `string`                                                                          | `'rgb(var(--mdui-color-surface-container-highest))'` |
| `closeIcon`           | `close-icon`             | Material icon name for the close button       | `string`                                                                          | `undefined`                                          |
| `closeOnOutsideClick` | `close-on-outside-click` | Whether to close when clicking outside        | `boolean`                                                                         | `false`                                              |
| `closeable`           | `closeable`              | Whether to show a close button                | `boolean`                                                                         | `false`                                              |
| `fontColor`           | `font-color`             | Text color                                    | `string`                                                                          | `'rgb(var(--mdui-color-on-surface))'`                |
| `message`             | `message`                | Message text                                  | `string`                                                                          | `''`                                                 |
| `messageLine`         | `message-line`           | Maximum number of text lines                  | `1 \| 2`                                                                          | `1`                                                  |
| `open`                | `open`                   | Controls whether the snackbar is open         | `boolean`                                                                         | `false`                                              |
| `placement`           | `placement`              | Position of the snackbar                      | `"bottom" \| "bottom-end" \| "bottom-start" \| "top" \| "top-end" \| "top-start"` | `'bottom'`                                           |
| `radius`              | `radius`                 | Border radius                                 | `string`                                                                          | `'4px'`                                              |
| `zIndex`              | `z-index`                | Z-index                                       | `string`                                                                          | `'1000'`                                             |


## Events

| Event           | Description                                               | Type                |
| --------------- | --------------------------------------------------------- | ------------------- |
| `urActionClick` | Emitted when the action button is clicked                 | `CustomEvent<void>` |
| `urClose`       | Emitted when the snackbar starts to close                 | `CustomEvent<void>` |
| `urClosed`      | Emitted after the snackbar closes and animations complete | `CustomEvent<void>` |
| `urOpen`        | Emitted when the snackbar starts to open                  | `CustomEvent<void>` |
| `urOpened`      | Emitted after the snackbar opens and animations complete  | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
