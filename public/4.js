(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormAlert.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormAlert.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: ['message', 'danger'],
  mounted: function mounted() {
    console.log('FormAlert mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/AuthinWrapper.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/AuthinWrapper.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FormAlert_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/FormAlert.vue */ "./resources/js/components/FormAlert.vue");
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
      user: {},
      error: {
        auth: {
          "status": false,
          "message": "",
          "type": true
        }
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      //console.log("mounting authin");
      //console.log((!(this.$store.getters.get_auth).status));
      if (_this.$store.getters.get_auth.status) {
        _this.$router.push({
          path: '/'
        });
      }
    }); //console.log('Authin_Wrapper mounted.');

    this.user.remember = false;
  },
  methods: {
    authuser: function authuser() {
      var _this2 = this;

      var uri = '/api/authin';
      this.axios.post(uri, this.user).then(function (response) {
        console.log(response);

        if (response.status === 200) {
          _this2.$store.dispatch("update_token", String(response.data.success.token));

          _this2.$store.dispatch("update_auth_user", Object(response.data.user));

          _this2.$cookie.set("authentication_token", response.data.success.token);

          _this2.$cookie.set("auth_user", JSON.stringify(response.data.user)); //console.log(this.$store.getters.get_token);
          //console.log(response.data.user);
          //console.log(this.$store.getters.get_auth_user);


          _this2.$router.push({
            path: '/'
          });
        } else {
          for (var property in response.data) {
            _this2.error[property].type = typeof response.data[property] != "undefined" ? true : false;
            _this2.error[property].status = typeof response.data[property] != "undefined" ? true : false;
            _this2.error[property].message = typeof response.data[property] != "undefined" ? response.data[property] : '';
          }
        }
      });
    },
    check: function check() {
      if (this.user.remember) {
        this.user.remember = false;
      } else {
        this.user.remember = true;
      }
    }
  },
  components: {
    'form-alert': _components_FormAlert_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormAlert.vue?vue&type=template&id=054b55c6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormAlert.vue?vue&type=template&id=054b55c6& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("span", [
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "alert mg-b-0",
        class: _vm.danger ? "alert-solid-danger" : "alert-solid-success",
        attrs: { role: "alert" }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("strong", [_vm._v("(:BOT:)")]),
        _vm._v(" " + _vm._s(_vm.message) + "\n")
      ]
    ),
    _vm._v(" "),
    _c("br")
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/AuthinWrapper.vue?vue&type=template&id=447101ef&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/AuthinWrapper.vue?vue&type=template&id=447101ef& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "az-signin-wrapper" }, [
    _c("div", { staticClass: "az-card-signin" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "az-signin-header" },
        [
          _c("h2", [_vm._v("Welcome back!")]),
          _vm._v(" "),
          _c("h4", [_vm._v("Please sign in to continue")]),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.authuser($event)
                }
              }
            },
            [
              _c("input", {
                attrs: { type: "hidden", name: "_token" },
                domProps: { value: _vm.csrf }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Username")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.username,
                      expression: "user.username"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "Enter your username",
                    value: "",
                    required: ""
                  },
                  domProps: { value: _vm.user.username },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "username", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Password")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.password,
                      expression: "user.password"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    placeholder: "Enter your password",
                    value: "",
                    required: ""
                  },
                  domProps: { value: _vm.user.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "password", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "ckbox" }, [
                _c("input", {
                  attrs: { type: "checkbox" },
                  on: {
                    change: function($event) {
                      return _vm.check()
                    }
                  }
                }),
                _c("span", [_vm._v("Remember me")])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "btn btn-az-primary btn-block" }, [
                _vm._v("Sign In")
              ])
            ]
          ),
          _vm._v(" "),
          _vm.error.auth.status
            ? _c("form-alert", {
                attrs: {
                  message: _vm.error.auth.message,
                  danger: _vm.error.auth.type
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "az-signin-footer" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "p",
          [
            _vm._v("Don't have an account? "),
            _c("router-link", { attrs: { to: "/auth-up" } }, [
              _vm._v("Create an Account")
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "az-logo" }, [
      _c("span", [_vm._v("#")]),
      _vm._v("a"),
      _c("span", [_vm._v("rti")]),
      _vm._v("cles")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("a", { attrs: { href: "" } }, [_vm._v("Forgot password?")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FormAlert.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/FormAlert.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormAlert_vue_vue_type_template_id_054b55c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormAlert.vue?vue&type=template&id=054b55c6& */ "./resources/js/components/FormAlert.vue?vue&type=template&id=054b55c6&");
/* harmony import */ var _FormAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormAlert.vue?vue&type=script&lang=js& */ "./resources/js/components/FormAlert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormAlert_vue_vue_type_template_id_054b55c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormAlert_vue_vue_type_template_id_054b55c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FormAlert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FormAlert.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/FormAlert.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FormAlert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormAlert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FormAlert.vue?vue&type=template&id=054b55c6&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/FormAlert.vue?vue&type=template&id=054b55c6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlert_vue_vue_type_template_id_054b55c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormAlert.vue?vue&type=template&id=054b55c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormAlert.vue?vue&type=template&id=054b55c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlert_vue_vue_type_template_id_054b55c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlert_vue_vue_type_template_id_054b55c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/interfaces/AuthinWrapper.vue":
/*!***************************************************!*\
  !*** ./resources/js/interfaces/AuthinWrapper.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthinWrapper_vue_vue_type_template_id_447101ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthinWrapper.vue?vue&type=template&id=447101ef& */ "./resources/js/interfaces/AuthinWrapper.vue?vue&type=template&id=447101ef&");
/* harmony import */ var _AuthinWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthinWrapper.vue?vue&type=script&lang=js& */ "./resources/js/interfaces/AuthinWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthinWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthinWrapper_vue_vue_type_template_id_447101ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthinWrapper_vue_vue_type_template_id_447101ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/interfaces/AuthinWrapper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/interfaces/AuthinWrapper.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/interfaces/AuthinWrapper.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthinWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthinWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/AuthinWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthinWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/interfaces/AuthinWrapper.vue?vue&type=template&id=447101ef&":
/*!**********************************************************************************!*\
  !*** ./resources/js/interfaces/AuthinWrapper.vue?vue&type=template&id=447101ef& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthinWrapper_vue_vue_type_template_id_447101ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthinWrapper.vue?vue&type=template&id=447101ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/AuthinWrapper.vue?vue&type=template&id=447101ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthinWrapper_vue_vue_type_template_id_447101ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthinWrapper_vue_vue_type_template_id_447101ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);