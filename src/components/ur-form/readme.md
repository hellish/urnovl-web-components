# ur-form



<!-- Auto Generated Below -->


## Events

| Event             | Description                                  | Type                                                   |
| ----------------- | -------------------------------------------- | ------------------------------------------------------ |
| `formDataChanged` | Event emitted whenever the form data changes | `CustomEvent<{ [key: string]: any; }>`                 |
| `formInvalid`     | Event emitted when the form is invalid       | `CustomEvent<{ errors: { [key: string]: string; }; }>` |
| `formValid`       | Event emitted when the form is valid         | `CustomEvent<void>`                                    |


## Methods

### `resetForm() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `submitForm() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
