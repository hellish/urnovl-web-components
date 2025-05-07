import{f as s,T as n,E as T,m as l}from"./entry-preview-CxXhOGqP.js";import{e as f,i as p,t}from"./class-map-CvfWHz58.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=f(class extends p{constructor(e){if(super(e),e.type!==t.PROPERTY&&e.type!==t.ATTRIBUTE&&e.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!s(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[r]){if(r===n||r===T)return r;const i=e.element,o=e.name;if(e.type===t.PROPERTY){if(r===i[o])return n}else if(e.type===t.BOOLEAN_ATTRIBUTE){if(!!r===i.hasAttribute(o))return n}else if(e.type===t.ATTRIBUTE&&i.getAttribute(o)===r+"")return n;return l(e),r}});export{a as l};
