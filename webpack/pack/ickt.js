!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(module,exports,__webpack_require__){var header=__webpack_require__(1),footer=__webpack_require__(2);__webpack_require__(3),document.write("<h1>main 456</h1>"),header(),footer.show();var img1=__webpack_require__(8),img2=__webpack_require__(9),demo1=new Image,demo2=new Image;document.body.appendChild(demo1),document.body.appendChild(demo2),demo1.src=img1,demo2.src=img2},function(module,exports){module.exports=function(){document.write("<h2>header</h2>")}},function(module,exports){module.exports={show:function(){document.write("<h2>footer</h2>")}}},function(module,exports,__webpack_require__){var content=__webpack_require__(4);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0};options.transform=void 0,options.insertInto=void 0;__webpack_require__(6)(content,options);content.locals&&(module.exports=content.locals)},function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(5)(!1),exports.push([module.i,"h1 {\r\n\tcolor: red;\r\n}\r\nh2 {\r\n\tbackground: green;\r\n}",""])},function(module,exports){function cssWithMappingToString(item,useSourceMap){var content=item[1]||"",cssMapping=item[3];if(!cssMapping)return content;if(useSourceMap&&"function"==typeof btoa){var sourceMapping=toComment(cssMapping);return[content].concat(cssMapping.sources.map(function(source){return"/*# sourceURL="+cssMapping.sourceRoot+source+" */"})).concat([sourceMapping]).join("\n")}return[content].join("\n")}function toComment(sourceMap){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */"}module.exports=function(useSourceMap){var list=[];return list.toString=function(){return this.map(function(item){var content=cssWithMappingToString(item,useSourceMap);return item[2]?"@media "+item[2]+"{"+content+"}":content}).join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},function(module,exports,__webpack_require__){function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j],options))}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j],options));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function listToStyles(list,options){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],css=item[1],media=item[2],sourceMap=item[3],part={css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}function insertStyleElement(options,style){var target=getElement(options.insertInto);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var lastStyleElementInsertedAtTop=stylesInsertedAtTop[stylesInsertedAtTop.length-1];if("top"===options.insertAt)lastStyleElementInsertedAtTop?lastStyleElementInsertedAtTop.nextSibling?target.insertBefore(style,lastStyleElementInsertedAtTop.nextSibling):target.appendChild(style):target.insertBefore(style,target.firstChild),stylesInsertedAtTop.push(style);else if("bottom"===options.insertAt)target.appendChild(style);else{if("object"!=typeof options.insertAt||!options.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var nextSibling=getElement(options.insertInto+" "+options.insertAt.before);target.insertBefore(style,nextSibling)}}function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style);var idx=stylesInsertedAtTop.indexOf(style);idx>=0&&stylesInsertedAtTop.splice(idx,1)}function createStyleElement(options){var style=document.createElement("style");return void 0===options.attrs.type&&(options.attrs.type="text/css"),addAttrs(style,options.attrs),insertStyleElement(options,style),style}function createLinkElement(options){var link=document.createElement("link");return void 0===options.attrs.type&&(options.attrs.type="text/css"),options.attrs.rel="stylesheet",addAttrs(link,options.attrs),insertStyleElement(options,link),link}function addAttrs(el,attrs){Object.keys(attrs).forEach(function(key){el.setAttribute(key,attrs[key])})}function addStyle(obj,options){var style,update,remove,result;if(options.transform&&obj.css){if(!(result=options.transform(obj.css)))return function(){};obj.css=result}if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=createStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else obj.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(style=createLinkElement(options),update=updateLink.bind(null,style,options),remove=function(){removeStyleElement(style),style.href&&URL.revokeObjectURL(style.href)}):(style=createStyleElement(options),update=applyToTag.bind(null,style),remove=function(){removeStyleElement(style)});return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,obj){var css=obj.css,media=obj.media;if(media&&style.setAttribute("media",media),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}function updateLink(link,options,obj){var css=obj.css,sourceMap=obj.sourceMap,autoFixUrls=void 0===options.convertToAbsoluteUrls&&sourceMap;(options.convertToAbsoluteUrls||autoFixUrls)&&(css=fixUrls(css)),sourceMap&&(css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */");var blob=new Blob([css],{type:"text/css"}),oldSrc=link.href;link.href=URL.createObjectURL(blob),oldSrc&&URL.revokeObjectURL(oldSrc)}var stylesInDom={},isOldIE=function(fn){var memo;return function(){return void 0===memo&&(memo=fn.apply(this,arguments)),memo}}(function(){return window&&document&&document.all&&!window.atob}),getTarget=function(target){return document.querySelector(target)},getElement=function(fn){var memo={};return function(target){if("function"==typeof target)return target();if(void 0===memo[target]){var styleTarget=getTarget.call(this,target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),singleton=null,singletonCounter=0,stylesInsertedAtTop=[],fixUrls=__webpack_require__(7);module.exports=function(list,options){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");options=options||{},options.attrs="object"==typeof options.attrs?options.attrs:{},options.singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE()),options.insertInto||(options.insertInto="head"),options.insertAt||(options.insertAt="bottom");var styles=listToStyles(list,options);return addStylesToDom(styles,options),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}if(newList){addStylesToDom(listToStyles(newList,options),options)}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},function(module,exports){module.exports=function(css){var location="undefined"!=typeof window&&window.location;if(!location)throw new Error("fixUrls requires window.location");if(!css||"string"!=typeof css)return css;var baseUrl=location.protocol+"//"+location.host,currentDir=baseUrl+location.pathname.replace(/\/[^\/]*$/,"/");return css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(fullMatch,origUrl){var unquotedOrigUrl=origUrl.trim().replace(/^"(.*)"$/,function(o,$1){return $1}).replace(/^'(.*)'$/,function(o,$1){return $1});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl))return fullMatch;var newUrl;return newUrl=0===unquotedOrigUrl.indexOf("//")?unquotedOrigUrl:0===unquotedOrigUrl.indexOf("/")?baseUrl+unquotedOrigUrl:currentDir+unquotedOrigUrl.replace(/^\.\//,""),"url("+JSON.stringify(newUrl)+")"})}},function(module,exports){module.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAVFBMVEVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUWysrL///+iRXvnAAAAGXRSTlMAAwYJGx4zNktUV2ZpdZmfoszP0tXk5+rwTuilnAAAAPtJREFUSMftlMESgjAMRJciKqhQoRZi/v8/PagjSrYwnDi4J+ib0ElDH/CMO9bXm9yu9dHhKwxkpyjvxFO2ABStjNMWs2Af5TtxPwN2vfym3yWBa2Wa1iUALmLlkgB5NEmfU4By/H7/PJaluSxSorErpKEAHflY6Mj2AYNdIcMgds0AUjHJB6/ZJbBeAu3Fk4PxFNC5VGwuFfKeTZ+BNf8YXGeAziUAUBjXokgC4DC5fIcZsObuA9l5JJJztgC8dBUl2h4zwV99m1af2upTrj5l6lOmPuXqU1t9mpKSWurTtPrUUt/iXQLrJdBePDkYTwGdS8Xm8lffRtX3AEysv3fAYe5FAAAAAElFTkSuQmCC"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"85bbb2ee49405ce5bc7bbd13311cfbf7.jpg"}]);