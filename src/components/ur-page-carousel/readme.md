# ur-page-carousel



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description | Type                                              | Default                                        |
| --------------- | ----------------- | ----------- | ------------------------------------------------- | ---------------------------------------------- |
| `breakpoints`   | --                |             | `{ [width: number]: any; [ratio: string]: any; }` | `{         // add default     }`               |
| `grid`          | --                |             | `{ rows?: number; fill?: "row" \| "column"; }`    | `{         rows: 1,         fill: 'row'     }` |
| `navigation`    | `navigation`      |             | `boolean`                                         | `false`                                        |
| `pages`         | --                |             | `(PageCustomContent \| Page)[]`                   | `[]`                                           |
| `slidesPerView` | `slides-per-view` |             | `"auto" \| number`                                | `'auto'`                                       |
| `spaceBetween`  | `space-between`   |             | `number \| string`                                | `'0'`                                          |


## Events

| Event                 | Description | Type                                       |
| --------------------- | ----------- | ------------------------------------------ |
| `intersectionUpdated` |             | `CustomEvent<IntersectionObserverEntry[]>` |
| `nextClicked`         |             | `CustomEvent<void>`                        |
| `prevClicked`         |             | `CustomEvent<void>`                        |


## Dependencies

### Depends on

- [ur-button-arrow-left](../ur-button-arrow-left)
- [ur-button-arrow-right](../ur-button-arrow-right)
- [ur-page](../ur-page)

### Graph
```mermaid
graph TD;
  ur-page-carousel --> ur-button-arrow-left
  ur-page-carousel --> ur-button-arrow-right
  ur-page-carousel --> ur-page
  ur-page --> ur-button
  style ur-page-carousel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
