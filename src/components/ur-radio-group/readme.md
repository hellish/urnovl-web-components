# ur-radio-group



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                      | Type      | Default           |
| ---------- | ---------- | -------------------------------- | --------- | ----------------- |
| `name`     | `name`     | Group name for the radio buttons | `string`  | `'default-group'` |
| `required` | `required` | Whether the group is required    | `boolean` | `false`           |
| `value`    | `value`    | The currently selected value     | `string`  | `null`            |


## Events

| Event               | Description                                 | Type                                                               |
| ------------------- | ------------------------------------------- | ------------------------------------------------------------------ |
| `errorStateChanged` | Event emitted when validation state changes | `CustomEvent<{ name: string; error: boolean; message?: string; }>` |
| `valueChanged`      | Event emitted when the value changes        | `CustomEvent<{ name: string; value: string; }>`                    |


## Methods

### `reset() => Promise<void>`

Reset the radio group

#### Returns

Type: `Promise<void>`



### `validate() => Promise<boolean>`

Validate the radio group

#### Returns

Type: `Promise<boolean>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
