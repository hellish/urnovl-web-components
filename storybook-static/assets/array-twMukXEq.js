/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*f(r,t){if(r!==void 0){let e=0;for(const o of r)yield t(o,e++)}}const i=(r,t)=>{if(r.length!==t.length)return!1;const e=[...r].sort(),o=[...t].sort();return e.every((n,s)=>n===o[s])};export{i as a,f as o};
