# ur-read-rail-desktop



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description | Type      | Default     |
| -------------------- | ---------------------- | ----------- | --------- | ----------- |
| `avatarName`         | `avatar-name`          |             | `string`  | `undefined` |
| `avatarSrc`          | `avatar-src`           |             | `string`  | `undefined` |
| `comments`           | `comments`             |             | `number`  | `undefined` |
| `dislike`            | `dislike`              |             | `string`  | `'Dislike'` |
| `donate`             | `donate`               |             | `string`  | `'Donate'`  |
| `isAuthorFollowed`   | `is-author-followed`   |             | `boolean` | `false`     |
| `isAuthorPro`        | `is-author-pro`        |             | `boolean` | `false`     |
| `isChapterPurchased` | `is-chapter-purchased` |             | `boolean` | `false`     |
| `isDonationsEnabled` | `is-donations-enabled` |             | `boolean` | `true`      |
| `isFollowed`         | `is-followed`          |             | `boolean` | `false`     |
| `isHostSmall`        | `is-host-small`        |             | `boolean` | `false`     |
| `isNovlDeleted`      | `is-novl-deleted`      |             | `boolean` | `false`     |
| `isOwnChapter`       | `is-own-chapter`       |             | `boolean` | `false`     |
| `isPaidChapter`      | `is-paid-chapter`      |             | `boolean` | `false`     |
| `isVisible`          | `is-visible`           |             | `boolean` | `true`      |
| `likes`              | `likes`                |             | `number`  | `undefined` |
| `share`              | `share`                |             | `string`  | `'Share'`   |


## Events

| Event                  | Description | Type                   |
| ---------------------- | ----------- | ---------------------- |
| `commentClicked`       |             | `CustomEvent<void>`    |
| `dislikeClicked`       |             | `CustomEvent<boolean>` |
| `donateClicked`        |             | `CustomEvent<void>`    |
| `facebookShareClicked` |             | `CustomEvent<void>`    |
| `followClicked`        |             | `CustomEvent<void>`    |
| `likeClicked`          |             | `CustomEvent<boolean>` |
| `linkedinShareClicked` |             | `CustomEvent<void>`    |
| `shareClicked`         |             | `CustomEvent<void>`    |
| `twitterShareClicked`  |             | `CustomEvent<void>`    |
| `viewProfileClicked`   |             | `CustomEvent<void>`    |
| `visibilityToggled`    |             | `CustomEvent<boolean>` |


## Dependencies

### Depends on

- [ur-avatar](../ur-avatar)
- [ur-button-icon](../ur-button-icon)
- [ur-tooltip](../ur-tooltip)

### Graph
```mermaid
graph TD;
  ur-read-rail-desktop --> ur-avatar
  ur-read-rail-desktop --> ur-button-icon
  ur-read-rail-desktop --> ur-tooltip
  style ur-read-rail-desktop fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
