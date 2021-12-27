(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3da817e7"],{3006:function(t,e,i){},ba69:function(t,e,i){},cb3e:function(t,e,i){"use strict";i("3006")},e6e2:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("Add")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loasing-text":"Loading",border:"",fit:"","height-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"ID",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.productId))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"Image",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.$getImage(e.row.productImg),fit:"cover"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.productTitle))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"Size",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.productSize[0]+" - "+e.row.productSize[e.row.productSize.length-1]))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"Price",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.productPrice))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"CreateTime",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.parseTimeFn(e.row.createDate)))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"Actions",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(l)}}},[t._v("Edit")]),t._v(" "),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.handleDelete(l)}}},[t._v("Delete")])]}}])})],1),t._v(" "),i("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"/api/upload",multiple:""}},[i("i",{staticClass:"el-icon-upload"}),t._v(" "),i("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),i("em",[t._v("点击上传")])]),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])]),t._v(" "),i("el-dialog",{attrs:{res:"productDialog",title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},close:function(e){return t.$refs["editProduct"].closeDialog()}}},[i("edit-product",{ref:"editProduct",attrs:{temp:t.temp,dialogStatus:t.dialogStatus},on:{"update-list":t.updateList,"close-dialog":t.closeDialog}})],1)],1)},a=[],s=i("b775");function o(t){return Object(s["a"])({url:"getProduct",method:"get",params:t,baseURL:"/api/products"})}function r(t){return Object(s["a"])({url:"addProduct",method:"post",data:{productData:t},baseURL:"/api/products"})}function c(t){return Object(s["a"])({url:"deleteProduct",method:"post",data:{id:t},baseURL:"/api/products"})}var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-form",{ref:"dataForm",staticStyle:{"margin-left":"50px"},attrs:{"label-position":"right",model:t.temp,"label-width":"100px",rules:t.rules}},[i("el-form-item",{attrs:{label:"ID",prop:"productId"}},[i("el-input",{model:{value:t.temp.productId,callback:function(e){t.$set(t.temp,"productId",e)},expression:"temp.productId"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"Title",prop:"productTitle"}},[i("el-input",{model:{value:t.temp.productTitle,callback:function(e){t.$set(t.temp,"productTitle",e)},expression:"temp.productTitle"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"Price",prop:"productPrice"}},[i("el-input",{model:{value:t.temp.productPrice,callback:function(e){t.$set(t.temp,"productPrice",e)},expression:"temp.productPrice"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"Size"}},[i("el-slider",{attrs:{range:"",step:1,"show-stops":"",max:46,min:34},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"MainImg"}},[i("el-upload",{ref:"mainImg",attrs:{action:"/api/products/uploadImage","list-type":"picture-card",limit:1,"on-success":t.handleShowImgSuccess,"file-list":t.mainImg_list,"on-remove":t.handleRemove},scopedSlots:t._u([{key:"file",fn:function(e){var l=e.file;return i("div",{},[i("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:l.url,alt:""}}),t._v(" "),i("span",{staticClass:"el-upload-list__item-actions"},[i("span",{staticClass:"el-upload-list__item-preview",on:{click:function(e){return t.handlePictureCardPreview(l)}}},[i("i",{staticClass:"el-icon-zoom-in"})]),t._v(" "),t.disabled?t._e():i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(e){return t.handleRemove(l)}}},[i("i",{staticClass:"el-icon-delete"})])])])}}])},[i("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})])],1),t._v(" "),i("el-form-item",{attrs:{label:"SwiperImg"}},[i("el-upload",{ref:"swiperImg",attrs:{action:"/api/products/uploadImage","list-type":"picture-card",multiple:"","on-success":t.handleSwiperSuccess,"file-list":t.swiperImg_list},scopedSlots:t._u([{key:"file",fn:function(e){var l=e.file;return i("div",{},[i("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:l.url,alt:""}}),t._v(" "),i("span",{staticClass:"el-upload-list__item-actions"},[i("span",{staticClass:"el-upload-list__item-preview",on:{click:function(e){return t.handlePictureCardPreview(l)}}},[i("i",{staticClass:"el-icon-zoom-in"})]),t._v(" "),t.disabled?t._e():i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(e){return t.handleRemove(l)}}},[i("i",{staticClass:"el-icon-delete"})])])])}}])},[i("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})])],1),t._v(" "),i("el-form-item",{attrs:{label:"ColorImg"}},[i("el-upload",{ref:"colorImg",attrs:{action:"/api/products/uploadImage","list-type":"picture-card",multiple:"","on-success":t.handleColorSuccess,"file-list":t.colorImg_list},scopedSlots:t._u([{key:"file",fn:function(e){var l=e.file;return i("div",{},[i("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:l.url,alt:""}}),t._v(" "),i("span",{staticClass:"el-upload-list__item-actions color-img-warp"},[i("span",{staticClass:"el-upload-list__item-preview",on:{click:function(e){return t.handlePictureCardPreview(l)}}},[i("i",{staticClass:"el-icon-zoom-in"})]),t._v(" "),t.disabled?t._e():i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(e){return t.handleRemove(l)}}},[i("i",{staticClass:"el-icon-delete"})]),t._v(" "),i("el-input",{staticClass:"color-input",attrs:{placeholder:"请输入颜色"},model:{value:l.color,callback:function(e){t.$set(l,"color",e)},expression:"file.color"}})],1)])}}])},[i("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})])],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){return t.closeDialog()}}},[t._v("Cancel")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v("Confirm")])],1),t._v(" "),i("el-dialog",{attrs:{width:"400px",visible:t.dialogVisible,"append-to-body":!0},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},u=[],d=(i("ac6a"),{props:{temp:{},dialogStatus:""},data:function(){return{swiperFileList:[],colorFileList:[],dialogImageUrl:"",dialogVisible:!1,disabled:!1,size:[41,43],rules:{productId:[{required:!0,message:"请输入商品ID",trigger:"blur"}],productTitle:[{required:!0,message:"请输入商品标题",trigger:"blur"}],productPrice:[{required:!0,message:"请输入商品价格",trigger:"blur"}]}}},created:function(){},computed:{mainImg_list:function(){var t=[];return this.temp.productImg&&t.push({url:this.$getImage(this.temp.productImg)}),t},swiperImg_list:function(){var t=this,e=[];return this.temp.productSwiper&&this.temp.productSwiper.forEach((function(i,l){e.push({url:t.$getImage(i)})})),e},colorImg_list:function(){var t=this,e=[];return this.temp.productColor&&this.temp.productColor.forEach((function(i,l){e.push({url:t.$getImage(i.cImg),color:i.cTitle})})),e}},methods:{handleShowImgSuccess:function(t,e,i){this.temp.productImg=t.data},handleSwiperSuccess:function(t,e,i){this.swiperFileList=i,console.log(this.temp,i)},handleColorSuccess:function(t,e,i){this.colorFileList=i},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleRemove:function(t,e){console.log(t)},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){for(var i=0;i<t.swiperFileList.length;i++)t.temp.productSwiper.push(t.swiperFileList[i].response.data);for(var l=0;l<t.colorFileList.length;l++){var a={};a.cTitle=t.colorFileList[l].color,a.cImg=t.colorFileList[l].response.data,t.temp.productColor.push(a)}for(var s=t.size[0];s<t.size[1];s++)t.temp.productSize.push(s);var o=t.temp;r(o).then((function(e){t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3}),t.temp.createDate=new Date,t.$emit("update-list",t.temp),t.closeDialog()}))}}))},closeDialog:function(){this.$refs["mainImg"].clearFiles(),this.$refs["swiperImg"].clearFiles(),this.$refs["colorImg"].clearFiles(),this.$refs["dataForm"].clearValidate(),this.$emit("close-dialog")},updateData:function(){console.log("创建"),console.log(this.temp)},formatUrl:function(t){return t.substring(t.lastIndexOf("/")+1,t.length)}}}),p=d,m=(i("ff05"),i("2877")),f=Object(m["a"])(p,n,u,!1,null,"08cde8d0",null),g=f.exports,h=i("ed08"),_={data:function(){return{list:null,listLoading:!0,temp:{productId:"",productTitle:"",productPrice:null,productSwiper:[],productColor:[],productSize:[]},textMap:{update:"Edit",create:"Create"},dialogStatus:"",dialogFormVisible:!1}},components:{EditProduct:g},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,o().then((function(e){t.list=e.data,t.listLoading=!1}))},parseTimeFn:function(t){return Object(h["b"])(t,"{y}-{m}-{d} {h}:{i}")},resetTemp:function(){this.temp={productId:"",productTitle:"",productPrice:null,productSwiper:[],productColor:[],productSize:[]}},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(t){this.temp=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0},handleDelete:function(t){var e=this,i=t._id;this.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){c(i).then((function(i){e.$message({type:"success",message:"删除成功!"});var l=e.list.indexOf(t);e.list.splice(l,1)}))})).catch((function(){}))},updateList:function(t){this.list.push(t)},closeDialog:function(){this.dialogFormVisible=!1}}},v=_,b=(i("cb3e"),Object(m["a"])(v,l,a,!1,null,null,null));e["default"]=b.exports},ff05:function(t,e,i){"use strict";i("ba69")}}]);