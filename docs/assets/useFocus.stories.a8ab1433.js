import"./blocks.48cd80bb.js";import{j as e,a as c,F as u}from"./jsx-runtime.8f2fb6f7.js";import{C as d,S as p,M as l}from"./index.0548bd1b.js";import{R as m}from"./index.3a602734.js";import{u as a}from"./index.0566f6df.js";import"./iframe.756c8188.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.578b20b8.js";import"./_commonjsHelpers.712cc82f.js";import"./index.5f460d07.js";import"./index.f6f0c759.js";import"./index.b38f6aa4.js";const i=({render:o})=>e(d,{withSource:p.NONE,children:o()});try{i.displayName="RenderWithLogic",i.__docgenInfo={description:"",displayName:"RenderWithLogic",props:{render:{defaultValue:null,description:"",name:"render",required:!0,type:{name:"any"}}}}}catch{}const h=()=>{const o=m.useRef(null);return[o,()=>{var r;(r=o.current)==null||r.focus()}]},f=()=>e(i,{render:()=>{const[o,t]=h();return c("div",{children:[e("button",{onClick:t,children:"Focus!"}),e("input",{ref:o})]})}});function _(o={}){const{wrapper:t}=Object.assign({},a(),o.components);return t?e(t,{...o,children:e(r,{})}):r();function r(){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},a(),o.components);return c(u,{children:[e(l,{title:"Hooks/useFocus"}),`
`,e(n.h1,{id:"usefocus",children:"useFocus"}),`
`,c(n.p,{children:["This hook is used for handling ",e(n.code,{children:"focus()"}),` on input ref.
Ref creation and `,e(n.code,{children:"focus"})," call is decoupled to the hook."]}),`
`,e(n.p,{children:"Simple hook usage."}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`const Test = () => {
  const [ref, focus] = useFocus();

  return (
    <div>
      <button onClick={focus}>Focus!</button>
      <input ref={ref} />
    </div>
  );
};
`})}),`
`,e(n.p,{children:"Try it out."}),`
`,e(n.p,{children:"Click the button to focus on the input."}),`
`,e(f,{})]})}}const g=()=>{throw new Error("Docs-only story")};g.parameters={docsOnly:!0};const s={title:"Hooks/useFocus",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:_};const v=["__page"];export{v as __namedExportsOrder,g as __page,s as default};
//# sourceMappingURL=useFocus.stories.a8ab1433.js.map
