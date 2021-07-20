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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  color: #1b1b1e;\n}\n\n/* Form styling */\n\nform {\n  margin: 1.5em;\n  height: 3em;\n  font-weight: 700;\n}\n\nlabel {\n  font-size: 1.5em;\n}\n\ninput {\n  font-size: 1.25em;\n  background: #f5f5f5;\n}\n\n#locationSubmit {\n  background-color: #837a75;\n}\n\n#locationSubmit:hover {\n  cursor: pointer;\n  box-shadow: 1px 1px 1px black;\n  border-color: grey;\n}\n\n#currentWeather {\n  display: flex;\n  justify-content: center;\n  height: 20em;\n  max-width: 50em;\n  margin: auto;\n}\n\n/*Headers styling */\n\nh1 {\n  font-size: 3em;\n}\n\nh2 {\n  font-size: 1.5em;\n}\n\n#cityDate {\n  text-align: center;\n  margin: 0.5em;\n}\n\n/* Weather Info Section Containers*/\n\n#summary {\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n#tempSection {\n  display: flex;\n  flex-direction: row;\n  flex-basis: 0;\n  flex-grow: 0.85;\n  align-items: center;\n  justify-content: space-around;\n  margin: 2em;\n}\n\n#otherInfo {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 0.9;\n  justify-content: center;\n  padding: 1.5em;\n}\n\n/* Summary/Gif section */\n\n#descriptionText {\n  font-size: 2rem;\n  margin-top: 0.5em;\n  font-weight: 700;\n}\n\n#gifContainer {\n  border: solid 5px rgb(0, 0, 0);\n  background-color: white;\n  opacity: 0.7;\n  border-radius: 50%;\n}\n\n#weatherGif {\n  mix-blend-mode: multiply;\n}\n\n/* Temperature Section */\n\n#currentTemp {\n  display: flex;\n  align-items: center;\n}\n\n#currentTemp h3 {\n  font-size: 5em;\n}\n\n#unitContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n#unitContainer button {\n  background: none;\n  border: none;\n  font-size: 1.5em;\n  color: #837a75;\n}\n\n#unitContainer button:hover {\n  cursor: pointer;\n}\n\n#unitContainer .selectedUnit {\n  color: #1b1b1e;\n}\n\n#highLow {\n  display: flex;\n  flex-direction: column;\n  height: 4em;\n  justify-content: space-between;\n}\n\n#highLow div {\n  display: flex;\n  align-items: center;\n}\n\n#highLow div p {\n  font-size: 1.5em;\n}\n\n/* Other Info section */\n#otherInfo div {\n  display: flex;\n  margin: 0.5em 0 0em 0;\n  justify-content: space-between;\n}\n\n#sun {\n  flex-direction: column;\n  align-items: center;\n}\n\n/*Weather Info Elements */\n#weatherGif {\n  width: 12em;\n  height: 12em;\n  background-color: blue;\n}\n\n@media only screen and (max-width: 46em) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n\n  form {\n    height: 4em;\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n\n  #locationInput {\n    width: 10em;\n  }\n\n  #currentWeather {\n    flex-direction: column;\n    align-items: center;\n    height: 60em;\n  }\n\n  /*TODO: Set section element height so they are closer together. */\n  #currentWeather section {\n    width: 18em;\n    margin: 0;\n    height: 10em;\n    flex: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,cAAc;EACd,iCAAiC;AACnC;;AAEA;EACE,yDAAkC;EAClC,cAAc;AAChB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,YAAY;AACd;;AAEA,mBAAmB;;AAEnB;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA,mCAAmC;;AAEnC;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,cAAc;AAChB;;AAEA,wBAAwB;;AAExB;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA,wBAAwB;;AAExB;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,uBAAuB;AACvB;EACE,aAAa;EACb,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,yBAAyB;AACzB;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;EACd;;EAEA,iEAAiE;EACjE;IACE,WAAW;IACX,SAAS;IACT,YAAY;IACZ,OAAO;EACT;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  background-image: url('./sky.jpg');\n  color: #1b1b1e;\n}\n\n/* Form styling */\n\nform {\n  margin: 1.5em;\n  height: 3em;\n  font-weight: 700;\n}\n\nlabel {\n  font-size: 1.5em;\n}\n\ninput {\n  font-size: 1.25em;\n  background: #f5f5f5;\n}\n\n#locationSubmit {\n  background-color: #837a75;\n}\n\n#locationSubmit:hover {\n  cursor: pointer;\n  box-shadow: 1px 1px 1px black;\n  border-color: grey;\n}\n\n#currentWeather {\n  display: flex;\n  justify-content: center;\n  height: 20em;\n  max-width: 50em;\n  margin: auto;\n}\n\n/*Headers styling */\n\nh1 {\n  font-size: 3em;\n}\n\nh2 {\n  font-size: 1.5em;\n}\n\n#cityDate {\n  text-align: center;\n  margin: 0.5em;\n}\n\n/* Weather Info Section Containers*/\n\n#summary {\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n#tempSection {\n  display: flex;\n  flex-direction: row;\n  flex-basis: 0;\n  flex-grow: 0.85;\n  align-items: center;\n  justify-content: space-around;\n  margin: 2em;\n}\n\n#otherInfo {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 0.9;\n  justify-content: center;\n  padding: 1.5em;\n}\n\n/* Summary/Gif section */\n\n#descriptionText {\n  font-size: 2rem;\n  margin-top: 0.5em;\n  font-weight: 700;\n}\n\n#gifContainer {\n  border: solid 5px rgb(0, 0, 0);\n  background-color: white;\n  opacity: 0.7;\n  border-radius: 50%;\n}\n\n#weatherGif {\n  mix-blend-mode: multiply;\n}\n\n/* Temperature Section */\n\n#currentTemp {\n  display: flex;\n  align-items: center;\n}\n\n#currentTemp h3 {\n  font-size: 5em;\n}\n\n#unitContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n#unitContainer button {\n  background: none;\n  border: none;\n  font-size: 1.5em;\n  color: #837a75;\n}\n\n#unitContainer button:hover {\n  cursor: pointer;\n}\n\n#unitContainer .selectedUnit {\n  color: #1b1b1e;\n}\n\n#highLow {\n  display: flex;\n  flex-direction: column;\n  height: 4em;\n  justify-content: space-between;\n}\n\n#highLow div {\n  display: flex;\n  align-items: center;\n}\n\n#highLow div p {\n  font-size: 1.5em;\n}\n\n/* Other Info section */\n#otherInfo div {\n  display: flex;\n  margin: 0.5em 0 0em 0;\n  justify-content: space-between;\n}\n\n#sun {\n  flex-direction: column;\n  align-items: center;\n}\n\n/*Weather Info Elements */\n#weatherGif {\n  width: 12em;\n  height: 12em;\n  background-color: blue;\n}\n\n@media only screen and (max-width: 46em) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n\n  form {\n    height: 4em;\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n\n  #locationInput {\n    width: 10em;\n  }\n\n  #currentWeather {\n    flex-direction: column;\n    align-items: center;\n    height: 60em;\n  }\n\n  /*TODO: Set section element height so they are closer together. */\n  #currentWeather section {\n    width: 18em;\n    margin: 0;\n    height: 10em;\n    flex: 1;\n  }\n}\n"],"sourceRoot":""}]);
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
  setBackgroundImage(weatherData.sunrise, weatherData.sunset);

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


// TODO: Function determines if it is night time or day time. 
// If day, display daytime image, if night, display night time image.
function setBackgroundImage(sunrise, sunset) {
  const currentTime = (new Date).getTime();
  console.log(currentTime)

  if (currentTime < sunrise || currentTime > sunset) {
    console.log('night');
  } else {
    console.log('day');
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLEdBQUc7QUFDaEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9za3kuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGNvbG9yOiAjMWIxYjFlO1xcbn1cXG5cXG4vKiBGb3JtIHN0eWxpbmcgKi9cXG5cXG5mb3JtIHtcXG4gIG1hcmdpbjogMS41ZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG59XFxuXFxuI2xvY2F0aW9uU3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MzdhNzU7XFxufVxcblxcbiNsb2NhdGlvblN1Ym1pdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG59XFxuXFxuI2N1cnJlbnRXZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMjBlbTtcXG4gIG1heC13aWR0aDogNTBlbTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLypIZWFkZXJzIHN0eWxpbmcgKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuI2NpdHlEYXRlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMC41ZW07XFxufVxcblxcbi8qIFdlYXRoZXIgSW5mbyBTZWN0aW9uIENvbnRhaW5lcnMqL1xcblxcbiNzdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWJhc2lzOiAwO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3RlbXBTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMC44NTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMmVtO1xcbn1cXG5cXG4jb3RoZXJJbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMC45O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVlbTtcXG59XFxuXFxuLyogU3VtbWFyeS9HaWYgc2VjdGlvbiAqL1xcblxcbiNkZXNjcmlwdGlvblRleHQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jZ2lmQ29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgNXB4IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4jd2VhdGhlckdpZiB7XFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxufVxcblxcbi8qIFRlbXBlcmF0dXJlIFNlY3Rpb24gKi9cXG5cXG4jY3VycmVudFRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjdXJyZW50VGVtcCBoMyB7XFxuICBmb250LXNpemU6IDVlbTtcXG59XFxuXFxuI3VuaXRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN1bml0Q29udGFpbmVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGNvbG9yOiAjODM3YTc1O1xcbn1cXG5cXG4jdW5pdENvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdW5pdENvbnRhaW5lciAuc2VsZWN0ZWRVbml0IHtcXG4gIGNvbG9yOiAjMWIxYjFlO1xcbn1cXG5cXG4jaGlnaExvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNGVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jaGlnaExvdyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoaWdoTG93IGRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi8qIE90aGVyIEluZm8gc2VjdGlvbiAqL1xcbiNvdGhlckluZm8gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAuNWVtIDAgMGVtIDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNzdW4ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qV2VhdGhlciBJbmZvIEVsZW1lbnRzICovXFxuI3dlYXRoZXJHaWYge1xcbiAgd2lkdGg6IDEyZW07XFxuICBoZWlnaHQ6IDEyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2ZW0pIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgZm9ybSB7XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICB9XFxuXFxuICAjbG9jYXRpb25JbnB1dCB7XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgfVxcblxcbiAgI2N1cnJlbnRXZWF0aGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2MGVtO1xcbiAgfVxcblxcbiAgLypUT0RPOiBTZXQgc2VjdGlvbiBlbGVtZW50IGhlaWdodCBzbyB0aGV5IGFyZSBjbG9zZXIgdG9nZXRoZXIuICovXFxuICAjY3VycmVudFdlYXRoZXIgc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAxOGVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTBlbTtcXG4gICAgZmxleDogMTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlEQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBLG1DQUFtQzs7QUFFbkM7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUEsd0JBQXdCOztBQUV4QjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLHdCQUF3Qjs7QUFFeEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBRUEsaUVBQWlFO0VBQ2pFO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osT0FBTztFQUNUO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3NreS5qcGcnKTtcXG4gIGNvbG9yOiAjMWIxYjFlO1xcbn1cXG5cXG4vKiBGb3JtIHN0eWxpbmcgKi9cXG5cXG5mb3JtIHtcXG4gIG1hcmdpbjogMS41ZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG59XFxuXFxuI2xvY2F0aW9uU3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MzdhNzU7XFxufVxcblxcbiNsb2NhdGlvblN1Ym1pdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG59XFxuXFxuI2N1cnJlbnRXZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMjBlbTtcXG4gIG1heC13aWR0aDogNTBlbTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLypIZWFkZXJzIHN0eWxpbmcgKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuI2NpdHlEYXRlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMC41ZW07XFxufVxcblxcbi8qIFdlYXRoZXIgSW5mbyBTZWN0aW9uIENvbnRhaW5lcnMqL1xcblxcbiNzdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWJhc2lzOiAwO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3RlbXBTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMC44NTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMmVtO1xcbn1cXG5cXG4jb3RoZXJJbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMC45O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVlbTtcXG59XFxuXFxuLyogU3VtbWFyeS9HaWYgc2VjdGlvbiAqL1xcblxcbiNkZXNjcmlwdGlvblRleHQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jZ2lmQ29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgNXB4IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4jd2VhdGhlckdpZiB7XFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxufVxcblxcbi8qIFRlbXBlcmF0dXJlIFNlY3Rpb24gKi9cXG5cXG4jY3VycmVudFRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjdXJyZW50VGVtcCBoMyB7XFxuICBmb250LXNpemU6IDVlbTtcXG59XFxuXFxuI3VuaXRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN1bml0Q29udGFpbmVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGNvbG9yOiAjODM3YTc1O1xcbn1cXG5cXG4jdW5pdENvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdW5pdENvbnRhaW5lciAuc2VsZWN0ZWRVbml0IHtcXG4gIGNvbG9yOiAjMWIxYjFlO1xcbn1cXG5cXG4jaGlnaExvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNGVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jaGlnaExvdyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoaWdoTG93IGRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi8qIE90aGVyIEluZm8gc2VjdGlvbiAqL1xcbiNvdGhlckluZm8gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAuNWVtIDAgMGVtIDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNzdW4ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qV2VhdGhlciBJbmZvIEVsZW1lbnRzICovXFxuI3dlYXRoZXJHaWYge1xcbiAgd2lkdGg6IDEyZW07XFxuICBoZWlnaHQ6IDEyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2ZW0pIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgZm9ybSB7XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICB9XFxuXFxuICAjbG9jYXRpb25JbnB1dCB7XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgfVxcblxcbiAgI2N1cnJlbnRXZWF0aGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2MGVtO1xcbiAgfVxcblxcbiAgLypUT0RPOiBTZXQgc2VjdGlvbiBlbGVtZW50IGhlaWdodCBzbyB0aGV5IGFyZSBjbG9zZXIgdG9nZXRoZXIuICovXFxuICAjY3VycmVudFdlYXRoZXIgc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAxOGVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTBlbTtcXG4gICAgZmxleDogMTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBET00gZWxlbWVudHMuXG5jb25zdCBkYXRlVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlVGV4dCcpO1xuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25UZXh0Jyk7XG5jb25zdCBzdW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VuVGV4dCcpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wVGV4dCcpO1xuY29uc3QgdGVtcE1heCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wTWF4VGV4dCcpO1xuY29uc3QgdGVtcE1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wTWluVGV4dCcpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHlUZXh0Jyk7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRUZXh0Jyk7XG5jb25zdCBsb2NhdGlvbkVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvblRleHQnKTtcbmNvbnN0IHdlYXRoZXJHaWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlckdpZicpO1xuY29uc3QgdGVtcEJ0bkYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcEYnKTtcbmNvbnN0IHRlbXBCdG5DID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBDJyk7XG5cbi8vIE1ha2UgZmV0Y2ggcmVxdWVzdCBmb3IgY2l0eSBpbmZvIGFuZCByZXR1cm4ganNvbiBvYmplY3QuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1pbXBlcmlhbCZhcHBpZD0xNDlmZmNlMWJiNGNkMzliMDVhYzlmNjBjYmY2N2MxNGBcbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnJvciwgJ1RoZXJlIHdhcyBhbiBlcnJvciBnZXR0aW5nIHRoZSB3ZWF0aGVyIGluZm8nKTtcbiAgfVxufVxuXG4vLyBSZXR1cm4gbmVjZXNzYXJ5IHdlYXRoZXIgaW5mbyBhcyBhIG5ldyBvYmplY3QuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHdlYXRoZXJPYmopIHtcbiAgY29uc3Qge1xuICAgIG1haW46IHsgdGVtcCB9LFxuICAgIG1haW46IHsgdGVtcF9tYXggfSxcbiAgICBtYWluOiB7IHRlbXBfbWluIH0sXG4gICAgbWFpbjogeyBodW1pZGl0eSB9LFxuICAgIHN5czogeyBzdW5yaXNlIH0sXG4gICAgc3lzOiB7IHN1bnNldCB9LFxuICAgIHdlYXRoZXI6IHtcbiAgICAgIDA6IHsgZGVzY3JpcHRpb24gfSxcbiAgICB9LFxuICAgIHdlYXRoZXI6IHtcbiAgICAgIDA6IHsgbWFpbiB9LFxuICAgIH0sXG4gICAgd2luZDogeyBzcGVlZCB9LFxuICAgIHdpbmQ6IHsgZGVnIH0sXG4gIH0gPSBhd2FpdCB3ZWF0aGVyT2JqO1xuICByZXR1cm4ge1xuICAgIHRlbXAsXG4gICAgdGVtcF9tYXgsXG4gICAgdGVtcF9taW4sXG4gICAgaHVtaWRpdHksXG4gICAgc3VucmlzZSxcbiAgICBzdW5zZXQsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgbWFpbixcbiAgICBzcGVlZCxcbiAgICBkZWcsXG4gIH07XG59XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBsb2NhdGlvbiBpbnB1dCBzZWFyY2guXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25TdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgcnVuQXBwKCk7XG59KTtcblxuLy8gQ29udmVydCB3aW5kIGRpcmVjdGlvblxuZnVuY3Rpb24gY29udmVydFdpbmQoZGlyZWN0aW9uRGVncmVlKSB7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkaXJlY3Rpb25EZWdyZWU7XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gMzQ5IHx8IHdpbmREaXJlY3Rpb24gPD0gMTEpIHtcbiAgICByZXR1cm4gJ04nO1xuICB9XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gMTEgJiYgd2luZERpcmVjdGlvbiA8PSAzNCkge1xuICAgIHJldHVybiAnTk5FJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDM0ICYmIHdpbmREaXJlY3Rpb24gPD0gNTYpIHtcbiAgICByZXR1cm4gJ05FJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDU2ICYmIHdpbmREaXJlY3Rpb24gPD0gODApIHtcbiAgICByZXR1cm4gJ0VORSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiA4MCAmJiB3aW5kRGlyZWN0aW9uIDw9IDEwMSkge1xuICAgIHJldHVybiAnRSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAxMDEgJiYgd2luZERpcmVjdGlvbiA8PSAxMjQpIHtcbiAgICByZXR1cm4gJ0VTRSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAxMjQgJiYgd2luZERpcmVjdGlvbiA8PSAxNDYpIHtcbiAgICByZXR1cm4gJ1NFJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDE0NiAmJiB3aW5kRGlyZWN0aW9uIDw9IDE2OSkge1xuICAgIHJldHVybiAnU1NFJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDE2OSAmJiB3aW5kRGlyZWN0aW9uIDw9IDE5MSkge1xuICAgIHJldHVybiAnUyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAxOTEgJiYgd2luZERpcmVjdGlvbiA8PSAyMTQpIHtcbiAgICByZXR1cm4gJ1NTVyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAyMTQgJiYgd2luZERpcmVjdGlvbiA8PSAyMzYpIHtcbiAgICByZXR1cm4gJ1NXJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDIzNiAmJiB3aW5kRGlyZWN0aW9uIDw9IDI1OSkge1xuICAgIHJldHVybiAnV1NXJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDI1OSAmJiB3aW5kRGlyZWN0aW9uIDw9IDI4MSkge1xuICAgIHJldHVybiAnVyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAyODEgJiYgd2luZERpcmVjdGlvbiA8PSAzMDQpIHtcbiAgICByZXR1cm4gJ1dOVyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAzMDQgJiYgd2luZERpcmVjdGlvbiA8PSAzMjYpIHtcbiAgICByZXR1cm4gJ05XJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDMyNiAmJiB3aW5kRGlyZWN0aW9uIDw9IDM0OSkge1xuICAgIHJldHVybiAnTk5XJztcbiAgfVxuICByZXR1cm4gJ04vQSc7XG59XG5cbi8vIENvbnZlcnQgdGhlIHN1bnJpc2UgYW5kIHN1bnNldCB0aW1lcy5cbmZ1bmN0aW9uIGNvbnZlcnRTdW4oc3VuVGltZSkge1xuICBjb25zdCBzdW5PbGQgPSBuZXcgRGF0ZShzdW5UaW1lICogMTAwMCk7XG5cbiAgLy8gQ29udmVydGVkIHN1bnNldFxuICBjb25zdCBzdW5OZXcgPSBgJHtjb252ZXJ0TWlsaXRhcnkoXG4gICAgc3VuT2xkLmdldEhvdXJzKClcbiAgKX06JHtzdW5PbGQuZ2V0TWludXRlcygpfToke3N1bk9sZC5nZXRTZWNvbmRzKCl9YDtcblxuICByZXR1cm4gc3VuTmV3O1xufVxuXG4vLyBDb252ZXJ0IG1pbGl0YXJ5IHRpbWUgaG91cnMgdG8gc3RhbmRhcmQuXG5mdW5jdGlvbiBjb252ZXJ0TWlsaXRhcnkoaG91cikge1xuICBpZiAoaG91ciA+IDEyKSB7XG4gICAgcmV0dXJuIGhvdXIgLSAxMjtcbiAgfVxuICByZXR1cm4gaG91cjtcbn1cblxuLy8gQ29udmVydCBmYWhyZW5oZWl0IHRlbXBlcmF0dXJlcyB0byBjZWxzaXVzXG5mdW5jdGlvbiBjb252ZXJ0VGVtcCh0ZW1wTnVtKSB7XG4gIHJldHVybiAoKHRlbXBOdW0gLSAzMikgKiA1KSAvIDk7XG59XG5cbi8vIFJlcGxhY2UgdGhlIHRleHQgY29udGVudCBvZiBlbGVtZW50IHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlLlxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnRWYWx1ZXMoZWxlLCB2YWwpIHtcbiAgZWxlLnRleHRDb250ZW50ID0gdmFsO1xufVxuXG4vLyBEaXNwbGF5cyB0aGUgaW5mb3JtYXRpb24gdG8gdGhlIHBhZ2UuXG5mdW5jdGlvbiBkaXNwbGF5RGF0YShkYXRhT2JqLCBsb2NhdGlvbikge1xuICAvLyBSZXBsYWNlIHRleHQgY29udGVudFxuICByZXBsYWNlRWxlbWVudFZhbHVlcyhkYXRlVGV4dCwgZGF0YU9iai5kYXRlKTtcbiAgcmVwbGFjZUVsZW1lbnRWYWx1ZXMoZGVzY3JpcHRpb24sIGNhcEZpcnN0KGRhdGFPYmouZGVzY3JpcHRpb24pKTtcbiAgcmVwbGFjZUVsZW1lbnRWYWx1ZXMoc3VuLCBgJHtkYXRhT2JqLnN1bnJpc2V9LyR7ZGF0YU9iai5zdW5zZXR9YCk7XG4gIHJlcGxhY2VFbGVtZW50VmFsdWVzKHRlbXAsIGRhdGFPYmoudGVtcCk7XG4gIHJlcGxhY2VFbGVtZW50VmFsdWVzKHRlbXBNYXgsIGRhdGFPYmoudGVtcF9tYXgpO1xuICByZXBsYWNlRWxlbWVudFZhbHVlcyh0ZW1wTWluLCBkYXRhT2JqLnRlbXBfbWluKTtcbiAgcmVwbGFjZUVsZW1lbnRWYWx1ZXMoaHVtaWRpdHksIGAke2RhdGFPYmouaHVtaWRpdHl9JWApO1xuICByZXBsYWNlRWxlbWVudFZhbHVlcyh3aW5kLCBgJHtkYXRhT2JqLnNwZWVkfSBtL2ggJHtkYXRhT2JqLndpbmR9YCk7XG4gIHJlcGxhY2VFbGVtZW50VmFsdWVzKGxvY2F0aW9uRWxlLCBjYXBGaXJzdChsb2NhdGlvbikpO1xuICBzZXRHaWYoZGF0YU9iai5naWZJZCk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvblN1Ym1pdCcpLmNsaWNrKCk7XG5cbi8vIFJlcGxhY2UgdGVtcGVyYXR1cmUgdmFsdWVzIHdpdGggc2VsZWN0ZWQgdGVtcGVyYXR1cmUgdmFsdWUuXG5mdW5jdGlvbiBjaGFuZ2VUZW1wKGN1cnJlbnQsIG1heCwgbWluKSB7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBjdXJyZW50O1xuICB0ZW1wTWF4LnRleHRDb250ZW50ID0gbWF4O1xuICB0ZW1wTWluLnRleHRDb250ZW50ID0gbWluO1xufVxuXG4vLyBSdW5zIGFwcCB3aGljaCB0YWtlcyBpbnB1dCwgZ2V0cyBkYXRhIGFuZCBkaXNwbGF5IGRhdGEgdG8gcGFnZS5cbmFzeW5jIGZ1bmN0aW9uIHJ1bkFwcCgpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25JbnB1dCcpLnZhbHVlO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoZ2V0RGF0YShsb2NhdGlvbikpO1xuICBjb25zdCBuZXdXZWF0aGVyRGF0YSA9IHVwZGF0ZVdlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbiAgZGlzcGxheURhdGEobmV3V2VhdGhlckRhdGEsIGxvY2F0aW9uKTtcbiAgc2V0QmFja2dyb3VuZEltYWdlKHdlYXRoZXJEYXRhLnN1bnJpc2UsIHdlYXRoZXJEYXRhLnN1bnNldCk7XG5cbiAgLy8gVW5pdCBidXR0b24gZXZlbnQgbGlzdGVuZXJzXG4gIHRlbXBCdG5GLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjaGFuZ2VUZW1wKFxuICAgICAgbmV3V2VhdGhlckRhdGEudGVtcCxcbiAgICAgIG5ld1dlYXRoZXJEYXRhLnRlbXBfbWF4LFxuICAgICAgbmV3V2VhdGhlckRhdGEudGVtcF9taW5cbiAgICApO1xuICAgIHRvZ2dsZVVuaXRCdG4odGVtcEJ0bkYsIHRlbXBCdG5DKTtcbiAgfSk7XG5cbiAgdGVtcEJ0bkMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hhbmdlVGVtcChcbiAgICAgIG5ld1dlYXRoZXJEYXRhLnRlbXBDZWwsXG4gICAgICBuZXdXZWF0aGVyRGF0YS50ZW1wTWF4Q2VsLFxuICAgICAgbmV3V2VhdGhlckRhdGEudGVtcE1pbkNlbFxuICAgICk7XG4gICAgdG9nZ2xlVW5pdEJ0bih0ZW1wQnRuQywgdGVtcEJ0bkYpO1xuICB9KTtcbn1cblxuLy8gVXNlIHJlZ2V4IHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiB3ZWF0aGVyIGdpZiBuZWVkZWQuXG5mdW5jdGlvbiBmaW5kR2lmKGluZm8pIHtcbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBpbmZvO1xuICBjb25zdCBjbG91ZHMgPSAvY2xvdWRzL2k7XG4gIGNvbnN0IHRodW5kZXJzdG9ybSA9IC90aHVuZGVyc3Rvcm0vaTtcbiAgY29uc3QgZHJpenpsZSA9IC9kcml6emxlL2k7XG4gIGNvbnN0IHJhaW4gPSAvcmFpbi9pO1xuICBjb25zdCBzbm93ID0gL3Nub3cvaTtcbiAgY29uc3QgY2xlYXIgPSAvY2xlYXIvaTtcblxuICBjb25zdCB3ZWF0aGVyVHlwZVJlZ2V4ID0gW2Nsb3VkcywgdGh1bmRlcnN0b3JtLCBkcml6emxlLCByYWluLCBzbm93LCBjbGVhcl07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGZvciAoY29uc3QgcmVnIG9mIHdlYXRoZXJUeXBlUmVnZXgpIHtcbiAgICBpZiAocmVnLnRlc3QoY3VycmVudFdlYXRoZXIpKSB7XG4gICAgICByZXR1cm4gY3VycmVudFdlYXRoZXIubWF0Y2gocmVnKVswXTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGFrZXMgb3JpZ2luYWwgd2VhdGhlciBkYXRhIGFuZCBjcmVhdGVzIG5ldyBvYmplY3Qgd2l0aCB0aGUgbmVjZXNzYXJ5XG4vLyBwcm9wZXJ0aWVzIGNyZWF0ZWQgYnkgcnVubmluZyBhcHByb3ByaWF0ZSBmdW5jdGlvbnMgb24gb3JpZ2luYWwgd2VhdGhlciBkYXRhLlxuZnVuY3Rpb24gdXBkYXRlV2VhdGhlckRhdGEob3JpZ2luYWwpIHtcbiAgY29uc3QgdXBkYXRlZERhdGEgPSB7IC4uLm9yaWdpbmFsIH07XG5cbiAgZGVsZXRlIHVwZGF0ZWREYXRhLmRlZztcbiAgZGVsZXRlIHVwZGF0ZWREYXRhLnN1bnJpc2U7XG4gIGRlbGV0ZSB1cGRhdGVkRGF0YS5zdW5zZXQ7XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHVwZGF0ZWREYXRhLmRhdGUgPSBkYXRlLnRvRGF0ZVN0cmluZygpO1xuICB1cGRhdGVkRGF0YS5zdW5yaXNlID0gY29udmVydFN1bihvcmlnaW5hbC5zdW5yaXNlKTtcbiAgdXBkYXRlZERhdGEuc3Vuc2V0ID0gY29udmVydFN1bihvcmlnaW5hbC5zdW5zZXQpO1xuICB1cGRhdGVkRGF0YS50ZW1wID0gTWF0aC5yb3VuZChvcmlnaW5hbC50ZW1wKTtcbiAgdXBkYXRlZERhdGEudGVtcF9tYXggPSBNYXRoLnJvdW5kKG9yaWdpbmFsLnRlbXBfbWF4KTtcbiAgdXBkYXRlZERhdGEudGVtcF9taW4gPSBNYXRoLnJvdW5kKG9yaWdpbmFsLnRlbXBfbWluKTtcbiAgdXBkYXRlZERhdGEudGVtcENlbCA9IE1hdGgucm91bmQoY29udmVydFRlbXAob3JpZ2luYWwudGVtcCkpO1xuICB1cGRhdGVkRGF0YS50ZW1wTWF4Q2VsID0gTWF0aC5yb3VuZChjb252ZXJ0VGVtcChvcmlnaW5hbC50ZW1wX21heCkpO1xuICB1cGRhdGVkRGF0YS50ZW1wTWluQ2VsID0gTWF0aC5yb3VuZChjb252ZXJ0VGVtcChvcmlnaW5hbC50ZW1wX21pbikpO1xuICB1cGRhdGVkRGF0YS53aW5kID0gY29udmVydFdpbmQob3JpZ2luYWwuZGVnKTtcbiAgdXBkYXRlZERhdGEud2VhdGhlclR5cGUgPSBmaW5kR2lmKG9yaWdpbmFsLmRlc2NyaXB0aW9uKTtcbiAgdXBkYXRlZERhdGEuZ2lmSWQgPSBnZXRHaWZJZCh1cGRhdGVkRGF0YS53ZWF0aGVyVHlwZSk7XG5cbiAgcmV0dXJuIHVwZGF0ZWREYXRhO1xufVxuXG4vLyBBbiBvYmplY3QgY29udGFpbmluZyB3ZWF0aGVyIGdpZiBhcGkgaWQncy5cbmNvbnN0IHdlYXRoZXJHaWZJZCA9IHtcbiAgcmFpbjogJzIwODQ3ODcxJyxcbiAgc25vdzogJzIwODQ3ODcyJyxcbiAgY2xlYXI6ICcyMDg0Nzg3NCcsXG4gIHRodW5kZXJzdG9ybTogJzIwODQ3ODc3JyxcbiAgY2xvdWRzOiAnMjA4NDc4NzAnLFxufTtcblxuLy8gRnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgd2VhdGhlciB0eXBlIGFuZCBmZXRjaGVzIHRoZSBjb3JyZXNwb25kaW5nIHdlYXRoZXIgZ2lmLlxuZnVuY3Rpb24gZ2V0R2lmSWQodHlwZSkge1xuICBsZXQgZ2lmSWQgPSAwO1xuICBpZiAod2VhdGhlckdpZklkLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgcmV0dXJuIHdlYXRoZXJHaWZJZFt0eXBlXTtcbiAgfVxuICBjb25zb2xlLmxvZygnTm8gbWF0Y2hpbmcgZ2lmIGlkLicpO1xuICByZXR1cm4gd2VhdGhlckdpZklkLmNsb3Vkcztcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0R2lmKGlkKSB7XG4gIGlmIChpZCAhPT0gMCkge1xuICAgIGZldGNoKGBodHRwczovL2cudGVub3IuY29tL3YxL2dpZnM/aWRzPSR7aWR9JmtleT1MSVZEU1JaVUxFTEFgLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHdlYXRoZXJHaWYuc3JjID0gcmVzcG9uc2UucmVzdWx0c1swXS5tZWRpYVswXS50aW55Z2lmLnVybDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuLy8gQ2FwaXRhbGl6ZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCB3b3JkIGluIGEgc3RyaW5nLlxuZnVuY3Rpb24gY2FwRmlyc3Qoc3RyKSB7XG4gIGNvbnN0IG5ld0FyciA9IHN0clxuICAgIC5zcGxpdCgnICcpXG4gICAgLm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkpO1xuICByZXR1cm4gbmV3QXJyLmpvaW4oJyAnKTtcbn1cblxuLy8gVG9nZ2xlIHRoZSBjbGFzcyBvbiBlYWNoIHVuaXQuXG5mdW5jdGlvbiB0b2dnbGVVbml0QnRuKHByZXNzZWQsIHJlc2V0KSB7XG4gIHByZXNzZWQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRVbml0Jyk7XG4gIHJlc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkVW5pdCcpO1xufVxuXG5cbi8vIFRPRE86IEZ1bmN0aW9uIGRldGVybWluZXMgaWYgaXQgaXMgbmlnaHQgdGltZSBvciBkYXkgdGltZS4gXG4vLyBJZiBkYXksIGRpc3BsYXkgZGF5dGltZSBpbWFnZSwgaWYgbmlnaHQsIGRpc3BsYXkgbmlnaHQgdGltZSBpbWFnZS5cbmZ1bmN0aW9uIHNldEJhY2tncm91bmRJbWFnZShzdW5yaXNlLCBzdW5zZXQpIHtcbiAgY29uc3QgY3VycmVudFRpbWUgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcbiAgY29uc29sZS5sb2coY3VycmVudFRpbWUpXG5cbiAgaWYgKGN1cnJlbnRUaW1lIDwgc3VucmlzZSB8fCBjdXJyZW50VGltZSA+IHN1bnNldCkge1xuICAgIGNvbnNvbGUubG9nKCduaWdodCcpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdkYXknKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=