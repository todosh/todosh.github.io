import{j as a}from"./jsx-runtime.8f2fb6f7.js";import{C as s,H as f}from"./styled-components.browser.esm.559d79e4.js";import"./index.3a602734.js";import"./_commonjsHelpers.712cc82f.js";const d="16pt",_={input:s`
    color: #000;
    padding: 0pt 32pt;
  `,addon:s`
    color: red;
    max-width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  `},o=f.div`
  position: fixed;
  width: 100%;
  bottom: 0%;
  left: 0;
  cursor: pointer;

  padding: ${d};
  padding-bottom: unquote("max(${d}, env(safe-area-inset-bottom))");
  box-sizing: border-box;

  display: flex;
`,r=f.div`
  background: transparent;
  width: 100%;
  border: none;

  box-sizing: border-box;
  font-size: 16pt;
  font-weight: bold;
  justify-content: center;
  outline: none;
  background: #ddd;
  border-radius: 15pt;
  line-height: 48pt;

  margin-left: ${d};

  &:first-child {
    margin-left: initial;
  }

  ${e=>_[e.type]}
`;try{o.displayName="CreateTask",o.__docgenInfo={description:"",displayName:"CreateTask",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.displayName="CreateTaskButton",r.__docgenInfo={description:"",displayName:"CreateTaskButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"input"'},{value:'"addon"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const l=({onClick:e,children:t,label:y="Add item to list"})=>t?a(o,{children:t}):a(o,{children:a(i,{onClick:e,children:y})}),i=({children:e,onClick:t})=>a(r,{type:"input",onClick:t,children:e}),p=({children:e,onClick:t})=>a(r,{type:"addon",onClick:t,children:e});try{l.displayName="FloatBottomBar",l.__docgenInfo={description:"",displayName:"FloatBottomBar",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"any"}},label:{defaultValue:{value:"Add item to list"},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="FloatBottomBarButtonInput",i.__docgenInfo={description:"",displayName:"FloatBottomBarButtonInput",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"any"}}}}}catch{}try{p.displayName="FloatBottomBarButtonAddon",p.__docgenInfo={description:"",displayName:"FloatBottomBarButtonAddon",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"any"}}}}}catch{}const k={title:"Components/FloatBottomBar",component:l},B=e=>a(l,{...e}),n=B.bind({});n.args={onClick:console.log,label:"Hello world"};var u,c,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:"args => <FloatBottomBar {...args} />",...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const q=["Simple"];export{n as Simple,q as __namedExportsOrder,k as default};
//# sourceMappingURL=index.stories.d1894569.js.map
