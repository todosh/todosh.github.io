import"./blocks.48cd80bb.js";import{j as e,a as r,F as a}from"./jsx-runtime.8f2fb6f7.js";import{u as s}from"./index.0566f6df.js";import{M as c}from"./index.0548bd1b.js";import"./index.3a602734.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.756c8188.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.578b20b8.js";import"./index.5f460d07.js";import"./index.f6f0c759.js";import"./index.b38f6aa4.js";function m(n={}){const{wrapper:i}=Object.assign({},s(),n.components);return i?e(i,{...n,children:e(l,{})}):l();function l(){const t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},s(),n.components);return r(a,{children:[e(c,{title:"Hooks/useAutocomplete"}),`
`,e(t.h1,{id:"useautocomplete",children:"useAutocomplete"}),`
`,r(t.p,{children:["This hook is used for filtering array of ",e(t.code,{children:"items"})," using ",e(t.code,{children:"term"})," string."]}),`
`,e(t.pre,{children:e(t.code,{className:"language-js",children:`const items = [
  { id: 1, title: "Hel" },
  { id: 2, title: "Hello" },
  { id: 3, title: "Hello Wo" },
  { id: 4, title: "Hello World" },
];
`})}),`
`,e(t.p,{children:"Simple hook usage."}),`
`,e(t.pre,{children:e(t.code,{className:"language-js",children:`const filtered = useAutocomplete(items, "title", "hello w");

// Result:
[
  { id: 3, title: "Hello Wo" },
  { id: 4, title: "Hello World" },
];
`})}),`
`,r(t.p,{children:["Additionally you can pass third parameter named ",e(t.code,{children:"limit"})," for limitting the amount of result items."]}),`
`,e(t.pre,{children:e(t.code,{className:"language-js",children:`const filtered = useAutocomplete(items, "title", "hello w", 1);

// Result:
[{ id: 3, title: "Hello Wo" }];
`})})]})}}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const o={title:"Hooks/useAutocomplete",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:m};const W=["__page"];export{W as __namedExportsOrder,d as __page,o as default};
//# sourceMappingURL=useAutocomplete.stories.6ad041f1.js.map
