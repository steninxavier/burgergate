"use strict";
(() => {
var exports = {};
exports.id = 21;
exports.ids = [21];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8974);
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7083);


async function handler(req, res) {
    const { method , query: { id  }  } = req;
    (0,_lib_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    if (method === "GET") {
        try {
            const productl = await _models_product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(id);
            res.status(200).json(productl);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "PUT") {
        try {
            const products = await _models_product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create(req.body);
            res.status(201).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "DELETE") {
        try {
            const products = await _models_product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create(req.body);
            res.status(201).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [995], () => (__webpack_exec__(8093)));
module.exports = __webpack_exports__;

})();