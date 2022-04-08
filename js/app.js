/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/components/modal.js":
/*!***************************************!*\
  !*** ./assets/js/components/modal.js ***!
  \***************************************/
/***/ (() => {

eval("window.onload = function () {\n  var burger = document.getElementById(\"burger\");\n  var header__mobile_hide = document.getElementById(\"header__mobile_hide\");\n\n  burger.onclick = function () {\n    header__mobile_hide.classList.toggle(\"header__mobile_show\");\n  };\n\n  var selectArray = document.getElementsByClassName(\"select__item\");\n\n  for (var i = 0; i < selectArray.length; i++) {\n    selectArray[i].addEventListener(\"click\", e => {\n      e.target.classList.toggle(\"select__item2\");\n      e.target.nextElementSibling.classList.toggle(\"select__list_sub\");\n    });\n  }\n\n  $('.gallery__list2').slick({\n    infinite: true,\n    speed: 300,\n    slidesToShow: 1\n  });\n  $('.gallery__next').on('click', function () {\n    $(\".slick-prev\").click();\n  });\n  $('.gallery__prev').on('click', function () {\n    $(\".slick-next\").click();\n  });\n};\n\n//# sourceURL=webpack://starterkit/./assets/js/components/modal.js?");

/***/ }),

/***/ "./assets/js/components/oneMoreScript.js":
/*!***********************************************!*\
  !*** ./assets/js/components/oneMoreScript.js ***!
  \***********************************************/
/***/ (() => {

eval("var gallery__text = document.getElementsByClassName(\"gallery__text\");\nvar gallery__item = document.getElementsByClassName(\"gallery__item\");\nvar gallery__link = document.getElementsByClassName(\"gallery__link\");\n\nfor (var i = 0; i < gallery__item.length; i++) {\n  gallery__item[i].onmouseover = function () {\n    var el = this.querySelector(\".gallery__text\");\n    el.style.opacity = \"1\";\n  };\n\n  gallery__item[i].onmousedown = function () {\n    var el = this.querySelector(\".gallery__link\");\n    el.style.opacity = \"0\";\n  };\n\n  gallery__item[i].onmousedown = function () {\n    var el = this.querySelector(\".gallery__text\");\n    el.style.opacity = \"1\";\n  };\n\n  gallery__item[i].onmouseleave = function () {\n    var el = this.querySelector(\".gallery__text\");\n    el.style.opacity = \"0\";\n  };\n}\n\n//# sourceURL=webpack://starterkit/./assets/js/components/oneMoreScript.js?");

/***/ }),

/***/ "./assets/js/components/slider.js":
/*!****************************************!*\
  !*** ./assets/js/components/slider.js ***!
  \****************************************/
/***/ (() => {

eval("const mySiema = new Siema({\n  selector: '.siema',\n  duration: 200,\n  easing: 'ease-out',\n  perPage: {\n    1920: 2,\n    576: 1\n  },\n  startIndex: 0,\n  draggable: true,\n  multipleDrag: true,\n  threshold: 20,\n  loop: true,\n  rtl: false,\n  onInit: () => {},\n  onChange: () => {}\n});\ndocument.querySelector('.prev').addEventListener('click', () => mySiema.prev());\ndocument.querySelector('.next').addEventListener('click', () => mySiema.next());\n\n//# sourceURL=webpack://starterkit/./assets/js/components/slider.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const oneMoreScript = __webpack_require__(/*! ./components/oneMoreScript.js */ \"./assets/js/components/oneMoreScript.js\");\n\nconst modal = __webpack_require__(/*! ./components/modal.js */ \"./assets/js/components/modal.js\");\n\nconst slider = __webpack_require__(/*! ./components/slider.js */ \"./assets/js/components/slider.js\");\n\n//# sourceURL=webpack://starterkit/./assets/js/index.js?");

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://starterkit/./assets/scss/app.scss?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./assets/js/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/scss/app.scss");
/******/ 	
/******/ })()
;