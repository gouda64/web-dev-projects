/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load\": () => (/* binding */ load)\n/* harmony export */ });\nconst load = () => {\r\n    const content = document.querySelector(\"#content\");\r\n    if (content.hasChildNodes()) {\r\n        content.textContent = \"\";\r\n    }\r\n    content.classList.add(\"contact\");\r\n\r\n    content.appendChild(contactCard(\"phone\", \"we're literally cats\"));\r\n    content.appendChild(contactCard(\"email\", \"wemaybecats@butwehavesomeprofessionalism.com\"));\r\n    content.appendChild(contactCard(\"address\", \"we reside beyond the realm of human understanding\"));\r\n};\r\n\r\nconst contactCard = (type, text) => {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n\r\n    const title = document.createElement(\"div\");\r\n    title.textContent = type;\r\n    card.appendChild(title);\r\n\r\n    const answer = document.createElement(\"div\");\r\n    answer.textContent = text;\r\n    card.appendChild(answer);\r\n\r\n    return card;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.js */ \"./src/main-page.js\");\n/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page.js */ \"./src/menu-page.js\");\n/* harmony import */ var _contact_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-page.js */ \"./src/contact-page.js\");\n\r\n\r\n\r\n\r\nconst body = document.querySelector(\"body\");\r\n\r\nconst loadHeader = () => {\r\n    const header = document.createElement(\"div\");\r\n    header.classList.add(\"header\");\r\n    header.textContent = \"possibly perfect café\"\r\n    \r\n    const btw = document.createElement(\"div\");\r\n    btw.classList.add(\"btw\");\r\n    btw.textContent = \"no cat puns - we take our job seriously\";\r\n    header.appendChild(btw);\r\n\r\n    body.insertBefore(header, document.querySelector(\"#content\"));\r\n};\r\n\r\nconst loadTabs = () => {\r\n    const tabs = document.createElement(\"div\");\r\n    //could do ul but then you gotta deal with all that styling stuff\r\n    //accessibility concern?\r\n    /* anyways I know comments are supposed to be informative\r\n    and not my personal diary but honestly idrc nobody else is gonna\r\n    see this anyways, who am I even talking to?\r\n    tldr: why write less word when more word do job?\r\n    */\r\n\r\n    const mainChild = document.createElement(\"div\");\r\n    mainChild.textContent = \"main\";\r\n    const menuChild = document.createElement(\"div\");\r\n    menuChild.textContent = \"menu\";\r\n    const contactChild = document.createElement(\"div\");\r\n    contactChild.textContent = \"contact\";\r\n    \r\n    tabs.appendChild(mainChild);\r\n    tabs.appendChild(menuChild);\r\n    tabs.appendChild(contactChild);\r\n\r\n    body.insertBefore(tabs, document.querySelector(\"#content\"));\r\n};\r\n\r\nconst loadFooter = () => {\r\n    const footer = document.createElement(\"div\");\r\n    footer.classList.add(\"footer\");\r\n    footer.textContent = \"menu info and images aren't mine. i could add a copyright, but why are you trying to steal from cats?\";\r\n    body.appendChild(footer);\r\n};\r\n\r\nconst startSite = () => {\r\n    loadHeader();\r\n    loadTabs();\r\n    (0,_main_page_js__WEBPACK_IMPORTED_MODULE_0__.load)();\r\n    loadFooter();\r\n}\r\n\r\nstartSite();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load\": () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _assets_cat_chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/cat-chef.jpg */ \"./src/assets/cat-chef.jpg\");\n\r\n\r\nconst load = () => {\r\n    const content = document.querySelector(\"#content\");\r\n    if (content.hasChildNodes()) {\r\n        content.textContent = \"\";\r\n    }\r\n    content.classList.add(\"main\");\r\n\r\n    const headline = document.createElement(\"div\");\r\n    headline.classList.add(\"headline\");\r\n    headline.textContent = \"women want us, fish fear us\";\r\n\r\n    const pic = document.createElement(\"img\");\r\n    pic.src = _assets_cat_chef_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    pic.alt = \"Grumpy-looking tabby cat with chef hat holds large grey fish over stove and pan\";\r\n\r\n    const caption = document.createElement(\"div\");\r\n    caption.classList.add(\"caption\");\r\n    caption.textContent = '\"i love [our food] and that is the beginning and end of everything.\" - the great catsby';\r\n\r\n    content.appendChild(headline);\r\n    content.appendChild(pic);\r\n    content.appendChild(caption);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/main-page.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load\": () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _assets_777_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/777-burger.jpg */ \"./src/assets/777-burger.jpg\");\n/* harmony import */ var _assets_lobster_omelet_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/lobster-omelet.jpg */ \"./src/assets/lobster-omelet.jpg\");\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pizza.jpg */ \"./src/assets/pizza.jpg\");\n/* harmony import */ var _assets_taco_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/taco.jpg */ \"./src/assets/taco.jpg\");\n/* harmony import */ var _assets_purrito_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/purrito.gif */ \"./src/assets/purrito.gif\");\n \r\n\r\n\r\n\r\n\r\n\r\nconst load = () => {\r\n    const content = document.querySelector(\"#content\");\r\n    if (content.hasChildNodes()) {\r\n        content.textContent = \"\";\r\n    }\r\n    content.classList.add(\"menu\");\r\n\r\n    content.appendChild(itemCard(\"fancy burger\", _assets_777_burger_jpg__WEBPACK_IMPORTED_MODULE_0__,  \"Very fancy, high-stacked burger on plate, with salad on the side\", \"$777 - high-grade beef, pancetta, goat cheese, seared foie grass, arugula, maine lobster, and 100 year-aged balsamic vinegar on your choice of ridiculously overengineered roll, served with a salad and bottle of dom perignon rosé (to jack up the price even more)\"));\r\n\r\n    content.appendChild(itemCard(\"even fancier omelet\", _assets_lobster_omelet_jpg__WEBPACK_IMPORTED_MODULE_1__, \"Round yellow omelet on plate topped with chives, lobster, and large mound of caviar\", \"$2,000 - six eggs, cream, chives, lobster sauce, a whole lobster, and 10 (not excessive) ounces of sevurga caviar, served over yukon gold potatoes\"));\r\n\r\n    content.appendChild(itemCard(\"even fancier than fancy pizza\", _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__, \"Pizza with creamy white cheese topped with slices of lobster and several different colors of caviar, garnished with (seemingly) scallions in an x-formation\", \"$12,000 - 20 cm pizza with weird dough that takes 72 hours to rise (me fr), topped with seven types of cheese, lobster from norway, and three types of caviar with fancy unspellable names, plus bottles of champagne, brancy, and cognac; an exclusive limited edition set of dishes and cutlery (just 'cause); and they literally come to your house\"));\r\n\r\n    content.appendChild(itemCard(\"world record fancy taco\", _assets_taco_jpg__WEBPACK_IMPORTED_MODULE_3__, \"Yellow tortilla taco filled with various expensive fillings and garnished with flowers in wooden holder\", \"$25,000 aka just get a car - gold flake-infused corn tortilla filled with kobe beef, almas beluga caviar, and black truffle brie cheese, and served with salsa of dried morita chili peppers, ley.925 (super-)ultra-premium añejo tequila, and civet coffee beans (fun fact: civets are also called toddy cats - cute! - and civet coffee is made from the partially digested and fermented coffee beans found in their poop - why!)\"))\r\n\r\n    content.appendChild(itemCard(\"purrito\", _assets_purrito_gif__WEBPACK_IMPORTED_MODULE_4__, \"Tabby kitten wrapped in green towel with only head sticking out, throwing back head and mewing\", \"$1,000,000,000,000 - we sold out.\"))\r\n};\r\n\r\nconst itemCard = (name, imgSrc, imgAlt, caption) => {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n\r\n    const title = document.createElement(\"div\");\r\n    title.classList.add(\"title\");\r\n    title.textContent = name;\r\n    card.appendChild(title);\r\n\r\n    const pic = document.createElement(\"img\");\r\n    pic.src = imgSrc;\r\n    pic.alt = imgAlt;\r\n    card.appendChild(pic);\r\n\r\n    const cpt = document.createElement(\"div\");\r\n    cpt.classList.add(\"caption\");\r\n    cpt.textContent = caption;\r\n    card.appendChild(cpt);\r\n\r\n    return card;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu-page.js?");

/***/ }),

/***/ "./src/assets/777-burger.jpg":
/*!***********************************!*\
  !*** ./src/assets/777-burger.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce966108636e6abc41e6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/777-burger.jpg?");

/***/ }),

/***/ "./src/assets/cat-chef.jpg":
/*!*********************************!*\
  !*** ./src/assets/cat-chef.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f9194f2a9d4d9799cff3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cat-chef.jpg?");

/***/ }),

/***/ "./src/assets/lobster-omelet.jpg":
/*!***************************************!*\
  !*** ./src/assets/lobster-omelet.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61c42b251322aeb0fd79.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/lobster-omelet.jpg?");

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1616364c536312392fb9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/pizza.jpg?");

/***/ }),

/***/ "./src/assets/purrito.gif":
/*!********************************!*\
  !*** ./src/assets/purrito.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"570a3d9edc882004fdb0.gif\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/purrito.gif?");

/***/ }),

/***/ "./src/assets/taco.jpg":
/*!*****************************!*\
  !*** ./src/assets/taco.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"574e1529b100722a4bf7.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/taco.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;