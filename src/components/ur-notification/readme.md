# ur-notification



<!-- Auto Generated Below -->


## Properties

| Property                    | Attribute | Description | Type                                                                                                                                                                   | Default     |
| --------------------------- | --------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `notification` _(required)_ | --        |             | `CommentNotification \| FollowNotification \| MembershipAcceptNotification \| MembershipRejectNotification \| MembershipRequestNotification \| PageFollowNotification` | `undefined` |


## Events

| Event               | Description | Type                             |
| ------------------- | ----------- | -------------------------------- |
| `notificationEvent` |             | `CustomEvent<NotificationEvent>` |


## Dependencies

### Depends on

- [ur-avatar](../ur-avatar)
- [ur-time-ago](../ur-time-ago)
- [ur-button](../ur-button)

### Graph
```mermaid
graph TD;
  ur-notification --> ur-avatar
  ur-notification --> ur-time-ago
  ur-notification --> ur-button
  style ur-notification fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
