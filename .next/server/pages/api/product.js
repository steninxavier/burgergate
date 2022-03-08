"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/product";
exports.ids = ["pages/api/product"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./lib/mongo.js":
/*!**********************!*\
  !*** ./lib/mongo.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URL = process.env.MONGO_URL;\nif (!MONGO_URL) {\n    throw new Error('Please define the MONGO_URL environment variable inside .env.local');\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URL, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbW9uZ28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLEtBQUssQ0FBQ0MsU0FBUyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUztBQUV2QyxFQUFFLEdBQUdBLFNBQVMsRUFBRSxDQUFDO0lBQ2YsS0FBSyxDQUFDLEdBQUcsQ0FBQ0csS0FBSyxDQUNiLENBQW9FO0FBRXhFLENBQUM7QUFDRCxHQUFHLENBQUNDLE1BQU0sR0FBR0MsTUFBTSxDQUFDTixRQUFRO0FBRTVCLEVBQUUsR0FBR0ssTUFBTSxFQUFFLENBQUM7SUFDWkEsTUFBTSxHQUFHQyxNQUFNLENBQUNOLFFBQVEsR0FBRyxDQUFDO1FBQUNPLElBQUksRUFBRSxJQUFJO1FBQUVDLE9BQU8sRUFBRSxJQUFJO0lBQUMsQ0FBQztBQUMxRCxDQUFDO2VBRWNDLFNBQVMsR0FBRyxDQUFDO0lBQzFCLEVBQUUsRUFBRUosTUFBTSxDQUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNoQixNQUFNLENBQUNGLE1BQU0sQ0FBQ0UsSUFBSTtJQUNwQixDQUFDO0lBRUQsRUFBRSxHQUFHRixNQUFNLENBQUNHLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLEtBQUssQ0FBQ0UsSUFBSSxHQUFHLENBQUM7WUFDWkMsY0FBYyxFQUFFLEtBQUs7UUFDdkIsQ0FBQztRQUVETixNQUFNLENBQUNHLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLFNBQVMsRUFBRVMsSUFBSSxFQUFFRyxJQUFJLEVBQUViLFFBQVEsR0FBSyxDQUFDO1lBQ3JFLE1BQU0sQ0FBQ0EsUUFBUTtRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUNESyxNQUFNLENBQUNFLElBQUksR0FBRyxLQUFLLENBQUNGLE1BQU0sQ0FBQ0csT0FBTztJQUNsQyxNQUFNLENBQUNILE1BQU0sQ0FBQ0UsSUFBSTtBQUNwQixDQUFDO0FBRUQsaUVBQWVFLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNwcm9qZWN0Ly4vbGliL21vbmdvLmpzPzU0MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgTU9OR09fVVJMID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMXHJcblxyXG5pZiAoIU1PTkdPX1VSTCkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcclxuICAgICdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT19VUkwgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXHJcbiAgKVxyXG59XHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2VcclxuXHJcbmlmICghY2FjaGVkKSB7XHJcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xyXG4gIGlmIChjYWNoZWQuY29ubikge1xyXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uXHJcbiAgfVxyXG5cclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICB9XHJcblxyXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPX1VSTCwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcclxuICAgICAgcmV0dXJuIG1vbmdvb3NlXHJcbiAgICB9KVxyXG4gIH1cclxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlXHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdCJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/mongo.js\n");

/***/ }),

/***/ "./models/product.js":
/*!***************************!*\
  !*** ./models/product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true,\n        maxlength: 60\n    },\n    desc: {\n        type: String,\n        required: true,\n        maxlength: 200\n    },\n    img: {\n        type: String,\n        required: true\n    },\n    prices: {\n        type: [\n            Number\n        ],\n        required: true\n    },\n    extraOptions: {\n        type: [\n            {\n                text: {\n                    type: String,\n                    required: true\n                },\n                price: {\n                    type: Number,\n                    required: true\n                }\n            }, \n        ]\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"product\", productSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvcHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFDL0IsS0FBSyxDQUFDQyxhQUFhLEdBQUcsR0FBRyxDQUFDRCx3REFBZSxDQUFDLENBQUM7SUFDdkNHLEtBQUssRUFBQyxDQUFDO1FBQ0hDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxTQUFTLEVBQUMsRUFBRTtJQUNoQixDQUFDO0lBQ0RDLElBQUksRUFBQyxDQUFDO1FBQ0ZKLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxTQUFTLEVBQUMsR0FBRztJQUNqQixDQUFDO0lBQ0VFLEdBQUcsRUFBQyxDQUFDO1FBQ0pMLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNsQixDQUFDO0lBQ0FJLE1BQU0sRUFBQyxDQUFDO1FBQ0pOLElBQUksRUFBQyxDQUFDTztZQUFBQSxNQUFNO1FBQUEsQ0FBQztRQUNiTCxRQUFRLEVBQUUsSUFBSTtJQUNsQixDQUFDO0lBQ0RNLFlBQVksRUFBQyxDQUFDO1FBQ1ZSLElBQUksRUFBQyxDQUFDO1lBQ0YsQ0FBQztnQkFDR1MsSUFBSSxFQUFDLENBQUNUO29CQUFBQSxJQUFJLEVBQUNDLE1BQU07b0JBQUVDLFFBQVEsRUFBQyxJQUFJO2dCQUFBLENBQUM7Z0JBQ2pDUSxLQUFLLEVBQUUsQ0FBQztvQkFBQ1YsSUFBSSxFQUFFTyxNQUFNO29CQUFFTCxRQUFRLEVBQUUsSUFBSTtnQkFBQSxDQUFDO1lBQzFDLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztBQUNOLENBQUMsRUFBQyxDQUFDUztJQUFBQSxVQUFVLEVBQUMsSUFBSTtBQUFBLENBQUM7QUFDbkIsaUVBQWVmLGdFQUF1QixJQUFHQSxxREFBYyxDQUFDLENBQVMsVUFBQ0MsYUFBYSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNwcm9qZWN0Ly4vbW9kZWxzL3Byb2R1Y3QuanM/MDczYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHRpdGxlOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWF4bGVuZ3RoOjYwLFxyXG4gICAgfSxcclxuICAgIGRlc2M6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6MjAwLFxyXG4gICAgfSxcclxuICAgICAgIGltZzp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgICBwcmljZXM6e1xyXG4gICAgICAgICB0eXBlOltOdW1iZXJdLFxyXG4gICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgIH0sXHJcbiAgICAgZXh0cmFPcHRpb25zOntcclxuICAgICAgICAgdHlwZTpbXHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgdGV4dDp7dHlwZTpTdHJpbmcsIHJlcXVpcmVkOnRydWV9LFxyXG4gICAgICAgICAgICAgICAgIHByaWNlIDp7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWV9XHJcbiAgICAgICAgICAgICB9LFxyXG4gICAgICAgICBdLFxyXG4gICAgIH0sXHJcbn0se3RpbWVzdGFtcHM6dHJ1ZX0pO1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMucHJvZHVjdHx8IG1vbmdvb3NlLm1vZGVsKFwicHJvZHVjdFwiLHByb2R1Y3RTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJwcm9kdWN0U2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhsZW5ndGgiLCJkZXNjIiwiaW1nIiwicHJpY2VzIiwiTnVtYmVyIiwiZXh0cmFPcHRpb25zIiwidGV4dCIsInByaWNlIiwidGltZXN0YW1wcyIsIm1vZGVscyIsInByb2R1Y3QiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/product.js\n");

/***/ }),

/***/ "./pages/api/product/index.js":
/*!************************************!*\
  !*** ./pages/api/product/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongo */ \"./lib/mongo.js\");\n/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/product */ \"./models/product.js\");\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    (0,_lib_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const allproducts = await _models_product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(allproducts);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const products = await _models_product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(products);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDMEM7QUFDRztBQUM5QixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDN0MsS0FBa0IsQ0FBYixDQUFDQyxDQUFBQSxNQUFNLEdBQUMsR0FBQ0YsR0FBRztJQUNqQkgsc0RBQVM7SUFFVCxFQUFFLEVBQUVLLE1BQU0sS0FBSSxDQUFLLE1BQUMsQ0FBQztRQUNsQixHQUFHLEVBQUM7WUFDSixLQUFLLENBQUNDLFdBQVcsR0FBRyxLQUFLLENBQUNMLDREQUFZO1lBQ3RDRyxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0gsV0FBVztRQUNoQyxDQUFDLENBQ0QsS0FBSyxFQUFDSSxHQUFHLEVBQUMsQ0FBQztZQUNUTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0MsR0FBRztRQUMxQixDQUFDO0lBQ0osQ0FBQztJQUNELEVBQUUsRUFBQ0wsTUFBTSxLQUFHLENBQU0sT0FBQyxDQUFDO1FBQ2xCLEdBQUcsRUFBQztZQUNILEtBQUssQ0FBQ00sUUFBUSxHQUFHLEtBQUssQ0FBQ1YsOERBQWMsQ0FBQ0UsR0FBRyxDQUFDVSxJQUFJO1lBQzlDVCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0UsUUFBUTtRQUM5QixDQUFDLE1BQUssRUFBQ0QsR0FBRyxFQUFDLENBQUM7WUFDVk4sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNDLEdBQUc7UUFFMUIsQ0FBQztJQUNILENBQUM7QUFFSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzcHJvamVjdC8uL3BhZ2VzL2FwaS9wcm9kdWN0L2luZGV4LmpzP2VjZmIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSAnLi4vLi4vLi4vbGliL21vbmdvJ1xyXG5pbXBvcnQgcHJvZHVjdCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcHJvZHVjdCdcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3R7bWV0aG9kfT1yZXE7XHJcbiAgICBkYkNvbm5lY3QoKVxyXG5cclxuICAgIGlmIChtZXRob2QgPT09XCJHRVRcIil7XHJcbiAgICAgICB0cnl7XHJcbiAgICAgICBjb25zdCBhbGxwcm9kdWN0cyA9IGF3YWl0IHByb2R1Y3QuZmluZCgpO1xyXG4gICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYWxscHJvZHVjdHMpXHJcbiAgICAgICB9XHJcbiAgICAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYobWV0aG9kPT09XCJQT1NUXCIpe1xyXG4gICAgICB0cnl7XHJcbiAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHByb2R1Y3QuY3JlYXRlKHJlcS5ib2R5KTtcclxuICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHByb2R1Y3RzKTtcclxuICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG4gICJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJwcm9kdWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImFsbHByb2R1Y3RzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJwcm9kdWN0cyIsImNyZWF0ZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/product/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/product/index.js"));
module.exports = __webpack_exports__;

})();