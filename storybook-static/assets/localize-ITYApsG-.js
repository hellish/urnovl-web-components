import{m as c}from"./get-D9DBDJjp.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n="lit-localize-status";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class d{constructor(){this.settled=!1,this.promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let e=0;e<256;e++)(e>>4&15).toString(16)+(e&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=new d;f.resolve();let a=!1;const o=new Map,w=(e,t)=>{a||(a=!0,c().addEventListener(n,l=>{l.detail.status==="ready"&&o.forEach(i=>{i.forEach(r=>r())})}));const s=o.get(e)||[];s.push(t),o.set(e,s)},L=e=>{o.delete(e)};export{w as a,L as o};
