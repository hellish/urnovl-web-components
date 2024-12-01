function c(t,u=!1){return(i,a)=>{const{update:l}=i;t in i&&(i.update=function(s){if(s.has(t)){const n=s.get(t),f=this[t];n!==f&&(!u||this.hasUpdated)&&this[a](n,f)}l.call(this,s)})}}export{c as w};
