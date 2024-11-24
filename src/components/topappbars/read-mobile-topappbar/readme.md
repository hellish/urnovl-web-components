# ur-read-mobile-topappbar



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type                              | Default     |
| ----------------- | ------------------ | ----------- | --------------------------------- | ----------- |
| `headerTitle`     | `header-title`     |             | `string`                          | `undefined` |
| `scrollBehavior`  | `scroll-behavior`  |             | `"elevate" \| "hide" \| "shrink"` | `'hide'`    |
| `scrollThreshold` | `scroll-threshold` |             | `number`                          | `30`        |
| `variant`         | `variant`          |             | `string`                          | `'small'`   |


## Events

| Event                  | Description | Type                |
| ---------------------- | ----------- | ------------------- |
| `backClick`            |             | `CustomEvent<void>` |
| `chaptersClick`        |             | `CustomEvent<void>` |
| `readingSettingsClick` |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [ur-button-icon](../../ur-button-icon)

### Graph
```mermaid
graph TD;
  ur-read-mobile-topappbar --> ur-button-icon
  style ur-read-mobile-topappbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
