import{r as s,R as i,D as T,d as p}from"./entry-preview-BcHUnPw7.js";import{e as a,i as l,t as r}from"./class-map-CDMw4-pN.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=a(class extends l{constructor(t){if(super(t),t.type!==r.PROPERTY&&t.type!==r.ATTRIBUTE&&t.type!==r.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!s(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===i||e===T)return e;const n=t.element,o=t.name;if(t.type===r.PROPERTY){if(e===n[o])return i}else if(t.type===r.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(o))return i}else if(t.type===r.ATTRIBUTE&&n.getAttribute(o)===e+"")return i;return p(t),e}});export{f as F};
