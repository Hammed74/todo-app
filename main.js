/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    color: white;
    /* border: 2px red solid; */
    margin: 0;
    padding: 0;
    font-family: Poppins, sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    overflow: hidden;
}

:root{
--primary: rgb(26, 26, 26);
--secondary: black;
--tertiary: rgb(231, 231, 231);

}

body{
    background-color: var(--primary);
}
.sidebar{
    height: 100vh;
    border-right: 5px solid var(--secondary);
}
.container{
    display: grid;
    grid-template-columns: 300px auto;
}

.controls{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 45px;
    border-bottom: 8px solid black;

}
.logo-title{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
}
.logo{
    width: 100px;
        transition: 0.5s;
}

.logo:hover{
    transform-origin: center;
    transform: rotate(22deg) translateY(-12px);;
}

.logo:hover + .title{
    color: gold;
    transition: 0.5s;
}
.title{
    font-size: 50px;
}
.add-projects{
 font-size: calc(0.7rem + 1vw);
 padding: 20px;
text-align: center;
 width: 40%;

border-bottom: 4px solid var(--secondary);
transition:0.2s;
cursor: pointer;
}

.add-todo{
    padding: 20px;
    width: 20%;
    text-align: center;
    transition: 0.2s;
    border-bottom: 4px solid var(--secondary);
    transition: 0.3s;
    cursor: pointer;
    font-size: 0.3rem + 1vw;
    text-wrap: nowrap;
}
.add-todo:hover{
        background-color: orange;
    width: 14%;
      border-bottom: 4px solid var(--primary);
      border-radius: 3px;
}

.add-projects:hover{
    background-color: rgb(0, 126, 222);
    width: 26%;
    border-radius: 4px;
    border-bottom: 2px solid var(--primary);
}

.main{
    display: grid;
    grid-template-rows: 35% 65%;
    position: relative;
}
.item-list{
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 10px;
}

.item{
background-color: white;
width: 95%;
display: grid;
grid-template-columns: repeat(5, 1fr);
align-content: center;
gap: 10px;
justify-items: center;
height: 7vh;
align-items: end;
border-radius: 2px;
padding: 10px;
}

.item > p{
    color: var(--secondary);
    align-self: center;
}

.item > div{
    color: black;
}

.todo-form{
    display: none;
    width: 50%;
    max-width: 800px;
    background-color: var(--primary);
    position: absolute;
    justify-self: center;
    border-radius: 10px;
    border: 2px solid black;
    top: 10%; 
    flex-direction: column;
    gap: 40px;
    padding: 40px;
    align-items: center;
    z-index: 9;
}
div > label{
    font-size: 24px;
}

.todo-form > div{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
.input-box{
    border-radius: 3px;
    border: none;
    width: 50%;
    color: black;
    padding: 4px;
}

select{
    color: black;
    padding: 4px;
    font-size: 18px;
}

.title-todo-form{
    text-align: center;
    font-size: 40px;
    color: gold;

}

.submit{
    color: black;
    width: 20%;
    font-size: 24px;
    background-color: gold;
    border: none;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
}

.delete{
    align-self: center;
justify-self: right;
}

.delete-container{
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: end;

}
.close-form{
   position: relative;
   left: 48%;
   font-size: 20px;
}

.sidebar-container{
    display: grid;
    grid-template-rows: 50% 50%;
    height: 100%;
    align-items: center;
    justify-items: center;
}

.project-tab-container{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-tab-container:hover{
    background-color: rgb(83, 83, 83);
    cursor: pointer;
}
.project-tab{
    font-size: 40px;
}

.todo-tab-container{
    border-top: 6px solid black;
       height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.todo-tab-container:hover{
    background-color: rgb(83, 83, 83);
    cursor: pointer;
}
.todo-tab{
    font-size: 40px;
    color: gold;
}

.project-list{
    display: none;
    padding: 30px;
    gap: 50px;
}

.project{
    position: relative;
    display: flex;
    flex-direction: column;
    aspect-ratio: 1/1;
    background-color: white;
    padding: 35px;
    align-items: center;
    border-radius: 3px;
}
.project > p{
    color: black;
}
.project > h1{
    color: black;
}

.project-form{
    display: none;
    width: 50%;
    max-width: 800px;
    background-color: var(--primary);
    position: absolute;
    justify-self: center;
    border-radius: 10px;
    border: 2px solid black;
    top: 10%; 
    flex-direction: column;
    gap: 40px;
    padding: 40px;
    align-items: center;
    z-index: 9;
}

.project-form > div{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}

.close-project-form{
   position: relative;
   left: 48%;
   font-size: 20px;
}

.title-project-form{
    text-align: center;
    font-size: 40px;
    color: gold;
}

.project-submit{
    color: black;
    width: 20%;
    font-size: 24px;
    background-color: gold;
    border: none;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
}

.project-delete{
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
}

.project-box{
     display: none;
     aspect-ratio: 1/1;
    width: 40vw;
    max-width: 600px;
    background-color: white;
    position: absolute;
    justify-self: center;
    border-radius: 10px;
    border: 2px solid black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    gap: 40px;
    padding: 40px;
    align-items: center;
    z-index: 9;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\n*{\n    color: white;\n    /* border: 2px red solid; */\n    margin: 0;\n    padding: 0;\n    font-family: Poppins, sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\n:root{\n--primary: rgb(26, 26, 26);\n--secondary: black;\n--tertiary: rgb(231, 231, 231);\n\n}\n\nbody{\n    background-color: var(--primary);\n}\n.sidebar{\n    height: 100vh;\n    border-right: 5px solid var(--secondary);\n}\n.container{\n    display: grid;\n    grid-template-columns: 300px auto;\n}\n\n.controls{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 45px;\n    border-bottom: 8px solid black;\n\n}\n.logo-title{\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    margin-bottom: 40px;\n}\n.logo{\n    width: 100px;\n        transition: 0.5s;\n}\n\n.logo:hover{\n    transform-origin: center;\n    transform: rotate(22deg) translateY(-12px);;\n}\n\n.logo:hover + .title{\n    color: gold;\n    transition: 0.5s;\n}\n.title{\n    font-size: 50px;\n}\n.add-projects{\n font-size: calc(0.7rem + 1vw);\n padding: 20px;\ntext-align: center;\n width: 40%;\n\nborder-bottom: 4px solid var(--secondary);\ntransition:0.2s;\ncursor: pointer;\n}\n\n.add-todo{\n    padding: 20px;\n    width: 20%;\n    text-align: center;\n    transition: 0.2s;\n    border-bottom: 4px solid var(--secondary);\n    transition: 0.3s;\n    cursor: pointer;\n    font-size: 0.3rem + 1vw;\n    text-wrap: nowrap;\n}\n.add-todo:hover{\n        background-color: orange;\n    width: 14%;\n      border-bottom: 4px solid var(--primary);\n      border-radius: 3px;\n}\n\n.add-projects:hover{\n    background-color: rgb(0, 126, 222);\n    width: 26%;\n    border-radius: 4px;\n    border-bottom: 2px solid var(--primary);\n}\n\n.main{\n    display: grid;\n    grid-template-rows: 35% 65%;\n    position: relative;\n}\n.item-list{\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    gap: 10px;\n}\n\n.item{\nbackground-color: white;\nwidth: 95%;\ndisplay: grid;\ngrid-template-columns: repeat(5, 1fr);\nalign-content: center;\ngap: 10px;\njustify-items: center;\nheight: 7vh;\nalign-items: end;\nborder-radius: 2px;\npadding: 10px;\n}\n\n.item > p{\n    color: var(--secondary);\n    align-self: center;\n}\n\n.item > div{\n    color: black;\n}\n\n.todo-form{\n    display: none;\n    width: 50%;\n    max-width: 800px;\n    background-color: var(--primary);\n    position: absolute;\n    justify-self: center;\n    border-radius: 10px;\n    border: 2px solid black;\n    top: 10%; \n    flex-direction: column;\n    gap: 40px;\n    padding: 40px;\n    align-items: center;\n    z-index: 9;\n}\ndiv > label{\n    font-size: 24px;\n}\n\n.todo-form > div{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n}\n.input-box{\n    border-radius: 3px;\n    border: none;\n    width: 50%;\n    color: black;\n    padding: 4px;\n}\n\nselect{\n    color: black;\n    padding: 4px;\n    font-size: 18px;\n}\n\n.title-todo-form{\n    text-align: center;\n    font-size: 40px;\n    color: gold;\n\n}\n\n.submit{\n    color: black;\n    width: 20%;\n    font-size: 24px;\n    background-color: gold;\n    border: none;\n    border-radius: 3px;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.delete{\n    align-self: center;\njustify-self: right;\n}\n\n.delete-container{\n    width: 100%;\n    position: absolute;\n    display: flex;\n    justify-content: end;\n\n}\n.close-form{\n   position: relative;\n   left: 48%;\n   font-size: 20px;\n}\n\n.sidebar-container{\n    display: grid;\n    grid-template-rows: 50% 50%;\n    height: 100%;\n    align-items: center;\n    justify-items: center;\n}\n\n.project-tab-container{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-tab-container:hover{\n    background-color: rgb(83, 83, 83);\n    cursor: pointer;\n}\n.project-tab{\n    font-size: 40px;\n}\n\n.todo-tab-container{\n    border-top: 6px solid black;\n       height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.todo-tab-container:hover{\n    background-color: rgb(83, 83, 83);\n    cursor: pointer;\n}\n.todo-tab{\n    font-size: 40px;\n    color: gold;\n}\n\n.project-list{\n    display: none;\n    padding: 30px;\n    gap: 50px;\n}\n\n.project{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    aspect-ratio: 1/1;\n    background-color: white;\n    padding: 35px;\n    align-items: center;\n    border-radius: 3px;\n}\n.project > p{\n    color: black;\n}\n.project > h1{\n    color: black;\n}\n\n.project-form{\n    display: none;\n    width: 50%;\n    max-width: 800px;\n    background-color: var(--primary);\n    position: absolute;\n    justify-self: center;\n    border-radius: 10px;\n    border: 2px solid black;\n    top: 10%; \n    flex-direction: column;\n    gap: 40px;\n    padding: 40px;\n    align-items: center;\n    z-index: 9;\n}\n\n.project-form > div{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n}\n\n.close-project-form{\n   position: relative;\n   left: 48%;\n   font-size: 20px;\n}\n\n.title-project-form{\n    text-align: center;\n    font-size: 40px;\n    color: gold;\n}\n\n.project-submit{\n    color: black;\n    width: 20%;\n    font-size: 24px;\n    background-color: gold;\n    border: none;\n    border-radius: 3px;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.project-delete{\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 5px;\n}\n\n.project-box{\n     display: none;\n     aspect-ratio: 1/1;\n    width: 40vw;\n    max-width: 600px;\n    background-color: white;\n    position: absolute;\n    justify-self: center;\n    border-radius: 10px;\n    border: 2px solid black;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    flex-direction: column;\n    gap: 40px;\n    padding: 40px;\n    align-items: center;\n    z-index: 9;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/addToDom.js":
/*!*************************!*\
  !*** ./src/addToDom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectToDom: () => (/* binding */ addProjectToDom),
/* harmony export */   addToDom: () => (/* binding */ addToDom)
/* harmony export */ });
/* harmony import */ var _addtodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addtodo */ "./src/addtodo.js");


function addToDom(obj) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("item");
  const unorderedList = document.querySelector(".item-list");
  unorderedList.appendChild(todoItem);
  const listTitle = document.createElement("p");
  listTitle.classList.add("list-title");
  todoItem.appendChild(listTitle);
  listTitle.textContent = "Title: " + obj.title;

  const listDesc = document.createElement("p");
  listDesc.classList.add("list-desc");
  todoItem.appendChild(listDesc);
  listDesc.textContent = "Description: " + obj.description;

  const listDate = document.createElement("p");
  listDate.classList.add("list-date");
  todoItem.appendChild(listDate);
  listDate.textContent = "Date: " + obj.date;

  const listPriority = document.createElement("p");
  listPriority.classList.add("list-priority");
  todoItem.appendChild(listPriority);
  listPriority.textContent = "Priority: " + obj.priority;
  if (obj.priority == 1) {
    todoItem.style.borderLeft = "10px solid red";
  } else if (obj.priority == 2) {
    todoItem.style.borderLeft = "10px solid orange";
  } else if (obj.priority == 3) {
    todoItem.style.borderLeft = "10px solid purple";
  } else if (obj.priority == 4) {
    todoItem.style.borderLeft = "10px solid green";
  } else if (obj.priority == 5) {
    todoItem.style.borderLeft = "10px solid blue";
  }

  const deleteButton = document.createElement("div");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete")
  todoItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", (event) => {
    for (let i = 0; i < _addtodo__WEBPACK_IMPORTED_MODULE_0__.listArray.length; i++){
        if(_addtodo__WEBPACK_IMPORTED_MODULE_0__.listArray[i] === obj){
    console.log(obj)
      _addtodo__WEBPACK_IMPORTED_MODULE_0__.listArray.splice(i,1)
      todoItem.remove()
      console.log(_addtodo__WEBPACK_IMPORTED_MODULE_0__.listArray)
      break;
        }
    };
  });
  _addtodo__WEBPACK_IMPORTED_MODULE_0__.listArray.push(obj);
}

function addProjectToDom(obj){
    const projectList = document.querySelector(".project-list")
    const projectListItem = document.createElement("li")
    projectListItem.classList.add("project");
    projectList.appendChild(projectListItem)
    const header = document.createElement("h1")
    header.textContent = "Project Title"
    projectListItem.appendChild(header)
    const title = document.createElement("p")
    title.textContent = obj.title
    projectListItem.appendChild(title)
    const deleteButton = document.createElement("img")
    deleteButton.src = "./dist/close.png";
    deleteButton.classList.add("project-delete")
    projectListItem.appendChild(deleteButton)

    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation()
        projectListItem.remove()
    })


}



/***/ }),

/***/ "./src/addtodo.js":
/*!************************!*\
  !*** ./src/addtodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItem: () => (/* binding */ ListItem),
/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem),
/* harmony export */   listArray: () => (/* binding */ listArray),
/* harmony export */   makeList: () => (/* binding */ makeList),
/* harmony export */   makeProjects: () => (/* binding */ makeProjects)
/* harmony export */ });
/* harmony import */ var _addToDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToDom */ "./src/addToDom.js");


class ListItem{
    constructor(title, description, date, priority){
        this.title = title,
        this.description = description, 
        this.date = date,
        this.priority = priority
    }
}

class ProjectItem{
    constructor(title,date){
        this.title = title,
        this.date = date
    }
}

function makeProjects(){
    let project1 = new ProjectItem("Get a SWE Job.","January, 15th 2024")
    ;(0,_addToDom__WEBPACK_IMPORTED_MODULE_0__.addProjectToDom)(project1)

}

    let listArray = [];
function makeList() {
  let item1 = new ListItem(
    "Go jogging.",
    "Go for a jog around Kelly Drive",
    "November 30th, 2023",
    3
  );

  let item2 = new ListItem(
    "Cook Sushi",
    "Use new sushi from store",
    "November 20th, 2023",
    5
  );
  (0,_addToDom__WEBPACK_IMPORTED_MODULE_0__.addToDom)(item1);
  (0,_addToDom__WEBPACK_IMPORTED_MODULE_0__.addToDom)(item2);
}



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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _addtodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addtodo */ "./src/addtodo.js");
/* harmony import */ var _addToDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addToDom.js */ "./src/addToDom.js");








let page = () => {
  const todoButton = document.querySelector(".add-todo");
  const todoForm = document.querySelector(".todo-form");
  const title = document.querySelector("#title");
  const desc = document.querySelector("#desc");
  const date = document.querySelector("#date");
  const priority = document.querySelector("#priority");
  const submitBtn = document.querySelector(".submit");
  const deleteButton = document.querySelector(".close-form");
  const todoTabTitle = document.querySelector(".todo-tab");
  const todoTab = document.querySelector(".todo-tab-container");
  const projectTabTitle = document.querySelector(".project-tab");
  const itemList = document.querySelector(".item-list");
  const projectList = document.querySelector(".project-list");
  const projectButton = document.querySelector(".add-projects");
  const projectForm = document.querySelector(".project-form");
  const deleteProjectButton = document.querySelector(".close-project-form");
  const projectTitle = document.querySelector("#projectTitle");
  const projectDate = document.querySelector("#projectDate");
  const projectSubmitButton = document.querySelector(".project-submit");

  todoTab.addEventListener("click", () => {
    projectList.style.display = "none";
    itemList.style.display = "grid";
    todoTabTitle.style.color = "gold";
    projectTabTitle.style.color = "white";
  });

  deleteProjectButton.addEventListener("click", () => {
    projectForm.style.display = "none";
  });
  projectButton.addEventListener("click", () => {
    projectForm.style.display = "flex";
  });
  todoButton.addEventListener("click", () => {
    todoForm.style.display = "flex";
  });

  deleteButton.addEventListener("click", () => {
    todoForm.style.display = "none";
  });

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      title.value !== "" &&
      desc.value !== "" &&
      date.value !== "" &&
      priority.value !== ""
    ) {
      let project = new _addtodo__WEBPACK_IMPORTED_MODULE_1__.ListItem(
        title.value,
        desc.value,
        date.value,
        priority.value
      );
      todoForm.style.display = "none";
      (0,_addToDom_js__WEBPACK_IMPORTED_MODULE_2__.addToDom)(item);
      console.log(item);
      console.log(_addtodo__WEBPACK_IMPORTED_MODULE_1__.listArray);
    } else {
      alert("You must fill out ALL fields.");
    }
  });

  projectSubmitButton.addEventListener("click", () => {
    event.preventDefault();
    if (projectTitle.value !== "" && projectDate.value !== "") {
      let project = new _addtodo__WEBPACK_IMPORTED_MODULE_1__.ProjectItem(projectTitle.value, projectDate.value);
      projectForm.style.display = "none";
      (0,_addToDom_js__WEBPACK_IMPORTED_MODULE_2__.addProjectToDom)(project);
      console.log(project);
    } else {
      alert("You must fill out ALL fields.");
    }
  });

    const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.addEventListener("click", () => {
            const projects = document.querySelectorAll(".project");
      const projectBox = document.createElement("div");
      projectBox.classList.add("project-box");
      projectBox.style.display = "flex";
      projectList.appendChild(projectBox);
    });
  });
};

let projectPage = () => {
  const projectTab = document.querySelector(".project-tab-container");
  const itemList = document.querySelector(".item-list");
  const projectList = document.querySelector(".project-list");
  const projectTabTitle = document.querySelector(".project-tab");
  const todoTabTitle = document.querySelector(".todo-tab");

  projectTab.addEventListener("click", () => {
    itemList.style.display = "none";
    projectList.style.display = "flex";
    projectTabTitle.style.color = "gold";
    todoTabTitle.style.color = "white";
  });
};

(0,_addtodo__WEBPACK_IMPORTED_MODULE_1__.makeList)();
(0,_addtodo__WEBPACK_IMPORTED_MODULE_1__.makeProjects)();
projectPage();
page();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdIQUFnSCxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUM5SjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FB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QUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQVE7QUFDZDtBQUNBLGtCQUFrQiwrQ0FBUztBQUMzQixNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlEQUFXO0FBQ25DO0FBQ0EsTUFBTSw2REFBZTtBQUNyQjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxrREFBUTtBQUNSLHNEQUFZO0FBQ1o7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYWRkVG9Eb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYWRkdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46cm9vdHtcbi0tcHJpbWFyeTogcmdiKDI2LCAyNiwgMjYpO1xuLS1zZWNvbmRhcnk6IGJsYWNrO1xuLS10ZXJ0aWFyeTogcmdiKDIzMSwgMjMxLCAyMzEpO1xuXG59XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4uc2lkZWJhcntcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XG59XG4uY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xufVxuXG4uY29udHJvbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgYmxhY2s7XG5cbn1cbi5sb2dvLXRpdGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5sb2dve1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmxvZ286aG92ZXJ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyZGVnKSB0cmFuc2xhdGVZKC0xMnB4KTs7XG59XG5cbi5sb2dvOmhvdmVyICsgLnRpdGxle1xuICAgIGNvbG9yOiBnb2xkO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG4udGl0bGV7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuLmFkZC1wcm9qZWN0c3tcbiBmb250LXNpemU6IGNhbGMoMC43cmVtICsgMXZ3KTtcbiBwYWRkaW5nOiAyMHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xuIHdpZHRoOiA0MCU7XG5cbmJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xudHJhbnNpdGlvbjowLjJzO1xuY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXRvZG97XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogMjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMC4zcmVtICsgMXZ3O1xuICAgIHRleHQtd3JhcDogbm93cmFwO1xufVxuLmFkZC10b2RvOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgd2lkdGg6IDE0JTtcbiAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmFkZC1wcm9qZWN0czpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTI2LCAyMjIpO1xuICAgIHdpZHRoOiAyNiU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLm1haW57XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1JSA2NSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLml0ZW0tbGlzdHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5pdGVte1xuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG53aWR0aDogOTUlO1xuZGlzcGxheTogZ3JpZDtcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XG5nYXA6IDEwcHg7XG5qdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5oZWlnaHQ6IDd2aDtcbmFsaWduLWl0ZW1zOiBlbmQ7XG5ib3JkZXItcmFkaXVzOiAycHg7XG5wYWRkaW5nOiAxMHB4O1xufVxuXG4uaXRlbSA+IHB7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uaXRlbSA+IGRpdntcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi50b2RvLWZvcm17XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgdG9wOiAxMCU7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0MHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA5O1xufVxuZGl2ID4gbGFiZWx7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4udG9kby1mb3JtID4gZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmlucHV0LWJveHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDRweDtcbn1cblxuc2VsZWN0e1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGl0bGUtdG9kby1mb3Jte1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6IGdvbGQ7XG5cbn1cblxuLnN1Ym1pdHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVsZXRle1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbmp1c3RpZnktc2VsZjogcmlnaHQ7XG59XG5cbi5kZWxldGUtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuXG59XG4uY2xvc2UtZm9ybXtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGxlZnQ6IDQ4JTtcbiAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNpZGViYXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtdGFiLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvamVjdC10YWItY29udGFpbmVyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgODMsIDgzKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvamVjdC10YWJ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4udG9kby10YWItY29udGFpbmVye1xuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCBibGFjaztcbiAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udG9kby10YWItY29udGFpbmVyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgODMsIDgzKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udG9kby10YWJ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiBnb2xkO1xufVxuXG4ucHJvamVjdC1saXN0e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBnYXA6IDUwcHg7XG59XG5cbi5wcm9qZWN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMzVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5wcm9qZWN0ID4gcHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4ucHJvamVjdCA+IGgxe1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnByb2plY3QtZm9ybXtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICB0b3A6IDEwJTsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDQwcHg7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDk7XG59XG5cbi5wcm9qZWN0LWZvcm0gPiBkaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbG9zZS1wcm9qZWN0LWZvcm17XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBsZWZ0OiA0OCU7XG4gICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50aXRsZS1wcm9qZWN0LWZvcm17XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogZ29sZDtcbn1cblxuLnByb2plY3Qtc3VibWl0e1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMjAlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LWRlbGV0ZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2plY3QtYm94e1xuICAgICBkaXNwbGF5OiBub25lO1xuICAgICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgICB3aWR0aDogNDB2dztcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNDBweDtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogOTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHdLQUF3SztJQUN4SyxzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCLGtCQUFrQjtBQUNsQiw4QkFBOEI7O0FBRTlCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7QUFFbEM7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtRQUNSLGdCQUFnQjtBQUN4Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7Q0FDQyw2QkFBNkI7Q0FDN0IsYUFBYTtBQUNkLGtCQUFrQjtDQUNqQixVQUFVOztBQUVYLHlDQUF5QztBQUN6QyxlQUFlO0FBQ2YsZUFBZTtBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lB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VCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixTQUFTO0dBQ1QsZUFBZTtBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0tBQ0ssYUFBYTtLQUNiLGlCQUFpQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7ICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG46cm9vdHtcXG4tLXByaW1hcnk6IHJnYigyNiwgMjYsIDI2KTtcXG4tLXNlY29uZGFyeTogYmxhY2s7XFxuLS10ZXJ0aWFyeTogcmdiKDIzMSwgMjMxLCAyMzEpO1xcblxcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuLnNpZGViYXJ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxufVxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0bztcXG59XFxuXFxuLmNvbnRyb2xze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgYmxhY2s7XFxuXFxufVxcbi5sb2dvLXRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi5sb2dve1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4ubG9nbzpob3ZlcntcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMmRlZykgdHJhbnNsYXRlWSgtMTJweCk7O1xcbn1cXG5cXG4ubG9nbzpob3ZlciArIC50aXRsZXtcXG4gICAgY29sb3I6IGdvbGQ7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi50aXRsZXtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG4uYWRkLXByb2plY3Rze1xcbiBmb250LXNpemU6IGNhbGMoMC43cmVtICsgMXZ3KTtcXG4gcGFkZGluZzogMjBweDtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuIHdpZHRoOiA0MCU7XFxuXFxuYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxudHJhbnNpdGlvbjowLjJzO1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2Rve1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC4zcmVtICsgMXZ3O1xcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG59XFxuLmFkZC10b2RvOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICB3aWR0aDogMTQlO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdHM6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjYsIDIyMik7XFxuICAgIHdpZHRoOiAyNiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4ubWFpbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzNSUgNjUlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pdGVtLWxpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLml0ZW17XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxud2lkdGg6IDk1JTtcXG5kaXNwbGF5OiBncmlkO1xcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuYWxpZ24tY29udGVudDogY2VudGVyO1xcbmdhcDogMTBweDtcXG5qdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuaGVpZ2h0OiA3dmg7XFxuYWxpZ24taXRlbXM6IGVuZDtcXG5ib3JkZXItcmFkaXVzOiAycHg7XFxucGFkZGluZzogMTBweDtcXG59XFxuXFxuLml0ZW0gPiBwe1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaXRlbSA+IGRpdntcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udG9kby1mb3Jte1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHRvcDogMTAlOyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiA5O1xcbn1cXG5kaXYgPiBsYWJlbHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmlucHV0LWJveHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG5zZWxlY3R7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50aXRsZS10b2RvLWZvcm17XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogZ29sZDtcXG5cXG59XFxuXFxuLnN1Ym1pdHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5qdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG4uZGVsZXRlLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuXFxufVxcbi5jbG9zZS1mb3Jte1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICBsZWZ0OiA0OCU7XFxuICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRhYi1jb250YWluZXJ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10YWItY29udGFpbmVyOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDgzLCA4Myk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByb2plY3QtdGFie1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi50b2RvLXRhYi1jb250YWluZXJ7XFxuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCBibGFjaztcXG4gICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvLXRhYi1jb250YWluZXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgODMsIDgzKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG9kby10YWJ7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgY29sb3I6IGdvbGQ7XFxufVxcblxcbi5wcm9qZWN0LWxpc3R7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAzNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5wcm9qZWN0ID4gcHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG4ucHJvamVjdCA+IGgxe1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWZvcm17XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgdG9wOiAxMCU7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gPiBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2UtcHJvamVjdC1mb3Jte1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICBsZWZ0OiA0OCU7XFxuICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udGl0bGUtcHJvamVjdC1mb3Jte1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgY29sb3I6IGdvbGQ7XFxufVxcblxcbi5wcm9qZWN0LXN1Ym1pdHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWJveHtcXG4gICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNDBweDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogOTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbGlzdEFycmF5IH0gZnJvbSBcIi4vYWRkdG9kb1wiO1xuXG5mdW5jdGlvbiBhZGRUb0RvbShvYmopIHtcbiAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtLWxpc3RcIik7XG4gIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xuICBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGlzdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsaXN0LXRpdGxlXCIpO1xuICB0b2RvSXRlbS5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIiArIG9iai50aXRsZTtcblxuICBjb25zdCBsaXN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsaXN0RGVzYy5jbGFzc0xpc3QuYWRkKFwibGlzdC1kZXNjXCIpO1xuICB0b2RvSXRlbS5hcHBlbmRDaGlsZChsaXN0RGVzYyk7XG4gIGxpc3REZXNjLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCIgKyBvYmouZGVzY3JpcHRpb247XG5cbiAgY29uc3QgbGlzdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGlzdERhdGUuY2xhc3NMaXN0LmFkZChcImxpc3QtZGF0ZVwiKTtcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQobGlzdERhdGUpO1xuICBsaXN0RGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZTogXCIgKyBvYmouZGF0ZTtcblxuICBjb25zdCBsaXN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGlzdFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJsaXN0LXByaW9yaXR5XCIpO1xuICB0b2RvSXRlbS5hcHBlbmRDaGlsZChsaXN0UHJpb3JpdHkpO1xuICBsaXN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIiArIG9iai5wcmlvcml0eTtcbiAgaWYgKG9iai5wcmlvcml0eSA9PSAxKSB7XG4gICAgdG9kb0l0ZW0uc3R5bGUuYm9yZGVyTGVmdCA9IFwiMTBweCBzb2xpZCByZWRcIjtcbiAgfSBlbHNlIGlmIChvYmoucHJpb3JpdHkgPT0gMikge1xuICAgIHRvZG9JdGVtLnN0eWxlLmJvcmRlckxlZnQgPSBcIjEwcHggc29saWQgb3JhbmdlXCI7XG4gIH0gZWxzZSBpZiAob2JqLnByaW9yaXR5ID09IDMpIHtcbiAgICB0b2RvSXRlbS5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIxMHB4IHNvbGlkIHB1cnBsZVwiO1xuICB9IGVsc2UgaWYgKG9iai5wcmlvcml0eSA9PSA0KSB7XG4gICAgdG9kb0l0ZW0uc3R5bGUuYm9yZGVyTGVmdCA9IFwiMTBweCBzb2xpZCBncmVlblwiO1xuICB9IGVsc2UgaWYgKG9iai5wcmlvcml0eSA9PSA1KSB7XG4gICAgdG9kb0l0ZW0uc3R5bGUuYm9yZGVyTGVmdCA9IFwiMTBweCBzb2xpZCBibHVlXCI7XG4gIH1cblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIilcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYobGlzdEFycmF5W2ldID09PSBvYmope1xuICAgIGNvbnNvbGUubG9nKG9iailcbiAgICAgIGxpc3RBcnJheS5zcGxpY2UoaSwxKVxuICAgICAgdG9kb0l0ZW0ucmVtb3ZlKClcbiAgICAgIGNvbnNvbGUubG9nKGxpc3RBcnJheSlcbiAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIGxpc3RBcnJheS5wdXNoKG9iaik7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0RvbShvYmope1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIilcbiAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RJdGVtKVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBUaXRsZVwiXG4gICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGVcbiAgICBwcm9qZWN0TGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGRlbGV0ZUJ1dHRvbi5zcmMgPSBcIi4uL2Rpc3QvY2xvc2UucG5nXCI7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlbGV0ZVwiKVxuICAgIHByb2plY3RMaXN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgcHJvamVjdExpc3RJdGVtLnJlbW92ZSgpXG4gICAgfSlcblxuXG59XG5leHBvcnQge2FkZFRvRG9tLFxuICAgICAgICBhZGRQcm9qZWN0VG9Eb21cbn1cbiIsImltcG9ydCB7IGFkZFRvRG9tIH0gZnJvbSBcIi4vYWRkVG9Eb21cIjtcbmltcG9ydCB7IGFkZFByb2plY3RUb0RvbSB9IGZyb20gXCIuL2FkZFRvRG9tXCI7XG5jbGFzcyBMaXN0SXRlbXtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24sIFxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB9XG59XG5cbmNsYXNzIFByb2plY3RJdGVte1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRhdGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGUsXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9qZWN0cygpe1xuICAgIGxldCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0SXRlbShcIkdldCBhIFNXRSBKb2IuXCIsXCJKYW51YXJ5LCAxNXRoIDIwMjRcIilcbiAgICBhZGRQcm9qZWN0VG9Eb20ocHJvamVjdDEpXG5cbn1cblxuICAgIGxldCBsaXN0QXJyYXkgPSBbXTtcbmZ1bmN0aW9uIG1ha2VMaXN0KCkge1xuICBsZXQgaXRlbTEgPSBuZXcgTGlzdEl0ZW0oXG4gICAgXCJHbyBqb2dnaW5nLlwiLFxuICAgIFwiR28gZm9yIGEgam9nIGFyb3VuZCBLZWxseSBEcml2ZVwiLFxuICAgIFwiTm92ZW1iZXIgMzB0aCwgMjAyM1wiLFxuICAgIDNcbiAgKTtcblxuICBsZXQgaXRlbTIgPSBuZXcgTGlzdEl0ZW0oXG4gICAgXCJDb29rIFN1c2hpXCIsXG4gICAgXCJVc2UgbmV3IHN1c2hpIGZyb20gc3RvcmVcIixcbiAgICBcIk5vdmVtYmVyIDIwdGgsIDIwMjNcIixcbiAgICA1XG4gICk7XG4gIGFkZFRvRG9tKGl0ZW0xKTtcbiAgYWRkVG9Eb20oaXRlbTIpO1xufVxuXG5leHBvcnQge0xpc3RJdGVtLFxuICAgICAgICBsaXN0QXJyYXksXG4gICAgICAgIG1ha2VMaXN0LFxuICAgICAgICBtYWtlUHJvamVjdHMsXG4gICAgICAgIFByb2plY3RJdGVtXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgbWFrZUxpc3QsIG1ha2VQcm9qZWN0cyB9IGZyb20gXCIuL2FkZHRvZG9cIjtcbmltcG9ydCB7IGFkZFRvRG9tIH0gZnJvbSBcIi4vYWRkVG9Eb20uanNcIjtcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIi4vYWRkdG9kb1wiO1xuaW1wb3J0IHsgbGlzdEFycmF5IH0gZnJvbSBcIi4vYWRkdG9kb1wiO1xuaW1wb3J0IHsgUHJvamVjdEl0ZW0gfSBmcm9tIFwiLi9hZGR0b2RvXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0VG9Eb20gfSBmcm9tIFwiLi9hZGRUb0RvbS5qc1wiO1xuXG5sZXQgcGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIik7XG4gIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWZvcm1cIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY1wiKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFwiKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1mb3JtXCIpO1xuICBjb25zdCB0b2RvVGFiVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGFiXCIpO1xuICBjb25zdCB0b2RvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRhYi1jb250YWluZXJcIik7XG4gIGNvbnN0IHByb2plY3RUYWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YWJcIik7XG4gIGNvbnN0IGl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtLWxpc3RcIik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0c1wiKTtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtcHJvamVjdC1mb3JtXCIpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RUaXRsZVwiKTtcbiAgY29uc3QgcHJvamVjdERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3REYXRlXCIpO1xuICBjb25zdCBwcm9qZWN0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXN1Ym1pdFwiKTtcblxuICB0b2RvVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdExpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGl0ZW1MaXN0LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICB0b2RvVGFiVGl0bGUuc3R5bGUuY29sb3IgPSBcImdvbGRcIjtcbiAgICBwcm9qZWN0VGFiVGl0bGUuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIH0pO1xuXG4gIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9KTtcbiAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfSk7XG5cbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcblxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKFxuICAgICAgdGl0bGUudmFsdWUgIT09IFwiXCIgJiZcbiAgICAgIGRlc2MudmFsdWUgIT09IFwiXCIgJiZcbiAgICAgIGRhdGUudmFsdWUgIT09IFwiXCIgJiZcbiAgICAgIHByaW9yaXR5LnZhbHVlICE9PSBcIlwiXG4gICAgKSB7XG4gICAgICBsZXQgcHJvamVjdCA9IG5ldyBMaXN0SXRlbShcbiAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgIGRlc2MudmFsdWUsXG4gICAgICAgIGRhdGUudmFsdWUsXG4gICAgICAgIHByaW9yaXR5LnZhbHVlXG4gICAgICApO1xuICAgICAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgYWRkVG9Eb20oaXRlbSk7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgIGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiWW91IG11c3QgZmlsbCBvdXQgQUxMIGZpZWxkcy5cIik7XG4gICAgfVxuICB9KTtcblxuICBwcm9qZWN0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocHJvamVjdFRpdGxlLnZhbHVlICE9PSBcIlwiICYmIHByb2plY3REYXRlLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0SXRlbShwcm9qZWN0VGl0bGUudmFsdWUsIHByb2plY3REYXRlLnZhbHVlKTtcbiAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGFkZFByb2plY3RUb0RvbShwcm9qZWN0KTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIllvdSBtdXN0IGZpbGwgb3V0IEFMTCBmaWVsZHMuXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuICAgICAgY29uc3QgcHJvamVjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWN0Qm94LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJveFwiKTtcbiAgICAgIHByb2plY3RCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEJveCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxubGV0IHByb2plY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRhYi1jb250YWluZXJcIik7XG4gIGNvbnN0IGl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtLWxpc3RcIik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gIGNvbnN0IHByb2plY3RUYWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YWJcIik7XG4gIGNvbnN0IHRvZG9UYWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10YWJcIik7XG5cbiAgcHJvamVjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGl0ZW1MaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBwcm9qZWN0TGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcHJvamVjdFRhYlRpdGxlLnN0eWxlLmNvbG9yID0gXCJnb2xkXCI7XG4gICAgdG9kb1RhYlRpdGxlLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICB9KTtcbn07XG5cbm1ha2VMaXN0KCk7XG5tYWtlUHJvamVjdHMoKTtcbnByb2plY3RQYWdlKCk7XG5wYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=