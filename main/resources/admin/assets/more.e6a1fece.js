import{i as _,j as u,k as p,p as r,v as t,m as n,$ as a,F as d}from"./@vue.0987707a.js";const w={__name:"more",setup(f){const e=_("data");return(c,l)=>{const s=u("a-input-number"),i=u("a-form-item"),m=u("a-switch");return p(),r(d,null,[t(i,{label:"Article Views Pool",help:"update article views pool capacity"},{default:n(()=>[t(s,{class:"w-64",modelValue:a(e).article_views_pool,"onUpdate:modelValue":l[0]||(l[0]=o=>a(e).article_views_pool=o)},null,8,["modelValue"])]),_:1}),t(i,{label:"Fast Offset",help:"fast offset min page"},{default:n(()=>[t(s,{class:"w-64",modelValue:a(e).fast_offset_min_page,"onUpdate:modelValue":l[1]||(l[1]=o=>a(e).fast_offset_min_page=o)},null,8,["modelValue"])]),_:1}),t(i,{label:"Categories limit",help:"view all categories limit"},{default:n(()=>[t(s,{class:"w-64",modelValue:a(e).view_all_category_limit,"onUpdate:modelValue":l[2]||(l[2]=o=>a(e).view_all_category_limit=o)},null,8,["modelValue"])]),_:1}),t(i,{label:"unique title",help:"article title must be unique"},{default:n(()=>[t(m,{type:"round",modelValue:a(e).unique_title,"onUpdate:modelValue":l[3]||(l[3]=o=>a(e).unique_title=o)},null,8,["modelValue"])]),_:1})],64)}}};export{w as default};
