webpackJsonp([9],{"0jFj":function(e,i,p){i=e.exports=p("FZ+f")(!1),i.push([e.i,".avatar[data-v-d090c0e8]{width:200px;height:200px;border-radius:50%}",""])},"5TKe":function(e,i,p){"use strict";function o(e,i){var p=g()({ele:e.target,type:"hit",bgc:"rgba(0, 0, 0, 0.15)"},i),o=p.ele;if(o){var t=o.getBoundingClientRect(),r=o.querySelector(".e-ripple");switch(r?r.className="e-ripple":(r=document.createElement("span"),r.className="e-ripple",r.style.height=r.style.width=Math.max(t.width,t.height)+"px",o.appendChild(r)),p.type){case"center":r.style.top=t.height/2-r.offsetHeight/2+"px",r.style.left=t.width/2-r.offsetWidth/2+"px";break;default:r.style.top=e.pageY-t.top-r.offsetHeight/2-document.body.scrollTop+"px",r.style.left=e.pageX-t.left-r.offsetWidth/2-document.body.scrollLeft+"px"}return r.style.backgroundColor=p.bgc,r.className="e-ripple z-active",!1}}function t(e,i){e=e.split(",")[1],e=window.atob(e);for(var p=new Uint8Array(e.length),o=0;o<e.length;o++)p[o]=e.charCodeAt(o);return new Blob([p],{type:i})}function r(e){p("FRl2")}function a(e){p("H7No")}Object.defineProperty(i,"__esModule",{value:!0});var c=p("fZjL"),s=p.n(c),n=p("pFYg"),v=p.n(n),l=p("woOf"),g=p.n(l),d=p("vLgD"),u={zh:{hint:"点击，或拖动图片至此处",loading:"正在上传……",noSupported:"浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",success:"上传成功",fail:"图片上传失败",preview:"头像预览",btn:{off:"取消",close:"关闭",back:"上一步",save:"保存"},error:{onlyImg:"仅限图片格式",outOfSize:"单文件大小不能超过 ",lowestPx:"图片最低像素为（宽*高）："}},en:{hint:"Click, or drag the file here",loading:"Uploading……",noSupported:"Browser does not support, please use IE10+ or other browsers",success:"Upload success",fail:"Upload failed",preview:"Preview",btn:{off:"Cancel",close:"Close",back:"Back",save:"Save"},error:{onlyImg:"Image only",outOfSize:"Image exceeds size limit: ",lowestPx:"The lowest pixel in the image: "}}},h=u,m={jpg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",psd:"image/photoshop"},w={props:{field:{type:String,default:"avatar"},url:{type:String,default:""},params:{type:Object,default:null},width:{type:Number,default:200},height:{type:Number,default:200},noCircle:{type:Boolean,default:!1},maxSize:{type:Number,default:10240},langType:{type:String,default:"zh"}},data:function(){var e=this,i=e.langType,p=e.width,o=e.height,t=!0,r=h[i]?h[i]:r.zh;return"function"!=typeof FormData&&(t=!1),{show:!0,mime:m.jpg,lang:r,isSupported:t,step:1,loading:0,progress:0,hasError:!1,errorMsg:"",ratio:p/o,sourceImg:null,sourceImgUrl:"",createImgUrl:"",sourceImgMouseDown:{on:!1,mX:0,mY:0,x:0,y:0},previewContainer:{width:100,height:100},sourceImgContainer:{width:240,height:180},scale:{zoomAddOn:!1,zoomSubOn:!1,range:1,x:0,y:0,width:0,height:0,maxWidth:0,maxHeight:0,minWidth:0,minHeight:0,naturalWidth:0,naturalHeight:0}}},computed:{progressStyle:function(){return{width:this.progress+"%"}},sourceImgStyle:function(){var e=this.scale,i=this.sourceImgMasking;return{top:e.y+i.y+"px",left:e.x+i.x+"px",width:e.width+"px",height:e.height+"px"}},sourceImgMasking:function(){var e=this.width,i=this.height,p=this.ratio,o=this.sourceImgContainer,t=o,r=t.width/t.height,a=0,c=0,s=t.width,n=t.height,v=1;return p<r&&(v=t.height/i,s=t.height*p,a=(t.width-s)/2),p>r&&(v=t.width/e,n=t.width/p,c=(t.height-n)/2),{scale:v,x:a,y:c,width:s,height:n}},sourceImgShadeStyle:function(){var e=this.sourceImgContainer,i=this.sourceImgMasking;return{width:(i.width==e.width?i.width:(e.width-i.width)/2)+"px",height:(i.height==e.height?i.height:(e.height-i.height)/2)+"px"}},previewStyle:function(){var e=(this.width,this.height,this.ratio),i=this.previewContainer,p=i,o=p.width,t=p.height,r=o/t;return e<r&&(o=p.height*e),e>r&&(t=p.width/e),{width:o+"px",height:t+"px"}}},methods:{ripple:function(e){o(e)},off:function(){this.show=!1,this.$emit("close")},setStep:function(e){var i=this;setTimeout(function(){i.step=e},200)},preventDefault:function(e){return e.preventDefault(),!1},handleClick:function(e){1!==this.loading&&e.target!==this.$refs.fileinput&&(e.preventDefault(),document.activeElement!==this.$refs&&this.$refs.fileinput.click())},handleChange:function(e){if(e.preventDefault(),1!==this.loading){var i=e.target.files||e.dataTransfer.files;this.reset(),this.checkFile(i[0])&&this.setSourceImg(i[0])}},checkFile:function(e){var i=this,p=i.lang,o=i.maxSize;return-1===e.type.indexOf("image")?(i.hasError=!0,i.errorMsg=p.error.onlyImg,!1):(this.mime=e.type,!(e.size/1024>o)||(i.hasError=!0,i.errorMsg=p.error.outOfSize+o+"kb",!1))},reset:function(){var e=this;e.step=1,e.loading=0,e.hasError=!1,e.errorMsg="",e.progress=0},setSourceImg:function(e){var i=this,p=new FileReader;p.onload=function(e){i.sourceImgUrl=p.result,i.startCrop()},p.readAsDataURL(e)},startCrop:function(){var e=this,i=(e.width,e.height,e.ratio),p=e.scale,o=e.sourceImgUrl,t=e.sourceImgMasking,r=(e.lang,t),a=new Image;a.src=o,a.onload=function(){var o=a.naturalWidth,t=a.naturalHeight,c=o/t,s=r.width,n=r.height,v=0,l=0;i>c&&(n=s/c,l=(r.height-n)/2),i<c&&(s=n*c,v=(r.width-s)/2),p.range=0,p.x=v,p.y=l,p.width=s,p.height=n,p.minWidth=s,p.minHeight=n,p.maxWidth=o*r.scale,p.maxHeight=t*r.scale,p.naturalWidth=o,p.naturalHeight=t,e.sourceImg=a,e.createImg(),e.setStep(2)}},imgStartMove:function(e){var i=this.sourceImgMouseDown,p=this.scale,o=i;o.mX=e.screenX,o.mY=e.screenY,o.x=p.x,o.y=p.y,o.on=!0},imgMove:function(e){var i=this.sourceImgMouseDown,p=i.on,o=i.mX,t=i.mY,r=i.x,a=i.y,c=this.scale,s=this.sourceImgMasking,n=s,v=e.screenX,l=e.screenY,g=v-o,d=l-t,u=r+g,h=a+d;p&&(u>0&&(u=0),h>0&&(h=0),u<n.width-c.width&&(u=n.width-c.width),h<n.height-c.height&&(h=n.height-c.height),c.x=u,c.y=h)},startZoomAdd:function(e){function i(){if(o.zoomAddOn){var e=o.range>=100?100:++o.range;p.zoomImg(e),setTimeout(function(){i()},60)}}var p=this,o=p.scale;o.zoomAddOn=!0,i()},endZoomAdd:function(e){this.scale.zoomAddOn=!1},startZoomSub:function(e){function i(){if(o.zoomSubOn){var e=o.range<=0?0:--o.range;p.zoomImg(e),setTimeout(function(){i()},60)}}var p=this,o=p.scale;o.zoomSubOn=!0,i()},endZoomSub:function(e){this.scale.zoomSubOn=!1},zoomChange:function(e){this.zoomImg(e.target.value)},zoomImg:function(e){var i=this,p=this.sourceImgMasking,o=(this.sourceImgMouseDown,this.scale),t=o.maxWidth,r=o.maxHeight,a=o.minWidth,c=o.minHeight,s=o.width,n=o.height,v=o.x,l=o.y,g=(o.range,p),d=g.width,u=g.height,h=a+(t-a)*e/100,m=c+(r-c)*e/100,w=d/2-h/s*(d/2-v),b=u/2-m/n*(u/2-l);w>0&&(w=0),b>0&&(b=0),w<d-h&&(w=d-h),b<u-m&&(b=u-m),o.x=w,o.y=b,o.width=h,o.height=m,o.range=e,setTimeout(function(){o.range==e&&i.createImg()},300)},createImg:function(e){var i=this,p=i.mime,o=i.sourceImg,t=i.scale,r=t.x,a=t.y,c=t.width,s=t.height,n=i.sourceImgMasking.scale,v=i.$refs.canvas,l=v.getContext("2d");e&&(i.sourceImgMouseDown.on=!1),l.drawImage(o,r/n,a/n,c/n,s/n),i.createImgUrl=v.toDataURL(p)},upload:function(){var e=this,i=this.lang,p=this.imgFormat,o=this.mime,r=this.url,a=this.params,c=(this.headers,this.field),n=this.ki,l=this.createImgUrl,g=new FormData;g.append(c,t(l,o),c+"."+p),"object"==(void 0===a?"undefined":v()(a))&&a&&s()(a).forEach(function(e){g.append(e,a[e])}),e.reset(),e.loading=1,e.setStep(3),e.$emit("crop-success",l,c,n),Object(d.a)({url:r,method:"post",data:g}).then(function(i){e.loading=2,e.$emit("crop-upload-success",i.data)}).catch(function(p){e.value&&(e.loading=3,e.hasError=!0,e.errorMsg=i.fail,e.$emit("crop-upload-fail",p,c,n))})}}},b=function(){var e=this,i=e.$createElement,p=e._self._c||i;return p("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"vue-image-crop-upload"},[p("div",{staticClass:"vicp-wrap"},[p("div",{staticClass:"vicp-close",on:{click:e.off}},[p("i",{staticClass:"vicp-icon4"})]),e._v(" "),p("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],staticClass:"vicp-step1"},[p("div",{staticClass:"vicp-drop-area",on:{dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,click:e.handleClick,drop:e.handleChange}},[p("i",{directives:[{name:"show",rawName:"v-show",value:1!=e.loading,expression:"loading != 1"}],staticClass:"vicp-icon1"},[p("i",{staticClass:"vicp-icon1-arrow"}),e._v(" "),p("i",{staticClass:"vicp-icon1-body"}),e._v(" "),p("i",{staticClass:"vicp-icon1-bottom"})]),e._v(" "),p("span",{directives:[{name:"show",rawName:"v-show",value:1!==e.loading,expression:"loading !== 1"}],staticClass:"vicp-hint"},[e._v(e._s(e.lang.hint))]),e._v(" "),p("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSupported,expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[e._v(e._s(e.lang.noSupported))]),e._v(" "),p("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileinput",attrs:{type:"file"},on:{change:e.handleChange}})]),e._v(" "),p("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[p("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+"\n            ")]),e._v(" "),p("div",{staticClass:"vicp-operate"},[p("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.off))])])]),e._v(" "),2==e.step?p("div",{staticClass:"vicp-step2"},[p("div",{staticClass:"vicp-crop"},[p("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-left"},[p("div",{staticClass:"vicp-img-container"},[p("img",{ref:"img",staticClass:"vicp-img",style:e.sourceImgStyle,attrs:{src:e.sourceImgUrl,draggable:"false"},on:{drag:e.preventDefault,dragstart:e.preventDefault,dragend:e.preventDefault,dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,drop:e.preventDefault,mousedown:e.imgStartMove,mousemove:e.imgMove,mouseup:e.createImg,mouseout:e.createImg}}),e._v(" "),p("div",{staticClass:"vicp-img-shade vicp-img-shade-1",style:e.sourceImgShadeStyle}),e._v(" "),p("div",{staticClass:"vicp-img-shade vicp-img-shade-2",style:e.sourceImgShadeStyle})]),e._v(" "),p("div",{staticClass:"vicp-range"},[p("input",{attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:e.scale.range},on:{change:e.zoomChange}}),e._v(" "),p("i",{staticClass:"vicp-icon5",on:{mousedown:e.startZoomSub,mouseout:e.endZoomSub,mouseup:e.endZoomSub}}),e._v(" "),p("i",{staticClass:"vicp-icon6",on:{mousedown:e.startZoomAdd,mouseout:e.endZoomAdd,mouseup:e.endZoomAdd}})])]),e._v(" "),p("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-right"},[p("div",{staticClass:"vicp-preview"},[p("div",{staticClass:"vicp-preview-item"},[p("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),e._v(" "),p("span",[e._v(e._s(e.lang.preview))])]),e._v(" "),p("div",{staticClass:"vicp-preview-item"},[e.noCircle?e._e():p("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),e._v(" "),p("span",[e._v(e._s(e.lang.preview))])])])])]),e._v(" "),p("div",{staticClass:"vicp-operate"},[p("a",{on:{click:function(i){e.setStep(1)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),e._v(" "),p("a",{staticClass:"vicp-operate-btn",on:{click:e.upload,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.save))])])]):e._e(),e._v(" "),3==e.step?p("div",{staticClass:"vicp-step3"},[p("div",{staticClass:"vicp-upload"},[p("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-loading"},[e._v(e._s(e.lang.loading))]),e._v(" "),p("div",{staticClass:"vicp-progress-wrap"},[p("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-progress",style:e.progressStyle})]),e._v(" "),p("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[p("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+"\n                ")]),e._v(" "),p("div",{directives:[{name:"show",rawName:"v-show",value:2===e.loading,expression:"loading === 2"}],staticClass:"vicp-success"},[p("i",{staticClass:"vicp-icon3"}),e._v(" "+e._s(e.lang.success)+"\n                ")])]),e._v(" "),p("div",{staticClass:"vicp-operate"},[p("a",{on:{click:function(i){e.setStep(2)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),e._v(" "),p("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.close))])])]):e._e(),e._v(" "),p("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:e.width,height:e.height}})])])},f=[],x={render:b,staticRenderFns:f},k=x,y=p("VU/8"),_=r,C=y(w,k,!1,_,"data-v-0261c706",null),S=C.exports,I=p("kCe2"),z={name:"avatarUpload-demo",components:{ImageCropper:S,PanThumb:I.a},data:function(){return{imagecropperShow:!1,imagecropperKey:0,image:"https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"}},methods:{cropSuccess:function(e){this.imagecropperShow=!1,this.imagecropperKey=this.imagecropperKey+1,this.image=e.files.avatar},close:function(){this.imagecropperShow=!1}}},M=function(){var e=this,i=e.$createElement,p=e._self._c||i;return p("div",{staticClass:"components-container"},[e._m(0,!1,!1),e._v(" "),p("pan-thumb",{attrs:{image:e.image}}),e._v(" "),p("el-button",{staticStyle:{position:"absolute",bottom:"15px","margin-left":"40px"},attrs:{type:"primary",icon:"upload"},on:{click:function(i){e.imagecropperShow=!0}}},[e._v("修改头像\n  ")]),e._v(" "),p("image-cropper",{directives:[{name:"show",rawName:"v-show",value:e.imagecropperShow,expression:"imagecropperShow"}],key:e.imagecropperKey,attrs:{width:300,height:300,url:"https://httpbin.org/post"},on:{close:e.close,"crop-upload-success":e.cropSuccess}})],1)},D=[function(){var e=this,i=e.$createElement,p=e._self._c||i;return p("code",[e._v("这里核心代码用的是\n    "),p("a",{staticClass:"link-type",attrs:{href:"//github.com/dai-siki/vue-image-crop-upload"}},[e._v(" vue-image-crop-upload")]),e._v("\n    由于我在使用时它只有vue@1版本，而且有些业务的需求耦合到七牛等等原因吧，自己改造了一下，如果大家要使用的话，优先还是使用官方component\n  ")])}],N={render:M,staticRenderFns:D},O=N,U=p("VU/8"),E=a,j=U(z,O,!1,E,"data-v-d090c0e8",null);i.default=j.exports},AOts:function(e,i,p){i=e.exports=p("FZ+f")(!1),i.push([e.i,'@-webkit-keyframes vicp_progress{0%{background-position-y:0}to{background-position-y:40px}}@keyframes vicp_progress{0%{background-position-y:0}to{background-position-y:40px}}@-webkit-keyframes vicp{0%{opacity:0;-webkit-transform:scale(0) translatey(-60px);transform:scale(0) translatey(-60px)}to{opacity:1;-webkit-transform:scale(1) translatey(0);transform:scale(1) translatey(0)}}@keyframes vicp{0%{opacity:0;-webkit-transform:scale(0) translatey(-60px);transform:scale(0) translatey(-60px)}to{opacity:1;-webkit-transform:scale(1) translatey(0);transform:scale(1) translatey(0)}}.vue-image-crop-upload{width:100%;height:100%;background-color:rgba(0,0,0,.65);-webkit-tap-highlight-color:transparent;-moz-tap-highlight-color:transparent}.vue-image-crop-upload,.vue-image-crop-upload .vicp-wrap{position:fixed;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:10000;top:0;bottom:0;left:0;right:0}.vue-image-crop-upload .vicp-wrap{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.23);box-shadow:0 1px 3px 0 rgba(0,0,0,.23);margin:auto;width:600px;height:330px;padding:25px;background-color:#fff;border-radius:2px;-webkit-animation:vicp .12s ease-in;animation:vicp .12s ease-in}.vue-image-crop-upload .vicp-wrap .vicp-close{position:absolute;right:-30px;top:-30px}.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4{position:relative;display:block;width:30px;height:30px;cursor:pointer;-webkit-transition:-webkit-transform .18s;transition:-webkit-transform .18s;transition:transform .18s;transition:transform .18s,-webkit-transform .18s;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4:after,.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4:before{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.23);box-shadow:0 1px 3px 0 rgba(0,0,0,.23);content:"";position:absolute;top:12px;left:4px;width:20px;height:3px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);background-color:#fff}.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4:hover{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area{position:relative;padding:35px;height:200px;background-color:rgba(0,0,0,.03);text-align:center;border:1px dashed rgba(0,0,0,.08);overflow:hidden}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1{display:block;margin:0 auto 6px;width:42px;height:42px;overflow:hidden}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-arrow{display:block;margin:0 auto;width:0;height:0;border-bottom:14.7px solid rgba(0,0,0,.3);border-left:14.7px solid transparent;border-right:14.7px solid transparent}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-body{display:block;width:12.6px;height:14.7px;margin:0 auto;background-color:rgba(0,0,0,.3)}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-bottom{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;height:12.6px;border:6px solid rgba(0,0,0,.3);border-top:none}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-hint{display:block;padding:15px;font-size:14px;color:#666;line-height:30px}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-no-supported-hint{display:block;position:absolute;top:0;left:0;padding:30px;width:100%;height:60px;line-height:30px;background-color:#eee;text-align:center;color:#666;font-size:14px}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area:hover{cursor:pointer;border-color:rgba(0,0,0,.1);background-color:rgba(0,0,0,.05)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop{overflow:hidden}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left{float:left}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container{position:relative;display:block;width:240px;height:180px;background-color:#e5e5e0;overflow:hidden}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img{position:absolute;display:block;cursor:move;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade{-webkit-box-shadow:0 2px 6px 0 rgba(0,0,0,.18);box-shadow:0 2px 6px 0 rgba(0,0,0,.18);position:absolute;background-color:hsla(210,8%,95%,.8)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade.vicp-img-shade-1{top:0;left:0}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade.vicp-img-shade-2{bottom:0;right:0}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range{position:relative;margin:30px 0;width:240px;height:18px}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5,.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6{position:absolute;top:0;width:18px;height:18px;border-radius:100%;background-color:rgba(0,0,0,.08)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5:hover,.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6:hover{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.12);cursor:pointer;background-color:rgba(0,0,0,.14)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5{left:0}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5:before{position:absolute;content:"";display:block;left:3px;top:8px;width:12px;height:2px;background-color:#fff}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6{right:0}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6:before{position:absolute;content:"";display:block;left:3px;top:8px;width:12px;height:2px;background-color:#fff}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6:after{position:absolute;content:"";display:block;top:3px;left:8px;width:2px;height:12px;background-color:#fff}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]{display:block;padding-top:5px;margin:0 auto;width:180px;height:8px;vertical-align:top;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus{outline:none}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-webkit-slider-thumb{-webkit-box-shadow:0 2px 6px 0 rgba(0,0,0,.18);box-shadow:0 2px 6px 0 rgba(0,0,0,.18);-webkit-appearance:none;appearance:none;margin-top:-3px;width:12px;height:12px;background-color:#61c091;border-radius:100%;border:none;-webkit-transition:.2s;transition:.2s}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-moz-range-thumb{box-shadow:0 2px 6px 0 rgba(0,0,0,.18);-moz-appearance:none;appearance:none;width:12px;height:12px;background-color:#61c091;border-radius:100%;border:none;-webkit-transition:.2s;transition:.2s}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-thumb{box-shadow:0 2px 6px 0 rgba(0,0,0,.18);appearance:none;width:12px;height:12px;background-color:#61c091;border:none;border-radius:100%;-webkit-transition:.2s;transition:.2s}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 3px 0 rgba(0,0,0,.23);width:14px;height:14px}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:active::-ms-thumb{box-shadow:0 1px 3px 0 rgba(0,0,0,.23);width:14px;height:14px}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:active::-webkit-slider-thumb{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.23);box-shadow:0 1px 3px 0 rgba(0,0,0,.23);margin-top:-4px;width:14px;height:14px}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-webkit-slider-runnable-track{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.12);width:100%;height:6px;cursor:pointer;border-radius:2px;border:none;background-color:rgba(68,170,119,.3)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-moz-range-track{box-shadow:0 1px 3px 0 rgba(0,0,0,.12);width:100%;height:6px;cursor:pointer;border-radius:2px;border:none;background-color:rgba(68,170,119,.3)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-track{box-shadow:0 1px 3px 0 rgba(0,0,0,.12);width:100%;cursor:pointer;background:transparent;border-color:transparent;color:transparent;height:6px;border-radius:2px;border:none}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-fill-lower{background-color:rgba(68,170,119,.3)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-fill-upper{background-color:rgba(68,170,119,.15)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-webkit-slider-runnable-track{background-color:rgba(68,170,119,.5)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-moz-range-track{background-color:rgba(68,170,119,.5)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-ms-fill-lower{background-color:rgba(68,170,119,.45)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-ms-fill-upper{background-color:rgba(68,170,119,.25)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right{float:right}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview{height:150px;overflow:hidden}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item{position:relative;padding:5px;width:100px;height:100px;float:left;margin-right:16px}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item span{position:absolute;bottom:-30px;width:100%;font-size:14px;color:#bbb;display:block;text-align:center}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item img{position:absolute;display:block;top:0;bottom:0;left:0;right:0;margin:auto;padding:3px;background-color:#fff;border:1px solid rgba(0,0,0,.15);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item:last-child{margin-right:0}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item:last-child img{border-radius:100%}.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload{position:relative;padding:35px;height:200px;background-color:rgba(0,0,0,.03);text-align:center;border:1px dashed #ddd}.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-loading{display:block;padding:15px;font-size:16px;color:#999;line-height:30px}.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap{margin-top:12px;background-color:rgba(0,0,0,.08);border-radius:3px}.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap .vicp-progress{position:relative;display:block;height:5px;border-radius:3px;background-color:#4a7;-webkit-box-shadow:0 2px 6px 0 rgba(68,170,119,.3);box-shadow:0 2px 6px 0 rgba(68,170,119,.3);-webkit-transition:width .15s linear;transition:width .15s linear;background-image:-webkit-linear-gradient(135deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent);background-image:linear-gradient(-45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent);background-size:40px 40px;-webkit-animation:vicp_progress .5s linear infinite;animation:vicp_progress .5s linear infinite}.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap .vicp-progress:after{content:"";position:absolute;display:block;top:-3px;right:-3px;width:9px;height:9px;border:1px solid rgba(245,246,247,.7);-webkit-box-shadow:0 1px 4px 0 rgba(68,170,119,.7);box-shadow:0 1px 4px 0 rgba(68,170,119,.7);border-radius:100%;background-color:#4a7}.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-error,.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-success{height:100px;line-height:100px}.vue-image-crop-upload .vicp-wrap .vicp-operate{position:absolute;right:20px;bottom:20px}.vue-image-crop-upload .vicp-wrap .vicp-operate a{position:relative;float:left;display:block;margin-left:10px;width:100px;height:36px;line-height:36px;text-align:center;cursor:pointer;font-size:14px;color:#4a7;border-radius:2px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-image-crop-upload .vicp-wrap .vicp-operate a:hover{background-color:rgba(0,0,0,.03)}.vue-image-crop-upload .vicp-wrap .vicp-error,.vue-image-crop-upload .vicp-wrap .vicp-success{display:block;font-size:14px;line-height:24px;height:24px;color:#d10;text-align:center;vertical-align:top}.vue-image-crop-upload .vicp-wrap .vicp-success{color:#4a7}.vue-image-crop-upload .vicp-wrap .vicp-icon3{position:relative;display:inline-block;width:20px;height:20px;top:4px}.vue-image-crop-upload .vicp-wrap .vicp-icon3:after{position:absolute;top:3px;left:6px;width:6px;height:10px;border-width:0 2px 2px 0;border-color:#4a7;border-style:solid;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);content:""}.vue-image-crop-upload .vicp-wrap .vicp-icon2{position:relative;display:inline-block;width:20px;height:20px;top:4px}.vue-image-crop-upload .vicp-wrap .vicp-icon2:after,.vue-image-crop-upload .vicp-wrap .vicp-icon2:before{content:"";position:absolute;top:9px;left:4px;width:13px;height:2px;background-color:#d10;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.vue-image-crop-upload .vicp-wrap .vicp-icon2:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.e-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.e-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}',""])},FRl2:function(e,i,p){var o=p("ncpQ");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);p("rjj0")("dce05252",o,!0)},H7No:function(e,i,p){var o=p("0jFj");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);p("rjj0")("219b1185",o,!0)},ncpQ:function(e,i,p){i=e.exports=p("FZ+f")(!1),i.i(p("AOts"),""),i.push([e.i,"",""])}});