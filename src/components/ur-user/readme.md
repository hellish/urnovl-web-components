# ur-user



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description | Type      | Default               |
| ------------------- | --------------------- | ----------- | --------- | --------------------- |
| `followers`         | `followers`           |             | `number`  | `0`                   |
| `showStats`         | `show-stats`          |             | `boolean` | `true`                |
| `userCover`         | `user-cover`          |             | `any`     | `undefined`           |
| `userCoverFallback` | `user-cover-fallback` |             | `string`  | `USER_COVER_FALLBACK` |
| `userDescription`   | `user-description`    |             | `any`     | `undefined`           |
| `userTitle`         | `user-title`          |             | `string`  | `'User title'`        |


## Events

| Event               | Description | Type               |
| ------------------- | ----------- | ------------------ |
| `userFollowClicked` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ur-button](../ur-button)

### Graph
```mermaid
graph TD;
  ur-user --> ur-button
  style ur-user fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*