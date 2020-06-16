(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HeaderProfile.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HeaderProfile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      user: {}
    };
  },
  mounted: function mounted() {
    this.user = this.$store.getters.get_auth_user; //console.log("Header Profile MOUNTED");
    //console.log(this.user);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavigationBar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavigationBar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderProfile_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderProfile.vue */ "./resources/js/components/HeaderProfile.vue");
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
      auth: false,
      notLogin: true,
      authin: '1',
      authup: '2',
      header_profile: '3'
    };
  },
  props: ['article_state'],
  components: {
    'header-profile': _HeaderProfile_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    logout: function logout() {
      this.$cookie["delete"]("authentication_token");
      if (this.$route.path !== '/@articles') this.$router.push('/@articles');
      this.$store.dispatch("reset_token", Boolean(true));
      this.notLogin = true;
      this.auth = false;
      this.authin = Math.random();
      this.authup = Math.random();
      this.header_profile = Math.random();
    },
    create_article: function create_article() {
      var _this = this;

      var uri = "/api/init_article";
      var data = {
        client_xid: Math.random()
      };
      var xhr = this.$store.getters.get_headers;
      this.axios.post(uri, data, xhr).then(function (response) {
        console.log(response);
        var path = '/u/@' + _this.$store.getters.get_auth_user.username + '/' + response.data.xid;

        _this.$router.push({
          path: path
        });
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      //console.log("mounting navigation");
      //console.log((!(this.$store.getters.get_auth).status));
      if (_this2.$store.getters.get_auth.status) {
        //console.log("notLogin on mounting of navigation bar");
        //console.log(this.notLogin);
        _this2.notLogin = false; //console.log("notLogin after change of navigation bar");
        //console.log(this.notLogin);
      }

      _this2.auth = _this2.$store.getters.get_auth.status;
      console.log('Navigation NEXTTICK CALLED');
    }); //console.log('NavBar.vue mounted.');
    //console.log(this.$store.getters.get_auth.status);

    $(function () {
      'use strict'; // This template is mobile first so active menu in navbar
      // has submenu displayed by default but not in desktop
      // so the code below will hide the active menu if it's in desktop

      if (window.matchMedia('(min-width: 992px)').matches) {
        $('.az-navbar .active').removeClass('show');
      } // Shows header dropdown while hiding others


      $('.az-header .dropdown > a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('show');
        $(this).parent().siblings().removeClass('show');
      }); // Showing submenu in navbar while hiding previous open submenu

      $('.az-navbar .with-sub').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('show');
        $(this).parent().siblings().removeClass('show');
      }); // this will hide dropdown menu from open in mobile

      $('.dropdown-menu .az-header-arrow').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.dropdown').removeClass('show');
      }); // this will show navbar in left for mobile only

      $('#azNavShow, #azNavbarShow').on('click', function (e) {
        e.preventDefault();
        $('body').addClass('az-navbar-show');
      }); // this will hide currently open content of page
      // only works for mobile

      $('#azContentLeftShow').on('click touch', function (e) {
        e.preventDefault();
        $('body').addClass('az-content-left-show');
      }); // This will hide left content from showing up in mobile only

      $('#azContentLeftHide').on('click touch', function (e) {
        e.preventDefault();
        $('body').removeClass('az-content-left-show');
      }); // this will hide content body from showing up in mobile only

      $('#azContentBodyHide').on('click touch', function (e) {
        e.preventDefault();
        $('body').removeClass('az-content-body-show');
      }); // navbar backdrop for mobile only

      $('body').append('<div class="az-navbar-backdrop"></div>');
      $('.az-navbar-backdrop').on('click touchstart', function () {
        $('body').removeClass('az-navbar-show');
      }); // Close dropdown menu of header menu

      $(document).on('click touchstart', function (e) {
        e.stopPropagation(); // closing of dropdown menu in header when clicking outside of it

        var dropTarg = $(e.target).closest('.az-header .dropdown').length;

        if (!dropTarg) {
          $('.az-header .dropdown').removeClass('show');
        } // closing nav sub menu of header when clicking outside of it


        if (window.matchMedia('(min-width: 992px)').matches) {
          var navTarg = $(e.target).closest('.az-navbar .nav-item').length;

          if (!navTarg) {
            $('.az-navbar .nav-item').removeClass('show');
          }
        }
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HeaderProfile.vue?vue&type=template&id=206577fe&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HeaderProfile.vue?vue&type=template&id=206577fe& ***!
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
  return _c("div", { staticClass: "az-header-profile" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("h6", [_vm._v(_vm._s(_vm.user.name))]),
    _vm._v(" "),
    _c("span", [_vm._v(_vm._s(_vm.user.username))])
  ])
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavigationBar.vue?vue&type=template&id=30e7b4f8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavigationBar.vue?vue&type=template&id=30e7b4f8& ***!
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
  return _c("div", { staticClass: "az-header" }, [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "az-header-left" },
        [
          _c(
            "router-link",
            { staticClass: "az-logo", attrs: { to: "/@articles" } },
            [_vm._v("a"), _c("span", [_vm._v("rti")]), _vm._v("cles")]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm.article_state !== null
            ? _c("span", { staticClass: "mt-2 ml-5 pr-5" }, [
                _vm._v(_vm._s(_vm.article_state))
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "az-header-right" }, [
        _c("div", { staticClass: "dropdown az-profile-menu" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "dropdown-menu" },
            [
              _vm._m(3),
              _vm._v(" "),
              _vm.auth
                ? _c("header-profile", { key: _vm.header_profile })
                : _vm._e(),
              _vm._v(" "),
              !_vm.notLogin
                ? _c(
                    "button",
                    {
                      staticClass: "dropdown-item",
                      on: {
                        click: function($event) {
                          return _vm.create_article()
                        }
                      }
                    },
                    [_vm._v("Create Article")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.notLogin
                ? _c(
                    "router-link",
                    {
                      key: _vm.authin,
                      staticClass: "dropdown-item",
                      attrs: { to: "/auth-in" }
                    },
                    [
                      _c("i", { staticClass: "fas fa-lock-open" }),
                      _vm._v(" Login")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.notLogin
                ? _c(
                    "router-link",
                    {
                      key: _vm.authup,
                      staticClass: "dropdown-item",
                      attrs: { to: "/auth-up" }
                    },
                    [
                      _c("i", { staticClass: "fas fa-user" }),
                      _vm._v(" Register")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.notLogin
                ? _c(
                    "button",
                    {
                      staticClass: "dropdown-item",
                      on: {
                        click: function($event) {
                          return _vm.logout()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fas fa-power" }),
                      _vm._v(" Sign Out")
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "az-header-menu-icon d-lg-none",
        attrs: { href: "", id: "azNavShow" }
      },
      [_c("span")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "az-navbar az-navbar-three" }, [
      _c("div"),
      _vm._v(" "),
      _c("ul", { staticClass: "nav" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "az-img-user", attrs: { href: "" } }, [
      _c("img", {
        attrs: { src: "https://via.placeholder.com/500x500", alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "az-dropdown-header d-sm-none" }, [
      _c("a", { staticClass: "az-header-arrow", attrs: { href: "" } }, [
        _c("i", { staticClass: "icon ion-md-arrow-back" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/HeaderProfile.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/HeaderProfile.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderProfile_vue_vue_type_template_id_206577fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderProfile.vue?vue&type=template&id=206577fe& */ "./resources/js/components/HeaderProfile.vue?vue&type=template&id=206577fe&");
/* harmony import */ var _HeaderProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/HeaderProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeaderProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderProfile_vue_vue_type_template_id_206577fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderProfile_vue_vue_type_template_id_206577fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HeaderProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/HeaderProfile.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/HeaderProfile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HeaderProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/HeaderProfile.vue?vue&type=template&id=206577fe&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/HeaderProfile.vue?vue&type=template&id=206577fe& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderProfile_vue_vue_type_template_id_206577fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderProfile.vue?vue&type=template&id=206577fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HeaderProfile.vue?vue&type=template&id=206577fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderProfile_vue_vue_type_template_id_206577fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderProfile_vue_vue_type_template_id_206577fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/NavigationBar.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/NavigationBar.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationBar_vue_vue_type_template_id_30e7b4f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationBar.vue?vue&type=template&id=30e7b4f8& */ "./resources/js/components/NavigationBar.vue?vue&type=template&id=30e7b4f8&");
/* harmony import */ var _NavigationBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationBar.vue?vue&type=script&lang=js& */ "./resources/js/components/NavigationBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationBar_vue_vue_type_template_id_30e7b4f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationBar_vue_vue_type_template_id_30e7b4f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NavigationBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NavigationBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/NavigationBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavigationBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NavigationBar.vue?vue&type=template&id=30e7b4f8&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/NavigationBar.vue?vue&type=template&id=30e7b4f8& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationBar_vue_vue_type_template_id_30e7b4f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationBar.vue?vue&type=template&id=30e7b4f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavigationBar.vue?vue&type=template&id=30e7b4f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationBar_vue_vue_type_template_id_30e7b4f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationBar_vue_vue_type_template_id_30e7b4f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);