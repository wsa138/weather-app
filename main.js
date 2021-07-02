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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  background: skyblue;\n}\n\n#currentWeather {\n  display: flex;\n  justify-content: center;\n  background-color: blue;\n  height: 300px;\n  margin: 0px 50px 0px 50px;\n}\n\n#cityDate {\n  text-align: center;\n}\n\n/* Weather Info Section Containers*/\n\n#summary {\n  background-color: rgb(0, 128, 122);\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#tempSection {\n  display: flex;\n  flex-direction: row;\n  flex-basis: 0;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: space-around;\n}\n\n#otherInfo {\n  background-color: rgb(24, 157, 209);\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 1;\n\n  justify-content: center;\n}\n\n/* Summary/Gif section */\n\n#descriptionText {\n  margin-top: 0.5em;\n  font-size: 2rem;\n}\n\n/* Temperature Section */\n\n#currentTemp {\n  display: flex;\n  align-items: center;\n}\n\n#currentTemp h3 {\n  font-size: 5em;\n}\n\n#unitContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n#highLow {\n  display: flex;\n  flex-direction: column;\n  height: 4em;\n  justify-content: space-between;\n}\n\n#highLow div {\n  display: flex;\n  align-items: center;\n}\n\n#highLow div p {\n  font-size: 1.5em;\n}\n\n/* Other Info section */\n#otherInfo div {\n  display: flex;\n}\n\n/*Weather Info Elements */\n#weatherGif {\n  width: 12em;\n  height: 12em;\n  background-color: blue;\n}\n\n.selectedUnit {\n  background-color: grey;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,cAAc;EACd,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA,mCAAmC;;AAEnC;EACE,kCAAkC;EAClC,aAAa;EACb,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,YAAY;;EAEZ,uBAAuB;AACzB;;AAEA,wBAAwB;;AAExB;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA,wBAAwB;;AAExB;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,uBAAuB;AACvB;EACE,aAAa;AACf;;AAEA,yBAAyB;AACzB;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  background: skyblue;\n}\n\n#currentWeather {\n  display: flex;\n  justify-content: center;\n  background-color: blue;\n  height: 300px;\n  margin: 0px 50px 0px 50px;\n}\n\n#cityDate {\n  text-align: center;\n}\n\n/* Weather Info Section Containers*/\n\n#summary {\n  background-color: rgb(0, 128, 122);\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#tempSection {\n  display: flex;\n  flex-direction: row;\n  flex-basis: 0;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: space-around;\n}\n\n#otherInfo {\n  background-color: rgb(24, 157, 209);\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 1;\n\n  justify-content: center;\n}\n\n/* Summary/Gif section */\n\n#descriptionText {\n  margin-top: 0.5em;\n  font-size: 2rem;\n}\n\n/* Temperature Section */\n\n#currentTemp {\n  display: flex;\n  align-items: center;\n}\n\n#currentTemp h3 {\n  font-size: 5em;\n}\n\n#unitContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n#highLow {\n  display: flex;\n  flex-direction: column;\n  height: 4em;\n  justify-content: space-between;\n}\n\n#highLow div {\n  display: flex;\n  align-items: center;\n}\n\n#highLow div p {\n  font-size: 1.5em;\n}\n\n/* Other Info section */\n#otherInfo div {\n  display: flex;\n}\n\n/*Weather Info Elements */\n#weatherGif {\n  width: 12em;\n  height: 12em;\n  background-color: blue;\n}\n\n.selectedUnit {\n  background-color: grey;\n}\n"],"sourceRoot":""}]);
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
  console.log(original);
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

  console.log(updatedData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGNBQWMsZUFBZSxtQkFBbUIsc0NBQXNDLEdBQUcsVUFBVSx3QkFBd0IsR0FBRyxxQkFBcUIsa0JBQWtCLDRCQUE0QiwyQkFBMkIsa0JBQWtCLDhCQUE4QixHQUFHLGVBQWUsdUJBQXVCLEdBQUcsc0RBQXNELHVDQUF1QyxrQkFBa0Isa0JBQWtCLGlCQUFpQixrQ0FBa0MsMkJBQTJCLHdCQUF3Qix1QkFBdUIsR0FBRyxrQkFBa0Isa0JBQWtCLHdCQUF3QixrQkFBa0IsaUJBQWlCLHdCQUF3QixrQ0FBa0MsR0FBRyxnQkFBZ0Isd0NBQXdDLGtCQUFrQiwyQkFBMkIsa0JBQWtCLGlCQUFpQiw4QkFBOEIsR0FBRyxtREFBbUQsc0JBQXNCLG9CQUFvQixHQUFHLCtDQUErQyxrQkFBa0Isd0JBQXdCLEdBQUcscUJBQXFCLG1CQUFtQixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLGdCQUFnQixtQ0FBbUMsR0FBRyxrQkFBa0Isa0JBQWtCLHdCQUF3QixHQUFHLG9CQUFvQixxQkFBcUIsR0FBRyw4Q0FBOEMsa0JBQWtCLEdBQUcsNkNBQTZDLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcsbUJBQW1CLDJCQUEyQixHQUFHLFNBQVMsZ0ZBQWdGLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLDZCQUE2QixjQUFjLGVBQWUsbUJBQW1CLHNDQUFzQyxHQUFHLFVBQVUsd0JBQXdCLEdBQUcscUJBQXFCLGtCQUFrQiw0QkFBNEIsMkJBQTJCLGtCQUFrQiw4QkFBOEIsR0FBRyxlQUFlLHVCQUF1QixHQUFHLHNEQUFzRCx1Q0FBdUMsa0JBQWtCLGtCQUFrQixpQkFBaUIsa0NBQWtDLDJCQUEyQix3QkFBd0IsdUJBQXVCLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0Isa0JBQWtCLGlCQUFpQix3QkFBd0Isa0NBQWtDLEdBQUcsZ0JBQWdCLHdDQUF3QyxrQkFBa0IsMkJBQTJCLGtCQUFrQixpQkFBaUIsOEJBQThCLEdBQUcsbURBQW1ELHNCQUFzQixvQkFBb0IsR0FBRywrQ0FBK0Msa0JBQWtCLHdCQUF3QixHQUFHLHFCQUFxQixtQkFBbUIsR0FBRyxvQkFBb0Isa0JBQWtCLDJCQUEyQixHQUFHLGNBQWMsa0JBQWtCLDJCQUEyQixnQkFBZ0IsbUNBQW1DLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsR0FBRyxvQkFBb0IscUJBQXFCLEdBQUcsOENBQThDLGtCQUFrQixHQUFHLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLDJCQUEyQixHQUFHLG1CQUFtQiwyQkFBMkIsR0FBRyxxQkFBcUI7QUFDMXJJO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3Qyw4RkFBOEYsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFbmYsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CeUY7QUFDekYsWUFBdUY7O0FBRXZGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSXhCLGlFQUFlLDBGQUFjLE1BQU0sRTs7Ozs7Ozs7OztBQ1p0Qjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztVQzVRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTnFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxLQUFLO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsV0FBVztBQUN0QixXQUFXLFdBQVc7QUFDdEIsV0FBVyxXQUFXO0FBQ3RCLFVBQVUsVUFBVTtBQUNwQixVQUFVLFNBQVM7QUFDbkI7QUFDQSxVQUFVLGNBQWM7QUFDeEIsS0FBSztBQUNMO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCLEtBQUs7QUFDTCxXQUFXLFFBQVE7QUFDbkIsV0FBVyxNQUFNO0FBQ2pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxJQUFJLEdBQUcsb0JBQW9CLEdBQUcsb0JBQW9COztBQUVsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCLEdBQUcsZUFBZTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JELGdDQUFnQyxjQUFjLE9BQU8sYUFBYTtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsR0FBRztBQUNoRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcXG59XFxuXFxuI2N1cnJlbnRXZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luOiAwcHggNTBweCAwcHggNTBweDtcXG59XFxuXFxuI2NpdHlEYXRlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogV2VhdGhlciBJbmZvIFNlY3Rpb24gQ29udGFpbmVycyovXFxuXFxuI3N1bW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyOCwgMTIyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWJhc2lzOiAwO1xcbiAgZmxleC1ncm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RlbXBTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI290aGVySW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDE1NywgMjA5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMTtcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBTdW1tYXJ5L0dpZiBzZWN0aW9uICovXFxuXFxuI2Rlc2NyaXB0aW9uVGV4dCB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLyogVGVtcGVyYXR1cmUgU2VjdGlvbiAqL1xcblxcbiNjdXJyZW50VGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2N1cnJlbnRUZW1wIGgzIHtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbn1cXG5cXG4jdW5pdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hpZ2hMb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2hpZ2hMb3cgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGlnaExvdyBkaXYgcCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4vKiBPdGhlciBJbmZvIHNlY3Rpb24gKi9cXG4jb3RoZXJJbmZvIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKldlYXRoZXIgSW5mbyBFbGVtZW50cyAqL1xcbiN3ZWF0aGVyR2lmIHtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgaGVpZ2h0OiAxMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnNlbGVjdGVkVW5pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxtQ0FBbUM7O0FBRW5DO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7O0VBRVosdUJBQXVCO0FBQ3pCOztBQUVBLHdCQUF3Qjs7QUFFeEI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQSx3QkFBd0I7O0FBRXhCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcXG59XFxuXFxuI2N1cnJlbnRXZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luOiAwcHggNTBweCAwcHggNTBweDtcXG59XFxuXFxuI2NpdHlEYXRlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogV2VhdGhlciBJbmZvIFNlY3Rpb24gQ29udGFpbmVycyovXFxuXFxuI3N1bW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyOCwgMTIyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWJhc2lzOiAwO1xcbiAgZmxleC1ncm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RlbXBTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI290aGVySW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDE1NywgMjA5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMTtcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBTdW1tYXJ5L0dpZiBzZWN0aW9uICovXFxuXFxuI2Rlc2NyaXB0aW9uVGV4dCB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLyogVGVtcGVyYXR1cmUgU2VjdGlvbiAqL1xcblxcbiNjdXJyZW50VGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2N1cnJlbnRUZW1wIGgzIHtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbn1cXG5cXG4jdW5pdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hpZ2hMb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2hpZ2hMb3cgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGlnaExvdyBkaXYgcCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4vKiBPdGhlciBJbmZvIHNlY3Rpb24gKi9cXG4jb3RoZXJJbmZvIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKldlYXRoZXIgSW5mbyBFbGVtZW50cyAqL1xcbiN3ZWF0aGVyR2lmIHtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgaGVpZ2h0OiAxMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnNlbGVjdGVkVW5pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBET00gZWxlbWVudHMuXG5jb25zdCBkYXRlVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlVGV4dCcpO1xuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25UZXh0Jyk7XG5jb25zdCBzdW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VuVGV4dCcpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wVGV4dCcpO1xuY29uc3QgdGVtcE1heCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wTWF4VGV4dCcpO1xuY29uc3QgdGVtcE1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wTWluVGV4dCcpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHlUZXh0Jyk7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRUZXh0Jyk7XG5jb25zdCBsb2NhdGlvbkVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvblRleHQnKTtcbmNvbnN0IHdlYXRoZXJHaWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlckdpZicpO1xuY29uc3QgdGVtcEJ0bkYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcEYnKTtcbmNvbnN0IHRlbXBCdG5DID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBDJyk7XG5cbi8vIE1ha2UgZmV0Y2ggcmVxdWVzdCBmb3IgY2l0eSBpbmZvIGFuZCByZXR1cm4ganNvbiBvYmplY3QuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1pbXBlcmlhbCZhcHBpZD0xNDlmZmNlMWJiNGNkMzliMDVhYzlmNjBjYmY2N2MxNGBcbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnJvciwgJ1RoZXJlIHdhcyBhbiBlcnJvciBnZXR0aW5nIHRoZSB3ZWF0aGVyIGluZm8nKTtcbiAgfVxufVxuXG4vLyBSZXR1cm4gbmVjZXNzYXJ5IHdlYXRoZXIgaW5mbyBhcyBhIG5ldyBvYmplY3QuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHdlYXRoZXJPYmopIHtcbiAgY29uc3Qge1xuICAgIG1haW46IHsgdGVtcCB9LFxuICAgIG1haW46IHsgdGVtcF9tYXggfSxcbiAgICBtYWluOiB7IHRlbXBfbWluIH0sXG4gICAgbWFpbjogeyBodW1pZGl0eSB9LFxuICAgIHN5czogeyBzdW5yaXNlIH0sXG4gICAgc3lzOiB7IHN1bnNldCB9LFxuICAgIHdlYXRoZXI6IHtcbiAgICAgIDA6IHsgZGVzY3JpcHRpb24gfSxcbiAgICB9LFxuICAgIHdlYXRoZXI6IHtcbiAgICAgIDA6IHsgbWFpbiB9LFxuICAgIH0sXG4gICAgd2luZDogeyBzcGVlZCB9LFxuICAgIHdpbmQ6IHsgZGVnIH0sXG4gIH0gPSBhd2FpdCB3ZWF0aGVyT2JqO1xuICByZXR1cm4ge1xuICAgIHRlbXAsXG4gICAgdGVtcF9tYXgsXG4gICAgdGVtcF9taW4sXG4gICAgaHVtaWRpdHksXG4gICAgc3VucmlzZSxcbiAgICBzdW5zZXQsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgbWFpbixcbiAgICBzcGVlZCxcbiAgICBkZWcsXG4gIH07XG59XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBsb2NhdGlvbiBpbnB1dCBzZWFyY2guXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25TdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgcnVuQXBwKCk7XG59KTtcblxuLy8gQ29udmVydCB3aW5kIGRpcmVjdGlvblxuZnVuY3Rpb24gY29udmVydFdpbmQoZGlyZWN0aW9uRGVncmVlKSB7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkaXJlY3Rpb25EZWdyZWU7XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gMzQ5IHx8IHdpbmREaXJlY3Rpb24gPD0gMTEpIHtcbiAgICByZXR1cm4gJ04nO1xuICB9XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gMTEgJiYgd2luZERpcmVjdGlvbiA8PSAzNCkge1xuICAgIHJldHVybiAnTk5FJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDM0ICYmIHdpbmREaXJlY3Rpb24gPD0gNTYpIHtcbiAgICByZXR1cm4gJ05FJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDU2ICYmIHdpbmREaXJlY3Rpb24gPD0gODApIHtcbiAgICByZXR1cm4gJ0VORSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiA4MCAmJiB3aW5kRGlyZWN0aW9uIDw9IDEwMSkge1xuICAgIHJldHVybiAnRSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAxMDEgJiYgd2luZERpcmVjdGlvbiA8PSAxMjQpIHtcbiAgICByZXR1cm4gJ0VTRSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAxMjQgJiYgd2luZERpcmVjdGlvbiA8PSAxNDYpIHtcbiAgICByZXR1cm4gJ1NFJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDE0NiAmJiB3aW5kRGlyZWN0aW9uIDw9IDE2OSkge1xuICAgIHJldHVybiAnU1NFJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDE2OSAmJiB3aW5kRGlyZWN0aW9uIDw9IDE5MSkge1xuICAgIHJldHVybiAnUyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAxOTEgJiYgd2luZERpcmVjdGlvbiA8PSAyMTQpIHtcbiAgICByZXR1cm4gJ1NTVyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAyMTQgJiYgd2luZERpcmVjdGlvbiA8PSAyMzYpIHtcbiAgICByZXR1cm4gJ1NXJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDIzNiAmJiB3aW5kRGlyZWN0aW9uIDw9IDI1OSkge1xuICAgIHJldHVybiAnV1NXJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDI1OSAmJiB3aW5kRGlyZWN0aW9uIDw9IDI4MSkge1xuICAgIHJldHVybiAnVyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAyODEgJiYgd2luZERpcmVjdGlvbiA8PSAzMDQpIHtcbiAgICByZXR1cm4gJ1dOVyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAzMDQgJiYgd2luZERpcmVjdGlvbiA8PSAzMjYpIHtcbiAgICByZXR1cm4gJ05XJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDMyNiAmJiB3aW5kRGlyZWN0aW9uIDw9IDM0OSkge1xuICAgIHJldHVybiAnTk5XJztcbiAgfVxuICByZXR1cm4gJ04vQSc7XG59XG5cbi8vIENvbnZlcnQgdGhlIHN1bnJpc2UgYW5kIHN1bnNldCB0aW1lcy5cbmZ1bmN0aW9uIGNvbnZlcnRTdW4oc3VuVGltZSkge1xuICBjb25zdCBzdW5PbGQgPSBuZXcgRGF0ZShzdW5UaW1lICogMTAwMCk7XG5cbiAgLy8gQ29udmVydGVkIHN1bnNldFxuICBjb25zdCBzdW5OZXcgPSBgJHtjb252ZXJ0TWlsaXRhcnkoXG4gICAgc3VuT2xkLmdldEhvdXJzKClcbiAgKX06JHtzdW5PbGQuZ2V0TWludXRlcygpfToke3N1bk9sZC5nZXRTZWNvbmRzKCl9YDtcblxuICByZXR1cm4gc3VuTmV3O1xufVxuXG4vLyBDb252ZXJ0IG1pbGl0YXJ5IHRpbWUgaG91cnMgdG8gc3RhbmRhcmQuXG5mdW5jdGlvbiBjb252ZXJ0TWlsaXRhcnkoaG91cikge1xuICBpZiAoaG91ciA+IDEyKSB7XG4gICAgcmV0dXJuIGhvdXIgLSAxMjtcbiAgfVxuICByZXR1cm4gaG91cjtcbn1cblxuLy8gQ29udmVydCBmYWhyZW5oZWl0IHRlbXBlcmF0dXJlcyB0byBjZWxzaXVzXG5mdW5jdGlvbiBjb252ZXJ0VGVtcCh0ZW1wTnVtKSB7XG4gIHJldHVybiAoKHRlbXBOdW0gLSAzMikgKiA1KSAvIDk7XG59XG5cbi8vIFJlcGxhY2UgdGhlIHRleHQgY29udGVudCBvZiBlbGVtZW50IHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlLlxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnRWYWx1ZXMoZWxlLCB2YWwpIHtcbiAgZWxlLnRleHRDb250ZW50ID0gdmFsO1xufVxuXG4vLyBEaXNwbGF5cyB0aGUgaW5mb3JtYXRpb24gdG8gdGhlIHBhZ2UuXG5mdW5jdGlvbiBkaXNwbGF5RGF0YShkYXRhT2JqLCBsb2NhdGlvbikge1xuICAvLyBSZXBsYWNlIHRleHQgY29udGVudFxuICByZXBsYWNlRWxlbWVudFZhbHVlcyhkYXRlVGV4dCwgZGF0YU9iai5kYXRlKTtcbiAgcmVwbGFjZUVsZW1lbnRWYWx1ZXMoZGVzY3JpcHRpb24sIGNhcEZpcnN0KGRhdGFPYmouZGVzY3JpcHRpb24pKTtcbiAgcmVwbGFjZUVsZW1lbnRWYWx1ZXMoc3VuLCBgJHtkYXRhT2JqLnN1bnJpc2V9LyR7ZGF0YU9iai5zdW5zZXR9YCk7XG4gIHJlcGxhY2VFbGVtZW50VmFsdWVzKHRlbXAsIGRhdGFPYmoudGVtcCk7XG4gIHJlcGxhY2VFbGVtZW50VmFsdWVzKHRlbXBNYXgsIGRhdGFPYmoudGVtcF9tYXgpO1xuICByZXBsYWNlRWxlbWVudFZhbHVlcyh0ZW1wTWluLCBkYXRhT2JqLnRlbXBfbWluKTtcbiAgcmVwbGFjZUVsZW1lbnRWYWx1ZXMoaHVtaWRpdHksIGAke2RhdGFPYmouaHVtaWRpdHl9JWApO1xuICByZXBsYWNlRWxlbWVudFZhbHVlcyh3aW5kLCBgJHtkYXRhT2JqLnNwZWVkfSBtL2ggJHtkYXRhT2JqLndpbmR9YCk7XG4gIHJlcGxhY2VFbGVtZW50VmFsdWVzKGxvY2F0aW9uRWxlLCBjYXBGaXJzdChsb2NhdGlvbikpO1xuICBzZXRHaWYoZGF0YU9iai5naWZJZCk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvblN1Ym1pdCcpLmNsaWNrKCk7XG5cbi8vIFJlcGxhY2UgdGVtcGVyYXR1cmUgdmFsdWVzIHdpdGggc2VsZWN0ZWQgdGVtcGVyYXR1cmUgdmFsdWUuXG5mdW5jdGlvbiBjaGFuZ2VUZW1wKGN1cnJlbnQsIG1heCwgbWluKSB7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBjdXJyZW50O1xuICB0ZW1wTWF4LnRleHRDb250ZW50ID0gbWF4O1xuICB0ZW1wTWluLnRleHRDb250ZW50ID0gbWluO1xufVxuXG4vLyBSdW5zIGFwcCB3aGljaCB0YWtlcyBpbnB1dCwgZ2V0cyBkYXRhIGFuZCBkaXNwbGF5IGRhdGEgdG8gcGFnZS5cbmFzeW5jIGZ1bmN0aW9uIHJ1bkFwcCgpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25JbnB1dCcpLnZhbHVlO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoZ2V0RGF0YShsb2NhdGlvbikpO1xuICBjb25zdCBuZXdXZWF0aGVyRGF0YSA9IHVwZGF0ZVdlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbiAgZGlzcGxheURhdGEobmV3V2VhdGhlckRhdGEsIGxvY2F0aW9uKTtcblxuICAvLyBVbml0IGJ1dHRvbiBldmVudCBsaXN0ZW5lcnNcbiAgdGVtcEJ0bkYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNoYW5nZVRlbXAoXG4gICAgICBuZXdXZWF0aGVyRGF0YS50ZW1wLFxuICAgICAgbmV3V2VhdGhlckRhdGEudGVtcF9tYXgsXG4gICAgICBuZXdXZWF0aGVyRGF0YS50ZW1wX21pblxuICAgICk7XG4gICAgdG9nZ2xlVW5pdEJ0bih0ZW1wQnRuRiwgdGVtcEJ0bkMpO1xuICB9KTtcblxuICB0ZW1wQnRuQy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGFuZ2VUZW1wKFxuICAgICAgbmV3V2VhdGhlckRhdGEudGVtcENlbCxcbiAgICAgIG5ld1dlYXRoZXJEYXRhLnRlbXBNYXhDZWwsXG4gICAgICBuZXdXZWF0aGVyRGF0YS50ZW1wTWluQ2VsXG4gICAgKTtcbiAgICB0b2dnbGVVbml0QnRuKHRlbXBCdG5DLCB0ZW1wQnRuRik7XG4gIH0pO1xufVxuXG4vLyBVc2UgcmVnZXggdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIHdlYXRoZXIgZ2lmIG5lZWRlZC5cbmZ1bmN0aW9uIGZpbmRHaWYoaW5mbykge1xuICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGluZm87XG4gIGNvbnN0IGNsb3VkcyA9IC9jbG91ZHMvaTtcbiAgY29uc3QgdGh1bmRlcnN0b3JtID0gL3RodW5kZXJzdG9ybS9pO1xuICBjb25zdCBkcml6emxlID0gL2RyaXp6bGUvaTtcbiAgY29uc3QgcmFpbiA9IC9yYWluL2k7XG4gIGNvbnN0IHNub3cgPSAvc25vdy9pO1xuICBjb25zdCBjbGVhciA9IC9jbGVhci9pO1xuXG4gIGNvbnN0IHdlYXRoZXJUeXBlUmVnZXggPSBbY2xvdWRzLCB0aHVuZGVyc3Rvcm0sIGRyaXp6bGUsIHJhaW4sIHNub3csIGNsZWFyXTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgZm9yIChjb25zdCByZWcgb2Ygd2VhdGhlclR5cGVSZWdleCkge1xuICAgIGlmIChyZWcudGVzdChjdXJyZW50V2VhdGhlcikpIHtcbiAgICAgIHJldHVybiBjdXJyZW50V2VhdGhlci5tYXRjaChyZWcpWzBdO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUYWtlcyBvcmlnaW5hbCB3ZWF0aGVyIGRhdGEgYW5kIGNyZWF0ZXMgbmV3IG9iamVjdCB3aXRoIHRoZSBuZWNlc3Nhcnlcbi8vIHByb3BlcnRpZXMgY3JlYXRlZCBieSBydW5uaW5nIGFwcHJvcHJpYXRlIGZ1bmN0aW9ucyBvbiBvcmlnaW5hbCB3ZWF0aGVyIGRhdGEuXG5mdW5jdGlvbiB1cGRhdGVXZWF0aGVyRGF0YShvcmlnaW5hbCkge1xuICBjb25zb2xlLmxvZyhvcmlnaW5hbCk7XG4gIGNvbnN0IHVwZGF0ZWREYXRhID0geyAuLi5vcmlnaW5hbCB9O1xuXG4gIGRlbGV0ZSB1cGRhdGVkRGF0YS5kZWc7XG4gIGRlbGV0ZSB1cGRhdGVkRGF0YS5zdW5yaXNlO1xuICBkZWxldGUgdXBkYXRlZERhdGEuc3Vuc2V0O1xuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICB1cGRhdGVkRGF0YS5kYXRlID0gZGF0ZS50b0RhdGVTdHJpbmcoKTtcbiAgdXBkYXRlZERhdGEuc3VucmlzZSA9IGNvbnZlcnRTdW4ob3JpZ2luYWwuc3VucmlzZSk7XG4gIHVwZGF0ZWREYXRhLnN1bnNldCA9IGNvbnZlcnRTdW4ob3JpZ2luYWwuc3Vuc2V0KTtcbiAgdXBkYXRlZERhdGEudGVtcCA9IE1hdGgucm91bmQob3JpZ2luYWwudGVtcCk7XG4gIHVwZGF0ZWREYXRhLnRlbXBfbWF4ID0gTWF0aC5yb3VuZChvcmlnaW5hbC50ZW1wX21heCk7XG4gIHVwZGF0ZWREYXRhLnRlbXBfbWluID0gTWF0aC5yb3VuZChvcmlnaW5hbC50ZW1wX21pbik7XG4gIHVwZGF0ZWREYXRhLnRlbXBDZWwgPSBNYXRoLnJvdW5kKGNvbnZlcnRUZW1wKG9yaWdpbmFsLnRlbXApKTtcbiAgdXBkYXRlZERhdGEudGVtcE1heENlbCA9IE1hdGgucm91bmQoY29udmVydFRlbXAob3JpZ2luYWwudGVtcF9tYXgpKTtcbiAgdXBkYXRlZERhdGEudGVtcE1pbkNlbCA9IE1hdGgucm91bmQoY29udmVydFRlbXAob3JpZ2luYWwudGVtcF9taW4pKTtcbiAgdXBkYXRlZERhdGEud2luZCA9IGNvbnZlcnRXaW5kKG9yaWdpbmFsLmRlZyk7XG4gIHVwZGF0ZWREYXRhLndlYXRoZXJUeXBlID0gZmluZEdpZihvcmlnaW5hbC5kZXNjcmlwdGlvbik7XG4gIHVwZGF0ZWREYXRhLmdpZklkID0gZ2V0R2lmSWQodXBkYXRlZERhdGEud2VhdGhlclR5cGUpO1xuXG4gIGNvbnNvbGUubG9nKHVwZGF0ZWREYXRhKTtcblxuICByZXR1cm4gdXBkYXRlZERhdGE7XG59XG5cbi8vIEFuIG9iamVjdCBjb250YWluaW5nIHdlYXRoZXIgZ2lmIGFwaSBpZCdzLlxuY29uc3Qgd2VhdGhlckdpZklkID0ge1xuICByYWluOiAnMjA4NDc4NzEnLFxuICBzbm93OiAnMjA4NDc4NzInLFxuICBjbGVhcjogJzIwODQ3ODc0JyxcbiAgdGh1bmRlcnN0b3JtOiAnMjA4NDc4NzcnLFxuICBjbG91ZHM6ICcyMDg0Nzg3MCcsXG59O1xuXG4vLyBGdW5jdGlvbiB0aGF0IHRha2VzIHRoZSB3ZWF0aGVyIHR5cGUgYW5kIGZldGNoZXMgdGhlIGNvcnJlc3BvbmRpbmcgd2VhdGhlciBnaWYuXG5mdW5jdGlvbiBnZXRHaWZJZCh0eXBlKSB7XG4gIGxldCBnaWZJZCA9IDA7XG4gIGlmICh3ZWF0aGVyR2lmSWQuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICByZXR1cm4gd2VhdGhlckdpZklkW3R5cGVdO1xuICB9XG4gIGNvbnNvbGUubG9nKCdObyBtYXRjaGluZyBnaWYgaWQuJyk7XG4gIHJldHVybiB3ZWF0aGVyR2lmSWQuY2xvdWRzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRHaWYoaWQpIHtcbiAgaWYgKGlkICE9PSAwKSB7XG4gICAgZmV0Y2goYGh0dHBzOi8vZy50ZW5vci5jb20vdjEvZ2lmcz9pZHM9JHtpZH0ma2V5PUxJVkRTUlpVTEVMQWAsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgd2VhdGhlckdpZi5zcmMgPSByZXNwb25zZS5yZXN1bHRzWzBdLm1lZGlhWzBdLnRpbnlnaWYudXJsO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxufVxuXG4vLyBDYXBpdGFsaXplIGZpcnN0IGxldHRlciBvZiBlYWNoIHdvcmQgaW4gYSBzdHJpbmcuXG5mdW5jdGlvbiBjYXBGaXJzdChzdHIpIHtcbiAgY29uc3QgbmV3QXJyID0gc3RyXG4gICAgLnNwbGl0KCcgJylcbiAgICAubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKSk7XG4gIHJldHVybiBuZXdBcnIuam9pbignICcpO1xufVxuXG4vLyBUb2dnbGUgdGhlIGNsYXNzIG9uIGVhY2ggdW5pdC5cbmZ1bmN0aW9uIHRvZ2dsZVVuaXRCdG4ocHJlc3NlZCwgcmVzZXQpIHtcbiAgcHJlc3NlZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZFVuaXQnKTtcbiAgcmVzZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWRVbml0Jyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9