(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NavigationBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/NavigationBar.vue */ "./resources/js/components/NavigationBar.vue");
/* harmony import */ var _components_CardContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CardContainer */ "./resources/js/components/CardContainer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      nav_ixd: Math.random(),
      user: {},
      articles: [],
      loadmore: false,
      next_uri: '',
      article_tab: {
        status: true
      },
      followers_tab: {
        status: false
      },
      active: 'nav-link active',
      not_active: 'nav-link'
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.user.username = _this.$route.params.username;
      var uri = '/api/view_profile';
      var xhr = _this.$store.getters.get_headers;
      console.log(_this.user.username);
      var urlencoded = new URLSearchParams();
      urlencoded.append("username", _this.user.username);
      var data = urlencoded;

      _this.axios.post(uri, data, xhr).then(function (response) {
        console.log(response);
        _this.user = response.data;
      });

      uri = '/api/articles';
      var urlencoded = new URLSearchParams();
      urlencoded.append("user_id", _this.user.id);
      var data = urlencoded;

      _this.axios.get(uri, data).then(function (response) {
        console.log(response);

        if (response.data.current_page < response.data.last_page) {
          _this.loadmore = true;
          _this.next_uri = response.data.next_page_url;
        }

        response.data.data.forEach(function (element) {
          _this.articles.push(element);
        });
        console.log(_this.articles);

        _this.scroll();
      });
    });
  },
  components: {
    'nav-bar': _components_NavigationBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'card-container': _components_CardContainer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    scroll: function scroll() {
      var _this2 = this;

      console.log("scroll is in action");

      window.onscroll = function () {
        var bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          console.log("scroll is in action again");

          if (_this2.loadmore && _this2.article_tab.status) {
            var urlencoded = new URLSearchParams();
            urlencoded.append("user_id", _this2.user.id);
            var data = urlencoded;
            var uri = _this2.next_uri;

            _this2.axios.get(uri, data).then(function (response) {
              //console.log(response);
              if (response.data.current_page < response.data.last_page) {
                _this2.loadmore = true;
                _this2.next_uri = response.data.next_page_url;
                _this2.corousal_ixd++;
              } else {
                _this2.loadmore = false;
                _this2.corousal_ixd++;
              }

              response.data.data.forEach(function (element) {
                _this2.articles.push(element);
              });
              console.log(_this2.articles);
            });
          }
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active, .fade-leave-active {\n  transition: opacity .5s\n}\n.fade-enter, .fade-leave-active {\n  opacity: 0\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Index.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Index.vue?vue&type=template&id=3aca4497&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Index.vue?vue&type=template&id=3aca4497& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("nav-bar", { key: _vm.nav_ixd }),
      _vm._v(" "),
      _c("div", { staticClass: "az-content az-content-profile" }, [
        _c("div", { staticClass: "container mn-ht-100p" }, [
          _c(
            "div",
            { staticClass: "az-content-left az-content-left-profile" },
            [
              _c("div", { staticClass: "az-profile-overview" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-between mg-b-20" },
                  [
                    _c("div", [
                      _c("h5", { staticClass: "az-profile-name" }, [
                        _vm._v(_vm._s(this.user.name))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "az-profile-name-text" }, [
                        _vm._v("@" + _vm._s(this.user.username))
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(1)
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "az-profile-bio" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(
                        _vm.user.bio
                          ? _vm.user.bio
                          : "Seriously, I don't know about myself..."
                      ) +
                      " "
                  ),
                  _c("a", { attrs: { href: "" } }, [_vm._v("More")])
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "mg-y-30" }),
                _vm._v(" "),
                _c("label", { staticClass: "az-content-label tx-13 mg-b-20" }, [
                  _vm._v("Websites & Social Channel")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "az-profile-social-list" },
                  _vm._l(_vm.user.links, function(link) {
                    return link.category == "WEBSITES & SOCIAL CHANNEL"
                      ? _c("div", { key: link.id, staticClass: "media" }, [
                          _c("div", { staticClass: "media-icon" }, [
                            _c("i", { class: link.icon })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body" }, [
                            _c("span", [_vm._v(_vm._s(link.name))]),
                            _vm._v(" "),
                            _c("a", { attrs: { href: "" } }, [
                              _vm._v(_vm._s(link.value))
                            ])
                          ])
                        ])
                      : _vm._e()
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "az-content-label tx-13 mg-t-25 mg-b-25" },
                  [_vm._v("Contact Information")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "az-profile-contact-list" },
                  _vm._l(_vm.user.links, function(link) {
                    return link.category == "CONTACT INFORMATION"
                      ? _c("div", { key: link.id, staticClass: "media" }, [
                          _c("div", { staticClass: "media-icon" }, [
                            _c("i", { class: link.icon })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body" }, [
                            _c("span", [_vm._v(_vm._s(link.name))]),
                            _vm._v(" "),
                            _c("div", [_vm._v(_vm._s(link.value))])
                          ])
                        ])
                      : _vm._e()
                  }),
                  0
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "az-content-body az-content-body-profile" },
            [
              _c("nav", { staticClass: "nav az-nav-line" }, [
                _c(
                  "a",
                  {
                    class: _vm.article_tab.status ? _vm.active : _vm.not_active,
                    attrs: { href: "", "data-toggle": "tab" },
                    on: {
                      click: function($event) {
                        _vm.followers_tab.status = false
                        _vm.article_tab.status = true
                      }
                    }
                  },
                  [_vm._v("Articles")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    class: _vm.followers_tab.status
                      ? _vm.active
                      : _vm.not_active,
                    attrs: { href: "", "data-toggle": "tab" },
                    on: {
                      click: function($event) {
                        _vm.followers_tab.status = true
                        _vm.article_tab.status = false
                      }
                    }
                  },
                  [_vm._v("Followers")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: { href: "", "data-toggle": "tab" }
                  },
                  [_vm._v("Following")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: { href: "", "data-toggle": "tab" }
                  },
                  [_vm._v("Recent Likes")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: { href: "", "data-toggle": "tab" }
                  },
                  [_vm._v("About")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "az-profile-body" }, [
                _c(
                  "div",
                  { staticClass: "row mg-b-20" },
                  [
                    _vm.article_tab.status
                      ? _c("card-container", {
                          attrs: { cardlist: _vm.articles, id: "articles" }
                        })
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "mg-b-20" })
              ])
            ]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "az-img-user" }, [
      _c("img", {
        attrs: { src: "https://via.placeholder.com/500x500", alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn-icon-list" }, [
      _c("button", { staticClass: "btn btn-indigo btn-icon" }, [
        _c("i", { staticClass: "fa fa-plus fa-2x" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/user/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/user/Index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3aca4497___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3aca4497& */ "./resources/js/pages/user/Index.vue?vue&type=template&id=3aca4497&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/user/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3aca4497___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3aca4497___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/user/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/Index.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/user/Index.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/user/Index.vue?vue&type=template&id=3aca4497&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/user/Index.vue?vue&type=template&id=3aca4497& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3aca4497___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3aca4497& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Index.vue?vue&type=template&id=3aca4497&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3aca4497___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3aca4497___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);