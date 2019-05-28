(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./src/Layouts/App.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js!./src/Layouts/App.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".dd___88kSS {\n  color: #00ffff; }\n", "",{"version":3,"sources":["App.scss"],"names":[],"mappings":"AAAA;EACE,cAAc,EAAE","file":"App.scss","sourcesContent":[".dd {\n  color: #00ffff; }\n"]}]);

// Exports
exports.locals = {
	"dd": "dd___88kSS"
};

/***/ }),

/***/ "./src/Layouts/App.scss":
/*!******************************!*\
  !*** ./src/Layouts/App.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/sass-loader/lib/loader.js!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./src/Layouts/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/sass-loader/lib/loader.js!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./src/Layouts/App.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/sass-loader/lib/loader.js!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./src/Layouts/App.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Layouts/App.tsx":
/*!*****************************!*\
  !*** ./src/Layouts/App.tsx ***!
  \*****************************/
/*! exports provided: Hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hello", function() { return Hello; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/App.scss */ "./src/Layouts/App.scss");
/* harmony import */ var _Layouts_App_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Layouts_App_scss__WEBPACK_IMPORTED_MODULE_1__);


var Hello = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: _Layouts_App_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dd },
        "Hello from ",
        props.compiler,
        " and ",
        props.framework));
};


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layouts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layouts/App */ "./src/Layouts/App.tsx");



var App = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Layouts_App__WEBPACK_IMPORTED_MODULE_2__["Hello"], { compiler: "Youtube", framework: "Google" }));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](App, null), document.getElementById("root"));


/***/ })

},[["./src/index.tsx","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0cy9BcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0cy9BcHAuc2Nzcz9lN2RiIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXRzL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsZ0JBQWdCLG1CQUFtQixFQUFFLFNBQVMsK0RBQStELDBEQUEwRCxtQkFBbUIsRUFBRSxLQUFLOztBQUV4TjtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsNE5BQStHOztBQUVySSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIsNE5BQStHO0FBQ2xJLG1CQUFtQixtQkFBTyxDQUFDLDROQUErRzs7QUFFMUksb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDUztBQU9qQyxJQUFNLEtBQUssR0FBRyxVQUFDLEtBQWlCO0lBQ25DLE9BQU0sQ0FDRiw0REFDSSxTQUFTLEVBQUUsd0RBQU0sQ0FBQyxFQUFFOztRQUNYLEtBQUssQ0FBQyxRQUFROztRQUFPLEtBQUssQ0FBQyxTQUFTLENBQU0sQ0FDMUQsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNPO0FBRUE7QUFFdEMsSUFBTSxHQUFHLEdBQUc7SUFDUixPQUFNLENBQ0Ysb0RBQUMsa0RBQUssSUFDRixRQUFRLEVBQUMsU0FBUyxFQUNsQixTQUFTLEVBQUMsUUFBUSxHQUNwQixDQUNMLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixnREFBZSxDQUNYLG9EQUFDLEdBQUcsT0FBRSxFQUNOLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQ2xDLENBQUMiLCJmaWxlIjoiYXBwLmVmYWY2YTZkYTRlNjhhOWRkNjhlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kZF9fXzg4a1NTIHtcXG4gIGNvbG9yOiAjMDBmZmZmOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQXBwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjLEVBQUVcIixcImZpbGVcIjpcIkFwcC5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kZCB7XFxuICBjb2xvcjogIzAwZmZmZjsgfVxcblwiXX1dKTtcblxuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiZGRcIjogXCJkZF9fXzg4a1NTXCJcbn07IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0FwcC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9BcHAuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0FwcC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvTGF5b3V0cy9BcHAuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBoZWxsb1Byb3Bze1xyXG4gICAgY29tcGlsZXI6IHN0cmluZyxcclxuICAgIGZyYW1ld29yazogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIZWxsbyA9IChwcm9wczogaGVsbG9Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxoMVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZH1cclxuICAgICAgICA+SGVsbG8gZnJvbSB7cHJvcHMuY29tcGlsZXJ9IGFuZCB7cHJvcHMuZnJhbWV3b3JrfTwvaDE+XHJcbiAgICApO1xyXG59OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5pbXBvcnQgeyBIZWxsbyB9IGZyb20gXCIuL0xheW91dHMvQXBwXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEhlbGxvXHJcbiAgICAgICAgICAgIGNvbXBpbGVyPVwiWW91dHViZVwiXHJcbiAgICAgICAgICAgIGZyYW1ld29yaz1cIkdvb2dsZVwiXHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn07XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8QXBwLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcclxuKTsiXSwic291cmNlUm9vdCI6IiJ9