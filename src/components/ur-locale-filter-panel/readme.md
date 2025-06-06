# ur-locale-filter-panel



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                 | Type       | Default    |
| ----------------- | ------------------ | --------------------------- | ---------- | ---------- |
| `disabledLocales` | `disabled-locales` |                             | `string[]` | `[ 'en' ]` |
| `locales`         | `locales`          | List of available languages | `Locale[]` | `[]`       |
| `showFooter`      | `show-footer`      | Whether to show the footer  | `boolean`  | `true`     |
| `showHeader`      | `show-header`      | Whether to show the header  | `boolean`  | `true`     |


## Events

| Event    | Description                         | Type                    |
| -------- | ----------------------------------- | ----------------------- |
| `cancel` | Event emitted when canceling        | `CustomEvent<void>`     |
| `save`   | Event emitted when saving languages | `CustomEvent<Locale[]>` |


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
