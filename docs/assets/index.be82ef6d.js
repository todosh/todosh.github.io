import{j as i}from"./jsx-runtime.8f2fb6f7.js";import{r as c}from"./index.3a602734.js";import{L as f}from"./index.636a0b32.js";import{H as y}from"./styled-components.browser.esm.559d79e4.js";const a=y.div`
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fff;
  box-sizing: border-box;

  .wsl-list {
    &-item {
      border-bottom: 1px solid #f7f7f7;
      height: 44pt;
      padding-left: 16pt;
      display: flex;
      align-items: center;

      &:last-child {
        border-bottom: none;
      }

      &:hover,
      &:active {
        background: rgba(0, 0, 0, 0.04);
      }
    }
  }
`;try{a.displayName="ListWrapper",a.__docgenInfo={description:"",displayName:"ListWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const m=44;function n({item:e,titleKey:r,onItemSelect:t}){return i("li",{className:"wsl-list-item",onClick:t&&(()=>t(e)),children:e[r]})}function s({items:e,onItemSelect:r,titleKey:t,minListItemsCount:d=0,maxListItemsCount:l=0,loading:p=!1}){const o=c.exports.useMemo(()=>({minHeight:`${d*m}pt`,...l?{maxHeight:`${l*m}pt`}:null,overflow:"auto"}),[d,l]);return p?i(a,{style:{...o,display:"flex",alignItems:"center",justifyContent:"center"},children:i(f,{size:30})}):i(a,{as:"ul",style:o,children:e.map(u=>i(n,{item:u,titleKey:t,onItemSelect:r},u.id))})}s.defaultProps={titleKey:"title"};try{n.displayName="ListItem",n.__docgenInfo={description:"",displayName:"ListItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"T"}},titleKey:{defaultValue:{value:"title"},description:"",name:"titleKey",required:!1,type:{name:"string | number | symbol"}},onItemSelect:{defaultValue:null,description:"",name:"onItemSelect",required:!0,type:{name:"(item: T) => void"}}}}}catch{}try{s.displayName="List",s.__docgenInfo={description:"",displayName:"List",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},onItemSelect:{defaultValue:null,description:"",name:"onItemSelect",required:!0,type:{name:"(item: T) => void"}},titleKey:{defaultValue:{value:"title"},description:"",name:"titleKey",required:!1,type:{name:"string | number | symbol"}},minListItemsCount:{defaultValue:{value:"0"},description:"",name:"minListItemsCount",required:!1,type:{name:"number"}},maxListItemsCount:{defaultValue:{value:"0"},description:"",name:"maxListItemsCount",required:!1,type:{name:"number"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}export{s as L};
//# sourceMappingURL=index.be82ef6d.js.map
