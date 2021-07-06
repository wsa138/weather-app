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
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sky_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sky.jpg */ "./src/sky.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_sky_jpg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  color: #1b1b1e;\n}\n\n/* Form styling */\n\nform {\n  margin: 1.5em;\n  height: 3em;\n  font-weight: 700;\n}\n\nlabel {\n  font-size: 1.5em;\n}\n\ninput {\n  font-size: 1.25em;\n  background: #f5f5f5;\n}\n\n#locationSubmit {\n  background-color: #837a75;\n}\n\n#locationSubmit:hover {\n  cursor: pointer;\n  box-shadow: 1px 1px 1px black;\n  border-color: grey;\n}\n\n#currentWeather {\n  display: flex;\n  justify-content: center;\n  height: 20em;\n  max-width: 50em;\n  margin: auto;\n}\n\n/*Headers styling */\n\nh1 {\n  font-size: 3em;\n}\n\nh2 {\n  font-size: 1.5em;\n}\n\n#cityDate {\n  text-align: center;\n  margin: 0.5em;\n}\n\n/* Weather Info Section Containers*/\n\n#summary {\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n#tempSection {\n  display: flex;\n  flex-direction: row;\n  flex-basis: 0;\n  flex-grow: 0.85;\n  align-items: center;\n  justify-content: space-around;\n  margin: 2em;\n}\n\n#otherInfo {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 0.9;\n  justify-content: center;\n  padding: 1.5em;\n}\n\n/* Summary/Gif section */\n\n#descriptionText {\n  font-size: 2rem;\n  margin-top: 0.5em;\n  font-weight: 700;\n}\n\n#gifContainer {\n  border: solid 5px rgb(0, 0, 0);\n  background-color: white;\n  opacity: 0.7;\n  border-radius: 50%;\n}\n\n#weatherGif {\n  mix-blend-mode: multiply;\n}\n\n/* Temperature Section */\n\n#currentTemp {\n  display: flex;\n  align-items: center;\n}\n\n#currentTemp h3 {\n  font-size: 5em;\n}\n\n#unitContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n#unitContainer button {\n  background: none;\n  border: none;\n  font-size: 1.5em;\n  color: #837a75;\n}\n\n#unitContainer button:hover {\n  cursor: pointer;\n}\n\n#unitContainer .selectedUnit {\n  color: #1b1b1e;\n}\n\n#highLow {\n  display: flex;\n  flex-direction: column;\n  height: 4em;\n  justify-content: space-between;\n}\n\n#highLow div {\n  display: flex;\n  align-items: center;\n}\n\n#highLow div p {\n  font-size: 1.5em;\n}\n\n/* Other Info section */\n#otherInfo div {\n  display: flex;\n  margin: 0.5em 0 0em 0;\n  justify-content: space-between;\n}\n\n#sun {\n  flex-direction: column;\n  align-items: center;\n}\n\n/*Weather Info Elements */\n#weatherGif {\n  width: 12em;\n  height: 12em;\n  background-color: blue;\n}\n\n@media only screen and (max-width: 46em) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n\n  #currentWeather {\n    flex-direction: column;\n    align-items: center;\n    height: 60em;\n  }\n\n  /*TODO: Set section element height so they are closer together. */\n  #currentWeather section {\n    width: 18em;\n    margin: 0;\n    height: 10em;\n    flex: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,cAAc;EACd,iCAAiC;AACnC;;AAEA;EACE,yDAAkC;EAClC,cAAc;AAChB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,YAAY;AACd;;AAEA,mBAAmB;;AAEnB;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA,mCAAmC;;AAEnC;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,cAAc;AAChB;;AAEA,wBAAwB;;AAExB;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA,wBAAwB;;AAExB;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,uBAAuB;AACvB;EACE,aAAa;EACb,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,yBAAyB;AACzB;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;EACd;;EAEA,iEAAiE;EACjE;IACE,WAAW;IACX,SAAS;IACT,YAAY;IACZ,OAAO;EACT;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  background-image: url('./sky.jpg');\n  color: #1b1b1e;\n}\n\n/* Form styling */\n\nform {\n  margin: 1.5em;\n  height: 3em;\n  font-weight: 700;\n}\n\nlabel {\n  font-size: 1.5em;\n}\n\ninput {\n  font-size: 1.25em;\n  background: #f5f5f5;\n}\n\n#locationSubmit {\n  background-color: #837a75;\n}\n\n#locationSubmit:hover {\n  cursor: pointer;\n  box-shadow: 1px 1px 1px black;\n  border-color: grey;\n}\n\n#currentWeather {\n  display: flex;\n  justify-content: center;\n  height: 20em;\n  max-width: 50em;\n  margin: auto;\n}\n\n/*Headers styling */\n\nh1 {\n  font-size: 3em;\n}\n\nh2 {\n  font-size: 1.5em;\n}\n\n#cityDate {\n  text-align: center;\n  margin: 0.5em;\n}\n\n/* Weather Info Section Containers*/\n\n#summary {\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n#tempSection {\n  display: flex;\n  flex-direction: row;\n  flex-basis: 0;\n  flex-grow: 0.85;\n  align-items: center;\n  justify-content: space-around;\n  margin: 2em;\n}\n\n#otherInfo {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 0.9;\n  justify-content: center;\n  padding: 1.5em;\n}\n\n/* Summary/Gif section */\n\n#descriptionText {\n  font-size: 2rem;\n  margin-top: 0.5em;\n  font-weight: 700;\n}\n\n#gifContainer {\n  border: solid 5px rgb(0, 0, 0);\n  background-color: white;\n  opacity: 0.7;\n  border-radius: 50%;\n}\n\n#weatherGif {\n  mix-blend-mode: multiply;\n}\n\n/* Temperature Section */\n\n#currentTemp {\n  display: flex;\n  align-items: center;\n}\n\n#currentTemp h3 {\n  font-size: 5em;\n}\n\n#unitContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n#unitContainer button {\n  background: none;\n  border: none;\n  font-size: 1.5em;\n  color: #837a75;\n}\n\n#unitContainer button:hover {\n  cursor: pointer;\n}\n\n#unitContainer .selectedUnit {\n  color: #1b1b1e;\n}\n\n#highLow {\n  display: flex;\n  flex-direction: column;\n  height: 4em;\n  justify-content: space-between;\n}\n\n#highLow div {\n  display: flex;\n  align-items: center;\n}\n\n#highLow div p {\n  font-size: 1.5em;\n}\n\n/* Other Info section */\n#otherInfo div {\n  display: flex;\n  margin: 0.5em 0 0em 0;\n  justify-content: space-between;\n}\n\n#sun {\n  flex-direction: column;\n  align-items: center;\n}\n\n/*Weather Info Elements */\n#weatherGif {\n  width: 12em;\n  height: 12em;\n  background-color: blue;\n}\n\n@media only screen and (max-width: 46em) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n\n  #currentWeather {\n    flex-direction: column;\n    align-items: center;\n    height: 60em;\n  }\n\n  /*TODO: Set section element height so they are closer together. */\n  #currentWeather section {\n    width: 18em;\n    margin: 0;\n    height: 10em;\n    flex: 1;\n  }\n}\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/sky.jpg":
/*!*********************!*\
  !*** ./src/sky.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42638ea7ab3b6288f381.jpg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


// DOM elements.
const dateText = document.getElementById('dateText');
const description = document.getElementById('descriptionText');
const sun = document.getElementById('sunText');
const temp = document.getElementById('tempText');
const tempMax = document.getElementById('tempMaxText');
const tempMin = document.getElementById('tempMinText');
const humidity = document.getElementById('humidityText');
const wind = document.getElementById('windText');
const locationEle = document.getElementById('locationText');
const weatherGif = document.getElementById('weatherGif');
const tempBtnF = document.getElementById('tempF');
const tempBtnC = document.getElementById('tempC');

// Make fetch request for city info and return json object.
async function getData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=149ffce1bb4cd39b05ac9f60cbf67c14`
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return console.log(error, 'There was an error getting the weather info');
  }
}

// Return necessary weather info as a new object.
async function getWeather(weatherObj) {
  const {
    main: { temp },
    main: { temp_max },
    main: { temp_min },
    main: { humidity },
    sys: { sunrise },
    sys: { sunset },
    weather: {
      0: { description },
    },
    weather: {
      0: { main },
    },
    wind: { speed },
    wind: { deg },
  } = await weatherObj;
  return {
    temp,
    temp_max,
    temp_min,
    humidity,
    sunrise,
    sunset,
    description,
    main,
    speed,
    deg,
  };
}

// Event listener for location input search.
document.getElementById('locationSubmit').addEventListener('click', (e) => {
  e.preventDefault();
  runApp();
});

// Convert wind direction
function convertWind(directionDegree) {
  const windDirection = directionDegree;
  if (windDirection > 349 || windDirection <= 11) {
    return 'N';
  }
  if (windDirection > 11 && windDirection <= 34) {
    return 'NNE';
  }
  if (windDirection > 34 && windDirection <= 56) {
    return 'NE';
  }
  if (windDirection > 56 && windDirection <= 80) {
    return 'ENE';
  }
  if (windDirection > 80 && windDirection <= 101) {
    return 'E';
  }
  if (windDirection > 101 && windDirection <= 124) {
    return 'ESE';
  }
  if (windDirection > 124 && windDirection <= 146) {
    return 'SE';
  }
  if (windDirection > 146 && windDirection <= 169) {
    return 'SSE';
  }
  if (windDirection > 169 && windDirection <= 191) {
    return 'S';
  }
  if (windDirection > 191 && windDirection <= 214) {
    return 'SSW';
  }
  if (windDirection > 214 && windDirection <= 236) {
    return 'SW';
  }
  if (windDirection > 236 && windDirection <= 259) {
    return 'WSW';
  }
  if (windDirection > 259 && windDirection <= 281) {
    return 'W';
  }
  if (windDirection > 281 && windDirection <= 304) {
    return 'WNW';
  }
  if (windDirection > 304 && windDirection <= 326) {
    return 'NW';
  }
  if (windDirection > 326 && windDirection <= 349) {
    return 'NNW';
  }
  return 'N/A';
}

// Convert the sunrise and sunset times.
function convertSun(sunTime) {
  const sunOld = new Date(sunTime * 1000);

  // Converted sunset
  const sunNew = `${convertMilitary(
    sunOld.getHours()
  )}:${sunOld.getMinutes()}:${sunOld.getSeconds()}`;

  return sunNew;
}

// Convert military time hours to standard.
function convertMilitary(hour) {
  if (hour > 12) {
    return hour - 12;
  }
  return hour;
}

// Convert fahrenheit temperatures to celsius
function convertTemp(tempNum) {
  return ((tempNum - 32) * 5) / 9;
}

// Replace the text content of element with the provided value.
function replaceElementValues(ele, val) {
  ele.textContent = val;
}

// Displays the information to the page.
function displayData(dataObj, location) {
  // Replace text content
  replaceElementValues(dateText, dataObj.date);
  replaceElementValues(description, capFirst(dataObj.description));
  replaceElementValues(sun, `${dataObj.sunrise}/${dataObj.sunset}`);
  replaceElementValues(temp, dataObj.temp);
  replaceElementValues(tempMax, dataObj.temp_max);
  replaceElementValues(tempMin, dataObj.temp_min);
  replaceElementValues(humidity, `${dataObj.humidity}%`);
  replaceElementValues(wind, `${dataObj.speed} m/h ${dataObj.wind}`);
  replaceElementValues(locationEle, capFirst(location));
  setGif(dataObj.gifId);
}

document.getElementById('locationSubmit').click();

// Replace temperature values with selected temperature value.
function changeTemp(current, max, min) {
  temp.textContent = current;
  tempMax.textContent = max;
  tempMin.textContent = min;
}

// Runs app which takes input, gets data and display data to page.
async function runApp() {
  const location = document.getElementById('locationInput').value;
  const weatherData = await getWeather(getData(location));
  const newWeatherData = updateWeatherData(weatherData);
  displayData(newWeatherData, location);

  // Unit button event listeners
  tempBtnF.addEventListener('click', (e) => {
    changeTemp(
      newWeatherData.temp,
      newWeatherData.temp_max,
      newWeatherData.temp_min
    );
    toggleUnitBtn(tempBtnF, tempBtnC);
  });

  tempBtnC.addEventListener('click', () => {
    changeTemp(
      newWeatherData.tempCel,
      newWeatherData.tempMaxCel,
      newWeatherData.tempMinCel
    );
    toggleUnitBtn(tempBtnC, tempBtnF);
  });
}

// Use regex to determine the type of weather gif needed.
function findGif(info) {
  const currentWeather = info;
  const clouds = /clouds/i;
  const thunderstorm = /thunderstorm/i;
  const drizzle = /drizzle/i;
  const rain = /rain/i;
  const snow = /snow/i;
  const clear = /clear/i;

  const weatherTypeRegex = [clouds, thunderstorm, drizzle, rain, snow, clear];

  // eslint-disable-next-line no-restricted-syntax
  for (const reg of weatherTypeRegex) {
    if (reg.test(currentWeather)) {
      return currentWeather.match(reg)[0];
    }
  }
}

// Takes original weather data and creates new object with the necessary
// properties created by running appropriate functions on original weather data.
function updateWeatherData(original) {
  const updatedData = { ...original };

  delete updatedData.deg;
  delete updatedData.sunrise;
  delete updatedData.sunset;

  const date = new Date();
  updatedData.date = date.toDateString();
  updatedData.sunrise = convertSun(original.sunrise);
  updatedData.sunset = convertSun(original.sunset);
  updatedData.temp = Math.round(original.temp);
  updatedData.temp_max = Math.round(original.temp_max);
  updatedData.temp_min = Math.round(original.temp_min);
  updatedData.tempCel = Math.round(convertTemp(original.temp));
  updatedData.tempMaxCel = Math.round(convertTemp(original.temp_max));
  updatedData.tempMinCel = Math.round(convertTemp(original.temp_min));
  updatedData.wind = convertWind(original.deg);
  updatedData.weatherType = findGif(original.description);
  updatedData.gifId = getGifId(updatedData.weatherType);

  return updatedData;
}

// An object containing weather gif api id's.
const weatherGifId = {
  rain: '20847871',
  snow: '20847872',
  clear: '20847874',
  thunderstorm: '20847877',
  clouds: '20847870',
};

// Function that takes the weather type and fetches the corresponding weather gif.
function getGifId(type) {
  let gifId = 0;
  if (weatherGifId.hasOwnProperty(type)) {
    return weatherGifId[type];
  }
  console.log('No matching gif id.');
  return weatherGifId.clouds;
}

async function setGif(id) {
  if (id !== 0) {
    fetch(`https://g.tenor.com/v1/gifs?ids=${id}&key=LIVDSRZULELA`, {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((response) => {
        weatherGif.src = response.results[0].media[0].tinygif.url;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// Capitalize first letter of each word in a string.
function capFirst(str) {
  const newArr = str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1));
  return newArr.join(' ');
}

// Toggle the class on each unit.
function toggleUnitBtn(pressed, reset) {
  pressed.classList.add('selectedUnit');
  reset.classList.remove('selectedUnit');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQzFDO0FBQ3RELDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQixDQUFDLHFDQUE2QjtBQUN0RztBQUNBLDZDQUE2QyxjQUFjLGVBQWUsbUJBQW1CLHNDQUFzQyxHQUFHLFVBQVUsc0VBQXNFLG1CQUFtQixHQUFHLGdDQUFnQyxrQkFBa0IsZ0JBQWdCLHFCQUFxQixHQUFHLFdBQVcscUJBQXFCLEdBQUcsV0FBVyxzQkFBc0Isd0JBQXdCLEdBQUcscUJBQXFCLDhCQUE4QixHQUFHLDJCQUEyQixvQkFBb0Isa0NBQWtDLHVCQUF1QixHQUFHLHFCQUFxQixrQkFBa0IsNEJBQTRCLGlCQUFpQixvQkFBb0IsaUJBQWlCLEdBQUcsZ0NBQWdDLG1CQUFtQixHQUFHLFFBQVEscUJBQXFCLEdBQUcsZUFBZSx1QkFBdUIsa0JBQWtCLEdBQUcsc0RBQXNELGtCQUFrQixrQkFBa0IsaUJBQWlCLDJCQUEyQix3QkFBd0IsdUJBQXVCLDRCQUE0QixHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLGtCQUFrQixvQkFBb0Isd0JBQXdCLGtDQUFrQyxnQkFBZ0IsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQixrQkFBa0IsbUJBQW1CLDRCQUE0QixtQkFBbUIsR0FBRyxtREFBbUQsb0JBQW9CLHNCQUFzQixxQkFBcUIsR0FBRyxtQkFBbUIsbUNBQW1DLDRCQUE0QixpQkFBaUIsdUJBQXVCLEdBQUcsaUJBQWlCLDZCQUE2QixHQUFHLCtDQUErQyxrQkFBa0Isd0JBQXdCLEdBQUcscUJBQXFCLG1CQUFtQixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLEdBQUcsMkJBQTJCLHFCQUFxQixpQkFBaUIscUJBQXFCLG1CQUFtQixHQUFHLGlDQUFpQyxvQkFBb0IsR0FBRyxrQ0FBa0MsbUJBQW1CLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLGdCQUFnQixtQ0FBbUMsR0FBRyxrQkFBa0Isa0JBQWtCLHdCQUF3QixHQUFHLG9CQUFvQixxQkFBcUIsR0FBRyw4Q0FBOEMsa0JBQWtCLDBCQUEwQixtQ0FBbUMsR0FBRyxVQUFVLDJCQUEyQix3QkFBd0IsR0FBRyw2Q0FBNkMsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsR0FBRyw4Q0FBOEMsVUFBVSxvQkFBb0IsNkJBQTZCLEtBQUssdUJBQXVCLDZCQUE2QiwwQkFBMEIsbUJBQW1CLEtBQUsscUdBQXFHLGtCQUFrQixnQkFBZ0IsbUJBQW1CLGNBQWMsS0FBSyxHQUFHLFNBQVMsZ0ZBQWdGLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssNEJBQTRCLGNBQWMsZUFBZSxtQkFBbUIsc0NBQXNDLEdBQUcsVUFBVSx1Q0FBdUMsbUJBQW1CLEdBQUcsZ0NBQWdDLGtCQUFrQixnQkFBZ0IscUJBQXFCLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxXQUFXLHNCQUFzQix3QkFBd0IsR0FBRyxxQkFBcUIsOEJBQThCLEdBQUcsMkJBQTJCLG9CQUFvQixrQ0FBa0MsdUJBQXVCLEdBQUcscUJBQXFCLGtCQUFrQiw0QkFBNEIsaUJBQWlCLG9CQUFvQixpQkFBaUIsR0FBRyxnQ0FBZ0MsbUJBQW1CLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxlQUFlLHVCQUF1QixrQkFBa0IsR0FBRyxzREFBc0Qsa0JBQWtCLGtCQUFrQixpQkFBaUIsMkJBQTJCLHdCQUF3Qix1QkFBdUIsNEJBQTRCLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0Isa0JBQWtCLG9CQUFvQix3QkFBd0Isa0NBQWtDLGdCQUFnQixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLGtCQUFrQixtQkFBbUIsNEJBQTRCLG1CQUFtQixHQUFHLG1EQUFtRCxvQkFBb0Isc0JBQXNCLHFCQUFxQixHQUFHLG1CQUFtQixtQ0FBbUMsNEJBQTRCLGlCQUFpQix1QkFBdUIsR0FBRyxpQkFBaUIsNkJBQTZCLEdBQUcsK0NBQStDLGtCQUFrQix3QkFBd0IsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIsR0FBRywyQkFBMkIscUJBQXFCLGlCQUFpQixxQkFBcUIsbUJBQW1CLEdBQUcsaUNBQWlDLG9CQUFvQixHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLG1DQUFtQyxHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLEdBQUcsb0JBQW9CLHFCQUFxQixHQUFHLDhDQUE4QyxrQkFBa0IsMEJBQTBCLG1DQUFtQyxHQUFHLFVBQVUsMkJBQTJCLHdCQUF3QixHQUFHLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLDJCQUEyQixHQUFHLDhDQUE4QyxVQUFVLG9CQUFvQiw2QkFBNkIsS0FBSyx1QkFBdUIsNkJBQTZCLDBCQUEwQixtQkFBbUIsS0FBSyxxR0FBcUcsa0JBQWtCLGdCQUFnQixtQkFBbUIsY0FBYyxLQUFLLEdBQUcscUJBQXFCO0FBQ2w0TztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsOEZBQThGLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRW5mLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7OztBQy9CYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakN5RjtBQUN6RixZQUF1Rjs7QUFFdkY7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJeEIsaUVBQWUsMEZBQWMsTUFBTSxFOzs7Ozs7Ozs7O0FDWnRCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7OztVQzVRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7QUNmcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELEtBQUs7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsV0FBVztBQUN0QixXQUFXLFdBQVc7QUFDdEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsU0FBUztBQUNuQjtBQUNBLFVBQVUsY0FBYztBQUN4QixLQUFLO0FBQ0w7QUFDQSxVQUFVLE9BQU87QUFDakIsS0FBSztBQUNMLFdBQVcsUUFBUTtBQUNuQixXQUFXLE1BQU07QUFDakIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLElBQUksR0FBRyxvQkFBb0IsR0FBRyxvQkFBb0I7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnQkFBZ0IsR0FBRyxlQUFlO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQkFBaUI7QUFDckQsZ0NBQWdDLGNBQWMsT0FBTyxhQUFhO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsR0FBRztBQUNoRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9za3kuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGNvbG9yOiAjMWIxYjFlO1xcbn1cXG5cXG4vKiBGb3JtIHN0eWxpbmcgKi9cXG5cXG5mb3JtIHtcXG4gIG1hcmdpbjogMS41ZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG59XFxuXFxuI2xvY2F0aW9uU3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MzdhNzU7XFxufVxcblxcbiNsb2NhdGlvblN1Ym1pdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG59XFxuXFxuI2N1cnJlbnRXZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMjBlbTtcXG4gIG1heC13aWR0aDogNTBlbTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLypIZWFkZXJzIHN0eWxpbmcgKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuI2NpdHlEYXRlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMC41ZW07XFxufVxcblxcbi8qIFdlYXRoZXIgSW5mbyBTZWN0aW9uIENvbnRhaW5lcnMqL1xcblxcbiNzdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWJhc2lzOiAwO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3RlbXBTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMC44NTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMmVtO1xcbn1cXG5cXG4jb3RoZXJJbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMC45O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVlbTtcXG59XFxuXFxuLyogU3VtbWFyeS9HaWYgc2VjdGlvbiAqL1xcblxcbiNkZXNjcmlwdGlvblRleHQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jZ2lmQ29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgNXB4IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4jd2VhdGhlckdpZiB7XFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxufVxcblxcbi8qIFRlbXBlcmF0dXJlIFNlY3Rpb24gKi9cXG5cXG4jY3VycmVudFRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjdXJyZW50VGVtcCBoMyB7XFxuICBmb250LXNpemU6IDVlbTtcXG59XFxuXFxuI3VuaXRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN1bml0Q29udGFpbmVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGNvbG9yOiAjODM3YTc1O1xcbn1cXG5cXG4jdW5pdENvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdW5pdENvbnRhaW5lciAuc2VsZWN0ZWRVbml0IHtcXG4gIGNvbG9yOiAjMWIxYjFlO1xcbn1cXG5cXG4jaGlnaExvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNGVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jaGlnaExvdyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoaWdoTG93IGRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi8qIE90aGVyIEluZm8gc2VjdGlvbiAqL1xcbiNvdGhlckluZm8gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAuNWVtIDAgMGVtIDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNzdW4ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qV2VhdGhlciBJbmZvIEVsZW1lbnRzICovXFxuI3dlYXRoZXJHaWYge1xcbiAgd2lkdGg6IDEyZW07XFxuICBoZWlnaHQ6IDEyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2ZW0pIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgI2N1cnJlbnRXZWF0aGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2MGVtO1xcbiAgfVxcblxcbiAgLypUT0RPOiBTZXQgc2VjdGlvbiBlbGVtZW50IGhlaWdodCBzbyB0aGV5IGFyZSBjbG9zZXIgdG9nZXRoZXIuICovXFxuICAjY3VycmVudFdlYXRoZXIgc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAxOGVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTBlbTtcXG4gICAgZmxleDogMTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlEQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBLG1DQUFtQzs7QUFFbkM7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUEsd0JBQXdCOztBQUV4QjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLHdCQUF3Qjs7QUFFeEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBLGlFQUFpRTtFQUNqRTtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLE9BQU87RUFDVDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9za3kuanBnJyk7XFxuICBjb2xvcjogIzFiMWIxZTtcXG59XFxuXFxuLyogRm9ybSBzdHlsaW5nICovXFxuXFxuZm9ybSB7XFxuICBtYXJnaW46IDEuNWVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxufVxcblxcbiNsb2NhdGlvblN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM3YTc1O1xcbn1cXG5cXG4jbG9jYXRpb25TdWJtaXQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XFxuICBib3JkZXItY29sb3I6IGdyZXk7XFxufVxcblxcbiNjdXJyZW50V2VhdGhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDIwZW07XFxuICBtYXgtd2lkdGg6IDUwZW07XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi8qSGVhZGVycyBzdHlsaW5nICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbiNjaXR5RGF0ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuNWVtO1xcbn1cXG5cXG4vKiBXZWF0aGVyIEluZm8gU2VjdGlvbiBDb250YWluZXJzKi9cXG5cXG4jc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiN0ZW1wU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtYmFzaXM6IDA7XFxuICBmbGV4LWdyb3c6IDAuODU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW46IDJlbTtcXG59XFxuXFxuI290aGVySW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtYmFzaXM6IDA7XFxuICBmbGV4LWdyb3c6IDAuOTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMS41ZW07XFxufVxcblxcbi8qIFN1bW1hcnkvR2lmIHNlY3Rpb24gKi9cXG5cXG4jZGVzY3JpcHRpb25UZXh0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2dpZkNvbnRhaW5lciB7XFxuICBib3JkZXI6IHNvbGlkIDVweCByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI3dlYXRoZXJHaWYge1xcbiAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbn1cXG5cXG4vKiBUZW1wZXJhdHVyZSBTZWN0aW9uICovXFxuXFxuI2N1cnJlbnRUZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY3VycmVudFRlbXAgaDMge1xcbiAgZm9udC1zaXplOiA1ZW07XFxufVxcblxcbiN1bml0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdW5pdENvbnRhaW5lciBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjb2xvcjogIzgzN2E3NTtcXG59XFxuXFxuI3VuaXRDb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3VuaXRDb250YWluZXIgLnNlbGVjdGVkVW5pdCB7XFxuICBjb2xvcjogIzFiMWIxZTtcXG59XFxuXFxuI2hpZ2hMb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2hpZ2hMb3cgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGlnaExvdyBkaXYgcCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4vKiBPdGhlciBJbmZvIHNlY3Rpb24gKi9cXG4jb3RoZXJJbmZvIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwLjVlbSAwIDBlbSAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jc3VuIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKldlYXRoZXIgSW5mbyBFbGVtZW50cyAqL1xcbiN3ZWF0aGVyR2lmIHtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgaGVpZ2h0OiAxMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NmVtKSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gICNjdXJyZW50V2VhdGhlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNjBlbTtcXG4gIH1cXG5cXG4gIC8qVE9ETzogU2V0IHNlY3Rpb24gZWxlbWVudCBoZWlnaHQgc28gdGhleSBhcmUgY2xvc2VyIHRvZ2V0aGVyLiAqL1xcbiAgI2N1cnJlbnRXZWF0aGVyIHNlY3Rpb24ge1xcbiAgICB3aWR0aDogMThlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwZW07XFxuICAgIGZsZXg6IDE7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gRE9NIGVsZW1lbnRzLlxuY29uc3QgZGF0ZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZVRleHQnKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uVGV4dCcpO1xuY29uc3Qgc3VuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1blRleHQnKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcFRleHQnKTtcbmNvbnN0IHRlbXBNYXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcE1heFRleHQnKTtcbmNvbnN0IHRlbXBNaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcE1pblRleHQnKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5VGV4dCcpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kVGV4dCcpO1xuY29uc3QgbG9jYXRpb25FbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25UZXh0Jyk7XG5jb25zdCB3ZWF0aGVyR2lmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJHaWYnKTtcbmNvbnN0IHRlbXBCdG5GID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBGJyk7XG5jb25zdCB0ZW1wQnRuQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wQycpO1xuXG4vLyBNYWtlIGZldGNoIHJlcXVlc3QgZm9yIGNpdHkgaW5mbyBhbmQgcmV0dXJuIGpzb24gb2JqZWN0LlxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9aW1wZXJpYWwmYXBwaWQ9MTQ5ZmZjZTFiYjRjZDM5YjA1YWM5ZjYwY2JmNjdjMTRgXG4gICAgKTtcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coZXJyb3IsICdUaGVyZSB3YXMgYW4gZXJyb3IgZ2V0dGluZyB0aGUgd2VhdGhlciBpbmZvJyk7XG4gIH1cbn1cblxuLy8gUmV0dXJuIG5lY2Vzc2FyeSB3ZWF0aGVyIGluZm8gYXMgYSBuZXcgb2JqZWN0LlxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcih3ZWF0aGVyT2JqKSB7XG4gIGNvbnN0IHtcbiAgICBtYWluOiB7IHRlbXAgfSxcbiAgICBtYWluOiB7IHRlbXBfbWF4IH0sXG4gICAgbWFpbjogeyB0ZW1wX21pbiB9LFxuICAgIG1haW46IHsgaHVtaWRpdHkgfSxcbiAgICBzeXM6IHsgc3VucmlzZSB9LFxuICAgIHN5czogeyBzdW5zZXQgfSxcbiAgICB3ZWF0aGVyOiB7XG4gICAgICAwOiB7IGRlc2NyaXB0aW9uIH0sXG4gICAgfSxcbiAgICB3ZWF0aGVyOiB7XG4gICAgICAwOiB7IG1haW4gfSxcbiAgICB9LFxuICAgIHdpbmQ6IHsgc3BlZWQgfSxcbiAgICB3aW5kOiB7IGRlZyB9LFxuICB9ID0gYXdhaXQgd2VhdGhlck9iajtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wLFxuICAgIHRlbXBfbWF4LFxuICAgIHRlbXBfbWluLFxuICAgIGh1bWlkaXR5LFxuICAgIHN1bnJpc2UsXG4gICAgc3Vuc2V0LFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIG1haW4sXG4gICAgc3BlZWQsXG4gICAgZGVnLFxuICB9O1xufVxuXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgbG9jYXRpb24gaW5wdXQgc2VhcmNoLlxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uU3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHJ1bkFwcCgpO1xufSk7XG5cbi8vIENvbnZlcnQgd2luZCBkaXJlY3Rpb25cbmZ1bmN0aW9uIGNvbnZlcnRXaW5kKGRpcmVjdGlvbkRlZ3JlZSkge1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZGlyZWN0aW9uRGVncmVlO1xuICBpZiAod2luZERpcmVjdGlvbiA+IDM0OSB8fCB3aW5kRGlyZWN0aW9uIDw9IDExKSB7XG4gICAgcmV0dXJuICdOJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDExICYmIHdpbmREaXJlY3Rpb24gPD0gMzQpIHtcbiAgICByZXR1cm4gJ05ORSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAzNCAmJiB3aW5kRGlyZWN0aW9uIDw9IDU2KSB7XG4gICAgcmV0dXJuICdORSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiA1NiAmJiB3aW5kRGlyZWN0aW9uIDw9IDgwKSB7XG4gICAgcmV0dXJuICdFTkUnO1xuICB9XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gODAgJiYgd2luZERpcmVjdGlvbiA8PSAxMDEpIHtcbiAgICByZXR1cm4gJ0UnO1xuICB9XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gMTAxICYmIHdpbmREaXJlY3Rpb24gPD0gMTI0KSB7XG4gICAgcmV0dXJuICdFU0UnO1xuICB9XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gMTI0ICYmIHdpbmREaXJlY3Rpb24gPD0gMTQ2KSB7XG4gICAgcmV0dXJuICdTRSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAxNDYgJiYgd2luZERpcmVjdGlvbiA8PSAxNjkpIHtcbiAgICByZXR1cm4gJ1NTRSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAxNjkgJiYgd2luZERpcmVjdGlvbiA8PSAxOTEpIHtcbiAgICByZXR1cm4gJ1MnO1xuICB9XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gMTkxICYmIHdpbmREaXJlY3Rpb24gPD0gMjE0KSB7XG4gICAgcmV0dXJuICdTU1cnO1xuICB9XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gMjE0ICYmIHdpbmREaXJlY3Rpb24gPD0gMjM2KSB7XG4gICAgcmV0dXJuICdTVyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAyMzYgJiYgd2luZERpcmVjdGlvbiA8PSAyNTkpIHtcbiAgICByZXR1cm4gJ1dTVyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAyNTkgJiYgd2luZERpcmVjdGlvbiA8PSAyODEpIHtcbiAgICByZXR1cm4gJ1cnO1xuICB9XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gMjgxICYmIHdpbmREaXJlY3Rpb24gPD0gMzA0KSB7XG4gICAgcmV0dXJuICdXTlcnO1xuICB9XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gMzA0ICYmIHdpbmREaXJlY3Rpb24gPD0gMzI2KSB7XG4gICAgcmV0dXJuICdOVyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAzMjYgJiYgd2luZERpcmVjdGlvbiA8PSAzNDkpIHtcbiAgICByZXR1cm4gJ05OVyc7XG4gIH1cbiAgcmV0dXJuICdOL0EnO1xufVxuXG4vLyBDb252ZXJ0IHRoZSBzdW5yaXNlIGFuZCBzdW5zZXQgdGltZXMuXG5mdW5jdGlvbiBjb252ZXJ0U3VuKHN1blRpbWUpIHtcbiAgY29uc3Qgc3VuT2xkID0gbmV3IERhdGUoc3VuVGltZSAqIDEwMDApO1xuXG4gIC8vIENvbnZlcnRlZCBzdW5zZXRcbiAgY29uc3Qgc3VuTmV3ID0gYCR7Y29udmVydE1pbGl0YXJ5KFxuICAgIHN1bk9sZC5nZXRIb3VycygpXG4gICl9OiR7c3VuT2xkLmdldE1pbnV0ZXMoKX06JHtzdW5PbGQuZ2V0U2Vjb25kcygpfWA7XG5cbiAgcmV0dXJuIHN1bk5ldztcbn1cblxuLy8gQ29udmVydCBtaWxpdGFyeSB0aW1lIGhvdXJzIHRvIHN0YW5kYXJkLlxuZnVuY3Rpb24gY29udmVydE1pbGl0YXJ5KGhvdXIpIHtcbiAgaWYgKGhvdXIgPiAxMikge1xuICAgIHJldHVybiBob3VyIC0gMTI7XG4gIH1cbiAgcmV0dXJuIGhvdXI7XG59XG5cbi8vIENvbnZlcnQgZmFocmVuaGVpdCB0ZW1wZXJhdHVyZXMgdG8gY2Vsc2l1c1xuZnVuY3Rpb24gY29udmVydFRlbXAodGVtcE51bSkge1xuICByZXR1cm4gKCh0ZW1wTnVtIC0gMzIpICogNSkgLyA5O1xufVxuXG4vLyBSZXBsYWNlIHRoZSB0ZXh0IGNvbnRlbnQgb2YgZWxlbWVudCB3aXRoIHRoZSBwcm92aWRlZCB2YWx1ZS5cbmZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50VmFsdWVzKGVsZSwgdmFsKSB7XG4gIGVsZS50ZXh0Q29udGVudCA9IHZhbDtcbn1cblxuLy8gRGlzcGxheXMgdGhlIGluZm9ybWF0aW9uIHRvIHRoZSBwYWdlLlxuZnVuY3Rpb24gZGlzcGxheURhdGEoZGF0YU9iaiwgbG9jYXRpb24pIHtcbiAgLy8gUmVwbGFjZSB0ZXh0IGNvbnRlbnRcbiAgcmVwbGFjZUVsZW1lbnRWYWx1ZXMoZGF0ZVRleHQsIGRhdGFPYmouZGF0ZSk7XG4gIHJlcGxhY2VFbGVtZW50VmFsdWVzKGRlc2NyaXB0aW9uLCBjYXBGaXJzdChkYXRhT2JqLmRlc2NyaXB0aW9uKSk7XG4gIHJlcGxhY2VFbGVtZW50VmFsdWVzKHN1biwgYCR7ZGF0YU9iai5zdW5yaXNlfS8ke2RhdGFPYmouc3Vuc2V0fWApO1xuICByZXBsYWNlRWxlbWVudFZhbHVlcyh0ZW1wLCBkYXRhT2JqLnRlbXApO1xuICByZXBsYWNlRWxlbWVudFZhbHVlcyh0ZW1wTWF4LCBkYXRhT2JqLnRlbXBfbWF4KTtcbiAgcmVwbGFjZUVsZW1lbnRWYWx1ZXModGVtcE1pbiwgZGF0YU9iai50ZW1wX21pbik7XG4gIHJlcGxhY2VFbGVtZW50VmFsdWVzKGh1bWlkaXR5LCBgJHtkYXRhT2JqLmh1bWlkaXR5fSVgKTtcbiAgcmVwbGFjZUVsZW1lbnRWYWx1ZXMod2luZCwgYCR7ZGF0YU9iai5zcGVlZH0gbS9oICR7ZGF0YU9iai53aW5kfWApO1xuICByZXBsYWNlRWxlbWVudFZhbHVlcyhsb2NhdGlvbkVsZSwgY2FwRmlyc3QobG9jYXRpb24pKTtcbiAgc2V0R2lmKGRhdGFPYmouZ2lmSWQpO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25TdWJtaXQnKS5jbGljaygpO1xuXG4vLyBSZXBsYWNlIHRlbXBlcmF0dXJlIHZhbHVlcyB3aXRoIHNlbGVjdGVkIHRlbXBlcmF0dXJlIHZhbHVlLlxuZnVuY3Rpb24gY2hhbmdlVGVtcChjdXJyZW50LCBtYXgsIG1pbikge1xuICB0ZW1wLnRleHRDb250ZW50ID0gY3VycmVudDtcbiAgdGVtcE1heC50ZXh0Q29udGVudCA9IG1heDtcbiAgdGVtcE1pbi50ZXh0Q29udGVudCA9IG1pbjtcbn1cblxuLy8gUnVucyBhcHAgd2hpY2ggdGFrZXMgaW5wdXQsIGdldHMgZGF0YSBhbmQgZGlzcGxheSBkYXRhIHRvIHBhZ2UuXG5hc3luYyBmdW5jdGlvbiBydW5BcHAoKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uSW5wdXQnKS52YWx1ZTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGdldERhdGEobG9jYXRpb24pKTtcbiAgY29uc3QgbmV3V2VhdGhlckRhdGEgPSB1cGRhdGVXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG4gIGRpc3BsYXlEYXRhKG5ld1dlYXRoZXJEYXRhLCBsb2NhdGlvbik7XG5cbiAgLy8gVW5pdCBidXR0b24gZXZlbnQgbGlzdGVuZXJzXG4gIHRlbXBCdG5GLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjaGFuZ2VUZW1wKFxuICAgICAgbmV3V2VhdGhlckRhdGEudGVtcCxcbiAgICAgIG5ld1dlYXRoZXJEYXRhLnRlbXBfbWF4LFxuICAgICAgbmV3V2VhdGhlckRhdGEudGVtcF9taW5cbiAgICApO1xuICAgIHRvZ2dsZVVuaXRCdG4odGVtcEJ0bkYsIHRlbXBCdG5DKTtcbiAgfSk7XG5cbiAgdGVtcEJ0bkMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hhbmdlVGVtcChcbiAgICAgIG5ld1dlYXRoZXJEYXRhLnRlbXBDZWwsXG4gICAgICBuZXdXZWF0aGVyRGF0YS50ZW1wTWF4Q2VsLFxuICAgICAgbmV3V2VhdGhlckRhdGEudGVtcE1pbkNlbFxuICAgICk7XG4gICAgdG9nZ2xlVW5pdEJ0bih0ZW1wQnRuQywgdGVtcEJ0bkYpO1xuICB9KTtcbn1cblxuLy8gVXNlIHJlZ2V4IHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiB3ZWF0aGVyIGdpZiBuZWVkZWQuXG5mdW5jdGlvbiBmaW5kR2lmKGluZm8pIHtcbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBpbmZvO1xuICBjb25zdCBjbG91ZHMgPSAvY2xvdWRzL2k7XG4gIGNvbnN0IHRodW5kZXJzdG9ybSA9IC90aHVuZGVyc3Rvcm0vaTtcbiAgY29uc3QgZHJpenpsZSA9IC9kcml6emxlL2k7XG4gIGNvbnN0IHJhaW4gPSAvcmFpbi9pO1xuICBjb25zdCBzbm93ID0gL3Nub3cvaTtcbiAgY29uc3QgY2xlYXIgPSAvY2xlYXIvaTtcblxuICBjb25zdCB3ZWF0aGVyVHlwZVJlZ2V4ID0gW2Nsb3VkcywgdGh1bmRlcnN0b3JtLCBkcml6emxlLCByYWluLCBzbm93LCBjbGVhcl07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGZvciAoY29uc3QgcmVnIG9mIHdlYXRoZXJUeXBlUmVnZXgpIHtcbiAgICBpZiAocmVnLnRlc3QoY3VycmVudFdlYXRoZXIpKSB7XG4gICAgICByZXR1cm4gY3VycmVudFdlYXRoZXIubWF0Y2gocmVnKVswXTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGFrZXMgb3JpZ2luYWwgd2VhdGhlciBkYXRhIGFuZCBjcmVhdGVzIG5ldyBvYmplY3Qgd2l0aCB0aGUgbmVjZXNzYXJ5XG4vLyBwcm9wZXJ0aWVzIGNyZWF0ZWQgYnkgcnVubmluZyBhcHByb3ByaWF0ZSBmdW5jdGlvbnMgb24gb3JpZ2luYWwgd2VhdGhlciBkYXRhLlxuZnVuY3Rpb24gdXBkYXRlV2VhdGhlckRhdGEob3JpZ2luYWwpIHtcbiAgY29uc3QgdXBkYXRlZERhdGEgPSB7IC4uLm9yaWdpbmFsIH07XG5cbiAgZGVsZXRlIHVwZGF0ZWREYXRhLmRlZztcbiAgZGVsZXRlIHVwZGF0ZWREYXRhLnN1bnJpc2U7XG4gIGRlbGV0ZSB1cGRhdGVkRGF0YS5zdW5zZXQ7XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHVwZGF0ZWREYXRhLmRhdGUgPSBkYXRlLnRvRGF0ZVN0cmluZygpO1xuICB1cGRhdGVkRGF0YS5zdW5yaXNlID0gY29udmVydFN1bihvcmlnaW5hbC5zdW5yaXNlKTtcbiAgdXBkYXRlZERhdGEuc3Vuc2V0ID0gY29udmVydFN1bihvcmlnaW5hbC5zdW5zZXQpO1xuICB1cGRhdGVkRGF0YS50ZW1wID0gTWF0aC5yb3VuZChvcmlnaW5hbC50ZW1wKTtcbiAgdXBkYXRlZERhdGEudGVtcF9tYXggPSBNYXRoLnJvdW5kKG9yaWdpbmFsLnRlbXBfbWF4KTtcbiAgdXBkYXRlZERhdGEudGVtcF9taW4gPSBNYXRoLnJvdW5kKG9yaWdpbmFsLnRlbXBfbWluKTtcbiAgdXBkYXRlZERhdGEudGVtcENlbCA9IE1hdGgucm91bmQoY29udmVydFRlbXAob3JpZ2luYWwudGVtcCkpO1xuICB1cGRhdGVkRGF0YS50ZW1wTWF4Q2VsID0gTWF0aC5yb3VuZChjb252ZXJ0VGVtcChvcmlnaW5hbC50ZW1wX21heCkpO1xuICB1cGRhdGVkRGF0YS50ZW1wTWluQ2VsID0gTWF0aC5yb3VuZChjb252ZXJ0VGVtcChvcmlnaW5hbC50ZW1wX21pbikpO1xuICB1cGRhdGVkRGF0YS53aW5kID0gY29udmVydFdpbmQob3JpZ2luYWwuZGVnKTtcbiAgdXBkYXRlZERhdGEud2VhdGhlclR5cGUgPSBmaW5kR2lmKG9yaWdpbmFsLmRlc2NyaXB0aW9uKTtcbiAgdXBkYXRlZERhdGEuZ2lmSWQgPSBnZXRHaWZJZCh1cGRhdGVkRGF0YS53ZWF0aGVyVHlwZSk7XG5cbiAgcmV0dXJuIHVwZGF0ZWREYXRhO1xufVxuXG4vLyBBbiBvYmplY3QgY29udGFpbmluZyB3ZWF0aGVyIGdpZiBhcGkgaWQncy5cbmNvbnN0IHdlYXRoZXJHaWZJZCA9IHtcbiAgcmFpbjogJzIwODQ3ODcxJyxcbiAgc25vdzogJzIwODQ3ODcyJyxcbiAgY2xlYXI6ICcyMDg0Nzg3NCcsXG4gIHRodW5kZXJzdG9ybTogJzIwODQ3ODc3JyxcbiAgY2xvdWRzOiAnMjA4NDc4NzAnLFxufTtcblxuLy8gRnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgd2VhdGhlciB0eXBlIGFuZCBmZXRjaGVzIHRoZSBjb3JyZXNwb25kaW5nIHdlYXRoZXIgZ2lmLlxuZnVuY3Rpb24gZ2V0R2lmSWQodHlwZSkge1xuICBsZXQgZ2lmSWQgPSAwO1xuICBpZiAod2VhdGhlckdpZklkLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgcmV0dXJuIHdlYXRoZXJHaWZJZFt0eXBlXTtcbiAgfVxuICBjb25zb2xlLmxvZygnTm8gbWF0Y2hpbmcgZ2lmIGlkLicpO1xuICByZXR1cm4gd2VhdGhlckdpZklkLmNsb3Vkcztcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0R2lmKGlkKSB7XG4gIGlmIChpZCAhPT0gMCkge1xuICAgIGZldGNoKGBodHRwczovL2cudGVub3IuY29tL3YxL2dpZnM/aWRzPSR7aWR9JmtleT1MSVZEU1JaVUxFTEFgLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHdlYXRoZXJHaWYuc3JjID0gcmVzcG9uc2UucmVzdWx0c1swXS5tZWRpYVswXS50aW55Z2lmLnVybDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuLy8gQ2FwaXRhbGl6ZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCB3b3JkIGluIGEgc3RyaW5nLlxuZnVuY3Rpb24gY2FwRmlyc3Qoc3RyKSB7XG4gIGNvbnN0IG5ld0FyciA9IHN0clxuICAgIC5zcGxpdCgnICcpXG4gICAgLm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkpO1xuICByZXR1cm4gbmV3QXJyLmpvaW4oJyAnKTtcbn1cblxuLy8gVG9nZ2xlIHRoZSBjbGFzcyBvbiBlYWNoIHVuaXQuXG5mdW5jdGlvbiB0b2dnbGVVbml0QnRuKHByZXNzZWQsIHJlc2V0KSB7XG4gIHByZXNzZWQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRVbml0Jyk7XG4gIHJlc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkVW5pdCcpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==