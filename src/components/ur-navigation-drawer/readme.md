# ur-navigation-drawer



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute                | Description                                     | Type                | Default   |
| --------------------- | ------------------------ | ----------------------------------------------- | ------------------- | --------- |
| `closeOnEsc`          | `close-on-esc`           | Closes the drawer when the 'Esc' key is pressed | `boolean`           | `true`    |
| `closeOnOverlayClick` | `close-on-overlay-click` | Closes the drawer when clicking outside of it   | `boolean`           | `true`    |
| `contained`           | `contained`              | Contains the drawer within its parent element   | `boolean`           | `false`   |
| `open`                | `open`                   | Determines if the drawer is open                | `boolean`           | `false`   |
| `placement`           | `placement`              | Placement of the drawer: 'left' or 'right'      | `"left" \| "right"` | `'right'` |


## Events

| Event    | Description                             | Type                |
| -------- | --------------------------------------- | ------------------- |
| `closed` | Event emitted when the drawer is closed | `CustomEvent<void>` |
| `opened` | Event emitted when the drawer is opened | `CustomEvent<void>` |


## Methods

### `closeDrawer() => Promise<void>`

Closes the drawer

#### Returns

Type: `Promise<void>`



### `openDrawer() => Promise<void>`

Opens the drawer

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
