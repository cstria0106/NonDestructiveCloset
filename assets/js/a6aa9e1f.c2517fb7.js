"use strict";(self.webpackChunkone_click_inventory=self.webpackChunkone_click_inventory||[]).push([[643],{2228:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(758);var a=n(3526),i=n(1988),r=n(5919),o=n(7059),s=n(7458),l=n(6035),d=n(7305),c=n(1470),g=n(8282),p=n(5870),u=n(6070);function m(e){const t=(0,p.k)(e);return(0,u.jsx)(g.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,i.A)(),{blogDescription:a,blogTitle:o,permalink:s}=t,l="/"===s?n:o;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.be,{title:l,description:a}),(0,u.jsx)(d.A,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:n,sidebar:a}=e;return(0,u.jsxs)(s.A,{sidebar:a,children:[(0,u.jsx)(c.A,{items:n}),(0,u.jsx)(l.A,{metadata:t})]})}function f(e){return(0,u.jsxs)(r.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogListPage),children:[(0,u.jsx)(h,{...e}),(0,u.jsx)(m,{...e}),(0,u.jsx)(b,{...e})]})}},6035:(e,t,n)=>{n.d(t,{A:()=>o});n(758);var a=n(1853),i=n(3516),r=n(6070);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(i.A,{permalink:n,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(i.A,{permalink:o,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},1470:(e,t,n)=>{n.d(t,{A:()=>o});n(758);var a=n(2607),i=n(3883),r=n(6070);function o(e){let{items:t,component:n=i.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.i,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},5870:(e,t,n)=>{n.d(t,{k:()=>c,J:()=>g});var a=n(9975),i=n(1988),r=n(6581);var o=n(2607);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(p);return{author:1===t.length?t[0]:t}}function d(e,t,n){return e?{image:u({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function c(e){const{siteConfig:t}=(0,i.A)(),{withBaseUrl:n}=(0,a.hH)(),{metadata:{blogDescription:r,blogTitle:o,permalink:c}}=e,g=`${t.url}${c}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:r}=e,{date:o,title:c,description:g,lastUpdatedAt:p}=r,u=a.image??i.image,m=i.keywords??[],h=`${t.url}${r.permalink}`,b=p?s(p):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:c,name:c,description:g,datePublished:o,...b?{dateModified:b}:{},...l(r.authors),...d(u,n,c),...m?{keywords:m}:{}}}(e.content,t,n)))}}function g(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,o.e)(),{siteConfig:c}=(0,i.A)(),{withBaseUrl:g}=(0,a.hH)(),{date:p,title:u,description:m,frontMatter:h,lastUpdatedAt:b}=n,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,A=`${c.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":A,mainEntityOfPage:A,url:A,headline:u,name:u,description:m,datePublished:p,...j?{dateModified:j}:{},...l(n.authors),...d(f,g,u),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${c.url}${e.blogBasePath}`,name:e.blogTitle}}}function p(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function u(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}}}]);