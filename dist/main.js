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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), rgb(248, 243, 238);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    height: 100%;\n}\n\nli {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\n/* header-start */\n#header {\n    height: 7%;\n    background-color: #fff;\n    padding: .6rem 4rem;\n    display: flex;\n    align-items: center;\n}\n\n#header ul {\n    display: flex;\n    gap: 2rem;\n}\n\n#header ul li {\n    font-size: 1.2rem;\n    padding: 1rem;\n}\n\n#header ul li:hover {\n    background-color: rgb(224, 110, 34);\n    color: white;\n    cursor: pointer;\n    border-radius: .4rem;\n}\n\n#header .logo {\n    flex: 1;\n}\n/* header-end */\n\n/* main-start */\n\n/* add an animation for content */\n@keyframes moveDown {\n    from {\n        transform: translateY(-50px);\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n#main {\n    height: 93%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    color: #fff;\n    background-color: rgba(8, 8, 8, 0.514);\n}\n\n#main-content {\n    padding: 0 5rem;\n    flex: 1;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    justify-content: center;\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n}\n\n#main-content h1 {\n    font-size: 4.4rem;\n}\n\n#main-content p {\n    font-size: 1.3rem;\n}\n\n#main-content button {\n    color: #fff;\n    padding: 1em 1.8em;\n    font-weight: bold;\n    font-size: 1rem;\n    background-color: rgb(240, 87, 26);\n    border: none;\n    border-radius: .4rem;\n}\n\n#main-content button:hover {\n    background-color: rgb(163, 62, 22);\n}\n/* main-end */\n\n/* footer-start */\n#footer {\n    width: 100%;\n    font-size: .8rem;\n    display: flex;\n    align-items: center;\n    gap: .4rem;\n    justify-content: flex-end;\n    padding-right: .8rem;\n}\n/* footer-end */\n\n/* menu-start */\n#menu-container {\n    padding: 1rem;\n    display: grid;\n    grid-template: 1fr 9fr / 1fr;\n    height: 93%;\n    background-color: rgba(8, 8, 8, 0.719);\n    color: #fff;\n}\n\n#menu-container h1 {\n    font-size: 3rem;\n    text-align: center;\n    margin: 0;\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n    text-decoration: underline;\n    text-decoration-color: rgb(240, 87, 26);\n    text-decoration-thickness: 2px;\n    text-underline-offset: .6rem;\n}\n\n#menu-item-container {\n    /* padding: 1rem; */\n    text-align: center;\n    color: #fff;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n}\n\n#menu-item-container > div {\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n}\n\n#menu-item-container > div > h2 {\n    font-size: 2.6rem;\n    color: rgb(240, 87, 26);\n}\n\n\n#menu-item-container > div > p {\n    font-size: 1.4rem;\n    line-height: 1.6rem;\n}\n/* menu-end */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,yCAAyC;AAC7C;;AAEA;IACI,uEAAwF;IACxF,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA,iBAAiB;AACjB;IACI,UAAU;IACV,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,OAAO;AACX;AACA,eAAe;;AAEf,eAAe;;AAEf,iCAAiC;AACjC;IACI;QACI,4BAA4B;IAChC;IACA;QACI,wBAAwB;QACxB,UAAU;IACd;AACJ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,wBAAwB;IACxB,uBAAuB;IACvB,WAAW;IACX,sCAAsC;AAC1C;;AAEA;IACI,eAAe;IACf,OAAO;IACP,aAAa;IACb,wBAAwB;IACxB,uBAAuB;IACvB,uBAAuB;IACvB,2CAA2C;IAC3C,UAAU;AACd;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,kCAAkC;IAClC,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,kCAAkC;AACtC;AACA,aAAa;;AAEb,iBAAiB;AACjB;IACI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,yBAAyB;IACzB,oBAAoB;AACxB;AACA,eAAe;;AAEf,eAAe;AACf;IACI,aAAa;IACb,aAAa;IACb,4BAA4B;IAC5B,WAAW;IACX,sCAAsC;IACtC,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,2CAA2C;IAC3C,UAAU;IACV,0BAA0B;IAC1B,uCAAuC;IACvC,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,2DAA2D;AAC/D;;AAEA;IACI,2CAA2C;IAC3C,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;AAC3B;;;AAGA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;AACA,aAAa","sourcesContent":["* {\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    background: url('./assets/images/bg-image\\(credit:lily-banse\\).jpg'), rgb(248, 243, 238);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    height: 100%;\n}\n\nli {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\n/* header-start */\n#header {\n    height: 7%;\n    background-color: #fff;\n    padding: .6rem 4rem;\n    display: flex;\n    align-items: center;\n}\n\n#header ul {\n    display: flex;\n    gap: 2rem;\n}\n\n#header ul li {\n    font-size: 1.2rem;\n    padding: 1rem;\n}\n\n#header ul li:hover {\n    background-color: rgb(224, 110, 34);\n    color: white;\n    cursor: pointer;\n    border-radius: .4rem;\n}\n\n#header .logo {\n    flex: 1;\n}\n/* header-end */\n\n/* main-start */\n\n/* add an animation for content */\n@keyframes moveDown {\n    from {\n        transform: translateY(-50px);\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n#main {\n    height: 93%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    color: #fff;\n    background-color: rgba(8, 8, 8, 0.514);\n}\n\n#main-content {\n    padding: 0 5rem;\n    flex: 1;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    justify-content: center;\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n}\n\n#main-content h1 {\n    font-size: 4.4rem;\n}\n\n#main-content p {\n    font-size: 1.3rem;\n}\n\n#main-content button {\n    color: #fff;\n    padding: 1em 1.8em;\n    font-weight: bold;\n    font-size: 1rem;\n    background-color: rgb(240, 87, 26);\n    border: none;\n    border-radius: .4rem;\n}\n\n#main-content button:hover {\n    background-color: rgb(163, 62, 22);\n}\n/* main-end */\n\n/* footer-start */\n#footer {\n    width: 100%;\n    font-size: .8rem;\n    display: flex;\n    align-items: center;\n    gap: .4rem;\n    justify-content: flex-end;\n    padding-right: .8rem;\n}\n/* footer-end */\n\n/* menu-start */\n#menu-container {\n    padding: 1rem;\n    display: grid;\n    grid-template: 1fr 9fr / 1fr;\n    height: 93%;\n    background-color: rgba(8, 8, 8, 0.719);\n    color: #fff;\n}\n\n#menu-container h1 {\n    font-size: 3rem;\n    text-align: center;\n    margin: 0;\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n    text-decoration: underline;\n    text-decoration-color: rgb(240, 87, 26);\n    text-decoration-thickness: 2px;\n    text-underline-offset: .6rem;\n}\n\n#menu-item-container {\n    /* padding: 1rem; */\n    text-align: center;\n    color: #fff;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n}\n\n#menu-item-container > div {\n    animation: moveDown 1s ease-in-out forwards;\n    opacity: 0;\n}\n\n#menu-item-container > div > h2 {\n    font-size: 2.6rem;\n    color: rgb(240, 87, 26);\n}\n\n\n#menu-item-container > div > p {\n    font-size: 1.4rem;\n    line-height: 1.6rem;\n}\n/* menu-end */\n"],"sourceRoot":""}]);
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

    // message us
    const messageIcon = new Image();
    messageIcon.src = _assets_icons_message_svg__WEBPACK_IMPORTED_MODULE_3__;

    const message = document.createElement('div');
    phone.appendChild(messageIcon);
    const messageText = document.createElement('p');
    messageText.innerText = 'Message us';
    message.appendChild(messageText);

    // contactInfo children
    contactInfo.appendChild(address);
    contactInfo.appendChild(hoursOpen);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(message);

    // form
    const contactForm = document.createElement('form');
    contactForm.setAttribute('action', '#');
    
    // fullName
    const fullNameLabel = document.createElement('label');
    fullNameLabel.innerText = 'FULL NAME';
    fullNameLabel.setAttribute('for', 'full-name');

    const fullNameInput = document.createElement('input');
    fullNameInput.setAttribute('type', 'text');
    fullNameInput.setAttribute('id', 'full-name');
    fullNameInput.setAttribute('name', 'fullName');
    fullNameInput.setAttribute('placeholder', 'full name');

    // email
    const emailLabel = document.createElement('label');
    emailLabel.innerText = 'EMAIL';
    emailLabel.setAttribute('for', 'email');

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('placeholder', 'email');

    // messageInput
    const messageLabel = document.createElement('label');
    messageLabel.innerText = 'Message';
    messageLabel.setAttribute('for', 'message');

    const messageInput = document.createElement('input');
    messageInput.setAttribute('type', 'text');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('name', 'message');
    messageInput.setAttribute('placeholder', 'Your message');

    // submit button
    const sendBtn = document.createElement('input');
    sendBtn.setAttribute('type', 'submit');
    sendBtn.setAttribute('value', 'Send');
    

    // form children
    contactForm.appendChild(fullNameLabel);
    contactForm.appendChild(fullNameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(messageInput);
    contactForm.appendChild(sendBtn);

    // map


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

module.exports = __webpack_require__.p + "a4fd95b3eb7ce1fd1c81.svg";

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

module.exports = __webpack_require__.p + "6f3aa88e79f6a1e031c5.svg";

/***/ }),

/***/ "./src/assets/icons/message.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/message.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7bdedcb801df4a65592.svg";

/***/ }),

/***/ "./src/assets/icons/phone.svg":
/*!************************************!*\
  !*** ./src/assets/icons/phone.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6541346bd67ac829c0c.svg";

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

    // const contentChildren = document.querySelectorAll('#content > div');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBb0Isb0RBQVM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxvQkFBb0Isb0RBQVM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixzREFBVzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUlFOzs7Ozs7Ozs7Ozs7Ozs7QUNySUY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFJRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDMkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIscURBQUk7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBSUU7Ozs7Ozs7Ozs7Ozs7OztBQzlDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RGRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBd0M7QUFDRztBQUNQO0FBQ1U7QUFDekI7OztBQUdyQjtBQUNBO0FBQ0E7QUFDQSxtREFBbUQscURBQVk7QUFDL0Q7O0FBRUEsc0NBQXNDLHdEQUFpQjtBQUN2RDs7QUFFQSxpQkFBaUIsaURBQVU7O0FBRTNCLG9CQUFvQiwyREFBaUI7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2JnLWltYWdlKGNyZWRpdDpsaWx5LWJhbnNlKS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCByZ2IoMjQ4LCAyNDMsIDIzOCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBoZWFkZXItc3RhcnQgKi9cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA3JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogLjZyZW0gNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuI2hlYWRlciB1bCBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jaGVhZGVyIHVsIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMTEwLCAzNCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXG59XFxuXFxuI2hlYWRlciAubG9nbyB7XFxuICAgIGZsZXg6IDE7XFxufVxcbi8qIGhlYWRlci1lbmQgKi9cXG5cXG4vKiBtYWluLXN0YXJ0ICovXFxuXFxuLyogYWRkIGFuIGFuaW1hdGlvbiBmb3IgY29udGVudCAqL1xcbkBrZXlmcmFtZXMgbW92ZURvd24ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGhlaWdodDogOTMlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA4LCA4LCAwLjUxNCk7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwIDVyZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbmltYXRpb246IG1vdmVEb3duIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IGgxIHtcXG4gICAgZm9udC1zaXplOiA0LjRyZW07XFxufVxcblxcbiNtYWluLWNvbnRlbnQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAxZW0gMS44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDg3LCAyNik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjRyZW07XFxufVxcblxcbiNtYWluLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgNjIsIDIyKTtcXG59XFxuLyogbWFpbi1lbmQgKi9cXG5cXG4vKiBmb290ZXItc3RhcnQgKi9cXG4jZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjRyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IC44cmVtO1xcbn1cXG4vKiBmb290ZXItZW5kICovXFxuXFxuLyogbWVudS1zdGFydCAqL1xcbiNtZW51LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciA5ZnIgLyAxZnI7XFxuICAgIGhlaWdodDogOTMlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNzE5KTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNtZW51LWNvbnRhaW5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFuaW1hdGlvbjogbW92ZURvd24gMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJnYigyNDAsIDg3LCAyNik7XFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAuNnJlbTtcXG59XFxuXFxuI21lbnUtaXRlbS1jb250YWluZXIge1xcbiAgICAvKiBwYWRkaW5nOiAxcmVtOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1cmVtLCAxZnIpKTtcXG59XFxuXFxuI21lbnUtaXRlbS1jb250YWluZXIgPiBkaXYge1xcbiAgICBhbmltYXRpb246IG1vdmVEb3duIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jbWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdiA+IGgyIHtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgIGNvbG9yOiByZ2IoMjQwLCA4NywgMjYpO1xcbn1cXG5cXG5cXG4jbWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdiA+IHAge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG59XFxuLyogbWVudS1lbmQgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHVFQUF3RjtJQUN4RiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDtBQUNBLGVBQWU7O0FBRWYsZUFBZTs7QUFFZixpQ0FBaUM7QUFDakM7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QiwyQ0FBMkM7SUFDM0MsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0EsYUFBYTs7QUFFYixpQkFBaUI7QUFDakI7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7QUFDQSxlQUFlOztBQUVmLGVBQWU7QUFDZjtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkNBQTJDO0lBQzNDLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBLGFBQWFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy9pbWFnZXMvYmctaW1hZ2VcXFxcKGNyZWRpdDpsaWx5LWJhbnNlXFxcXCkuanBnJyksIHJnYigyNDgsIDI0MywgMjM4KTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxudWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIGhlYWRlci1zdGFydCAqL1xcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDclO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAuNnJlbSA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4jaGVhZGVyIHVsIGxpIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNoZWFkZXIgdWwgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAxMTAsIDM0KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IC40cmVtO1xcbn1cXG5cXG4jaGVhZGVyIC5sb2dvIHtcXG4gICAgZmxleDogMTtcXG59XFxuLyogaGVhZGVyLWVuZCAqL1xcblxcbi8qIG1haW4tc3RhcnQgKi9cXG5cXG4vKiBhZGQgYW4gYW5pbWF0aW9uIGZvciBjb250ZW50ICovXFxuQGtleWZyYW1lcyBtb3ZlRG93biB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbiNtYWluIHtcXG4gICAgaGVpZ2h0OiA5MyU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTE0KTtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAgNXJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFuaW1hdGlvbjogbW92ZURvd24gMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiNtYWluLWNvbnRlbnQgaDEge1xcbiAgICBmb250LXNpemU6IDQuNHJlbTtcXG59XFxuXFxuI21haW4tY29udGVudCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiNtYWluLWNvbnRlbnQgYnV0dG9uIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDFlbSAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgODcsIDI2KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXG59XFxuXFxuI21haW4tY29udGVudCBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCA2MiwgMjIpO1xcbn1cXG4vKiBtYWluLWVuZCAqL1xcblxcbi8qIGZvb3Rlci1zdGFydCAqL1xcbiNmb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1yaWdodDogLjhyZW07XFxufVxcbi8qIGZvb3Rlci1lbmQgKi9cXG5cXG4vKiBtZW51LXN0YXJ0ICovXFxuI21lbnUtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDlmciAvIDFmcjtcXG4gICAgaGVpZ2h0OiA5MyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgOCwgMC43MTkpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuI21lbnUtY29udGFpbmVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYW5pbWF0aW9uOiBtb3ZlRG93biAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmdiKDI0MCwgODcsIDI2KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IC42cmVtO1xcbn1cXG5cXG4jbWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICAgIC8qIHBhZGRpbmc6IDFyZW07ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTVyZW0sIDFmcikpO1xcbn1cXG5cXG4jbWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGFuaW1hdGlvbjogbW92ZURvd24gMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiNtZW51LWl0ZW0tY29udGFpbmVyID4gZGl2ID4gaDIge1xcbiAgICBmb250LXNpemU6IDIuNnJlbTtcXG4gICAgY29sb3I6IHJnYigyNDAsIDg3LCAyNik7XFxufVxcblxcblxcbiNtZW51LWl0ZW0tY29udGFpbmVyID4gZGl2ID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS42cmVtO1xcbn1cXG4vKiBtZW51LWVuZCAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTG9jYXRpb25JY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL2xvY2F0aW9uLnN2Zyc7XG5pbXBvcnQgQ2xvY2tJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL2Nsb2NrLnN2Zyc7XG5pbXBvcnQgUGhvbmVJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL3Bob25lLnN2Zyc7XG5pbXBvcnQgTWVzc2FnZUljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvbWVzc2FnZS5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBjb250YWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29udGFjdEhlYWRpbmcuaW5uZXJUZXh0ID0gJ0NvbnRhY3QgdXMnO1xuXG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtY29udGVudCcpO1xuXG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaW5mbycpO1xuXG4gICAgLy8gYWRkcmVzc1xuICAgIGNvbnN0IGxvY2F0aW9uSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGxvY2F0aW9uSWNvbi5zcmMgPSBMb2NhdGlvbkljb247XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkcmVzcy5hcHBlbmRDaGlsZChsb2NhdGlvbkljb24pO1xuICAgIGNvbnN0IGFkZHJlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZHJlc3NUZXh0LmlubmVySFRNTCA9ICcyODY1IFdhc2hpbmd0b24gU3RyZWV0IDxicj5CZWF2ZXJ0b24sIENBIDIwMTM0J1xuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc1RleHQpO1xuICAgIFxuICAgIC8vIGhvdXJzT3BlblxuICAgIGNvbnN0IGNsb2NrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNsb2NrSWNvbi5zcmMgPSBDbG9ja0ljb247XG5cbiAgICBjb25zdCBob3Vyc09wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc09wZW4uYXBwZW5kQ2hpbGQoY2xvY2tJY29uKTtcbiAgICBjb25zdCBob3Vyc09wZW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzT3BlblRleHQuaW5uZXJIVE1MID0gJ01vbiAtIFRodXJzOiA4YW0gLSA4cG0gPGJyPkZyaSAtIFN1bjogOGFtIC0gMTFwbSc7XG4gICAgaG91cnNPcGVuLmFwcGVuZENoaWxkKGhvdXJzT3BlblRleHQpO1xuXG5cbiAgICAvLyBwaG9uZVxuICAgIGNvbnN0IHBob25lSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHBob25lSWNvbi5zcmMgPSBQaG9uZUljb247XG5cbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBob25lLmFwcGVuZENoaWxkKHBob25lSWNvbik7XG4gICAgY29uc3QgcGhvbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lVGV4dC5pbm5lclRleHQgPSAnKDIyMyktODgwIDUxNTUnO1xuICAgIHBob25lLmFwcGVuZENoaWxkKHBob25lVGV4dCk7XG5cbiAgICAvLyBtZXNzYWdlIHVzXG4gICAgY29uc3QgbWVzc2FnZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBtZXNzYWdlSWNvbi5zcmMgPSBNZXNzYWdlSWNvbjtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaG9uZS5hcHBlbmRDaGlsZChtZXNzYWdlSWNvbik7XG4gICAgY29uc3QgbWVzc2FnZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVzc2FnZVRleHQuaW5uZXJUZXh0ID0gJ01lc3NhZ2UgdXMnO1xuICAgIG1lc3NhZ2UuYXBwZW5kQ2hpbGQobWVzc2FnZVRleHQpO1xuXG4gICAgLy8gY29udGFjdEluZm8gY2hpbGRyZW5cbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChob3Vyc09wZW4pO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblxuICAgIC8vIGZvcm1cbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb250YWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gICAgXG4gICAgLy8gZnVsbE5hbWVcbiAgICBjb25zdCBmdWxsTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBmdWxsTmFtZUxhYmVsLmlubmVyVGV4dCA9ICdGVUxMIE5BTUUnO1xuICAgIGZ1bGxOYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZnVsbC1uYW1lJyk7XG5cbiAgICBjb25zdCBmdWxsTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmdWxsTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZnVsbE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Z1bGwtbmFtZScpO1xuICAgIGZ1bGxOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Z1bGxOYW1lJyk7XG4gICAgZnVsbE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2Z1bGwgbmFtZScpO1xuXG4gICAgLy8gZW1haWxcbiAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBlbWFpbExhYmVsLmlubmVyVGV4dCA9ICdFTUFJTCc7XG4gICAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbWFpbCcpO1xuXG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWwnKTtcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdlbWFpbCcpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdlbWFpbCcpO1xuXG4gICAgLy8gbWVzc2FnZUlucHV0XG4gICAgY29uc3QgbWVzc2FnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBtZXNzYWdlTGFiZWwuaW5uZXJUZXh0ID0gJ01lc3NhZ2UnO1xuICAgIG1lc3NhZ2VMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZXNzYWdlJyk7XG5cbiAgICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UnKTtcbiAgICBtZXNzYWdlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ21lc3NhZ2UnKTtcbiAgICBtZXNzYWdlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIG1lc3NhZ2UnKTtcblxuICAgIC8vIHN1Ym1pdCBidXR0b25cbiAgICBjb25zdCBzZW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzZW5kQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBzZW5kQnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnU2VuZCcpO1xuICAgIFxuXG4gICAgLy8gZm9ybSBjaGlsZHJlblxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZ1bGxOYW1lTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZ1bGxOYW1lSW5wdXQpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VMYWJlbCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChzZW5kQnRuKTtcblxuICAgIC8vIG1hcFxuXG5cbiAgICAvLyBjb250YWN0Q29udGVudCBjaGlsZHJlblxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XG4gICAgXG4gICAgLy8gY29udGFjdENvbnRhaW5lciBjaGlsZHJlblxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRpbmcpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RDb250YWluZXI7XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlQ29udGFjdFBhZ2Vcbn07XG4iLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGNvbnN0IGhlYWRlckl0ZW1Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVySXRlbUxvZ28uaW5uZXJUZXh0ID0gJ0xvZ28nO1xuICAgIGhlYWRlckl0ZW1Mb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBjb25zdCBoZWFkZXJJdGVtSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaGVhZGVySXRlbUhvbWUuaW5uZXJUZXh0ID0gJ0hPTUUnO1xuICAgIGhlYWRlckl0ZW1Ib21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1idG4nKTtcbiAgICBjb25zdCBoZWFkZXJJdGVtTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaGVhZGVySXRlbU1lbnUuaW5uZXJUZXh0ID0gJ01FTlUnO1xuICAgIGhlYWRlckl0ZW1Ib21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1idG4nKTtcbiAgICBjb25zdCBoZWFkZXJJdGVtQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaGVhZGVySXRlbUNvbnRhY3QuaW5uZXJUZXh0ID0gJ0NPTlRBQ1QnO1xuICAgIGhlYWRlckl0ZW1Ib21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1idG4nKTtcblxuICAgIC8vIGFkZGluZyBjb250ZW50c1xuICAgIGhlYWRlckxpc3QuYXBwZW5kQ2hpbGQoaGVhZGVySXRlbUhvbWUpO1xuICAgIGhlYWRlckxpc3QuYXBwZW5kQ2hpbGQoaGVhZGVySXRlbU1lbnUpO1xuICAgIGhlYWRlckxpc3QuYXBwZW5kQ2hpbGQoaGVhZGVySXRlbUNvbnRhY3QpO1xuICAgIFxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJJdGVtTG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxpc3QpO1xuXG4gICAgY29uc3QgaG9tZUJ0biA9IGhlYWRlckl0ZW1Ib21lO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBoZWFkZXJJdGVtTWVudTtcbiAgICBjb25zdCBjb250YWN0QnRuID0gaGVhZGVySXRlbUNvbnRhY3Q7XG5cbiAgICByZXR1cm4gW2hlYWRlciwgaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0bl07XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlSGVhZGVyXG59O1xuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvZ2l0aHViLnN2Zyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVTZWN0aW9uKCkge1xuICAgIFxuICAgIC8vIG1haW4gc2VjdGlvblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSAnV2VsY29tZSBUbyA8YnI+IFRhc3R5IEx1bmNoIFJlc3RhdXJhbnQnXG4gICAgY29uc3QgaW50cm9kdWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGludHJvZHVjdGlvbi5pbm5lckhUTUwgPSAnTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBvc3NpbXVzIGltcGVkaXQgcmVwcmVoZW5kZXJpdCBxdW9zIG1vbGVzdGlhcy4gPGJyPk9mZmljaWEgZW5pbSBjb25zZWN0ZXR1ciBhbGlxdWlkIHZvbHVwdGF0dW0gbWludXMhIE1hZ25hbSBxdWlzcXVhbSB2b2x1cHRhdGVtIG9mZmljaWEgY29uc2VjdGV0dXIgbmVzY2l1bnQuJ1xuICAgIGNvbnN0IHJlc2VydmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNlcnZlQnRuLmlubmVyVGV4dCA9ICdSRVNFUlZBVElPTic7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4tY29udGVudCcpO1xuXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaW50cm9kdWN0aW9uKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZlQnRuKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcblxuICAgIC8vIGZvb3RlciBzZWN0aW9uXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBhdXRob3JJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGF1dGhvckluZm8uaW5uZXJIVE1MID0gJ0NvcHlyaWdodCAmY29weTsgMjAyMiBBdmFnU2FyZ3N5YW4nO1xuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL0F2YWdTYXJnc3lhbicpO1xuICAgIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cbiAgICAvLyBsb2FkIHRoZSBnaXRodWIgbG9nb1xuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG15SWNvbi5zcmMgPSBJY29uO1xuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQobXlJY29uKTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhdXRob3JJbmZvKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgcmV0dXJuIFttYWluLCByZXNlcnZlQnRuXTtcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVIb21lU2VjdGlvblxufTtcbiIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoY29udGVudCkge1xuXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVIZWFkaW5nLmlubmVyVGV4dCA9ICdNZW51JztcblxuICAgIGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW1Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51VGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51VGl0bGUxLmlubmVyVGV4dCA9ICdCRUVGJztcbiAgICBjb25zdCBtZW51Q29udGVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW0xLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1pdGVtMScpO1xuICAgIG1lbnVDb250ZW50MS5pbm5lckhUTUwgPSAnVGFzdHkgTWVhbCAuLi4uLi4uLi4uIDEwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDE5JCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxNSw1MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxMyQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAyMCw5MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAzMyw1MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxMCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiA4LDUwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDkkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gMTckIDxicj4nXG5cbiAgICBtZW51SXRlbTEuYXBwZW5kQ2hpbGQobWVudVRpdGxlMSk7XG4gICAgbWVudUl0ZW0xLmFwcGVuZENoaWxkKG1lbnVDb250ZW50MSk7XG5cbiAgICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51VGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51VGl0bGUyLmlubmVyVGV4dCA9ICdDSElDS0VOJztcbiAgICBjb25zdCBtZW51Q29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW0yLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1pdGVtMScpO1xuICAgIG1lbnVDb250ZW50Mi5pbm5lckhUTUwgPSAnVGFzdHkgTWVhbCAuLi4uLi4uLi4uIDEwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDE5JCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxNSw1MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxMyQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAyMCw5MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAzMyw1MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxMCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiA4LDUwJCA8YnI+J1xuXG4gICAgbWVudUl0ZW0yLmFwcGVuZENoaWxkKG1lbnVUaXRsZTIpO1xuICAgIG1lbnVJdGVtMi5hcHBlbmRDaGlsZChtZW51Q29udGVudDIpO1xuXG4gICAgY29uc3QgbWVudUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudVRpdGxlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudVRpdGxlMy5pbm5lclRleHQgPSAnUE9SSyc7XG4gICAgY29uc3QgbWVudUNvbnRlbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtMy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtaXRlbTEnKTtcbiAgICBtZW51Q29udGVudDMuaW5uZXJIVE1MID0gJ1Rhc3R5IE1lYWwgLi4uLi4uLi4uLiAxMCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxOSQkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gMTUsNTAkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gMTMkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gMjAsOTAkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gMzMsNTAkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gMTAkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gOCw1MCQgPGJyPidcblxuICAgIG1lbnVJdGVtMy5hcHBlbmRDaGlsZChtZW51VGl0bGUzKTtcbiAgICBtZW51SXRlbTMuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQzKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVUaXRsZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVUaXRsZTQuaW5uZXJUZXh0ID0gJ0xBTUInO1xuICAgIGNvbnN0IG1lbnVDb250ZW50NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWl0ZW0xJyk7XG4gICAgbWVudUNvbnRlbnQ0LmlubmVySFRNTCA9ICdUYXN0eSBNZWFsIC4uLi4uLi4uLi4gOSQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxNSw1MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxMyQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAyMCw5MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAzMyw1MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAxMCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiA4LDUwJCA8YnI+J1xuXG4gICAgbWVudUl0ZW00LmFwcGVuZENoaWxkKG1lbnVUaXRsZTQpO1xuICAgIG1lbnVJdGVtNC5hcHBlbmRDaGlsZChtZW51Q29udGVudDQpO1xuXG4gICAgY29uc3QgbWVudUl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudVRpdGxlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudVRpdGxlNS5pbm5lclRleHQgPSAnU0FMQURTJztcbiAgICBjb25zdCBtZW51Q29udGVudDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW01LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1pdGVtMScpO1xuICAgIG1lbnVDb250ZW50NS5pbm5lckhUTUwgPSAnVGFzdHkgTWVhbCAuLi4uLi4uLi4uIDkkJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDgsNTAkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gMTMkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gNiw5MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiAzLDUwJCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDQkIDxicj5UYXN0eSBNZWFsIC4uLi4uLi4uLi4gOCw1MCQgPGJyPlRhc3R5IE1lYWwgLi4uLi4uLi4uLiA1JCA8YnI+VGFzdHkgTWVhbCAuLi4uLi4uLi4uIDcsNzAkIDxicj4nXG5cbiAgICBtZW51SXRlbTUuYXBwZW5kQ2hpbGQobWVudVRpdGxlNSk7XG4gICAgbWVudUl0ZW01LmFwcGVuZENoaWxkKG1lbnVDb250ZW50NSk7XG5cblxuICAgIGNvbnN0IG1lbnVJdGVtNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVUaXRsZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVUaXRsZTYuaW5uZXJUZXh0ID0gJ0RSSU5LUyc7XG4gICAgY29uc3QgbWVudUNvbnRlbnQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtNi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtaXRlbTEnKTtcbiAgICBtZW51Q29udGVudDYuaW5uZXJIVE1MID0gJ0dvb2QgRHJpbmsgLi4uLi4uLi4uLiAxMCQgPGJyPkdvb2QgRHJpbmsgLi4uLi4uLi4uLiAxOSQkIDxicj5Hb29kIERyaW5rIC4uLi4uLi4uLi4gMTUsNTAkIDxicj5Hb29kIERyaW5rIC4uLi4uLi4uLi4gMTMkIDxicj5Hb29kIERyaW5rIC4uLi4uLi4uLi4gMjAsOTAkIDxicj5Hb29kIERyaW5rIC4uLi4uLi4uLi4gMzMsNTAkIDxicj5Hb29kIERyaW5rIC4uLi4uLi4uLi4gMTAkIDxicj5Hb29kIERyaW5rIC4uLi4uLi4uLi4gOCw1MCQgPGJyPidcblxuICAgIG1lbnVJdGVtNi5hcHBlbmRDaGlsZChtZW51VGl0bGU2KTtcbiAgICBtZW51SXRlbTYuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQ2KTtcblxuICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtMSk7XG4gICAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcbiAgICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbTMpO1xuICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtNCk7XG4gICAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW01KTtcbiAgICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbTYpO1xuICAgIFxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRpbmcpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1Db250YWluZXIpO1xuICAgIHJldHVybiBtZW51Q29udGFpbmVyO1xufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1lbnVcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgY3JlYXRlSG9tZVNlY3Rpb24gfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0UGFnZSB9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG5mdW5jdGlvbiBjcmVhdGVQYWdlQ29udGVudHMoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgW2hlYWRlciwgaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0bl0gPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBbaG9tZVNlY3Rpb24sIHJlc2VydmVCdG5dID0gY3JlYXRlSG9tZVNlY3Rpb24oKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVTZWN0aW9uKTtcblxuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVNZW51KCk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gY3JlYXRlQ29udGFjdFBhZ2UoKTtcblxuICAgIC8vIGNvbnN0IGNvbnRlbnRDaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50ID4gZGl2Jyk7XG5cbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIHdoaWxlIChjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChob21lU2VjdGlvbik7XG4gICAgfSlcblxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIH0pO1xuXG4gICAgcmVzZXJ2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICB3aGlsZSAoY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgfSk7XG5cbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIHdoaWxlIChjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICB9KVxuXG59O1xuXG5jcmVhdGVQYWdlQ29udGVudHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==