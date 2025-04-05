# ur-comment-form



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                       | Default                        |
| ------------- | ------------- | ----------- | ------------------------------------------ | ------------------------------ |
| `disabled`    | `disabled`    |             | `boolean`                                  | `false`                        |
| `isServer`    | `is-server`   |             | `boolean`                                  | `false`                        |
| `maxLength`   | `max-length`  |             | `number`                                   | `400`                          |
| `minLength`   | `min-length`  |             | `number`                                   | `1`                            |
| `placeholder` | `placeholder` |             | `string`                                   | `'Write your comment here...'` |
| `user`        | `user`        |             | `{ displayName: string; avatar: string; }` | `undefined`                    |
| `variant`     | `variant`     |             | `"desktop" \| "mobile"`                    | `'desktop'`                    |


## Events

| Event           | Description | Type                             |
| --------------- | ----------- | -------------------------------- |
| `commentSubmit` |             | `CustomEvent<{ text: string; }>` |
| `inputBlur`     |             | `CustomEvent<FocusEvent>`        |
| `inputFocus`    |             | `CustomEvent<FocusEvent>`        |


## Dependencies

### Depends on

- [ur-avatar](../ur-avatar)
- [ur-text-field](../ur-text-field)
- [ur-button](../ur-button)
- [ur-button-icon](../ur-button-icon)

### Graph
```mermaid
graph TD;
  ur-comment-form --> ur-avatar
  ur-comment-form --> ur-text-field
  ur-comment-form --> ur-button
  ur-comment-form --> ur-button-icon
  style ur-comment-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
