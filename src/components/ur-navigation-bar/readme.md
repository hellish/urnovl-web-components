# ur-navigation-bar



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                 | Type                                               | Default     |
| ----------------- | ------------------ | ------------------------------------------- | -------------------------------------------------- | ----------- |
| `labelVisibility` | `label-visibility` | Label visibility                            | `"auto" \| "labeled" \| "selected" \| "unlabeled"` | `'auto'`    |
| `position`        | `position`         | Position of the navigation bar              | `"bottom" \| "top"`                                | `'bottom'`  |
| `scrollBehavior`  | `scroll-behavior`  | Scroll behavior                             | `"" \| "hide"`                                     | `''`        |
| `scrollTarget`    | `scroll-target`    | Scroll target (CSS selector or DOM element) | `string`                                           | `undefined` |
| `scrollThreshold` | `scroll-threshold` | Scroll threshold in pixels                  | `number`                                           | `undefined` |
| `value`           | `value`            | Selected value                              | `string`                                           | `''`        |


## Methods

### `setValue(value: string) => Promise<void>`

Method to set active item by value

#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `value` | `string` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
