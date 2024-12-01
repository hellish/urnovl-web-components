# ur-menu



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute      | Description | Type      | Default     |
| ------------ | -------------- | ----------- | --------- | ----------- |
| `isLoggedIn` | `is-logged-in` |             | `boolean` | `undefined` |
| `userAvatar` | `user-avatar`  |             | `string`  | `undefined` |
| `userName`   | `user-name`    |             | `string`  | `undefined` |
| `userRole`   | `user-role`    |             | `string`  | `undefined` |


## Events

| Event          | Description | Type                   |
| -------------- | ----------- | ---------------------- |
| `toggleExpand` |             | `CustomEvent<boolean>` |


## Dependencies

### Depends on

- [ur-list](../ur-list)
- [ur-list-item](../ur-list)
- [ur-logo](../ur-logo)
- [ur-button](../ur-button)
- [ur-button-icon](../ur-button-icon)

### Graph
```mermaid
graph TD;
  ur-left-menu --> ur-list
  ur-left-menu --> ur-list-item
  ur-left-menu --> ur-logo
  ur-left-menu --> ur-button
  ur-left-menu --> ur-button-icon
  style ur-left-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
