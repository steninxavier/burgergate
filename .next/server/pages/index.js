(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9923:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Featured_container__djdhp",
	"arrowContainer": "Featured_arrowContainer__eRP7q",
	"wrapper": "Featured_wrapper__Up3ZO",
	"imgContainer": "Featured_imgContainer__bP_Gp"
};


/***/ }),

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 4578:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Productcard_container__WXffj",
	"title": "Productcard_title__kBaVd",
	"price": "Productcard_price__snFZq",
	"desc": "Productcard_desc__K43e0"
};


/***/ }),

/***/ 6074:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Productlist_container__OJ7Pt",
	"desc": "Productlist_desc__uHjKh",
	"wrapper": "Productlist_wrapper__ZliGp",
	"title": "Productlist_title__CDMNX"
};


/***/ }),

/***/ 8916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./component/Footer.jsx
var Footer = __webpack_require__(705);
// EXTERNAL MODULE: ./component/Navbar.jsx
var Navbar = __webpack_require__(504);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Featured.module.css
var Featured_module = __webpack_require__(9923);
var Featured_module_default = /*#__PURE__*/__webpack_require__.n(Featured_module);
;// CONCATENATED MODULE: ./component/Featured.jsx





const Featured = ()=>{
    const { 0: index , 1: setIndex  } = (0,external_react_.useState)(0);
    const images = [
        "/Images/burger1.png",
        "/Images/burger2.png",
        "/Images/burger1.png"
    ];
    const handleArrow = (direction)=>{
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    };
    console.log("featured");
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Featured_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Featured_module_default()).arrowContainer,
                style: {
                    left: 0
                },
                onClick: ()=>handleArrow("l")
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/Images/arrow1.png",
                    alt: "",
                    layout: "fill",
                    objectFit: "contain"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Featured_module_default()).wrapper,
                style: {
                    transform: `translateX(${-100 * index}vw)`
                },
                children: images.map((img, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Featured_module_default()).imgContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: img,
                            alt: "",
                            layout: "fill",
                            objectFit: "contain"
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Featured_module_default()).arrowContainer,
                style: {
                    right: 0
                },
                onClick: ()=>handleArrow("r")
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/Images/arrow2.png",
                    layout: "fill",
                    alt: "",
                    objectFit: "contain"
                })
            })
        ]
    }));
};
/* harmony default export */ const component_Featured = (Featured);

// EXTERNAL MODULE: ./styles/Productlist.module.css
var Productlist_module = __webpack_require__(6074);
var Productlist_module_default = /*#__PURE__*/__webpack_require__.n(Productlist_module);
// EXTERNAL MODULE: ./styles/Productcard.module.css
var Productcard_module = __webpack_require__(4578);
var Productcard_module_default = /*#__PURE__*/__webpack_require__.n(Productcard_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./component/Productcard.jsx





const Productcard = ({ product  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Productcard_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/product/${product._id}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: product.img,
                    alt: "",
                    width: "500",
                    height: "500"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Productcard_module_default()).title,
                children: product.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: (Productcard_module_default()).price,
                children: [
                    "€",
                    product.prices[0]
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Productcard_module_default()).desc,
                children: product.desc
            })
        ]
    }));
};
/* harmony default export */ const component_Productcard = (Productcard);

;// CONCATENATED MODULE: ./component/Productlist.jsx




const Productlist1 = ({ Productlist  })=>{
    console.log("productlist");
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Productlist_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Productlist_module_default()).title,
                children: "THE BEST BURGER IN TOWN"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Productlist_module_default()).desc,
                children: "Juicy, big, loaded with toppings of your choice.The bun should be slightly crunchy on the outside and soft inside. The cheese should be happily melting over the meat."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Productlist_module_default()).wrapper,
                children: Productlist.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(component_Productcard, {
                        product: product
                    }, product._id)
                )
            })
        ]
    }));
};
/* harmony default export */ const Productlist = (Productlist1);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/index.js









function Home({ Productlistr  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "BurgerGate"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(component_Featured, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Productlist, {
                Productlist: Productlistr
            })
        ]
    }));
};
const getServerSideProps = async ()=>{
    const res = await external_axios_default().get("http://localhost:3000/api/product");
    return {
        props: {
            Productlistr: res.data
        }
    };
};


/***/ }),

/***/ 2749:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ShoppingCartOutlined");

/***/ }),

/***/ 5168:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Badge");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664,644], () => (__webpack_exec__(8916)));
module.exports = __webpack_exports__;

})();