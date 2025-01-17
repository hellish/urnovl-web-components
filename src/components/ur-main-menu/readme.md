# ur-menu



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type      | Default     |
| ------------ | ------------- | ----------- | --------- | ----------- |
| `loggedIn`   | `logged-in`   |             | `boolean` | `undefined` |
| `opened`     | `opened`      |             | `boolean` | `false`     |
| `userAvatar` | `user-avatar` |             | `string`  | `undefined` |
| `userName`   | `user-name`   |             | `string`  | `undefined` |
| `userRole`   | `user-role`   |             | `string`  | `undefined` |


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
- [ur-menu-profile](../ur-menu-profile)

### Graph
```mermaid
graph TD;
  ur-main-left-menu --> ur-list
  ur-main-left-menu --> ur-list-item
  ur-main-left-menu --> ur-logo
  ur-main-left-menu --> ur-button
  ur-main-left-menu --> ur-button-icon
  ur-main-left-menu --> ur-menu-profile
  ur-menu-profile --> ur-avatar
  style ur-main-left-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
