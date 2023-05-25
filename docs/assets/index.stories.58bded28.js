import{a as l,j as r}from"./jsx-runtime.8f2fb6f7.js";import{R as i}from"./index.3a602734.js";import{B as a}from"./index.382a61ee.js";import"./_commonjsHelpers.712cc82f.js";import"./index.578b20b8.js";import"./styled-components.browser.esm.559d79e4.js";import"./index.49a89e13.js";const k={title:"Components/Backdrop",component:a,argTypes:{children:{control:!1},open:{control:!1}}},e=p=>{const[c,o]=i.useState(!1);return l("div",{children:[r(a,{...p,open:c,handleClose:()=>o(!1),children:"Hello world"}),r("button",{onClick:()=>o(!0),children:"Open"})]})};var n,t,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(args: any) => {
  const [open, setOpen] = React.useState(false);
  return <div>
      <Backdrop {...args} open={open} handleClose={() => setOpen(false)}>
        Hello world
      </Backdrop>
      <button onClick={() => setOpen(true)}>Open</button>
    </div>;
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const x=["Basic"];export{e as Basic,x as __namedExportsOrder,k as default};
//# sourceMappingURL=index.stories.58bded28.js.map
