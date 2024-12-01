/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*a(o,r){if(o!==void 0){let t=0;for(const e of o)yield r(e,t++)}}const f=(o,r)=>{if(o.length!==r.length)return!1;const t=[...o].sort(),e=[...r].sort();return t.every((s,n)=>s===e[n])};export{f as a,a as o};
