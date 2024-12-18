# ur-novl-carousel



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description | Type                                              | Default                                        |
| --------------- | ----------------- | ----------- | ------------------------------------------------- | ---------------------------------------------- |
| `breakpoints`   | --                |             | `{ [width: number]: any; [ratio: string]: any; }` | `{         // add default     }`               |
| `grid`          | --                |             | `{ rows?: number; fill?: "row" \| "column"; }`    | `{         rows: 1,         fill: 'row'     }` |
| `navigation`    | `navigation`      |             | `boolean`                                         | `false`                                        |
| `novls`         | --                |             | `(CustomContent \| Novl)[]`                       | `[]`                                           |
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
- [ur-novl](../ur-novl)

### Graph
```mermaid
graph TD;
  ur-novl-carousel --> ur-button-arrow-left
  ur-novl-carousel --> ur-button-arrow-right
  ur-novl-carousel --> ur-novl
  style ur-novl-carousel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
