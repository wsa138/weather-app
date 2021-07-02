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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  background: skyblue;\n}\n\n#currentWeather {\n  display: flex;\n  justify-content: center;\n  background-color: blue;\n  height: 300px;\n  margin: 0px 50px 0px 50px;\n}\n\n#cityDate {\n  text-align: center;\n}\n\n/* Weather Info Section Containers*/\n\n#summary {\n  background-color: rgb(0, 128, 122);\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#tempSection {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: space-around;\n}\n\n#otherInfo {\n  background-color: rgb(24, 157, 209);\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 1;\n  justify-content: space-around;\n  align-items: center;\n}\n\n/* Weather info details */\n\n#descriptionText {\n  margin-top: 0.5em;\n  font-size: 2rem;\n}\n\n#otherInfo div {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/*Weather Info Elements */\n#weatherGif {\n  width: 12em;\n  height: 12em;\n  background-color: blue;\n}\n\n.selectedUnit {\n  background-color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,cAAc;EACd,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA,mCAAmC;;AAEnC;EACE,kCAAkC;EAClC,aAAa;EACb,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA,yBAAyB;;AAEzB;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,yBAAyB;AACzB;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  background: skyblue;\n}\n\n#currentWeather {\n  display: flex;\n  justify-content: center;\n  background-color: blue;\n  height: 300px;\n  margin: 0px 50px 0px 50px;\n}\n\n#cityDate {\n  text-align: center;\n}\n\n/* Weather Info Section Containers*/\n\n#summary {\n  background-color: rgb(0, 128, 122);\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#tempSection {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: space-around;\n}\n\n#otherInfo {\n  background-color: rgb(24, 157, 209);\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 1;\n  justify-content: space-around;\n  align-items: center;\n}\n\n/* Weather info details */\n\n#descriptionText {\n  margin-top: 0.5em;\n  font-size: 2rem;\n}\n\n#otherInfo div {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/*Weather Info Elements */\n#weatherGif {\n  width: 12em;\n  height: 12em;\n  background-color: blue;\n}\n\n.selectedUnit {\n  background-color: red;\n}\n"],"sourceRoot":""}]);
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
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGNBQWMsZUFBZSxtQkFBbUIsc0NBQXNDLEdBQUcsVUFBVSx3QkFBd0IsR0FBRyxxQkFBcUIsa0JBQWtCLDRCQUE0QiwyQkFBMkIsa0JBQWtCLDhCQUE4QixHQUFH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dGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHNreWJsdWU7XFxufVxcblxcbiNjdXJyZW50V2VhdGhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG1hcmdpbjogMHB4IDUwcHggMHB4IDUwcHg7XFxufVxcblxcbiNjaXR5RGF0ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIFdlYXRoZXIgSW5mbyBTZWN0aW9uIENvbnRhaW5lcnMqL1xcblxcbiNzdW1tYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjgsIDEyMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0ZW1wU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtYmFzaXM6IDA7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNvdGhlckluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNTcsIDIwOSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtYmFzaXM6IDA7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFdlYXRoZXIgaW5mbyBkZXRhaWxzICovXFxuXFxuI2Rlc2NyaXB0aW9uVGV4dCB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI290aGVySW5mbyBkaXYge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKldlYXRoZXIgSW5mbyBFbGVtZW50cyAqL1xcbiN3ZWF0aGVyR2lmIHtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgaGVpZ2h0OiAxMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnNlbGVjdGVkVW5pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLG1DQUFtQzs7QUFFbkM7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUEseUJBQXlCOztBQUV6QjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHNreWJsdWU7XFxufVxcblxcbiNjdXJyZW50V2VhdGhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG1hcmdpbjogMHB4IDUwcHggMHB4IDUwcHg7XFxufVxcblxcbiNjaXR5RGF0ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIFdlYXRoZXIgSW5mbyBTZWN0aW9uIENvbnRhaW5lcnMqL1xcblxcbiNzdW1tYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjgsIDEyMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1iYXNpczogMDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0ZW1wU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtYmFzaXM6IDA7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNvdGhlckluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNTcsIDIwOSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtYmFzaXM6IDA7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFdlYXRoZXIgaW5mbyBkZXRhaWxzICovXFxuXFxuI2Rlc2NyaXB0aW9uVGV4dCB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI290aGVySW5mbyBkaXYge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKldlYXRoZXIgSW5mbyBFbGVtZW50cyAqL1xcbiN3ZWF0aGVyR2lmIHtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgaGVpZ2h0OiAxMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnNlbGVjdGVkVW5pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIERPTSBlbGVtZW50cy5cbmNvbnN0IGRhdGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVUZXh0Jyk7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvblRleHQnKTtcbmNvbnN0IHN1biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW5UZXh0Jyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBUZXh0Jyk7XG5jb25zdCB0ZW1wTWF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBNYXhUZXh0Jyk7XG5jb25zdCB0ZW1wTWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBNaW5UZXh0Jyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kJyk7XG5jb25zdCBsb2NhdGlvbkVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvblRleHQnKTtcbmNvbnN0IHdlYXRoZXJHaWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlckdpZicpO1xuY29uc3QgdGVtcEJ0bkYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcEYnKTtcbmNvbnN0IHRlbXBCdG5DID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBDJyk7XG5cbi8vIE1ha2UgZmV0Y2ggcmVxdWVzdCBmb3IgY2l0eSBpbmZvIGFuZCByZXR1cm4ganNvbiBvYmplY3QuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1pbXBlcmlhbCZhcHBpZD0xNDlmZmNlMWJiNGNkMzliMDVhYzlmNjBjYmY2N2MxNGBcbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnJvciwgJ1RoZXJlIHdhcyBhbiBlcnJvciBnZXR0aW5nIHRoZSB3ZWF0aGVyIGluZm8nKTtcbiAgfVxufVxuXG4vLyBSZXR1cm4gbmVjZXNzYXJ5IHdlYXRoZXIgaW5mbyBhcyBhIG5ldyBvYmplY3QuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHdlYXRoZXJPYmopIHtcbiAgY29uc3Qge1xuICAgIG1haW46IHsgdGVtcCB9LFxuICAgIG1haW46IHsgdGVtcF9tYXggfSxcbiAgICBtYWluOiB7IHRlbXBfbWluIH0sXG4gICAgbWFpbjogeyBodW1pZGl0eSB9LFxuICAgIHN5czogeyBzdW5yaXNlIH0sXG4gICAgc3lzOiB7IHN1bnNldCB9LFxuICAgIHdlYXRoZXI6IHtcbiAgICAgIDA6IHsgZGVzY3JpcHRpb24gfSxcbiAgICB9LFxuICAgIHdlYXRoZXI6IHtcbiAgICAgIDA6IHsgbWFpbiB9LFxuICAgIH0sXG4gICAgd2luZDogeyBzcGVlZCB9LFxuICAgIHdpbmQ6IHsgZGVnIH0sXG4gIH0gPSBhd2FpdCB3ZWF0aGVyT2JqO1xuICByZXR1cm4ge1xuICAgIHRlbXAsXG4gICAgdGVtcF9tYXgsXG4gICAgdGVtcF9taW4sXG4gICAgaHVtaWRpdHksXG4gICAgc3VucmlzZSxcbiAgICBzdW5zZXQsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgbWFpbixcbiAgICBzcGVlZCxcbiAgICBkZWcsXG4gIH07XG59XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBsb2NhdGlvbiBpbnB1dCBzZWFyY2guXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25TdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgcnVuQXBwKCk7XG59KTtcblxuLy8gQ29udmVydCB3aW5kIGRpcmVjdGlvblxuZnVuY3Rpb24gY29udmVydFdpbmQoZGlyZWN0aW9uRGVncmVlKSB7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkaXJlY3Rpb25EZWdyZWU7XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gMzQ5IHx8IHdpbmREaXJlY3Rpb24gPD0gMTEpIHtcbiAgICByZXR1cm4gJ04nO1xuICB9XG4gIGlmICh3aW5kRGlyZWN0aW9uID4gMTEgJiYgd2luZERpcmVjdGlvbiA8PSAzNCkge1xuICAgIHJldHVybiAnTk5FJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDM0ICYmIHdpbmREaXJlY3Rpb24gPD0gNTYpIHtcbiAgICByZXR1cm4gJ05FJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDU2ICYmIHdpbmREaXJlY3Rpb24gPD0gODApIHtcbiAgICByZXR1cm4gJ0VORSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiA4MCAmJiB3aW5kRGlyZWN0aW9uIDw9IDEwMSkge1xuICAgIHJldHVybiAnRSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAxMDEgJiYgd2luZERpcmVjdGlvbiA8PSAxMjQpIHtcbiAgICByZXR1cm4gJ0VTRSc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAxMjQgJiYgd2luZERpcmVjdGlvbiA8PSAxNDYpIHtcbiAgICByZXR1cm4gJ1NFJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDE0NiAmJiB3aW5kRGlyZWN0aW9uIDw9IDE2OSkge1xuICAgIHJldHVybiAnU1NFJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDE2OSAmJiB3aW5kRGlyZWN0aW9uIDw9IDE5MSkge1xuICAgIHJldHVybiAnUyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAxOTEgJiYgd2luZERpcmVjdGlvbiA8PSAyMTQpIHtcbiAgICByZXR1cm4gJ1NTVyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAyMTQgJiYgd2luZERpcmVjdGlvbiA8PSAyMzYpIHtcbiAgICByZXR1cm4gJ1NXJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDIzNiAmJiB3aW5kRGlyZWN0aW9uIDw9IDI1OSkge1xuICAgIHJldHVybiAnV1NXJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDI1OSAmJiB3aW5kRGlyZWN0aW9uIDw9IDI4MSkge1xuICAgIHJldHVybiAnVyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAyODEgJiYgd2luZERpcmVjdGlvbiA8PSAzMDQpIHtcbiAgICByZXR1cm4gJ1dOVyc7XG4gIH1cbiAgaWYgKHdpbmREaXJlY3Rpb24gPiAzMDQgJiYgd2luZERpcmVjdGlvbiA8PSAzMjYpIHtcbiAgICByZXR1cm4gJ05XJztcbiAgfVxuICBpZiAod2luZERpcmVjdGlvbiA+IDMyNiAmJiB3aW5kRGlyZWN0aW9uIDw9IDM0OSkge1xuICAgIHJldHVybiAnTk5XJztcbiAgfVxuICByZXR1cm4gJ04vQSc7XG59XG5cbi8vIENvbnZlcnQgdGhlIHN1bnJpc2UgYW5kIHN1bnNldCB0aW1lcy5cbmZ1bmN0aW9uIGNvbnZlcnRTdW4oc3VuVGltZSkge1xuICBjb25zdCBzdW5PbGQgPSBuZXcgRGF0ZShzdW5UaW1lICogMTAwMCk7XG5cbiAgLy8gQ29udmVydGVkIHN1bnNldFxuICBjb25zdCBzdW5OZXcgPSBgJHtjb252ZXJ0TWlsaXRhcnkoXG4gICAgc3VuT2xkLmdldEhvdXJzKClcbiAgKX06JHtzdW5PbGQuZ2V0TWludXRlcygpfToke3N1bk9sZC5nZXRTZWNvbmRzKCl9YDtcblxuICByZXR1cm4gc3VuTmV3O1xufVxuXG4vLyBDb252ZXJ0IG1pbGl0YXJ5IHRpbWUgaG91cnMgdG8gc3RhbmRhcmQuXG5mdW5jdGlvbiBjb252ZXJ0TWlsaXRhcnkoaG91cikge1xuICBpZiAoaG91ciA+IDEyKSB7XG4gICAgcmV0dXJuIGhvdXIgLSAxMjtcbiAgfVxuICByZXR1cm4gaG91cjtcbn1cblxuLy8gQ29udmVydCBmYWhyZW5oZWl0IHRlbXBlcmF0dXJlcyB0byBjZWxzaXVzXG5mdW5jdGlvbiBjb252ZXJ0VGVtcCh0ZW1wTnVtKSB7XG4gIHJldHVybiAoKHRlbXBOdW0gLSAzMikgKiA1KSAvIDk7XG59XG5cbi8vIFJlcGxhY2UgdGhlIHRleHQgY29udGVudCBvZiBlbGVtZW50IHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlLlxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnRWYWx1ZXMoZWxlLCB2YWwpIHtcbiAgZWxlLnRleHRDb250ZW50ID0gdmFsO1xufVxuXG4vLyBEaXNwbGF5cyB0aGUgaW5mb3JtYXRpb24gdG8gdGhlIHBhZ2UuXG5mdW5jdGlvbiBkaXNwbGF5RGF0YShkYXRhT2JqLCBsb2NhdGlvbikge1xuICAvLyBSZXBsYWNlIHRleHQgY29udGVudFxuICByZXBsYWNlRWxlbWVudFZhbHVlcyhkYXRlVGV4dCwgZGF0YU9iai5kYXRlKTtcbiAgcmVwbGFjZUVsZW1lbnRWYWx1ZXMoZGVzY3JpcHRpb24sIGNhcEZpcnN0KGRhdGFPYmouZGVzY3JpcHRpb24pKTtcbiAgcmVwbGFjZUVsZW1lbnRWYWx1ZXMoc3VuLCBgJHtkYXRhT2JqLnN1bnJpc2V9LyR7ZGF0YU9iai5zdW5zZXR9YCk7XG4gIHJlcGxhY2VFbGVtZW50VmFsdWVzKHRlbXAsIGRhdGFPYmoudGVtcCk7XG4gIHJlcGxhY2VFbGVtZW50VmFsdWVzKHRlbXBNYXgsIGRhdGFPYmoudGVtcF9tYXgpO1xuICByZXBsYWNlRWxlbWVudFZhbHVlcyh0ZW1wTWluLCBkYXRhT2JqLnRlbXBfbWluKTtcbiAgcmVwbGFjZUVsZW1lbnRWYWx1ZXMoaHVtaWRpdHksIGAke2RhdGFPYmouaHVtaWRpdHl9JWApO1xuICByZXBsYWNlRWxlbWVudFZhbHVlcyh3aW5kLCBgJHtkYXRhT2JqLnNwZWVkfSBtL2ggJHtkYXRhT2JqLndpbmR9YCk7XG4gIHJlcGxhY2VFbGVtZW50VmFsdWVzKGxvY2F0aW9uRWxlLCBjYXBGaXJzdChsb2NhdGlvbikpO1xuICBzZXRHaWYoZGF0YU9iai5naWZJZCk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvblN1Ym1pdCcpLmNsaWNrKCk7XG5cbi8vIFJlcGxhY2UgdGVtcGVyYXR1cmUgdmFsdWVzIHdpdGggc2VsZWN0ZWQgdGVtcGVyYXR1cmUgdmFsdWUuXG5mdW5jdGlvbiBjaGFuZ2VUZW1wKGN1cnJlbnQsIG1heCwgbWluKSB7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBjdXJyZW50O1xuICB0ZW1wTWF4LnRleHRDb250ZW50ID0gbWF4O1xuICB0ZW1wTWluLnRleHRDb250ZW50ID0gbWluO1xufVxuXG4vLyBSdW5zIGFwcCB3aGljaCB0YWtlcyBpbnB1dCwgZ2V0cyBkYXRhIGFuZCBkaXNwbGF5IGRhdGEgdG8gcGFnZS5cbmFzeW5jIGZ1bmN0aW9uIHJ1bkFwcCgpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25JbnB1dCcpLnZhbHVlO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoZ2V0RGF0YShsb2NhdGlvbikpO1xuICBjb25zdCBuZXdXZWF0aGVyRGF0YSA9IHVwZGF0ZVdlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbiAgZGlzcGxheURhdGEobmV3V2VhdGhlckRhdGEsIGxvY2F0aW9uKTtcblxuICAvLyBVbml0IGJ1dHRvbiBldmVudCBsaXN0ZW5lcnNcbiAgdGVtcEJ0bkYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNoYW5nZVRlbXAoXG4gICAgICBuZXdXZWF0aGVyRGF0YS50ZW1wLFxuICAgICAgbmV3V2VhdGhlckRhdGEudGVtcF9tYXgsXG4gICAgICBuZXdXZWF0aGVyRGF0YS50ZW1wX21pblxuICAgICk7XG4gICAgdG9nZ2xlVW5pdEJ0bih0ZW1wQnRuRiwgdGVtcEJ0bkMpO1xuICB9KTtcblxuICB0ZW1wQnRuQy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGFuZ2VUZW1wKFxuICAgICAgbmV3V2VhdGhlckRhdGEudGVtcENlbCxcbiAgICAgIG5ld1dlYXRoZXJEYXRhLnRlbXBNYXhDZWwsXG4gICAgICBuZXdXZWF0aGVyRGF0YS50ZW1wTWluQ2VsXG4gICAgKTtcbiAgICB0b2dnbGVVbml0QnRuKHRlbXBCdG5DLCB0ZW1wQnRuRik7XG4gIH0pO1xufVxuXG4vLyBVc2UgcmVnZXggdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIHdlYXRoZXIgZ2lmIG5lZWRlZC5cbmZ1bmN0aW9uIGZpbmRHaWYoaW5mbykge1xuICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGluZm87XG4gIGNvbnN0IGNsb3VkcyA9IC9jbG91ZHMvaTtcbiAgY29uc3QgdGh1bmRlcnN0b3JtID0gL3RodW5kZXJzdG9ybS9pO1xuICBjb25zdCBkcml6emxlID0gL2RyaXp6bGUvaTtcbiAgY29uc3QgcmFpbiA9IC9yYWluL2k7XG4gIGNvbnN0IHNub3cgPSAvc25vdy9pO1xuICBjb25zdCBjbGVhciA9IC9jbGVhci9pO1xuXG4gIGNvbnN0IHdlYXRoZXJUeXBlUmVnZXggPSBbY2xvdWRzLCB0aHVuZGVyc3Rvcm0sIGRyaXp6bGUsIHJhaW4sIHNub3csIGNsZWFyXTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgZm9yIChjb25zdCByZWcgb2Ygd2VhdGhlclR5cGVSZWdleCkge1xuICAgIGlmIChyZWcudGVzdChjdXJyZW50V2VhdGhlcikpIHtcbiAgICAgIHJldHVybiBjdXJyZW50V2VhdGhlci5tYXRjaChyZWcpWzBdO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUYWtlcyBvcmlnaW5hbCB3ZWF0aGVyIGRhdGEgYW5kIGNyZWF0ZXMgbmV3IG9iamVjdCB3aXRoIHRoZSBuZWNlc3Nhcnlcbi8vIHByb3BlcnRpZXMgY3JlYXRlZCBieSBydW5uaW5nIGFwcHJvcHJpYXRlIGZ1bmN0aW9ucyBvbiBvcmlnaW5hbCB3ZWF0aGVyIGRhdGEuXG5mdW5jdGlvbiB1cGRhdGVXZWF0aGVyRGF0YShvcmlnaW5hbCkge1xuICBjb25zb2xlLmxvZyhvcmlnaW5hbCk7XG4gIGNvbnN0IHVwZGF0ZWREYXRhID0geyAuLi5vcmlnaW5hbCB9O1xuXG4gIGRlbGV0ZSB1cGRhdGVkRGF0YS5kZWc7XG4gIGRlbGV0ZSB1cGRhdGVkRGF0YS5zdW5yaXNlO1xuICBkZWxldGUgdXBkYXRlZERhdGEuc3Vuc2V0O1xuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICB1cGRhdGVkRGF0YS5kYXRlID0gZGF0ZS50b0RhdGVTdHJpbmcoKTtcbiAgdXBkYXRlZERhdGEuc3VucmlzZSA9IGNvbnZlcnRTdW4ob3JpZ2luYWwuc3VucmlzZSk7XG4gIHVwZGF0ZWREYXRhLnN1bnNldCA9IGNvbnZlcnRTdW4ob3JpZ2luYWwuc3Vuc2V0KTtcbiAgdXBkYXRlZERhdGEudGVtcCA9IE1hdGgucm91bmQob3JpZ2luYWwudGVtcCk7XG4gIHVwZGF0ZWREYXRhLnRlbXBfbWF4ID0gTWF0aC5yb3VuZChvcmlnaW5hbC50ZW1wX21heCk7XG4gIHVwZGF0ZWREYXRhLnRlbXBfbWluID0gTWF0aC5yb3VuZChvcmlnaW5hbC50ZW1wX21pbik7XG4gIHVwZGF0ZWREYXRhLnRlbXBDZWwgPSBNYXRoLnJvdW5kKGNvbnZlcnRUZW1wKG9yaWdpbmFsLnRlbXApKTtcbiAgdXBkYXRlZERhdGEudGVtcE1heENlbCA9IE1hdGgucm91bmQoY29udmVydFRlbXAob3JpZ2luYWwudGVtcF9tYXgpKTtcbiAgdXBkYXRlZERhdGEudGVtcE1pbkNlbCA9IE1hdGgucm91bmQoY29udmVydFRlbXAob3JpZ2luYWwudGVtcF9taW4pKTtcbiAgdXBkYXRlZERhdGEud2luZCA9IGNvbnZlcnRXaW5kKG9yaWdpbmFsLmRlZyk7XG4gIHVwZGF0ZWREYXRhLndlYXRoZXJUeXBlID0gZmluZEdpZihvcmlnaW5hbC5kZXNjcmlwdGlvbik7XG4gIHVwZGF0ZWREYXRhLmdpZklkID0gZ2V0R2lmSWQodXBkYXRlZERhdGEud2VhdGhlclR5cGUpO1xuXG4gIGNvbnNvbGUubG9nKHVwZGF0ZWREYXRhKTtcblxuICByZXR1cm4gdXBkYXRlZERhdGE7XG59XG5cbi8vIEFuIG9iamVjdCBjb250YWluaW5nIHdlYXRoZXIgZ2lmIGFwaSBpZCdzLlxuY29uc3Qgd2VhdGhlckdpZklkID0ge1xuICByYWluOiAnMjA4NDc4NzEnLFxuICBzbm93OiAnMjA4NDc4NzInLFxuICBjbGVhcjogJzIwODQ3ODc0JyxcbiAgdGh1bmRlcnN0b3JtOiAnMjA4NDc4NzcnLFxuICBjbG91ZHM6ICcyMDg0Nzg3MCcsXG59O1xuXG4vLyBGdW5jdGlvbiB0aGF0IHRha2VzIHRoZSB3ZWF0aGVyIHR5cGUgYW5kIGZldGNoZXMgdGhlIGNvcnJlc3BvbmRpbmcgd2VhdGhlciBnaWYuXG5mdW5jdGlvbiBnZXRHaWZJZCh0eXBlKSB7XG4gIGxldCBnaWZJZCA9IDA7XG4gIGlmICh3ZWF0aGVyR2lmSWQuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICByZXR1cm4gd2VhdGhlckdpZklkW3R5cGVdO1xuICB9XG4gIGNvbnNvbGUubG9nKCdObyBtYXRjaGluZyBnaWYgaWQuJyk7XG4gIHJldHVybiB3ZWF0aGVyR2lmSWQuY2xvdWRzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRHaWYoaWQpIHtcbiAgaWYgKGlkICE9PSAwKSB7XG4gICAgZmV0Y2goYGh0dHBzOi8vZy50ZW5vci5jb20vdjEvZ2lmcz9pZHM9JHtpZH0ma2V5PUxJVkRTUlpVTEVMQWAsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgd2VhdGhlckdpZi5zcmMgPSByZXNwb25zZS5yZXN1bHRzWzBdLm1lZGlhWzBdLnRpbnlnaWYudXJsO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxufVxuXG4vLyBDYXBpdGFsaXplIGZpcnN0IGxldHRlciBvZiBlYWNoIHdvcmQgaW4gYSBzdHJpbmcuXG5mdW5jdGlvbiBjYXBGaXJzdChzdHIpIHtcbiAgY29uc3QgbmV3QXJyID0gc3RyXG4gICAgLnNwbGl0KCcgJylcbiAgICAubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKSk7XG4gIHJldHVybiBuZXdBcnIuam9pbignICcpO1xufVxuXG4vLyBUb2dnbGUgdGhlIGNsYXNzIG9uIGVhY2ggdW5pdC5cbmZ1bmN0aW9uIHRvZ2dsZVVuaXRCdG4ocHJlc3NlZCwgcmVzZXQpIHtcbiAgcHJlc3NlZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZFVuaXQnKTtcbiAgcmVzZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWRVbml0Jyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9