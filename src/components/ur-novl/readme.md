# ur-novl



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description | Type      | Default               |
| ------------------- | --------------------- | ----------- | --------- | --------------------- |
| `authorAvatar`      | `author-avatar`       |             | `any`     | `undefined`           |
| `authorName`        | `author-name`         |             | `any`     | `undefined`           |
| `borderRadius`      | `border-radius`       |             | `string`  | `'16px 16px 0px 0px'` |
| `likes`             | `likes`               |             | `number`  | `0`                   |
| `novlCover`         | `novl-cover`          |             | `any`     | `undefined`           |
| `novlCoverFallback` | `novl-cover-fallback` |             | `string`  | `NOVL_COVER_FALLBACK` |
| `novlDescription`   | `novl-description`    |             | `any`     | `undefined`           |
| `novlTitle`         | `novl-title`          |             | `string`  | `'Novl title'`        |
| `price`             | `price`               |             | `string`  | `null`                |
| `published`         | `published`           |             | `boolean` | `false`               |
| `publisherAvatar`   | `publisher-avatar`    |             | `string`  | `null`                |
| `publisherName`     | `publisher-name`      |             | `string`  | `null`                |
| `showStats`         | `show-stats`          |             | `boolean` | `true`                |
| `views`             | `views`               |             | `number`  | `0`                   |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `authorClicked` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ur-novl-carousel](../ur-novl-carousel)

### Graph
```mermaid
graph TD;
  ur-novl-carousel --> ur-novl
  style ur-novl fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
