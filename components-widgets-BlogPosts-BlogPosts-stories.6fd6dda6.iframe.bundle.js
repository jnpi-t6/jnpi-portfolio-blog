"use strict";(self.webpackChunkjnpi_portfolio_blog=self.webpackChunkjnpi_portfolio_blog||[]).push([[923],{"./app/components/widgets/BlogPosts/BlogPosts.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BlogPosts_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BlogPosts_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./app/components/widgets/BlogPosts/BlogPosts.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BlogPosts_module.A,options);const BlogPosts_BlogPosts_module=BlogPosts_module.A&&BlogPosts_module.A.locals?BlogPosts_module.A.locals:void 0;var microcms_js_sdk=__webpack_require__("./node_modules/microcms-js-sdk/dist/esm/microcms-js-sdk.js"),process=__webpack_require__("./node_modules/process/browser.js");const client=(0,microcms_js_sdk.U)({serviceDomain:process.env.SERVICE_DOMAIN,apiKey:process.env.API_KEY});var BlogList_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./app/components/pageElement/BlogList/BlogList.module.css"),BlogList_module_options={};BlogList_module_options.styleTagTransform=styleTagTransform_default(),BlogList_module_options.setAttributes=setAttributesWithoutAttributes_default(),BlogList_module_options.insert=insertBySelector_default().bind(null,"head"),BlogList_module_options.domAPI=styleDomAPI_default(),BlogList_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BlogList_module.A,BlogList_module_options);const BlogList_BlogList_module=BlogList_module.A&&BlogList_module.A.locals?BlogList_module.A.locals:void 0;var _Index_parameters,_Index_parameters_docs,_Index_parameters1,next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");async function BlogList(param){let{contents}=param;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:BlogList_BlogList_module.postslayout,children:null==contents?void 0:contents.map((post=>(0,jsx_runtime.jsxs)(link_default(),{href:"/blog/".concat(post.id),className:BlogList_BlogList_module.blogposts,children:[post.eyecatch?(0,jsx_runtime.jsx)("div",{className:BlogList_BlogList_module.eyecatch,children:(0,jsx_runtime.jsx)(next_image.A,{src:post.eyecatch.url,alt:post.title,width:400,height:300,sizes:"100vw",style:{objectFit:"cover",width:"100px",height:"auto"}})}):(0,jsx_runtime.jsx)("div",{className:BlogList_BlogList_module.defaultEyecatch,children:(0,jsx_runtime.jsx)(next_image.A,{src:"/defaultImage.png",alt:"blog-image",width:400,height:300,sizes:"100vw",style:{objectFit:"cover",width:"100px",height:"auto"}})}),(0,jsx_runtime.jsx)("p",{className:BlogList_BlogList_module.title,children:post.title}),(0,jsx_runtime.jsx)("div",{className:BlogList_BlogList_module.darkcover})]},post.id)))})})}async function BlogPosts(){const{contents}=await(async param=>{let{queries}=param;return await client.getList({endpoint:"blogs",queries})})({queries:{limit:4}});return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:BlogPosts_BlogPosts_module.container,children:[(0,jsx_runtime.jsx)("h2",{className:BlogPosts_BlogPosts_module.title,children:"Blog Posts"}),(0,jsx_runtime.jsx)(BlogList,{contents})]})})}BlogList.__docgenInfo={description:"",methods:[],displayName:"BlogList"},BlogPosts.__docgenInfo={description:"",methods:[],displayName:"BlogPosts"};const BlogPosts_stories={title:"widget/BlogPosts",component:BlogPosts},Index=()=>(0,jsx_runtime.jsx)(BlogPosts,{});Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:"() => <BlogPosts />",...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}};const __namedExportsOrder=["Index"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./app/components/pageElement/BlogList/BlogList.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".BlogList_postslayout__orA6h {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-template-rows: repeat(1, 1fr);\n  align-items: stretch;\n  width: 100%;\n  height: auto;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  background-color: inherit;\n\n  @media (min-width: 768px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    gap: 1em;\n    align-items: stretch;\n    width: 100%;\n    height: auto;\n    margin-top: 2em;\n    margin-bottom: 1em;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    background-color: inherit;\n  }\n}\n.BlogList_blogposts__YpXJu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n\n  margin: 2em auto;\n  position: relative;\n  background-color: #ffffff;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n}\n\n.BlogList_eyecatch__BDS_h,\n.BlogList_defaultEyecatch__nKZRU {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1em;\n  margin-bottom: 1em;\n  background-color: #eeeeee;\n}\n\n.BlogList_title__T2fWS {\n  flex-grow: 1;\n  margin: 0.5em;\n  font-size: 1.25em;\n  font-weight: 600;\n}\n\n.BlogList_darkcover__5BZfB {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  opacity: 0.2;\n  transition: background-color 0.3s ease;\n}\n\n.BlogList_darkcover__5BZfB:hover {\n  background-color: #666666;\n}\n","",{version:3,sources:["webpack://./app/components/pageElement/BlogList/BlogList.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;;EAEzB;IACE,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,QAAQ;IACR,oBAAoB;IACpB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;EAC3B;AACF;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;;EAEX,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;EACzB,yCAAyC;AAC3C;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:[".postslayout {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-template-rows: repeat(1, 1fr);\n  align-items: stretch;\n  width: 100%;\n  height: auto;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  background-color: inherit;\n\n  @media (min-width: 768px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    gap: 1em;\n    align-items: stretch;\n    width: 100%;\n    height: auto;\n    margin-top: 2em;\n    margin-bottom: 1em;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    background-color: inherit;\n  }\n}\n.blogposts {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n\n  margin: 2em auto;\n  position: relative;\n  background-color: #ffffff;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n}\n\n.eyecatch,\n.defaultEyecatch {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1em;\n  margin-bottom: 1em;\n  background-color: #eeeeee;\n}\n\n.title {\n  flex-grow: 1;\n  margin: 0.5em;\n  font-size: 1.25em;\n  font-weight: 600;\n}\n\n.darkcover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  opacity: 0.2;\n  transition: background-color 0.3s ease;\n}\n\n.darkcover:hover {\n  background-color: #666666;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={postslayout:"BlogList_postslayout__orA6h",blogposts:"BlogList_blogposts__YpXJu",eyecatch:"BlogList_eyecatch__BDS_h",defaultEyecatch:"BlogList_defaultEyecatch__nKZRU",title:"BlogList_title__T2fWS",darkcover:"BlogList_darkcover__5BZfB"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./app/components/widgets/BlogPosts/BlogPosts.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".BlogPosts_container__feO4l {\n  max-width: inherit;\n  margin-top: 4em;\n  background-color: #ffffff;\n}\n\n.BlogPosts_title__ghYwU {\n  font-size: 36px;\n  font-weight: 700;\n}\n","",{version:3,sources:["webpack://./app/components/widgets/BlogPosts/BlogPosts.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB",sourcesContent:[".container {\n  max-width: inherit;\n  margin-top: 4em;\n  background-color: #ffffff;\n}\n\n.title {\n  font-size: 36px;\n  font-weight: 700;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"BlogPosts_container__feO4l",title:"BlogPosts_title__ghYwU"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);