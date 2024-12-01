import{n as l,e as c,j as d,i as u,t as f}from"./get-D9DBDJjp.js";import{D as a,R as p}from"./entry-preview-BcHUnPw7.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=()=>new v;class v{}const h=new WeakMap,w=c(class extends d{render(t){return a}update(t,[s]){var n;const i=s!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=s,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),a}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const s=this.ht??globalThis;let i=h.get(s);i===void 0&&(i=new WeakMap,h.set(s,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,s;return typeof this.Y=="function"?(t=h.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(s=this.Y)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=c(class extends u{constructor(t){var s;if(super(t),t.type!==f.ATTRIBUTE||t.name!=="class"||((s=t.strings)==null?void 0:s.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(s=>t[s]).join(" ")+" "}update(t,[s]){var n,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(const e in s)s[e]&&!((n=this.nt)!=null&&n.has(e))&&this.st.add(e);return this.render(s)}const i=t.element.classList;for(const e of this.st)e in s||(i.remove(e),this.st.delete(e));for(const e in s){const o=!!s[e];o===this.st.has(e)||(r=this.nt)!=null&&r.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return p}});export{w as K,y as R,b as i,m as r};
