# ur-locale-filter-panel



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type                                                 | Default |
| ------------ | ------------- | ----------- | ---------------------------------------------------- | ------- |
| `locales`    | --            |             | `[label: string, value: string, checked: boolean][]` | `[]`    |
| `showFooter` | `show-footer` |             | `boolean`                                            | `true`  |
| `showHeader` | `show-header` |             | `boolean`                                            | `true`  |


## Events

| Event    | Description | Type                |
| -------- | ----------- | ------------------- |
| `cancel` |             | `CustomEvent<void>` |
| `save`   |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [ur-button-icon](../ur-button-icon)

### Graph
```mermaid
graph TD;
  ur-locale-filter-panel --> ur-button-icon
  style ur-locale-filter-panel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
