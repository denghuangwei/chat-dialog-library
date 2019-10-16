module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4d47":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "624f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d53a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "64a4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "664e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_dialog_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("829b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_dialog_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_dialog_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_dialog_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6653":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "829b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8774":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_time_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4d47");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_time_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_time_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_time_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c319":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_system_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e8b0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_system_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_system_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_system_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d53a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "db9d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_dialog_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("64a4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_dialog_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_dialog_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_dialog_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e8b0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ee16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6653");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6213b37c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/index.vue?vue&type=template&id=0c975923&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('chat-dialog-header',{attrs:{"name":_vm.groupName || _vm.name}}),_c('div',{staticClass:"message-container"},[_vm._l((_vm.messages),function(item,index){return [_c('chat-item',{key:index,attrs:{"id":_vm.id,"messageItem":item,"showTime":_vm.needShowTime(index)}})]})],2),_c('chat-dialog-footer',{on:{"submit-message":_vm.addMessage}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/chat-dialog/src/index.vue?vue&type=template&id=0c975923&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6213b37c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/chat-item/index.vue?vue&type=template&id=6db68972&
var chat_itemvue_type_template_id_6db68972_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chat-item"},[_c('chat-time-info',_vm._b({},'chat-time-info',_vm.$attrs,false)),_c(_vm.messageView,_vm._g(_vm._b({tag:"component"},'component',_vm.$attrs,false),_vm.$listeners))],1)}
var chat_itemvue_type_template_id_6db68972_staticRenderFns = []


// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-item/index.vue?vue&type=template&id=6db68972&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6213b37c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/chat-item/chat-time-info.vue?vue&type=template&id=bc8045c6&
var chat_time_infovue_type_template_id_bc8045c6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.$attrs.showTime)?_c('div',{staticClass:"time"},[_vm._v(_vm._s(_vm._f("formatTime")(_vm.messageItem.createdTime))+"\n")]):_vm._e()}
var chat_time_infovue_type_template_id_bc8045c6_staticRenderFns = []


// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-item/chat-time-info.vue?vue&type=template&id=bc8045c6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/chat-item/chat-time-info.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var chat_time_infovue_type_script_lang_js_ = ({
  name: 'chat-time-info',
  computed: {
    messageItem() {
      return this.$attrs.messageItem || {}
    }
  },
  filters: {
    formatTime(value) {
      if (typeof value !== 'number') {
        return ''
      }
      value = new Date(value)
      const year  = value.getFullYear()
      const month = value.getMonth()
      const day = value.getDate()
      let hour = value.getHours()
      let minute = value.getMinutes()
      let ext = 'AM'
      if (minute > 0 && hour > 12) {
        hour-=12
        ext = 'PM'
      }
      if (minute < 10) {
        minute = `0${minute}`
      }
      const mongthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      return `${mongthList[month]} ${day}, ${year} ${hour}:${minute} ${ext}`
    }
  }
});

// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-item/chat-time-info.vue?vue&type=script&lang=js&
 /* harmony default export */ var chat_item_chat_time_infovue_type_script_lang_js_ = (chat_time_infovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/chat-dialog/src/chat-item/chat-time-info.vue?vue&type=style&index=0&lang=css&
var chat_time_infovue_type_style_index_0_lang_css_ = __webpack_require__("8774");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-item/chat-time-info.vue






/* normalize component */

var component = normalizeComponent(
  chat_item_chat_time_infovue_type_script_lang_js_,
  chat_time_infovue_type_template_id_bc8045c6_render,
  chat_time_infovue_type_template_id_bc8045c6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var chat_time_info = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6213b37c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/chat-item/chat-system-info.vue?vue&type=template&id=93292906&
var chat_system_infovue_type_template_id_93292906_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.messageItem.type==='system')?_c('div',{staticClass:"system-message"},[_vm._v(_vm._s(_vm.messageItem.message))]):_vm._e()}
var chat_system_infovue_type_template_id_93292906_staticRenderFns = []


// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-item/chat-system-info.vue?vue&type=template&id=93292906&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/chat-item/chat-system-info.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var chat_system_infovue_type_script_lang_js_ = ({
  name: 'chat-system-info',
  computed: {
    messageItem() {
      return this.$attrs.messageItem || {}
    }
  }
});

// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-item/chat-system-info.vue?vue&type=script&lang=js&
 /* harmony default export */ var chat_item_chat_system_infovue_type_script_lang_js_ = (chat_system_infovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/chat-dialog/src/chat-item/chat-system-info.vue?vue&type=style&index=0&lang=css&
var chat_system_infovue_type_style_index_0_lang_css_ = __webpack_require__("c319");

// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-item/chat-system-info.vue






/* normalize component */

var chat_system_info_component = normalizeComponent(
  chat_item_chat_system_infovue_type_script_lang_js_,
  chat_system_infovue_type_template_id_93292906_render,
  chat_system_infovue_type_template_id_93292906_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var chat_system_info = (chat_system_info_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6213b37c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/chat-item/chat-user-info.vue?vue&type=template&id=4f53ace2&
var chat_user_infovue_type_template_id_4f53ace2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.messageItem)?_c('div',{staticClass:"chat-flex-item",class:{ owner: _vm.isOwner }},[_c('div',{staticClass:"profile"},[_vm._v(_vm._s(_vm.messageItem.name))]),(_vm.messageItem.type==='text')?_c('div',{class:{ 'message-right': _vm.isOwner, 'message-left': !_vm.isOwner }},[_vm._v(_vm._s(_vm.messageItem.message))]):_c('div',{staticClass:"image-container"},[_c('img',{attrs:{"src":_vm.messageItem.message,"alt":"not found"}})])]):_vm._e()}
var chat_user_infovue_type_template_id_4f53ace2_staticRenderFns = []


// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-item/chat-user-info.vue?vue&type=template&id=4f53ace2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/chat-item/chat-user-info.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var chat_user_infovue_type_script_lang_js_ = ({
    name: 'chat-user-info',
    computed: {
        messageItem() {
          return this.$attrs.messageItem || {}
        },
        isOwner() {
            return this.$attrs.id === this.messageItem.id
        }
    }
});

// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-item/chat-user-info.vue?vue&type=script&lang=js&
 /* harmony default export */ var chat_item_chat_user_infovue_type_script_lang_js_ = (chat_user_infovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/chat-dialog/src/chat-item/chat-user-info.vue?vue&type=style&index=0&lang=css&
var chat_user_infovue_type_style_index_0_lang_css_ = __webpack_require__("ee16");

// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-item/chat-user-info.vue






/* normalize component */

var chat_user_info_component = normalizeComponent(
  chat_item_chat_user_infovue_type_script_lang_js_,
  chat_user_infovue_type_template_id_4f53ace2_render,
  chat_user_infovue_type_template_id_4f53ace2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var chat_user_info = (chat_user_info_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/chat-item/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var chat_itemvue_type_script_lang_js_ = ({
  name: 'chat-item',
  components: {
    ChatTimeInfo: chat_time_info,
    ChatSystemInfo: chat_system_info,
    ChatUserInfo: chat_user_info
  },
  computed: {
    messageView() {
      const type = this.$attrs.messageItem.type
      switch(type) {
        case 'system':
          return 'chat-system-info'
        case 'text':
        case 'image':
          return 'chat-user-info'
        default:
          return 'chat-user-info'
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-item/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_chat_itemvue_type_script_lang_js_ = (chat_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-item/index.vue





/* normalize component */

var chat_item_component = normalizeComponent(
  src_chat_itemvue_type_script_lang_js_,
  chat_itemvue_type_template_id_6db68972_render,
  chat_itemvue_type_template_id_6db68972_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var chat_item = (chat_item_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6213b37c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/chat-dialog-header.vue?vue&type=template&id=01ac459d&
var chat_dialog_headervue_type_template_id_01ac459d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chat-dialog-header"},[_vm._v("\n  "+_vm._s(_vm.name)+"\n")])}
var chat_dialog_headervue_type_template_id_01ac459d_staticRenderFns = []


// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-dialog-header.vue?vue&type=template&id=01ac459d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/chat-dialog-header.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var chat_dialog_headervue_type_script_lang_js_ = ({
    name: 'chat-dialog-header',
    props: {
        name: {
            type: String,
            required: true
        }
    }
});

// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-dialog-header.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_chat_dialog_headervue_type_script_lang_js_ = (chat_dialog_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/chat-dialog/src/chat-dialog-header.vue?vue&type=style&index=0&lang=css&
var chat_dialog_headervue_type_style_index_0_lang_css_ = __webpack_require__("db9d");

// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-dialog-header.vue






/* normalize component */

var chat_dialog_header_component = normalizeComponent(
  src_chat_dialog_headervue_type_script_lang_js_,
  chat_dialog_headervue_type_template_id_01ac459d_render,
  chat_dialog_headervue_type_template_id_01ac459d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var chat_dialog_header = (chat_dialog_header_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6213b37c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/chat-dialog-footer.vue?vue&type=template&id=33351a5c&
var chat_dialog_footervue_type_template_id_33351a5c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chat-dialog-footer"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.message),expression:"message"}],attrs:{"type":"text","name":"message-box"},domProps:{"value":(_vm.message)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.submit($event)},"input":function($event){if($event.target.composing){ return; }_vm.message=$event.target.value}}}),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.type),expression:"type"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.type=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"text"}},[_vm._v("text")]),_c('option',{attrs:{"value":"image"}},[_vm._v("image")])])])}
var chat_dialog_footervue_type_template_id_33351a5c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-dialog-footer.vue?vue&type=template&id=33351a5c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/chat-dialog-footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var chat_dialog_footervue_type_script_lang_js_ = ({
    name: 'chat-dialog-footer',
    data() {
        return {
            message: '',
            type: 'text'
        }
    },
    methods: {
        submit() {
            if (!this.message) {
                return
            }
            this.$emit('submit-message', { message: this.message, type: this.type })
            this.message= ''
        }
    }
});

// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-dialog-footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_chat_dialog_footervue_type_script_lang_js_ = (chat_dialog_footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/chat-dialog/src/chat-dialog-footer.vue?vue&type=style&index=0&lang=css&
var chat_dialog_footervue_type_style_index_0_lang_css_ = __webpack_require__("664e");

// CONCATENATED MODULE: ./packages/chat-dialog/src/chat-dialog-footer.vue






/* normalize component */

var chat_dialog_footer_component = normalizeComponent(
  src_chat_dialog_footervue_type_script_lang_js_,
  chat_dialog_footervue_type_template_id_33351a5c_render,
  chat_dialog_footervue_type_template_id_33351a5c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var chat_dialog_footer = (chat_dialog_footer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chat-dialog/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var srcvue_type_script_lang_js_ = ({
    name: 'chat-dialog',
    components: {
        ChatItem: chat_item,
        ChatDialogFooter: chat_dialog_footer,
        ChatDialogHeader: chat_dialog_header
    },
    props: {
        id: {
            type: String,
            required: true,
            validator(v) {
                return v && v.trim() !== ''
            }
        },
        name: {
            type: String
        },
        messages: {
            type: Array,
            required: true,
            default() {
                return [{
                    name: '',
                    id: '',
                    message: '',
                    type: ''
                }]
            }
        },
        groupName: {
            type: String
        }
    },
    methods: {
        addMessage(item) {
            this.$emit('submit-message-item', {
                id: this.id,
                name: this.name,
                message: item.message,
                type: item.type,
                createdTime: Date.now()
            })
        },
        needShowTime(i) {
            if (i === 0) {
                return true
            }

            const currentItemTime = this.messages[i].createdTime
            const prevItemTime = this.messages[i-1].createdTime

            if (currentItemTime - prevItemTime > 1000 * 60) {
                return true
            }

            return false
        }
    },
    watch: {
        messages: {
            deep: true,
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    scrollTo(0, document.body.scrollHeight)
                })
            }
        }
    }
});

// CONCATENATED MODULE: ./packages/chat-dialog/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var chat_dialog_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/chat-dialog/src/index.vue?vue&type=style&index=0&lang=css&
var srcvue_type_style_index_0_lang_css_ = __webpack_require__("624f");

// CONCATENATED MODULE: ./packages/chat-dialog/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  chat_dialog_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src = (src_component.exports);
// CONCATENATED MODULE: ./packages/chat-dialog/index.js


src.install = function (Vue) {
    Vue.component(src.name, src)
}

/* harmony default export */ var chat_dialog = (src);

// CONCATENATED MODULE: ./packages/index.js


const components = [
    chat_dialog
]

const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
    install,
    ChatDialog: chat_dialog
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=chatDialogLibrary.common.js.map