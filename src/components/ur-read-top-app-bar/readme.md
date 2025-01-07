# ur-read-desktop-top-app-bar



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                | Type                              | Default     |
| ----------------- | ------------------ | ---------------------------------------------------------- | --------------------------------- | ----------- |
| `deviceVariant`   | `device-variant`   |                                                            | `"desktop" \| "mobile"`           | `'desktop'` |
| `isChapterOwner`  | `is-chapter-owner` | Whether the current user is the chapter owner              | `boolean`                         | `false`     |
| `novelTitle`      | `novel-title`      | Title of the novel                                         | `string`                          | `undefined` |
| `scrollBehavior`  | `scroll-behavior`  | Behavior of the top app bar on scroll                      | `"elevate" \| "hide" \| "shrink"` | `'hide'`    |
| `scrollThreshold` | `scroll-threshold` | Scroll threshold in pixels (default: 50)                   | `number`                          | `50`        |
| `variant`         | `variant`          | Variant of the top app bar (e.g., 'small', 'medium', etc.) | `"large" \| "medium" \| "small"`  | `'small'`   |


## Events

| Event                  | Description | Type                |
| ---------------------- | ----------- | ------------------- |
| `editChapterClick`     |             | `CustomEvent<void>` |
| `readingSettingsClick` |             | `CustomEvent<void>` |
| `storySummaryClick`    |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [ur-button-icon](../ur-button-icon)

### Graph
```mermaid
graph TD;
  ur-read-top-app-bar --> ur-button-icon
  style ur-read-top-app-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
