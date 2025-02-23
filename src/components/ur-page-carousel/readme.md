# ur-page-carousel



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type                                              | Default                                        |
| ------------------ | ------------------- | ----------- | ------------------------------------------------- | ---------------------------------------------- |
| `breakpoints`      | --                  |             | `{ [width: number]: any; [ratio: string]: any; }` | `{         // add default     }`               |
| `debug`            | `debug`             |             | `boolean`                                         | `false`                                        |
| `destroyListeners` | `destroy-listeners` |             | `boolean`                                         | `true`                                         |
| `grid`             | --                  |             | `{ rows?: number; fill?: "row" \| "column"; }`    | `{         rows: 1,         fill: 'row'     }` |
| `loading`          | `loading`           |             | `boolean`                                         | `false`                                        |
| `navigation`       | `navigation`        |             | `boolean`                                         | `false`                                        |
| `pages`            | --                  |             | `(PageCustomContent \| Page)[]`                   | `[]`                                           |
| `slidesPerView`    | `slides-per-view`   |             | `"auto" \| number`                                | `'auto'`                                       |
| `spaceBetween`     | `space-between`     |             | `number \| string`                                | `'0'`                                          |


## Events

| Event             | Description | Type                            |
| ----------------- | ----------- | ------------------------------- |
| `nextClicked`     |             | `CustomEvent<void>`             |
| `prevClicked`     |             | `CustomEvent<void>`             |
| `progressUpdated` |             | `CustomEvent<[number, number]>` |


## Methods

### `addPages(pages: Array<Page | CustomContent>) => Promise<void>`



#### Parameters

| Name    | Type                        | Description |
| ------- | --------------------------- | ----------- |
| `pages` | `(CustomContent \| Page)[]` |             |

#### Returns

Type: `Promise<void>`



### `reset() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `updateNovlsByIndex(updates: Map<number, Page | CustomContent>) => Promise<void>`



#### Parameters

| Name      | Type                                 | Description |
| --------- | ------------------------------------ | ----------- |
| `updates` | `Map<number, CustomContent \| Page>` |             |

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [ur-page](../ur-page)
- [ur-button-arrow-left](../ur-button-arrow-left)
- [ur-button-arrow-right](../ur-button-arrow-right)

### Graph
```mermaid
graph TD;
  ur-page-carousel --> ur-page
  ur-page-carousel --> ur-button-arrow-left
  ur-page-carousel --> ur-button-arrow-right
  ur-page --> ur-button
  style ur-page-carousel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
