import{a as d,j as u}from"./jsx-runtime.8f2fb6f7.js";import{R as c,r as m}from"./index.3a602734.js";import{L as p}from"./index.be82ef6d.js";import{H as f}from"./styled-components.browser.esm.559d79e4.js";function*y(e,a,n){for(let t=0;t<e.length;t++){const l=e[t],r=l[a];n.test(r)&&(yield l)}}const g=(e,a=-1)=>{const n=[];let t=e.next(),l=0;for(;!t.done;)a>-1&&(l++,l>=a&&e.return(!1)),n.push(t.value),t=e.next();return n},_=/([().,*+])/g,I=e=>e.replace(_,"\\$1"),V=e=>new RegExp(I(e),"i"),h=(e,a,n,t=5)=>c.useMemo(()=>{if(n){const r=V(n),s=y(e,a,r);return g(s,t)}return e.slice(0,t)},[e,n]),o=f.form`
  input {
    width: 100%;
    box-sizing: border-box;
    font-size: 18pt;
    padding: 16pt 32pt;
    padding-top: 19pt;
    border: none;
    outline: none;
  }
`;try{o.displayName="AutocompleteWrapper",o.__docgenInfo={description:"",displayName:"AutocompleteWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLFormElement | null) => void) | RefObject<HTMLFormElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const i=e=>{const[a,n]=m.exports.useState(e.defaultValue||""),t=h(e.items,"title",a,5);return d(o,{onSubmit:r=>{e==null||e.onItemCreate(a),r.preventDefault(),r.stopPropagation()},children:[u("input",{autoFocus:e.autoFocus,ref:e.inputRef,onChange:r=>n(r.target.value)}),u(p,{onItemSelect:e.onItemSelect,items:t})]})};try{i.displayName="Autocomplete",i.__docgenInfo={description:"",displayName:"Autocomplete",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AutocompleteItem[]"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!0,type:{name:"Ref<HTMLInputElement>"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},onItemSelect:{defaultValue:null,description:"",name:"onItemSelect",required:!1,type:{name:"any"}},onItemCreate:{defaultValue:null,description:"",name:"onItemCreate",required:!1,type:{name:"any"}}}}}catch{}export{i as A};
//# sourceMappingURL=index.617b0738.js.map
