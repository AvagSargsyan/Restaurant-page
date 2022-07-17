/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/bg-image(credit:lily-banse).jpg */ "./src/assets/images/bg-image(credit:lily-banse).jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), rgb(248, 243, 238);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    height: 100%;\n}\n\nli {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\n/* header-start */\n#header {\n    height: 7%;\n    background-color: #fff;\n    padding: .6rem 4rem;\n    display: flex;\n    align-items: center;\n}\n\n#header ul {\n    display: flex;\n    gap: 2rem;\n}\n\n#header ul li {\n    font-size: 1.2rem;\n    padding: 1rem;\n}\n\n#header ul li:hover {\n    background-color: rgb(224, 110, 34);\n    color: white;\n    cursor: pointer;\n    border-radius: .4rem;\n}\n\n#header .logo {\n    flex: 1;\n}\n/* header-end */\n\n/* main-start */\n/* add an animation for content */\n@keyframes moveDown {\n    from {\n        transform: translateY(-50px);\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n#main {\n    height: 93%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    color: #fff;\n    background-color: rgba(8, 8, 8, 0.514);\n}\n\n#main-content {\n    padding: 0 5rem;\n    flex: 1;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    justify-content: center;\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n}\n\n#main-content h1 {\n    font-size: 4.4rem;\n}\n\n#main-content p {\n    font-size: 1.3rem;\n}\n\n#main-content button {\n    color: #fff;\n    padding: 1em 1.8em;\n    font-weight: bold;\n    font-size: 1rem;\n    background-color: rgb(240, 87, 26);\n    border: none;\n    border-radius: .4rem;\n}\n\n#main-content button:hover {\n    background-color: rgb(163, 62, 22);\n}\n/* main-end */\n\n/* footer-start */\n#footer {\n    width: 100%;\n    font-size: .8rem;\n    display: flex;\n    align-items: center;\n    gap: .4rem;\n    justify-content: flex-end;\n    padding-right: .8rem;\n}\n/* footer-end */\n\n/* menu-start */\n#menu-container {\n    padding: 1rem;\n    display: grid;\n    grid-template: 1fr 9fr / 1fr;\n    height: 93%;\n    background-color: rgba(8, 8, 8, 0.719);\n    color: #fff;\n}\n\n#menu-container h1 {\n    font-size: 3rem;\n    text-align: center;\n    margin: 0;\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n    text-decoration: underline;\n    text-decoration-color: rgb(240, 87, 26);\n    text-decoration-thickness: 2px;\n    text-underline-offset: .6rem;\n}\n\n#menu-item-container {\n    text-align: center;\n    color: #fff;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n}\n\n#menu-item-container > div {\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n}\n\n#menu-item-container > div > h2 {\n    font-size: 2.6rem;\n    color: rgb(240, 87, 26);\n}\n\n\n#menu-item-container > div > p {\n    font-size: 1.4rem;\n    line-height: 1.6rem;\n}\n/* menu-end */\n\n/* contact-start */\n#contact-container {\n    padding: 1rem;\n    display: grid;\n    grid-template: 1fr 9fr / 1fr;\n    height: 93%;\n    background-color: rgba(8, 8, 8, 0.719);\n    color: #fff;\n    gap: 1rem;\n}\n\n#contact-container h1 {\n    font-size: 3rem;\n    text-align: center;\n    margin: 0;\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n    text-decoration: underline;\n    text-decoration-color: rgb(240, 87, 26);\n    text-decoration-thickness: 2px;\n    text-underline-offset: .6rem;\n}\n\n#contact-content {\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n    padding: 3rem 10rem 0 10rem;\n    font-size: 1.1rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n}\n\n#contact-info {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n#contact-info > div {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n#contact-info p {\n    display: inline;\n}\n\n/* contact-form-start */\n#contact-content > form {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 2rem;\n    align-items: stretch;\n}\n\n\n#contact-content > form > #form-fields {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 2rem;\n    align-items: stretch;\n}\n\n#contact-content > form > #form-fields > div > label {\n\n    font-size: .9rem;\n}\n\n#contact-content > form > #form-fields > div {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: stretch;\n    gap: .2rem;\n}\n\n#contact-content > form > #form-fields > div > input {\n    height: 2.6rem;\n    padding: 0.8rem;\n    font-size: 1.2rem;\n    background-color: rgba(255, 255, 255, 0);\n    border: 1px solid rgb(161, 160, 160);\n    border-radius: 4px;\n    color: #fff;\n}\n\n#contact-content > form > #form-fields > div > input:focus {\n    outline: none !important;\n    border:1px solid rgb(240, 87, 26);\n}\n\n#contact-content > form > #form-fields > div > input[type=\"textfield\"] {\n    height: 5rem;\n}\n\n#contact-content #message {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n#contact-content > form > input[type=\"submit\"] {\n    align-self: flex-start;\n    color: #fff;\n    padding: .8em 1.6em;\n    font-weight: bold;\n    font-size: 1rem;\n    background-color: rgb(240, 87, 26);\n    border: none;\n    border-radius: .4rem;\n}\n\n#contact-content > form > input[type=\"submit\"]:hover {\n    background-color: rgb(163, 62, 22);\n}\n/* contact-form-end */\n\n/* contact-end */\n\n@media (max-width: 600px) {\n    body {\n        background-repeat: repeat;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    background: url('./assets/images/bg-image\\(credit:lily-banse\\).jpg'), rgb(248, 243, 238);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    height: 100%;\n}\n\nli {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\n/* header-start */\n#header {\n    height: 7%;\n    background-color: #fff;\n    padding: .6rem 4rem;\n    display: flex;\n    align-items: center;\n}\n\n#header ul {\n    display: flex;\n    gap: 2rem;\n}\n\n#header ul li {\n    font-size: 1.2rem;\n    padding: 1rem;\n}\n\n#header ul li:hover {\n    background-color: rgb(224, 110, 34);\n    color: white;\n    cursor: pointer;\n    border-radius: .4rem;\n}\n\n#header .logo {\n    flex: 1;\n}\n/* header-end */\n\n/* main-start */\n/* add an animation for content */\n@keyframes moveDown {\n    from {\n        transform: translateY(-50px);\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n#main {\n    height: 93%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    color: #fff;\n    background-color: rgba(8, 8, 8, 0.514);\n}\n\n#main-content {\n    padding: 0 5rem;\n    flex: 1;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    justify-content: center;\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n}\n\n#main-content h1 {\n    font-size: 4.4rem;\n}\n\n#main-content p {\n    font-size: 1.3rem;\n}\n\n#main-content button {\n    color: #fff;\n    padding: 1em 1.8em;\n    font-weight: bold;\n    font-size: 1rem;\n    background-color: rgb(240, 87, 26);\n    border: none;\n    border-radius: .4rem;\n}\n\n#main-content button:hover {\n    background-color: rgb(163, 62, 22);\n}\n/* main-end */\n\n/* footer-start */\n#footer {\n    width: 100%;\n    font-size: .8rem;\n    display: flex;\n    align-items: center;\n    gap: .4rem;\n    justify-content: flex-end;\n    padding-right: .8rem;\n}\n/* footer-end */\n\n/* menu-start */\n#menu-container {\n    padding: 1rem;\n    display: grid;\n    grid-template: 1fr 9fr / 1fr;\n    height: 93%;\n    background-color: rgba(8, 8, 8, 0.719);\n    color: #fff;\n}\n\n#menu-container h1 {\n    font-size: 3rem;\n    text-align: center;\n    margin: 0;\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n    text-decoration: underline;\n    text-decoration-color: rgb(240, 87, 26);\n    text-decoration-thickness: 2px;\n    text-underline-offset: .6rem;\n}\n\n#menu-item-container {\n    text-align: center;\n    color: #fff;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n}\n\n#menu-item-container > div {\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n}\n\n#menu-item-container > div > h2 {\n    font-size: 2.6rem;\n    color: rgb(240, 87, 26);\n}\n\n\n#menu-item-container > div > p {\n    font-size: 1.4rem;\n    line-height: 1.6rem;\n}\n/* menu-end */\n\n/* contact-start */\n#contact-container {\n    padding: 1rem;\n    display: grid;\n    grid-template: 1fr 9fr / 1fr;\n    height: 93%;\n    background-color: rgba(8, 8, 8, 0.719);\n    color: #fff;\n    gap: 1rem;\n}\n\n#contact-container h1 {\n    font-size: 3rem;\n    text-align: center;\n    margin: 0;\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n    text-decoration: underline;\n    text-decoration-color: rgb(240, 87, 26);\n    text-decoration-thickness: 2px;\n    text-underline-offset: .6rem;\n}\n\n#contact-content {\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n    padding: 3rem 10rem 0 10rem;\n    font-size: 1.1rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n}\n\n#contact-info {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 1rem;\n}\n\n#contact-info > div {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n#contact-info p {\n    display: inline;\n}\n\n/* contact-form-start */\n#contact-content > form {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 2rem;\n    align-items: stretch;\n}\n\n\n#contact-content > form > #form-fields {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 2rem;\n    align-items: stretch;\n}\n\n#contact-content > form > #form-fields > div > label {\n\n    font-size: .9rem;\n}\n\n#contact-content > form > #form-fields > div {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: stretch;\n    gap: .2rem;\n}\n\n#contact-content > form > #form-fields > div > input {\n    height: 2.6rem;\n    padding: 0.8rem;\n    font-size: 1.2rem;\n    background-color: rgba(255, 255, 255, 0);\n    border: 1px solid rgb(161, 160, 160);\n    border-radius: 4px;\n    color: #fff;\n}\n\n#contact-content > form > #form-fields > div > input:focus {\n    outline: none !important;\n    border:1px solid rgb(240, 87, 26);\n}\n\n#contact-content > form > #form-fields > div > input[type=\"textfield\"] {\n    height: 5rem;\n}\n\n#contact-content #message {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n#contact-content > form > input[type=\"submit\"] {\n    align-self: flex-start;\n    color: #fff;\n    padding: .8em 1.6em;\n    font-weight: bold;\n    font-size: 1rem;\n    background-color: rgb(240, 87, 26);\n    border: none;\n    border-radius: .4rem;\n}\n\n#contact-content > form > input[type=\"submit\"]:hover {\n    background-color: rgb(163, 62, 22);\n}\n/* contact-form-end */\n\n/* contact-end */\n\n@media (max-width: 600px) {\n    body {\n        background-repeat: repeat;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactPage": () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _assets_icons_location_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/icons/location.svg */ "./src/assets/icons/location.svg");
/* harmony import */ var _assets_icons_clock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/clock.svg */ "./src/assets/icons/clock.svg");
/* harmony import */ var _assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/phone.svg */ "./src/assets/icons/phone.svg");
/* harmony import */ var _assets_icons_message_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/message.svg */ "./src/assets/icons/message.svg");





function createContactPage() {
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact-container');

    const contactHeading = document.createElement('h1');
    contactHeading.innerText = 'Contact us';

    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contact-content');

    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('id', 'contact-info');

    // address
    const locationIcon = new Image();
    locationIcon.src = _assets_icons_location_svg__WEBPACK_IMPORTED_MODULE_0__;

    const address = document.createElement('div');
    address.appendChild(locationIcon);
    const addressText = document.createElement('p');
    addressText.innerHTML = '2865 Washington Street <br>Beaverton, CA 20134'
    address.appendChild(addressText);
    
    // hoursOpen
    const clockIcon = new Image();
    clockIcon.src = _assets_icons_clock_svg__WEBPACK_IMPORTED_MODULE_1__;

    const hoursOpen = document.createElement('div');
    hoursOpen.appendChild(clockIcon);
    const hoursOpenText = document.createElement('p');
    hoursOpenText.innerHTML = 'Mon - Thurs: 8am - 8pm <br>Fri - Sun: 8am - 11pm';
    hoursOpen.appendChild(hoursOpenText);

    // phone
    const phoneIcon = new Image();
    phoneIcon.src = _assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_2__;

    const phone = document.createElement('div');
    phone.appendChild(phoneIcon);
    const phoneText = document.createElement('p');
    phoneText.innerText = '(223)-880 5155';
    phone.appendChild(phoneText);

    
    // contactInfo children
    contactInfo.appendChild(address);
    contactInfo.appendChild(hoursOpen);
    contactInfo.appendChild(phone);
    
    // form
    // message us
    const messageIcon = new Image();
    messageIcon.src = _assets_icons_message_svg__WEBPACK_IMPORTED_MODULE_3__;

    const message = document.createElement('div');
    message.appendChild(messageIcon);
    const messageText = document.createElement('p');
    messageText.innerText = 'Message us';
    message.setAttribute('id', 'message');
    message.appendChild(messageText);

    const contactForm = document.createElement('form');
    contactForm.setAttribute('action', '#');
    
    // fullName
    const nameContainer = document.createElement('div');
    const fullNameLabel = document.createElement('label');
    fullNameLabel.innerText = 'FULL NAME';
    fullNameLabel.setAttribute('for', 'full-name');

    const fullNameInput = document.createElement('input');
    fullNameInput.setAttribute('type', 'text');
    fullNameInput.setAttribute('id', 'full-name');
    fullNameInput.setAttribute('name', 'fullName');
    fullNameInput.setAttribute('placeholder', 'full name');
    nameContainer.appendChild(fullNameLabel);
    nameContainer.appendChild(fullNameInput);

    // email
    const emailContainer = document.createElement('div');
    const emailLabel = document.createElement('label');
    emailLabel.innerText = 'EMAIL';
    emailLabel.setAttribute('for', 'email');

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('placeholder', 'email');
    emailContainer.appendChild(emailLabel);
    emailContainer.appendChild(emailInput);

    // messageInput
    const messageContainer = document.createElement('div');
    const messageLabel = document.createElement('label');
    messageLabel.innerText = 'MESSAGE';
    messageLabel.setAttribute('for', 'message');

    const messageInput = document.createElement('input');
    messageInput.setAttribute('type', 'textfield');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('name', 'message');
    messageInput.setAttribute('placeholder', 'Your message');
    messageContainer.appendChild(messageLabel);
    messageContainer.appendChild(messageInput);

    // submit button
    const sendBtn = document.createElement('input');
    sendBtn.setAttribute('type', 'submit');
    sendBtn.setAttribute('value', 'Send');

    const formElements = document.createElement('div');
    formElements.setAttribute('id', 'form-fields');

    formElements.appendChild(nameContainer);
    formElements.appendChild(emailContainer);
    formElements.appendChild(messageContainer);
    // form children
    contactForm.appendChild(message);
    contactForm.appendChild(formElements);
    contactForm.appendChild(sendBtn);

    // contactContent children
    contactContent.appendChild(contactInfo);
    contactContent.appendChild(contactForm);

    // contactContainer children
    contactContainer.appendChild(contactHeading);
    contactContainer.appendChild(contactContent);

    return contactContainer;
}




/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader() {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const headerList = document.createElement('ul');

    const headerItemLogo = document.createElement('div');
    headerItemLogo.innerText = 'Logo';
    headerItemLogo.classList.add('logo');
    const headerItemHome = document.createElement('li');
    headerItemHome.innerText = 'HOME';
    headerItemHome.setAttribute('id', 'home-btn');
    const headerItemMenu = document.createElement('li');
    headerItemMenu.innerText = 'MENU';
    headerItemHome.setAttribute('id', 'menu-btn');
    const headerItemContact = document.createElement('li');
    headerItemContact.innerText = 'CONTACT';
    headerItemHome.setAttribute('id', 'contact-btn');

    // adding contents
    headerList.appendChild(headerItemHome);
    headerList.appendChild(headerItemMenu);
    headerList.appendChild(headerItemContact);
    
    header.appendChild(headerItemLogo);
    header.appendChild(headerList);

    const homeBtn = headerItemHome;
    const menuBtn = headerItemMenu;
    const contactBtn = headerItemContact;

    return [header, homeBtn, menuBtn, contactBtn];
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomeSection": () => (/* binding */ createHomeSection)
/* harmony export */ });
/* harmony import */ var _assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/icons/github.svg */ "./src/assets/icons/github.svg");


function createHomeSection() {
    
    // main section
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    const heading = document.createElement('h1');
    heading.innerHTML = 'Welcome To <br> Tasty Lunch Restaurant'
    const introduction = document.createElement('p');
    introduction.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit reprehenderit quos molestias. <br>Officia enim consectetur aliquid voluptatum minus! Magnam quisquam voluptatem officia consectetur nesciunt.'
    const reserveBtn = document.createElement('button');
    reserveBtn.innerText = 'RESERVATION';
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');

    mainContent.appendChild(heading);
    mainContent.appendChild(introduction);
    mainContent.appendChild(reserveBtn);
    main.appendChild(mainContent);

    // footer section
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');

    const authorInfo = document.createElement('p');
    authorInfo.innerHTML = 'Copyright &copy; 2022 AvagSargsyan';
    const githubLink = document.createElement('a');
    githubLink.setAttribute('href', 'https://github.com/AvagSargsyan');
    githubLink.setAttribute('target', '_blank');

    // load the github logo
    const myIcon = new Image();
    myIcon.src = _assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_0__;
    githubLink.appendChild(myIcon);

    footer.appendChild(authorInfo);
    footer.appendChild(githubLink);
    main.appendChild(footer);

    return [main, reserveBtn];
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
function createMenu(content) {

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    const menuHeading = document.createElement('h1');
    menuHeading.innerText = 'Menu';

    const menuItemContainer = document.createElement('div');
    menuItemContainer.setAttribute('id', 'menu-item-container');

    const menuItem1 = document.createElement('div');
    const menuTitle1 = document.createElement('h2');
    menuTitle1.innerText = 'BEEF';
    const menuContent1 = document.createElement('p');
    menuItem1.setAttribute('id', 'menu-item1');
    menuContent1.innerHTML = 'Tasty Meal .......... 10$ <br>Tasty Meal .......... 19$$ <br>Tasty Meal .......... 15,50$ <br>Tasty Meal .......... 13$ <br>Tasty Meal .......... 20,90$ <br>Tasty Meal .......... 33,50$ <br>Tasty Meal .......... 10$ <br>Tasty Meal .......... 8,50$ <br>Tasty Meal .......... 9$ <br>Tasty Meal .......... 17$ <br>'

    menuItem1.appendChild(menuTitle1);
    menuItem1.appendChild(menuContent1);

    const menuItem2 = document.createElement('div');
    const menuTitle2 = document.createElement('h2');
    menuTitle2.innerText = 'CHICKEN';
    const menuContent2 = document.createElement('p');
    menuItem2.setAttribute('id', 'menu-item1');
    menuContent2.innerHTML = 'Tasty Meal .......... 10$ <br>Tasty Meal .......... 19$$ <br>Tasty Meal .......... 15,50$ <br>Tasty Meal .......... 13$ <br>Tasty Meal .......... 20,90$ <br>Tasty Meal .......... 33,50$ <br>Tasty Meal .......... 10$ <br>Tasty Meal .......... 8,50$ <br>'

    menuItem2.appendChild(menuTitle2);
    menuItem2.appendChild(menuContent2);

    const menuItem3 = document.createElement('div');
    const menuTitle3 = document.createElement('h2');
    menuTitle3.innerText = 'PORK';
    const menuContent3 = document.createElement('p');
    menuItem3.setAttribute('id', 'menu-item1');
    menuContent3.innerHTML = 'Tasty Meal .......... 10$ <br>Tasty Meal .......... 19$$ <br>Tasty Meal .......... 15,50$ <br>Tasty Meal .......... 13$ <br>Tasty Meal .......... 20,90$ <br>Tasty Meal .......... 33,50$ <br>Tasty Meal .......... 10$ <br>Tasty Meal .......... 8,50$ <br>'

    menuItem3.appendChild(menuTitle3);
    menuItem3.appendChild(menuContent3);

    const menuItem4 = document.createElement('div');
    const menuTitle4 = document.createElement('h2');
    menuTitle4.innerText = 'LAMB';
    const menuContent4 = document.createElement('p');
    menuItem4.setAttribute('id', 'menu-item1');
    menuContent4.innerHTML = 'Tasty Meal .......... 9$ <br>Tasty Meal .......... 15,50$ <br>Tasty Meal .......... 13$ <br>Tasty Meal .......... 20,90$ <br>Tasty Meal .......... 33,50$ <br>Tasty Meal .......... 10$ <br>Tasty Meal .......... 8,50$ <br>'

    menuItem4.appendChild(menuTitle4);
    menuItem4.appendChild(menuContent4);

    const menuItem5 = document.createElement('div');
    const menuTitle5 = document.createElement('h2');
    menuTitle5.innerText = 'SALADS';
    const menuContent5 = document.createElement('p');
    menuItem5.setAttribute('id', 'menu-item1');
    menuContent5.innerHTML = 'Tasty Meal .......... 9$$ <br>Tasty Meal .......... 8,50$ <br>Tasty Meal .......... 13$ <br>Tasty Meal .......... 6,90$ <br>Tasty Meal .......... 3,50$ <br>Tasty Meal .......... 4$ <br>Tasty Meal .......... 8,50$ <br>Tasty Meal .......... 5$ <br>Tasty Meal .......... 7,70$ <br>'

    menuItem5.appendChild(menuTitle5);
    menuItem5.appendChild(menuContent5);


    const menuItem6 = document.createElement('div');
    const menuTitle6 = document.createElement('h2');
    menuTitle6.innerText = 'DRINKS';
    const menuContent6 = document.createElement('p');
    menuItem6.setAttribute('id', 'menu-item1');
    menuContent6.innerHTML = 'Good Drink .......... 10$ <br>Good Drink .......... 19$$ <br>Good Drink .......... 15,50$ <br>Good Drink .......... 13$ <br>Good Drink .......... 20,90$ <br>Good Drink .......... 33,50$ <br>Good Drink .......... 10$ <br>Good Drink .......... 8,50$ <br>'

    menuItem6.appendChild(menuTitle6);
    menuItem6.appendChild(menuContent6);

    menuItemContainer.appendChild(menuItem1);
    menuItemContainer.appendChild(menuItem2);
    menuItemContainer.appendChild(menuItem3);
    menuItemContainer.appendChild(menuItem4);
    menuItemContainer.appendChild(menuItem5);
    menuItemContainer.appendChild(menuItem6);
    
    menuContainer.appendChild(menuHeading);
    menuContainer.appendChild(menuItemContainer);
    return menuContainer;
}




/***/ }),

/***/ "./src/assets/icons/clock.svg":
/*!************************************!*\
  !*** ./src/assets/icons/clock.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8e0c63ec031bfbb6b3a.svg";

/***/ }),

/***/ "./src/assets/icons/github.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/github.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b747b7a4e35ca7891d7a.svg";

/***/ }),

/***/ "./src/assets/icons/location.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/location.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03fbc8618fb4ef06f4ee.svg";

/***/ }),

/***/ "./src/assets/icons/message.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/message.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3334cfc26a4e9af07fe.svg";

/***/ }),

/***/ "./src/assets/icons/phone.svg":
/*!************************************!*\
  !*** ./src/assets/icons/phone.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38fde9d4c6faa196567b.svg";

/***/ }),

/***/ "./src/assets/images/bg-image(credit:lily-banse).jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/bg-image(credit:lily-banse).jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ef6db913df93a631506.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






function createPageContents() {
    const content = document.querySelector('#content');
    
    const [header, homeBtn, menuBtn, contactBtn] = (0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
    content.appendChild(header);

    const [homeSection, reserveBtn] = (0,_home__WEBPACK_IMPORTED_MODULE_1__.createHomeSection)();
    content.appendChild(homeSection);

    const menu = (0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)();

    const contact = (0,_contact__WEBPACK_IMPORTED_MODULE_3__.createContactPage)();

    homeBtn.addEventListener('click', e => {
        while (content.childNodes.length > 1) {
            content.removeChild(content.lastChild);
        }
        content.appendChild(homeSection);
    })

    menuBtn.addEventListener('click', e => {
        while (content.childNodes.length > 1) {
            content.removeChild(content.lastChild);
        }
        content.appendChild(menu);
    });

    reserveBtn.addEventListener('click', e => {
        while (content.childNodes.length > 1) {
            content.removeChild(content.lastChild);
        }
        content.appendChild(menu);
    });

    contactBtn.addEventListener('click', e => {
        while (content.childNodes.length > 1) {
            content.removeChild(content.lastChild);
        }
        content.appendChild(contact);
    })

};

createPageContents();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxXQUFXLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sV0FBVyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLE1BQU0sV0FBVyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0RBQVM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixvREFBUzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0RBQVc7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFJRTs7Ozs7Ozs7Ozs7Ozs7O0FDNUlGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBSUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzJDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHFEQUFJO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUlFOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0RkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXdDO0FBQ0c7QUFDUDtBQUNVO0FBQ3pCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQSxtREFBbUQscURBQVk7QUFDL0Q7O0FBRUEsc0NBQXNDLHdEQUFpQjtBQUN2RDs7QUFFQSxpQkFBaUIsaURBQVU7O0FBRTNCLG9CQUFvQiwyREFBaUI7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2JnLWltYWdlKGNyZWRpdDpsaWx5LWJhbnNlKS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCByZ2IoMjQ4LCAyNDMsIDIzOCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBoZWFkZXItc3RhcnQgKi9cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA3JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogLjZyZW0gNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuI2hlYWRlciB1bCBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jaGVhZGVyIHVsIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMTEwLCAzNCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXG59XFxuXFxuI2hlYWRlciAubG9nbyB7XFxuICAgIGZsZXg6IDE7XFxufVxcbi8qIGhlYWRlci1lbmQgKi9cXG5cXG4vKiBtYWluLXN0YXJ0ICovXFxuLyogYWRkIGFuIGFuaW1hdGlvbiBmb3IgY29udGVudCAqL1xcbkBrZXlmcmFtZXMgbW92ZURvd24ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGhlaWdodDogOTMlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA4LCA4LCAwLjUxNCk7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwIDVyZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbmltYXRpb246IG1vdmVEb3duIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IGgxIHtcXG4gICAgZm9udC1zaXplOiA0LjRyZW07XFxufVxcblxcbiNtYWluLWNvbnRlbnQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAxZW0gMS44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDg3LCAyNik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjRyZW07XFxufVxcblxcbiNtYWluLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgNjIsIDIyKTtcXG59XFxuLyogbWFpbi1lbmQgKi9cXG5cXG4vKiBmb290ZXItc3RhcnQgKi9cXG4jZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjRyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IC44cmVtO1xcbn1cXG4vKiBmb290ZXItZW5kICovXFxuXFxuLyogbWVudS1zdGFydCAqL1xcbiNtZW51LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciA5ZnIgLyAxZnI7XFxuICAgIGhlaWdodDogOTMlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNzE5KTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNtZW51LWNvbnRhaW5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFuaW1hdGlvbjogbW92ZURvd24gMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJnYigyNDAsIDg3LCAyNik7XFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAuNnJlbTtcXG59XFxuXFxuI21lbnUtaXRlbS1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1cmVtLCAxZnIpKTtcXG59XFxuXFxuI21lbnUtaXRlbS1jb250YWluZXIgPiBkaXYge1xcbiAgICBhbmltYXRpb246IG1vdmVEb3duIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jbWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdiA+IGgyIHtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgIGNvbG9yOiByZ2IoMjQwLCA4NywgMjYpO1xcbn1cXG5cXG5cXG4jbWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdiA+IHAge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG59XFxuLyogbWVudS1lbmQgKi9cXG5cXG4vKiBjb250YWN0LXN0YXJ0ICovXFxuI2NvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDlmciAvIDFmcjtcXG4gICAgaGVpZ2h0OiA5MyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgOCwgMC43MTkpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jY29udGFjdC1jb250YWluZXIgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBhbmltYXRpb246IG1vdmVEb3duIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZ2IoMjQwLCA4NywgMjYpO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogLjZyZW07XFxufVxcblxcbiNjb250YWN0LWNvbnRlbnQge1xcbiAgICBhbmltYXRpb246IG1vdmVEb3duIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwYWRkaW5nOiAzcmVtIDEwcmVtIDAgMTByZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcXG59XFxuXFxuI2NvbnRhY3QtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jY29udGFjdC1pbmZvID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdC1pbmZvIHAge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi8qIGNvbnRhY3QtZm9ybS1zdGFydCAqL1xcbiNjb250YWN0LWNvbnRlbnQgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG5cXG4jY29udGFjdC1jb250ZW50ID4gZm9ybSA+ICNmb3JtLWZpZWxkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuI2NvbnRhY3QtY29udGVudCA+IGZvcm0gPiAjZm9ybS1maWVsZHMgPiBkaXYgPiBsYWJlbCB7XFxuXFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxufVxcblxcbiNjb250YWN0LWNvbnRlbnQgPiBmb3JtID4gI2Zvcm0tZmllbGRzID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIGdhcDogLjJyZW07XFxufVxcblxcbiNjb250YWN0LWNvbnRlbnQgPiBmb3JtID4gI2Zvcm0tZmllbGRzID4gZGl2ID4gaW5wdXQge1xcbiAgICBoZWlnaHQ6IDIuNnJlbTtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MSwgMTYwLCAxNjApO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jY29udGFjdC1jb250ZW50ID4gZm9ybSA+ICNmb3JtLWZpZWxkcyA+IGRpdiA+IGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigyNDAsIDg3LCAyNik7XFxufVxcblxcbiNjb250YWN0LWNvbnRlbnQgPiBmb3JtID4gI2Zvcm0tZmllbGRzID4gZGl2ID4gaW5wdXRbdHlwZT1cXFwidGV4dGZpZWxkXFxcIl0ge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbiNjb250YWN0LWNvbnRlbnQgI21lc3NhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWN0LWNvbnRlbnQgPiBmb3JtID4gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogLjhlbSAxLjZlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgODcsIDI2KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXG59XFxuXFxuI2NvbnRhY3QtY29udGVudCA+IGZvcm0gPiBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjMsIDYyLCAyMik7XFxufVxcbi8qIGNvbnRhY3QtZm9ybS1lbmQgKi9cXG5cXG4vKiBjb250YWN0LWVuZCAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix5Q0FBeUM7QUFDN0M7O0FB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O0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1Qsb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsU0FBUztJQUNULG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBLHFCQUFxQjs7QUFFckIsZ0JBQWdCOztBQUVoQjtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy9pbWFnZXMvYmctaW1hZ2VcXFxcKGNyZWRpdDpsaWx5LWJhbnNlXFxcXCkuanBnJyksIHJnYigyNDgsIDI0MywgMjM4KTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxudWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIGhlYWRlci1zdGFydCAqL1xcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDclO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAuNnJlbSA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4jaGVhZGVyIHVsIGxpIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNoZWFkZXIgdWwgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAxMTAsIDM0KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IC40cmVtO1xcbn1cXG5cXG4jaGVhZGVyIC5sb2dvIHtcXG4gICAgZmxleDogMTtcXG59XFxuLyogaGVhZGVyLWVuZCAqL1xcblxcbi8qIG1haW4tc3RhcnQgKi9cXG4vKiBhZGQgYW4gYW5pbWF0aW9uIGZvciBjb250ZW50ICovXFxuQGtleWZyYW1lcyBtb3ZlRG93biB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbiNtYWluIHtcXG4gICAgaGVpZ2h0OiA5MyU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTE0KTtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAgNXJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFuaW1hdGlvbjogbW92ZURvd24gMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiNtYWluLWNvbnRlbnQgaDEge1xcbiAgICBmb250LXNpemU6IDQuNHJlbTtcXG59XFxuXFxuI21haW4tY29udGVudCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiNtYWluLWNvbnRlbnQgYnV0dG9uIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDFlbSAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgODcsIDI2KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXG59XFxuXFxuI21haW4tY29udGVudCBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCA2MiwgMjIpO1xcbn1cXG4vKiBtYWluLWVuZCAqL1xcblxcbi8qIGZvb3Rlci1zdGFydCAqL1xcbiNmb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1yaWdodDogLjhyZW07XFxufVxcbi8qIGZvb3Rlci1lbmQgKi9cXG5cXG4vKiBtZW51LXN0YXJ0ICovXFxuI21lbnUtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDlmciAvIDFmcjtcXG4gICAgaGVpZ2h0OiA5MyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgOCwgMC43MTkpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuI21lbnUtY29udGFpbmVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYW5pbWF0aW9uOiBtb3ZlRG93biAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmdiKDI0MCwgODcsIDI2KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IC42cmVtO1xcbn1cXG5cXG4jbWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTVyZW0sIDFmcikpO1xcbn1cXG5cXG4jbWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGFuaW1hdGlvbjogbW92ZURvd24gMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiNtZW51LWl0ZW0tY29udGFpbmVyID4gZGl2ID4gaDIge1xcbiAgICBmb250LXNpemU6IDIuNnJlbTtcXG4gICAgY29sb3I6IHJnYigyNDAsIDg3LCAyNik7XFxufVxcblxcblxcbiNtZW51LWl0ZW0tY29udGFpbmVyID4gZGl2ID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS42cmVtO1xcbn1cXG4vKiBtZW51LWVuZCAqL1xcblxcbi8qIGNvbnRhY3Qtc3RhcnQgKi9cXG4jY29udGFjdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgOWZyIC8gMWZyO1xcbiAgICBoZWlnaHQ6IDkzJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA4LCA4LCAwLjcxOSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNjb250YWN0LWNvbnRhaW5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFuaW1hdGlvbjogbW92ZURvd24gMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJnYigyNDAsIDg3LCAyNik7XFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAuNnJlbTtcXG59XFxuXFxuI2NvbnRhY3QtY29udGVudCB7XFxuICAgIGFuaW1hdGlvbjogbW92ZURvd24gMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBhZGRpbmc6IDNyZW0gMTByZW0gMCAxMHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjByZW0sIDFmcikpO1xcbn1cXG5cXG4jY29udGFjdC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNjb250YWN0LWluZm8gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWN0LWluZm8gcCB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLyogY29udGFjdC1mb3JtLXN0YXJ0ICovXFxuI2NvbnRhY3QtY29udGVudCA+IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcblxcbiNjb250YWN0LWNvbnRlbnQgPiBmb3JtID4gI2Zvcm0tZmllbGRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4jY29udGFjdC1jb250ZW50ID4gZm9ybSA+ICNmb3JtLWZpZWxkcyA+IGRpdiA+IGxhYmVsIHtcXG5cXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxuI2NvbnRhY3QtY29udGVudCA+IGZvcm0gPiAjZm9ybS1maWVsZHMgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gICAgZ2FwOiAuMnJlbTtcXG59XFxuXFxuI2NvbnRhY3QtY29udGVudCA+IGZvcm0gPiAjZm9ybS1maWVsZHMgPiBkaXYgPiBpbnB1dCB7XFxuICAgIGhlaWdodDogMi42cmVtO1xcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYxLCAxNjAsIDE2MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNjb250YWN0LWNvbnRlbnQgPiBmb3JtID4gI2Zvcm0tZmllbGRzID4gZGl2ID4gaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDI0MCwgODcsIDI2KTtcXG59XFxuXFxuI2NvbnRhY3QtY29udGVudCA+IGZvcm0gPiAjZm9ybS1maWVsZHMgPiBkaXYgPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0ZmllbGRcXFwiXSB7XFxuICAgIGhlaWdodDogNXJlbTtcXG59XFxuXFxuI2NvbnRhY3QtY29udGVudCAjbWVzc2FnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3QtY29udGVudCA+IGZvcm0gPiBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAuOGVtIDEuNmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCA4NywgMjYpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC40cmVtO1xcbn1cXG5cXG4jY29udGFjdC1jb250ZW50ID4gZm9ybSA+IGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgNjIsIDIyKTtcXG59XFxuLyogY29udGFjdC1mb3JtLWVuZCAqL1xcblxcbi8qIGNvbnRhY3QtZW5kICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IExvY2F0aW9uSWNvbiBmcm9tICcuL2Fzc2V0cy9pY29ucy9sb2NhdGlvbi5zdmcnO1xuaW1wb3J0IENsb2NrSWNvbiBmcm9tICcuL2Fzc2V0cy9pY29ucy9jbG9jay5zdmcnO1xuaW1wb3J0IFBob25lSWNvbiBmcm9tICcuL2Fzc2V0cy9pY29ucy9waG9uZS5zdmcnO1xuaW1wb3J0IE1lc3NhZ2VJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL21lc3NhZ2Uuc3ZnJztcblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnRhY3RIZWFkaW5nLmlubmVyVGV4dCA9ICdDb250YWN0IHVzJztcblxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWluZm8nKTtcblxuICAgIC8vIGFkZHJlc3NcbiAgICBjb25zdCBsb2NhdGlvbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2NhdGlvbkljb24uc3JjID0gTG9jYXRpb25JY29uO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQobG9jYXRpb25JY29uKTtcbiAgICBjb25zdCBhZGRyZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzVGV4dC5pbm5lckhUTUwgPSAnMjg2NSBXYXNoaW5ndG9uIFN0cmVldCA8YnI+QmVhdmVydG9uLCBDQSAyMDEzNCdcbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NUZXh0KTtcbiAgICBcbiAgICAvLyBob3Vyc09wZW5cbiAgICBjb25zdCBjbG9ja0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjbG9ja0ljb24uc3JjID0gQ2xvY2tJY29uO1xuXG4gICAgY29uc3QgaG91cnNPcGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnNPcGVuLmFwcGVuZENoaWxkKGNsb2NrSWNvbik7XG4gICAgY29uc3QgaG91cnNPcGVuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3Vyc09wZW5UZXh0LmlubmVySFRNTCA9ICdNb24gLSBUaHVyczogOGFtIC0gOHBtIDxicj5GcmkgLSBTdW46IDhhbSAtIDExcG0nO1xuICAgIGhvdXJzT3Blbi5hcHBlbmRDaGlsZChob3Vyc09wZW5UZXh0KTtcblxuICAgIC8vIHBob25lXG4gICAgY29uc3QgcGhvbmVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgcGhvbmVJY29uLnNyYyA9IFBob25lSWNvbjtcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcbiAgICBjb25zdCBwaG9uZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVUZXh0LmlubmVyVGV4dCA9ICcoMjIzKS04ODAgNTE1NSc7XG4gICAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVUZXh0KTtcblxuICAgIFxuICAgIC8vIGNvbnRhY3RJbmZvIGNoaWxkcmVuXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoaG91cnNPcGVuKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgXG4gICAgLy8gZm9ybVxuICAgIC8vIG1lc3NhZ2UgdXNcbiAgICBjb25zdCBtZXNzYWdlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG1lc3NhZ2VJY29uLnNyYyA9IE1lc3NhZ2VJY29uO1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lc3NhZ2UuYXBwZW5kQ2hpbGQobWVzc2FnZUljb24pO1xuICAgIGNvbnN0IG1lc3NhZ2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lc3NhZ2VUZXh0LmlubmVyVGV4dCA9ICdNZXNzYWdlIHVzJztcbiAgICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xuICAgIG1lc3NhZ2UuYXBwZW5kQ2hpbGQobWVzc2FnZVRleHQpO1xuXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29udGFjdEZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICAgIFxuICAgIC8vIGZ1bGxOYW1lXG4gICAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZ1bGxOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGZ1bGxOYW1lTGFiZWwuaW5uZXJUZXh0ID0gJ0ZVTEwgTkFNRSc7XG4gICAgZnVsbE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmdWxsLW5hbWUnKTtcblxuICAgIGNvbnN0IGZ1bGxOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZ1bGxOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBmdWxsTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZnVsbC1uYW1lJyk7XG4gICAgZnVsbE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZnVsbE5hbWUnKTtcbiAgICBmdWxsTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZnVsbCBuYW1lJyk7XG4gICAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmdWxsTmFtZUxhYmVsKTtcbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGZ1bGxOYW1lSW5wdXQpO1xuXG4gICAgLy8gZW1haWxcbiAgICBjb25zdCBlbWFpbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGVtYWlsTGFiZWwuaW5uZXJUZXh0ID0gJ0VNQUlMJztcbiAgICBlbWFpbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VtYWlsJyk7XG5cbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbCcpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VtYWlsJyk7XG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2VtYWlsJyk7XG4gICAgZW1haWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XG4gICAgZW1haWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG5cbiAgICAvLyBtZXNzYWdlSW5wdXRcbiAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVzc2FnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBtZXNzYWdlTGFiZWwuaW5uZXJUZXh0ID0gJ01FU1NBR0UnO1xuICAgIG1lc3NhZ2VMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZXNzYWdlJyk7XG5cbiAgICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dGZpZWxkJyk7XG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xuICAgIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWVzc2FnZScpO1xuICAgIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgbWVzc2FnZScpO1xuICAgIG1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKTtcbiAgICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XG5cbiAgICAvLyBzdWJtaXQgYnV0dG9uXG4gICAgY29uc3Qgc2VuZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2VuZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgc2VuZEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1NlbmQnKTtcblxuICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1FbGVtZW50cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0tZmllbGRzJyk7XG5cbiAgICBmb3JtRWxlbWVudHMuYXBwZW5kQ2hpbGQobmFtZUNvbnRhaW5lcik7XG4gICAgZm9ybUVsZW1lbnRzLmFwcGVuZENoaWxkKGVtYWlsQ29udGFpbmVyKTtcbiAgICBmb3JtRWxlbWVudHMuYXBwZW5kQ2hpbGQobWVzc2FnZUNvbnRhaW5lcik7XG4gICAgLy8gZm9ybSBjaGlsZHJlblxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50cyk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoc2VuZEJ0bik7XG5cbiAgICAvLyBjb250YWN0Q29udGVudCBjaGlsZHJlblxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XG5cbiAgICAvLyBjb250YWN0Q29udGFpbmVyIGNoaWxkcmVuXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SGVhZGluZyk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudCk7XG5cbiAgICByZXR1cm4gY29udGFjdENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVDb250YWN0UGFnZVxufTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcblxuICAgIGNvbnN0IGhlYWRlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgY29uc3QgaGVhZGVySXRlbUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJJdGVtTG9nby5pbm5lclRleHQgPSAnTG9nbyc7XG4gICAgaGVhZGVySXRlbUxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGNvbnN0IGhlYWRlckl0ZW1Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBoZWFkZXJJdGVtSG9tZS5pbm5lclRleHQgPSAnSE9NRSc7XG4gICAgaGVhZGVySXRlbUhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWJ0bicpO1xuICAgIGNvbnN0IGhlYWRlckl0ZW1NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBoZWFkZXJJdGVtTWVudS5pbm5lclRleHQgPSAnTUVOVSc7XG4gICAgaGVhZGVySXRlbUhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWJ0bicpO1xuICAgIGNvbnN0IGhlYWRlckl0ZW1Db250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBoZWFkZXJJdGVtQ29udGFjdC5pbm5lclRleHQgPSAnQ09OVEFDVCc7XG4gICAgaGVhZGVySXRlbUhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWJ0bicpO1xuXG4gICAgLy8gYWRkaW5nIGNvbnRlbnRzXG4gICAgaGVhZGVyTGlzdC5hcHBlbmRDaGlsZChoZWFkZXJJdGVtSG9tZSk7XG4gICAgaGVhZGVyTGlzdC5hcHBlbmRDaGlsZChoZWFkZXJJdGVtTWVudSk7XG4gICAgaGVhZGVyTGlzdC5hcHBlbmRDaGlsZChoZWFkZXJJdGVtQ29udGFjdCk7XG4gICAgXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckl0ZW1Mb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGlzdCk7XG5cbiAgICBjb25zdCBob21lQnRuID0gaGVhZGVySXRlbUhvbWU7XG4gICAgY29uc3QgbWVudUJ0biA9IGhlYWRlckl0ZW1NZW51O1xuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBoZWFkZXJJdGVtQ29udGFjdDtcblxuICAgIHJldHVybiBbaGVhZGVyLCBob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuXTtcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVIZWFkZXJcbn07XG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL2Fzc2V0cy9pY29ucy9naXRodWIuc3ZnJztcblxuZnVuY3Rpb24gY3JlYXRlSG9tZVNlY3Rpb24oKSB7XG4gICAgXG4gICAgLy8gbWFpbiBzZWN0aW9uXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9ICdXZWxjb21lIFRvIDxicj4gVGFzdHkgTHVuY2ggUmVzdGF1cmFudCdcbiAgICBjb25zdCBpbnRyb2R1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW50cm9kdWN0aW9uLmlubmVySFRNTCA9ICdMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUG9zc2ltdXMgaW1wZWRpdCByZXByZWhlbmRlcml0IHF1b3MgbW9sZXN0aWFzLiA8YnI+T2ZmaWNpYSBlbmltIGNvbnNlY3RldHVyIGFsaXF1aWQgdm9sdXB0YXR1bSBtaW51cyEgTWFnbmFtIHF1aXNxdWFtIHZvbHVwdGF0ZW0gb2ZmaWNpYSBjb25zZWN0ZXR1ciBuZXNjaXVudC4nXG4gICAgY29uc3QgcmVzZXJ2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2VydmVCdG4uaW5uZXJUZXh0ID0gJ1JFU0VSVkFUSU9OJztcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi1jb250ZW50Jyk7XG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChpbnRyb2R1Y3Rpb24pO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHJlc2VydmVCdG4pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG4gICAgLy8gZm9vdGVyIHNlY3Rpb25cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuICAgIGNvbnN0IGF1dGhvckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYXV0aG9ySW5mby5pbm5lckhUTUwgPSAnQ29weXJpZ2h0ICZjb3B5OyAyMDIyIEF2YWdTYXJnc3lhbic7XG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vQXZhZ1NhcmdzeWFuJyk7XG4gICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblxuICAgIC8vIGxvYWQgdGhlIGdpdGh1YiBsb2dvXG4gICAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbXlJY29uLnNyYyA9IEljb247XG4gICAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChteUljb24pO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGF1dGhvckluZm8pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICByZXR1cm4gW21haW4sIHJlc2VydmVCdG5dO1xufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUhvbWVTZWN0aW9uXG59O1xuIiwiZnVuY3Rpb24gY3JlYXRlTWVudShjb250ZW50KSB7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudUhlYWRpbmcuaW5uZXJUZXh0ID0gJ01lbnUnO1xuXG4gICAgY29uc3QgbWVudUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtaXRlbS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVUaXRsZTEuaW5uZXJUZXh0ID0gJ0JFRUYnO1xuICAgIGNvbnN0IG1lbnVDb250ZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTEuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWl0ZW0xJyk7XG4gICAgbWVudUNvbnRlbnQxLmlubmVySFRNTCA9ICdUYXN0eSBNZWFsIC4uLi4uLi4uLi4gMTAkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gMTkkJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDE1LDUwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDEzJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDIwLDkwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDMzLDUwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDEwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDgsNTAkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gOSQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxNyQgPGJyPidcblxuICAgIG1lbnVJdGVtMS5hcHBlbmRDaGlsZChtZW51VGl0bGUxKTtcbiAgICBtZW51SXRlbTEuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQxKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVUaXRsZTIuaW5uZXJUZXh0ID0gJ0NISUNLRU4nO1xuICAgIGNvbnN0IG1lbnVDb250ZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWl0ZW0xJyk7XG4gICAgbWVudUNvbnRlbnQyLmlubmVySFRNTCA9ICdUYXN0eSBNZWFsIC4uLi4uLi4uLi4gMTAkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gMTkkJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDE1LDUwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDEzJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDIwLDkwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDMzLDUwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDEwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDgsNTAkIDxicj4nXG5cbiAgICBtZW51SXRlbTIuYXBwZW5kQ2hpbGQobWVudVRpdGxlMik7XG4gICAgbWVudUl0ZW0yLmFwcGVuZENoaWxkKG1lbnVDb250ZW50Mik7XG5cbiAgICBjb25zdCBtZW51SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51VGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51VGl0bGUzLmlubmVyVGV4dCA9ICdQT1JLJztcbiAgICBjb25zdCBtZW51Q29udGVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW0zLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1pdGVtMScpO1xuICAgIG1lbnVDb250ZW50My5pbm5lckhUTUwgPSAnVGFzdHkgTWVhbCAuLi4uLi4uLi4uIDEwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDE5JCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxNSw1MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxMyQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAyMCw5MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAzMyw1MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxMCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiA4LDUwJCA8YnI+J1xuXG4gICAgbWVudUl0ZW0zLmFwcGVuZENoaWxkKG1lbnVUaXRsZTMpO1xuICAgIG1lbnVJdGVtMy5hcHBlbmRDaGlsZChtZW51Q29udGVudDMpO1xuXG4gICAgY29uc3QgbWVudUl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudVRpdGxlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudVRpdGxlNC5pbm5lclRleHQgPSAnTEFNQic7XG4gICAgY29uc3QgbWVudUNvbnRlbnQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtNC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtaXRlbTEnKTtcbiAgICBtZW51Q29udGVudDQuaW5uZXJIVE1MID0gJ1Rhc3R5IE1lYWwgLi4uLi4uLi4uLiA5JCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDE1LDUwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDEzJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDIwLDkwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDMzLDUwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDEwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDgsNTAkIDxicj4nXG5cbiAgICBtZW51SXRlbTQuYXBwZW5kQ2hpbGQobWVudVRpdGxlNCk7XG4gICAgbWVudUl0ZW00LmFwcGVuZENoaWxkKG1lbnVDb250ZW50NCk7XG5cbiAgICBjb25zdCBtZW51SXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51VGl0bGU1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51VGl0bGU1LmlubmVyVGV4dCA9ICdTQUxBRFMnO1xuICAgIGNvbnN0IG1lbnVDb250ZW50NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWl0ZW0xJyk7XG4gICAgbWVudUNvbnRlbnQ1LmlubmVySFRNTCA9ICdUYXN0eSBNZWFsIC4uLi4uLi4uLi4gOSQkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gOCw1MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxMyQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiA2LDkwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDMsNTAkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gNCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiA4LDUwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDUkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gNyw3MCQgPGJyPidcblxuICAgIG1lbnVJdGVtNS5hcHBlbmRDaGlsZChtZW51VGl0bGU1KTtcbiAgICBtZW51SXRlbTUuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQ1KTtcblxuXG4gICAgY29uc3QgbWVudUl0ZW02ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudVRpdGxlNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudVRpdGxlNi5pbm5lclRleHQgPSAnRFJJTktTJztcbiAgICBjb25zdCBtZW51Q29udGVudDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW02LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1pdGVtMScpO1xuICAgIG1lbnVDb250ZW50Ni5pbm5lckhUTUwgPSAnR29vZCBEcmluayAuLi4uLi4uLi4uIDEwJCA8YnI+R29vZCBEcmluayAuLi4uLi4uLi4uIDE5JCQgPGJyPkdvb2QgRHJpbmsgLi4uLi4uLi4uLiAxNSw1MCQgPGJyPkdvb2QgRHJpbmsgLi4uLi4uLi4uLiAxMyQgPGJyPkdvb2QgRHJpbmsgLi4uLi4uLi4uLiAyMCw5MCQgPGJyPkdvb2QgRHJpbmsgLi4uLi4uLi4uLiAzMyw1MCQgPGJyPkdvb2QgRHJpbmsgLi4uLi4uLi4uLiAxMCQgPGJyPkdvb2QgRHJpbmsgLi4uLi4uLi4uLiA4LDUwJCA8YnI+J1xuXG4gICAgbWVudUl0ZW02LmFwcGVuZENoaWxkKG1lbnVUaXRsZTYpO1xuICAgIG1lbnVJdGVtNi5hcHBlbmRDaGlsZChtZW51Q29udGVudDYpO1xuXG4gICAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0xKTtcbiAgICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbTIpO1xuICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtMyk7XG4gICAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW00KTtcbiAgICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbTUpO1xuICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtNik7XG4gICAgXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SGVhZGluZyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbUNvbnRhaW5lcik7XG4gICAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTWVudVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBjcmVhdGVIb21lU2VjdGlvbiB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH0gZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlQ29udGVudHMoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgW2hlYWRlciwgaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0bl0gPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBbaG9tZVNlY3Rpb24sIHJlc2VydmVCdG5dID0gY3JlYXRlSG9tZVNlY3Rpb24oKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVTZWN0aW9uKTtcblxuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVNZW51KCk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gY3JlYXRlQ29udGFjdFBhZ2UoKTtcblxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVTZWN0aW9uKTtcbiAgICB9KVxuXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICB3aGlsZSAoY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgfSk7XG5cbiAgICByZXNlcnZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIHdoaWxlIChjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcbiAgICB9KTtcblxuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgIH0pXG5cbn07XG5cbmNyZWF0ZVBhZ2VDb250ZW50cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9