(function () {
  var _templateObject, _templateObject2, _templateObject3;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkclient_mav"] = self["webpackChunkclient_mav"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    37443: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Message": function Message() {
          return (
            /* binding */
            _Message
          );
        },

        /* harmony export */
        "Person": function Person() {
          return (
            /* binding */
            _Person
          );
        },

        /* harmony export */
        "Run": function Run() {
          return (
            /* binding */
            _Run
          );
        },

        /* harmony export */
        "RunFinishedMessage": function RunFinishedMessage() {
          return (
            /* binding */
            _RunFinishedMessage
          );
        },

        /* harmony export */
        "RunStartedMessage": function RunStartedMessage() {
          return (
            /* binding */
            _RunStartedMessage
          );
        },

        /* harmony export */
        "RunStreamController": function RunStreamController() {
          return (
            /* binding */
            _RunStreamController
          );
        },

        /* harmony export */
        "SignupFinishedMessage": function SignupFinishedMessage() {
          return (
            /* binding */
            _SignupFinishedMessage
          );
        },

        /* harmony export */
        "SignupStartedMessage": function SignupStartedMessage() {
          return (
            /* binding */
            _SignupStartedMessage
          );
        },

        /* harmony export */
        "VisualizationsModule": function VisualizationsModule() {
          return (
            /* binding */
            _VisualizationsModule
          );
        },

        /* harmony export */
        "XMacroscopeDataModule": function XMacroscopeDataModule() {
          return (
            /* binding */
            _XMacroscopeDataModule
          );
        },

        /* harmony export */
        "XMacroscopeDataService": function XMacroscopeDataService() {
          return (
            /* binding */
            _XMacroscopeDataService
          );
        },

        /* harmony export */
        "XMacroscopeDataSource": function XMacroscopeDataSource() {
          return (
            /* binding */
            _XMacroscopeDataSource
          );
        },

        /* harmony export */
        "XMacroscopeDataSourceFactory": function XMacroscopeDataSourceFactory() {
          return (
            /* binding */
            _XMacroscopeDataSourceFactory
          );
        },

        /* harmony export */
        "XMacroscopePlugin": function XMacroscopePlugin() {
          return (
            /* binding */
            _XMacroscopePlugin
          );
        },

        /* harmony export */
        "XMacroscopeProject": function XMacroscopeProject() {
          return (
            /* binding */
            _XMacroscopeProject
          );
        },

        /* harmony export */
        "XMacroscopeProjectConfigService": function XMacroscopeProjectConfigService() {
          return (
            /* binding */
            _XMacroscopeProjectConfigService
          );
        },

        /* harmony export */
        "allShapes": function allShapes() {
          return (
            /* binding */
            _allShapes
          );
        },

        /* harmony export */
        "configFactory": function configFactory() {
          return (
            /* binding */
            _configFactory
          );
        },

        /* harmony export */
        "icons": function icons() {
          return (
            /* binding */
            _icons
          );
        },

        /* harmony export */
        "images": function images() {
          return (
            /* binding */
            _images
          );
        },

        /* harmony export */
        "opponents": function opponents() {
          return (
            /* binding */
            _opponents
          );
        },

        /* harmony export */
        "shapes": function shapes() {
          return (
            /* binding */
            _shapes
          );
        },

        /* harmony export */
        "shoes": function shoes() {
          return (
            /* binding */
            _shoes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! tslib */
      52682);
      /* harmony import */


      var _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @dvl-fw/core */
      83345);
      /* harmony import */


      var _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-dino/core */
      75423);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash */
      20345);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! rxjs */
      81092);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! rxjs */
      2239);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! rxjs */
      28158);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! rxjs */
      78899);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! rxjs */
      92216);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! rxjs */
      93428);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! rxjs */
      30759);
      /* harmony import */


      var graphql_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! graphql-tag */
      36387);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      76246);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var apollo_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! apollo-client */
      1686);
      /* harmony import */


      var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! apollo-cache-inmemory */
      24310);
      /* harmony import */


      var apollo_link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! apollo-link */
      88643);
      /* harmony import */


      var apollo_link_error__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! apollo-link-error */
      782);
      /* harmony import */


      var apollo_link_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! apollo-link-http */
      9425);
      /* harmony import */


      var apollo_link_ws__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! apollo-link-ws */
      65823);
      /* harmony import */


      var apollo_utilities__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! apollo-utilities */
      40873);
      /* harmony import */


      var casual_browserify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! casual-browserify */
      82198);
      /* harmony import */


      var casual_browserify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(casual_browserify__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var zipcodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! zipcodes */
      41691);
      /* harmony import */


      var _turf_bbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @turf/bbox */
      70399);
      /* harmony import */


      var _turf_bbox_clip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @turf/bbox-clip */
      65418);
      /* harmony import */


      var _turf_clone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @turf/clone */
      34095);
      /* harmony import */


      var _turf_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @turf/helpers */
      74577);
      /* harmony import */


      var _turf_points_within_polygon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @turf/points-within-polygon */
      89479);
      /* harmony import */


      var maplibre_gl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! maplibre-gl */
      34505);
      /* harmony import */


      var maplibre_gl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(maplibre_gl__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ngx-maplibre-gl */
      60158);
      /* harmony import */


      var d3_shape__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! d3-shape */
      85232);
      /* harmony import */


      var d3_shape__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! d3-shape */
      21225);
      /* harmony import */


      var d3_shape__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! d3-shape */
      8729);
      /* harmony import */


      var d3_shape__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! d3-shape */
      62298);
      /* harmony import */


      var d3_shape__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! d3-shape */
      82507);
      /* harmony import */


      var d3_shape__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! d3-shape */
      54755);
      /* harmony import */


      var d3_shape__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! d3-shape */
      99279);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! rxjs/operators */
      64058);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! rxjs/operators */
      82649);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! rxjs/operators */
      70309);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! rxjs/operators */
      57518);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! rxjs/operators */
      65786);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! rxjs/operators */
      28192);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! rxjs/operators */
      81133);
      /* harmony import */


      var _turf_line_intersect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @turf/line-intersect */
      99255);
      /* harmony import */


      var d3_array__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! d3-array */
      7703);
      /* harmony import */


      var d3_array__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! d3-array */
      76381);
      /* harmony import */


      var dirty_reprojectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! dirty-reprojectors */
      11349);
      /* harmony import */


      var dirty_reprojectors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dirty_reprojectors__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var dirty_reprojectors_projections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! dirty-reprojectors/projections */
      43122);
      /* harmony import */


      var dirty_reprojectors_projections__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dirty_reprojectors_projections__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var topojson_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! topojson-client */
      48939);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _dvl_fw_angular__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @dvl-fw/angular */
      4711);
      /* harmony import */


      var d3_scale__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! d3-scale */
      18163);
      /* harmony import */


      var d3_scale__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! d3-scale */
      12251);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/table */
      90495);

      var unknownGVData = {
        label: 'Unknown',
        color: '#000000',
        shape: 'square'
      };
      var _shapes = ['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'];
      var _allShapes = _shapes;
      var _icons = ['brat', 'cool', 'happy', 'grimace', 'alien', 'laughing', 'crown', 'sleep'];
      var _images = {
        'penguin': 'data:image/gif;base64,R0lGODlhZABkAMZ0AAAAAAEBAQICAgQEBAUFBQcHBwgICAoKCgsLCwwMDA0NDQ8PDxAQEBERERMTExQUFBUVFRYWFhkZGRoaGhsbGxwcHB8fHyAgICEhISIiIiQkJCgoKCkpKSoqKi4uLjIyMjQ0NDU1NTc3Nzg4ODs7Ozw8PD09PUVFRUZGRkxMTE1NTVBQUFhYWFpaWltbW11dXV5eXl9fX2VlZWdnZ2pqamtra21tbW5ubnFxcXNzc3Z2dnh4eHl5eX19fYCAgISEhIaGhoqKiouLi42NjZKSkpOTk5WVlZiYmJmZmZubm5ycnJ2dnaCgoKWlpaioqKurq62tra6urrGxsbS0tLe3t7m5uby8vL29vb6+vsHBwcPDw8jIyNDQ0NfX19jY2NnZ2dvb293d3d7e3t/f3+Dg4Obm5ujo6Onp6erq6uvr6+/v7/Ly8vX19fb29vf39/j4+Pn5+fr6+vz8/P7+/v///////////////////////////////////////////////yH5BAEKAH8ALAAAAABkAGQAAAf+gH+Cg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4uYMAvAC6pL3BvL+fwsbEnMbKyJnKzr7MlM/T0ZHT18PVjNjc2oncwYXH3uLBAxcWBuPkj8IiZnTxaGFobjHs1sFU8fz8axT4HBnb0q/gjoCNjAEp2E8MNISIlElow5BfB4jflPWoGM8GxkPPCnjh+OSjoWkoOHZ5aPLPtSwV5RxouWvaC44gaLq8VoFjCprcGHCU0RJcCY4+inIjwrGISXAW3HBc8hGcgCsc6TTBCA4Aj6x0okDsGiIOWCkIuyb4ApaOk4D+XQEoaUuHCb64IubQPcIuLoAndOkEIec3wJrAOLz5BQAhMB0W2hYDeODYRLVnO50tcHwhGmZBzw4ETsNSlzNC0wgEtuJ5HehnAfS2HcJsWblnZtvCQGb7tjOpbTEQ6+1bGUWwDoe7Rj2NTdslpW0RL24MeNYWysNldFag7RsGv5affBah7ZTotYRte3YU7L3wvRI+owGWTYPs6Mc7WwI2SX5a8cnnzBhgfcDbf/oZkwFYWiA4i4PU9UJfVifolJkxWGSVBYSEKROBHBzNUYKFFwYzQ1ZIkFhiL1Xw45wacJRBBgQqKuNAblp0gcUZOqyhgoorAnADPy504YITK9RmAGSQXCQxRhoGQDGBAhwsuWIIYCTwgxAAkJDNksYYMQIAG2gQIJjCIJCDeCQa4wEBbFpoTACfASnZl0+FI1me8S2m1JenWaldkINaWdM1hh5KTaKMNuroo5BGKumklFZq6aWYthIIADs=',
        'squirrel': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMagDMJlNpcUql0Mj0Sq0usFynNtENA74HsZhsPmvTaijb7H63kfK5sR6O47H6/VT5BsZX8VTDtvVHWEgD15A44WWY55gFWSkzyXBluTnT9fAIaucySBkpmsZ4qnmJ4Lf401n2usojSytr+4hbqsNbp/sb6CssR1w8jINsrLycbOMc6hNdG0s9RnQNC6Tdm9Od+w3e2swbcBhsfo59J7zm3odbVfyuHv/6ZV+/RzarDwjvnp98ePoJ4mdw3cCECxNC8ObQQbWIFCtavIgxo8YRjRw7evwIMqTIkSRLmjzpogAAOw==',
        'cheetah': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvOJAgCgE6n1eqUmsNyulOoNd1Xhj/jMHaHPlbXbCnrLv9v522PP6+edvf8vtgE4SEiHUYj4l5HImKfRCJmGALcYaUliCVmS2WjCmXjySZgiOkhaqhiKmuq56hflugdrGpA5C1gnWyvZSqugZzCm6rbr9SA3yYtJXCxcZZyMNcwWDE1hHU25iZYr3aacrS2y9ussYV6etRyYrn4N3j61jt1t+Oze4K1Wlq9/Dr/Anxl+DAAeE9hP3EB69eS9w3fQHh6CBRFCsOgAIgeEdgkVRsDYMQ4cg+EsaPzo8ZA6kAdYBjyJ0qEgbTDbfUsZU6ZKezVt3tN585FAnC8lRgT6EGlOoz27/ZypNCPAptmeCjXakWixn1GdQtXaDCzYhhepHsVasizaomvDdY25z+zOHy612L2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbRygAADs=',
        'brat': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dInhETrf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSluUrBWPr7ZJsRMzFrW3t6RoFp++qMA1FcPEp6qyJMLKysy6xxSX0MSbzXEUvdfEuR0W3t6rexXW43XJYdnTGLTpbJM36GLg78jxYvMW9XflhLjpY1eNTpkba+4VobBO3yZ/TiZ0+3dhIcKBgCZAzCL+cYzCgBMaxtO4RpVIaRYnYiRzMQuPJopUNvmo4NzKmQD65OoTMlHFRhUQ4TmSSRWTXD1hAdi4ZBW8P0hJRhrVTZpAJTE9/jyQz0/UalNbEmgXNKLMVFvL2iHb6hDVJWwncDzL5OdTO1By7PBRhu6YtxEdwRWL5Z5NPycjyV0SlQ4UpoNldb15dGlliTxzlqyolnJkQJ+ybpZMwbOVjn+Trrlw13RgyARU+cUpxzVM1FY2zaZtyXYTZnOcZNt9u5Dv31/B/olr+fjvg5ghMRfpHJRVhtWjhaCePSwI7t2FhoAdXvr48raYk0e//At7V8mJv68DrvN8TJxL3y+aX/X+fvGkSfUfIu3UdNWAhyhkH4J1pIUdXgKAd8sTiDmImzzcRCghJDxAtyEBH4njBwp69eBWDzokB8Af5Rymjg0wxvhgHQWCRFhCMuaognyMbQWUf2zoKOR3FWrDQGsYDqnkhyD6+COQazCnJAzroeXkkzz2aMMRJj0BY5ZKGWmjZlCRqCFHK2ahgxFuAWQjmFid99tivPGCCE0WNddeb3OmWadye4qZJ5OiIAWRUVY0BqCgECDpRzuH0nmZgAleaQ6gBFIa2BVbVIkFWc5MlmmkflZGKJqMZvCMeaRySuai7oQq6qN6ounqqbEZQ41+hyjSaqKvsujmrjey4WtGpfaheCpSQ7RFY62bAksos1Os+uJGONxapKUtOJsanJKOxq0X/dgR7rdr6VqKnWxAseFj8kTFiIHlopuksYvMS6+1hUHbL3n8AKDvmNG1oSlyxWbx1cB5crOObMnoJklyDF/Ky0aB6JUipkxAN2zFTzoyTMA3jKyiwCB7YMSZau6VipcppEwsiRr3wBcQJ48rMz5TRrHzLj3n+/O6Sg7NsBA7JwAAOw==',
        'cool': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dIngkRLf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSqReFY+vtUlblLIVtrwEsSStvbW/HRafwqequcAVx8jJq3EVl8+8m8vSE7TVvbgAxbvcyNEQFtTi1uQv2oA97jzoou/zTd4Z5k/eMUfOiD5lNrQduTYBQ8CDEwTA88ODIEIZ5R5KVDjGh0SJES9KnNP+xKJGjEU+brw0SeTBkCZTqjxJaKXLl1wYwJz5Up9MCkFo6nyYs2AjCiV33tChT6jCCz8nEHC4k44yoQAMIT0wi8DTpk2Y0kRijyoFQ1dpnltSdCYZpM2SQAXQZq0otBSUlHU5lsnclbSeKgi3VKiYsC+pXaj6VmfdelhvfVmycw3glWRDnLsr8rAVyh/PaY26ZLPIbRW3dpacZWY/K54/MtncB/NDy2Fg9nk8++Whxxo78sm68nSY1Ag/0Uad0rcY1zGOPbYcNCBHTMBVwN4M22p0C89DXZ9VvW8hxwC/UKz1BAWO8YkWM3yHjt6fuaDjySdgj+98+XCV3pev1+v+BOP7vdLfNAGiQ9BeOBUoTlf+saVgNVM1COCDmPSHIDsUdhOhBRn2Eg2BHb5yYEsYhogKgzf9ZyI02KR4w4qhoOgiABOmIk6NpUVI4ouHnIejHfkgIuOONPqDk0I/plKeirep42J8fmjlozvy9ABEWd0dpyNKnEWynQ1Zprcll0l2hJx5Yf7lJEpQ+hPePuhhMqRBICbzJndl/rZmRkzaspCfe+6RFoySBCrooITqZuihcSXaBDHMJOioXIt6YMykkLIQjIlhdXIpp5nOYEmITFWCHYVBMXJhnfdppWpSn8bT3KtEapOnP2XRyiVOt9bR3De68smdLXe2GOw6cvQomgVlx2Yj3p+OLRlTsxzYcN4OVhJ1JrWaCsUtKzN96+lH4uoqBLcJAAA7',
        'happy': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dIngkRLf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSqReFY+vtUlblLIVtrwEsSStvbW/HRafwqequcAVx8jJq3EVl8+8m8vSE7TVvbgAxbvcyNEQFtTi1uQv2ujP3hnG7cjKExiz8u4X5c348+oH9/742CFsoDMx74pMOIjF2w2GkBzO8UNP4Q2KKCD+yej+JyGDaX5UoHIYr861bx/DmVRxLhI9OSH1KQhYh+SHUCdDdJQJkIJGJjFC2SzJpmIjChthCFUas95MCttqqogaKSeIPwlBYkzREtJLR39OPl14aOiEkSkOGVWZFMRPO0PfptLHFqsFqqdyTkR0gaZXAXL/8sA0FG8/bkO7Hq5mdYLixcgaA3gMuZfkwJVBfSWbmdtmAJg7u+QjutpnyqVRSUadGmcI1q0zSTYc+1Th2rze1cV9ii5S3q7W+gSOSrhj4nl9s0MOyuNu5od48oPuVTpU6hGt/8be1unR49ztiCV0PbxUbN9B1xm8GPB6nimXs8EROpQW2lc8kh8uda/waSj4AfJPT/KtoYx/1uASmH7rcFaUOfVJUsZ0D8LXYID5OeIeIjwMZRd6Fk324Rc5ANbDiQNNiAKGVuSUjYPv2SBjMDGCuEd5Yc04I2wZ2ngjBTxqoiNLkLhYA4VqmRUDggINaA+SHKo41YajWcgBjZqhyB40TsJjAXbEMIMjcQ4NgWVsYbJwpmhfdUJUaW3CYUlqVlVyV2eTeDdIIZA1xkh8b4qTp55/jjVLhBzaVOg+jiC63lCLPqmhLVJaGel+cjiahZKXXmmEiXbwUGmanf44VYkmiqpDEDGU2sKQQ7pqJqwyyOomrYTaametriYAADs=',
        'grimace': 'data:image/gif;base64,R0lGODlhZABkAOfvACIeICMeICQeICIfICIfISMfHyMfICMfISQfICQfISMgICQgICQgISUhIiYiIyYjIycjIycjJCgkJSklJiolJiomJysnKCwoKSwpKi0pKy4qKy8rLDArLTAsLTEtLjIuLzMvMDMvMTMwMTQxMTUxMjYyMzczNDg0NTk1Njk2Nzo3ODs4ODw4OT05Oj46Oz87PD88PUA9PkE+P0I/P0M/QERAQUVBQkZCQ0ZDREdERUhFRklGRkpHR0tHSExJSk1KS1BNTVFOTlJOT1JPUFNQUVRRUlVSUlVSU1ZTVFhUVVhVVVhVVllWV1pXV1pXWFtYWVxZWl1aWl1aW15bW19cXF9cXWBdXmFeX2JfYGNgYWRhYmViYmZkZGdkZWhlZmlmaGpnaGtpaW9sbW9tbXBtbnFub3NxcXVyc3ZzdHd0dXh1dnd2dnh2d3l3d3p4eHt5eXx5en57fH58fX99foB+foF/f4KAgIOBgYSBgoSCg4WDg4WDhIaEhYeFhYiGhoqIiIuIiYuJioyKi46MjI+NjZGPj5GPkJKQkZORkpSSk5WTk5aUlJeVlZeWlpiWl5mXmJqYmZ2bm5+dnqCen6GfoKKgoaSjo6WkpKalpaimp6mnqKqoqKqpqauqqqyrq62srK6srbCur7Cvr7GwsLKxsbe1tre2tri3t7m4uLq5ubu6ury6u727vL28vb69vb++vsC+v8C/v8HAwMLBwcPCwsPCw8TDxMXExMbFxcfGxsjHx8nIyMrJycrJysvKy8zLy83MzM7Nzc/OztDPz9DQ0NLR0tPS0tXU1NbV1dbW1tfX19jX2NnY2drZ2dva2tzb29zc3N3d3eHg4OLh4ePj4+Tk5OXl5ebm5ufm5+jn5+no6Ovr6+zs7O3t7e/u7u/v7/Dw8PHx8fLy8vT09Pb19fb29vf39/j4+Pn5+fr6+vv7+/z7+/z8/P39/f7+/v///////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAABkAGQAAAj+AP8JHEiwoMGDCA8uMGBAAcOHDRkuSEixosWLGC0qGACxo0ePCjKKHEnSIICPKFN6PFCypUuDDlXKnCngpU2RBWY6kJGFzh9HlTp1quToDx0sMhzMDHmzqUECKme4GeUs3burWLNmTddsVJsYKgs4daogp0cHVDhZ08q2LdtqmqA0+FhgwNiXKHU8yua2r1+s1xrlQHmXJEols/4qXhwLyceJhS9+pMJrseXFuqR4RBCZ4sKOK0pdHr2Y1QuQnQ0K6DhhkDnSsP+WEyTBY+qBHnc4i837L7PBEMWm9miGXO/jfc3ZsR2544VQyKP3/WShY+GOH35J39522AjrTjv+olDGvbxWZyzA2+xoY63591er0QhuMybDFe7hw6+mQj1J+wZ0QJ5+BDYDAkQslQTRBcEQ6OA7vlT3kIIQgfLgg534JxlEalx44Rn0ZQSRDuV4+CA5wDEk4kMT7Gbig83UNqFGEBHyooeBIGgRRDC8duOD5bjwkHAJIQARKz96mApEAVAEERVJmvgERAmZxVBlUV6IC0Q1HQSRErE9EwkglVzjoDWVABLJM7EdQaWXDyU2GjhkQNRAHui8d84dcz1URjikvfJmQfbpQNo4QXzUxTrlrcPFR0KMM5o7ODxkV0EQPUJaGyk5Ut4iKcFBGiODCnQSQw1gM5ozDKSEAaD+0n1zQUoMQDNaNkoxROQ/T5J2h0yUbCeJTHmQBkWpEHVCmg4ydbHdFjL1QJomyD5UzWjt5JrSDNuBpdID7oxWzaBGMsTtaOHM9MF2H8wE62UwDCkQRG6Qlk6rKrGwXX8qMaAOaWy8CREpsJkgUxHbESETCrCJIvBDbJIGhkx+bMeHTGHAxszDBjiQJ2mmyJTMdsfIlAps6Gj7z2cGnEvaOjuktEV5WKTEAzuxxcvQARBpwVsxEnZUQn7SWUPCRxcUw1vNH83RGy0HQuTCgOUh00JHINjSmxwPHWClIMdp04cOIvyAiDj6iXOIDyLs4Ic2x/2BEiNZ1v2OIpaWa0D+JXZnOcmQEHnSd5QZfiT44D8WzpDefCN+49+6QkS34y/izdAAX1P+otxNa25iHF1DlIXnHl4BEcsykH7haTvzypDHqhN4jsquM+Ri7O8tw7EBo+AOXyi7t+H7e2m8qXfqyHkzzfLMN+/889BHvzw30bFuAJEQXQvbOp5QUcFM4IdvgARMWGIVbNJUy9AmsDWTovjwzxQDMbBhUqreUpBGzAYPobDEFAxIwhQGOIUoGKAJBJxCEwwQhQQusIEETAIDEjgFI0BgCkxID0MqQAvSOKFUPEOVmSzTDRQwJAe1CNc7IqAqrKjDAODICjgM8C+szLCGV8FGBLQSDQ9gxRf+QGCIB6hxGWv0yQCQwc1DPGWZOjBkCJLCCguz8sIY2pCGMsQiVnTIQx9i5RxVYIgYLmM5FRVkNSe0TDlmVQGirbCFV6liFnH4jhtmhYtZ6aFWvNGuBmxjMe64QamUyBBZLEZQBjADW6boQhjO8ZFb3GEevZiVPTDkE4tpxSAJaQAkLKYSDMHEIuH4DjlekY52jGQX2YIKhthIMQq7HEIAtAvFGIIhX+iDLnfZADjssg96MAAdfkkHA+iBmMb8JRwa8Ms+rGECzezDGBgiB8XYAiKXghND8veXQjCEAvELJ/zioJgPzgghVjLAKrrJkBB44J3wNAAH4PnOANGzAwb+oKcH8KlPDuSTnhtggD49kAGGkNMvp4AIZyhiJReUqC+kMoAoRklFR54SkjmUJFb0qJVrGgAPfiHH1c6ZEI48BGx98QRDEEHRRlrxKqmEqRYzukqt2M8AkPAL5xjClIpARALM6MszGNIDFUqRlKaUKSpn+g48bpSSWDmWAXrRl2XI6HorYkgNotiWHjDkElphZBwtqlSMNlWjV+EoVkJmgBXgrC0o2qRnIIKGvqiCIRI43FXEWkqy1pGpMT1rTa+CCgysry9mYNJIOoJJt3CKIUvQxC+M4QBYGOOyxhiGAXKBWWPkwgDD6OxnQ4tZWDigs8Y4hQaMAYxPmI4hYDD+qlY2oSGMQMQCVG1LOkAkzt6ixAvGaQsvvkdSkUDlIR0YmVtCISTfOvcEl2iHW5jRrof01DAQUYH22sKOXSRCDm8Ir3jHS97ymve84Y2DIWpBR61QIwU6ekk6abDd4VFjBrWlUP+U67tmrCC/LemIB3IbO2GIAMAu6YgFGku6TRC3uOHpSHE0Z47HytUpAehIDprhuGUIEsER/qkgHpolcvwhAsy5jUBY9hAVWChKrGguRK6rYoHo7SFQyMWNbmFOEN8mnQ85wise5A5XFOEjTaqxkz6Cg0aMsDzWWMSHO7IrJSfkuB5pABQ0QUTkTCMTTjgila2ckQynBAZqEMVNMj6mGHQsIxRqsB6SyfyfmTQgBleIwx8aQQmhUIIRf4iDFWAg5o8MIJt01q9zZZJopwB50RJpdGcAFE4aS1rFJzmAkcq16QMkAACXDggAOw==',
        'alien': 'data:image/gif;base64,R0lGODlhZABkAOfqACIeICMeICQeICIfHyIfICIfISMfHyMfICMfISQfICQfISMgICQgICQgISUhIiYiIyYjIycjJCgkJSklJiomJysnKCwoKSwpKi0qKi4qKy8rLDAsLTEtLjIuLzMvMDMwMTQxMTUxMjYyMzczNDg0NTk1Njk2Nzo3ODs4ODw4OT05Oj46Oz87PD88PUA9PkE+P0M/QERAQUVBQkZCQ0ZDREdERUlGRkpHR0tHSExISUxJSk1KS05LTFFOTlJOT1JPUFNQUVVSU1ZTVFdUVFhVVVhVVllWV1pXWFtYWV1aW15bW19cXF9cXWBdXmFeX2JfYGNgYWRhYmViYmVjY2ZkZGdkZWhlZmlmZ2pnaGtoaWxqam1ra25rbG9sbXBtbnFub3NxcXVyc3d0dXh1dnh2d3t5eXx5en16e357fH99foF/f4KAgIOBgYSBgoSCg4WDhIaEhYiGhoqIiIuIiYuJioyKi42LjI6MjI+NjZCOjpGPj5GPkJKQkZORkpSSk5WTk5aUlJeVlZeWlpiWl5qYmZuZmpyamp2bm56cnJ6dnZ+dnqCen6GfoKKgoaOhoaSjo6alpaelpqimp6mnqKqoqK2srK6sra+trrCur7Cvr7GwsLKxsbOysrSzs7WztLa0tbe1tri3t7m4uLq5uby6u727vL28vb++vsLBwcPCwsPCw8TDxMXExMbFxcfGxsjHx8nIyMrJysvKy8zLy83MzM7Nzc/OztDPz9DQ0NHQ0dLR0tPS0tTT09XU1NbV1dbW1tfX19jX2NrZ2dva2tzb29zc3N3d3d7e3t/e3+Hg4OLh4ePj4+Tk5OXl5ebm5ufm5+jn5+np6erq6uvr6+zs7O3t7e7t7u/u7u/v7/Dw8PHx8fLy8vPz8/T09PX09fb19fb29vf39/j4+Pn5+fr6+vv7+/z7+/z8/P39/f7+/v///////////////////////////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAABkAGQAAAj+AP8JHEiwoMGDCA8aQIDggEOHAQIgAFAgocWLGDNqxLhAwMOPIEN+3EiypEmFIlOqBGngpMuXBlfKnPlwAcybGw0YWCnhBhU2iz6lerUL2K5WpzoVOrPERYOVDHBKPdgw5QcuiWqJU8e1q9evXLGZmjMEgsqpaFOqWOPqHNi3cL1eo9QkQkq0MEU+qIIKXdy/gNVZE4RCpAC8JXeCrACnWeDHgMtx4hHSJuKMCUBGMAMNsmfA6TSxCHn5YkgkyD6rBjyOkAXSpWN+3BAp3erbf5EJAYkg9kAAIIU8w0087jlCEj62jF0AZBlyxaPDnTUCZOnmDyFEks797TIc1hH+f4wAqrv5r92IhJ/6UYKo8/C7gkPysbfUzA4dvI/P/1uRjxXdBNxDg/BnoDrZxDDSTR+BceCBxnSwoEsf1bDVgwam4sBDy5n0EQS6YPhgGxOW9BEeIj4oTg0laqTYAS1Al+KBtWzokIcPXTIjhl+0aNpDNvi144HJJOeQfRl99MmQGKbhI0IvklAOkw8288BDGn1EB5UYQvEQkhY91IAyXD5IypOyHaBDmQ+eIwKWPzokB5sPgoHmQB+1QueBnDyUQJwTjLOngdhceWOYDuHwGTbA+LINk9TMsks0n8kAJ0JVHdAFZLYQYegBLsQBDIa2pFGCmEDMAhkWD0WF0Ef+fDz2iVkhNVBFMPzhskRKD3jyWB53fpRJYNJssBIEeUzZnThw2JgSB9QEtgmHCb1oSmCN0PSDNNw5A95MkASWSrAPwRKYFzTBeEx0wZyQbhiB2XInfgfwElgU6R4wApm4EeNBvlgERsydBDwkzLn5HvBCtKtFM1q+YwS2DLkO9RKYHwkfsIRtn50zRMaEBFYMxQfIEtgsGR/giGqDpGwvYLzcucBDoQSGTgoZXzCNZ85QkDEMj53yUAAJBfBQI48BkrIbnpmRsiKPTXIndge88Zg3IGRcwaOBWWNkvidcCFgdfiJ6gBOQSZJyJY9FkrImkFVx6asOnQBZOl4mnMX+Y1NkrIVnLsx90EeOPSbNw+nO8FgLCceADWTT3CmQ0Q5t4pm/+WLwmF3pisDvY6NI/g/lB8Dr2S1Z0xTCY8bSVIIvnzntkGVme2DOZ8cEPlMQj/1AEw3LfIbOqYde9KK5n12zxUyIPFbITGJwo5q8giM0s0NMr9YJ4ynlIGhg4+igEg2l3DbHQwRk6ZALHKtWjiQ+hPQEt5BR0/dHDhyRiVu3zVB9Qh9hRXGUwQk91EERB1vNMRjxh0CIglLEiYXoCFIwh1xhUOZBl0PSt5GHPIAZGJRONSbwP7Md4A4hjA7GSpiQ6+krHCnEDTlwNjscOeQQMbyNIyZ4EAU8JAT+3sjhZ8JhAh4O7iGAEKJnDGHEg9CLA9lQYmC+8SaHKAAmL4qDFAFzhyYihF4QGNUW34IMn1kRJxU8gBHaN8au7IqFJspRG73SJzjG0SEjiOIcuVFEiODlI3ubo53saJIXHQATn5mF2HBTDTFCJhQfoV1aHrKB4EHGFCiwBBs9Y45IiACEkIHGvxzSIfE8ZAj8C8w5LKUDRTDsMc3oQ+Cs4Bl0JMGLifkICiGjiodE4Al7GIUlvZIOZYDCDkewkQTWBZk+RNI3/3BhA5YEGTKkZAMd0EAHWheSWEEmFZ86ADQF8pEMDAMy5ThCyg5QBSEFBhkcwOVLPgIDbUAmG//+SRgUwAEZb9hAni8xJBOUBb4xpKsBaCAoYMxxP1KOsyAg8YI7A4MK/61EBqvwTDqsCdCbkO4AcBAeKaZwAZBYAAqimGhg7LCeh0L0I4ZYzThqkQlDYIIWi4TMI1rq0pc6pAGMYBIlnCXOnlZLTFCbkSSIatQ4HaABOBSRI55CyKaCJIkPMgRVi9dUpx5gDAo1zznUwNOumvAASuCaeb7RUK6aFSOGzMEwpdMMynTUqh/RADWjY4oPfISDb73jQ55DHHPogahFDawNH7KDEK3mFz0AiSQVWxIX5qcM3fBMOPTwNYdSNi8gSQEkZBSXclBiBbD57E08ElpH6PEr24AxBOLuqto0tUcKksCFMnJBiSqQECSArS171gkm4U4yXQAwLjQHsJKdKLen9NrJZM0aEAA7',
        'laughing': 'data:image/gif;base64,R0lGODlhZABkAOfxACIeICMeICQeICIfICIfISMfHyMfICMfISQfICQfISMgICQgICQgISUhIiYiIyYjIycjJCgkJSklJiomJysnKCwoKSwpKi0qKi4qKy8rLDAsLTEtLjIuLzMvMDMwMTQxMTUxMjYyMzczNDg0NTk1Njk2Nzo3ODs4ODw4OT05Oj46Oz87PD88PUA9PkE+P0I/P0M/QERAQUVBQkZCQ0ZDREdERUhFRklGRkpHR0tHSExJSk1KS09MTVBNTVJOT1JPUFNQUVRRUlVSU1ZTVFdUVFhVVVhVVlpXWFtYWVxZWl1aW15bW19cXGBdXmFeX2JfYGNgYWRhYmViYmZkZGdkZWhlZmlmZ2pnaGtoaWtpaWxqam5rbG9sbXJwcHNxcXRycnVyc3ZzdHd0dXh1dnh2d3l3d3p4eHx5en57fH58fX99foB+foF/f4KAgIOBgYSBgoSCg4WDhIaEhYeFhYiGhomHh4qIiIuJioyKi42LjI6MjI+NjZCOjpGPj5KQkZORkpSSk5WTk5aUlJeVlZeWlpiWl5mXmJqYmZuZmpyamp2bm56dnZ+dnqCen6GfoKKgoaOhoaSioqSjo6WkpKalpaelpqimp6mnqKqoqKqpqauqqqyrq62srK6sra+trrCur7Cvr7GwsLKxsbWztLa0tbe1tre2tri3t7m4uLq5uby6u727vL28vb69vb++vsC/v8HAwMLBwcPCwsTDxMXExMbFxcfGxsjHx8nIyMrJycrJysvKy8zLy83MzM7Nzc/OztDPz9PS0tTT09XU1NbW1tfX19jX2NnY2drZ2dva2tzb29zc3N7e3t/e3+Df4OHg4OLh4ePi4uPj4+Tk5OXl5ebm5ufm5+jn5+no6Onp6erq6uvr6+zs7O3t7e7t7u/u7u/v7/Dw8PHx8fLy8vT09PX09fb19fb29vf39/j4+Pn5+fr6+vv7+/z7+/z8/P39/f7+/v///////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAABkAGQAAAj+AP8JHEiwoMGDCA8uMGBAAcOHDRkuSEixosWLGC0qGACxo0ePCjKKHEnSIICPKFN6PFCypUuDDlXKnCngpU2RBWY6cAFljZ1CjzRpelTIzponLhzMDHmzqUECKl+YCZVsXbyrWLNmXYcsVJkWKgs4daogp0cHTDJR08q2Ldtpl5I0+FhgwNiXKG0Yuua2r1+s1QjVQHmXJMoisf4qXvxqyMeJhS9+ZJJrseXFt5R4RBCZ4sKOJ0pdHr141QqQnQ0K6ChBDzrSsP+ewxPBY+qBHm8ki83777HBEMWm9ujFXO/jfdG1sR25Y4VPyKP35UShY+GOHHhJ394W2AfrTjv+kijGvbzWZCjA2+woY63591enwQhuMybDE+7hw59mQj1J+wZoQJ5+BCLTAUQslQRRBb4Q6GA8u1T3kIIQdfLgg5r4JxlEY1x4IRj0ZQSRDed4+KA5wDEk4kMS7Gbig8jUNqFGEO3xood3IGgRRCy8dmNbr8iy3TkqPCRcQghAtMqPbXUjgincpQJRABRBxASTbalhADLlIQFRQmYxVBmWWVETwQTtlFcLRDUdBFERZGq1hgFBvCfEl24+lFicV21T3RzvuYJnQfbZwCdWdDB0ynvw0PCQXQVBZMih8YCDAUPZwDfIoAKdxFAD1lDKB0Mt6HeNUgwd+Y+VlJLDAUP+XRCYBKcQaUJpIQ9FQuAltD40zaHoiPDQMAROM2iSDL1AqSMssuMgC0YKBJEZh66THkMOGEcgGXhCJMqhwHSUiIOgdPuQMqSdosUWclDiSznIDdORA3mM05s60WQDT1vHmGuAA+qQxs4hIDzUwAtY+JFKNLC9c4RHGdDBl2XfdPLFCw+F0AY2WqmDqgH/fGaAsrGhI4mjHmlARBqX2LuYOXvkwEBHEYRxjF/nfMLExx19MItW0DJ0AERRHAcPLVc8gBIIzIzWzShnzPcQA1O4mNUwZWQwUwbLZPUESmpIl00h/XnEBW/WWHwCtndotcRMDzmRVRoPHRAmHtypA8r+DR0BEV0zpSCSSMBYUfMq3AxAg5UdKA1injtVQBQ2gazMDHcqWAXyKLIGPPLeMxAF8+CccF+CVSNGQrQJfJbjcKE6PsD981UZfrS6ed48xIiH2ayt0gXiYFU7Q5x7bp4uDEXQzYPuXJVMwSnBkRXqqULkuHmWMJTFhW9Uc9UwI6DUg49Xac7QAHe/JwdDrjwoigF+AHZnR1csnxXjH01eXhQGlNA8gb+ojqGwAo9WpGEIS1CDLtqChrpBBArvcYEB2kYgZ0DPAN4bjRMgIjIXmGcdDmBA0/RDjaAxhBSkOY3QVoUtwm0HGgaAoH6kocKH2Ogy6fiYtB5iNen8AgL+wtAPMq4FETCMxhj+MkAoymMNSeiHFhv4iBRG84kkloFSi6kEBFAit8uIAU+c8yAW++INK6hkCqOp4ZEg8qsxsqUVJJDJFS0DuhntkCGYcGNWrpEFuAXiMpTgFOeUoMd4kKMPF4CbAVpxmYfZ8R9D+1QGj/MO6ZADERecSQO+YRlqzEUikXpIIY6jjj9QATnX2MOBFMkQIVzGfCoqyGoYUoPe+GIwDthGbNjRiqSxEiKLsAw8ZsAp3DwEFrBBhxs+aYBMjIYcqSDDKn/5EOBZhhXFNCZDhkAaZeSgI1X4CzymgQo7GEFG1OxIHC4DhEchBEC4uEwqLOARC6QDK9H+sMQjAMEGK/CAnulMCQfAYZlZQARSeWIIIRczCWZ2xBaFS2RAFelMyzgylggJkwFUoRhROLQjf8iKIiYKt3Ba5hQQ4QxFwqSCEvWFG1FMySkJGDmSpoQGLlOMOVKQTYNw5CF46wshZAIDrYQDBzb9CAxCZRn8MYQpFYFIBG7mlh/IRAJs0YYMkgoRHXDMMsZAp6qi+pAYkMMtHpiJs7TyDcdwtQsufVmKQJYRkRkgDG6ZJkoysC+2rGMOH/2lCVBBGi9MaSQd4URbNKMSJPilFz1IJwgQQT7LYEJDGIEIBRaoFUjIxEJ+eQcqiKDIFiBCW6PJxQR6ehGoPEQDxND+CjtQ9pEduPAvzhhEE7TGmh7UIRd9Jc0xDvdUl3TEBG3EijOK5BEVKA422gDGLGbxi2akqTfSKIGOXqJRGCT3KtgYg9IYMgExhINS0sAYaxELERLEViveeIUnWhE8SiHDd49cD0Q2wNlCYuUXaV1vSzpCAcX6Nx6YWK2AjduR4ugRHWVgTmcC0JEacAmLxiAmZq9DMzzEFUvmsMMWNxwZuzLEBKBl0iqYCxGo3oYgnHtIEiD6IlpcdMGp0ehDhNA+BxUwCB+h0ovJ6hEaEGKS3KGGIDTckbEOOSGu9UgDknAJaUQHGpY4QmBT9WSRUDglLBgDKIxxW7+owxifGENFDYPc5ZIACCUNaIET0GAHQjhCKI4YhB3Q0AQWbPmgCG3zgLkqE0GPRceEhoyhI/Nmarp40U8+yQGShCxKHyABAID0PwICADs=',
        'crown': 'data:image/gif;base64,R0lGODlhZABkAOfVACIeICMeICQeICIfHyIfICIfISMfHyMfICMfISQfHyQfICQfISIgICMgICQgICQgISUhIiYiIyYjIycjJCgkJSklJiomJysnKCwoKSwpKi0qKi4qKy8rLDAsLTEtLjIuLzMvMDMwMTQwMjQxMjUxMjYyMzg0NTk1Njk2Nzo3ODs4ODw4OT05Oj88PUA9PkE+P0I/P0M/QERAQUZCQ0ZDREdERUhFRkpHR0tHSExISUxJSk1KS05LTE9MTVBNTVFOTlJOT1JPUFNQUVRRUlZTVFdUVFhVVVlWV1tYWVxZWl1aW15bW19cXF9cXWFeX2ViYmVjY2ZkZGdkZWlmZ2pnaGtpaWxqam1ra25rbG9sbXBtbnFub3JvcHJwcHNxcXZzdHh1dnl3d3p4eHt5eXx5en16e357fH58fX99foB+foF/f4KAgIOBgYSBgoSCg4aEhYeFhYmHh4qIiIuJioyKi42LjI+NjZCOjpGPkJKQkZSSk5WTk5aUlJeVlZeWlpiWl5mXmJqYmZ2bm56cnJ6dnaKgoaSioqelpqqoqKqpqayrq62srK6sra+trrCur7Cvr7OysrWztLa0tbe1tre2tri3t7m4uLu6ur27vL28vb69vb++vsC/v8HAwMPCwsTDxMXExMbFxcrJysvKy8zLy83MzM7NzdDQ0NHQ0dLR0tPS0tTT09XU1NfX19jX2NrZ2dzb29zc3N7e3t/e3+Df4OHg4OLh4ePi4uPj4+Xl5ebm5ufm5+jn5+no6Onp6erq6uvr6+zs7O3t7e7t7u/u7u/v7/Dw8PHx8fT09PX09fb19fb29vf39/j4+Pn5+fr6+vv7+/z7+/z8/P39/f7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAABkAGQAAAj+AP8JHEiwoMGDCBP+I3DggAKFECNKnEixIsGGGA9Y3MixI8eMGT2KhAjSwMiEIDGejIggo0mFKTWuLGggpsyZCFO+zBkT58WePg3WTAkTaNChIIMatFmUqE+bGRsoFcgUZUoEOBlCdfrU6MGWXjki3Qp15QCbOxNqjSm1Itm3GQl8hJqW5NsBCQvA3VsVIQIHby0q4Eu4MF8DY+FaZGC4sePHISvqhUy5cmCLljNrxvgQ8+bPlOtKBE3asVyLa0urVix4tWuyCzYmfk27YduIDnI7aFC7N8YGuh009U2c68HiyJNaTZ58OHPizp/3Vph6xJDr2LNr3869u/fv4MP+i4irUABGDb2qqV/Pvr379/Djy59Pn5cGjKd5NoxDv7///wDKF0dkX2GEATABJqjggu4BcwFGWB2HURsMVmghgGsQSBBYB0Bwy4UghvgeLhBAuBRGS4io4opLaEgVRpCsKCOIkLhoXkMdODPjjgw24wFGAhC0VhY8FqlgFhpm9MiCxxDyhA9J0DHLjsYM8mSUtCzoSJINSWCMgpaAANIEdkyzYphj3kFNgsNEoJJAAWC0g4KVlBiTGipSYmdKbCjIA2cvNnRGgsT8CNUnIRLTwVahJFgGRi9ltEiCfpDVRIh9kOVEgolElpErCSpBFgXQgJjEqNEE6IqnDT2wTIL+NLyV3oUzvPVLgMw88CZGKSgIxFvKgPjDW8wkaIJKcTZkhIJpkGVDiGiQdYOCQmA0WUNUKLiKrlAJEqIq3NpEiIJVYLRARmAsGK1NO+gY4hlQ8eBugF/Y5MaC0GwRUw67qAiNFjHpwIu6GAGwVh0MUjOJEHa+8EexK1IjCcMNwQBIMwwO2BACSMlxITK0BGNkNSALcyEdnGX0xsgsB9iGSxit0fLM/Y0BYUZe0KxzfF1gxMBgDaW489DsMfEbh88SrbQMkP6DkQdKE03Ngw0FekC/UevsC6sNdZK1zptwfUAgX9OcR9P/8NbQFGXPDAVGAQh04wEfSNP2yNKIufH+QBmpcreRpnDZEB9/F2mH4AfkUDiPf77JN0awLC7jKy46jZEdkq8IB9oEIYXCM//50vas/UVz7N4nNrSkf4owkvU0hSTy3yOVWw3Ef9McwYQsRJPSwxFm9kcNDrVbjah/xLgAgRWx0DzKEwewILJ/nBRvtQ9r+sfKohFIcUmpPA5TiA8NcbDKf9T82pBoBKndkCQArkICRiWw4cmrIuqiSBQTYBRCKgDaEn4gghQYQMw/sVABSCqAhD2AYmAJckYrIEGGGKTkBK8AEDNWwLmEAAYjHgOQL5AAlQ34gAt5MIQkPlEKVbhQFaDIxCIE0QYntGBPKSkC1v4zB+sVJCP+EjgfgKQRCAys5gJ8SBWAUCEBuFEkIznAWIBugQUcZuYBVMhSgJxRAx+mriFkWFArtECBzEzgCkJMELy8+MUDNIJBwQBEEMJVmAf8oA+3WpAiXDKXhmTAbxXqxSLMsIP+kWUCOiiDIiDIIFRYgI0ISQ0JeAciaehCFI84hCD60AdBHOIRosiF3UBUi9M1JD+yyYgLEJS59/SiBXwUCUhukMdWrgcYNlDOSEDSAlvYUj24sGAHd5kRFmSwla44gS5nMpYNWCJzlNhALIMCkgfcYZRtk4Yc6HgTpaSECLVoGy2MUJKpbAgkGTBE8Ig2DUIYMSMRMudAZuMDUhBNFMOYAkln5FmQ1BzgAVmgZMtkQYWw8PMnIIHAE04xslV4oYnGOaiEUnKERQRrRclgBDl1IlGJXAskG/hCJZBxoWRgogsZQEtHKZIAqFBgCXnoRDEANIxP6OEIhuzLSp/4lhYkIQx8OEQkOPGJT2hCEojAgxicoECysG+nE/ngap4KVYvMpjJUrapIkuWYrGo1KAFwn00GEM+dBgQAOw==',
        'sleep': 'data:image/gif;base64,R0lGODlhZABkAOfVACIeICMeICQeICIfICIfISMfHyMfICMfISQfICQfISMgICQgICQgISUhIiYiIyYjIycjJCgkJSklJiomJysnKCwoKSwpKi4qKy8rLDAsLTEtLjIuLzMvMDMwMTUxMjYyMzczNDg0NTk1Njk2Nzo3ODs4ODw4OT05Oj46Oz87PD88PUA9PkE+P0I/P0M/QERAQUVBQkZCQ0ZDREdERUhFRklGRkxISUxJSk1KS05LTFBNTVFOTlJOT1JPUFNQUVRRUlVSU1ZTVFhVVVhVVlpXWFtYWVxZWl1aW19cXGBdXmFeX2JfYGNgYWRhYmViYmVjY2hlZm1ra29sbXNwcHNxcXVyc3ZzdHd0dXh1dnh2d3l3d3p4eH16e357fH58fX99foB+foOBgYSBgoiGhoqIiIuIiYuJioyKi46MjI+NjZGPkJSSk5WTk5aUlJeVlZeWlpiWlpiWl5mXmJqYmZuZmp2bm56cnJ6dnZ+dnqCen6GfoKKgoaKhoaSjo6WkpKalpaimp6mnqKqoqKqpqauqqqyrq62srK6sra+trrCur7Cvr7GwsLKxsbOysrWztLe1tri3t7q5uby6u727vL28vb69vb++vsC/v8HAwMLBwcPCwsTDxMXExMbFxcfGxsjHx8nIyMrJycrJysvKy8zLy83MzM7Nzc/OztLR0tPS0tTT09bW1tfX19jX2NnY2drZ2dva2tzb29zc3N3d3d/e3+Hg4OLh4ePj4+Tk5OXl5ebm5ufm5+jn5+no6Onp6evr6+zs7O3t7e7t7u/u7vDw8PHx8fLy8vPz8/T09PX09fb19fb29vf39/j4+Pn5+fr6+vv7+/z7+/z8/P39/f7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAABkAGQAAAj+AP8JHEiwoMGDCA8uMGBAAcOHDRkuSEixosWLGC0qGACxo0ePCjKKHEnSIICPKFN6PFCypUuDDlXKnCngpU2RBWY6YMEEDJk4ewgR2hOHDJglLBzMDHmzqUECKltsWQTrWbWrWLNmffZqkZYVKgs4daogp0cHSAbl0sq2LVtcgYw0+FhgwNiXKGnI4eW2b9ZPMz/eJYlSSCa/iLHekdngx8eJgy9+RBIqseVqVmTOqPbpiEcEkSku7Fji0eXLmxKpVo2HAsQpgR+GFiigowQ0zE7rxspLBkQ5amIznO2xBqzdyGmheNgAUDUowg2E9khFGfLdq0A8jODoqgrhkO/+dqyQ6PpuUhkeVjhcjZqcN/Djv1mjwWOAwR03kDKv+1KFhxqUglgzTqQ0VkcisMLfaY1A8FAICvp1zBAyNdURDGstaJkfczGkQi2IBZNDRxDw4QJEYr0UE0MlZKjhVaigBAdEEdTRyI04LpOVLjCMd0k1uJDQkUsrGpBBhC9eNchHH/QgUwTQYDWLCR1lsN9Vr3AAEUslQVSBKUnuOMqYezzAUBsWyHQDVqp40BEIq2g1imuyEQbRIWG2NUp6DOhBy0xWXAUKBh2hQEtbhAwpUkdY5MmWJa49gIhukkzQkQx8uVUFios+RIOOjmLVoAETSKIbImZCpMMwfikzA0T+GUEkwXGhXtXHXBd4opseDHRUBDKJvRIBrBpBlEatV9HBUAN3jDmKK4kJ4pEFasgnn4BZmbGlRRCpkBuyJXxURWLQCceIVsssx1CKCSEA0STIVkMMSnckBpZwsrAVCUT3JQQREvEumEyvsVUwTVtFEHuQWQxVFrB5pkTXg1udQFTTQRAJ8fDGlgGhcEEQscfxyG1Z8vFAK9JA8spsUeMbQ3aB/JAcLNeMlRsnn7TsLjbbzItS6xL0b889G/ExRIQQbXMgRz+Ei9I146Kwuwy1ALXN3wX9D0RbXF1zFsRCdK7XKysS9kOxkL2yK2cb4IAzapPsDNDSjWaA1XGTnLX+AQdA1ETeJC+B0hfIPUMMYsCEmbhfxFi1mxcPHcDwGchJQ0IiUbKlDB5rJmlDHqBqBQ0iJUiDHBkouXHdDgaMAAYjoqQCCiFXaClFmFEYsAEWhnySiiiNfCHkxMix8dAAVBuwx3V/yLRJmJrI5BxyeTzEsAGFXBeNYyjdnmfuKAERzXWJfpT9db/w8NEToSe5TIEe9bA4cuUzlPzy5jljxwsP5XDIwaGaRiFw8BAY3MFx16neuiCiOg0JgxbF4FgxaCGMFxkPZpMD3MhQ9xHCaXBjXYgcRJjwwY0pASJ2Y0EJH5aCyG2NIW9bIbKaQTeBQIRWMnRUK9pmgEXkMFT+ieChFn7oqCsQK3kqJGKYWqi1FzLkaUrUUC2axhBBRFFDzauTQJJ3hCsuiAgf69uydOHF6+SiQwYIjw0fEocyFu9k/6gNQzZDMlzsIQxiAIQvSEaNGMDRiQbABMeYwYVUMUQCZRjfxijxR0AGYWPM8NhHnGC6h/ngeAgpEigeBgaVtOFhm4BIzDD2kC7GqxcOSgkG2hcqMGpxYRAxFbKYJpNKxAsSEAENRRiGAlaGSVsyyQOylHGCRhKEIw+hXK3SMJM+IIuDDGFKRWgErVA1YiabDFUrhtVEbj3kBcBylDEIlRISKDJPrjKmQiASqFDNQSXlCRUV+DWSjhgiVNT+2NRHxlAraanTXw+hgCjw6QftPAQFY3NUKCz1SpFA5SEZiFOoojE7Q5wCgI5yxQYgIk07PYQEUFTiLUawrZdczwUhzeEtWqAomyBIojJ8Rbj+2SkADXSFp+hAS53SEQrc84OCYGhDedqR6uSNGVrwyGz+EYCOzOAVamuFH3c6nY5E4Ay+ZJkyyJBKmjbFbh/FU88moS6OLvUgyXuIEXS1Mk64kqpnJcj1HgIES2yMGpXgXkf6FVeAekQGbyBjqHLRhql2hF19pchDPdIAIwTiFi+yBSCIgMbDJjYjTU2JCrCgiFbAzTLOaEUisMBElPD1shkpEkoasAIldIEMb9A1g1D04AYydCEJKqjsRwYwStR2KTrAHY5vmzLX4D5muKFRLXA7ity4nuQA7qJadA+QAAA0NyAAOw==',
        'unknown': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dIngkRLf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSqReFY+vtUlblLIVtrwEsSStvbW/HRafwqequcAVx8jJq3EVl8+8m8vSE7TVvbgAxbvcyNEQFtTi1uQv2ujP3hnG7cjKExiz8u4X5c348+oH9/ohe1dkgjOBqOgVvIEwHzYF0xoiu/aNgQWJz1YFxNj+TR9ECgc5hlLYiILIccs2nrRFMOLKdLn4vbRFMtzMWjVN3rR1QeVOVN58/gwVlMK5oaEoukR6SqlRpqicGoQKDURIqnboycSKSStIrpm8TjgK9o9UAGTL2jmbVi2bs9vc+inKTu6fdzbt1tGXV++YnFP9rgGMVvAaih/rGg5DEKDOxVg8Og4MuQnJxAwrN2k8eYLmJtGWfkZMiEJczZxLUq58ubTiyqlVrzasdY9p1JLXzdZb297txbF1FxasNNvusr2Nn1Yb3PZTucVrbAWbXPpX6v88xMPqtcUHrsSY/WYadEiwneFZnF/Zvct6ju07mVvptJKF5f0m1WPU+blZQKn8yTadOPrtF6CA2lzlSoEVHejafQqGRVeDDgpnWluZlLFIhb6lMdKEBnLY4RcC8JDVE1GICA4MOPzQgw86BBGDiurZYGN6NFp344w5urcjjj36KAONCQAAOw=='
      };
      var _opponents = [{
        label: 'Penguin',
        color: '#4527a0',
        shape: 'circle',
        icon: _images['penguin']
      }, {
        label: 'Squirrel',
        color: '#f7d97b',
        shape: 'triangle',
        icon: _images['squirrel']
      }, {
        label: 'Cheetah',
        color: '#f44336',
        shape: 'square',
        icon: _images['cheetah']
      }, {
        id: 'real-penguin',
        label: 'Visitor',
        color: '#000000',
        shape: _images['penguin'],
        icon: _images['penguin']
      }, {
        id: 'real-squirrel',
        label: 'Visitor',
        color: '#000000',
        shape: _images['squirrel'],
        icon: _images['squirrel']
      }, {
        id: 'real-cheetah',
        label: 'Visitor',
        color: '#000000',
        shape: _images['cheetah'],
        icon: _images['cheetah']
      }];
      var _shoes = [{
        label: 'Boots',
        color: '#1e88e5',
        shape: 'triangle'
      }, {
        label: 'Wheels',
        color: '#81c784',
        shape: 'circle'
      }, {
        label: 'Athletic',
        color: '#fff9c4',
        shape: 'diamond'
      }, {
        label: 'Casual',
        color: '#f7d97b',
        shape: 'wye'
      }, {
        id: 'penguin-feet',
        label: 'Barefoot',
        color: '#000000',
        shape: _images['penguin']
      }, {
        id: 'squirrel-feet',
        label: 'Barefoot',
        color: '#000000',
        shape: _images['squirrel']
      }, {
        id: 'cheetah-feet',
        label: 'Barefoot',
        color: '#000000',
        shape: _images['cheetah']
      }];

      function createLookup(data) {
        var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : unknownGVData;
        var table = data.reduce(function (result, item) {
          if (item.label) {
            result[item.label] = item;
            result[item.label.toLowerCase()] = item;
          }

          if (item.id) {
            result[item.id] = item;
          }

          return result;
        }, {});
        return (0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.lookup)(table, defaultValue);
      }

      var _Person = /*#__PURE__*/function () {
        function _Person(options) {
          _classCallCheck(this, _Person);

          this.id = options.id;
          this.icon = options.icon;
          this.age = options.age;
          this.height = options.height;
          this.opponent = options.opponent;
          this.shoes = options.shoes;
          this.zipCode = options.zipCode;
          this.state = options.state;
          this.latitude = options.latitude;
          this.longitude = options.longitude;
        }

        _createClass(_Person, [{
          key: "toJSON",
          value: function toJSON() {
            return (0, lodash__WEBPACK_IMPORTED_MODULE_0__.assignIn)({}, this);
          }
        }]);

        return _Person;
      }();

      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.map)(function (s) {
        return "".concat(s.icon);
      }))], _Person.prototype, "label", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.chain)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.access)('icon'), (0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.lookup)(_images, _images['unknown'])))], _Person.prototype, "iconShape", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.chain)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.access)('age'), _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.areaSizeScale.quantitative([0, 100])))], _Person.prototype, "ageAreaSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.chain)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.access)('height'), _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.areaSizeScale.quantitative([0, 89])))], _Person.prototype, "heightAreaSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.chain)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.access)('opponent'), createLookup(_opponents)))], _Person.prototype, "Opponent", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.chain)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.access)('shoes'), createLookup(_shoes)))], _Person.prototype, "Shoe", void 0); // The time in which the application started

      var startupTime = Date.now();
      var fixedOpponentDef = {
        areaSize: 500,
        color: '#000000',
        strokeColor: '#000000',
        pulse: true,
        transparency: 0,
        strokeTransparency: 1,
        strokeWidth: 2,
        text: 'Fixed'
      };
      var fixedRunnerDef = {
        areaSize: 250,
        color: '#DEDAD7',
        strokeColor: '#83786F',
        pulse: true,
        transparency: 0.4,
        strokeTransparency: 0.3,
        strokeWidth: 2,
        text: 'Fixed',
        shape: 'circle'
      };

      function getEndTime(date) {
        var jitter = Math.random();
        return (0, lodash__WEBPACK_IMPORTED_MODULE_0__.round)(startupTime - date.getTime() + jitter, 2);
      }

      var _Run = /*#__PURE__*/function () {
        function _Run(options) {
          _classCallCheck(this, _Run);

          var person = options.person,
              _options$highlighted = options.highlighted,
              highlighted = _options$highlighted === void 0 ? false : _options$highlighted,
              _options$selected = options.selected,
              selected = _options$selected === void 0 ? false : _options$selected,
              _options$pinned = options.pinned,
              pinned = _options$pinned === void 0 ? false : _options$pinned;
          this.id = options.id;
          this.start = options.start;
          this.end = options.end;
          this.highlighted = highlighted;
          this.selected = selected;
          this.pinned = pinned;
          this.person = person instanceof _Person ? person : new _Person(person);
        }

        _createClass(_Run, [{
          key: "toJSON",
          value: function toJSON() {
            return Object.assign((0, lodash__WEBPACK_IMPORTED_MODULE_0__.assignIn)({}, this), {
              id: this.id,
              start: this.start ? this.start.toISOString() : undefined,
              end: this.end ? this.end.toISOString() : undefined,
              person: this.person.toJSON()
            });
          }
        }]);

        return _Run;
      }();

      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.chain)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.access)('end'), (0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.map)(getEndTime)))], _Run.prototype, "endOrder", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.map)(function (r) {
        return r.selected ? '#F9E5B6' : r.pinned ? '#CCE0EA' : '';
      }))], _Run.prototype, "tableRowColor", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.map)(function (r) {
        return r.fixed.strokeColor;
      }))], _Run.prototype, "fixedStrokeColor", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.map)(function (s) {
        return s.end && s.start ? s.end.getTime() - s.start.getTime() : undefined;
      }))], _Run.prototype, "timeMillis", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.chain)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.access)('timeMillis'), (0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.map)(function (t) {
        return t ? t / 1000 : undefined;
      })))], _Run.prototype, "timeSeconds", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.chain)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.access)('timeSeconds'), (0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.map)(function (t) {
        var _a, _b;

        return (_b = (_a = t === null || t === void 0 ? void 0 : t.toFixed) === null || _a === void 0 ? void 0 : _a.call(t, 2)) !== null && _b !== void 0 ? _b : '';
      })))], _Run.prototype, "timeLabel", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.chain)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.access)('timeSeconds'), _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.areaSizeScale.quantitative([0, 10])))], _Run.prototype, "timeAreaSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.map)(function (r) {
        return r.pinned ? Object.assign({
          shape: r.person.iconShape
        }, fixedOpponentDef) : Object.assign({}, fixedRunnerDef);
      }))], _Run.prototype, "fixed", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.Operand)((0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.combine)({
        shape: (0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.access)('person.icon'),
        color: (0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.access)('fixed.color')
      }))], _Run.prototype, "persona", void 0);

      var _Message = function _Message() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _Message);

        this.type = '';
        var type = options.type,
            timestamp = options.timestamp,
            run = options.run;
        this.type = type !== null && type !== void 0 ? type : this.type;
        this.timestamp = timestamp !== null && timestamp !== void 0 ? timestamp : new Date();

        if (run) {
          this.run = run instanceof _Run ? run : new _Run(run);
        }
      };

      var _SignupStartedMessage = /*#__PURE__*/function (_Message2) {
        _inherits(_SignupStartedMessage, _Message2);

        var _super = _createSuper(_SignupStartedMessage);

        function _SignupStartedMessage() {
          var _this;

          _classCallCheck(this, _SignupStartedMessage);

          _this = _super.apply(this, arguments);
          _this.type = 'signup-started';
          return _this;
        }

        return _SignupStartedMessage;
      }(_Message);

      var _SignupFinishedMessage = /*#__PURE__*/function (_Message3) {
        _inherits(_SignupFinishedMessage, _Message3);

        var _super2 = _createSuper(_SignupFinishedMessage);

        function _SignupFinishedMessage() {
          var _this2;

          _classCallCheck(this, _SignupFinishedMessage);

          _this2 = _super2.apply(this, arguments);
          _this2.type = 'signup-finished';
          return _this2;
        }

        return _SignupFinishedMessage;
      }(_Message);

      var _RunStartedMessage = /*#__PURE__*/function (_Message4) {
        _inherits(_RunStartedMessage, _Message4);

        var _super3 = _createSuper(_RunStartedMessage);

        function _RunStartedMessage() {
          var _this3;

          _classCallCheck(this, _RunStartedMessage);

          _this3 = _super3.apply(this, arguments);
          _this3.type = 'run-started';
          return _this3;
        }

        return _RunStartedMessage;
      }(_Message);

      var _RunFinishedMessage = /*#__PURE__*/function (_Message5) {
        _inherits(_RunFinishedMessage, _Message5);

        var _super4 = _createSuper(_RunFinishedMessage);

        function _RunFinishedMessage() {
          var _this4;

          _classCallCheck(this, _RunFinishedMessage);

          _this4 = _super4.apply(this, arguments);
          _this4.type = 'run-finished';
          return _this4;
        }

        return _RunFinishedMessage;
      }(_Message);

      var GET_SETTINGS = graphql_tag__WEBPACK_IMPORTED_MODULE_17__["default"](_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query ($location: String!) {\n    Settings(location: $location) {\n      location\n      usState\n      latitude\n      longitude\n      preRunDelay\n      postRunDelay\n      startLineTimeout\n      runTimeout\n      attractDelay\n    }\n  }\n"])));
      var RECENT_RUNS = graphql_tag__WEBPACK_IMPORTED_MODULE_17__["default"](_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  query ($lastX: Int) {\n    Runs(lastX: $lastX) {\n      id\n      start\n      end\n      person {\n        id\n        icon\n        age\n        opponent\n        shoes\n        height\n        zipCode\n        state\n        latitude\n        longitude\n      }\n    }\n  }\n"])));
      var MESSAGE_SUBSCRIPTION = graphql_tag__WEBPACK_IMPORTED_MODULE_17__["default"](_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  subscription messages {\n    runMessageSubscription {\n      type\n      timestamp\n      run {\n        id\n        start\n        end\n        person {\n          id\n          icon\n          age\n          opponent\n          shoes\n          height\n          zipCode\n          state\n          latitude\n          longitude\n        }\n      }\n    }\n  }\n"])));

      function asDate(date) {
        return date ? moment__WEBPACK_IMPORTED_MODULE_1___default()(date).local().toDate() : undefined;
      }

      function asMessage(messageData) {
        var type = messageData.type,
            timestamp = messageData.timestamp,
            run = messageData.run;
        var data = {
          type: type,
          timestamp: asDate(timestamp),
          run: run
        };

        if (run) {
          run.start = asDate(run.start);
          run.end = asDate(run.end);
        }

        switch (data.type) {
          case 'signup-started':
            return new _SignupStartedMessage(data);

          case 'signup-finished':
            return new _SignupFinishedMessage(data);

          case 'run-started':
            return new _RunStartedMessage(data);

          case 'run-finished':
            return new _RunFinishedMessage(data);

          default:
            return new _Message(data);
        }
      }

      var GraphqlClient = /*#__PURE__*/function () {
        function GraphqlClient(httpEndpoint) {
          var wsEndpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : httpEndpoint;

          _classCallCheck(this, GraphqlClient);

          this.httpEndpoint = httpEndpoint;
          this.wsEndpoint = wsEndpoint;
          this.client = this.createClient();
        }

        _createClass(GraphqlClient, [{
          key: "createClient",
          value: function createClient() {
            var client = new apollo_client__WEBPACK_IMPORTED_MODULE_18__.ApolloClient({
              link: this.createLink(this.httpEndpoint, this.wsEndpoint),
              cache: this.createCache()
            });
            return client;
          }
        }, {
          key: "createLink",
          value: function createLink(httpEndpoint, wsEndpoint) {
            // FIXME: Assumes http and ws endpoints have same url, but different protocols
            if (httpEndpoint.startsWith('/')) {
              var url = new URL(httpEndpoint, window.location.href);
              httpEndpoint = url.href;
              url.protocol = url.protocol.replace('http', 'ws');
              wsEndpoint = url.href;
            } else {
              var wsUrl = new URL(wsEndpoint);

              if (wsUrl.protocol !== 'ws') {
                wsUrl.protocol = wsUrl.protocol.replace('http', 'ws');
                wsEndpoint = wsUrl.href;
              }
            } // Create an http link:


            var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_19__.HttpLink({
              uri: httpEndpoint
            }); // Create a WebSocket link:

            var wsLink = new apollo_link_ws__WEBPACK_IMPORTED_MODULE_20__.WebSocketLink({
              uri: wsEndpoint,
              options: {
                reconnect: true
              }
            }); // using the ability to split links, you can send data to each link
            // depending on what kind of operation is being sent

            var networkLink = (0, apollo_link__WEBPACK_IMPORTED_MODULE_21__.split)( // split based on operation type
            function (_ref) {
              var query = _ref.query;
              var def = (0, apollo_utilities__WEBPACK_IMPORTED_MODULE_22__.getMainDefinition)(query);
              return def.kind === 'OperationDefinition' && def.operation === 'subscription';
            }, wsLink, httpLink);
            var link = apollo_link__WEBPACK_IMPORTED_MODULE_21__.ApolloLink.from([(0, apollo_link_error__WEBPACK_IMPORTED_MODULE_23__.onError)(function (_ref2) {
              var graphQLErrors = _ref2.graphQLErrors,
                  networkError = _ref2.networkError;

              if (graphQLErrors) {
                graphQLErrors.map(function (_ref3) {
                  var message = _ref3.message,
                      locations = _ref3.locations,
                      path = _ref3.path;
                  return console.log("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
                });
              }

              if (networkError) {
                console.log("[Network error]: ".concat(networkError));
              }
            }), networkLink]);
            return link;
          }
        }, {
          key: "createCache",
          value: function createCache() {
            return new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_24__.InMemoryCache();
          }
        }]);

        return GraphqlClient;
      }();

      var LocationSettings = /*#__PURE__*/function () {
        function LocationSettings() {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, LocationSettings);

          Object.assign(this, data);
        }

        _createClass(LocationSettings, null, [{
          key: "getSettings",
          value: function getSettings(endpoint, location) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var client, results;
              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      client = new GraphqlClient(endpoint).client; // eslint-disable-next-line @typescript-eslint/naming-convention

                      _context2.next = 3;
                      return client.query({
                        query: GET_SETTINGS,
                        variables: {
                          location: location
                        }
                      });

                    case 3:
                      results = _context2.sent;
                      return _context2.abrupt("return", new LocationSettings(results.data.Settings));

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee);
            }));
          }
        }]);

        return LocationSettings;
      }();

      var opponentsMinusVistor = _opponents.filter(function (o) {
        return o.label !== 'Visitor';
      });

      var shoesMinusBarefoot = _shoes.filter(function (s) {
        return s.label !== 'Barefoot';
      });

      var usZipCodes = Object.keys(zipcodes__WEBPACK_IMPORTED_MODULE_3__.codes).map(function (c) {
        return parseInt(c, 10);
      }).filter(function (c) {
        var _a;

        return ((_a = zipcodes__WEBPACK_IMPORTED_MODULE_3__.lookup(c)) !== null && _a !== void 0 ? _a : {}).country === 'US';
      });

      function nullable(value) {
        var nullProb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .1;
        return casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().random > nullProb ? value : null;
      }

      function mockUSLocation() {
        var _a;

        return (_a = zipcodes__WEBPACK_IMPORTED_MODULE_3__.lookup(casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().random_element(usZipCodes))) !== null && _a !== void 0 ? _a : mockUSLocation()
        /* keep looking until we find a valid location */
        ;
      }

      var MockPerson = /*#__PURE__*/function (_Person2) {
        _inherits(MockPerson, _Person2);

        var _super5 = _createSuper(MockPerson);

        function MockPerson() {
          _classCallCheck(this, MockPerson);

          var location = mockUSLocation();
          return _super5.call(this, {
            id: 'person' + casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().integer(1, 500),
            icon: casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().random_element(_icons),
            age: casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().integer(0, 100),
            height: casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().integer(0, 89),
            opponent: casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().random_element(opponentsMinusVistor).label,
            shoes: casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().random_element(shoesMinusBarefoot).label,
            zipCode: nullable(location.zip),
            state: nullable(location.state),
            latitude: nullable(location.latitude),
            longitude: nullable(location.longitude)
          });
        }

        return MockPerson;
      }(_Person);

      var RunMocker = /*#__PURE__*/function () {
        function RunMocker(messages) {
          var initialFakes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          _classCallCheck(this, RunMocker);

          this.messages = messages;
          this.initialFakes = initialFakes;
          this._mocking = false;
        }

        _createClass(RunMocker, [{
          key: "send",
          value: function send(message) {
            this.messages.next(message);
          }
        }, {
          key: "mocking",
          get: function get() {
            return this._mocking;
          }
        }, {
          key: "startMocking",
          value: function startMocking() {
            var _this5 = this;

            if (!this.mocking) {
              this._mocking = true;
              setTimeout(function () {
                return _this5.sendPastRuns(_this5.initialFakes);
              }, 10);
              this.mockRace();
            }
          }
        }, {
          key: "stopMocking",
          value: function stopMocking() {
            this._mocking = false;
          }
        }, {
          key: "mockRace",
          value: function mockRace() {
            var _this6 = this;

            var runSignupTime = casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().integer(100, 300) + 1000;
            var runPressedTime = casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().integer(100, 400) + 1000;
            var runInitiatedTime = casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().integer(500, 1500) + 1000;
            var runCompletedTime = casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().integer(1000, 4000) + 1000;
            setTimeout(function () {
              _this6.runSignup();

              setTimeout(function () {
                _this6.runPressed();

                setTimeout(function () {
                  _this6.runInitiated();

                  setTimeout(function () {
                    _this6.runCompleted(runCompletedTime);

                    if (_this6.mocking) {
                      _this6.mockRace();
                    }
                  }, runCompletedTime);
                }, runInitiatedTime);
              }, runPressedTime);
            }, runSignupTime);
          }
        }, {
          key: "runSignup",
          value: function runSignup(timestamp) {
            timestamp = this.getTime(timestamp);
            var message = new _SignupStartedMessage({
              timestamp: timestamp
            });
            this.send(message);
            return message;
          }
        }, {
          key: "runPressed",
          value: function runPressed(timestamp) {
            timestamp = this.getTime(timestamp);
            var message = new _SignupFinishedMessage({
              timestamp: timestamp,
              run: this.runResults(0, timestamp)
            });
            this.send(message);
            return message;
          }
        }, {
          key: "runInitiated",
          value: function runInitiated(timestamp) {
            timestamp = this.getTime(timestamp);
            var message = new _RunStartedMessage({
              timestamp: timestamp,
              run: this.runResults(0, timestamp)
            });
            this.send(message);
            return message;
          }
        }, {
          key: "runCompleted",
          value: function runCompleted(timeMillis, timestamp) {
            timestamp = this.getTime(timestamp);
            var message = new _RunFinishedMessage({
              timestamp: timestamp,
              run: this.runResults(timeMillis, timestamp)
            });
            this.send(message);
            return message;
          }
        }, {
          key: "runResults",
          value: function runResults(timeMillis, start) {
            start = this.getTime(start);
            var end = moment__WEBPACK_IMPORTED_MODULE_1___default()(start).add(timeMillis, 'milliseconds').local().toDate();
            var person = new MockPerson();
            return new _Run({
              id: person.id + start.getTime(),
              start: start,
              end: end,
              person: person
            });
          }
        }, {
          key: "sendPastRuns",
          value: function sendPastRuns(count) {
            var _this7 = this;

            var i = 0; // Evil! Hijack send method

            var oldSend = this.send;

            this.send = function (message) {
              message.timestamp.setMinutes(i);
              oldSend.call(_this7, message);
            };

            for (; i < count; ++i) {
              this.sendFullRace();
            } // Restore send method


            delete this.send;
          }
        }, {
          key: "sendFullRace",
          value: function sendFullRace() {
            var raceCompletedTime = casual_browserify__WEBPACK_IMPORTED_MODULE_2___default().integer(1000, 4000);
            this.runSignup();
            this.runPressed();
            this.runInitiated();
            this.runCompleted(raceCompletedTime, new Date());
          }
        }, {
          key: "getTime",
          value: function getTime(timestamp) {
            return moment__WEBPACK_IMPORTED_MODULE_1___default()(timestamp !== null && timestamp !== void 0 ? timestamp : new Date()).local().toDate();
          }
        }]);

        return RunMocker;
      }();

      var MockRunRawData = /*#__PURE__*/function (_dvl_fw_core__WEBPACK) {
        _inherits(MockRunRawData, _dvl_fw_core__WEBPACK);

        var _super6 = _createSuper(MockRunRawData);

        function MockRunRawData(data) {
          _classCallCheck(this, MockRunRawData);

          return _super6.call(this, Object.assign(Object.assign({}, data), {
            data: {
              runs: MockRunRawData.generateMockRunData()
            }
          }));
        }

        _createClass(MockRunRawData, null, [{
          key: "generateMockRunData",
          value: function generateMockRunData() {
            var numMocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
            var runs = [];
            var mocker = new RunMocker({
              next: function next(message) {
                if (message instanceof _RunFinishedMessage) {
                  var run = message.run;
                  runs.push(run.toJSON());
                }
              }
            });
            mocker.sendPastRuns(numMocks);
            return runs;
          }
        }]);

        return MockRunRawData;
      }(_dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultRawData);

      var blankStyle = {
        'version': 8,
        'name': 'Blank',
        'center': [0, 0],
        'zoom': 0,
        'sources': {},
        'sprite': 'https://cdn.jsdelivr.net/gh/lukasmartinelli/osm-liberty@gh-pages/sprites/osm-liberty',
        'glyphs': 'https://cdn.jsdelivr.net/gh/orangemug/font-glyphs@gh-pages/glyphs/{fontstack}/{range}.pbf',
        'layers': [{
          'id': 'background',
          'type': 'background',
          'paint': {
            'background-color': 'rgba(255,255,255,1)'
          }
        }],
        'id': 'blank'
      };
      var symbolLookup = {
        'circle': d3_shape__WEBPACK_IMPORTED_MODULE_25__["default"],
        'cross': d3_shape__WEBPACK_IMPORTED_MODULE_26__["default"],
        'diamond': d3_shape__WEBPACK_IMPORTED_MODULE_27__["default"],
        'square': d3_shape__WEBPACK_IMPORTED_MODULE_28__["default"],
        'star': d3_shape__WEBPACK_IMPORTED_MODULE_29__["default"],
        'triangle': d3_shape__WEBPACK_IMPORTED_MODULE_30__["default"],
        'wye': d3_shape__WEBPACK_IMPORTED_MODULE_31__["default"]
      };
      var defaultSymbol = d3_shape__WEBPACK_IMPORTED_MODULE_25__["default"];
      var defaultPulseColor = '#F1BE48';

      var defaultCanvasCreator = function defaultCanvasCreator(width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
      };

      var IconConfig = /*#__PURE__*/function () {
        function IconConfig(data) {
          _classCallCheck(this, IconConfig);

          var _a, _b, _c, _d, _e, _f;

          Object.assign(this, {
            shape: data.shape,
            areaSize: (0, lodash__WEBPACK_IMPORTED_MODULE_0__.round)((_a = data.areaSize) !== null && _a !== void 0 ? _a : 0),
            color: data.color,
            transparency: data.color ? (0, lodash__WEBPACK_IMPORTED_MODULE_0__.round)((_b = data.transparency) !== null && _b !== void 0 ? _b : 0, 2) : undefined,
            strokeColor: data.strokeColor,
            strokeWidth: data.strokeColor ? (0, lodash__WEBPACK_IMPORTED_MODULE_0__.round)((_c = data.strokeWidth) !== null && _c !== void 0 ? _c : 0, 2) : undefined,
            strokeTransparency: data.strokeColor ? (0, lodash__WEBPACK_IMPORTED_MODULE_0__.round)((_d = data.strokeTransparency) !== null && _d !== void 0 ? _d : 0, 2) : undefined,
            pulse: data.pulse,
            pulseColor: data.pulse ? (_e = data.pulseColor) !== null && _e !== void 0 ? _e : defaultPulseColor : undefined,
            pulseWidth: data.pulse ? (0, lodash__WEBPACK_IMPORTED_MODULE_0__.round)((_f = data.pulseWidth) !== null && _f !== void 0 ? _f : 0, 2) || undefined : undefined
          });
        }

        _createClass(IconConfig, [{
          key: "toString",
          value: function toString() {
            return "ddi:".concat(JSON.stringify(this));
          }
        }], [{
          key: "asString",
          value: function asString(data) {
            return new IconConfig(data).toString();
          }
        }]);

        return IconConfig;
      }();

      var DataDrivenIcon = /*#__PURE__*/function () {
        function DataDrivenIcon(config) {
          var createCanvas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultCanvasCreator;

          _classCallCheck(this, DataDrivenIcon);

          this.config = config;
          this.createCanvas = createCanvas;
          var symbolDiameter = Math.sqrt(config.areaSize) * 2;
          var canvasWidth = symbolDiameter + 4; // FIXME: Remove xMacroscope specific code

          if (config.shape && !(config.shape in symbolLookup)) {
            canvasWidth *= 1.75;
          }

          if (config.strokeWidth) {
            canvasWidth += config.strokeWidth;
          }

          if (config.pulse) {
            config.pulseColor = config.pulseColor || config.strokeColor || config.color;
            config.pulseWidth = config.pulseWidth || symbolDiameter * 2;
            canvasWidth += config.pulseWidth * 3;
          }

          var canvas = this.canvas = this.createCanvas(canvasWidth, canvasWidth);
          this.context = canvas.getContext('2d');
          this.render();
        }

        _createClass(DataDrivenIcon, [{
          key: "isAnimated",
          get: function get() {
            return this.config.pulse || this.hasImageShape && !this.imageSent;
          }
        }, {
          key: "hasImageShape",
          get: function get() {
            var shape = this.config.shape;
            return shape.startsWith('data:') || shape.startsWith('http');
          }
        }, {
          key: "render",
          value: function render() {
            var _this8 = this;

            var _a, _b;

            var config = this.config,
                canvas = this.canvas,
                context = this.context,
                hasImageShape = this.hasImageShape;

            if (!hasImageShape || config.pulse) {
              context.clearRect(0, 0, canvas.width, canvas.height);
            }

            context.save();
            context.translate(canvas.width / 2, canvas.height / 2);
            context.beginPath();
            var shape = (_a = symbolLookup[config.shape]) !== null && _a !== void 0 ? _a : defaultSymbol;
            shape.draw(context, config.areaSize);

            if (config.pulse) {
              var duration = 2000;
              var tick = performance.now() % duration / duration;
              context.strokeStyle = config.pulseColor;
              context.fillStyle = config.pulseColor;
              context.lineWidth = ((_b = config.strokeWidth) !== null && _b !== void 0 ? _b : 0) + config.pulseWidth * tick;
              context.globalAlpha = 1 - tick;
              context.fill();
              context.stroke();
            }

            if (hasImageShape) {
              if (this.imageDrawn) {
                setTimeout(function () {
                  return _this8.imageSent = true;
                }, 10);
              } else {
                var symbolRadius = Math.sqrt(config.areaSize) * 1.75; // FIXME: Remove xMacroscope specific code

                var x = canvas.width / 2 - symbolRadius,
                    y = canvas.height / 2 - symbolRadius,
                    w = symbolRadius * 2,
                    h = symbolRadius * 2;
                var image = new Image();
                this.imageDrawn = false;
                this.imageSent = false;

                image.onload = function () {
                  context.save();
                  context.globalCompositeOperation = 'source-over';
                  /* FIXME: Uncomment to remove xMacroscope specific code
                  if (config.color) {
                    // Draw a color rect
                    context.fillStyle = config.color;
                    context.globalAlpha = 1 - config.transparency;
                    context.beginPath();
                    context.rect(0, 0, canvas.width, canvas.height);
                    context.fill();
                               context.globalCompositeOperation = 'destination-in';
                  }
                  */

                  context.globalAlpha = 1;
                  context.drawImage(image, x, y, w, h);

                  if (config.strokeColor) {
                    context.globalCompositeOperation = 'source-over';
                    var sw = config.strokeWidth;
                    context.strokeStyle = config.strokeColor;
                    context.globalAlpha = 1 - config.strokeTransparency;
                    context.beginPath();
                    context.rect(x - sw, y - sw, w + 2 * sw, h + 2 * sw);
                    context.stroke();
                  }

                  _this8.imageDrawn = true;
                  context.restore();
                };

                image.src = config.shape;
              }
            } else {
              if (config.color) {
                context.fillStyle = config.color;
                context.globalAlpha = 1 - config.transparency;
                context.fill();
              }

              if (config.strokeColor) {
                context.strokeStyle = config.strokeColor;
                context.lineWidth = config.strokeWidth;
                context.globalAlpha = 1 - config.strokeTransparency;
                context.stroke();
              }
            }

            context.restore();
            return this.isAnimated;
          }
        }, {
          key: "getImageData",
          value: function getImageData() {
            return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
          }
        }, {
          key: "toDataUrl",
          value: function toDataUrl() {
            return this.canvas.toDataURL();
          }
        }], [{
          key: "fromString",
          value: function fromString(icon) {
            var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ddi:';
            var createCanvas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultCanvasCreator;

            if (icon.startsWith(prefix)) {
              var config = JSON.parse(icon.slice(prefix.length));
              return new DataDrivenIcon(config, createCanvas);
            }

            return undefined;
          }
        }]);

        return DataDrivenIcon;
      }();

      var DataDrivenIcons = /*#__PURE__*/function () {
        function DataDrivenIcons() {
          var createCanvas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultCanvasCreator;

          _classCallCheck(this, DataDrivenIcons);

          this.createCanvas = createCanvas;
          this.prefix = 'ddi:';
        }

        _createClass(DataDrivenIcons, [{
          key: "addTo",
          value: function addTo(map) {
            var _this9 = this;

            this.map = map;
            map.on('styleimagemissing', function (e) {
              var id = e.id; // id of the missing image

              if (id.indexOf(_this9.prefix) === 0) {
                var config = JSON.parse(id.slice(_this9.prefix.length));

                _this9.addImage(id, config);
              }
            });
            return map;
          }
        }, {
          key: "addImage",
          value: function addImage(id, config) {
            var map = this.map;
            var icon = new DataDrivenIcon(config, this.createCanvas);

            if (icon.isAnimated) {
              map.addImage(id, this.asAnimatedImage(icon), {
                pixelRatio: 2
              });
            } else {
              map.addImage(id, icon.getImageData());
            }
          }
        }, {
          key: "asAnimatedImage",
          value: function asAnimatedImage(icon) {
            var map = this.map;
            return {
              width: icon.canvas.width,
              height: icon.canvas.height,
              data: icon.getImageData().data,
              render: function render() {
                var doRepaint = icon.render();
                this.data = icon.getImageData().data;

                if (doRepaint) {
                  map.triggerRepaint();
                }

                return doRepaint;
              }
            };
          }
        }]);

        return DataDrivenIcons;
      }();
      /**
       * Given a bounding box to be stretched and another bounding box,
       * stretches the first bounding box to have the same aspect ratio as the
       * second such that the content of the first bounding box is centered.
       *
       * @param bounds A bounding box to be stretched
       * @param aspectBounds A bounding box with an aspect ratio to match
       */


      function fitBoundsToAspectRatio(bounds, aspectBounds) {
        var W = aspectBounds[2] - aspectBounds[0],
            H = aspectBounds[3] - aspectBounds[1];
        var w = bounds[2] - bounds[0],
            h = bounds[3] - bounds[1];

        var _bounds = _slicedToArray(bounds, 4),
            minX = _bounds[0],
            minY = _bounds[1],
            maxX = _bounds[2],
            maxY = _bounds[3];

        var x = (W * h - w * H) / (2 * H);

        if (x < 0) {
          var y = -(H / W) * x;
          return [minX, minY - y, maxX, maxY + y];
        } else {
          return [minX - x, minY, maxX + x, maxY];
        }
      }

      var GraphicSymbolData = /*#__PURE__*/function () {
        function GraphicSymbolData(dataProcessorCreator, visualization, graphicSymbol) {
          var _this10 = this;

          var defaultValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var postprocessingFields = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

          _classCallCheck(this, GraphicSymbolData);

          var _a, _b, _c;

          this.dataProcessorCreator = dataProcessorCreator;
          this.visualization = visualization;
          this.defaultValues = defaultValues;
          this.postprocessingFields = postprocessingFields;
          this.requiredFields = ['identifier'];

          if ((0, lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(graphicSymbol)) {
            this.graphicSymbol = visualization.graphicSymbols[graphicSymbol];

            if (!this.graphicSymbol) {
              throw new Error("'Graphic Symbol ".concat(graphicSymbol, " not found in Visualization ").concat(visualization.id));
            }
          } else {
            this.graphicSymbol = graphicSymbol;
          }

          var options = (_c = (_b = (_a = visualization.graphicSymbolOptions) === null || _a === void 0 ? void 0 : _a.filter) === null || _b === void 0 ? void 0 : _b.call(_a, function (gso) {
            return gso.id === _this10.graphicSymbol.id;
          })) !== null && _c !== void 0 ? _c : [];

          if (options.length) {
            this.requiredFields = options[0].graphicVariableOptions.filter(function (gvo) {
              return gvo.required === true;
            }).map(function (gvo) {
              var _a;

              return (_a = gvo.id) !== null && _a !== void 0 ? _a : gvo.type;
            });
          }

          if (this.requiredFields.indexOf('identifier') === -1) {
            this.requiredFields.push('identifier');
          }
        }

        _createClass(GraphicSymbolData, [{
          key: "asRawChangeSet",
          value: function asRawChangeSet() {
            var gvNames = Object.keys(this.graphicSymbol.graphicVariables);
            var inValid = this.requiredFields.some(function (f) {
              return gvNames.indexOf(f) === -1;
            });

            if (inValid) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_32__.of)(_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.RawChangeSet.fromArray([]));
            } else {
              return this.graphicSymbol.recordStream.asObservable();
            }
          }
        }, {
          key: "asChangeSet",
          value: function asChangeSet() {
            return this.createProcessor().asObservable();
          }
        }, {
          key: "asDataArray",
          value: function asDataArray() {
            var _this11 = this;

            var data = [];
            return this.asChangeSet().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.map)(function (set) {
              data = _this11.applyChangeSet(set, data);
              return data;
            }));
          }
        }, {
          key: "createProcessor",
          value: function createProcessor() {
            var graphicSymbol = this.graphicSymbol,
                defaultValues = this.defaultValues;
            return this.dataProcessorCreator.createProcessor(this.asRawChangeSet(), graphicSymbol.graphicVariables['identifier'].asBoundField(), this.graphicSymbolBoundFields(graphicSymbol, defaultValues), this.postprocessingFields, {
              strictMode: false,
              keepAlive: true
            });
          }
        }, {
          key: "applyChangeSet",
          value: function applyChangeSet(set, data) {
            var result = (0, lodash__WEBPACK_IMPORTED_MODULE_0__.differenceBy)(data, set.remove.toArray(), set.replace.toArray(), _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.idSymbol);
            set.insert.forEach(function (item) {
              return result.push(item);
            });
            set.replace.forEach(function (item) {
              return result.push(item);
            });
            return result;
          }
        }, {
          key: "graphicSymbolBoundFields",
          value: function graphicSymbolBoundFields(graphicSymbol) {
            var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return (0, lodash__WEBPACK_IMPORTED_MODULE_0__.transform)(graphicSymbol.graphicVariables, function (result, gv, k) {
              result[k] = gv.asBoundField();
            }, (0, lodash__WEBPACK_IMPORTED_MODULE_0__.transform)(defaults, function (results, v, k) {
              results[k] = (0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.simpleField)({
                label: k,
                bfieldId: k,
                operator: (0, _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.constant)(v)
              }).getBoundField();
            }, {}));
          }
        }]);

        return GraphicSymbolData;
      }(); // Adapted from https://github.com/dereklieu/cool-grid/blob/master/index.js


      function graticule(interval) {
        interval = +interval || 20;
        var features = [];

        for (var lng = 0; lng <= 180; lng += interval) {
          features.push((0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.lineString)(makeMeridian(lng), {
            type: 'grid-line-x',
            label: lng ? lng.toString() + '°' : 'Prime meridian'
          }));

          if (lng !== 0) {
            features.push((0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.lineString)(makeMeridian(-lng), {
              type: 'grid-line-x',
              label: lng.toString() + '°'
            }));
          }
        }

        for (var lat = 0; lat <= 90; lat += interval) {
          features.push((0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.lineString)(makeParallel(lat), {
            type: 'grid-line-y',
            label: lat ? lat.toString() + '°' : 'Equator'
          }));

          if (lat !== 0) {
            features.push((0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.lineString)(makeParallel(-lat), {
              type: 'grid-line-y',
              label: lat.toString() + '°'
            }));
          }
        }

        return (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.featureCollection)(features);
      }

      function makeMeridian(lng) {
        lng = lngFix(lng);
        var coords = [];

        for (var lat = -90; lat <= 90; lat += 1) {
          coords.push([lng, lat]);
        }

        return coords;
      }

      function makeParallel(lat) {
        var coords = [];

        for (var lng = -180; lng <= 180; lng += 1) {
          coords.push([lngFix(lng), lat]);
        }

        return coords;
      }

      function lngFix(lng) {
        if (lng >= 180) {
          return 179.999999;
        }

        if (lng <= -180) {
          return -179.999999;
        }

        return lng;
      }

      function latFix(lat) {
        if (lat >= 90) {
          return 89.999999;
        }

        if (lat <= -90) {
          return -89.999999;
        }

        return lat;
      }

      function withAxes(geojson) {
        var xAxisLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Longitude (degrees)';
        var yAxisLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Latitude (degrees)';

        var _a;

        var _ref4 = (0, _turf_bbox__WEBPACK_IMPORTED_MODULE_4__["default"])(geojson),
            _ref5 = _slicedToArray(_ref4, 4),
            minX = _ref5[0],
            minY = _ref5[1],
            maxX = _ref5[2],
            maxY = _ref5[3];

        var axisLineX = (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.lineString)([[minX, minY], [minX, maxY]], {
          type: 'axis-line',
          label: 'X Axis'
        });
        var axisLineY = (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.lineString)([[minX, minY], [maxX, minY]], {
          type: 'axis-line',
          label: 'Y Axis'
        });
        var xTicks = geojson.features.filter(function (f) {
          var _a;

          return ((_a = f.properties) === null || _a === void 0 ? void 0 : _a.type) === 'grid-line-x';
        }).map(function (f) {
          var _a;

          var points = (0, _turf_line_intersect__WEBPACK_IMPORTED_MODULE_10__["default"])(axisLineY, f);

          if (points.features.length > 0) {
            var axisPoint = points.features[0].geometry.coordinates;
            return {
              point: axisPoint[0],
              label: (_a = f.properties) === null || _a === void 0 ? void 0 : _a.label
            };
          }
        }).filter(function (f) {
          return !!f;
        }).map(function (t) {
          var _a;

          return (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.point)([(_a = t === null || t === void 0 ? void 0 : t.point) !== null && _a !== void 0 ? _a : 0, minY], {
            type: 'tick-label-x',
            label: t === null || t === void 0 ? void 0 : t.label
          });
        });
        var yTicks = geojson.features.filter(function (f) {
          var _a;

          return ((_a = f.properties) === null || _a === void 0 ? void 0 : _a.type) === 'grid-line-y';
        }).map(function (f) {
          var _a;

          var points = (0, _turf_line_intersect__WEBPACK_IMPORTED_MODULE_10__["default"])(axisLineX, f);

          if (points.features.length > 0) {
            var axisPoint = points.features[0].geometry.coordinates;
            return {
              point: axisPoint[1],
              label: (_a = f.properties) === null || _a === void 0 ? void 0 : _a.label
            };
          }
        }).filter(function (f) {
          return !!f;
        }).map(function (t) {
          var _a;

          return (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.point)([minX, (_a = t === null || t === void 0 ? void 0 : t.point) !== null && _a !== void 0 ? _a : 0], {
            type: 'tick-label-y',
            label: t === null || t === void 0 ? void 0 : t.label
          });
        });
        var maxYLabelLength = (_a = (0, d3_array__WEBPACK_IMPORTED_MODULE_34__["default"])(yTicks, function (d) {
          var _a, _b;

          return (_b = (_a = d.properties.label) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        })) !== null && _a !== void 0 ? _a : 0;
        var features = geojson.features.concat([(0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.lineString)([[maxX, minY], [maxX, maxY]], {
          type: 'grid-line-x',
          label: 'X Axis'
        }), (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.lineString)([[minX, maxY], [maxX, maxY]], {
          type: 'grid-line-y',
          label: 'Y Axis'
        }), axisLineX, axisLineY].concat(_toConsumableArray(xTicks), _toConsumableArray(yTicks), [(0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.point)([(minX + maxX) / 2, minY], {
          type: 'axis-label-x',
          label: xAxisLabel || ''
        }), (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.point)([minX, (minY + maxY) / 2], {
          type: 'axis-label-y',
          label: yAxisLabel || '',
          maxYLabelLength: maxYLabelLength
        }), (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.point)([minX, minY], {
          type: 'axis-line-label-x',
          label: 'X Axis'
        }), (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.point)([minX, minY], {
          type: 'axis-line-label-y',
          label: 'Y Axis'
        }), (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.point)([maxX, minY], {
          type: 'axis-line-arrow-x',
          label: '>'
        }), (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.point)([minX, maxY], {
          type: 'axis-line-arrow-y',
          label: '>'
        } // 1→2⇒3⇛4⇢5⇨6⇾7⟶8⟹9⤍10⤏11⤑12⭢13⭬14⮕15⮚16⮞17⯈18
        )]));
        return {
          geojson: (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.featureCollection)(features),
          padding: {
            top: 8,
            right: 8,
            left: maxYLabelLength * 8 + 24,
            bottom: 88
          }
        };
      }

      function nodesGeoJson(nodes, projection) {
        return (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.featureCollection)(nodes.map(function (node) {
          var _a2;

          var _a, _b, _c, _d, _e;

          var position = node.position,
              longitude = node.longitude,
              latitude = node.latitude;
          var projectedLngLat = position && ((_a = projection === null || projection === void 0 ? void 0 : projection.toLngLat) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [projection].concat(_toConsumableArray(position))));
          var coords = [(_c = (_b = projectedLngLat === null || projectedLngLat === void 0 ? void 0 : projectedLngLat.lng) !== null && _b !== void 0 ? _b : longitude) !== null && _c !== void 0 ? _c : 0, (_e = (_d = projectedLngLat === null || projectedLngLat === void 0 ? void 0 : projectedLngLat.lat) !== null && _d !== void 0 ? _d : latitude) !== null && _e !== void 0 ? _e : 0];
          return (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.point)(coords, Object.assign({
            icon: IconConfig.asString(node)
          }, (0, lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(node, [_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.idSymbol, 'areaSize', 'tooltip', 'label', 'labelPosition'])), {
            id: node[_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.idSymbol]
          });
        }));
      } // eslint-disable-next-line @typescript-eslint/ban-ts-comment


      function reprojector(projection, geojson) {
        var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'mercator';
        var newFeatures = [];

        var _iterator = _createForOfIteratorHelper(geojson.features),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var feature = _step.value;
            feature.geometry = dirty_reprojectors__WEBPACK_IMPORTED_MODULE_11___default()({
              forward: projection,
              reverse: reverse,
              projections: dirty_reprojectors_projections__WEBPACK_IMPORTED_MODULE_12___default()
            }, feature.geometry);

            if (feature.geometry) {
              newFeatures.push(feature);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        geojson.features = newFeatures;
        return geojson;
      }

      var usNameLookup = {
        '04': 'Arizona',
        '22': 'Louisiana',
        '16': 'Idaho',
        '27': 'Minnesota',
        '38': 'North Dakota',
        '46': 'South Dakota',
        '36': 'New York',
        '02': 'Alaska',
        '13': 'Georgia',
        '18': 'Indiana',
        '26': 'Michigan',
        '28': 'Mississippi',
        '39': 'Ohio',
        '48': 'Texas',
        '31': 'Nebraska',
        '08': 'Colorado',
        '24': 'Maryland',
        '20': 'Kansas',
        '17': 'Illinois',
        '55': 'Wisconsin',
        '06': 'California',
        '19': 'Iowa',
        '42': 'Pennsylvania',
        '30': 'Montana',
        '29': 'Missouri',
        '12': 'Florida',
        '21': 'Kentucky',
        '23': 'Maine',
        '49': 'Utah',
        '40': 'Oklahoma',
        '47': 'Tennessee',
        '41': 'Oregon',
        '54': 'West Virginia',
        '05': 'Arkansas',
        '53': 'Washington',
        '37': 'North Carolina',
        '51': 'Virginia',
        '56': 'Wyoming',
        '01': 'Alabama',
        '45': 'South Carolina',
        '35': 'New Mexico',
        '33': 'New Hampshire',
        '50': 'Vermont',
        '32': 'Nevada',
        '15': 'Hawaii',
        '25': 'Massachusetts',
        '44': 'Rhode Island',
        '34': 'New Jersey',
        '10': 'Delaware',
        '09': 'Connecticut',
        '11': 'District of Columbia'
      };
      var usTopoJson = {
        'type': 'Topology',
        'bbox': [-179.14733999999999, -14.552548999999999, 179.77847, 71.352561],
        'transform': {
          'scale': [0.003589293992939929, 0.0008590596905969058],
          'translate': [-179.14733999999999, -14.552548999999999]
        },
        'objects': {
          'counties': {
            'type': 'GeometryCollection',
            'geometries': [{
              'type': 'Polygon',
              'arcs': [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
              'id': '04015'
            }, {
              'type': 'Polygon',
              'arcs': [[12, 13, 14, 15, 16, 17, 18]],
              'id': '22105'
            }, {
              'type': 'Polygon',
              'arcs': [[19, 20, 21, 22, 23]],
              'id': '16063'
            }, {
              'type': 'Polygon',
              'arcs': [[24, 25, 26, 27, 28, 29, 30, 31, 32]],
              'id': '27119'
            }, {
              'type': 'Polygon',
              'arcs': [[33, 34, 35, 36, 37, 38, 39]],
              'id': '38017'
            }, {
              'type': 'Polygon',
              'arcs': [[40, 41, 42, 43, 44]],
              'id': '46081'
            }, {
              'type': 'Polygon',
              'arcs': [[45, 46, 47, 48, 49, 50]],
              'id': '36095'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[51]], [[52]], [[53]], [[54, 55, 56, 57]], [[58]], [[59]]],
              'id': '02275'
            }, {
              'type': 'Polygon',
              'arcs': [[60, 61, 62, 63]],
              'id': '13143'
            }, {
              'type': 'Polygon',
              'arcs': [[64, 65, 66, 67, 68]],
              'id': '13023'
            }, {
              'type': 'Polygon',
              'arcs': [[69, 70, 71, 72, 73, 74]],
              'id': '18093'
            }, {
              'type': 'Polygon',
              'arcs': [[75, 76, 77, 78, 79, 80]],
              'id': '18079'
            }, {
              'type': 'Polygon',
              'arcs': [[81, 82, 83, 84, 85, 86]],
              'id': '26087'
            }, {
              'type': 'Polygon',
              'arcs': [[87, 88, 89, 90, 91, 92]],
              'id': '28017'
            }, {
              'type': 'Polygon',
              'arcs': [[93, 94, 95, 96, 97, 98]],
              'id': '39033'
            }, {
              'type': 'Polygon',
              'arcs': [[99, 100, 101, 102, 103, 104, 105]],
              'id': '46099'
            }, {
              'type': 'Polygon',
              'arcs': [[106, -105, 107, 108, 109, 110]],
              'id': '46125'
            }, {
              'type': 'Polygon',
              'arcs': [[111, 112, 113, 114, 115, 116]],
              'id': '48471'
            }, {
              'type': 'Polygon',
              'arcs': [[117, 118, 119, 120]],
              'id': '72133'
            }, {
              'type': 'Polygon',
              'arcs': [[121, 122, 123, 124, 125, 126]],
              'id': '46003'
            }, {
              'type': 'Polygon',
              'arcs': [[127, 128, 129, 130, 131, 132, 133]],
              'id': '48047'
            }, {
              'type': 'Polygon',
              'arcs': [[134, 135, 136, 137, 138, 139, 140]],
              'id': '72025'
            }, {
              'type': 'Polygon',
              'arcs': [[141, 142, 143, 144, 145]],
              'id': '72033'
            }, {
              'type': 'Polygon',
              'arcs': [[146, 147, 148, 149, 150, 151]],
              'id': '72101'
            }, {
              'type': 'Polygon',
              'arcs': [[152, 153, 154, 155, 156]],
              'id': '31029'
            }, {
              'type': 'Polygon',
              'arcs': [[157, 158, 159, 160]],
              'id': '72054'
            }, {
              'type': 'Polygon',
              'arcs': [[161, 162, 163, 164, 165, 166]],
              'id': '08021'
            }, {
              'type': 'Polygon',
              'arcs': [[167, 168, 169, 170, 171, 172, 173, 174]],
              'id': '24043'
            }, {
              'type': 'Polygon',
              'arcs': [[175, 176, 177, 178, 179]],
              'id': '20137'
            }, {
              'type': 'Polygon',
              'arcs': [[180, 181, 182, 183, 184, 185]],
              'id': '17053'
            }, {
              'type': 'Polygon',
              'arcs': [[186, 187, 188, 189, 190, 191]],
              'id': '48117'
            }, {
              'type': 'Polygon',
              'arcs': [[192, 193, 194, 195, 196, 197, 198, 199]],
              'id': '13261'
            }, {
              'type': 'Polygon',
              'arcs': [[200, 201, 202, 203, 204, 205, 206, 207]],
              'id': '55075'
            }, {
              'type': 'Polygon',
              'arcs': [[208, 209, 210, 211, 212, 213, 214]],
              'id': '06069'
            }, {
              'type': 'Polygon',
              'arcs': [[215, 216, 217, 218, 219, 220, 221]],
              'id': '13199'
            }, {
              'type': 'Polygon',
              'arcs': [[222, 223, 224, 225, 226, 227]],
              'id': '19013'
            }, {
              'type': 'Polygon',
              'arcs': [[228, 229, 230, 231]],
              'id': '19081'
            }, {
              'type': 'Polygon',
              'arcs': [[232, -27]],
              'id': '27125'
            }, {
              'type': 'Polygon',
              'arcs': [[233, 234, 235, 236, 237]],
              'id': '31125'
            }, {
              'type': 'Polygon',
              'arcs': [[238, 239, 240, 241]],
              'id': '42075'
            }, {
              'type': 'Polygon',
              'arcs': [[242, 243, 244, 245]],
              'id': '48219'
            }, {
              'type': 'Polygon',
              'arcs': [[246, 247, 248, 249, 250, 251]],
              'id': '48417'
            }, {
              'type': 'Polygon',
              'arcs': [[252, 253, 254, 255, 256, 257, 258]],
              'id': '48451'
            }, {
              'type': 'Polygon',
              'arcs': [[259, 260, 261, 262, 263, 264]],
              'id': '48497'
            }, {
              'type': 'Polygon',
              'arcs': [[265, 266, 267, -100, 268, 269]],
              'id': '46079'
            }, {
              'type': 'Polygon',
              'arcs': [[270, 271, 272, 273, 274, 275, 276]],
              'id': '46069'
            }, {
              'type': 'Polygon',
              'arcs': [[277, 278, 279, 280, 281, 282]],
              'id': '48101'
            }, {
              'type': 'Polygon',
              'arcs': [[283, 284, 285]],
              'id': '04023'
            }, {
              'type': 'Polygon',
              'arcs': [[286, 287, 288, 289, 290]],
              'id': '19179'
            }, {
              'type': 'Polygon',
              'arcs': [[291, 292, 293, 294, 295, 296]],
              'id': '19031'
            }, {
              'type': 'Polygon',
              'arcs': [[297, 298, 299, 300, 301, 302, 303, 304, 305]],
              'id': '30033'
            }, {
              'type': 'Polygon',
              'arcs': [[306, 307, 308, 309, 310, 311, 312]],
              'id': '29185'
            }, {
              'type': 'Polygon',
              'arcs': [[313, 314, 315, 316, 317]],
              'id': '12091'
            }, {
              'type': 'Polygon',
              'arcs': [[318, 319, 320, 321, 322]],
              'id': '21219'
            }, {
              'type': 'Polygon',
              'arcs': [[323, 324, 325, 326, 327]],
              'id': '23003'
            }, {
              'type': 'Polygon',
              'arcs': [[328, 329, 330, -175, 331, 332, 333, 334]],
              'id': '24001'
            }, {
              'type': 'Polygon',
              'arcs': [[335, 336, 337, 338, 339]],
              'id': '28075'
            }, {
              'type': 'Polygon',
              'arcs': [[340, 341, 342, 343, 344, 345]],
              'id': '38021'
            }, {
              'type': 'Polygon',
              'arcs': [[346, 347, 348, 349, 350]],
              'id': '27093'
            }, {
              'type': 'Polygon',
              'arcs': [[351, 352, 353, 354]],
              'id': '46007'
            }, {
              'type': 'Polygon',
              'arcs': [[355, 356, 357, 358, 359, 360, 361, 362]],
              'id': '49043'
            }, {
              'type': 'Polygon',
              'arcs': [[363, 364, 365, 366, 367, 368]],
              'id': '36099'
            }, {
              'type': 'Polygon',
              'arcs': [[369, 370, 371, 372, 373, 374, 375]],
              'id': '20073'
            }, {
              'type': 'Polygon',
              'arcs': [[376, 377, 378, 379]],
              'id': '20101'
            }, {
              'type': 'Polygon',
              'arcs': [[380, 381, 382, 383, 384, 385]],
              'id': '26123'
            }, {
              'type': 'Polygon',
              'arcs': [[386, 387, 388, 389, 390]],
              'id': '31035'
            }, {
              'type': 'Polygon',
              'arcs': [[391, 392, 393, 394]],
              'id': '36073'
            }, {
              'type': 'Polygon',
              'arcs': [[395, 396, 397, 398, 399, 400, 401]],
              'id': '38063'
            }, {
              'type': 'Polygon',
              'arcs': [[402, 403, 404, 405, 406, 407]],
              'id': '40011'
            }, {
              'type': 'Polygon',
              'arcs': [[408, 409, 410, 411, 412]],
              'id': '48441'
            }, {
              'type': 'Polygon',
              'arcs': [[413, 414, 415, 416, 417]],
              'id': '48011'
            }, {
              'type': 'Polygon',
              'arcs': [[418, 419, 420, 421]],
              'id': '48233'
            }, {
              'type': 'Polygon',
              'arcs': [[-258, 422, 423, 424]],
              'id': '48235'
            }, {
              'type': 'Polygon',
              'arcs': [[425, 426, 427, 428, 429, 430]],
              'id': '55137'
            }, {
              'type': 'Polygon',
              'arcs': [[431, 432, 433, 434, 435, 436, 437]],
              'id': '47151'
            }, {
              'type': 'Polygon',
              'arcs': [[438, 439, 440, 441, 442]],
              'id': '55113'
            }, {
              'type': 'Polygon',
              'arcs': [[443, 444, 445, 446, 447]],
              'id': '26073'
            }, {
              'type': 'Polygon',
              'arcs': [[448, 449, 450, 451, 452, 453]],
              'id': '28131'
            }, {
              'type': 'Polygon',
              'arcs': [[454, 455, -93, 456, 457, 458]],
              'id': '28013'
            }, {
              'type': 'Polygon',
              'arcs': [[459, 460, 461, 462, 463]],
              'id': '31171'
            }, {
              'type': 'Polygon',
              'arcs': [[464, 465, 466, 467, 468, 469]],
              'id': '48335'
            }, {
              'type': 'Polygon',
              'arcs': [[470, 471, 472, 473, 474]],
              'id': '08057'
            }, {
              'type': 'Polygon',
              'arcs': [[475, 476, 477, 478, 479]],
              'id': '19089'
            }, {
              'type': 'Polygon',
              'arcs': [[480, 481, 482, 483, -82]],
              'id': '26151'
            }, {
              'type': 'Polygon',
              'arcs': [[484, 485, 486, 487, 488, 489, 490]],
              'id': '18075'
            }, {
              'type': 'Polygon',
              'arcs': [[491, 492, 493, 494, 495]],
              'id': '38075'
            }, {
              'type': 'Polygon',
              'arcs': [[496, 497, 498, 499, 500]],
              'id': '41021'
            }, {
              'type': 'Polygon',
              'arcs': [[501, 502, 503, 504, 505]],
              'id': '29119'
            }, {
              'type': 'Polygon',
              'arcs': [[506, 507, 508, 509]],
              'id': '48501'
            }, {
              'type': 'Polygon',
              'arcs': [[510, 511, 512, -279, 513]],
              'id': '48075'
            }, {
              'type': 'Polygon',
              'arcs': [[514, 515, 516, 517]],
              'id': '13097'
            }, {
              'type': 'Polygon',
              'arcs': [[518, 519, 520, 521]],
              'id': '02158'
            }, {
              'type': 'Polygon',
              'arcs': [[522, 523, 524, 525, 526]],
              'id': '19181'
            }, {
              'type': 'Polygon',
              'arcs': [[527, 528, 529, 530, 531, 532]],
              'id': '40031'
            }, {
              'type': 'Polygon',
              'arcs': [[533, 534, 535, 536, 537, 538, 539, 540]],
              'id': '40009'
            }, {
              'type': 'Polygon',
              'arcs': [[-274, 541, 542, 543, 544]],
              'id': '46017'
            }, {
              'type': 'Polygon',
              'arcs': [[545, 546, 547, 548, 549, 550]],
              'id': '48171'
            }, {
              'type': 'Polygon',
              'arcs': [[551, 552, 553, 554]],
              'id': '48125'
            }, {
              'type': 'Polygon',
              'arcs': [[555, 556, 557, 558, 559]],
              'id': '48283'
            }, {
              'type': 'Polygon',
              'arcs': [[560, 561, 562, 563]],
              'id': '54093'
            }, {
              'type': 'Polygon',
              'arcs': [[564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575]],
              'id': '06089'
            }, {
              'type': 'Polygon',
              'arcs': [[576, 577, 578, 579, 580, 581]],
              'id': '17165'
            }, {
              'type': 'Polygon',
              'arcs': [[582, 583, 584, 585, 586]],
              'id': '26101'
            }, {
              'type': 'Polygon',
              'arcs': [[587, 588, 589, 590, 591]],
              'id': '31071'
            }, {
              'type': 'Polygon',
              'arcs': [[592, 593, -591, 594, 595, 596, 597, 598, 599]],
              'id': '31041'
            }, {
              'type': 'Polygon',
              'arcs': [[600, -270, 601, 602, 603]],
              'id': '46097'
            }, {
              'type': 'Polygon',
              'arcs': [[604, 605, 606, 607, 608, 609]],
              'id': '46025'
            }, {
              'type': 'Polygon',
              'arcs': [[610, 611, 612, 613, 614]],
              'id': '05037'
            }, {
              'type': 'Polygon',
              'arcs': [[615, 616, 617, -167, 618, 619, 620]],
              'id': '08007'
            }, {
              'type': 'Polygon',
              'arcs': [[621, 622, 623, 624]],
              'id': '12043'
            }, {
              'type': 'Polygon',
              'arcs': [[625, 626, 627, 628, 629]],
              'id': '46053'
            }, {
              'type': 'Polygon',
              'arcs': [[630, 631, 632, -419, 633]],
              'id': '48195'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[634, 635, 636, 637, 638]], [[639, 640, 641]]],
              'id': '53053'
            }, {
              'type': 'Polygon',
              'arcs': [[642, 643, 644, -216, 645, 646, 647]],
              'id': '13077'
            }, {
              'type': 'Polygon',
              'arcs': [[648, 649, 650, 651]],
              'id': '13059'
            }, {
              'type': 'Polygon',
              'arcs': [[652, 653, 654, 655, 656]],
              'id': '18081'
            }, {
              'type': 'Polygon',
              'arcs': [[657, 658, 659, 660, 661, 662]],
              'id': '20115'
            }, {
              'type': 'Polygon',
              'arcs': [[663, 664, 665, 666, 667]],
              'id': '27059'
            }, {
              'type': 'Polygon',
              'arcs': [[668, 669, 670, 671, 672, 673]],
              'id': '31003'
            }, {
              'type': 'Polygon',
              'arcs': [[674, 675, 676, 677, 678]],
              'id': '39103'
            }, {
              'type': 'Polygon',
              'arcs': [[679, 680, 681, 682, 683, 684]],
              'id': '47153'
            }, {
              'type': 'Polygon',
              'arcs': [[685, 686, 687, 688]],
              'id': '48375'
            }, {
              'type': 'Polygon',
              'arcs': [[689, 690, 691, 692, 693]],
              'id': '48145'
            }, {
              'type': 'Polygon',
              'arcs': [[-399, 694, 695, 696, 697, 698]],
              'id': '38039'
            }, {
              'type': 'Polygon',
              'arcs': [[-125, 699, 700, 701]],
              'id': '46043'
            }, {
              'type': 'Polygon',
              'arcs': [[702, 703, 704, 705, 706, 707]],
              'id': '48193'
            }, {
              'type': 'Polygon',
              'arcs': [[708, 709, 710, 711, 712]],
              'id': '19185'
            }, {
              'type': 'Polygon',
              'arcs': [[713, 714, 715, 716, 717, 718, 719]],
              'id': '38087'
            }, {
              'type': 'Polygon',
              'arcs': [[720, -412, 721, 722, -255, 723]],
              'id': '48399'
            }, {
              'type': 'Polygon',
              'arcs': [[6, -6, 4, -4, 724, 725, 726, 727, 728, -8]],
              'id': '04005'
            }, {
              'type': 'Polygon',
              'arcs': [[729, 730, 731, 732, 733]],
              'id': '16009'
            }, {
              'type': 'Polygon',
              'arcs': [[734, 735, 736, 737, 738, 739, 740]],
              'id': '20007'
            }, {
              'type': 'Polygon',
              'arcs': [[741, 742, 743, 744, -102]],
              'id': '27133'
            }, {
              'type': 'Polygon',
              'arcs': [[745, -324, 746, 747]],
              'id': '23029'
            }, {
              'type': 'Polygon',
              'arcs': [[748, 749, 750, 751, 752]],
              'id': '30051'
            }, {
              'type': 'Polygon',
              'arcs': [[753, 754, 755, 756]],
              'id': '46091'
            }, {
              'type': 'Polygon',
              'arcs': [[757, 758, -364, 759, 760]],
              'id': '36117'
            }, {
              'type': 'Polygon',
              'arcs': [[761, 762]],
              'id': '02060'
            }, {
              'type': 'Polygon',
              'arcs': [[763, 764, 765, 766, 767]],
              'id': '12027'
            }, {
              'type': 'Polygon',
              'arcs': [[768, 769, 770, 771, 772, 773]],
              'id': '13015'
            }, {
              'type': 'Polygon',
              'arcs': [[774, 775, 776, 777, 778]],
              'id': '19127'
            }, {
              'type': 'Polygon',
              'arcs': [[779, 780, 781, 782, 783, 784]],
              'id': '20047'
            }, {
              'type': 'Polygon',
              'arcs': [[785, 786, 787, 788, 789]],
              'id': '26129'
            }, {
              'type': 'Polygon',
              'arcs': [[790, -237, 791, 792, 793, 794]],
              'id': '31093'
            }, {
              'type': 'Polygon',
              'arcs': [[795, 796, 797, 798, 799, 800]],
              'id': '39063'
            }, {
              'type': 'Polygon',
              'arcs': [[801, 802, 803, 804, 805, 806, 807]],
              'id': '21209'
            }, {
              'type': 'Polygon',
              'arcs': [[808, 809, 810, 811, -682]],
              'id': '47007'
            }, {
              'type': 'Polygon',
              'arcs': [[812, 813, 814, 815, 816, 817]],
              'id': '37157'
            }, {
              'type': 'Polygon',
              'arcs': [[818, 819, 820, 821, 822]],
              'id': '48189'
            }, {
              'type': 'Polygon',
              'arcs': [[823]],
              'id': '51820'
            }, {
              'type': 'Polygon',
              'arcs': [[824, 825, 826, 827, 828]],
              'id': '56025'
            }, {
              'type': 'Polygon',
              'arcs': [[-114, 829, 830, 831, 832]],
              'id': '48407'
            }, {
              'type': 'Polygon',
              'arcs': [[833, 834, 835, -427, 836]],
              'id': '55135'
            }, {
              'type': 'Polygon',
              'arcs': [[837, 838, 839, 840, 841]],
              'id': '39067'
            }, {
              'type': 'Polygon',
              'arcs': [[842, 843, 844, 845, 846, 847, 848]],
              'id': '13087'
            }, {
              'type': 'Polygon',
              'arcs': [[849, 850, 851, 852, 853]],
              'id': '22001'
            }, {
              'type': 'Polygon',
              'arcs': [[854, 855, 856, 857, 858]],
              'id': '27019'
            }, {
              'type': 'Polygon',
              'arcs': [[859, 860, 861, 862, -578, 863]],
              'id': '17065'
            }, {
              'type': 'Polygon',
              'arcs': [[864, 865, -351, 866, 867, 868]],
              'id': '27067'
            }, {
              'type': 'Polygon',
              'arcs': [[869, 870, 871, 872, 873]],
              'id': '55071'
            }, {
              'type': 'Polygon',
              'arcs': [[874, 875, 876, 877, 878, 879]],
              'id': '01013'
            }, {
              'type': 'Polygon',
              'arcs': [[880, 881, 882, 883, 884, 885, 886]],
              'id': '13169'
            }, {
              'type': 'Polygon',
              'arcs': [[887, 888, 889, 890]],
              'id': '19069'
            }, {
              'type': 'Polygon',
              'arcs': [[891, 892, 893, 894, 895, 896]],
              'id': '18113'
            }, {
              'type': 'Polygon',
              'arcs': [[897, 898, 899, 900, 901, 902]],
              'id': '20193'
            }, {
              'type': 'Polygon',
              'arcs': [[903, 904, 905, -444, 906]],
              'id': '26035'
            }, {
              'type': 'Polygon',
              'arcs': [[907, 908, 909, 910]],
              'id': '26039'
            }, {
              'type': 'Polygon',
              'arcs': [[911, 912, 913, 914, 915, 916]],
              'id': '29225'
            }, {
              'type': 'Polygon',
              'arcs': [[917, 918, 919, 920, 921]],
              'id': '31005'
            }, {
              'type': 'Polygon',
              'arcs': [[922, 923, 924, 925, 926]],
              'id': '31143'
            }, {
              'type': 'Polygon',
              'arcs': [[927, 928, 929, 930, -606]],
              'id': '46029'
            }, {
              'type': 'Polygon',
              'arcs': [[931, 932, 933, -128, 934, 935]],
              'id': '48131'
            }, {
              'type': 'Polygon',
              'arcs': [[936, -422, 937, -686, 938, 939]],
              'id': '48341'
            }, {
              'type': 'Polygon',
              'arcs': [[940, 941, 942, 943, 944, 945]],
              'id': '48317'
            }, {
              'type': 'Polygon',
              'arcs': [[946, 947, 948, 949, 950, 951, 952]],
              'id': '39083'
            }, {
              'type': 'Polygon',
              'arcs': [[953, 954, 955, 956, 957]],
              'id': '72073'
            }, {
              'type': 'Polygon',
              'arcs': [[958, 959, 960, 961, 962, -691, 963]],
              'id': '48293'
            }, {
              'type': 'Polygon',
              'arcs': [[964, 965, 966, 967, 968]],
              'id': '19055'
            }, {
              'type': 'Polygon',
              'arcs': [[969, 970, 971, 972]],
              'id': '31159'
            }, {
              'type': 'Polygon',
              'arcs': [[973, 974, 975, 976]],
              'id': '48507'
            }, {
              'type': 'Polygon',
              'arcs': [[977, 978, 979, 980, 981, 982, 983, 984, 985]],
              'id': '06091'
            }, {
              'type': 'Polygon',
              'arcs': [[986, 987, 988, 989, 990]],
              'id': '17201'
            }, {
              'type': 'Polygon',
              'arcs': [[991, 992, 993, 994, 995, 996]],
              'id': '23031'
            }, {
              'type': 'Polygon',
              'arcs': [[997, 998, 999, 1000, 1001]],
              'id': '24011'
            }, {
              'type': 'Polygon',
              'arcs': [[1002, 1003, 1004, 1005, 1006]],
              'id': '26119'
            }, {
              'type': 'Polygon',
              'arcs': [[-38, 1007, 1008, 1009, 1010, 1011, 1012]],
              'id': '38077'
            }, {
              'type': 'Polygon',
              'arcs': [[1013, 1014, 1015, 1016, 1017, 1018]],
              'id': '42007'
            }, {
              'type': 'Polygon',
              'arcs': [[1019, 1020, 1021, -246, -507]],
              'id': '48079'
            }, {
              'type': 'Polygon',
              'arcs': [[1022, -789, 1023, 1024, 1025, -906]],
              'id': '26051'
            }, {
              'type': 'Polygon',
              'arcs': [[1026, 1027, 1028, 1029, 1030, 1031, 1032]],
              'id': '08121'
            }, {
              'type': 'Polygon',
              'arcs': [[1033, -969, 1034, 1035, -224]],
              'id': '19019'
            }, {
              'type': 'Polygon',
              'arcs': [[1036, 1037, 1038, 1039, 1040, 1041, 1042]],
              'id': '19187'
            }, {
              'type': 'Polygon',
              'arcs': [[1043, -785, 1044, 1045, 1046, 1047]],
              'id': '20057'
            }, {
              'type': 'Polygon',
              'arcs': [[-1006, 1048, -786, -909]],
              'id': '26135'
            }, {
              'type': 'Polygon',
              'arcs': [[1049, 1050, 1051, 1052]],
              'id': '28099'
            }, {
              'type': 'Polygon',
              'arcs': [[1053, 1054, 1055, 1056, 1057, 1058]],
              'id': '31137'
            }, {
              'type': 'Polygon',
              'arcs': [[1059, 1060, 1061, 1062, 1063, 1064]],
              'id': '31039'
            }, {
              'type': 'Polygon',
              'arcs': [[1065, 1066, 1067, 1068, 1069, 1070, 1071]],
              'id': '45045'
            }, {
              'type': 'Polygon',
              'arcs': [[1072, 1073, 1074, 1075, 1076]],
              'id': '48151'
            }, {
              'type': 'Polygon',
              'arcs': [[1077, 1078, 1079, 1080, 1081]],
              'id': '37069'
            }, {
              'type': 'Polygon',
              'arcs': [[1082, 1083, 1084, 1085, 1086, 1087]],
              'id': '39039'
            }, {
              'type': 'Polygon',
              'arcs': [[1088, 1089, 1090, 1091, 1092, 1093]],
              'id': '47055'
            }, {
              'type': 'Polygon',
              'arcs': [[1094, 1095, 1096, 1097, 1098]],
              'id': '48023'
            }, {
              'type': 'Polygon',
              'arcs': [[1099, 1100, 1101, 1102, 1103]],
              'id': '48365'
            }, {
              'type': 'Polygon',
              'arcs': [[1104, 1105, 1106, 1107]],
              'id': '53001'
            }, {
              'type': 'Polygon',
              'arcs': [[-1040, 1108, 1109, 1110, 1111, 1112]],
              'id': '19015'
            }, {
              'type': 'Polygon',
              'arcs': [[1113, 1114, 1115, -265, 1116, 1117, 1118]],
              'id': '48237'
            }, {
              'type': 'Polygon',
              'arcs': [[1119, 1120, 1121, 1122, 1123]],
              'id': '72009'
            }, {
              'type': 'Polygon',
              'arcs': [[1124, 1125, -370, 1126, -660]],
              'id': '20017'
            }, {
              'type': 'Polygon',
              'arcs': [[-706, 1127, 1128, 1129, 1130]],
              'id': '48099'
            }, {
              'type': 'Polygon',
              'arcs': [[1131, 1132, 1133, 1134, 1135]],
              'id': '26037'
            }, {
              'type': 'Polygon',
              'arcs': [[1136, 1137, 1138, -373]],
              'id': '20207'
            }, {
              'type': 'Polygon',
              'arcs': [[1139, 1140, 1141, 1142, 1143, 1144, 1145]],
              'id': '17037'
            }, {
              'type': 'Polygon',
              'arcs': [[1146, 1147, 1148, 1149, 1150]],
              'id': '19159'
            }, {
              'type': 'Polygon',
              'arcs': [[1151, 1152, 1153, 1154, 1155]],
              'id': '19165'
            }, {
              'type': 'Polygon',
              'arcs': [[1156, 1157, 1158, 1159, 1160, 1161, -212, 1162]],
              'id': '06019'
            }, {
              'type': 'Polygon',
              'arcs': [[1163, 1164, 1165, -1147, 1166]],
              'id': '19175'
            }, {
              'type': 'Polygon',
              'arcs': [[1167, 1168, 1169, 1170, 1171, 1172]],
              'id': '17123'
            }, {
              'type': 'Polygon',
              'arcs': [[1173, 1174, 1175, 1176, 1177, 1178]],
              'id': '17147'
            }, {
              'type': 'Polygon',
              'arcs': [[1179, 1180, -1167, 1181, 1182]],
              'id': '19003'
            }, {
              'type': 'Polygon',
              'arcs': [[1183, 1184, 1185, 1186, 1187, 1188, 1189]],
              'id': '17159'
            }, {
              'type': 'Polygon',
              'arcs': [[1190, 1191, 1192, 1193, 1194]],
              'id': '47023'
            }, {
              'type': 'Polygon',
              'arcs': [[1195, 1196, 1197, 1198, 1199]],
              'id': '26023'
            }, {
              'type': 'Polygon',
              'arcs': [[1200, 1201, 1202, 1203, 1204, 1205]],
              'id': '37151'
            }, {
              'type': 'Polygon',
              'arcs': [[1206, 1207, 1208, 1209, 1210, 1211]],
              'id': '20199'
            }, {
              'type': 'Polygon',
              'arcs': [[1212, 1213, 1214, 1215, 1216, 1217]],
              'id': '18177'
            }, {
              'type': 'Polygon',
              'arcs': [[1218]],
              'id': '51595'
            }, {
              'type': 'Polygon',
              'arcs': [[1219, 1220, 1221, 1222, 1223]],
              'id': '48295'
            }, {
              'type': 'Polygon',
              'arcs': [[1224, 1225, 1226, 1227]],
              'id': '47169'
            }, {
              'type': 'Polygon',
              'arcs': [[1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, -726, 1237]],
              'id': '49037'
            }, {
              'type': 'Polygon',
              'arcs': [[1238, 1239, 1240, -287, 1241, 1242]],
              'id': '19123'
            }, {
              'type': 'Polygon',
              'arcs': [[1243, 1244, 1245, 1246]],
              'id': '16021'
            }, {
              'type': 'Polygon',
              'arcs': [[1247, 1248, 1249, 1250, 1251, 1252, 1253]],
              'id': '17107'
            }, {
              'type': 'Polygon',
              'arcs': [[1254, 1255, 1256, 1257, 1258]],
              'id': '20059'
            }, {
              'type': 'Polygon',
              'arcs': [[1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266]],
              'id': '22013'
            }, {
              'type': 'Polygon',
              'arcs': [[1267, 1268, 1269, 1270, 1271]],
              'id': '06005'
            }, {
              'type': 'Polygon',
              'arcs': [[1272, 1273, -1268, 1274, 1275]],
              'id': '06017'
            }, {
              'type': 'Polygon',
              'arcs': [[1276, 1277, 1278, 1279, 1280]],
              'id': '05065'
            }, {
              'type': 'Polygon',
              'arcs': [[1281]],
              'id': '51530'
            }, {
              'type': 'Polygon',
              'arcs': [[1282, 1283]],
              'id': '51590'
            }, {
              'type': 'Polygon',
              'arcs': [[1284, 1285]],
              'id': '51640'
            }, {
              'type': 'Polygon',
              'arcs': [[1286]],
              'id': '51660'
            }, {
              'type': 'Polygon',
              'arcs': [[1287]],
              'id': '51690'
            }, {
              'type': 'Polygon',
              'arcs': [[1288, 1289, 1290, 1291, 1292, 1293]],
              'id': '18049'
            }, {
              'type': 'Polygon',
              'arcs': [[1294, 1295, -1164, -1181, 1296]],
              'id': '19001'
            }, {
              'type': 'Polygon',
              'arcs': [[1297, -215, 213, -213, -1162, 1298, 1299, 1300]],
              'id': '06053'
            }, {
              'type': 'Polygon',
              'arcs': [[1301, 1302, 1303, 1304, 1305]],
              'id': '29219'
            }, {
              'type': 'Polygon',
              'arcs': [[1306, 1307, 1308, 1309, 1310]],
              'id': '37197'
            }, {
              'type': 'Polygon',
              'arcs': [[-446, 1311, 1312, 1313, -1132, 1314]],
              'id': '26057'
            }, {
              'type': 'Polygon',
              'arcs': [[1315, 1316, 1317, 1318, 1319, 1320]],
              'id': '21129'
            }, {
              'type': 'Polygon',
              'arcs': [[1321, 1322, 1323, 1324, 1325, 1326]],
              'id': '20133'
            }, {
              'type': 'Polygon',
              'arcs': [[1327, -1136, 1328, 1329, 1330]],
              'id': '26067'
            }, {
              'type': 'Polygon',
              'arcs': [[1331, 1332, 1333, 1334, 1335]],
              'id': '26077'
            }, {
              'type': 'Polygon',
              'arcs': [[1336, 1337, 1338, 1339, 1340, 1341]],
              'id': '21149'
            }, {
              'type': 'Polygon',
              'arcs': [[1342, 1343, 1344, 1345, 1346, 1347]],
              'id': '27033'
            }, {
              'type': 'Polygon',
              'arcs': [[-585, 1348, 1349, -382, 1350]],
              'id': '26085'
            }, {
              'type': 'Polygon',
              'arcs': [[-586, -1351, 1351, 1352]],
              'id': '26105'
            }, {
              'type': 'Polygon',
              'arcs': [[1353, -448, 1354, -383]],
              'id': '26107'
            }, {
              'type': 'Polygon',
              'arcs': [[1355, -386, 1356, 1357, 1358]],
              'id': '26121'
            }, {
              'type': 'Polygon',
              'arcs': [[1359, 1360, 1361, 1362, 1363, 1364]],
              'id': '27047'
            }, {
              'type': 'Polygon',
              'arcs': [[1365, 1366, 1367, 1368, 1369, 1370, 1371]],
              'id': '17051'
            }, {
              'type': 'Polygon',
              'arcs': [[1372, 1373, 1374, 1375, -1368]],
              'id': '17049'
            }, {
              'type': 'Polygon',
              'arcs': [[1376, 1377, 1378, 1379]],
              'id': '27009'
            }, {
              'type': 'Polygon',
              'arcs': [[1380, 1381, 1382, 1383, -415]],
              'id': '48129'
            }, {
              'type': 'Polygon',
              'arcs': [[1384, 1385, 1386, 1387, 1388]],
              'id': '27041'
            }, {
              'type': 'Polygon',
              'arcs': [[1389, 1390, 1391, 1392, -404]],
              'id': '40073'
            }, {
              'type': 'Polygon',
              'arcs': [[1393, 1394, 1395, 1396, 1397, 1398]],
              'id': '47053'
            }, {
              'type': 'Polygon',
              'arcs': [[1399, 1400, 1401, 1402, 1403, 1404, 1405]],
              'id': '47005'
            }, {
              'type': 'Polygon',
              'arcs': [[1406, 1407, 1408, 1409]],
              'id': '45009'
            }, {
              'type': 'Polygon',
              'arcs': [[1410, 1411, 1412, 1413, 1414, -557, 1415, 1416]],
              'id': '48013'
            }, {
              'type': 'Polygon',
              'arcs': [[1417, 1418, 1419, -111, 1420, 1421, 1422, -701]],
              'id': '46067'
            }, {
              'type': 'Polygon',
              'arcs': [[1423, 1424, 1425, 1426, -41, 1427]],
              'id': '46019'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[1428, 1429, 1430, 1431]], [[1432, 1433]], [[1434]], [[1435, 1436]], [[1437]], [[1438]], [[1439]], [[1440]], [[1441, 1442]], [[1443, 1444, 1445, 1446]]],
              'id': '02105'
            }, {
              'type': 'Polygon',
              'arcs': [[1447, 1448, 1449, 1450, -542, -273]],
              'id': '46059'
            }, {
              'type': 'Polygon',
              'arcs': [[-608, 1451, 1452, -266, -601, 1453, 1454]],
              'id': '46077'
            }, {
              'type': 'Polygon',
              'arcs': [[1455, 1456, 1457, 1458, 1459]],
              'id': '47101'
            }, {
              'type': 'Polygon',
              'arcs': [[1460, 1461, 1462, 1463, 1464]],
              'id': '55069'
            }, {
              'type': 'Polygon',
              'arcs': [[1465, -1397, 1466, 1467, -1191, 1468, 1469]],
              'id': '47113'
            }, {
              'type': 'Polygon',
              'arcs': [[1470]],
              'id': '51540'
            }, {
              'type': 'Polygon',
              'arcs': [[1471, 1472, 1473, 1474, 1475, 1476]],
              'id': '30037'
            }, {
              'type': 'Polygon',
              'arcs': [[1477, 1478, 1479, 1480, 1481, 1482, 1483, -827]],
              'id': '56009'
            }, {
              'type': 'Polygon',
              'arcs': [[1484, 1485, 1486, 1487, 1488]],
              'id': '47179'
            }, {
              'type': 'Polygon',
              'arcs': [[1489, 1490, -1465, 1491, 1492, 1493]],
              'id': '55119'
            }, {
              'type': 'Polygon',
              'arcs': [[1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, -1502, 1501, 1503, 1504]],
              'id': '56029'
            }, {
              'type': 'Polygon',
              'arcs': [[1505, 1506, -1348, 1507, -743, 1508]],
              'id': '27101'
            }, {
              'type': 'Polygon',
              'arcs': [[1509, 1510, 1511, 1512, 1513, 1514]],
              'id': '55133'
            }, {
              'type': 'Polygon',
              'arcs': [[1515, 1516, -1509, -742, 1517]],
              'id': '27117'
            }, {
              'type': 'Polygon',
              'arcs': [[1518, 1519, 1520, 1521, 1522]],
              'id': '51099'
            }, {
              'type': 'Polygon',
              'arcs': [[1523, 1524, 1525, 1526, 1527, 1528, 1529]],
              'id': '30001'
            }, {
              'type': 'Polygon',
              'arcs': [[1530, 1531, -1472, 1532, 1533]],
              'id': '30107'
            }, {
              'type': 'Polygon',
              'arcs': [[1534, -916, 1535, 1536, 1537, 1538]],
              'id': '29043'
            }, {
              'type': 'Polygon',
              'arcs': [[1539, 1540, 1541, 1542, 1543, 1544]],
              'id': '29053'
            }, {
              'type': 'Polygon',
              'arcs': [[1545, 1546, 1547, 1548, 1549, 1550]],
              'id': '20029'
            }, {
              'type': 'Polygon',
              'arcs': [[1551, 1552, 1553, 1554, 1555]],
              'id': '51159'
            }, {
              'type': 'Polygon',
              'arcs': [[1556, -1398, -1466, 1557, 1558]],
              'id': '47033'
            }, {
              'type': 'Polygon',
              'arcs': [[1559, 1560, 1561, 1562, 1563]],
              'id': '18063'
            }, {
              'type': 'Polygon',
              'arcs': [[1564, 1565, 1566, 1567, 1568, 1569, 1570, -378]],
              'id': '20135'
            }, {
              'type': 'Polygon',
              'arcs': [[1571, 1572, 1573, 1574, -1143]],
              'id': '17093'
            }, {
              'type': 'Polygon',
              'arcs': [[1575, 1576, 1577, 1578, 1579]],
              'id': '18149'
            }, {
              'type': 'Polygon',
              'arcs': [[1580, 1581, 1582, 1583, 1584, -654]],
              'id': '18145'
            }, {
              'type': 'Polygon',
              'arcs': [[1585, 1586, 1587, 1588, -913, 1589]],
              'id': '29105'
            }, {
              'type': 'Polygon',
              'arcs': [[1590, 1591, 1592, 1593, 1594, 1595]],
              'id': '29117'
            }, {
              'type': 'Polygon',
              'arcs': [[1596, 1597, -1007, -908, 1598]],
              'id': '26137'
            }, {
              'type': 'Polygon',
              'arcs': [[1599, 1600, 1601, 1602, 1603]],
              'id': '31087'
            }, {
              'type': 'Polygon',
              'arcs': [[-910, -790, -1023, -905, 1604]],
              'id': '26143'
            }, {
              'type': 'Polygon',
              'arcs': [[1605, 1606, 1607, 1608, 1609]],
              'id': '29011'
            }, {
              'type': 'Polygon',
              'arcs': [[-416, -1384, 1610, 1611, 1612, 1613]],
              'id': '48045'
            }, {
              'type': 'Polygon',
              'arcs': [[1614, 1615, 1616, 1617, 1618, 1619]],
              'id': '26161'
            }, {
              'type': 'Polygon',
              'arcs': [[1620, -1330, 1621, 1622, -1333, 1623]],
              'id': '26015'
            }, {
              'type': 'Polygon',
              'arcs': [[1624, 1625, 1626, 1627, 1628]],
              'id': '35029'
            }, {
              'type': 'Polygon',
              'arcs': [[1629, 1630, 1631, 1632, 1633, 1634, 1635]],
              'id': '51169'
            }, {
              'type': 'Polygon',
              'arcs': [[1636, 1637, 1638, 1639, 1640]],
              'id': '33007'
            }, {
              'type': 'Polygon',
              'arcs': [[1641, 1642, 1643, 1644, 1645, 1646]],
              'id': '38095'
            }, {
              'type': 'Polygon',
              'arcs': [[1647, 1648, 1649, 1650, -502, 1651]],
              'id': '29145'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[1652, 1653]], [[-1431, 1654, -55, 1655]]],
              'id': '02195'
            }, {
              'type': 'Polygon',
              'arcs': [[1656, -1065, 1657, 1658, 1659]],
              'id': '31167'
            }, {
              'type': 'Polygon',
              'arcs': [[1660, 1661, 1662, -1060, -1657, 1663]],
              'id': '31179'
            }, {
              'type': 'Polygon',
              'arcs': [[1664, 1665, 1666, 1667, -205, 203, -203]],
              'id': '26109'
            }, {
              'type': 'Polygon',
              'arcs': [[1668, 1669, 1670, 1671, 1672]],
              'id': '48175'
            }, {
              'type': 'Polygon',
              'arcs': [[1673, -39, -1013, 1674, -343, 1675]],
              'id': '38073'
            }, {
              'type': 'Polygon',
              'arcs': [[1676, 1677, -1381, 1678]],
              'id': '48179'
            }, {
              'type': 'Polygon',
              'arcs': [[1679, 1680, 1681, 1682, 1683, 1684]],
              'id': '42121'
            }, {
              'type': 'Polygon',
              'arcs': [[-1383, 1685, -514, -278, 1686, -1611]],
              'id': '48191'
            }, {
              'type': 'Polygon',
              'arcs': [[1687, -1538, 1688, 1689, 1690]],
              'id': '29209'
            }, {
              'type': 'Polygon',
              'arcs': [[1691, 1692, 1693, 1694, 1695, 1696]],
              'id': '39057'
            }, {
              'type': 'Polygon',
              'arcs': [[1697, 1698, -1596, 1699, 1700, 1701]],
              'id': '29061'
            }, {
              'type': 'Polygon',
              'arcs': [[1702, 1703, 1704, 1705, 1706, 1707]],
              'id': '29199'
            }, {
              'type': 'Polygon',
              'arcs': [[1708, 1709, 1710, 1711, 1712, 1713, 1714]],
              'id': '48049'
            }, {
              'type': 'Polygon',
              'arcs': [[-509, 1715, 1716, -941, 1717, 1718]],
              'id': '48165'
            }, {
              'type': 'Polygon',
              'arcs': [[-1130, 1719, -694, 1720, 1721, 1722, 1723]],
              'id': '48027'
            }, {
              'type': 'Polygon',
              'arcs': [[1724, -1247, 1725, 1726, 1727]],
              'id': '53051'
            }, {
              'type': 'Polygon',
              'arcs': [[1728, 1729, 1730, 1731, 1732, 1733]],
              'id': '13277'
            }, {
              'type': 'Polygon',
              'arcs': [[1734, 1735, 1736, 1737, 1738]],
              'id': '48435'
            }, {
              'type': 'Polygon',
              'arcs': [[1739, 1740, 1741, 1742, 1743]],
              'id': '51023'
            }, {
              'type': 'Polygon',
              'arcs': [[1744, 1745, 1746, 1747, 1748]],
              'id': '48405'
            }, {
              'type': 'Polygon',
              'arcs': [[-139, 1749, 1750, 1751, 1752, 1753, 1754]],
              'id': '72129'
            }, {
              'type': 'Polygon',
              'arcs': [[1755, 1756, 1757, 1758, -149, 1759]],
              'id': '72143'
            }, {
              'type': 'Polygon',
              'arcs': [[1760, 1761, 1762, 1763]],
              'id': '27017'
            }, {
              'type': 'Polygon',
              'arcs': [[1764, 1765, 1766, 1767, 1768]],
              'id': '12029'
            }, {
              'type': 'Polygon',
              'arcs': [[1769, 1770, 1771, 1772, 1773, 1774]],
              'id': '13211'
            }, {
              'type': 'Polygon',
              'arcs': [[1775, 1776, 1777, 1778]],
              'id': '02188'
            }, {
              'type': 'Polygon',
              'arcs': [[1779, 1780, 1781, -715, 1782]],
              'id': '38007'
            }, {
              'type': 'Polygon',
              'arcs': [[1783, 1784, 1785, -1764, 1786, 1787, 1788, 1789]],
              'id': '27001'
            }, {
              'type': 'Polygon',
              'arcs': [[1790, 1791, 1792, 1793, 1794, 1795, 1796]],
              'id': '08045'
            }, {
              'type': 'Polygon',
              'arcs': [[-1257, 1797, 1798, 1799]],
              'id': '20003'
            }, {
              'type': 'Polygon',
              'arcs': [[-282, 1800, 1801, 1802, -553]],
              'id': '48269'
            }, {
              'type': 'Polygon',
              'arcs': [[1803, -407, 1804, 1805, -535, 1806]],
              'id': '40039'
            }, {
              'type': 'Polygon',
              'arcs': [[1807, -98, 1808, 1809, 1810, 1811]],
              'id': '39101'
            }, {
              'type': 'Polygon',
              'arcs': [[1812, 1813, 1814, 1815, 1816, 1817]],
              'id': '17095'
            }, {
              'type': 'Polygon',
              'arcs': [[1818, 1819, 1820, 1821]],
              'id': '13013'
            }, {
              'type': 'Polygon',
              'arcs': [[-1144, -1575, 1822, 1823, 1824, -1170, 1825, 1826, 1827]],
              'id': '17099'
            }, {
              'type': 'Polygon',
              'arcs': [[1828, 1829, 1830, 1831, 1832]],
              'id': '01031'
            }, {
              'type': 'Polygon',
              'arcs': [[1833, 1834, 1835, 1836]],
              'id': '12085'
            }, {
              'type': 'Polygon',
              'arcs': [[1837, 1838, 1839, -1109, -1039]],
              'id': '19079'
            }, {
              'type': 'Polygon',
              'arcs': [[-890, 1840, -775, 1841, -1839]],
              'id': '19083'
            }, {
              'type': 'Polygon',
              'arcs': [[1842, 1843, 1844, 1845, 1846, 1847]],
              'id': '16037'
            }, {
              'type': 'Polygon',
              'arcs': [[1848, 1849, 1850, 1851, 1852, 1853]],
              'id': '13037'
            }, {
              'type': 'Polygon',
              'arcs': [[1854, 1855, 1856, 1857]],
              'id': '19093'
            }, {
              'type': 'Polygon',
              'arcs': [[1858, 1859, -162, -618, 1860]],
              'id': '08105'
            }, {
              'type': 'Polygon',
              'arcs': [[1861, -1243, 1862, 1863, -524, 1864]],
              'id': '19125'
            }, {
              'type': 'Polygon',
              'arcs': [[1865, -1028, 1866, 1867]],
              'id': '08087'
            }, {
              'type': 'Polygon',
              'arcs': [[1868, 1869, 1870, -1240, 1871]],
              'id': '19157'
            }, {
              'type': 'Polygon',
              'arcs': [[1872, 1873, 1874, -1248, 1875, 1876]],
              'id': '17179'
            }, {
              'type': 'Polygon',
              'arcs': [[1877, 1878, 1879, 1880]],
              'id': '08039'
            }, {
              'type': 'Polygon',
              'arcs': [[-1111, 1881, 1882, -1865, -523, 1883]],
              'id': '19153'
            }, {
              'type': 'Polygon',
              'arcs': [[1884, 1885, 1886, 1887, 1888]],
              'id': '39149'
            }, {
              'type': 'Polygon',
              'arcs': [[1889, -527, 1890, -1165, -1296]],
              'id': '19121'
            }, {
              'type': 'Polygon',
              'arcs': [[1891, 1892, 1893, 1894, -677]],
              'id': '39153'
            }, {
              'type': 'Polygon',
              'arcs': [[1895, 1896, -765, 1897]],
              'id': '12049'
            }, {
              'type': 'Polygon',
              'arcs': [[1898, 1899, 1900, 1901, 1902, 1903, 1904]],
              'id': '39161'
            }, {
              'type': 'Polygon',
              'arcs': [[1905, -1696, 1906, 1907, 1908, 1909]],
              'id': '39165'
            }, {
              'type': 'Polygon',
              'arcs': [[1910, 1911, 1912, 1913, -974, 1914]],
              'id': '48463'
            }, {
              'type': 'Polygon',
              'arcs': [[1915, 1916, 1917, 1918, 1919, -650, 1920]],
              'id': '13195'
            }, {
              'type': 'Polygon',
              'arcs': [[1921, 1922, -842, 1923, 1924, 1925]],
              'id': '39059'
            }, {
              'type': 'Polygon',
              'arcs': [[1926, 1927, 1928, 1929, -1412]],
              'id': '48493'
            }, {
              'type': 'Polygon',
              'arcs': [[-1810, 1930, -953, 1931, 1932, 1933]],
              'id': '39041'
            }, {
              'type': 'Polygon',
              'arcs': [[1934, 1935, 1936, 1937, 1938]],
              'id': '39055'
            }, {
              'type': 'Polygon',
              'arcs': [[-538, 1939, 1940, 1941]],
              'id': '40055'
            }, {
              'type': 'Polygon',
              'arcs': [[1942, 1943, 1944, 1945, 1946, 1947, 1948]],
              'id': '27131'
            }, {
              'type': 'Polygon',
              'arcs': [[1949, 1950, 1951, 1952, 1953, 1954, 1955]],
              'id': '05025'
            }, {
              'type': 'Polygon',
              'arcs': [[1956, 1957, 1958, 1959, 1960, -196]],
              'id': '13093'
            }, {
              'type': 'Polygon',
              'arcs': [[-423, -257, 1961, -1735, 1962]],
              'id': '48413'
            }, {
              'type': 'Polygon',
              'arcs': [[1963, 1964, 1965, 1966, -1345]],
              'id': '27165'
            }, {
              'type': 'Polygon',
              'arcs': [[1967, 1968, 1969, -391, 1970, 1971]],
              'id': '31001'
            }, {
              'type': 'Polygon',
              'arcs': [[1972, 1973, 1974, 1975]],
              'id': '37003'
            }, {
              'type': 'Polygon',
              'arcs': [[1976, -312, 1977, 1978, -1607]],
              'id': '29039'
            }, {
              'type': 'Polygon',
              'arcs': [[1979, -417, -1614, 1980, -820, 1981]],
              'id': '48437'
            }, {
              'type': 'Polygon',
              'arcs': [[1982, 1983, 1984, 1985, 1986, 1987, 1988]],
              'id': '30049'
            }, {
              'type': 'Polygon',
              'arcs': [[1989, 1990, 1991, -1545, 1992, 1993, 1994]],
              'id': '29159'
            }, {
              'type': 'Polygon',
              'arcs': [[-1612, -1687, -283, -552, 1995]],
              'id': '48345'
            }, {
              'type': 'Polygon',
              'arcs': [[1996, 1997, 1998, -1524, 1999, 2000]],
              'id': '30081'
            }, {
              'type': 'Polygon',
              'arcs': [[2001, 2002, 2003, -11, 2004, 2005, 2006, 2007]],
              'id': '06071'
            }, {
              'type': 'Polygon',
              'arcs': [[2008, 2009, 2010, 2011, 2012, 2013]],
              'id': '13189'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-1439]], [[2014]], [[2015, 2016, 2017, 2018, -1446, 2019]]],
              'id': '02100'
            }, {
              'type': 'Polygon',
              'arcs': [[-1492, -1464, 2020, 2021, 2022, 2023, 2024]],
              'id': '55073'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[2025]], [[2026]], [[2027]], [[2028]], [[2029]], [[2030]], [[2031]], [[2032]], [[2033]], [[2034]], [[2035]], [[2036]], [[2037]], [[2038]], [[2039]], [[2040]], [[2041]], [[2042, 2043]], [[2044]], [[2045]], [[2046]], [[2047]], [[2048]], [[2049]]],
              'id': '02013'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[2050]], [[2051]], [[2052]], [[2053]], [[2054]], [[2055]], [[2056]], [[2057]], [[2058]], [[2059]], [[2060]], [[2061]], [[2062, 2063, 2064]], [[2065]]],
              'id': '02150'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[2066]], [[2067]], [[2068]], [[2069]], [[2070]], [[2071, -762, 2072, 2073, 2074, 2075, -2065, 2076, -2043]]],
              'id': '02164'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[2077]], [[2078]], [[2079]], [[2080]], [[2081]], [[2082]], [[2083]], [[2084]], [[2085, 2086, 2087, 2088, 2089, 2090, 2091]]],
              'id': '02261'
            }, {
              'type': 'Polygon',
              'arcs': [[2092, 2093, -1418, -700, -124]],
              'id': '46035'
            }, {
              'type': 'Polygon',
              'arcs': [[2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101]],
              'id': '41023'
            }, {
              'type': 'Polygon',
              'arcs': [[2102, 2103, 2104, 2105, 2106, 2107]],
              'id': '39129'
            }, {
              'type': 'Polygon',
              'arcs': [[-1938, 2108, 2109, 2110, -1893]],
              'id': '39133'
            }, {
              'type': 'Polygon',
              'arcs': [[2111, 2112, 2113, 2114, -847]],
              'id': '13131'
            }, {
              'type': 'Polygon',
              'arcs': [[2115, 2116, 2117, 2118, 2119, 2120]],
              'id': '72093'
            }, {
              'type': 'Polygon',
              'arcs': [[2121, 2122, 2123, 2124, 2125, 2126]],
              'id': '54075'
            }, {
              'type': 'Polygon',
              'arcs': [[2127, 2128, 2129]],
              'id': '72117'
            }, {
              'type': 'Polygon',
              'arcs': [[2130, 2131, 2132, 2133, -1385, 2134, 2135]],
              'id': '27111'
            }, {
              'type': 'Polygon',
              'arcs': [[2136, 2137, 2138, 2139, 2140, 2141, 2142]],
              'id': '13111'
            }, {
              'type': 'Polygon',
              'arcs': [[2143, 2144, 2145, -28, -233, -26]],
              'id': '27113'
            }, {
              'type': 'Polygon',
              'arcs': [[2146, 2147, 2148, 2149]],
              'id': '17021'
            }, {
              'type': 'Polygon',
              'arcs': [[2150, 2151, 2152, 2153, 2154, -1291]],
              'id': '18169'
            }, {
              'type': 'Polygon',
              'arcs': [[2155, 2156, 2157, 2158, 2159, -1232]],
              'id': '08085'
            }, {
              'type': 'Polygon',
              'arcs': [[2160, 2161, 2162, -14, 2163]],
              'id': '28113'
            }, {
              'type': 'Polygon',
              'arcs': [[-495, 2164, 2165, 2166, 2167, 2168]],
              'id': '38049'
            }, {
              'type': 'Polygon',
              'arcs': [[2169, 2170, 2171, 2172, -1704, 2173]],
              'id': '19177'
            }, {
              'type': 'Polygon',
              'arcs': [[2174, 2175, 2176]],
              'id': '17171'
            }, {
              'type': 'Polygon',
              'arcs': [[2177, -886, 2178, 2179, 2180]],
              'id': '13021'
            }, {
              'type': 'Polygon',
              'arcs': [[2181, -140, -1755, 2182, 2183, 2184, -1122]],
              'id': '72035'
            }, {
              'type': 'Polygon',
              'arcs': [[-1026, 2185, 2186, -1312, -445]],
              'id': '26111'
            }, {
              'type': 'Polygon',
              'arcs': [[2187, 2188, 2189, 2190, -1567, 2191]],
              'id': '20051'
            }, {
              'type': 'Polygon',
              'arcs': [[2192, 2193, 2194, -2165, -494]],
              'id': '38009'
            }, {
              'type': 'Polygon',
              'arcs': [[2195]],
              'id': '60030'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[2196]], [[2197]]],
              'id': '60020'
            }, {
              'type': 'Polygon',
              'arcs': [[2198, 2199]],
              'id': '60050'
            }, {
              'type': 'Polygon',
              'arcs': [[-894, 2200, -1087, 2201, -1905, 2202, 2203, 2204, 2205]],
              'id': '18003'
            }, {
              'type': 'Polygon',
              'arcs': [[2206, 2207, 2208, 2209, 2210, 2211]],
              'id': '20085'
            }, {
              'type': 'Polygon',
              'arcs': [[2212, 2213, 2214, 2215, 2216, -2171]],
              'id': '19087'
            }, {
              'type': 'Polygon',
              'arcs': [[2217, 2218, 2219, -1560, 2220]],
              'id': '18011'
            }, {
              'type': 'Polygon',
              'arcs': [[573, -573, 571, -571, 569, -569, 2221, 2222, 2223, 2224, 2225, -575]],
              'id': '06103'
            }, {
              'type': 'Polygon',
              'arcs': [[-1292, -2155, 2226, 2227, 2228]],
              'id': '18103'
            }, {
              'type': 'Polygon',
              'arcs': [[2229, 2230, 2231, 2232, 2233]],
              'id': '38047'
            }, {
              'type': 'Polygon',
              'arcs': [[2234, 2235, 2236, 2237, 2238, 2239]],
              'id': '40021'
            }, {
              'type': 'Polygon',
              'arcs': [[2240, -275, -545, 2241, 2242, -626, 2243, 2244, 2245, 2246]],
              'id': '46085'
            }, {
              'type': 'Polygon',
              'arcs': [[-30, 2247, 2248, 2249]],
              'id': '27087'
            }, {
              'type': 'Polygon',
              'arcs': [[-1493, -2025, 2250, 2251, 2252, 2253]],
              'id': '55019'
            }, {
              'type': 'Polygon',
              'arcs': [[2254, 2255, -380, 2256, 2257, 2258]],
              'id': '20171'
            }, {
              'type': 'Polygon',
              'arcs': [[2259, 2260, 2261, 2262, 2263]],
              'id': '27135'
            }, {
              'type': 'Polygon',
              'arcs': [[2264, 2265, 2266, 2267, 2268, 2269, 2270]],
              'id': '05115'
            }, {
              'type': 'Polygon',
              'arcs': [[2271, 2272, 2273, 2274, 2275]],
              'id': '26095'
            }, {
              'type': 'Polygon',
              'arcs': [[-1994, 2276, 2277, 2278, -309, 2279]],
              'id': '29015'
            }, {
              'type': 'Polygon',
              'arcs': [[2280, 2281, 2282, 2283, 2284, -2267]],
              'id': '05141'
            }, {
              'type': 'Polygon',
              'arcs': [[2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292]],
              'id': '51199'
            }, {
              'type': 'Polygon',
              'arcs': [[-915, 2293, 2294, 2295, 2296, 2297, -1536]],
              'id': '29067'
            }, {
              'type': 'Polygon',
              'arcs': [[2298, 2299, 2300, 2301, -1989, 2302, 2303, 2304, 2305, 2306]],
              'id': '30029'
            }, {
              'type': 'Polygon',
              'arcs': [[2307, 2308, 2309, 2310, 2311]],
              'id': '48305'
            }, {
              'type': 'Polygon',
              'arcs': [[2312, 2313, 2314, 2315, 2316, 2317]],
              'id': '29065'
            }, {
              'type': 'Polygon',
              'arcs': [[2318, 2319, 2320, 2321, -1962]],
              'id': '48327'
            }, {
              'type': 'Polygon',
              'arcs': [[-1076, -413, -721, 2322, -467]],
              'id': '48353'
            }, {
              'type': 'Polygon',
              'arcs': [[2323, -2316, 2324, 2325, 2326, 2327]],
              'id': '29203'
            }, {
              'type': 'Polygon',
              'arcs': [[2328, 2329, -469, 2330, -253, 2331]],
              'id': '48431'
            }, {
              'type': 'Polygon',
              'arcs': [[2332, 2333, 2334, 2335, 2336]],
              'id': '08089'
            }, {
              'type': 'Polygon',
              'arcs': [[2337, 2338, 2339, 2340, -2309]],
              'id': '48169'
            }, {
              'type': 'Polygon',
              'arcs': [[2341, 2342, 2343, 2344]],
              'id': '08119'
            }, {
              'type': 'Polygon',
              'arcs': [[2345, -2306, 2346, 2347, 2348, 2349, 2350]],
              'id': '30089'
            }, {
              'type': 'Polygon',
              'arcs': [[2351, -251, 2352, -1709, 2353, -410]],
              'id': '48059'
            }, {
              'type': 'Polygon',
              'arcs': [[-1803, 2354, 2355, -1074, 2356]],
              'id': '48433'
            }, {
              'type': 'Polygon',
              'arcs': [[2357, 2358, 2359, 2360, -529, 2361]],
              'id': '40051'
            }, {
              'type': 'Polygon',
              'arcs': [[2362, 2363, 2364, 2365, 2366, 2367]],
              'id': '48159'
            }, {
              'type': 'Polygon',
              'arcs': [[2368, 2369, 2370, 2371, 2372, 2373]],
              'id': '48467'
            }, {
              'type': 'Polygon',
              'arcs': [[2374, -1059, 2375, 2376]],
              'id': '31073'
            }, {
              'type': 'Polygon',
              'arcs': [[2377, 2378, 2379, 2380, -388]],
              'id': '31059'
            }, {
              'type': 'Polygon',
              'arcs': [[2381, 2382, 2383, 2384, 2385, -2369, 2386, 2387]],
              'id': '48231'
            }, {
              'type': 'Polygon',
              'arcs': [[2388, 2389, -117, 2390, 2391]],
              'id': '48313'
            }, {
              'type': 'Polygon',
              'arcs': [[2392, 2393, 2394, 2395, 2396, 2397, 2398]],
              'id': '40019'
            }, {
              'type': 'Polygon',
              'arcs': [[2399, 2400, 2401, 2402, 2403]],
              'id': '51157'
            }, {
              'type': 'Polygon',
              'arcs': [[2404, 2405, 2406, 2407, 2408]],
              'id': '01103'
            }, {
              'type': 'Polygon',
              'arcs': [[2409, 2410, 2411, 2412, 2413]],
              'id': '51079'
            }, {
              'type': 'Polygon',
              'arcs': [[2414, -1777, 2415, 2416, 2417, 2418, 2419, 2420, 2421, -520]],
              'id': '02290'
            }, {
              'type': 'Polygon',
              'arcs': [[2422, 2423, 2424, 2425, 2426]],
              'id': '42059'
            }, {
              'type': 'Polygon',
              'arcs': [[-1953, 2427, 2428, 2429, 2430, 2431]],
              'id': '05043'
            }, {
              'type': 'Polygon',
              'arcs': [[2432, 2433, -458, 2434, 2435, 2436, 2437]],
              'id': '28043'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[2438]], [[2439, 2440]]],
              'id': '51750'
            }, {
              'type': 'Polygon',
              'arcs': [[2441, 2442, 2443, 2444, 2445]],
              'id': '29211'
            }, {
              'type': 'Polygon',
              'arcs': [[2446, 2447, 2448, 2449, 2450]],
              'id': '54047'
            }, {
              'type': 'Polygon',
              'arcs': [[2451, 2452, 2453, 2454, 2455]],
              'id': '37133'
            }, {
              'type': 'Polygon',
              'arcs': [[2456, 2457, 2458, 2459, 2460, 2461]],
              'id': '29049'
            }, {
              'type': 'Polygon',
              'arcs': [[2462, 2463, 2464, 2465, 2466, 2467]],
              'id': '12005'
            }, {
              'type': 'Polygon',
              'arcs': [[-144, 2468, 2469, 2470]],
              'id': '72061'
            }, {
              'type': 'Polygon',
              'arcs': [[2471, 2472, 2473, 2474, 2475]],
              'id': '72029'
            }, {
              'type': 'Polygon',
              'arcs': [[-150, -1759, 2476, 2477, 2478, 2479]],
              'id': '72047'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[2480, 2481, 2482, -636, 2483]], [[2484]]],
              'id': '53033'
            }, {
              'type': 'Polygon',
              'arcs': [[2485, 2486, 2487, 2488, 2489, 2490, 2491, 2492, 2493, 2494, 2495, -2496, 2495, 2496, -2482, 2497]],
              'id': '53007'
            }, {
              'type': 'Polygon',
              'arcs': [[2498, 2499, 2500, 2501]],
              'id': '12035'
            }, {
              'type': 'Polygon',
              'arcs': [[-2497, -2496, 2495, -2496, -2495, 2493, -2493, 2491, -2491, 2489, -2489, 2502, 2503, 2504, -2483]],
              'id': '53037'
            }, {
              'type': 'Polygon',
              'arcs': [[2505, 2506, 2507, 2508]],
              'id': '12095'
            }, {
              'type': 'Polygon',
              'arcs': [[2509, -68, 2510, 2511, -1959]],
              'id': '13235'
            }, {
              'type': 'Polygon',
              'arcs': [[2512, 2513, -2164, -13, 2514, 2515, 2516]],
              'id': '28005'
            }, {
              'type': 'Polygon',
              'arcs': [[2517, 2518, 2519, 2520, 2521]],
              'id': '46045'
            }, {
              'type': 'Polygon',
              'arcs': [[-1574, 2522, 2523, 2524, -1823]],
              'id': '17063'
            }, {
              'type': 'Polygon',
              'arcs': [[2525, 2526, 2527, -735, 2528, -783]],
              'id': '20151'
            }, {
              'type': 'Polygon',
              'arcs': [[2529, 2530, 2531, -888, -230]],
              'id': '19033'
            }, {
              'type': 'Polygon',
              'arcs': [[2532, 2533, 2534, 2535, 2536, 2537]],
              'id': '31155'
            }, {
              'type': 'Polygon',
              'arcs': [[2538, 2539, 2540, 2541, 2542]],
              'id': '05125'
            }, {
              'type': 'Polygon',
              'arcs': [[-2023, -837, -426, 2543, 2544]],
              'id': '55097'
            }, {
              'type': 'Polygon',
              'arcs': [[2545, 2546, -1610, 2547, 2548, 2549, -1324]],
              'id': '20037'
            }, {
              'type': 'Polygon',
              'arcs': [[2550, 2551, 2552, 2553, 2554]],
              'id': '48221'
            }, {
              'type': 'Polygon',
              'arcs': [[2555, 2556, 2557, 2558, -371, -1126]],
              'id': '20111'
            }, {
              'type': 'Polygon',
              'arcs': [[2559, 2560, 2561, 2562, 2563]],
              'id': '46047'
            }, {
              'type': 'Polygon',
              'arcs': [[2564, -299, 297, -306, 2565, 2566, 2567]],
              'id': '30069'
            }, {
              'type': 'Polygon',
              'arcs': [[2568, 2569, 2570, 2571, 2572, -2218, 2573]],
              'id': '18023'
            }, {
              'type': 'Polygon',
              'arcs': [[-696, 2574, -40, -1674, 2575, 2576]],
              'id': '38003'
            }, {
              'type': 'Polygon',
              'arcs': [[2577, 2578, 2579, 2580, 2581]],
              'id': '50015'
            }, {
              'type': 'Polygon',
              'arcs': [[2582, 2583, 2584, 2585, 2586, 2587]],
              'id': '13035'
            }, {
              'type': 'Polygon',
              'arcs': [[-2251, -2024, -2545, 2588, 2589, 2590]],
              'id': '55141'
            }, {
              'type': 'Polygon',
              'arcs': [[2591, -231, -891, -1838, -1038]],
              'id': '19197'
            }, {
              'type': 'Polygon',
              'arcs': [[2592, 2593, 2594, -546, 2595, -2321]],
              'id': '48319'
            }, {
              'type': 'Polygon',
              'arcs': [[2596, 2597, 2598, 2599]],
              'id': '48183'
            }, {
              'type': 'Polygon',
              'arcs': [[2600, 2601, 2602, 2603, 2604, 2605]],
              'id': '28105'
            }, {
              'type': 'Polygon',
              'arcs': [[-985, 983, -983, 981, -981, 2606, 2607, 2608]],
              'id': '06057'
            }, {
              'type': 'Polygon',
              'arcs': [[-2562, 2609, 2610, 2611, 2612]],
              'id': '31045'
            }, {
              'type': 'Polygon',
              'arcs': [[2613, 2614, 2615, 2616, 2617]],
              'id': '41033'
            }, {
              'type': 'Polygon',
              'arcs': [[-972, 2618, 2619, 2620, -2379]],
              'id': '31151'
            }, {
              'type': 'Polygon',
              'arcs': [[-1222, 2621, 2622, 2623, 2624]],
              'id': '48211'
            }, {
              'type': 'Polygon',
              'arcs': [[2625, -2587, 2626, 2627, 2628]],
              'id': '13171'
            }, {
              'type': 'Polygon',
              'arcs': [[2629, 2630, 2631, 2632, 2633]],
              'id': '28065'
            }, {
              'type': 'Polygon',
              'arcs': [[-1932, -952, 2634, 2635, 2636, 2637, 2638]],
              'id': '39089'
            }, {
              'type': 'Polygon',
              'arcs': [[-189, 2639, -1982, -819, 2640, 2641]],
              'id': '48069'
            }, {
              'type': 'Polygon',
              'arcs': [[2642, -1599, 2643, 2644, 2645]],
              'id': '26009'
            }, {
              'type': 'Polygon',
              'arcs': [[2646, 2647, 2648, 2649, 2650, -177]],
              'id': '20147'
            }, {
              'type': 'Polygon',
              'arcs': [[2651, 2652, 2653, 2654]],
              'id': '20067'
            }, {
              'type': 'Polygon',
              'arcs': [[-1986, 2655, 2656, 2657]],
              'id': '30007'
            }, {
              'type': 'Polygon',
              'arcs': [[-597, 2658, -794, 2659, -1968, 2660, -1055, 2661]],
              'id': '31019'
            }, {
              'type': 'Polygon',
              'arcs': [[2662, 2663, 2664, 2665]],
              'id': '32009'
            }, {
              'type': 'Polygon',
              'arcs': [[2666, 2667, 2668, 2669, 2670]],
              'id': '37135'
            }, {
              'type': 'Polygon',
              'arcs': [[2671, 2672, 2673, 2674, 2675, 2676]],
              'id': '16051'
            }, {
              'type': 'Polygon',
              'arcs': [[2677, -1199, 2678, -892, 2679]],
              'id': '18087'
            }, {
              'type': 'Polygon',
              'arcs': [[-967, 2680, 2681, 2682, -293, 2683]],
              'id': '19105'
            }, {
              'type': 'Polygon',
              'arcs': [[2684, 2685, 2686, 2687, 2688, 2689]],
              'id': '19027'
            }, {
              'type': 'Polygon',
              'arcs': [[2690, 2691, -697, -2577, 2692, -2231, 2693]],
              'id': '38093'
            }, {
              'type': 'Polygon',
              'arcs': [[2694, -1041, -1113, 2695, 2696, -2687]],
              'id': '19073'
            }, {
              'type': 'Polygon',
              'arcs': [[2697, 2698, 2699, 2700, 2701, 2702, 2703]],
              'id': '01003'
            }, {
              'type': 'Polygon',
              'arcs': [[2704, 2705, 2706, -1620, 2707, 2708, 2709]],
              'id': '26075'
            }, {
              'type': 'Polygon',
              'arcs': [[2710, -1635, 2711, 2712, 2713]],
              'id': '47067'
            }, {
              'type': 'Polygon',
              'arcs': [[-178, -2651, 2714, 2715, 2716, 2717]],
              'id': '20065'
            }, {
              'type': 'Polygon',
              'arcs': [[-1799, 2718, -1322, -1138]],
              'id': '20001'
            }, {
              'type': 'Polygon',
              'arcs': [[2719, 2720, 2721, 2722, 2723, 2724]],
              'id': '40127'
            }, {
              'type': 'Polygon',
              'arcs': [[2725, 2726, 2727, 2728, 2729]],
              'id': '48461'
            }, {
              'type': 'Polygon',
              'arcs': [[2730, -2521, 2731, -271, 2732, 2733]],
              'id': '46107'
            }, {
              'type': 'Polygon',
              'arcs': [[-1057, 2734, -2647, 2735]],
              'id': '31083'
            }, {
              'type': 'Polygon',
              'arcs': [[2736, 2737, 2738, 2739, 2740]],
              'id': '19063'
            }, {
              'type': 'Polygon',
              'arcs': [[2741, 2742, 2743, 2744, -1643]],
              'id': '38019'
            }, {
              'type': 'Polygon',
              'arcs': [[2745, 2746, 2747, 2748, 2749, 2750]],
              'id': '06109'
            }, {
              'type': 'Polygon',
              'arcs': [[-2716, 2751, -2192, -1566, 2752]],
              'id': '20195'
            }, {
              'type': 'Polygon',
              'arcs': [[2753, -935, -134, 2754, 2755]],
              'id': '48247'
            }, {
              'type': 'Polygon',
              'arcs': [[2756, 2757, 2758, 2759]],
              'id': '72069'
            }, {
              'type': 'Polygon',
              'arcs': [[2760, 2761, 2762]],
              'id': '55078'
            }, {
              'type': 'Polygon',
              'arcs': [[-1966, 2763, 2764, 2765, -2738, 2766]],
              'id': '27091'
            }, {
              'type': 'Polygon',
              'arcs': [[2767, 2768, 2769, -875, 2770, 2771]],
              'id': '01085'
            }, {
              'type': 'Polygon',
              'arcs': [[2772, 2773, -808, 2774, 2775, 2776]],
              'id': '21073'
            }, {
              'type': 'Polygon',
              'arcs': [[2777, 2778, 2779, 2780, 2781]],
              'id': '29205'
            }, {
              'type': 'Polygon',
              'arcs': [[2782, 2783, 2784, 2785, 2786, 2787]],
              'id': '40037'
            }, {
              'type': 'Polygon',
              'arcs': [[2788, 2789, 2790, 2791, 2792, 2793]],
              'id': '48285'
            }, {
              'type': 'Polygon',
              'arcs': [[-429, 2794, 2795, 2796, 2797, 2798]],
              'id': '55047'
            }, {
              'type': 'Polygon',
              'arcs': [[-598, -2662, -1054, -2375, 2799, 2800]],
              'id': '31047'
            }, {
              'type': 'Polygon',
              'arcs': [[-1335, -1200, -2678, 2801, 2802]],
              'id': '26149'
            }, {
              'type': 'Polygon',
              'arcs': [[2803, 2804, 2805, -860, 2806, 2807]],
              'id': '17081'
            }, {
              'type': 'Polygon',
              'arcs': [[2808, -480, 2809, -2531, 2810]],
              'id': '19131'
            }, {
              'type': 'Polygon',
              'arcs': [[2811, -2418, 2812, -2087, 2813, 2814]],
              'id': '02240'
            }, {
              'type': 'Polygon',
              'arcs': [[-1826, -1169, 2815]],
              'id': '17155'
            }, {
              'type': 'Polygon',
              'arcs': [[2816, 2817, -1183, 2818, 2819]],
              'id': '19137'
            }, {
              'type': 'Polygon',
              'arcs': [[2820, 2821, -223, 2822]],
              'id': '19017'
            }, {
              'type': 'Polygon',
              'arcs': [[2823, -1370, 2824, 2825, -2805, 2826]],
              'id': '17121'
            }, {
              'type': 'Polygon',
              'arcs': [[2827, 2828, 2829, 2830, 2831]],
              'id': '37025'
            }, {
              'type': 'Polygon',
              'arcs': [[2832, -945, 2833, -2727, 2834]],
              'id': '48329'
            }, {
              'type': 'Polygon',
              'arcs': [[-2322, -2596, -551, 2835, 2836, -1736]],
              'id': '48267'
            }, {
              'type': 'Polygon',
              'arcs': [[2837, 2838, 2839, 2840, 2841]],
              'id': '55103'
            }, {
              'type': 'Polygon',
              'arcs': [[-938, -421, 2842, -1679, -414, -687]],
              'id': '48065'
            }, {
              'type': 'Polygon',
              'arcs': [[2843, 2844, 2845, 2846, 2847]],
              'id': '21061'
            }, {
              'type': 'Polygon',
              'arcs': [[2848, 2849, 2850, 2851, 2852, 2853, 2854]],
              'id': '18047'
            }, {
              'type': 'Polygon',
              'arcs': [[2855, 2856, 2857, -1848, 2858, 2859]],
              'id': '16085'
            }, {
              'type': 'Polygon',
              'arcs': [[2860, 2861, 2862, 2863, 2864, 2865]],
              'id': '51109'
            }, {
              'type': 'Polygon',
              'arcs': [[2866, -1118, 2867, -2555, 2868, 2869, 2870]],
              'id': '48363'
            }, {
              'type': 'Polygon',
              'arcs': [[2871, -2641, -823, -243, 2872]],
              'id': '48279'
            }, {
              'type': 'Polygon',
              'arcs': [[2873, 2874, 2875, 2876, -2468, 2877, -316]],
              'id': '12131'
            }, {
              'type': 'Polygon',
              'arcs': [[-49, 2878, 2879, 2880, 2881]],
              'id': '36039'
            }, {
              'type': 'Polygon',
              'arcs': [[-1214, 2882, -489, 2883, -1889, 2884, 2885, 2886]],
              'id': '39037'
            }, {
              'type': 'Polygon',
              'arcs': [[-2262, 2887, 2888, 2889, 2890, 2891, 2892, -2145, 2893]],
              'id': '27007'
            }, {
              'type': 'Polygon',
              'arcs': [[2894, 2895, -907, -1354, -1350]],
              'id': '26133'
            }, {
              'type': 'Polygon',
              'arcs': [[-375, 2896, 2897, 2898, 2899, 2900]],
              'id': '20049'
            }, {
              'type': 'Polygon',
              'arcs': [[2901, 2902, 2903, 2904, 2905]],
              'id': '20075'
            }, {
              'type': 'Polygon',
              'arcs': [[2906, 2907, 2908, 2909, -1761, -1786, 2910, 2911]],
              'id': '27137'
            }, {
              'type': 'Polygon',
              'arcs': [[2912, 2913, 2914, -2214, 2915, 2916]],
              'id': '19183'
            }, {
              'type': 'Polygon',
              'arcs': [[-250, 2917, -2870, 2918, 2919, -1710, -2353]],
              'id': '48133'
            }, {
              'type': 'Polygon',
              'arcs': [[-2836, -550, 2920, 2921, 2922, 2923]],
              'id': '48265'
            }, {
              'type': 'Polygon',
              'arcs': [[2924, 2925, 2926, 2927, 2928, 2929]],
              'id': '36003'
            }, {
              'type': 'Polygon',
              'arcs': [[-822, 2930, -2308, -244]],
              'id': '48303'
            }, {
              'type': 'Polygon',
              'arcs': [[2931, 2932]],
              'id': '51775'
            }, {
              'type': 'Polygon',
              'arcs': [[2933, 2934]],
              'id': '51670'
            }, {
              'type': 'Polygon',
              'arcs': [[2935, 2936, 2937, 2938, -1814, 2939]],
              'id': '17073'
            }, {
              'type': 'Polygon',
              'arcs': [[2940, 2941, -1053, 2942, 2943]],
              'id': '28079'
            }, {
              'type': 'Polygon',
              'arcs': [[2944, 2945, 2946, 2947, 2948, 2949, 2950]],
              'id': '35057'
            }, {
              'type': 'Polygon',
              'arcs': [[2951, 2952, -153, 2953, 2954]],
              'id': '08095'
            }, {
              'type': 'Polygon',
              'arcs': [[2955, -2954, -157, 2956, 2957, 2958, -1030]],
              'id': '08125'
            }, {
              'type': 'Polygon',
              'arcs': [[2959, 2960, 2961, 2962]],
              'id': '19141'
            }, {
              'type': 'Polygon',
              'arcs': [[-2944, 2963, 2964, 2965, 2966]],
              'id': '28123'
            }, {
              'type': 'Polygon',
              'arcs': [[-590, 2967, 2968, 2969, -595]],
              'id': '31175'
            }, {
              'type': 'Polygon',
              'arcs': [[2970, -1310, 2971, 2972, -2828, 2973, 2974, 2975, -1974]],
              'id': '37097'
            }, {
              'type': 'Polygon',
              'arcs': [[2976, 2977, 2978, 2979, 2980]],
              'id': '01057'
            }, {
              'type': 'Polygon',
              'arcs': [[2981, 2982, -180, 2983, -899, 2984]],
              'id': '20039'
            }, {
              'type': 'Polygon',
              'arcs': [[2985, 2986, 2987, 2988, 2989, -2098]],
              'id': '41001'
            }, {
              'type': 'Polygon',
              'arcs': [[2990, 2991, 2992, 2993, 2994]],
              'id': '01133'
            }, {
              'type': 'Polygon',
              'arcs': [[2995, 2996, 2997, 2998, 2999]],
              'id': '29221'
            }, {
              'type': 'Polygon',
              'arcs': [[3000, 3001, 3002]],
              'id': '72015'
            }, {
              'type': 'Polygon',
              'arcs': [[3003, 3004, 3005, 3006, 3007, 3008, 3009]],
              'id': '18007'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[3010]], [[3011]], [[3012]], [[3013]], [[3014, 3015, 3016, 3017, 3018, 3019, 3020, 3021]]],
              'id': '06083'
            }, {
              'type': 'Polygon',
              'arcs': [[3022, -576, -2226, 3023, 3024]],
              'id': '06105'
            }, {
              'type': 'Polygon',
              'arcs': [[3025, 3026, 3027, 3028, 3029, 3030]],
              'id': '17117'
            }, {
              'type': 'Polygon',
              'arcs': [[3031, 3032, 3033, 3034, -1313, -2187]],
              'id': '26145'
            }, {
              'type': 'Polygon',
              'arcs': [[-2869, -2554, 3035, 3036, -704, 3037, -2919]],
              'id': '48143'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[3038, 3039, 3040, 3041, 3042, 3043]], [[3044, 3045]]],
              'id': '12101'
            }, {
              'type': 'Polygon',
              'arcs': [[3046, 3047, -818, 3048, 3049]],
              'id': '37169'
            }, {
              'type': 'Polygon',
              'arcs': [[3050, 3051, -2860, 3052, 3053, 3054, 3055]],
              'id': '16045'
            }, {
              'type': 'Polygon',
              'arcs': [[3056, 3057, 3058, 3059, 3060]],
              'id': '54021'
            }, {
              'type': 'Polygon',
              'arcs': [[-738, 3061, 3062, 3063, 3064, 3065]],
              'id': '40003'
            }, {
              'type': 'Polygon',
              'arcs': [[3066, 3067, 3068, 3069, 3070, -1547, 3071]],
              'id': '20201'
            }, {
              'type': 'Polygon',
              'arcs': [[3072, 3073, 3074, 3075, 3076]],
              'id': '13109'
            }, {
              'type': 'Polygon',
              'arcs': [[3077, 3078, 3079, -1218, 3080, 3081, 3082]],
              'id': '18065'
            }, {
              'type': 'Polygon',
              'arcs': [[3083, 3084, 3085, 3086]],
              'id': '45023'
            }, {
              'type': 'Polygon',
              'arcs': [[3087, -2005, -10, 3088, 3089, 3090, 3091]],
              'id': '04012'
            }, {
              'type': 'Polygon',
              'arcs': [[3092, 3093, 3094, -593, 3095, -461]],
              'id': '31009'
            }, {
              'type': 'Polygon',
              'arcs': [[-2858, 3096, -2000, -1530, 3097, 3098, -1843]],
              'id': '16059'
            }, {
              'type': 'Polygon',
              'arcs': [[3099, -1048, 3100, 3101, 3102]],
              'id': '20069'
            }, {
              'type': 'Polygon',
              'arcs': [[-2436, 3103, 3104, 3105, 3106]],
              'id': '28097'
            }, {
              'type': 'Polygon',
              'arcs': [[3107, 3108, 3109, 3110, -2597, 3111, 3112]],
              'id': '48459'
            }, {
              'type': 'Polygon',
              'arcs': [[3113, 3114, 3115, 3116, 3117, 3118, -548]],
              'id': '48031'
            }, {
              'type': 'Polygon',
              'arcs': [[3119, 3120, 3121, 3122, 3123]],
              'id': '20061'
            }, {
              'type': 'Polygon',
              'arcs': [[3124, 3125, 3126, 3127, 3128, 3129]],
              'id': '21041'
            }, {
              'type': 'Polygon',
              'arcs': [[3130, 3131, -1289, -1578, 3132]],
              'id': '18099'
            }, {
              'type': 'Polygon',
              'arcs': [[3133, -817, 3134, -1201, 3135]],
              'id': '37081'
            }, {
              'type': 'Polygon',
              'arcs': [[3136, 3137]],
              'id': '51610'
            }, {
              'type': 'Polygon',
              'arcs': [[3138]],
              'id': '51678'
            }, {
              'type': 'Polygon',
              'arcs': [[3139, -2709, 3140, 3141, 3142, 3143, -1197]],
              'id': '26059'
            }, {
              'type': 'Polygon',
              'arcs': [[-1209, 3144, -2259, 3145, -2903, 3146]],
              'id': '20203'
            }, {
              'type': 'Polygon',
              'arcs': [[-1946, 3147, 3148, 3149, 3150]],
              'id': '27039'
            }, {
              'type': 'Polygon',
              'arcs': [[3151, -1174, 3152, -1250]],
              'id': '17039'
            }, {
              'type': 'Polygon',
              'arcs': [[-1718, -946, -2833, 3153, 3154, 3155]],
              'id': '48003'
            }, {
              'type': 'Polygon',
              'arcs': [[3156, -1454, -604, 3157, -2093, -123, 3158]],
              'id': '46111'
            }, {
              'type': 'Polygon',
              'arcs': [[3159, 3160, -1949, 3161, 3162, 3163]],
              'id': '27079'
            }, {
              'type': 'Polygon',
              'arcs': [[3164, 3165, 3166, 3167, -988, 3168]],
              'id': '55105'
            }, {
              'type': 'Polygon',
              'arcs': [[-1947, -3151, 3169, -1361, 3170]],
              'id': '27147'
            }, {
              'type': 'Polygon',
              'arcs': [[3171, 3172, 3173, 3174, 3175, 3176]],
              'id': '42065'
            }, {
              'type': 'Polygon',
              'arcs': [[3177, 3178, -1043, 3179, 3180]],
              'id': '19151'
            }, {
              'type': 'Polygon',
              'arcs': [[-1508, -1347, 3181, 3182, 3183, -744]],
              'id': '27105'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[3184, 3185]], [[3186]], [[3187]], [[3188]], [[3189]], [[3190]], [[3191]], [[3192]], [[3193]], [[3194]], [[3195]], [[3196]], [[-1654, 3197]], [[3198, 3199]]],
              'id': '02198'
            }, {
              'type': 'Polygon',
              'arcs': [[3200, 3201, 3202, -353]],
              'id': '46121'
            }, {
              'type': 'Polygon',
              'arcs': [[3203, 3204, 3205, 3206, 3207]],
              'id': '13003'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-3200, 3208]], [[3209]], [[-1442, 3210]]],
              'id': '02220'
            }, {
              'type': 'Polygon',
              'arcs': [[-2437, -3107, 3211, 3212, 3213]],
              'id': '28015'
            }, {
              'type': 'Polygon',
              'arcs': [[3214, 3215, -1834, 3216]],
              'id': '12111'
            }, {
              'type': 'Polygon',
              'arcs': [[-290, -2174, -1703, 3217, 3218]],
              'id': '19051'
            }, {
              'type': 'Polygon',
              'arcs': [[3219, 3220, 3221, 3222, 3223]],
              'id': '17109'
            }, {
              'type': 'Polygon',
              'arcs': [[3224, 3225, 3226, 3227, 3228]],
              'id': '39143'
            }, {
              'type': 'Polygon',
              'arcs': [[-2826, 3229, -1189, 3230, 3231, -861, -2806]],
              'id': '17191'
            }, {
              'type': 'Polygon',
              'arcs': [[3232, 3233, 3234, 3235, 3236, 3237]],
              'id': '48243'
            }, {
              'type': 'Polygon',
              'arcs': [[3238, -858, 3239, -3160, 3240, 3241]],
              'id': '27143'
            }, {
              'type': 'Polygon',
              'arcs': [[3242, -1098, 3243, -1802]],
              'id': '48275'
            }, {
              'type': 'Polygon',
              'arcs': [[3244, 3245, 3246, 3247, 3248, 3249, 3250]],
              'id': '17163'
            }, {
              'type': 'Polygon',
              'arcs': [[-788, 3251, 3252, 3253, -1024]],
              'id': '26011'
            }, {
              'type': 'Polygon',
              'arcs': [[-1375, 3254, 3255, 3256, -1184, 3257]],
              'id': '17079'
            }, {
              'type': 'Polygon',
              'arcs': [[-1548, -3071, 3258, -3120, 3259, 3260]],
              'id': '20027'
            }, {
              'type': 'Polygon',
              'arcs': [[3261, 3262, 3263, 3264, -2001, -3097, -2857, 3265, 3266]],
              'id': '16049'
            }, {
              'type': 'Polygon',
              'arcs': [[3267, -1647, 3268, -2194]],
              'id': '38079'
            }, {
              'type': 'Polygon',
              'arcs': [[-2984, -179, -2718, 3269, -900]],
              'id': '20179'
            }, {
              'type': 'Polygon',
              'arcs': [[3270, 3271, -3114, -547, -2595]],
              'id': '48299'
            }, {
              'type': 'Polygon',
              'arcs': [[3272, 3273, 3274, -2337, 3275, 3276, 3277]],
              'id': '08101'
            }, {
              'type': 'Polygon',
              'arcs': [[3278, 3279, -2618, 3280, 3281]],
              'id': '41015'
            }, {
              'type': 'Polygon',
              'arcs': [[3282, -2605, 3283, 3284, -1050, 3285]],
              'id': '28159'
            }, {
              'type': 'Polygon',
              'arcs': [[-2661, -1972, 3286, -1056]],
              'id': '31099'
            }, {
              'type': 'Polygon',
              'arcs': [[-2479, 3287, 3288, 3289, -1120, 3290, 3291]],
              'id': '72019'
            }, {
              'type': 'Polygon',
              'arcs': [[3292, -2426, 3293, 3294, 3295, 3296, 3297, 3298]],
              'id': '54103'
            }, {
              'type': 'Polygon',
              'arcs': [[3299, -844, 3300, 3301]],
              'id': '13201'
            }, {
              'type': 'Polygon',
              'arcs': [[-1860, 3302, 3303, 3304, -163]],
              'id': '08003'
            }, {
              'type': 'Polygon',
              'arcs': [[-784, -2529, -741, 3305, 3306, -1045]],
              'id': '20097'
            }, {
              'type': 'Polygon',
              'arcs': [[3307, 3308, 3309, -717]],
              'id': '38041'
            }, {
              'type': 'Polygon',
              'arcs': [[-3149, 3310, 3311, 3312, 3313, 3314]],
              'id': '27109'
            }, {
              'type': 'Polygon',
              'arcs': [[3315, -2475, 3316, -1751]],
              'id': '72077'
            }, {
              'type': 'Polygon',
              'arcs': [[-1857, 3317, -2690, -1152, 3318, 3319]],
              'id': '19047'
            }, {
              'type': 'Polygon',
              'arcs': [[3320, 3321, 3322, -1259, 3323, -2558]],
              'id': '20139'
            }, {
              'type': 'Polygon',
              'arcs': [[3324, -227, 3325, -776, -1841]],
              'id': '19075'
            }, {
              'type': 'Polygon',
              'arcs': [[3326, 3327, -903, 3328, -1207, 3329]],
              'id': '20181'
            }, {
              'type': 'Polygon',
              'arcs': [[-2119, 3330, 3331, 3332, 3333]],
              'id': '72121'
            }, {
              'type': 'Polygon',
              'arcs': [[-2689, 3334, 3335, -1153]],
              'id': '19009'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[3336]], [[3337]], [[3338]], [[3339]], [[3340]], [[3341]], [[3342, -748, 3343, 3344, 3345, 3346]]],
              'id': '23009'
            }, {
              'type': 'Polygon',
              'arcs': [[3347, 3348, 3349, 3350, 3351, 3352]],
              'id': '05081'
            }, {
              'type': 'Polygon',
              'arcs': [[3353, 3354, 3355, 3356]],
              'id': '05143'
            }, {
              'type': 'Polygon',
              'arcs': [[3357, 3358, 3359, 3360, -2539, 3361]],
              'id': '05119'
            }, {
              'type': 'Polygon',
              'arcs': [[3362, 3363, 3364, 3365, -3359, 3366]],
              'id': '05085'
            }, {
              'type': 'Polygon',
              'arcs': [[3367, 3368, 3369, 3370, 3371, 3372, 3373]],
              'id': '08009'
            }, {
              'type': 'Polygon',
              'arcs': [[3374, 3375, 3376, 3377, 3378, 3379, 3380, 3381]],
              'id': '16031'
            }, {
              'type': 'Polygon',
              'arcs': [[3382, 3383, 3384, 3385, 3386, 3387, 3388]],
              'id': '01021'
            }, {
              'type': 'Polygon',
              'arcs': [[-1961, 3389, 3390, 3391, 3392, -197]],
              'id': '13081'
            }, {
              'type': 'Polygon',
              'arcs': [[3393, 3394, -1506, -1517, 3395]],
              'id': '27083'
            }, {
              'type': 'Polygon',
              'arcs': [[3396, 3397, 3398, 3399, 3400, 3401]],
              'id': '51049'
            }, {
              'type': 'Polygon',
              'arcs': [[3402, 3403, 3404, 3405, 3406, 3407]],
              'id': '31133'
            }, {
              'type': 'Polygon',
              'arcs': [[-2624, 3408, -541, 3409, -1678]],
              'id': '48483'
            }, {
              'type': 'Polygon',
              'arcs': [[-398, 3410, 3411, -34, -2575, -695]],
              'id': '38091'
            }, {
              'type': 'Polygon',
              'arcs': [[-926, -973, -2378, 3412]],
              'id': '31185'
            }, {
              'type': 'Polygon',
              'arcs': [[-2644, -911, 3413, 3414]],
              'id': '26079'
            }, {
              'type': 'Polygon',
              'arcs': [[-2650, 3415, 3416, -2188, -2752, -2715]],
              'id': '20163'
            }, {
              'type': 'Polygon',
              'arcs': [[3417, 3418, 3419, -3255, -1374]],
              'id': '17035'
            }, {
              'type': 'Polygon',
              'arcs': [[3420, 3421, 3422, 3423, -2122, 3424, 3425]],
              'id': '54101'
            }, {
              'type': 'Polygon',
              'arcs': [[3426, 3427, 3428, 3429, 3430]],
              'id': '28139'
            }, {
              'type': 'Polygon',
              'arcs': [[3431, 3432, 3433, 3434, 3435, 3436, -3204, 3437]],
              'id': '13069'
            }, {
              'type': 'Polygon',
              'arcs': [[3438, 3439, 3440, 3441, 3442]],
              'id': '20169'
            }, {
              'type': 'Polygon',
              'arcs': [[3443, 3444, 3445, 3446]],
              'id': '28119'
            }, {
              'type': 'Polygon',
              'arcs': [[-2693, -2576, -1676, -342, 3447, -2232]],
              'id': '38045'
            }, {
              'type': 'Polygon',
              'arcs': [[3448, -3443, 3449, 3450, 3451, 3452]],
              'id': '20053'
            }, {
              'type': 'Polygon',
              'arcs': [[3453, 3454, 3455, -70, 3456, 3457, 3458, 3459]],
              'id': '18055'
            }, {
              'type': 'Polygon',
              'arcs': [[3460, 3461, -1707, 3462, 3463, 3464, -2443]],
              'id': '29001'
            }, {
              'type': 'Polygon',
              'arcs': [[3465, 3466, 3467, 3468, -950, 3469]],
              'id': '39075'
            }, {
              'type': 'Polygon',
              'arcs': [[-2268, -2285, 3470, 3471, 3472]],
              'id': '05029'
            }, {
              'type': 'Polygon',
              'arcs': [[-1579, -1294, 3473, 3474, 3475]],
              'id': '18131'
            }, {
              'type': 'Polygon',
              'arcs': [[3476, 3477, 3478, 3479, -3289]],
              'id': '72045'
            }, {
              'type': 'Polygon',
              'arcs': [[3480, 3481, -238, -791, 3482, -2969]],
              'id': '31077'
            }, {
              'type': 'Polygon',
              'arcs': [[3483, -555, -2338, -2931]],
              'id': '48107'
            }, {
              'type': 'Polygon',
              'arcs': [[3484, 3485, 3486, 3487, 3488, 3489, 3490]],
              'id': '21083'
            }, {
              'type': 'Polygon',
              'arcs': [[3491, 3492, 3493, 3494, 3495, 3496]],
              'id': '21171'
            }, {
              'type': 'Polygon',
              'arcs': [[3497, -1372, 3498, 3499]],
              'id': '17005'
            }, {
              'type': 'Polygon',
              'arcs': [[3500, 3501, 3502, 3503, 3504, 3505, 3506]],
              'id': '05097'
            }, {
              'type': 'Polygon',
              'arcs': [[3507, 3508, 3509, 3510, 3511, -1227]],
              'id': '47159'
            }, {
              'type': 'Polygon',
              'arcs': [[3512, 3513, 3514, 3515, 3516, 3517]],
              'id': '17045'
            }, {
              'type': 'Polygon',
              'arcs': [[3518, 3519, 3520, 3521, 3522, 3523]],
              'id': '42021'
            }, {
              'type': 'Polygon',
              'arcs': [[3524, 3525, 3526, 3527, 3528, 3529]],
              'id': '41043'
            }, {
              'type': 'Polygon',
              'arcs': [[-867, -350, 3530, -3242, 3531, 3532, 3533, 3534, 3535]],
              'id': '27129'
            }, {
              'type': 'Polygon',
              'arcs': [[3536, 3537, 3538, 3539, -1386, -2134]],
              'id': '27153'
            }, {
              'type': 'Polygon',
              'arcs': [[3540, 3541, 3542, 3543, -3526, 3544]],
              'id': '41047'
            }, {
              'type': 'Polygon',
              'arcs': [[3545, -241, 3546, 3547, 3548, 3549, 3550]],
              'id': '42071'
            }, {
              'type': 'Polygon',
              'arcs': [[3551, 3552, 3553, 3554, -2283]],
              'id': '05023'
            }, {
              'type': 'Polygon',
              'arcs': [[3555, 3556, -3433, 3557, 3558]],
              'id': '13017'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[3559]], [[3560]], [[3561]], [[3562, 3563]]],
              'id': '15009'
            }, {
              'type': 'Polygon',
              'arcs': [[3564, 3565, 3566, 3567, 3568, -1587]],
              'id': '29169'
            }, {
              'type': 'Polygon',
              'arcs': [[-1415, 3569, -932, -558]],
              'id': '48311'
            }, {
              'type': 'Polygon',
              'arcs': [[-1035, -968, -2684, -292, 3570, 3571]],
              'id': '19113'
            }, {
              'type': 'Polygon',
              'arcs': [[-420, -633, 3572, -1223, -2625, -1677, -2843]],
              'id': '48393'
            }, {
              'type': 'Polygon',
              'arcs': [[-1871, 3573, -2917, 3574, -288, -1241]],
              'id': '19107'
            }, {
              'type': 'Polygon',
              'arcs': [[-2106, 3575, 3576, 3577, 3578, 3579]],
              'id': '39073'
            }, {
              'type': 'Polygon',
              'arcs': [[3580, 3581, 3582, 3583, 3584]],
              'id': '13053'
            }, {
              'type': 'Polygon',
              'arcs': [[3585, -2567, 3586, 3587, -1474]],
              'id': '30065'
            }, {
              'type': 'Polygon',
              'arcs': [[3588, -647, 3589, 3590]],
              'id': '13149'
            }, {
              'type': 'Polygon',
              'arcs': [[3591, 3592]],
              'id': '27031'
            }, {
              'type': 'Polygon',
              'arcs': [[3593, 3594, -2685, -3318, -1856]],
              'id': '19161'
            }, {
              'type': 'Polygon',
              'arcs': [[3595, 3596, 3597, -2668, 3598]],
              'id': '37145'
            }, {
              'type': 'Polygon',
              'arcs': [[-2416, -1776, 3599]],
              'id': '02185'
            }, {
              'type': 'Polygon',
              'arcs': [[3600, 3601, 3602]],
              'id': '72095'
            }, {
              'type': 'Polygon',
              'arcs': [[3603, -2205, 3604, 3605, -2153]],
              'id': '18069'
            }, {
              'type': 'Polygon',
              'arcs': [[3606, -2999, 3607, 3608, 3609, 3610, -2314]],
              'id': '29093'
            }, {
              'type': 'Polygon',
              'arcs': [[-554, -2357, -1073, 3611, -2339]],
              'id': '48263'
            }, {
              'type': 'Polygon',
              'arcs': [[3612, 3613, -2441, 3614, 3615, 3616, 3617, 3618]],
              'id': '51155'
            }, {
              'type': 'Polygon',
              'arcs': [[3619, -1700, -1595, 3620, 3621, -2458]],
              'id': '29025'
            }, {
              'type': 'Polygon',
              'arcs': [[3622, 3623, 3624, 3625, 3626, 3627]],
              'id': '01073'
            }, {
              'type': 'Polygon',
              'arcs': [[3628]],
              'id': '15001'
            }, {
              'type': 'Polygon',
              'arcs': [[3629, 3630, 3631, 3632]],
              'id': '53023'
            }, {
              'type': 'Polygon',
              'arcs': [[3633, 3634, 3635, 3636, 3637]],
              'id': '01027'
            }, {
              'type': 'Polygon',
              'arcs': [[3638, 3639, -1858, 3640, 3641, 3642, 3643]],
              'id': '19193'
            }, {
              'type': 'Polygon',
              'arcs': [[3644, -1155, 3645, -2817, 3646, 3647, 3648, 3649]],
              'id': '19155'
            }, {
              'type': 'Polygon',
              'arcs': [[-1845, 3650, 3651, 3652, -3377, 3653, -21, 3654, 3655]],
              'id': '16013'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[3656]], [[3657, 3658, -3347, 3659, 3660, 3661, 3662]]],
              'id': '23027'
            }, {
              'type': 'Polygon',
              'arcs': [[3663, 3664, 3665, 3666, 3667, 3668]],
              'id': '25025'
            }, {
              'type': 'Polygon',
              'arcs': [[3669, 3670, 3671, 3672, 3673, 3674]],
              'id': '25011'
            }, {
              'type': 'Polygon',
              'arcs': [[-1025, -3254, 3675, 3676, -3032, -2186]],
              'id': '26017'
            }, {
              'type': 'Polygon',
              'arcs': [[3677, 3678, 3679, -3396, -1516]],
              'id': '27081'
            }, {
              'type': 'Polygon',
              'arcs': [[3680, 3681, 3682, 3683, 3684, 3685]],
              'id': '28011'
            }, {
              'type': 'Polygon',
              'arcs': [[3686, 3687, 3688, -1005]],
              'id': '26007'
            }, {
              'type': 'Polygon',
              'arcs': [[3689, 3690, 3691, 3692, 3693, 3694, 3695]],
              'id': '26053'
            }, {
              'type': 'Polygon',
              'arcs': [[3696, -327, 3697, 3698, -3658, 3699, 3700]],
              'id': '23025'
            }, {
              'type': 'Polygon',
              'arcs': [[3701, 3702, 3703, 3704, 3705, 3706, 3707, 3708, 3709]],
              'id': '28149'
            }, {
              'type': 'Polygon',
              'arcs': [[3710, 3711, 3712, 3713, 3714, 3715, 3716]],
              'id': '36075'
            }, {
              'type': 'Polygon',
              'arcs': [[3717, -3534, 3718, -1343, -1507, -3395]],
              'id': '27127'
            }, {
              'type': 'Polygon',
              'arcs': [[3719, 3720, 3721, 3722, 3723, 3724, 3725]],
              'id': '39095'
            }, {
              'type': 'Polygon',
              'arcs': [[3726, -296, 3727, 3728, 3729]],
              'id': '19139'
            }, {
              'type': 'Polygon',
              'arcs': [[-531, 3730, 3731, 3732, 3733, 3734]],
              'id': '40033'
            }, {
              'type': 'Polygon',
              'arcs': [[-3647, -2820, 3735, 3736, 3737]],
              'id': '19129'
            }, {
              'type': 'Polygon',
              'arcs': [[3738, 3739, 3740, 3741]],
              'id': '36059'
            }, {
              'type': 'Polygon',
              'arcs': [[3742, 3743, 3744, 3745, 3746, 3747]],
              'id': '30109'
            }, {
              'type': 'Polygon',
              'arcs': [[3748, 3749, 3750, 3751, 3752]],
              'id': '29155'
            }, {
              'type': 'Polygon',
              'arcs': [[3753, 3754, 3755, 3756, 3757, -2780]],
              'id': '29127'
            }, {
              'type': 'Polygon',
              'arcs': [[3758, 3759, -1629, 3760, 3761]],
              'id': '35017'
            }, {
              'type': 'Polygon',
              'arcs': [[3762, -171, 3763, 3764, 3765, 3766, 3767, 3768]],
              'id': '51107'
            }, {
              'type': 'Polygon',
              'arcs': [[3769, 3770, 3771, 3772, 3773, -1426]],
              'id': '46105'
            }, {
              'type': 'Polygon',
              'arcs': [[3774, -3118, 3775, 3776, 3777]],
              'id': '48091'
            }, {
              'type': 'Polygon',
              'arcs': [[3778, -2756, 3779, 3780]],
              'id': '48505'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[3781, 3782, 3783, 3784]], [[3785, 3786, 3787, 3788]], [[3789, 3790, 3791]]],
              'id': '48007'
            }, {
              'type': 'Polygon',
              'arcs': [[3792, 3793, 3794, 3795, 3796, 3797]],
              'id': '48361'
            }, {
              'type': 'Polygon',
              'arcs': [[3798, -3155, 3799, 3800, 3801]],
              'id': '48495'
            }, {
              'type': 'Polygon',
              'arcs': [[3802, 3803, 3804, 3805, 3806, 3807]],
              'id': '51011'
            }, {
              'type': 'Polygon',
              'arcs': [[3808, 3809, 3810, -1108, 3811, 3812, 3813, -2504]],
              'id': '53025'
            }, {
              'type': 'Polygon',
              'arcs': [[3814, -3297, 3815, 3816, -3058, 3817]],
              'id': '54017'
            }, {
              'type': 'Polygon',
              'arcs': [[3818, -563, 3819, 3820, -2123, -3424, 3821]],
              'id': '54083'
            }, {
              'type': 'Polygon',
              'arcs': [[-3183, 3822, 3823, -2960, 3824]],
              'id': '19143'
            }, {
              'type': 'Polygon',
              'arcs': [[-1320, 3825, 3826, 3827, 3828]],
              'id': '21189'
            }, {
              'type': 'Polygon',
              'arcs': [[3829, 3830, -1078, 3831]],
              'id': '37181'
            }, {
              'type': 'Polygon',
              'arcs': [[-728, 3832, 3833, 3834, 3835, 3836]],
              'id': '04007'
            }, {
              'type': 'Polygon',
              'arcs': [[3837, 3838, 3839, 3840, -2281, -2266, 3841]],
              'id': '05129'
            }, {
              'type': 'Polygon',
              'arcs': [[3842, 3843, 3844, 3845, 3846, 3847]],
              'id': '05095'
            }, {
              'type': 'Polygon',
              'arcs': [[3848, 3849, -2463, -2877]],
              'id': '12133'
            }, {
              'type': 'Polygon',
              'arcs': [[3850, 3851, -1775, 3852, -2584, 3853]],
              'id': '13217'
            }, {
              'type': 'Polygon',
              'arcs': [[3854, 3855, 3856, -3040, 3857, 3858]],
              'id': '12119'
            }, {
              'type': 'Polygon',
              'arcs': [[-1584, 3859, -2854, 3860, -76, 3861]],
              'id': '18031'
            }, {
              'type': 'Polygon',
              'arcs': [[3862, 3863, 3864, -1034, -2822]],
              'id': '19065'
            }, {
              'type': 'Polygon',
              'arcs': [[3865, -778, -1872, -1239, -1862, -1883]],
              'id': '19099'
            }, {
              'type': 'Polygon',
              'arcs': [[3866, 3867, -1321, -3829, 3868, 3869, 3870]],
              'id': '21109'
            }, {
              'type': 'Polygon',
              'arcs': [[3871, 3872, 3873, -3703, 3874, 3875]],
              'id': '22035'
            }, {
              'type': 'Polygon',
              'arcs': [[-853, 3876, 3877, 3878, 3879, 3880]],
              'id': '22113'
            }, {
              'type': 'Polygon',
              'arcs': [[3881, 3882, 3883, 3884, -850, 3885]],
              'id': '22039'
            }, {
              'type': 'Polygon',
              'arcs': [[3886, -1701, -3620, -2457, 3887, 3888]],
              'id': '29063'
            }, {
              'type': 'Polygon',
              'arcs': [[-1304, 3889, 3890, 3891, -2996, 3892, 3893]],
              'id': '29071'
            }, {
              'type': 'Polygon',
              'arcs': [[3894, 3895, -3403, 3896]],
              'id': '31097'
            }, {
              'type': 'Polygon',
              'arcs': [[3897, -673, 3898, -3481, -2968, -589]],
              'id': '31183'
            }, {
              'type': 'Polygon',
              'arcs': [[3899, 3900, 3901, 3902, -1625, -3760, 3903]],
              'id': '35051'
            }, {
              'type': 'Polygon',
              'arcs': [[3904, 3905, 3906, 3907, 3908, 3909]],
              'id': '37107'
            }, {
              'type': 'Polygon',
              'arcs': [[3910, 3911, 3912, 3913, 3914, 3915]],
              'id': '37045'
            }, {
              'type': 'Polygon',
              'arcs': [[3916, 3917, 3918, 3919, 3920]],
              'id': '31105'
            }, {
              'type': 'Polygon',
              'arcs': [[3921, 3922, -2240, 3923, 3924, 3925]],
              'id': '40145'
            }, {
              'type': 'Polygon',
              'arcs': [[3926, 3927, 3928, 3929]],
              'id': '40027'
            }, {
              'type': 'Polygon',
              'arcs': [[3930, 3931, 3932, -2395]],
              'id': '40099'
            }, {
              'type': 'Polygon',
              'arcs': [[3933, 3934, 3935, -1017]],
              'id': '42003'
            }, {
              'type': 'Polygon',
              'arcs': [[3936, 3937, 3938, -3087, 3939, 3940, 3941]],
              'id': '45087'
            }, {
              'type': 'Polygon',
              'arcs': [[3942, -276, -2241, 3943]],
              'id': '46065'
            }, {
              'type': 'Polygon',
              'arcs': [[3944, 3945, 3946, 3947, 3948, 3949]],
              'id': '21235'
            }, {
              'type': 'Polygon',
              'arcs': [[3950, 3951, -1072, 3952, 3953, 3954]],
              'id': '37175'
            }, {
              'type': 'Polygon',
              'arcs': [[3955, 3956, 3957, 3958, 3959, 3960, -3907]],
              'id': '37049'
            }, {
              'type': 'Polygon',
              'arcs': [[-2356, 3961, -252, -2352, -409, -1075]],
              'id': '48253'
            }, {
              'type': 'Polygon',
              'arcs': [[3962]],
              'id': '51720'
            }, {
              'type': 'Polygon',
              'arcs': [[3963, 3964, 3965, 3966, 3967, 3968]],
              'id': '39105'
            }, {
              'type': 'Polygon',
              'arcs': [[3969, 3970, -3969, 3971, 3972, 3973]],
              'id': '39053'
            }, {
              'type': 'Polygon',
              'arcs': [[3974, -3425, -2127, 3975, 3976, 3977, 3978, 3979]],
              'id': '54025'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[3980]], [[3981]], [[3982]], [[3983, 3984]]],
              'id': '78030'
            }, {
              'type': 'Polygon',
              'arcs': [[3985, 3986, 3987, -612, 3988]],
              'id': '05111'
            }, {
              'type': 'Polygon',
              'arcs': [[3989, 3990, 3991, -2750, 3992, 3993]],
              'id': '06099'
            }, {
              'type': 'Polygon',
              'arcs': [[3994, 3995, 3996, 3997, 3998]],
              'id': '06011'
            }, {
              'type': 'Polygon',
              'arcs': [[3999, 4000, 4001, 4002, 4003]],
              'id': '13089'
            }, {
              'type': 'Polygon',
              'arcs': [[4004, 4005, 4006, 4007, 4008]],
              'id': '13311'
            }, {
              'type': 'Polygon',
              'arcs': [[4009, 4010, 4011, -769, 4012, 4013]],
              'id': '13115'
            }, {
              'type': 'Polygon',
              'arcs': [[4014, -24, 4015, 4016, 4017]],
              'id': '16047'
            }, {
              'type': 'Polygon',
              'arcs': [[4018, -990, -1146, 4019, 4020, 4021]],
              'id': '17141'
            }, {
              'type': 'Polygon',
              'arcs': [[4022, 4023, 4024, -3744, 4025]],
              'id': '30083'
            }, {
              'type': 'Polygon',
              'arcs': [[4026, 4027, 4028, 4029, 4030]],
              'id': '37065'
            }, {
              'type': 'Polygon',
              'arcs': [[4031, 4032, -634, -937, 4033]],
              'id': '48421'
            }, {
              'type': 'Polygon',
              'arcs': [[4034, 4035, 4036, 4037, 4038]],
              'id': '01017'
            }, {
              'type': 'Polygon',
              'arcs': [[-1269, -1274, 4039, 4040, -2746, 4041]],
              'id': '06003'
            }, {
              'type': 'Polygon',
              'arcs': [[-2616, 4042, 4043, 4044, -565, -3023, 4045, 4046]],
              'id': '06093'
            }, {
              'type': 'Polygon',
              'arcs': [[4047, 4048, 4049, -1235]],
              'id': '08083'
            }, {
              'type': 'Polygon',
              'arcs': [[4050, 4051, -2143, 4052, 4053, 4054]],
              'id': '13213'
            }, {
              'type': 'Polygon',
              'arcs': [[4055, 4056, 4057, 4058, 4059, -3379]],
              'id': '16071'
            }, {
              'type': 'Polygon',
              'arcs': [[4060, 4061, 4062, 4063, 4064, 4065]],
              'id': '18129'
            }, {
              'type': 'Polygon',
              'arcs': [[4066, 4067, 4068, 4069, 4070, 4071, 4072, 4073, 4074]],
              'id': '21093'
            }, {
              'type': 'Polygon',
              'arcs': [[-3796, 4075, 4076, -3880, 4077, 4078]],
              'id': '22023'
            }, {
              'type': 'Polygon',
              'arcs': [[4079, 4080, 4081, 4082, -1256]],
              'id': '20121'
            }, {
              'type': 'Polygon',
              'arcs': [[-2859, -1847, 4083, 4084, -3053]],
              'id': '16015'
            }, {
              'type': 'Polygon',
              'arcs': [[-2675, 4085, 4086, 4087, 4088, 4089, 4090]],
              'id': '16019'
            }, {
              'type': 'Polygon',
              'arcs': [[4091, 4092, 4093, 4094, 4095, 4096, 4097]],
              'id': '25023'
            }, {
              'type': 'Polygon',
              'arcs': [[4098, 4099, 4100, 4101, 4102, 4103, 4104, 4105]],
              'id': '22077'
            }, {
              'type': 'Polygon',
              'arcs': [[4106, 4107, -1665, -202, 4108]],
              'id': '26043'
            }, {
              'type': 'Polygon',
              'arcs': [[-2548, -1609, 4109, 4110, -1649, 4111]],
              'id': '29097'
            }, {
              'type': 'Polygon',
              'arcs': [[4112, -2654, 4113, 4114, 4115, 4116]],
              'id': '20189'
            }, {
              'type': 'Polygon',
              'arcs': [[4117, 4118, 4119, 4120, 4121, 4122]],
              'id': '17085'
            }, {
              'type': 'Polygon',
              'arcs': [[-3222, 4123, -1817, 4124, -1877, 4125, 4126]],
              'id': '17057'
            }, {
              'type': 'Polygon',
              'arcs': [[4127, -761, 4128, 4129, 4130, -393]],
              'id': '36055'
            }, {
              'type': 'Polygon',
              'arcs': [[4131, -3593, 4132, -2908]],
              'id': '27075'
            }, {
              'type': 'Polygon',
              'arcs': [[4133, 4134, 4135, 4136, -4137, 4137, 4138]],
              'id': '41037'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[4139, 4140]], [[4141]], [[4142]]],
              'id': '44005'
            }, {
              'type': 'Polygon',
              'arcs': [[4143, 4144, 4145, 4146, 4147, 4148, 4149]],
              'id': '36043'
            }, {
              'type': 'Polygon',
              'arcs': [[4150, -3373, 4151, 4152, 4153, 4154, 4155, 4156]],
              'id': '35059'
            }, {
              'type': 'Polygon',
              'arcs': [[4157, 4158, 4159, 4160, 4161, 4162]],
              'id': '48071'
            }, {
              'type': 'Polygon',
              'arcs': [[4163, 4164, 4165, -3810, 4166, -2487, 4167, 4168]],
              'id': '53047'
            }, {
              'type': 'Polygon',
              'arcs': [[4169, 4170, 4171, 4172, -3625, 4173]],
              'id': '01115'
            }, {
              'type': 'Polygon',
              'arcs': [[4174, 4175, 4176, 4177, 4178]],
              'id': '55059'
            }, {
              'type': 'Polygon',
              'arcs': [[-956, 4179, 4180, 4181, -118, 4182, 4183]],
              'id': '72075'
            }, {
              'type': 'Polygon',
              'arcs': [[-430, -2799, 4184, 4185]],
              'id': '55077'
            }, {
              'type': 'Polygon',
              'arcs': [[-441, 4186, 4187, 4188, 4189, -1461, -1491, 4190]],
              'id': '55099'
            }, {
              'type': 'Polygon',
              'arcs': [[4191, -2472, 4192, 4193]],
              'id': '72087'
            }, {
              'type': 'Polygon',
              'arcs': [[-2350, 4194, 4195, 4196, -731, 4197, 4198]],
              'id': '16079'
            }, {
              'type': 'Polygon',
              'arcs': [[4199, 4200, -1976, 4201, 4202, 4203]],
              'id': '37027'
            }, {
              'type': 'Polygon',
              'arcs': [[4204, 4205, 4206, 4207]],
              'id': '38065'
            }, {
              'type': 'Polygon',
              'arcs': [[-3405, 4208, 4209, 4210, 4211, 4212]],
              'id': '31147'
            }, {
              'type': 'Polygon',
              'arcs': [[4213, 4214, -2982, 4215, -1603]],
              'id': '31145'
            }, {
              'type': 'Polygon',
              'arcs': [[4216, 4217, 4218, -3798, 4219, 4220]],
              'id': '48199'
            }, {
              'type': 'Polygon',
              'arcs': [[4221, 4222, -1093, 4223, 4224, 4225, 4226, 4227]],
              'id': '01077'
            }, {
              'type': 'Polygon',
              'arcs': [[-504, 4228, 4229, 4230, -3354, 4231, 4232]],
              'id': '05007'
            }, {
              'type': 'Polygon',
              'arcs': [[4233, 4234, -1827, -2816, -1168, 4235, -2938]],
              'id': '17011'
            }, {
              'type': 'Polygon',
              'arcs': [[-2154, -3606, 4236, 4237, 4238, 4239, 4240, 4241, -2227]],
              'id': '18053'
            }, {
              'type': 'Polygon',
              'arcs': [[-3414, -1605, -904, -2896, 4242]],
              'id': '26113'
            }, {
              'type': 'Polygon',
              'arcs': [[-1355, -447, -1315, -1328, 4243, -384]],
              'id': '26117'
            }, {
              'type': 'Polygon',
              'arcs': [[-1589, 4244, -2294, -914]],
              'id': '29229'
            }, {
              'type': 'Polygon',
              'arcs': [[-1588, -3569, 4245, -2317, -2324, 4246, -2295, -4245]],
              'id': '29215'
            }, {
              'type': 'Polygon',
              'arcs': [[4247, 4248, 4249, 4250, -3609]],
              'id': '29123'
            }, {
              'type': 'Polygon',
              'arcs': [[4251, 4252, 4253, -2161, -2514, 4254, 4255]],
              'id': '28085'
            }, {
              'type': 'Polygon',
              'arcs': [[4256, 4257, 4258, 4259, 4260]],
              'id': '35011'
            }, {
              'type': 'Polygon',
              'arcs': [[4261, -4029, 4262, 4263, -3956, -3906, 4264]],
              'id': '37147'
            }, {
              'type': 'Polygon',
              'arcs': [[4265, -4207, 4266, 4267, 4268, 4269, 4270]],
              'id': '38059'
            }, {
              'type': 'Polygon',
              'arcs': [[4271, 4272, 4273, 4274, -95, 4275, -3227]],
              'id': '39077'
            }, {
              'type': 'Polygon',
              'arcs': [[-2785, 4276, -3925, 4277, 4278, 4279]],
              'id': '40111'
            }, {
              'type': 'Polygon',
              'arcs': [[4280, 4281, 4282, 4283, 4284, 4285, 4286, 4287]],
              'id': '45041'
            }, {
              'type': 'Polygon',
              'arcs': [[4288, 4289, 4290, 4291, 4292]],
              'id': '45081'
            }, {
              'type': 'Polygon',
              'arcs': [[4293, 4294, -4067, 4295, 4296, 4297]],
              'id': '21027'
            }, {
              'type': 'Polygon',
              'arcs': [[-4064, 4298, 4299, 4300, 4301, 4302]],
              'id': '21225'
            }, {
              'type': 'Polygon',
              'arcs': [[4303, 4304, 4305, -432, 4306, 4307]],
              'id': '21231'
            }, {
              'type': 'Polygon',
              'arcs': [[4308, -2777, 4309, 4310, 4311, 4312]],
              'id': '21211'
            }, {
              'type': 'Polygon',
              'arcs': [[-3908, -3961, 4313, -2452, 4314]],
              'id': '37103'
            }, {
              'type': 'Polygon',
              'arcs': [[4315, 4316, 4317, 4318, 4319]],
              'id': '47105'
            }, {
              'type': 'Polygon',
              'arcs': [[4320, 4321, 4322, -959, 4323, 4324]],
              'id': '48217'
            }, {
              'type': 'Polygon',
              'arcs': [[4325, 4326, 4327, 4328, 4329, 4330, 4331]],
              'id': '51087'
            }, {
              'type': 'Polygon',
              'arcs': [[4332, 4333, 4334, -839, 4335]],
              'id': '39019'
            }, {
              'type': 'Polygon',
              'arcs': [[-2744, 4336, 4337, 4338, -396, 4339]],
              'id': '38099'
            }, {
              'type': 'Polygon',
              'arcs': [[4340, 4341, 4342, -2763, 4343, -2021, -1463]],
              'id': '55067'
            }, {
              'type': 'Polygon',
              'arcs': [[4344, 4345, -1494, -2254, 4346, 4347]],
              'id': '55017'
            }, {
              'type': 'Polygon',
              'arcs': [[4348, 4349, 4350, 4351, 4352]],
              'id': '22101'
            }, {
              'type': 'Polygon',
              'arcs': [[4353, 4354, 4355, 4356, 4357]],
              'id': '72023'
            }, {
              'type': 'Polygon',
              'arcs': [[4358, 4359, 4360, 4361, 4362, 4363]],
              'id': '41009'
            }, {
              'type': 'Polygon',
              'arcs': [[4364, 4365, -2100, 4366, 4367, 4368, -4135]],
              'id': '41025'
            }, {
              'type': 'Polygon',
              'arcs': [[4369, -1722, 4370, 4371, 4372, 4373]],
              'id': '48491'
            }, {
              'type': 'Polygon',
              'arcs': [[4374, 4375, 4376, 4377, -360]],
              'id': '49009'
            }, {
              'type': 'Polygon',
              'arcs': [[4378, 4379, -1915, 4380, 4381]],
              'id': '48271'
            }, {
              'type': 'Polygon',
              'arcs': [[4382, -356, 4383, 4384, 4385]],
              'id': '49029'
            }, {
              'type': 'Polygon',
              'arcs': [[4386, 4387, -4388, 4387, 4388, 4389, 4390, 4391, 4392, 4393, -4394, 4393, -4394, 4393, 4394, 4395, 4396, 4397, -4398, 4397, 4398, 4399]],
              'id': '51620'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[4400]], [[4401, 4402, 4403, 4404, -1033, 4405, -1878, 4406, 4407]]],
              'id': '08005'
            }, {
              'type': 'Polygon',
              'arcs': [[4408, 4409, 4410, 4411, 4412, -4011, 4413, 4414]],
              'id': '13295'
            }, {
              'type': 'Polygon',
              'arcs': [[4415, 4416, 4417, 4418, 4419, 4420]],
              'id': '18121'
            }, {
              'type': 'Polygon',
              'arcs': [[4421, -79, 4422, 4423, 4424]],
              'id': '18143'
            }, {
              'type': 'Polygon',
              'arcs': [[-2847, 4425, 4426, 4427, 4428, 4429]],
              'id': '21227'
            }, {
              'type': 'Polygon',
              'arcs': [[4430, 4431, -1266, 4432, 4433]],
              'id': '22081'
            }, {
              'type': 'Polygon',
              'arcs': [[-3533, 4434, 4435, -1964, -1344, -3719]],
              'id': '27015'
            }, {
              'type': 'Polygon',
              'arcs': [[4436, 4437, 4438, 4439, -1306, 4440, 4441]],
              'id': '29139'
            }, {
              'type': 'Polygon',
              'arcs': [[4442, -3752, 4443, 4444, 4445, 4446, 4447, 4448, -3987, 4449]],
              'id': '05093'
            }, {
              'type': 'Polygon',
              'arcs': [[4450, 4451, 4452, 4453, -1277, 4454]],
              'id': '05049'
            }, {
              'type': 'Polygon',
              'arcs': [[4455, 4456, -4415, 4457, 4458, 4459, 4460]],
              'id': '01049'
            }, {
              'type': 'Polygon',
              'arcs': [[4461, 4462, 4463, -3501, 4464, 4465]],
              'id': '05127'
            }, {
              'type': 'Polygon',
              'arcs': [[-3281, -2617, -4047, 4466, 4467]],
              'id': '06015'
            }, {
              'type': 'Polygon',
              'arcs': [[4468, 4469, -991, -4019, 4470, -4120]],
              'id': '17177'
            }, {
              'type': 'Polygon',
              'arcs': [[4471, 4472, 4473, 4474, 4475, 4476]],
              'id': '18025'
            }, {
              'type': 'Polygon',
              'arcs': [[4477, 4478, 4479, 4480]],
              'id': '18043'
            }, {
              'type': 'Polygon',
              'arcs': [[-3075, 4481, 4482, 4483, 4484, 4485]],
              'id': '13179'
            }, {
              'type': 'Polygon',
              'arcs': [[-23, 4486, -3375, 4487, -4016]],
              'id': '16053'
            }, {
              'type': 'Polygon',
              'arcs': [[4488, 4489, 4490, 4491, 4492, 4493, -4493, 4494, 4495]],
              'id': '24045'
            }, {
              'type': 'Polygon',
              'arcs': [[4496, 4497, 4498, 4499]],
              'id': '26013'
            }, {
              'type': 'Polygon',
              'arcs': [[4500, 4501, 4502, 4503, 4504, -1, 4505, 4506]],
              'id': '32017'
            }, {
              'type': 'Polygon',
              'arcs': [[4507, 4508, 4509, 4510, 4511]],
              'id': '34011'
            }, {
              'type': 'Polygon',
              'arcs': [[4512, 4513, 4514, 4515]],
              'id': '18115'
            }, {
              'type': 'Polygon',
              'arcs': [[4516, 4517, 4518, 4519, 4520, 4521]],
              'id': '36061'
            }, {
              'type': 'Polygon',
              'arcs': [[4522, 4523, -4145, 4524, 4525, 4526]],
              'id': '36089'
            }, {
              'type': 'Polygon',
              'arcs': [[4527, 4528, -4256, 4529, 4530, 4531]],
              'id': '28063'
            }, {
              'type': 'Polygon',
              'arcs': [[4532, -2724, 4533, 4534, 4535, 4536]],
              'id': '40023'
            }, {
              'type': 'Polygon',
              'arcs': [[4537, 4538, 4539, -2177, 4540, 4541, 4542, 4543, -3756]],
              'id': '17149'
            }, {
              'type': 'Polygon',
              'arcs': [[4544, 4545, 4546, 4547, -2216]],
              'id': '19057'
            }, {
              'type': 'Polygon',
              'arcs': [[4548, 4549, 4550, -4024, 4551, 4552]],
              'id': '30085'
            }, {
              'type': 'Polygon',
              'arcs': [[4553, 4554, 4555, 4556, -1070, 4557, 4558, 4559]],
              'id': '45007'
            }, {
              'type': 'Polygon',
              'arcs': [[4560, 4561, -2560, 4562, 4563]],
              'id': '46033'
            }, {
              'type': 'Polygon',
              'arcs': [[4564, -4447, 4565, 4566, 4567, 4568, 4569]],
              'id': '47157'
            }, {
              'type': 'Polygon',
              'arcs': [[4570, 4571, 4572, 4573, 4574]],
              'id': '34019'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-1288]], [[4575, 4576, -813, -3048, 4577]]],
              'id': '51089'
            }, {
              'type': 'Polygon',
              'arcs': [[-2289, 4578, 4579, 4580]],
              'id': '51650'
            }, {
              'type': 'Polygon',
              'arcs': [[4581, 4582, -300, -2565, 4583, 4584]],
              'id': '30071'
            }, {
              'type': 'Polygon',
              'arcs': [[4585, 4586, 4587, 4588, 4589, 4590, -3435]],
              'id': '13161'
            }, {
              'type': 'Polygon',
              'arcs': [[4591, -4089, 4592, 4593, 4594, 4595, 4596, 4597]],
              'id': '56023'
            }, {
              'type': 'Polygon',
              'arcs': [[4598, 4599, 4600, 4601, 4602]],
              'id': '01063'
            }, {
              'type': 'Polygon',
              'arcs': [[4603, 4604, 4605, 4606]],
              'id': '05061'
            }, {
              'type': 'Polygon',
              'arcs': [[4607, 4608, 4609, -2125]],
              'id': '51091'
            }, {
              'type': 'Polygon',
              'arcs': [[4610, 4611, 4612, 4613]],
              'id': '51101'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[4614]], [[4615, 4616, -439, 4617]]],
              'id': '55007'
            }, {
              'type': 'Polygon',
              'arcs': [[4618, 4619, 4620, 4621, -2842, 4622, 4623, 4624]],
              'id': '55123'
            }, {
              'type': 'Polygon',
              'arcs': [[-672, 4625, 4626, -234, -3482, -3899]],
              'id': '31011'
            }, {
              'type': 'Polygon',
              'arcs': [[-4211, 4627, 4628, 4629, 4630, 4631]],
              'id': '20043'
            }, {
              'type': 'Polygon',
              'arcs': [[-2970, -3483, -795, -2659, -596]],
              'id': '31163'
            }, {
              'type': 'Polygon',
              'arcs': [[4632, 4633, 4634, -2666, 4635]],
              'id': '32021'
            }, {
              'type': 'Polygon',
              'arcs': [[4636, 4637, 4638, 4639, -1402]],
              'id': '47083'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-3787, 4640]], [[4641, 4642, 4643, -3783, 4644, 4645, 4646]]],
              'id': '48057'
            }, {
              'type': 'Polygon',
              'arcs': [[4647, -4014, 4648, 4649, 4650, 4651, -4459]],
              'id': '01019'
            }, {
              'type': 'Polygon',
              'arcs': [[-1475, -3588, 4652, 4653, 4654, 4655, 4656]],
              'id': '30111'
            }, {
              'type': 'Polygon',
              'arcs': [[-793, 4657, 4658, -1969, -2660]],
              'id': '31079'
            }, {
              'type': 'Polygon',
              'arcs': [[4659, 4660, 4661, -3094, 4662]],
              'id': '31017'
            }, {
              'type': 'Polygon',
              'arcs': [[4663, -2951, 4664, 4665]],
              'id': '35061'
            }, {
              'type': 'Polygon',
              'arcs': [[4666, 4667, 4668, 4669, -2947, 4670]],
              'id': '35047'
            }, {
              'type': 'Polygon',
              'arcs': [[4671, -3049, -3134, 4672, 4673, -1308]],
              'id': '37067'
            }, {
              'type': 'Polygon',
              'arcs': [[4674, 4675, -3910, 4676, 4677, 4678]],
              'id': '37191'
            }, {
              'type': 'Polygon',
              'arcs': [[4679, 4680, 4681, 4682, 4683]],
              'id': '37017'
            }, {
              'type': 'Polygon',
              'arcs': [[4684, 4685, -1534, 4686, 4687, 4688, -2656, -1985]],
              'id': '30059'
            }, {
              'type': 'Polygon',
              'arcs': [[4689, 4690, -3871, 4691, 4692, 4693]],
              'id': '21203'
            }, {
              'type': 'Polygon',
              'arcs': [[4694, 4695, -4293, 4696, 4697, 4698]],
              'id': '45047'
            }, {
              'type': 'Polygon',
              'arcs': [[4699, 4700, -4298, 4701, 4702]],
              'id': '21091'
            }, {
              'type': 'Polygon',
              'arcs': [[4703, 4704, 4705, 4706, 4707, 4708, 4709]],
              'id': '21045'
            }, {
              'type': 'Polygon',
              'arcs': [[4710, 4711, 4712, 4713, 4714]],
              'id': '21113'
            }, {
              'type': 'Polygon',
              'arcs': [[4715, 4716, -1067, 4717]],
              'id': '37149'
            }, {
              'type': 'Polygon',
              'arcs': [[4718, 4719, 4720, 4721, 4722]],
              'id': '37121'
            }, {
              'type': 'Polygon',
              'arcs': [[4723, 4724, 4725, 4726, 4727, 4728]],
              'id': '37053'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-2439]], [[4729, 4730, 4731, 4732, -3615, -2440, -3614]]],
              'id': '51121'
            }, {
              'type': 'Polygon',
              'arcs': [[-4331, 4733]],
              'id': '51760'
            }, {
              'type': 'Polygon',
              'arcs': [[-3812, -1107, 4734, 4735, 4736, 4737]],
              'id': '53021'
            }, {
              'type': 'Polygon',
              'arcs': [[-2478, 4738, 4739, -3477, -3288]],
              'id': '72105'
            }, {
              'type': 'Polygon',
              'arcs': [[4740, -2399, 4741, 4742, 4743, -3732]],
              'id': '40067'
            }, {
              'type': 'Polygon',
              'arcs': [[4744, 4745, 4746, 4747, 4748, 4749, 4750]],
              'id': '47091'
            }, {
              'type': 'Polygon',
              'arcs': [[4751, 4752, 4753, 4754, 4755]],
              'id': '47121'
            }, {
              'type': 'Polygon',
              'arcs': [[-544, 4756, -127, 4757, -2242]],
              'id': '46015'
            }, {
              'type': 'Polygon',
              'arcs': [[4758, 4759, 4760, 4761, 4762, -4322, 4763]],
              'id': '48139'
            }, {
              'type': 'Polygon',
              'arcs': [[-3733, -4744, 4764, -1115, 4765, 4766]],
              'id': '48077'
            }, {
              'type': 'Polygon',
              'arcs': [[4767, 4768, -3808, 4769, 4770, 4771]],
              'id': '51009'
            }, {
              'type': 'Polygon',
              'arcs': [[4772, -1861, -617, 4773]],
              'id': '08079'
            }, {
              'type': 'Polygon',
              'arcs': [[4774, 4775, 4776, 4777, 4778, 4779, 4780, 4781]],
              'id': '13107'
            }, {
              'type': 'Polygon',
              'arcs': [[-4126, -1876, -1254, 4782, 4783, 4784]],
              'id': '17125'
            }, {
              'type': 'Polygon',
              'arcs': [[-1840, -1842, -779, -3866, -1882, -1110]],
              'id': '19169'
            }, {
              'type': 'Polygon',
              'arcs': [[4785, 4786, -3639, 4787]],
              'id': '19149'
            }, {
              'type': 'Polygon',
              'arcs': [[4788, 4789, 4790, 4791, 4792]],
              'id': '20173'
            }, {
              'type': 'Polygon',
              'arcs': [[4793, -3128, 4794, -2773, -4309, 4795]],
              'id': '21103'
            }, {
              'type': 'Polygon',
              'arcs': [[4796, 4797, 4798]],
              'id': '22089'
            }, {
              'type': 'Polygon',
              'arcs': [[-4226, 4799, 4800, 4801]],
              'id': '01033'
            }, {
              'type': 'Polygon',
              'arcs': [[4802, 4803, 4804, 4805, -286, 4806, 4807]],
              'id': '04019'
            }, {
              'type': 'Polygon',
              'arcs': [[4808, 4809, -3762, 4810, 4811, 4812]],
              'id': '04011'
            }, {
              'type': 'Polygon',
              'arcs': [[4813, 4814, -615, 4815, -3843, 4816]],
              'id': '05147'
            }, {
              'type': 'Polygon',
              'arcs': [[-1836, 4817, 4818, 4819]],
              'id': '12099'
            }, {
              'type': 'Polygon',
              'arcs': [[4820, 4821, 4822, 4823, 4824]],
              'id': '13127'
            }, {
              'type': 'Polygon',
              'arcs': [[4825, -3219, 4826, 4827, -710]],
              'id': '19007'
            }, {
              'type': 'Polygon',
              'arcs': [[4828, 4829, -4123, 4830, -2681, -966]],
              'id': '19061'
            }, {
              'type': 'Polygon',
              'arcs': [[4831, 4832, 4833, 4834, -3494, 4835]],
              'id': '21057'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[4836, 4837, 4838, 4839, 4840, -4349, 4841, -3878]], [[4842]]],
              'id': '22045'
            }, {
              'type': 'Polygon',
              'arcs': [[4843, 4844, 4845, -1186]],
              'id': '17101'
            }, {
              'type': 'Polygon',
              'arcs': [[4846, 4847, 4848]],
              'id': '24037'
            }, {
              'type': 'Polygon',
              'arcs': [[4849, 4850, 4851, 4852, 4853, 4854]],
              'id': '22033'
            }, {
              'type': 'Polygon',
              'arcs': [[4855, 4856, 4857, 4858]],
              'id': '22043'
            }, {
              'type': 'Polygon',
              'arcs': [[-1352, -381, -1356, 4859]],
              'id': '26127'
            }, {
              'type': 'Polygon',
              'arcs': [[4860, 4861, 4862, 4863, -3895, 4864]],
              'id': '31131'
            }, {
              'type': 'Polygon',
              'arcs': [[4865, -4178, 4866, 4867, 4868, -1141, 4869]],
              'id': '17111'
            }, {
              'type': 'Polygon',
              'arcs': [[4870, 4871, 4872, 4873, -3416, -2649]],
              'id': '20183'
            }, {
              'type': 'Polygon',
              'arcs': [[-4869, 4874, 4875, -1572, -1142]],
              'id': '17089'
            }, {
              'type': 'Polygon',
              'arcs': [[-3902, 4876, 4877, 4878, 4879, 4880, 4881, 4882]],
              'id': '35035'
            }, {
              'type': 'Polygon',
              'arcs': [[4883, 4884, -4476, 4885, -4294, -4701]],
              'id': '18123'
            }, {
              'type': 'Polygon',
              'arcs': [[-4845, 4886, 4887, -3459, 4888, 4889, 4890, 4891]],
              'id': '18083'
            }, {
              'type': 'Polygon',
              'arcs': [[4892, 4893, 4894, 4895, 4896]],
              'id': '42049'
            }, {
              'type': 'Polygon',
              'arcs': [[4897, 4898, 4899, 4900, 4901]],
              'id': '45019'
            }, {
              'type': 'Polygon',
              'arcs': [[-3914, 4902, 4903, 4904, 4905, 4906, 4907, 4908, -4908, 4907, 4909, -3084, -3939, 4910]],
              'id': '45091'
            }, {
              'type': 'Polygon',
              'arcs': [[4911, 4912, 4913, 4914, 4915]],
              'id': '45053'
            }, {
              'type': 'Polygon',
              'arcs': [[4916, 4917, 4918, 4919, 4920, 4921, 4922, 4923]],
              'id': '36071'
            }, {
              'type': 'Polygon',
              'arcs': [[4924, 4925, 4926, -3671, 4927]],
              'id': '50025'
            }, {
              'type': 'Polygon',
              'arcs': [[-4811, -3761, -1628, 4928, 4929]],
              'id': '35023'
            }, {
              'type': 'Polygon',
              'arcs': [[4930, 4931, 4932, -4666, 4933, 4934, 4935]],
              'id': '35006'
            }, {
              'type': 'Polygon',
              'arcs': [[-2449, 4936, 4937, 4938, 4939, 4940, 4941]],
              'id': '54055'
            }, {
              'type': 'Polygon',
              'arcs': [[4942, 4943, 4944, -2427, -3293, 4945]],
              'id': '54051'
            }, {
              'type': 'Polygon',
              'arcs': [[4946, 4947, 4948, 4949, 4950, -2769, 4951]],
              'id': '01101'
            }, {
              'type': 'Polygon',
              'arcs': [[4952, -4460, -4652, 4953, -4170, 4954]],
              'id': '01055'
            }, {
              'type': 'Polygon',
              'arcs': [[4955, -4801, 4956, -2991, 4957, 4958]],
              'id': '01059'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-521, -2422, 4959, 4960, -2075, 4961, 4962, 4963, 4964]], [[4965]], [[4966]], [[4967]]],
              'id': '02050'
            }, {
              'type': 'Polygon',
              'arcs': [[4968, -43, 4969, 4970, 4971, 4972, -4561]],
              'id': '46103'
            }, {
              'type': 'Polygon',
              'arcs': [[4973, 4974, -610, 4975, -1449, 4976]],
              'id': '46115'
            }, {
              'type': 'Polygon',
              'arcs': [[4977, 4978, -4788, -3644, 4979, 4980, 4981]],
              'id': '46127'
            }, {
              'type': 'Polygon',
              'arcs': [[4982, 4983, 4984, -4913]],
              'id': '45013'
            }, {
              'type': 'Polygon',
              'arcs': [[4985, 4986, 4987, 4988, 4989, 4990]],
              'id': '47029'
            }, {
              'type': 'Polygon',
              'arcs': [[4991, 4992, 4993, -4575, 4994, 4995, 4996, 4997]],
              'id': '42017'
            }, {
              'type': 'Polygon',
              'arcs': [[-1422, 4998, 4999, 5000]],
              'id': '46009'
            }, {
              'type': 'Polygon',
              'arcs': [[-4639, 5001, 5002, 5003, 5004, 5005]],
              'id': '47043'
            }, {
              'type': 'Polygon',
              'arcs': [[5006, 5007, 5008, 5009, 5010]],
              'id': '40105'
            }, {
              'type': 'Polygon',
              'arcs': [[5011, -2387, -2374, 5012, -4761, 5013]],
              'id': '48257'
            }, {
              'type': 'Polygon',
              'arcs': [[5014, 5015, -1099, -3243, -1801, -281]],
              'id': '48155'
            }, {
              'type': 'Polygon',
              'arcs': [[5016, 5017, -4355]],
              'id': '72067'
            }, {
              'type': 'Polygon',
              'arcs': [[5018, 5019, 5020, 5021, 5022]],
              'id': '23023'
            }, {
              'type': 'Polygon',
              'arcs': [[5023, 5024, -2382, 5025, 5026, 5027]],
              'id': '48085'
            }, {
              'type': 'Polygon',
              'arcs': [[-2920, -3038, -703, 5028, -1711]],
              'id': '48093'
            }, {
              'type': 'Polygon',
              'arcs': [[-723, 5029, 5030, -2319, -256]],
              'id': '48095'
            }, {
              'type': 'Polygon',
              'arcs': [[5031, -2730, 5032, 5033, 5034]],
              'id': '48103'
            }, {
              'type': 'Polygon',
              'arcs': [[5035, 5036, 5037, 5038, 5039, -4879]],
              'id': '35015'
            }, {
              'type': 'Polygon',
              'arcs': [[5040, 5041, 5042, -2318, -4246, -3568]],
              'id': '29161'
            }, {
              'type': 'Polygon',
              'arcs': [[5043, 5044, 5045, -2270, 5046, -4463]],
              'id': '05083'
            }, {
              'type': 'Polygon',
              'arcs': [[-2459, -3622, 5047, 5048, 5049, 5050]],
              'id': '29177'
            }, {
              'type': 'Polygon',
              'arcs': [[5051, -2664, 5052, 5053, -2003, 5054, 5055, -1159]],
              'id': '06027'
            }, {
              'type': 'Polygon',
              'arcs': [[5056, 5057, -3177, 5058, 5059]],
              'id': '42005'
            }, {
              'type': 'Polygon',
              'arcs': [[5060, -2975, 5061, 5062, -3912, 5063]],
              'id': '37109'
            }, {
              'type': 'Polygon',
              'arcs': [[-4990, 5064, 5065, -3951, 5066, 5067, 5068]],
              'id': '37087'
            }, {
              'type': 'Polygon',
              'arcs': [[5069, 5070, -2713, 5071, 5072, 5073, 5074]],
              'id': '47057'
            }, {
              'type': 'Polygon',
              'arcs': [[5075, 5076, 5077, 5078, 5079]],
              'id': '42023'
            }, {
              'type': 'Polygon',
              'arcs': [[-109, 5080, -4982, 5081, 5082, 5083]],
              'id': '46027'
            }, {
              'type': 'Polygon',
              'arcs': [[5084, 5085, 5086, 5087, 5088]],
              'id': '42025'
            }, {
              'type': 'Polygon',
              'arcs': [[5089, 5090, 5091, 5092, 5093, 5094]],
              'id': '45025'
            }, {
              'type': 'Polygon',
              'arcs': [[5095, 5096, -4898, 5097]],
              'id': '45035'
            }, {
              'type': 'Polygon',
              'arcs': [[5098, 5099, 5100, 5101, 5102, 5103, -1593]],
              'id': '29041'
            }, {
              'type': 'Polygon',
              'arcs': [[5104, 5105, -2582, 5106, 5107]],
              'id': '50011'
            }, {
              'type': 'Polygon',
              'arcs': [[5108, 5109, -5080, 5110, -3174, 5111]],
              'id': '42047'
            }, {
              'type': 'Polygon',
              'arcs': [[5112, 5113, 5114]],
              'id': '51115'
            }, {
              'type': 'Polygon',
              'arcs': [[5115, 5116, 5117, 5118, -3566, 5119, 5120]],
              'id': '29131'
            }, {
              'type': 'Polygon',
              'arcs': [[-304, 5121, 5122, 5123, 5124, 5125]],
              'id': '30017'
            }, {
              'type': 'Polygon',
              'arcs': [[-5125, 5126, 5127, 5128, 5129, 5130, 5131]],
              'id': '30075'
            }, {
              'type': 'Polygon',
              'arcs': [[5132, -1341, 5133, 5134, 5135]],
              'id': '21107'
            }, {
              'type': 'Polygon',
              'arcs': [[5136, -2272, 5137, 5138, 5139]],
              'id': '26003'
            }, {
              'type': 'Polygon',
              'arcs': [[5140, 5141, 5142, 5143, 5144]],
              'id': '21115'
            }, {
              'type': 'Polygon',
              'arcs': [[-1177, 5145, -3518, 5146, 5147]],
              'id': '17041'
            }, {
              'type': 'Polygon',
              'arcs': [[5148, 5149, 5150, 5151, 5152, 5153]],
              'id': '21119'
            }, {
              'type': 'Polygon',
              'arcs': [[5154, -662, 5155, -4790, 5156]],
              'id': '20079'
            }, {
              'type': 'Polygon',
              'arcs': [[5157, -3245, 5158]],
              'id': '29510'
            }, {
              'type': 'Polygon',
              'arcs': [[-3522, 5159, 5160, 5161, -330, 5162]],
              'id': '42009'
            }, {
              'type': 'Polygon',
              'arcs': [[-4212, -4632, 5163, -2208, 5164]],
              'id': '20013'
            }, {
              'type': 'Polygon',
              'arcs': [[5165, 5166, 5167, 5168, 5169, 5170, 5171, 5172]],
              'id': '05099'
            }, {
              'type': 'Polygon',
              'arcs': [[-3506, 5173, -5167, 5174, -4604]],
              'id': '05109'
            }, {
              'type': 'Polygon',
              'arcs': [[5175, 5176, 5177, 5178, 5179]],
              'id': '51730'
            }, {
              'type': 'Polygon',
              'arcs': [[-4543, 5180, 5181, -4439, 5182, 5183]],
              'id': '29163'
            }, {
              'type': 'Polygon',
              'arcs': [[-3030, 5184, 5185, 5186, 5187]],
              'id': '17083'
            }, {
              'type': 'Polygon',
              'arcs': [[5188, -4286, 5189, 5190, 5191, 5192]],
              'id': '45027'
            }, {
              'type': 'Polygon',
              'arcs': [[-2712, -1634, 5193, -1489, 5194, 5195, -5072]],
              'id': '47073'
            }, {
              'type': 'Polygon',
              'arcs': [[5196, 5197, 5198, -1192, -1468]],
              'id': '47077'
            }, {
              'type': 'Polygon',
              'arcs': [[-5093, 5199, -4281, 5200, 5201]],
              'id': '45031'
            }, {
              'type': 'Polygon',
              'arcs': [[-3548, 5202, 5203, 5204, 5205, 5206]],
              'id': '42029'
            }, {
              'type': 'Polygon',
              'arcs': [[5207, 5208, 5209, 5210, -4283]],
              'id': '45033'
            }, {
              'type': 'Polygon',
              'arcs': [[5211, -3172, -5058, 5212, -1683]],
              'id': '42031'
            }, {
              'type': 'Polygon',
              'arcs': [[5213, -4109, -201, 5214]],
              'id': '55037'
            }, {
              'type': 'Polygon',
              'arcs': [[5215, -5112, -3173, -5212, -1682]],
              'id': '42053'
            }, {
              'type': 'Polygon',
              'arcs': [[5216, 5217, 5218, 5219, 5220]],
              'id': '13049'
            }, {
              'type': 'Polygon',
              'arcs': [[-619, -166, 5221, 5222, 5223, 5224, 5225, 5226]],
              'id': '35039'
            }, {
              'type': 'Polygon',
              'arcs': [[5227, -4434, 5228, 5229, 5230, -1102]],
              'id': '22031'
            }, {
              'type': 'Polygon',
              'arcs': [[-3598, 5231, 5232, 5233, -2669]],
              'id': '37063'
            }, {
              'type': 'Polygon',
              'arcs': [[5234, 5235, -4931, 5236]],
              'id': '35031'
            }, {
              'type': 'Polygon',
              'arcs': [[5237, 5238, 5239, 5240, 5241]],
              'id': '24013'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[5242, 5243]], [[5244]], [[-5206, 5245, 5246, 5247, 5248, 5249, 5250, 5251]]],
              'id': '10003'
            }, {
              'type': 'Polygon',
              'arcs': [[5252, 5253, -3327, 5254, -2958]],
              'id': '20023'
            }, {
              'type': 'Polygon',
              'arcs': [[5255, 5256, 5257, 5258, 5259, -4590]],
              'id': '13001'
            }, {
              'type': 'Polygon',
              'arcs': [[5260, 5261, 5262, -4947, 5263, -3386]],
              'id': '01051'
            }, {
              'type': 'Polygon',
              'arcs': [[5264, 5265, -4048, -1234]],
              'id': '08033'
            }, {
              'type': 'Polygon',
              'arcs': [[5266, -2264, 5267, 5268]],
              'id': '27069'
            }, {
              'type': 'Polygon',
              'arcs': [[5269, -1747, 5270, 5271, -3793, -4219, 5272]],
              'id': '48241'
            }, {
              'type': 'Polygon',
              'arcs': [[5273, 5274, 5275, -4900, 5276, 5277]],
              'id': '45043'
            }, {
              'type': 'Polygon',
              'arcs': [[5278, -3736, 5279, 5280, -4862]],
              'id': '19071'
            }, {
              'type': 'Polygon',
              'arcs': [[5281, -4784, 5282, 5283, 5284, 5285]],
              'id': '17017'
            }, {
              'type': 'Polygon',
              'arcs': [[5286, 5287, 5288, -4925, 5289, 5290, 5291]],
              'id': '50027'
            }, {
              'type': 'Polygon',
              'arcs': [[5292, -2168, 5293, 5294, -4205, 5295, 5296, 5297]],
              'id': '38055'
            }, {
              'type': 'Polygon',
              'arcs': [[5298, -4265, -3905, -4676]],
              'id': '37079'
            }, {
              'type': 'Polygon',
              'arcs': [[5299, 5300, 5301, 5302, 5303]],
              'id': '17127'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[5304, 5305]], [[5306, -1001, 5307, -4489, 5308]]],
              'id': '24019'
            }, {
              'type': 'Polygon',
              'arcs': [[5309, -4198, -730, 5310]],
              'id': '16055'
            }, {
              'type': 'Polygon',
              'arcs': [[5311, 5312, 5313, 5314]],
              'id': '09007'
            }, {
              'type': 'Polygon',
              'arcs': [[5315, -2802, -2680, -897, 5316, -3131, 5317]],
              'id': '18039'
            }, {
              'type': 'Polygon',
              'arcs': [[5318, -1210, -3147, -2902, 5319, 5320]],
              'id': '20071'
            }, {
              'type': 'Polygon',
              'arcs': [[5321, -5285, 5322, -3026, 5323, -2175, -4540]],
              'id': '17137'
            }, {
              'type': 'Polygon',
              'arcs': [[5324, 5325, 5326, -3946]],
              'id': '21121'
            }, {
              'type': 'Polygon',
              'arcs': [[5327, -713, 5328, 5329, -1148]],
              'id': '19053'
            }, {
              'type': 'Polygon',
              'arcs': [[5330, 5331, 5332, 5333, 5334, -5141, 5335]],
              'id': '21127'
            }, {
              'type': 'Polygon',
              'arcs': [[5336, 5337, -564, -3819, 5338, 5339]],
              'id': '54001'
            }, {
              'type': 'Polygon',
              'arcs': [[5340, 5341, -3675, 5342, 5343, 5344, 5345, 5346]],
              'id': '25003'
            }, {
              'type': 'Polygon',
              'arcs': [[5347, -4437, 5348, 5349, 5350]],
              'id': '29027'
            }, {
              'type': 'Polygon',
              'arcs': [[5351, 5352, 5353, 5354, 5355, 5356]],
              'id': '27073'
            }, {
              'type': 'Polygon',
              'arcs': [[-2865, 5357, -4326, 5358, -3399, 5359]],
              'id': '51075'
            }, {
              'type': 'Polygon',
              'arcs': [[5360, 5361, 5362, -4594]],
              'id': '56035'
            }, {
              'type': 'Polygon',
              'arcs': [[-4059, 5363, 5364, 5365, 5366]],
              'id': '49005'
            }, {
              'type': 'Polygon',
              'arcs': [[-1245, 5367, -2307, -2346, 5368]],
              'id': '30053'
            }, {
              'type': 'Polygon',
              'arcs': [[5369, 5370, 5371, 5372, 5373, 5374, 5375]],
              'id': '12001'
            }, {
              'type': 'Polygon',
              'arcs': [[-4713, 5376, 5377, 5378, -3867, -4691, 5379]],
              'id': '21151'
            }, {
              'type': 'Polygon',
              'arcs': [[5380, 5381, 5382, -2794, 5383, 5384, -1929]],
              'id': '48177'
            }, {
              'type': 'Polygon',
              'arcs': [[5385, 5386, -674, -3898, -588, 5387, 5388]],
              'id': '31089'
            }, {
              'type': 'Polygon',
              'arcs': [[5389, 5390, 5391, -4679, 5392, 5393]],
              'id': '37101'
            }, {
              'type': 'Polygon',
              'arcs': [[5394, -2940, -1813, 5395, 5396, -4546, 5397]],
              'id': '17131'
            }, {
              'type': 'Polygon',
              'arcs': [[-478, 5398, 5399, 5400, -3864, 5401]],
              'id': '19191'
            }, {
              'type': 'Polygon',
              'arcs': [[-1558, -1470, 5402, 5403, 5404, 5405]],
              'id': '47075'
            }, {
              'type': 'Polygon',
              'arcs': [[5406, 5407, -335, 5408, 5409, 5410]],
              'id': '24023'
            }, {
              'type': 'Polygon',
              'arcs': [[5411, -5411, 5412, -561, -5338, 5413, 5414]],
              'id': '54077'
            }, {
              'type': 'Polygon',
              'arcs': [[5415, 5416, 5417, -4500, 5418, 5419]],
              'id': '26061'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[5420, -5405, 5421, -4566, -4446]], [[-4448, -4565, 5422]]],
              'id': '47167'
            }, {
              'type': 'Polygon',
              'arcs': [[-1134, 5423, 5424, -2706, 5425]],
              'id': '26065'
            }, {
              'type': 'Polygon',
              'arcs': [[-4792, 5426, 5427, 5428, 5429, 5430]],
              'id': '20191'
            }, {
              'type': 'Polygon',
              'arcs': [[5431, 5432, 5433, 5434, 5435, 5436, 5437]],
              'id': '21135'
            }, {
              'type': 'Polygon',
              'arcs': [[-4220, -3797, -4079, 5438, -4159, 5439]],
              'id': '48245'
            }, {
              'type': 'Polygon',
              'arcs': [[5440, 5441, -3650, 5442, 5443]],
              'id': '31177'
            }, {
              'type': 'Polygon',
              'arcs': [[5444, 5445, 5446, -497, 5447, 5448, 5449, 5450]],
              'id': '53039'
            }, {
              'type': 'Polygon',
              'arcs': [[5451, -3757, -4544, -5184, 5452]],
              'id': '29173'
            }, {
              'type': 'Polygon',
              'arcs': [[-1483, 5453, 5454, 5455, -472, 5456]],
              'id': '56001'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-1471]], [[5457, 5458, -2413, 5459, -2861, 5460, 5461, 5462]]],
              'id': '51003'
            }, {
              'type': 'Polygon',
              'arcs': [[-5049, 5463, 5464, -1991, 5465, 5466]],
              'id': '29107'
            }, {
              'type': 'Polygon',
              'arcs': [[5467, 5468, -5041, -3567, -5119]],
              'id': '29125'
            }, {
              'type': 'Polygon',
              'arcs': [[5469, -5349, -4442, 5470, -5468, -5118]],
              'id': '29151'
            }, {
              'type': 'Polygon',
              'arcs': [[-3162, -1948, -3171, -1360, 5471, 5472]],
              'id': '27161'
            }, {
              'type': 'Polygon',
              'arcs': [[5473, 5474, 5475, 5476, -4551, 5477]],
              'id': '38105'
            }, {
              'type': 'Polygon',
              'arcs': [[-3805, 5478, -3402, 5479, 5480, 5481, 5482]],
              'id': '51147'
            }, {
              'type': 'Polygon',
              'arcs': [[5483, -5251, 5484, 5485, 5486]],
              'id': '24029'
            }, {
              'type': 'Polygon',
              'arcs': [[5487, -3223, -4127, -4785, -5282, 5488, 5489]],
              'id': '17169'
            }, {
              'type': 'Polygon',
              'arcs': [[5490, 5491, 5492, 5493, 5494, -3765]],
              'id': '24031'
            }, {
              'type': 'Polygon',
              'arcs': [[-1194, 5495, 5496, 5497]],
              'id': '47109'
            }, {
              'type': 'Polygon',
              'arcs': [[5498, 5499, 5500, -1260, 5501]],
              'id': '22119'
            }, {
              'type': 'Polygon',
              'arcs': [[5502, 5503, 5504]],
              'id': '37129'
            }, {
              'type': 'Polygon',
              'arcs': [[-5419, -4499, 5505, -4107, -5214, 5506, 5507, -3692, 5508]],
              'id': '26071'
            }, {
              'type': 'Polygon',
              'arcs': [[-5302, 5509, 5510, 5511, 5512, 5513, 5514, 5515]],
              'id': '21139'
            }, {
              'type': 'Polygon',
              'arcs': [[5516, -1271, 5517, -3991, 5518, 5519]],
              'id': '06077'
            }, {
              'type': 'Polygon',
              'arcs': [[5520, -5303, -5516, 5521, -3486, 5522, 5523]],
              'id': '21145'
            }, {
              'type': 'Polygon',
              'arcs': [[5524, 5525, -4983, -4912, 5526, 5527]],
              'id': '45049'
            }, {
              'type': 'Polygon',
              'arcs': [[-1658, -1064, 5528, 5529, 5530]],
              'id': '31037'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[5531]], [[5532]]],
              'id': '78010'
            }, {
              'type': 'Polygon',
              'arcs': [[5533, -2657, -4689, 5534, -1505, 5535, 5536, 5537]],
              'id': '30031'
            }, {
              'type': 'Polygon',
              'arcs': [[-1404, 5538, 5539, -1460, 5540, 5541]],
              'id': '47135'
            }, {
              'type': 'Polygon',
              'arcs': [[5542, -4084, -1846, -3656, 5543, -4018, 5544, 5545]],
              'id': '16039'
            }, {
              'type': 'Polygon',
              'arcs': [[-2612, 5546, 5547, 5548, 5549]],
              'id': '31013'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[5550]], [[5551, -4098, 5552, -4140, 5553, 5554, 5555]]],
              'id': '25005'
            }, {
              'type': 'Polygon',
              'arcs': [[-1187, -4846, -4892, 5556, 5557, 5558]],
              'id': '17185'
            }, {
              'type': 'Polygon',
              'arcs': [[5559, 5560, 5561, 5562, 5563, 5564]],
              'id': '21095'
            }, {
              'type': 'Polygon',
              'arcs': [[5565, 5566, 5567, -1089, 5568, -1457]],
              'id': '47119'
            }, {
              'type': 'Polygon',
              'arcs': [[5569, 5570, -4076, -3795, 5571]],
              'id': '22019'
            }, {
              'type': 'Polygon',
              'arcs': [[5572, -2670, -5234, 5573, 5574, 5575, 5576, -1203]],
              'id': '37037'
            }, {
              'type': 'Polygon',
              'arcs': [[-976, 5577, -560, 5578, 5579]],
              'id': '48127'
            }, {
              'type': 'Polygon',
              'arcs': [[-5144, 5580, -5149, 5581, 5582, 5583]],
              'id': '21153'
            }, {
              'type': 'Polygon',
              'arcs': [[-4385, 5584, 5585, 5586]],
              'id': '49011'
            }, {
              'type': 'Polygon',
              'arcs': [[5587, 5588, 5589, 5590]],
              'id': '49031'
            }, {
              'type': 'Polygon',
              'arcs': [[-5335, 5591, 5592, 5593, 5594, -5142]],
              'id': '21159'
            }, {
              'type': 'Polygon',
              'arcs': [[5595, 5596, -4625, 5597, -5400, 5598]],
              'id': '27055'
            }, {
              'type': 'Polygon',
              'arcs': [[5599, 5600, 5601, -4361]],
              'id': '53011'
            }, {
              'type': 'Polygon',
              'arcs': [[5602, 5603, 5604, 5605]],
              'id': '55089'
            }, {
              'type': 'Polygon',
              'arcs': [[5606, -1987, -2658, -5534, 5607, 5608, 5609]],
              'id': '30043'
            }, {
              'type': 'Polygon',
              'arcs': [[5610, -4991, -5069, 5611, 5612, 5613]],
              'id': '47155'
            }, {
              'type': 'Polygon',
              'arcs': [[-2184, 5614, -3003, 5615, 5616]],
              'id': '72057'
            }, {
              'type': 'Polygon',
              'arcs': [[5617, 5618, 5619, 5620]],
              'id': '32011'
            }, {
              'type': 'Polygon',
              'arcs': [[5621, 5622, 5623, -1262, 5624]],
              'id': '22061'
            }, {
              'type': 'Polygon',
              'arcs': [[5625, 5626, 5627, -5622, 5628]],
              'id': '22111'
            }, {
              'type': 'Polygon',
              'arcs': [[5629, 5630, 5631, 5632]],
              'id': '33001'
            }, {
              'type': 'Polygon',
              'arcs': [[-1954, -2432, 5633, 5634, 5635]],
              'id': '05011'
            }, {
              'type': 'Polygon',
              'arcs': [[5636, 5637, 5638, -1601, 5639, -155]],
              'id': '31085'
            }, {
              'type': 'Polygon',
              'arcs': [[5640, 5641, 5642, 5643, 5644, 5645, 5646, 5647, 5648]],
              'id': '42097'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[5649, -1002, -5307, 5650]], [[5651]]],
              'id': '24041'
            }, {
              'type': 'Polygon',
              'arcs': [[5652, 5653, 5654, -2961]],
              'id': '19041'
            }, {
              'type': 'Polygon',
              'arcs': [[5655, 5656, 5657, -2137, -4052, 5658]],
              'id': '47139'
            }, {
              'type': 'Polygon',
              'arcs': [[5659, 5660, -2212, 5661, 5662, 5663]],
              'id': '20149'
            }, {
              'type': 'Polygon',
              'arcs': [[5664, 5665, 5666]],
              'id': '24510'
            }, {
              'type': 'Polygon',
              'arcs': [[5667, 5668, -5023, 5669, 5670]],
              'id': '23001'
            }, {
              'type': 'Polygon',
              'arcs': [[5671, 5672, 5673, -3460, -4888, 5674]],
              'id': '18153'
            }, {
              'type': 'Polygon',
              'arcs': [[5675, 5676, -3430, 5677, 5678, 5679, 5680]],
              'id': '28145'
            }, {
              'type': 'Polygon',
              'arcs': [[-1346, -1967, -2767, -2737, 5681, -3823, -3182]],
              'id': '27063'
            }, {
              'type': 'Polygon',
              'arcs': [[5682, 5683, 5684, 5685, 5686, 5687, 5688]],
              'id': '49049'
            }, {
              'type': 'Polygon',
              'arcs': [[5689, -3979, 5690, 5691, -4939, 5692]],
              'id': '54089'
            }, {
              'type': 'Polygon',
              'arcs': [[-5687, 5693, 5694, 5695, 5696, 5697]],
              'id': '49039'
            }, {
              'type': 'Polygon',
              'arcs': [[-2797, 5698, 5699, -1510, 5700, 5701, 5702]],
              'id': '55027'
            }, {
              'type': 'Polygon',
              'arcs': [[5703, 5704, -5357, 5705, -929, 5706]],
              'id': '46051'
            }, {
              'type': 'Polygon',
              'arcs': [[-5162, 5707, 5708, -168, -331]],
              'id': '42057'
            }, {
              'type': 'Polygon',
              'arcs': [[5709, 5710, 5711, 5712, 5713, 5714]],
              'id': '55093'
            }, {
              'type': 'Polygon',
              'arcs': [[5715, 5716, -1531, -4686, 5717]],
              'id': '30045'
            }, {
              'type': 'Polygon',
              'arcs': [[5718, 5719, -5095, 5720, 5721, -3085, -4910, -4908, 4907, 4908, -4908, -4907, 4905, -4905]],
              'id': '45057'
            }, {
              'type': 'Polygon',
              'arcs': [[5722, 5723, -1522, 5724, 5725, -4611, 5726]],
              'id': '51033'
            }, {
              'type': 'Polygon',
              'arcs': [[5727, 5728, 5729, -5454, -1482]],
              'id': '56031'
            }, {
              'type': 'Polygon',
              'arcs': [[5730, 5731, 5732, 5733, 5734, -5715, 5735]],
              'id': '27163'
            }, {
              'type': 'Polygon',
              'arcs': [[5736, 5737, 5738, 5739, 5740, 5741, 5742]],
              'id': '29133'
            }, {
              'type': 'Polygon',
              'arcs': [[-5087, 5743, 5744, -4993, 5745]],
              'id': '42095'
            }, {
              'type': 'Polygon',
              'arcs': [[-5230, 5746, 5747, 5748, 5749, 5750]],
              'id': '22085'
            }, {
              'type': 'Polygon',
              'arcs': [[5751, 5752, 5753, -4836, -3493, 5754]],
              'id': '21169'
            }, {
              'type': 'Polygon',
              'arcs': [[-3835, 5755, -4804, 5756]],
              'id': '04021'
            }, {
              'type': 'Polygon',
              'arcs': [[-1237, 5757, 5758, -3833, -727]],
              'id': '04017'
            }, {
              'type': 'Polygon',
              'arcs': [[5759, -3091, 5760, -4808, 5761]],
              'id': '04027'
            }, {
              'type': 'Polygon',
              'arcs': [[5762, 5763, 5764, -5733, 5765, -665]],
              'id': '27025'
            }, {
              'type': 'Polygon',
              'arcs': [[-3751, 5766, 5767, -1399, -1557, 5768, -4444]],
              'id': '47045'
            }, {
              'type': 'Polygon',
              'arcs': [[5769, 5770, 5771, 5772, 5773]],
              'id': '21181'
            }, {
              'type': 'Polygon',
              'arcs': [[5774, -5472, -1365, 5775, 5776, -2765]],
              'id': '27043'
            }, {
              'type': 'Polygon',
              'arcs': [[5777, -5153, 5778, -5561, 5779, 5780, -3827]],
              'id': '21193'
            }, {
              'type': 'Polygon',
              'arcs': [[5781, -3352, -3351, 3350, 5782, 5783, 5784, 5785]],
              'id': '48037'
            }, {
              'type': 'Polygon',
              'arcs': [[-5128, 5786, -1428, -45, 5787, 5788]],
              'id': '56011'
            }, {
              'type': 'Polygon',
              'arcs': [[5789, -5201, -4288, 5790]],
              'id': '45061'
            }, {
              'type': 'Polygon',
              'arcs': [[5791, 5792, 5793, 5794, 5795, -5729]],
              'id': '56015'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[5796, -4094]], [[-3665, 5797]], [[5798, -3669, 5799, -4092, -5552, 5800, 5801]]],
              'id': '25021'
            }, {
              'type': 'Polygon',
              'arcs': [[5802, 5803, 5804, 5805, 5806, -4073]],
              'id': '21123'
            }, {
              'type': 'Polygon',
              'arcs': [[5807, -1528, 5808, -5537, 5809, 5810, 5811, -2673]],
              'id': '16043'
            }, {
              'type': 'Polygon',
              'arcs': [[-4013, -774, 5812, -61, 5813, -4649]],
              'id': '13233'
            }, {
              'type': 'Polygon',
              'arcs': [[-354, -3203, 5814, -4663, -3093, -460, 5815, 5816, 5817]],
              'id': '31031'
            }, {
              'type': 'Polygon',
              'arcs': [[-4001, 5818, 5819, -3851, 5820]],
              'id': '13247'
            }, {
              'type': 'Polygon',
              'arcs': [[5821, -3092, -5760, 5822, 5823]],
              'id': '06025'
            }, {
              'type': 'Polygon',
              'arcs': [[-1726, -1246, -5369, -2351, -4199, -5310, 5824]],
              'id': '16017'
            }, {
              'type': 'Polygon',
              'arcs': [[5825, 5826, 5827, -4416, 5828]],
              'id': '18045'
            }, {
              'type': 'Polygon',
              'arcs': [[5829, 5830, 5831, 5832, 5833, 5834, 5835]],
              'id': '47031'
            }, {
              'type': 'Polygon',
              'arcs': [[5836, 5837, 5838, -680, 5839, -5833, 5840]],
              'id': '47177'
            }, {
              'type': 'Polygon',
              'arcs': [[5841, -5594, 5842, 5843, 5844, 5845, 5846, -5151]],
              'id': '21195'
            }, {
              'type': 'Polygon',
              'arcs': [[5847, 5848, 5849, -1317, 5850, 5851]],
              'id': '21197'
            }, {
              'type': 'Polygon',
              'arcs': [[-1358, 5852, 5853, 5854]],
              'id': '26139'
            }, {
              'type': 'Polygon',
              'arcs': [[5855, 5856, 5857, -1225, 5858, 5859, 5860]],
              'id': '47165'
            }, {
              'type': 'Polygon',
              'arcs': [[5861, 5862, 5863, 5864, 5865]],
              'id': '37153'
            }, {
              'type': 'Polygon',
              'arcs': [[-3236, 5866, 5867, 5868, 5869]],
              'id': '48043'
            }, {
              'type': 'Polygon',
              'arcs': [[5870, 5871, -1478, -826, 5872, 5873]],
              'id': '56019'
            }, {
              'type': 'Polygon',
              'arcs': [[5874, 5875, 5876, -5734, -5765]],
              'id': '55095'
            }, {
              'type': 'Polygon',
              'arcs': [[-5877, 5877, -5710, -5735]],
              'id': '55109'
            }, {
              'type': 'Polygon',
              'arcs': [[5878, -4034, 5879, -4153]],
              'id': '48111'
            }, {
              'type': 'Polygon',
              'arcs': [[5880, -5649, 5881, 5882, 5883, 5884]],
              'id': '42067'
            }, {
              'type': 'Polygon',
              'arcs': [[5885, 5886, 5887, 5888, 5889, 5890, 5891]],
              'id': '18089'
            }, {
              'type': 'Polygon',
              'arcs': [[5892, 5893, 5894, 5895, 5896]],
              'id': '42131'
            }, {
              'type': 'Polygon',
              'arcs': [[5897, 5898, -5050, -5467, 5899, 5900, 5901]],
              'id': '29095'
            }, {
              'type': 'Polygon',
              'arcs': [[5902, 5903, -1015, 5904, 5905]],
              'id': '42073'
            }, {
              'type': 'Polygon',
              'arcs': [[5906, -1685, 5907, -5903, 5908, 5909]],
              'id': '42085'
            }, {
              'type': 'Polygon',
              'arcs': [[5910, -5897, 5911, 5912, -5085, 5913, 5914]],
              'id': '42079'
            }, {
              'type': 'Polygon',
              'arcs': [[-3655, -20, -4015, -5544]],
              'id': '16025'
            }, {
              'type': 'Polygon',
              'arcs': [[-3571, -297, -3727, 5915, -2914, 5916]],
              'id': '19103'
            }, {
              'type': 'Polygon',
              'arcs': [[-525, -1864, 5917, -709, 5918]],
              'id': '19117'
            }, {
              'type': 'Polygon',
              'arcs': [[5919, -739, -3066, 5920, 5921, 5922]],
              'id': '40151'
            }, {
              'type': 'Polygon',
              'arcs': [[5923, -5922, 5924, 5925, 5926]],
              'id': '40153'
            }, {
              'type': 'Polygon',
              'arcs': [[-2949, 5927, -4261, 5928, -4877, -3901, 5929]],
              'id': '35027'
            }, {
              'type': 'Polygon',
              'arcs': [[-5296, -4208, -4266, 5930, 5931]],
              'id': '38057'
            }, {
              'type': 'Polygon',
              'arcs': [[-4934, -4665, -2950, -5930, -3900, 5932]],
              'id': '35053'
            }, {
              'type': 'Polygon',
              'arcs': [[5933, 5934, -2569, 5935, -5827, 5936, -3009]],
              'id': '18157'
            }, {
              'type': 'Polygon',
              'arcs': [[5937, 5938, 5939, 5940, 5941, 5942]],
              'id': '21221'
            }, {
              'type': 'Polygon',
              'arcs': [[-5864, 5943, 5944, 5945]],
              'id': '37165'
            }, {
              'type': 'Polygon',
              'arcs': [[-2807, -864, -577, 5946, 5947, 5948]],
              'id': '17055'
            }, {
              'type': 'Polygon',
              'arcs': [[-863, 5949, -4065, -4303, 5950, -579]],
              'id': '17059'
            }, {
              'type': 'Polygon',
              'arcs': [[-4541, -2176, -5324, -3031, -5188, 5951]],
              'id': '17061'
            }, {
              'type': 'Polygon',
              'arcs': [[-4042, -2751, -3992, -5518, -1270]],
              'id': '06009'
            }, {
              'type': 'Polygon',
              'arcs': [[5952, -4698, 5953, 5954, 5955, 5956]],
              'id': '45065'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-4555, 5957]], [[-3953, -1071, -4557, 5958]]],
              'id': '45077'
            }, {
              'type': 'Polygon',
              'arcs': [[-5461, -2866, -5360, -3398, 5959]],
              'id': '51065'
            }, {
              'type': 'Polygon',
              'arcs': [[5960, -5791, -4287, -5189, 5961, 5962]],
              'id': '45085'
            }, {
              'type': 'Polygon',
              'arcs': [[5963, 5964, -1553, 5965]],
              'id': '51133'
            }, {
              'type': 'Polygon',
              'arcs': [[5966, -5436, 5967, 5968, -5772, 5969]],
              'id': '21069'
            }, {
              'type': 'Polygon',
              'arcs': [[-435, 5970, 5971, 5972, 5973, 5974]],
              'id': '47001'
            }, {
              'type': 'Polygon',
              'arcs': [[5975, 5976, 5977, -1983, -2302]],
              'id': '30099'
            }, {
              'type': 'Polygon',
              'arcs': [[-165, 5978, 5979, 5980, -5222]],
              'id': '35055'
            }, {
              'type': 'Polygon',
              'arcs': [[-3132, -5317, -896, 5981, -2151, -1290]],
              'id': '18085'
            }, {
              'type': 'Polygon',
              'arcs': [[5982, -4269, 5983, 5984, 5985]],
              'id': '38085'
            }, {
              'type': 'Polygon',
              'arcs': [[-3495, -4835, 5986, 5987, 5988, 5989, 5990]],
              'id': '47027'
            }, {
              'type': 'Polygon',
              'arcs': [[-5784, 5991, 5992, 5993, 5994]],
              'id': '48067'
            }, {
              'type': 'Polygon',
              'arcs': [[5995, -5671, 5996, -992, 5997, -1639, 5998]],
              'id': '23017'
            }, {
              'type': 'Polygon',
              'arcs': [[-5773, -5969, 5999, 6000, 6001]],
              'id': '21011'
            }, {
              'type': 'Polygon',
              'arcs': [[-4673, -3136, -1206, 6002, 6003, 6004]],
              'id': '37057'
            }, {
              'type': 'Polygon',
              'arcs': [[-5670, -5022, 6005, -993, -5997]],
              'id': '23005'
            }, {
              'type': 'Polygon',
              'arcs': [[6006, -3163, -5473, -5775, -2764, -1965, -4436]],
              'id': '27013'
            }, {
              'type': 'Polygon',
              'arcs': [[6007, 6008, 6009, 6010, 6011, -4399, -4398, 4397, -4398, -4397, 4395, -4395, -4394, 4393, -4394, 4393, -4394, -4393, 4391, -4391, -4390, -4389, -4388, 4387, -4388, -4387]],
              'id': '51093'
            }, {
              'type': 'Polygon',
              'arcs': [[-5363, 6012, 6013, 6014, -4375, -359, 6015, -4595]],
              'id': '56037'
            }, {
              'type': 'Polygon',
              'arcs': [[-2349, 6016, 6017, -4195]],
              'id': '30061'
            }, {
              'type': 'Polygon',
              'arcs': [[6018, 6019, 6020]],
              'id': '51685'
            }, {
              'type': 'Polygon',
              'arcs': [[6021, -4185, -2798, -5703, 6022, 6023]],
              'id': '55021'
            }, {
              'type': 'Polygon',
              'arcs': [[6024, -1760, -148, 6025]],
              'id': '72145'
            }, {
              'type': 'Polygon',
              'arcs': [[6026, 6027, -2734, 6028, 6029, 6030]],
              'id': '46041'
            }, {
              'type': 'Polygon',
              'arcs': [[6031, -1409, -5525, 6032, 6033]],
              'id': '45005'
            }, {
              'type': 'Polygon',
              'arcs': [[6034, -5195, -1488, 6035, 6036, -4988]],
              'id': '47059'
            }, {
              'type': 'Polygon',
              'arcs': [[-3869, -3828, -5781, 6037, 6038, -5326, 6039]],
              'id': '21051'
            }, {
              'type': 'Polygon',
              'arcs': [[6040, -4301, 6041, 6042, 6043, -5513]],
              'id': '21055'
            }, {
              'type': 'Polygon',
              'arcs': [[6044, 6045, -5866, -5091]],
              'id': '37007'
            }, {
              'type': 'Polygon',
              'arcs': [[6046, -437, 6047, 6048, 6049, 6050]],
              'id': '47049'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-5741, 6051, 6052, 6053, 6054]], [[6055, 6056]]],
              'id': '21075'
            }, {
              'type': 'Polygon',
              'arcs': [[6057, 6058, -5333, 6059, 6060]],
              'id': '21019'
            }, {
              'type': 'Polygon',
              'arcs': [[-4558, 6061, -4699, -5953, 6062]],
              'id': '45001'
            }, {
              'type': 'Polygon',
              'arcs': [[6063, 6064, 6065, 6066, 6067, -2789, -5383, 6068]],
              'id': '48149'
            }, {
              'type': 'Polygon',
              'arcs': [[-5447, 6069, 6070, -2095, 6071, -498]],
              'id': '41049'
            }, {
              'type': 'Polygon',
              'arcs': [[6072, 6073, 6074, -5160, -3521]],
              'id': '42013'
            }, {
              'type': 'Polygon',
              'arcs': [[6075]],
              'id': '25019'
            }, {
              'type': 'Polygon',
              'arcs': [[-5190, -4285, 6076, -5278, 6077]],
              'id': '45089'
            }, {
              'type': 'Polygon',
              'arcs': [[-3532, -3241, -3164, -6007, -4435]],
              'id': '27103'
            }, {
              'type': 'Polygon',
              'arcs': [[6078, 6079, -1230, 6080, -5589]],
              'id': '49055'
            }, {
              'type': 'Polygon',
              'arcs': [[6081, -1723, -4370, 6082, -3115, -3272, 6083]],
              'id': '48053'
            }, {
              'type': 'Polygon',
              'arcs': [[6084, 6085, -5610, 6086, -1525, -1999]],
              'id': '30023'
            }, {
              'type': 'Polygon',
              'arcs': [[-5609, 6087, -1526, -6087]],
              'id': '30093'
            }, {
              'type': 'Polygon',
              'arcs': [[-1421, -110, -5084, 6088, 6089, -4999]],
              'id': '46135'
            }, {
              'type': 'Polygon',
              'arcs': [[-4972, 6090, 6091, 6092, -352, 6093]],
              'id': '46071'
            }, {
              'type': 'Polygon',
              'arcs': [[-5989, 6094, -6051, 6095, 6096]],
              'id': '47133'
            }, {
              'type': 'Polygon',
              'arcs': [[-5695, 6097, 6098, -6080, 6099]],
              'id': '49015'
            }, {
              'type': 'Polygon',
              'arcs': [[6100, -1672, 6101, -4646, 6102, -3789, 6103, -3792, 6104]],
              'id': '48391'
            }, {
              'type': 'Polygon',
              'arcs': [[6105, 6106, -1224, -3573, -632]],
              'id': '48357'
            }, {
              'type': 'Polygon',
              'arcs': [[-4050, 6107, -620, -5227, 6108, -5235, 6109]],
              'id': '35045'
            }, {
              'type': 'Polygon',
              'arcs': [[-1279, 6110, 6111, 6112, 6113, -3553, 6114]],
              'id': '05063'
            }, {
              'type': 'Polygon',
              'arcs': [[6115, -5120, -3565, -1586, 6116, 6117, -2278]],
              'id': '29029'
            }, {
              'type': 'Polygon',
              'arcs': [[6118, -5269, 6119, -4337, -2743]],
              'id': '38067'
            }, {
              'type': 'Polygon',
              'arcs': [[-6113, 6120, 6121, -3989, -611, -4815, 6122]],
              'id': '05067'
            }, {
              'type': 'Polygon',
              'arcs': [[-104, 6123, 6124, -4978, -5081, -108]],
              'id': '46083'
            }, {
              'type': 'Polygon',
              'arcs': [[-6053, 6125, 6126, -1394, -5768, 6127]],
              'id': '47131'
            }, {
              'type': 'Polygon',
              'arcs': [[6128, -4291, 6129, 6130, 6131, 6132, 6133]],
              'id': '45003'
            }, {
              'type': 'Polygon',
              'arcs': [[6134, -3530, 6135, 6136]],
              'id': '41003'
            }, {
              'type': 'Polygon',
              'arcs': [[6137, -6136, -3529, 6138, 6139, 6140, 6141]],
              'id': '41039'
            }, {
              'type': 'Polygon',
              'arcs': [[6142, 6143, 6144, 6145, 6146, -4612, -5726]],
              'id': '51097'
            }, {
              'type': 'Polygon',
              'arcs': [[6147, 6148, -5743, 6149, 6150]],
              'id': '29201'
            }, {
              'type': 'Polygon',
              'arcs': [[-4643, 6151, 6152, 6153, 6154]],
              'id': '48321'
            }, {
              'type': 'Polygon',
              'arcs': [[-1097, 6155, 6156, -248, 6157]],
              'id': '48447'
            }, {
              'type': 'Polygon',
              'arcs': [[6158, -443, 6159, 6160]],
              'id': '55129'
            }, {
              'type': 'Polygon',
              'arcs': [[6161, -5590, -6081, -1229, 6162, 6163]],
              'id': '49017'
            }, {
              'type': 'Polygon',
              'arcs': [[6164, -5443, -3649, 6165, -2534]],
              'id': '31055'
            }, {
              'type': 'Polygon',
              'arcs': [[6166, 6167]],
              'id': '51520'
            }, {
              'type': 'Polygon',
              'arcs': [[6168, -32, 6169, -35, -3412]],
              'id': '38097'
            }, {
              'type': 'Polygon',
              'arcs': [[-3360, -3366, 6170, 6171, -1951, 6172]],
              'id': '05069'
            }, {
              'type': 'Polygon',
              'arcs': [[6173, 6174, 6175, -6121, -6112, 6176]],
              'id': '05075'
            }, {
              'type': 'Polygon',
              'arcs': [[-5177, 6177]],
              'id': '51570'
            }, {
              'type': 'Polygon',
              'arcs': [[6178, 6179, 6180, 6181, 6182]],
              'id': '48001'
            }, {
              'type': 'Polygon',
              'arcs': [[6183, -5523, -3485, 6184, -5739]],
              'id': '21039'
            }, {
              'type': 'Polygon',
              'arcs': [[-4318, 6185, -5613, 6186, 6187, 6188]],
              'id': '47009'
            }, {
              'type': 'Polygon',
              'arcs': [[6189, 6190, -1406, 6191, -5197, -1467, -1396]],
              'id': '47017'
            }, {
              'type': 'Polygon',
              'arcs': [[-3489, 6192, 6193, -1400, -6191, 6194]],
              'id': '47079'
            }, {
              'type': 'Polygon',
              'arcs': [[6195, 6196, 6197, 6198, 6199, -5344]],
              'id': '25013'
            }, {
              'type': 'Polygon',
              'arcs': [[-3621, -1594, -5104, 6200, -5464, -5048]],
              'id': '29033'
            }, {
              'type': 'Polygon',
              'arcs': [[6201, 6202, -6069, -5382, 6203, 6204]],
              'id': '48055'
            }, {
              'type': 'Polygon',
              'arcs': [[6205, -5291, 6206, 6207]],
              'id': '50021'
            }, {
              'type': 'Polygon',
              'arcs': [[-3544, 6208, 6209, 6210, 6211, -3527]],
              'id': '41031'
            }, {
              'type': 'Polygon',
              'arcs': [[6212, -2450, -4942, 6213, 6214, 6215]],
              'id': '51185'
            }, {
              'type': 'Polygon',
              'arcs': [[6216, -3769, 6217, 6218, 6219]],
              'id': '51043'
            }, {
              'type': 'Polygon',
              'arcs': [[6220, 6221, -4181]],
              'id': '72149'
            }, {
              'type': 'Polygon',
              'arcs': [[6222, 6223, 6224, -1766, 6225]],
              'id': '12067'
            }, {
              'type': 'Polygon',
              'arcs': [[-374, -1139, -1327, 6226, -2897]],
              'id': '20205'
            }, {
              'type': 'Polygon',
              'arcs': [[-1188, -5559, 6227, -3231]],
              'id': '17047'
            }, {
              'type': 'Polygon',
              'arcs': [[-1644, -2745, -4340, -402, 6228]],
              'id': '38071'
            }, {
              'type': 'Polygon',
              'arcs': [[-6088, -5608, -5538, -5809, -1527]],
              'id': '30057'
            }, {
              'type': 'Polygon',
              'arcs': [[-5281, 6229, 6230, 6231, 6232, -4863]],
              'id': '29005'
            }, {
              'type': 'Polygon',
              'arcs': [[6233, 6234, 6235, 6236, 6237, -3596, 6238]],
              'id': '51083'
            }, {
              'type': 'Polygon',
              'arcs': [[6239, 6240, 6241, -3137, 6242]],
              'id': '51013'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[6243]], [[6244]], [[6245, -4168, -2486, 6246, 6247]], [[6248]]],
              'id': '53057'
            }, {
              'type': 'Polygon',
              'arcs': [[6249, -3747, 6250, -720, 6251, 6252, 6253, -5123]],
              'id': '30025'
            }, {
              'type': 'Polygon',
              'arcs': [[6254, 6255, 6256, -6009, 6257, 6258]],
              'id': '51181'
            }, {
              'type': 'Polygon',
              'arcs': [[6259, 6260, 6261, -4737]],
              'id': '53071'
            }, {
              'type': 'Polygon',
              'arcs': [[6262, 6263, 6264, 6265, 6266, -771]],
              'id': '13057'
            }, {
              'type': 'Polygon',
              'arcs': [[6267, 6268, 6269, 6270, 6271]],
              'id': '27149'
            }, {
              'type': 'Polygon',
              'arcs': [[-2899, 6272, 6273, 6274, 6275]],
              'id': '20019'
            }, {
              'type': 'Polygon',
              'arcs': [[6276, 6277, 6278, -1702, -3887, 6279]],
              'id': '29075'
            }, {
              'type': 'Polygon',
              'arcs': [[6280, 6281, -6219, 6282, -2400, 6283]],
              'id': '51187'
            }, {
              'type': 'Polygon',
              'arcs': [[-1863, -1242, -291, -4826, -5918]],
              'id': '19135'
            }, {
              'type': 'Polygon',
              'arcs': [[6284, 6285, -1417, 6286, -1914]],
              'id': '48325'
            }, {
              'type': 'Polygon',
              'arcs': [[-4630, 6287, -3888, -2462, 6288, 6289]],
              'id': '29021'
            }, {
              'type': 'Polygon',
              'arcs': [[-5124, -6254, 6290, -1424, -5787, -5127]],
              'id': '30011'
            }, {
              'type': 'Polygon',
              'arcs': [[6291, 6292, -2645, -3415, 6293, 6294]],
              'id': '26055'
            }, {
              'type': 'Polygon',
              'arcs': [[6295, -4227, -4802, -4956, 6296, 6297, 6298]],
              'id': '28141'
            }, {
              'type': 'Polygon',
              'arcs': [[6299, -4935, -5933, -3904, -3759, -4810]],
              'id': '35003'
            }, {
              'type': 'Polygon',
              'arcs': [[6300, -3523, -5163, -329, -5408, 6301]],
              'id': '42111'
            }, {
              'type': 'Polygon',
              'arcs': [[-366, 6302, 6303, 6304, 6305, 6306]],
              'id': '36109'
            }, {
              'type': 'Polygon',
              'arcs': [[-3715, 6307, 6308, 6309]],
              'id': '36067'
            }, {
              'type': 'Polygon',
              'arcs': [[-5210, 6310, 6311, 6312, -5275, 6313]],
              'id': '45051'
            }, {
              'type': 'Polygon',
              'arcs': [[6314, 6315, 6316, -751]],
              'id': '30041'
            }, {
              'type': 'Polygon',
              'arcs': [[6317, 6318, 6319, -2879, -48]],
              'id': '36001'
            }, {
              'type': 'Polygon',
              'arcs': [[-517, 6320, -6266, 6321, 6322, -4004, 6323, 6324, -643, 6325]],
              'id': '13121'
            }, {
              'type': 'Polygon',
              'arcs': [[-5712, 6326, 6327, 6328, 6329, 6330]],
              'id': '55091'
            }, {
              'type': 'Polygon',
              'arcs': [[6331, -3389, 6332, 6333, 6334]],
              'id': '01105'
            }, {
              'type': 'Polygon',
              'arcs': [[-2812, 6335, -2419]],
              'id': '02090'
            }, {
              'type': 'Polygon',
              'arcs': [[6336, 6337, 6338, 6339]],
              'id': '13125'
            }, {
              'type': 'Polygon',
              'arcs': [[-944, 6340, -2329, 6341, -2834]],
              'id': '48173'
            }, {
              'type': 'Polygon',
              'arcs': [[-1504, -1502, 1501, 1502, -1502, -1501, 6342, -5361, -4593, -4088, 6343, -5810, -5536]],
              'id': '56039'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-4403, 6344]], [[6345, 6346, 6347, 6348, 6349, 6350, -4408, 6351, 6352]]],
              'id': '08059'
            }, {
              'type': 'Polygon',
              'arcs': [[6353, -2157, 6354]],
              'id': '08029'
            }, {
              'type': 'Polygon',
              'arcs': [[-4003, 6355, 6356, 6357, -6324]],
              'id': '13063'
            }, {
              'type': 'Polygon',
              'arcs': [[-74, 6358, -4472, 6359, 6360]],
              'id': '18117'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[6361]], [[6362]], [[6363]], [[-3739, 6364]]],
              'id': '36103'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[6365]], [[-4526, 6366, -3711, 6367]], [[6368]]],
              'id': '36045'
            }, {
              'type': 'Polygon',
              'arcs': [[-4083, 6369, 6370, 6371, -1798]],
              'id': '20107'
            }, {
              'type': 'Polygon',
              'arcs': [[6372, 6373, 6374, -3916, 6375, 6376, -4716, 6377]],
              'id': '37161'
            }, {
              'type': 'Polygon',
              'arcs': [[6378, 6379, 6380, -4571, -4994, -5745]],
              'id': '34041'
            }, {
              'type': 'Polygon',
              'arcs': [[6381, 6382, -5591, -6162, 6383, -4503]],
              'id': '49001'
            }, {
              'type': 'Polygon',
              'arcs': [[6384, 6385, -4746, 6386, -6167, 6387, -1632, 6388]],
              'id': '51191'
            }, {
              'type': 'Polygon',
              'arcs': [[-4954, -4651, 6389, 6390, -4171]],
              'id': '01015'
            }, {
              'type': 'Polygon',
              'arcs': [[6391, 6392, 6393, 6394, 6395, -1772]],
              'id': '13133'
            }, {
              'type': 'Polygon',
              'arcs': [[6396, 6397, 6398, 6399]],
              'id': '54009'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[6400]], [[6401]], [[-2074, 6402, -4962]], [[6403]], [[6404, -4964]]],
              'id': '02070'
            }, {
              'type': 'Polygon',
              'arcs': [[-3090, 6405, -3836, -5757, -4803, -5761]],
              'id': '04013'
            }, {
              'type': 'Polygon',
              'arcs': [[-4890, 6406, 6407, 6408, 6409]],
              'id': '18125'
            }, {
              'type': 'Polygon',
              'arcs': [[-3861, -2853, 6410, -4513, 6411, 6412, -77]],
              'id': '18137'
            }, {
              'type': 'Polygon',
              'arcs': [[-2528, 6413, -4793, -5431, 6414, -736]],
              'id': '20095'
            }, {
              'type': 'Polygon',
              'arcs': [[6415, -1550, 6416, 6417, 6418]],
              'id': '20123'
            }, {
              'type': 'Polygon',
              'arcs': [[-1570, 6419, -780, -1044, -3100, 6420]],
              'id': '20083'
            }, {
              'type': 'Polygon',
              'arcs': [[-3123, 6421, -2556, -1125, -659, 6422]],
              'id': '20127'
            }, {
              'type': 'Polygon',
              'arcs': [[-1789, 6423, -668, 6424, -1377, 6425, 6426]],
              'id': '27095'
            }, {
              'type': 'Polygon',
              'arcs': [[-5679, 6427, 6428, 6429, -89, 6430]],
              'id': '28081'
            }, {
              'type': 'Polygon',
              'arcs': [[6431, 6432, -5681, 6433, -455, 6434, 6435]],
              'id': '28071'
            }, {
              'type': 'Polygon',
              'arcs': [[6436, 6437, 6438, 6439, -4252, -4529]],
              'id': '28029'
            }, {
              'type': 'Polygon',
              'arcs': [[6440, 6441, 6442, 6443, -450, 6444]],
              'id': '28111'
            }, {
              'type': 'Polygon',
              'arcs': [[-4339, 6445, -33, -6169, -3411, -397]],
              'id': '38035'
            }, {
              'type': 'Polygon',
              'arcs': [[6446, 6447, 6448, -5246, -5205]],
              'id': '42045'
            }, {
              'type': 'Polygon',
              'arcs': [[6449, 6450, 6451, 6452, 6453]],
              'id': '44003'
            }, {
              'type': 'Polygon',
              'arcs': [[6454, -5917, -2913, -3574, -1870]],
              'id': '19095'
            }, {
              'type': 'Polygon',
              'arcs': [[-1063, 6455, -5444, -6165, -2533, 6456, -5529]],
              'id': '31053'
            }, {
              'type': 'Polygon',
              'arcs': [[-334, 6457, 6458, -5409]],
              'id': '54057'
            }, {
              'type': 'Polygon',
              'arcs': [[6459, -4817, -3848, 6460, -3364]],
              'id': '05117'
            }, {
              'type': 'Polygon',
              'arcs': [[-5759, 6461, -4813, 6462, -4805, -5756, -3834]],
              'id': '04009'
            }, {
              'type': 'Polygon',
              'arcs': [[-474, 6463, 6464, 6465, 6466, 6467, 6468, 6469]],
              'id': '08049'
            }, {
              'type': 'Polygon',
              'arcs': [[6470, 6471, 6472, 6473, 6474, -3303, -1859, -4773, 6475]],
              'id': '08109'
            }, {
              'type': 'Polygon',
              'arcs': [[6476, 6477, -3217, -1837, -623, 6478]],
              'id': '12093'
            }, {
              'type': 'Polygon',
              'arcs': [[-2142, 6479, 6480, 6481, -4053]],
              'id': '13123'
            }, {
              'type': 'Polygon',
              'arcs': [[-3437, 6482, 6483, 6484, -5221, 6485, 6486, -3205]],
              'id': '13299'
            }, {
              'type': 'Polygon',
              'arcs': [[6487, -5453, -5183, -4438, -5348, 6488, 6489]],
              'id': '29007'
            }, {
              'type': 'Polygon',
              'arcs': [[-5225, 6490, 6491, 6492, 6493]],
              'id': '35028'
            }, {
              'type': 'Polygon',
              'arcs': [[6494, 6495, -4584, -2568, -3586, -1473, -1532, -5717]],
              'id': '30027'
            }, {
              'type': 'Polygon',
              'arcs': [[6496, -5389, 6497, -4661]],
              'id': '31149'
            }, {
              'type': 'Polygon',
              'arcs': [[6498, 6499, -5298, 6500, 6501, -5476]],
              'id': '38061'
            }, {
              'type': 'Polygon',
              'arcs': [[6502, 6503, 6504, -1337, 6505, -4299, -4063]],
              'id': '21101'
            }, {
              'type': 'Polygon',
              'arcs': [[6506, -5801, -5556, 6507, 6508, -6450, 6509]],
              'id': '44007'
            }, {
              'type': 'Polygon',
              'arcs': [[6510, -3949, 6511, 6512, -5971, -434]],
              'id': '47013'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[6513, 6514, 6515, 6516]], [[6517, 6518, 6519, 6520, -131]]],
              'id': '48261'
            }, {
              'type': 'Polygon',
              'arcs': [[6521, -4130, 6522, 6523, -2926, 6524]],
              'id': '36051'
            }, {
              'type': 'Polygon',
              'arcs': [[6525, -3973, 6526, 6527, 6528, 6529]],
              'id': '54011'
            }, {
              'type': 'Polygon',
              'arcs': [[6530, 6531, 6532, -3996, 6533, -2223]],
              'id': '06007'
            }, {
              'type': 'Polygon',
              'arcs': [[-6468, 6534, 6535, 6536, 6537]],
              'id': '08117'
            }, {
              'type': 'Polygon',
              'arcs': [[6538, 6539, -4560, 6540, -1918]],
              'id': '13147'
            }, {
              'type': 'Polygon',
              'arcs': [[-5396, -1818, -4124, -3221, 6541]],
              'id': '17187'
            }, {
              'type': 'Polygon',
              'arcs': [[6542, 6543, 6544, -3455, 6545]],
              'id': '18119'
            }, {
              'type': 'Polygon',
              'arcs': [[6546, 6547, -6360, -4477, -4885, 6548, 6549, -6408]],
              'id': '18037'
            }, {
              'type': 'Polygon',
              'arcs': [[-2191, 6550, 6551, 6552, -1568]],
              'id': '20165'
            }, {
              'type': 'Polygon',
              'arcs': [[-225, -1036, -3572, -6455, 6553]],
              'id': '19011'
            }, {
              'type': 'Polygon',
              'arcs': [[6554, -4692, -3870, -6040, -5325, -3945, 6555]],
              'id': '21125'
            }, {
              'type': 'Polygon',
              'arcs': [[6556, 6557, 6558, 6559, -2526, -782]],
              'id': '20185'
            }, {
              'type': 'Polygon',
              'arcs': [[-5748, 6560, 6561, 6562, 6563, 6564]],
              'id': '22115'
            }, {
              'type': 'Polygon',
              'arcs': [[6565, 6566, 6567, -1615, -2707, -5425]],
              'id': '26093'
            }, {
              'type': 'Polygon',
              'arcs': [[-3170, -3150, -3315, 6568, -476, -2809, 6569, -1362]],
              'id': '27099'
            }, {
              'type': 'Polygon',
              'arcs': [[-2632, 6570, 6571, 6572, 6573]],
              'id': '28073'
            }, {
              'type': 'Polygon',
              'arcs': [[6574, 6575, 6576, 6577, 6578, 6579]],
              'id': '28053'
            }, {
              'type': 'Polygon',
              'arcs': [[6580, 6581, -1664, 6582, -670]],
              'id': '31139'
            }, {
              'type': 'Polygon',
              'arcs': [[6583, 6584, -5583, 6585, -1318, -5850]],
              'id': '21237'
            }, {
              'type': 'Polygon',
              'arcs': [[6586, -5136, 6587, -5939, 6588, -6043]],
              'id': '21033'
            }, {
              'type': 'Polygon',
              'arcs': [[-1427, -3774, 6589, 6590, -4970, -42]],
              'id': '46093'
            }, {
              'type': 'Polygon',
              'arcs': [[6591, 6592, 6593, 6594, 6595, 6596, -4705, 6597]],
              'id': '21021'
            }, {
              'type': 'Polygon',
              'arcs': [[6598, -4722, 6599, 6600, 6601]],
              'id': '37199'
            }, {
              'type': 'Polygon',
              'arcs': [[-6333, -3388, 6602, -2772, 6603, 6604]],
              'id': '01047'
            }, {
              'type': 'Polygon',
              'arcs': [[6605, -2629, 6606, -218]],
              'id': '13231'
            }, {
              'type': 'Polygon',
              'arcs': [[-878, 6607, 6608, 6609]],
              'id': '01035'
            }, {
              'type': 'Polygon',
              'arcs': [[-3472, 6610, -3362, -2543, 6611, 6612]],
              'id': '05105'
            }, {
              'type': 'Polygon',
              'arcs': [[-6481, 6613, -6263, 6614]],
              'id': '13227'
            }, {
              'type': 'Polygon',
              'arcs': [[6615, -6395, 6616, 6617, -6340, 6618, 6619]],
              'id': '13141'
            }, {
              'type': 'Polygon',
              'arcs': [[6620, -200, 6621, 6622, 6623]],
              'id': '13307'
            }, {
              'type': 'Polygon',
              'arcs': [[6624, -4240, 6625, -3078, 6626, 6627]],
              'id': '18095'
            }, {
              'type': 'Polygon',
              'arcs': [[-3457, -75, -6361, -6548, 6628]],
              'id': '18101'
            }, {
              'type': 'Polygon',
              'arcs': [[-2257, -379, -1571, -6421, -3103, 6629, 6630]],
              'id': '20055'
            }, {
              'type': 'Polygon',
              'arcs': [[-2210, 6631, 6632, 6633, 6634]],
              'id': '20087'
            }, {
              'type': 'Polygon',
              'arcs': [[-3475, 6635, 6636, -5934, -3008, 6637]],
              'id': '18181'
            }, {
              'type': 'Polygon',
              'arcs': [[-4707, 6638, -4693, -6555, 6639, -4305, 6640]],
              'id': '21199'
            }, {
              'type': 'Polygon',
              'arcs': [[-5489, -5286, -5322, -4539, 6641]],
              'id': '17009'
            }, {
              'type': 'Polygon',
              'arcs': [[6642, 6643, 6644, 6645, 6646, 6647, 6648]],
              'id': '22021'
            }, {
              'type': 'Polygon',
              'arcs': [[-5900, -5466, -1990, 6649, 6650]],
              'id': '29101'
            }, {
              'type': 'Polygon',
              'arcs': [[-4250, 6651, 6652, 6653, 6654]],
              'id': '29017'
            }, {
              'type': 'Polygon',
              'arcs': [[-2326, 6655, 6656, 6657, 6658, 6659]],
              'id': '29035'
            }, {
              'type': 'Polygon',
              'arcs': [[-971, -2537, 6660, -4865, 6661, -2619]],
              'id': '31109'
            }, {
              'type': 'Polygon',
              'arcs': [[6662, 6663, 6664, 6665, -4573]],
              'id': '34035'
            }, {
              'type': 'Polygon',
              'arcs': [[6666, -6525, -2925, 6667, 6668]],
              'id': '36121'
            }, {
              'type': 'Polygon',
              'arcs': [[6669, -367, -6307, 6670, 6671]],
              'id': '36097'
            }, {
              'type': 'Polygon',
              'arcs': [[6672, 6673, 6674, 6675, -1886]],
              'id': '39091'
            }, {
              'type': 'Polygon',
              'arcs': [[6676, -1811, -1934, 6677, 6678, 6679, -6675]],
              'id': '39159'
            }, {
              'type': 'Polygon',
              'arcs': [[-5059, -3176, 6680, -3519, 6681]],
              'id': '42063'
            }, {
              'type': 'Polygon',
              'arcs': [[-4074, -5807, 6682, -5752, 6683, -2845, 6684]],
              'id': '21099'
            }, {
              'type': 'Polygon',
              'arcs': [[-1339, 6685, -4702, -4297, 6686, 6687, 6688]],
              'id': '21183'
            }, {
              'type': 'Polygon',
              'arcs': [[6689, 6690, -2522, -2731, -6028, 6691]],
              'id': '46129'
            }, {
              'type': 'Polygon',
              'arcs': [[-5074, 6692, -4986, -5611, 6693]],
              'id': '47089'
            }, {
              'type': 'Polygon',
              'arcs': [[6694, 6695, 6696, 6697, -5770, 6698, -804]],
              'id': '21097'
            }, {
              'type': 'Polygon',
              'arcs': [[-5612, -5068, 6699, 6700, 6701, -6187]],
              'id': '37173'
            }, {
              'type': 'Polygon',
              'arcs': [[6702, -2367, 6703, -3113, 6704, 6705, 6706, 6707, 6708, 6709, -6710, 6709, 6710, 6711, 6712, 6713, 6714, 6715, 6716, -2371, 6717]],
              'id': '48499'
            }, {
              'type': 'Polygon',
              'arcs': [[6718, 6719, 6720, 6721, 6722, 6723]],
              'id': '37091'
            }, {
              'type': 'Polygon',
              'arcs': [[-832, 6724, -4221, -5440, -4158, 6725, 6726]],
              'id': '48291'
            }, {
              'type': 'Polygon',
              'arcs': [[6727, 6728, -80, -4422, 6729, -72, 6730]],
              'id': '18071'
            }, {
              'type': 'Polygon',
              'arcs': [[-6553, 6731, -6557, -781, -6420, -1569]],
              'id': '20145'
            }, {
              'type': 'Polygon',
              'arcs': [[-2559, -3324, -1258, -1800, -1137, -372]],
              'id': '20031'
            }, {
              'type': 'Polygon',
              'arcs': [[-852, 6732, 6733, -4837, -3877]],
              'id': '22055'
            }, {
              'type': 'Polygon',
              'arcs': [[6734, -2135, -1389, -6268, 6735]],
              'id': '27051'
            }, {
              'type': 'Polygon',
              'arcs': [[6736, -2966, 6737, 6738, 6739]],
              'id': '28121'
            }, {
              'type': 'Polygon',
              'arcs': [[6740, 6741, -6740, -6438, 6742, -3706]],
              'id': '28049'
            }, {
              'type': 'Polygon',
              'arcs': [[6743, 6744, 6745, -4680, 6746, 6747]],
              'id': '37051'
            }, {
              'type': 'Polygon',
              'arcs': [[6748, 6749, 6750, 6751, -1311, -2971, -1973, -4201]],
              'id': '37193'
            }, {
              'type': 'Polygon',
              'arcs': [[-1902, 6752, 6753, -6673, -1885, 6754]],
              'id': '39011'
            }, {
              'type': 'Polygon',
              'arcs': [[6755, 6756, 6757, 6758, 6759, 6760, -3928]],
              'id': '40125'
            }, {
              'type': 'Polygon',
              'arcs': [[6761, -4279, 6762, 6763, 6764, 6765]],
              'id': '40091'
            }, {
              'type': 'Polygon',
              'arcs': [[6766, 6767, -3541, 6768, 6769]],
              'id': '41071'
            }, {
              'type': 'Polygon',
              'arcs': [[-5088, -5746, -4992, 6770, 6771, 6772]],
              'id': '42077'
            }, {
              'type': 'Polygon',
              'arcs': [[-5805, 6773, -4710, 6774, 6775]],
              'id': '21217'
            }, {
              'type': 'Polygon',
              'arcs': [[-4426, -2846, -6684, -5755, -3492, 6776]],
              'id': '21009'
            }, {
              'type': 'Polygon',
              'arcs': [[-6083, -4374, 6777, -6202, 6778, -3116]],
              'id': '48453'
            }, {
              'type': 'Polygon',
              'arcs': [[-115, -833, -6727, 6779, 6780, 6781]],
              'id': '48339'
            }, {
              'type': 'Polygon',
              'arcs': [[6782, -470, -2330, -6341, -943]],
              'id': '48227'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-3963]], [[6783, -5846, 6784, 6785, -1630, 6786, -5563]]],
              'id': '51195'
            }, {
              'type': 'Polygon',
              'arcs': [[6787]],
              'id': '51840'
            }, {
              'type': 'Polygon',
              'arcs': [[-4275, 6788, -948, 6789, -96]],
              'id': '39139'
            }, {
              'type': 'Polygon',
              'arcs': [[-6739, 6790, 6791, -2630, 6792, -6439]],
              'id': '28127'
            }, {
              'type': 'Polygon',
              'arcs': [[6793, -6489, -5351, 6794, 6795, -1542, 6796]],
              'id': '29019'
            }, {
              'type': 'Polygon',
              'arcs': [[-752, -6317, 6797, -6495, -5716, 6798, -5977, 6799]],
              'id': '30015'
            }, {
              'type': 'Polygon',
              'arcs': [[6800, -927, -3413, -387, -1970, -4659]],
              'id': '31081'
            }, {
              'type': 'Polygon',
              'arcs': [[-6493, 6801, -6491, -5224, 6802, -4671, -2946, 6803, 6804]],
              'id': '35049'
            }, {
              'type': 'Polygon',
              'arcs': [[6805, -5393, -4678, 6806, 6807, -4681, -6746]],
              'id': '37163'
            }, {
              'type': 'Polygon',
              'arcs': [[6808, -2786, -4280, -6762, 6809, 6810, -6758]],
              'id': '40107'
            }, {
              'type': 'Polygon',
              'arcs': [[6811, 6812, 6813, -1391, 6814, -3064]],
              'id': '40047'
            }, {
              'type': 'Polygon',
              'arcs': [[-6001, 6815, 6816, -6584, -5849, 6817]],
              'id': '21165'
            }, {
              'type': 'Polygon',
              'arcs': [[-5223, -5981, 6818, 6819, -4667, -6803]],
              'id': '35033'
            }, {
              'type': 'Polygon',
              'arcs': [[-6583, -1660, 6820, -4626, -671]],
              'id': '31119'
            }, {
              'type': 'Polygon',
              'arcs': [[-236, 6821, -923, -6801, -4658, -792]],
              'id': '31121'
            }, {
              'type': 'Polygon',
              'arcs': [[-3528, -6212, 6822, -4365, -4134, 6823, -6139]],
              'id': '41017'
            }, {
              'type': 'Polygon',
              'arcs': [[-4368, 6824, 6825, 6826, 6827, 6828, 6829]],
              'id': '32013'
            }, {
              'type': 'Polygon',
              'arcs': [[6830, 6831, 6832, 6833, 6834]],
              'id': '42117'
            }, {
              'type': 'Polygon',
              'arcs': [[-6688, 6835, -2848, -4430, 6836, 6837]],
              'id': '21031'
            }, {
              'type': 'Polygon',
              'arcs': [[-4475, 6838, -4068, -4295, -4886]],
              'id': '21163'
            }, {
              'type': 'Polygon',
              'arcs': [[-6597, -6596, -6595, 6839, -4694, -6639, -4706]],
              'id': '21137'
            }, {
              'type': 'Polygon',
              'arcs': [[-5327, -6039, 6840, -5565, 6841, 6842, -3947]],
              'id': '21013'
            }, {
              'type': 'Polygon',
              'arcs': [[-3127, 6843, 6844, -802, -2774, -4795]],
              'id': '21187'
            }, {
              'type': 'Polygon',
              'arcs': [[6845, 6846, -3958]],
              'id': '37137'
            }, {
              'type': 'Polygon',
              'arcs': [[6847, 6848, 6849, 6850, 6851, 6852]],
              'id': '37187'
            }, {
              'type': 'Polygon',
              'arcs': [[6853, 6854, 6855, 6856, 6857]],
              'id': '54015'
            }, {
              'type': 'Polygon',
              'arcs': [[6858, -5130, 6859, -5871, 6860]],
              'id': '56033'
            }, {
              'type': 'Polygon',
              'arcs': [[6861, -146, 6862, 6863, 6864]],
              'id': '72137'
            }, {
              'type': 'Polygon',
              'arcs': [[-5018, 6865, -2120, -3334, 6866, -4356]],
              'id': '72125'
            }, {
              'type': 'Polygon',
              'arcs': [[6867, -4923, 6868, 6869, 6870]],
              'id': '42103'
            }, {
              'type': 'Polygon',
              'arcs': [[6871, 6872, -6844, -3126, 6873]],
              'id': '21077'
            }, {
              'type': 'Polygon',
              'arcs': [[-1204, -5577, 6874, 6875, -6744, 6876, -5863, 6877]],
              'id': '37125'
            }, {
              'type': 'Polygon',
              'arcs': [[-5945, 6878, -6747, -4684, 6879, -5209, 6880]],
              'id': '37155'
            }, {
              'type': 'Polygon',
              'arcs': [[-4373, 6881, -6064, -6203, -6778]],
              'id': '48021'
            }, {
              'type': 'Polygon',
              'arcs': [[6882, 6883, 6884, -830, -113]],
              'id': '48455'
            }, {
              'type': 'Polygon',
              'arcs': [[6885, 6886, 6887, -3050, -4672, -1307, -6752, 6888]],
              'id': '37171'
            }, {
              'type': 'Polygon',
              'arcs': [[6889, 6890, -5474, 6891]],
              'id': '38023'
            }, {
              'type': 'Polygon',
              'arcs': [[-4192, 6892, 6893, 6894, 6895, 6896, -2473]],
              'id': '72119'
            }, {
              'type': 'Polygon',
              'arcs': [[-1408, 6897, -5098, -4902, 6898, -4984, -5526]],
              'id': '45029'
            }, {
              'type': 'Polygon',
              'arcs': [[-3511, 6899, 6900, -5837, 6901, 6902]],
              'id': '47041'
            }, {
              'type': 'Polygon',
              'arcs': [[-4324, -964, -690, -1720, -1129, 6903]],
              'id': '48309'
            }, {
              'type': 'Polygon',
              'arcs': [[-3960, 6904, -2453, -4314]],
              'id': '37031'
            }, {
              'type': 'Polygon',
              'arcs': [[-5031, 6905, -1714, 6906, -2593, -2320]],
              'id': '48307'
            }, {
              'type': 'Polygon',
              'arcs': [[-3143, 6907, 6908, -1083, 6909, 6910]],
              'id': '39171'
            }, {
              'type': 'Polygon',
              'arcs': [[6911, 6912, 6913, 6914, 6915, 6916, 6917, -6154]],
              'id': '48039'
            }, {
              'type': 'Polygon',
              'arcs': [[-1924, -841, 6918, 6919, -4943, 6920, 6921]],
              'id': '39013'
            }, {
              'type': 'Polygon',
              'arcs': [[6922, 6923, 6924, 6925, 6926, 6927]],
              'id': '39071'
            }, {
              'type': 'Polygon',
              'arcs': [[-3725, 6928, -3229, 6929, -796, 6930]],
              'id': '39173'
            }, {
              'type': 'Polygon',
              'arcs': [[6931, 6932, -874, 6933, 6934, 6935]],
              'id': '55015'
            }, {
              'type': 'Polygon',
              'arcs': [[6936, 6937, 6938, -5885, 6939]],
              'id': '42087'
            }, {
              'type': 'Polygon',
              'arcs': [[6940, -5927, 6941, 6942, -2622, -1221, 6943]],
              'id': '40045'
            }, {
              'type': 'Polygon',
              'arcs': [[6944, 6945, -2246, 6946, 6947, 6948, -6092]],
              'id': '46075'
            }, {
              'type': 'Polygon',
              'arcs': [[-5941, 6949, 6950, -4637, -1401, -6194, 6951]],
              'id': '47161'
            }, {
              'type': 'Polygon',
              'arcs': [[6952, 6953, 6954, -2873, -1022]],
              'id': '48017'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[6955]], [[6956, 6957, -957, -4184, 6958, 6959]]],
              'id': '72113'
            }, {
              'type': 'Polygon',
              'arcs': [[6960, -1941, 6961, 6962, 6963, 6964]],
              'id': '40065'
            }, {
              'type': 'Polygon',
              'arcs': [[-1069, 6965, -3942, 6966, -4695, -6062]],
              'id': '45059'
            }, {
              'type': 'Polygon',
              'arcs': [[6967, 6968, -3770, -1425, -6291, -6253]],
              'id': '46063'
            }, {
              'type': 'Polygon',
              'arcs': [[6969, 6970, 6971, 6972, 6973]],
              'id': '54105'
            }, {
              'type': 'Polygon',
              'arcs': [[6974, 6975, -6932, 6976, -835]],
              'id': '55087'
            }, {
              'type': 'Polygon',
              'arcs': [[-4270, -5983, 6977, -3309, 6978]],
              'id': '38037'
            }, {
              'type': 'Polygon',
              'arcs': [[6979, -4364, 6980, 6981]],
              'id': '41007'
            }, {
              'type': 'Polygon',
              'arcs': [[6982, -5914, -5089, -6773, 6983, -239, 6984, -5647]],
              'id': '42107'
            }, {
              'type': 'Polygon',
              'arcs': [[-6834, 6985, 6986, 6987, 6988, -5644, 6989, 6990, 6991]],
              'id': '42081'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[6992, 6993]], [[-6901, 6994, 6995, 6996, -5838]]],
              'id': '47185'
            }, {
              'type': 'Polygon',
              'arcs': [[6997, 6998, 6999, 7000, -6329]],
              'id': '55011'
            }, {
              'type': 'Polygon',
              'arcs': [[7001]],
              'id': '69110'
            }, {
              'type': 'Polygon',
              'arcs': [[-6867, -3333, 7002, 7003, -4357]],
              'id': '72079'
            }, {
              'type': 'Polygon',
              'arcs': [[7004, 7005, 7006, 7007, 7008, 7009, 7010]],
              'id': '72131'
            }, {
              'type': 'Polygon',
              'arcs': [[7011, -4116, 7012, 7013, -6106, -631, -4033, 7014]],
              'id': '40139'
            }, {
              'type': 'Polygon',
              'arcs': [[-6988, 7015, -5915, -6983, -5646, 7016]],
              'id': '42037'
            }, {
              'type': 'Polygon',
              'arcs': [[-5985, 7017, 7018, -6692, -6027, 7019, -3772]],
              'id': '46031'
            }, {
              'type': 'Polygon',
              'arcs': [[-6181, 7020, 7021, -6883, -112, -2390, 7022]],
              'id': '48225'
            }, {
              'type': 'Polygon',
              'arcs': [[-6907, -1713, 7023, 7024, -6084, -3271, -2594]],
              'id': '48411'
            }, {
              'type': 'Polygon',
              'arcs': [[-4329, 7025, 7026, 7027, -6256, 7028, 7029]],
              'id': '51036'
            }, {
              'type': 'Polygon',
              'arcs': [[7030, -6284, -2404, 7031, -2410, 7032]],
              'id': '51139'
            }, {
              'type': 'Polygon',
              'arcs': [[-2244, -630, 7033, -3202, 7034]],
              'id': '46123'
            }, {
              'type': 'Polygon',
              'arcs': [[-3237, -5870, 7035]],
              'id': '48377'
            }, {
              'type': 'Polygon',
              'arcs': [[-6384, -6164, 7036, 7037, -4504]],
              'id': '49021'
            }, {
              'type': 'Polygon',
              'arcs': [[7038, 7039, -1749, 7040, 7041]],
              'id': '48347'
            }, {
              'type': 'Polygon',
              'arcs': [[7042, 7043, 7044, 7045, 7046, 7047, -6066]],
              'id': '48477'
            }, {
              'type': 'Polygon',
              'arcs': [[-3380, -4060, -5367, 7048, 7049, 7050]],
              'id': '49003'
            }, {
              'type': 'Polygon',
              'arcs': [[7051, 7052, 7053, -261, 7054]],
              'id': '48097'
            }, {
              'type': 'Polygon',
              'arcs': [[7055, -6964, 7056, 7057, -1095, -5016]],
              'id': '48487'
            }, {
              'type': 'Polygon',
              'arcs': [[-962, 7058, -6182, -7023, -2389, 7059]],
              'id': '48289'
            }, {
              'type': 'Polygon',
              'arcs': [[-1930, -5385, 7060, -1669, 7061, 7062, -1413]],
              'id': '48255'
            }, {
              'type': 'Polygon',
              'arcs': [[-4941, 7063, -3619, 7064, 7065, -6214]],
              'id': '51021'
            }, {
              'type': 'Polygon',
              'arcs': [[7066, 7067, -6259, 7068, 7069]],
              'id': '51183'
            }, {
              'type': 'Polygon',
              'arcs': [[7070, -5482, 7071, 7072, 7073]],
              'id': '51111'
            }, {
              'type': 'Polygon',
              'arcs': [[7074, -3061, 7075, -6855, 7076, -6971]],
              'id': '54013'
            }, {
              'type': 'Polygon',
              'arcs': [[7077, -2451, -6213, 7078, 7079, -5844]],
              'id': '51027'
            }, {
              'type': 'Polygon',
              'arcs': [[7080, -7074, 7081, 7082, -3830, 7083, -6237]],
              'id': '51117'
            }, {
              'type': 'Polygon',
              'arcs': [[-6699, -5774, 7084, 7085, 7086, -805]],
              'id': '21017'
            }, {
              'type': 'Polygon',
              'arcs': [[-22, -3654, -3376, -4487]],
              'id': '16067'
            }, {
              'type': 'Polygon',
              'arcs': [[7087, -6889, -6751, 7088]],
              'id': '37005'
            }, {
              'type': 'Polygon',
              'arcs': [[-3401, 7089, 7090, 7091, 7092, -5480]],
              'id': '51007'
            }, {
              'type': 'Polygon',
              'arcs': [[7093, -5115, 7094, -2286, 7095, -6145]],
              'id': '51073'
            }, {
              'type': 'Polygon',
              'arcs': [[7096, -6281, -7031, 7097, 7098]],
              'id': '51171'
            }, {
              'type': 'Polygon',
              'arcs': [[-5845, -7080, 7099, -6785]],
              'id': '51051'
            }, {
              'type': 'Polygon',
              'arcs': [[7100, 7101, 7102, -958, -6958, 7103, 7104]],
              'id': '72141'
            }, {
              'type': 'Polygon',
              'arcs': [[7105, -6160, 7106, -4345, 7107, -5876]],
              'id': '55005'
            }, {
              'type': 'Polygon',
              'arcs': [[7108, 7109, 7110, 7111, -2128]],
              'id': '72003'
            }, {
              'type': 'Polygon',
              'arcs': [[7112, 7113, 7114, 7115]],
              'id': '53049'
            }, {
              'type': 'Polygon',
              'arcs': [[7116, 7117, 7118, 7119]],
              'id': '54045'
            }, {
              'type': 'Polygon',
              'arcs': [[7120, 7121, -2748, 7122, -1157]],
              'id': '06039'
            }, {
              'type': 'Polygon',
              'arcs': [[7123, 7124, 7125, -871, 7126]],
              'id': '55061'
            }, {
              'type': 'Polygon',
              'arcs': [[7127, -2149, 7128, -1366, -3498, 7129, -3028]],
              'id': '17135'
            }, {
              'type': 'Polygon',
              'arcs': [[-2158, -6354, 7130, 7131, 7132, -6471, 7133, 7134]],
              'id': '08051'
            }, {
              'type': 'Polygon',
              'arcs': [[7135, -656, 7136, -6728, 7137]],
              'id': '18013'
            }, {
              'type': 'Polygon',
              'arcs': [[7138, 7139, 7140, 7141, 7142]],
              'id': '13101'
            }, {
              'type': 'Polygon',
              'arcs': [[7143, -5575, 7144, -5394, -6806, -6745, -6876]],
              'id': '37085'
            }, {
              'type': 'Polygon',
              'arcs': [[-6305, 7145, 7146, 7147, 7148, 7149]],
              'id': '36107'
            }, {
              'type': 'Polygon',
              'arcs': [[-6877, -6748, -6879, -5944]],
              'id': '37093'
            }, {
              'type': 'Polygon',
              'arcs': [[7150, 7151, 7152, 7153]],
              'id': '37143'
            }, {
              'type': 'Polygon',
              'arcs': [[-4640, -5006, 7154, -5539, -1403]],
              'id': '47085'
            }, {
              'type': 'Polygon',
              'arcs': [[-688, -418, -1980, -2640, -188]],
              'id': '48381'
            }, {
              'type': 'Polygon',
              'arcs': [[-3305, 7155, 7156, 7157, -5979, -164]],
              'id': '08023'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7158]], [[7159, -3920, 7160, -1868, 7161, 7162, 7163, 7164]]],
              'id': '08123'
            }, {
              'type': 'Polygon',
              'arcs': [[7165, 7166, -4055, 7167, -4412]],
              'id': '13313'
            }, {
              'type': 'Polygon',
              'arcs': [[7168, 7169, 7170, 7171, -6697, 7172]],
              'id': '21023'
            }, {
              'type': 'Polygon',
              'arcs': [[-4241, -6625, 7173, -2572, 7174]],
              'id': '18159'
            }, {
              'type': 'Polygon',
              'arcs': [[7175, -4708, -6641, -4304, 7176, -4833]],
              'id': '21207'
            }, {
              'type': 'Polygon',
              'arcs': [[-6044, -6589, -5938, 7177, -5514]],
              'id': '21143'
            }, {
              'type': 'Polygon',
              'arcs': [[-1046, -3307, 7178, 7179, 7180, 7181]],
              'id': '20025'
            }, {
              'type': 'Polygon',
              'arcs': [[-3597, -6238, -7084, -3832, -1082, 7182, -5232]],
              'id': '37077'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7183, 7184]], [[-6852, 7185, 7186, 7187, 7188, 7189]]],
              'id': '37095'
            }, {
              'type': 'Polygon',
              'arcs': [[7190, -6579, 7191, 7192]],
              'id': '28125'
            }, {
              'type': 'Polygon',
              'arcs': [[-7104, -6957, 7193, 7194, 7195, 7196]],
              'id': '72001'
            }, {
              'type': 'Polygon',
              'arcs': [[-6620, 7197, 7198, -883, 7199]],
              'id': '13009'
            }, {
              'type': 'Polygon',
              'arcs': [[-4296, -4075, -6685, -2844, -6836, -6687]],
              'id': '21085'
            }, {
              'type': 'Polygon',
              'arcs': [[-5680, -6431, -88, -456, -6434]],
              'id': '28115'
            }, {
              'type': 'Polygon',
              'arcs': [[-628, 7200, 7201, -5386, 7202]],
              'id': '31015'
            }, {
              'type': 'Polygon',
              'arcs': [[7203]],
              'id': '51790'
            }, {
              'type': 'Polygon',
              'arcs': [[-2536, 7204, -3737, -5279, -4861, -6661]],
              'id': '31025'
            }, {
              'type': 'Polygon',
              'arcs': [[-1451, 7205, -3159, -122, -4757, -543]],
              'id': '46073'
            }, {
              'type': 'Polygon',
              'arcs': [[-4806, -6463, -4812, -4930, 7206, -284]],
              'id': '04003'
            }, {
              'type': 'Polygon',
              'arcs': [[7207, -4465, -3507, -4607, 7208, 7209]],
              'id': '05113'
            }, {
              'type': 'Polygon',
              'arcs': [[-3086, -5722, 7210, 7211, 7212, -3940]],
              'id': '45039'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7213]], [[-3021, 7214, 7215, 7216]], [[7217]]],
              'id': '06111'
            }, {
              'type': 'Polygon',
              'arcs': [[7218, -2007, 7219, 7220, 7221]],
              'id': '06059'
            }, {
              'type': 'Polygon',
              'arcs': [[7222, -3858, -3039, 7223]],
              'id': '12053'
            }, {
              'type': 'Polygon',
              'arcs': [[7224, 7225, 7226, 7227, -4482, -3074]],
              'id': '13029'
            }, {
              'type': 'Polygon',
              'arcs': [[-2766, -5777, 7228, -232, 7229, 7230, -2739]],
              'id': '19109'
            }, {
              'type': 'Polygon',
              'arcs': [[7231, -2905, -2655, -4113, 7232, -3370]],
              'id': '20187'
            }, {
              'type': 'Polygon',
              'arcs': [[7233, -3276, -2336, 7234, -3374, -4151, 7235, -7157]],
              'id': '08071'
            }, {
              'type': 'Polygon',
              'arcs': [[-3029, -7130, -3500, 7236, -3246, -5158, 7237, 7238, -5185]],
              'id': '17119'
            }, {
              'type': 'Polygon',
              'arcs': [[7239, -767, -625, 7240, 7241, 7242, 7243]],
              'id': '12015'
            }, {
              'type': 'Polygon',
              'arcs': [[-5557, -4891, -6410, 7244, 7245, -4061, 7246]],
              'id': '18051'
            }, {
              'type': 'Polygon',
              'arcs': [[7247, 7248, -3728, -295]],
              'id': '19163'
            }, {
              'type': 'Polygon',
              'arcs': [[7249, -6140, -6824, -4139, 7250, -4044, 7251]],
              'id': '41035'
            }, {
              'type': 'Polygon',
              'arcs': [[-5384, -2793, 7252, -1670, -7061]],
              'id': '48123'
            }, {
              'type': 'Polygon',
              'arcs': [[7253, -338, 7254, 7255, 7256, 7257, 7258]],
              'id': '01023'
            }, {
              'type': 'Polygon',
              'arcs': [[7259, 7260, 7261, -4603, 7262, -7255, -337]],
              'id': '01119'
            }, {
              'type': 'Polygon',
              'arcs': [[7263, -1690, 7264, 7265, 7266, 7267, -4230]],
              'id': '05015'
            }, {
              'type': 'Polygon',
              'arcs': [[7268, 7269, -5055, -2002, 7270, -7215, -3020, 7271]],
              'id': '06029'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-7241, 7272, 7273, 7274]], [[7275]], [[-7243, 7276]]],
              'id': '12071'
            }, {
              'type': 'Polygon',
              'arcs': [[7277, -475, -6470, 7278, -1793, 7279, 7280]],
              'id': '08107'
            }, {
              'type': 'Polygon',
              'arcs': [[7281, 7282, 7283, 7284, 7285, 7286, 7287]],
              'id': '17181'
            }, {
              'type': 'Polygon',
              'arcs': [[-3306, -740, -5920, 7288, -7179]],
              'id': '20033'
            }, {
              'type': 'Polygon',
              'arcs': [[7289, 7290, -4703, -6686, -1338, -6505]],
              'id': '21059'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7291]], [[7292]], [[7293]], [[7294, 7295, 7296]]],
              'id': '22087'
            }, {
              'type': 'Polygon',
              'arcs': [[7297, 7298, -4057, 7299, 7300]],
              'id': '16005'
            }, {
              'type': 'Polygon',
              'arcs': [[7301, -1604, -4216, -2985, -898, -3328, -5254]],
              'id': '20153'
            }, {
              'type': 'Polygon',
              'arcs': [[7302, 7303, 7304, 7305, 7306, -2113]],
              'id': '13275'
            }, {
              'type': 'Polygon',
              'arcs': [[7307, 7308, -1854, 7309, -3302, 7310, 7311]],
              'id': '13099'
            }, {
              'type': 'Polygon',
              'arcs': [[-5811, -6344, -4087, 7312]],
              'id': '16081'
            }, {
              'type': 'Polygon',
              'arcs': [[-3549, -5207, -5252, -5484, 7313, 7314]],
              'id': '24015'
            }, {
              'type': 'Polygon',
              'arcs': [[-484, 7315, 7316, -83]],
              'id': '26147'
            }, {
              'type': 'Polygon',
              'arcs': [[-3846, 7317, 7318, 7319, -3682, 7320, 7321]],
              'id': '05107'
            }, {
              'type': 'Polygon',
              'arcs': [[7322, 7323, -5520, 7324, 7325]],
              'id': '06013'
            }, {
              'type': 'Polygon',
              'arcs': [[7326, -5314, 7327, 7328, 7329]],
              'id': '09009'
            }, {
              'type': 'Polygon',
              'arcs': [[-7245, -6409, -6550, 7330, -7290, -6504, 7331]],
              'id': '18173'
            }, {
              'type': 'Polygon',
              'arcs': [[7332, -4424, 7333, 7334, 7335, 7336, -4479]],
              'id': '18019'
            }, {
              'type': 'Polygon',
              'arcs': [[7337, 7338, 7339, -2509, 7340, -3856]],
              'id': '12069'
            }, {
              'type': 'Polygon',
              'arcs': [[7341, 7342, 7343, 7344]],
              'id': '21037'
            }, {
              'type': 'Polygon',
              'arcs': [[7345, -2516, 7346, -4850, 7347, 7348]],
              'id': '22037'
            }, {
              'type': 'Polygon',
              'arcs': [[7349, 7350, 7351, 7352, -6224]],
              'id': '12121'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7353, -7349, 7354, -4101, 7355]], [[7356, -4099, 7357]]],
              'id': '22125'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-3345, 7358]], [[7359]], [[7360]], [[-3661, 7361, 7362]]],
              'id': '23013'
            }, {
              'type': 'Polygon',
              'arcs': [[7363, 7364, 7365, 7366, -1617]],
              'id': '26163'
            }, {
              'type': 'Polygon',
              'arcs': [[-4569, 7367, 7368, 7369, 7370]],
              'id': '28033'
            }, {
              'type': 'Polygon',
              'arcs': [[7371, -5241, 7372, 7373, 7374, -5492]],
              'id': '24027'
            }, {
              'type': 'Polygon',
              'arcs': [[7375, 7376, 7377, 7378, -7282, 7379, -6652, -4249]],
              'id': '29157'
            }, {
              'type': 'Polygon',
              'arcs': [[-5182, 7380, 7381, 7382, 7383, 7384, 7385, 7386, 7387, -1302, -4440]],
              'id': '29113'
            }, {
              'type': 'Polygon',
              'arcs': [[-2892, 7388, 7389, 7390, 7391]],
              'id': '27057'
            }, {
              'type': 'Polygon',
              'arcs': [[-2549, -4112, -1648, 7392, 7393, 7394]],
              'id': '20021'
            }, {
              'type': 'Polygon',
              'arcs': [[7395, -6271, 7396, -5352, -5705, 7397]],
              'id': '27011'
            }, {
              'type': 'Polygon',
              'arcs': [[-5250, 7398, 7399, -999, 7400, -5485]],
              'id': '10001'
            }, {
              'type': 'Polygon',
              'arcs': [[7401, -3056, 7402, 7403]],
              'id': '16075'
            }, {
              'type': 'Polygon',
              'arcs': [[-1198, -3144, -6911, 7404, -2679]],
              'id': '18151'
            }, {
              'type': 'Polygon',
              'arcs': [[-1768, 7405, -5375, 7406, 7407, 7408]],
              'id': '12075'
            }, {
              'type': 'Polygon',
              'arcs': [[-3206, -6487, 7409, 7410, -7140, 7411]],
              'id': '13065'
            }, {
              'type': 'Polygon',
              'arcs': [[7412, 7413, -2803, -5316, 7414]],
              'id': '26027'
            }, {
              'type': 'Polygon',
              'arcs': [[-4568, 7415, 7416, -5676, -6433, 7417, -7368]],
              'id': '28093'
            }, {
              'type': 'Polygon',
              'arcs': [[-385, -4244, -1331, -1621, 7418, -5853, -1357]],
              'id': '26081'
            }, {
              'type': 'Polygon',
              'arcs': [[7419, 7420, -5637, -154, -2953, 7421, 7422]],
              'id': '31135'
            }, {
              'type': 'Polygon',
              'arcs': [[7423, 7424, 7425, 7426]],
              'id': '34029'
            }, {
              'type': 'Polygon',
              'arcs': [[-3515, 7427, -4420, 7428, -5673, 7429]],
              'id': '18167'
            }, {
              'type': 'Polygon',
              'arcs': [[7430, -6671, -6306, -7150, 7431, -6832]],
              'id': '36015'
            }, {
              'type': 'Polygon',
              'arcs': [[-4516, 7432, -6874, -3125, 7433, -6412]],
              'id': '18155'
            }, {
              'type': 'Polygon',
              'arcs': [[7434, -7390, 7435, -3537, -2133]],
              'id': '27159'
            }, {
              'type': 'Polygon',
              'arcs': [[7436, -4563, -2564, 7437, -5792, -5728, -1481]],
              'id': '56027'
            }, {
              'type': 'Polygon',
              'arcs': [[-4082, 7438, 7439, -307, 7440, -6370]],
              'id': '29013'
            }, {
              'type': 'Polygon',
              'arcs': [[7441, -389, -2381, 7442, 7443, 7444]],
              'id': '31129'
            }, {
              'type': 'Polygon',
              'arcs': [[-78, -6413, -7434, -3130, 7445, -7334, -4423]],
              'id': '18077'
            }, {
              'type': 'Polygon',
              'arcs': [[7446, 7447, 7448, -4518, 7449, 7450, 7451]],
              'id': '34003'
            }, {
              'type': 'Polygon',
              'arcs': [[7452, 7453, 7454, 7455, -7448, 7456]],
              'id': '36119'
            }, {
              'type': 'Polygon',
              'arcs': [[-395, 7457, 7458, 7459]],
              'id': '36063'
            }, {
              'type': 'Polygon',
              'arcs': [[7460, -6749, -4200, 7461, -4749]],
              'id': '37189'
            }, {
              'type': 'Polygon',
              'arcs': [[7462, -868, -3536, 7463, -5354]],
              'id': '27023'
            }, {
              'type': 'Polygon',
              'arcs': [[-5428, 7464, 7465, 7466, 7467]],
              'id': '40071'
            }, {
              'type': 'Polygon',
              'arcs': [[-581, 7468, -5511, -5510, -5301, 7469]],
              'id': '17151'
            }, {
              'type': 'Polygon',
              'arcs': [[-5913, 7470, 7471, -6870, 7472, -6379, -5744, -5086]],
              'id': '42089'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-6802, -6492]], [[-5226, -6494, -6805, 7473, -4932, -5236, -6109]]],
              'id': '35043'
            }, {
              'type': 'Polygon',
              'arcs': [[-3098, -1529, -5808, -2672, 7474]],
              'id': '16033'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7475, 7476, -1597, -2643, 7477]], [[7478]], [[7479]], [[7480]], [[7481]]],
              'id': '26029'
            }, {
              'type': 'Polygon',
              'arcs': [[-2708, -1619, 7482, -3721, 7483, -3141]],
              'id': '26091'
            }, {
              'type': 'Polygon',
              'arcs': [[-6330, -7001, 7484, -3312, 7485]],
              'id': '27157'
            }, {
              'type': 'Polygon',
              'arcs': [[7486, -2460, -5051, -5899, 7487]],
              'id': '29047'
            }, {
              'type': 'Polygon',
              'arcs': [[7488, 7489, -2787, -6809, -6757, 7490]],
              'id': '40081'
            }, {
              'type': 'Polygon',
              'arcs': [[-5403, -1469, -1195, -5498, 7491, -3427, 7492, 7493]],
              'id': '47069'
            }, {
              'type': 'Polygon',
              'arcs': [[7494, -2912, 7495, -2889, 7496]],
              'id': '27071'
            }, {
              'type': 'Polygon',
              'arcs': [[-31, -2250, 7497, 7498, -36, -6170]],
              'id': '27107'
            }, {
              'type': 'Polygon',
              'arcs': [[-3516, -7430, -5672, 7499, -3256, -3420, 7500]],
              'id': '17023'
            }, {
              'type': 'Polygon',
              'arcs': [[-7498, -2249, 7501, -7391, -7435, -2132, 7502]],
              'id': '27005'
            }, {
              'type': 'Polygon',
              'arcs': [[7503, -3319, -1156, -3645, -5442, 7504]],
              'id': '19085'
            }, {
              'type': 'Polygon',
              'arcs': [[7505, -3447, 7506, 7507, -3683, -7320]],
              'id': '28027'
            }, {
              'type': 'Polygon',
              'arcs': [[-4669, 7508, -4155, 7509, 7510, -192, 7511, 7512, -4258, 7513]],
              'id': '35037'
            }, {
              'type': 'Polygon',
              'arcs': [[-6665, 7514, 7515, 7516, 7517, 7518]],
              'id': '34023'
            }, {
              'type': 'Polygon',
              'arcs': [[-3821, 7519, 7520, 7521, 7522, -4608, -2124]],
              'id': '54071'
            }, {
              'type': 'Polygon',
              'arcs': [[-2431, 7523, 7524, 7525, -5634]],
              'id': '05003'
            }, {
              'type': 'Polygon',
              'arcs': [[-3684, -7508, 7526, 7527, -6575, 7528]],
              'id': '28133'
            }, {
              'type': 'Polygon',
              'arcs': [[7529, -7370, 7530, 7531, -3444, -7506, -7319, 7532]],
              'id': '28143'
            }, {
              'type': 'Polygon',
              'arcs': [[-711, -4828, 7533, -3461, -2442, 7534]],
              'id': '29171'
            }, {
              'type': 'Polygon',
              'arcs': [[-4827, -3218, -1708, -3462, -7534]],
              'id': '29197'
            }, {
              'type': 'Polygon',
              'arcs': [[7535, 7536, 7537, -3818, -3057, -7075, -6970]],
              'id': '54085'
            }, {
              'type': 'Polygon',
              'arcs': [[7538, -3298, -3815, -7538, 7539, 7540]],
              'id': '54095'
            }, {
              'type': 'Polygon',
              'arcs': [[-4733, 7541, 7542, 7543, 7544, -3616]],
              'id': '51063'
            }, {
              'type': 'Polygon',
              'arcs': [[-4552, -4023, 7545, 7546, -302, 7547]],
              'id': '30055'
            }, {
              'type': 'Polygon',
              'arcs': [[-2211, -6635, 7548, -3322, 7549, -5662]],
              'id': '20177'
            }, {
              'type': 'Polygon',
              'arcs': [[-7405, -6910, -1088, -2201, -893]],
              'id': '18033'
            }, {
              'type': 'Polygon',
              'arcs': [[7550, -1518, -101, -268]],
              'id': '46101'
            }, {
              'type': 'Polygon',
              'arcs': [[-7347, -2515, -19, 7551, -4851]],
              'id': '22091'
            }, {
              'type': 'Polygon',
              'arcs': [[7552, -3696, 3694, -3694, 7553, -4188, 7554]],
              'id': '55051'
            }, {
              'type': 'Polygon',
              'arcs': [[7555, -3801, 7556, -5035, 7557, 7558]],
              'id': '48475'
            }, {
              'type': 'Polygon',
              'arcs': [[7559, -3734, -4767, 7560, -7058]],
              'id': '48485'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-6516, 7561, 7562, 7563]], [[-6520, 7564, 7565, 7566]]],
              'id': '48489'
            }, {
              'type': 'Polygon',
              'arcs': [[7567, 7568, -3876, 7569, 7570, -6645, 7571]],
              'id': '22083'
            }, {
              'type': 'Polygon',
              'arcs': [[-1705, -2173, 7572, 7573, 7574, 7575]],
              'id': '29045'
            }, {
              'type': 'Polygon',
              'arcs': [[7576, 7577, 7578, -3295]],
              'id': '54049'
            }, {
              'type': 'Polygon',
              'arcs': [[7579, 7580, 7581, -7536, -6974, 7582, -3966]],
              'id': '54107'
            }, {
              'type': 'Polygon',
              'arcs': [[-3296, -7579, 7583, -5340, 7584, 7585, -3816]],
              'id': '54033'
            }, {
              'type': 'Polygon',
              'arcs': [[7586, 7587, -4553, -7548, -301, -4583]],
              'id': '30105'
            }, {
              'type': 'Polygon',
              'arcs': [[7588, 7589, 7590, -3667, 7591]],
              'id': '25009'
            }, {
              'type': 'Polygon',
              'arcs': [[7592, -4751, 7593, -4719, 7594, -1486]],
              'id': '47019'
            }, {
              'type': 'Polygon',
              'arcs': [[-322, 7595, 7596, -5861, 7597, 7598, 7599]],
              'id': '47147'
            }, {
              'type': 'Polygon',
              'arcs': [[-2430, 7600, -3686, 7601, 7602, -3873, 7603, 7604, -7524]],
              'id': '05017'
            }, {
              'type': 'Polygon',
              'arcs': [[-7174, -6628, 7605, 7606, -2219, -2573]],
              'id': '18057'
            }, {
              'type': 'Polygon',
              'arcs': [[7607, -2228, -4242, -7175, -2571, 7608]],
              'id': '18067'
            }, {
              'type': 'Polygon',
              'arcs': [[-2220, -7607, 7609, -1581, -653, 7610, -1561]],
              'id': '18097'
            }, {
              'type': 'Polygon',
              'arcs': [[-5936, -2574, -2221, -1564, 7611, -4417, -5828]],
              'id': '18107'
            }, {
              'type': 'Polygon',
              'arcs': [[7612, 7613, -2941, -2967, -6737, -6742]],
              'id': '28089'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7614]], [[7615, 7616, -2274]]],
              'id': '26033'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7617]], [[7618]], [[7619]], [[-2275, -7617, 7620, 7621]]],
              'id': '26097'
            }, {
              'type': 'Polygon',
              'arcs': [[7622, 7623, 7624, 7625, -5219]],
              'id': '12089'
            }, {
              'type': 'Polygon',
              'arcs': [[-7578, 7626, -5414, -5337, -7584]],
              'id': '54091'
            }, {
              'type': 'Polygon',
              'arcs': [[-4755, 7627, -5659, -4051, -7167, 7628]],
              'id': '47011'
            }, {
              'type': 'Polygon',
              'arcs': [[7629, 7630, 7631, -7350, -6223, 7632, 7633]],
              'id': '12079'
            }, {
              'type': 'Polygon',
              'arcs': [[7634, -3213, 7635, 7636, -6577]],
              'id': '28051'
            }, {
              'type': 'Polygon',
              'arcs': [[7637, -3490, -6195, -6190, -1395, -6127]],
              'id': '47183'
            }, {
              'type': 'Polygon',
              'arcs': [[7638, -5713, -6331, -7486, -3311, -3148, -1945]],
              'id': '27049'
            }, {
              'type': 'Polygon',
              'arcs': [[7639, 7640, -917, -1535, 7641, 7642]],
              'id': '29077'
            }, {
              'type': 'Polygon',
              'arcs': [[7643, 7644, -3591, 7645, -4035, 7646, -3635]],
              'id': '01111'
            }, {
              'type': 'Polygon',
              'arcs': [[-3903, -4883, 7647, 7648, -1626]],
              'id': '35013'
            }, {
              'type': 'Polygon',
              'arcs': [[7649, 7650, -6990, -5643, -5642, 7651, -6938]],
              'id': '42119'
            }, {
              'type': 'Polygon',
              'arcs': [[-2733, -277, -3943, 7652, -6029]],
              'id': '46119'
            }, {
              'type': 'Polygon',
              'arcs': [[-1640, -5998, -997, 7653, -5630, 7654]],
              'id': '33003'
            }, {
              'type': 'Polygon',
              'arcs': [[-2932, 7655]],
              'id': '51770'
            }, {
              'type': 'Polygon',
              'arcs': [[-5916, -3730, -5398, -4545, -2215, -2915]],
              'id': '19115'
            }, {
              'type': 'Polygon',
              'arcs': [[-2819, 7656, 7657, -6230, -5280]],
              'id': '19145'
            }, {
              'type': 'Polygon',
              'arcs': [[-5721, -5094, -5202, -5790, -5961, 7658, -7211]],
              'id': '45055'
            }, {
              'type': 'Polygon',
              'arcs': [[7659, -7300, -4056, -3378, -3653]],
              'id': '16077'
            }, {
              'type': 'Polygon',
              'arcs': [[7660, -3279, 7661]],
              'id': '41011'
            }, {
              'type': 'Polygon',
              'arcs': [[-6141, -7250, 7662, -2614, -3280, -7661, 7663]],
              'id': '41019'
            }, {
              'type': 'Polygon',
              'arcs': [[-4623, -2841, 7664, 7665, 7666]],
              'id': '55023'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7667]], [[7668, 7669, -1741, 7670, 7671, -3977]]],
              'id': '51005'
            }, {
              'type': 'Polygon',
              'arcs': [[-4940, -5692, 7672, 7673, -4730, -3613, -7064]],
              'id': '51071'
            }, {
              'type': 'Polygon',
              'arcs': [[-7352, 7674, -7141, -7411, 7675, 7676, -5370, 7677]],
              'id': '12023'
            }, {
              'type': 'Polygon',
              'arcs': [[7678, -2470, 7679, -135, 7680, -3479]],
              'id': '72007'
            }, {
              'type': 'Polygon',
              'arcs': [[-955, 7681, -151, -2480, -3292, 7682, -6221, -4180]],
              'id': '72107'
            }, {
              'type': 'Polygon',
              'arcs': [[-5731, 7683, 7684, 7685]],
              'id': '27123'
            }, {
              'type': 'Polygon',
              'arcs': [[7686, -4377, 7687, 7688, -1791, 7689, 7690]],
              'id': '49047'
            }, {
              'type': 'Polygon',
              'arcs': [[7691, 7692, 7693, -4576, 7694, -7543]],
              'id': '51067'
            }, {
              'type': 'Polygon',
              'arcs': [[7695, -3563]],
              'id': '15005'
            }, {
              'type': 'Polygon',
              'arcs': [[-5164, -4631, -6290, 7696, 7697, -6632, -2209]],
              'id': '20005'
            }, {
              'type': 'Polygon',
              'arcs': [[7698, -6510, -6454, 7699, 7700]],
              'id': '09015'
            }, {
              'type': 'Polygon',
              'arcs': [[7701, 7702, -7700, -6453, 7703, 7704, -5312]],
              'id': '09011'
            }, {
              'type': 'Polygon',
              'arcs': [[7705, 7706, 7707, 7708, -3542, -6768]],
              'id': '41005'
            }, {
              'type': 'Polygon',
              'arcs': [[-1103, -5231, -5751, 7709, -1745, -7040, 7710]],
              'id': '48419'
            }, {
              'type': 'Polygon',
              'arcs': [[7711, -5905, -1014, 7712, 7713, -4334, 7714]],
              'id': '39029'
            }, {
              'type': 'Polygon',
              'arcs': [[-1161, 7715, -7269, 7716, -1299]],
              'id': '06031'
            }, {
              'type': 'Polygon',
              'arcs': [[7717, -3024, -2225, 7718, 7719, 7720, 7721]],
              'id': '06045'
            }, {
              'type': 'Polygon',
              'arcs': [[-4407, -1881, 7722, -2342, -6352]],
              'id': '08035'
            }, {
              'type': 'Polygon',
              'arcs': [[-549, -3119, -3775, 7723, 7724, -2921]],
              'id': '48259'
            }, {
              'type': 'Polygon',
              'arcs': [[7725, 7726, -3838, 7727, -7266]],
              'id': '05009'
            }, {
              'type': 'Polygon',
              'arcs': [[-6814, 7728, 7729, -7489, 7730, -1392]],
              'id': '40083'
            }, {
              'type': 'Polygon',
              'arcs': [[7731, -4150, 7732, 7733, -3713]],
              'id': '36065'
            }, {
              'type': 'Polygon',
              'arcs': [[7734, -6701, 7735, 7736, 7737, 7738]],
              'id': '37113'
            }, {
              'type': 'Polygon',
              'arcs': [[7739, 7740, 7741, 7742, 7743, 7744, 7745]],
              'id': '36031'
            }, {
              'type': 'Polygon',
              'arcs': [[-2126, -4610, 7746, 7747, -7669, -3976]],
              'id': '51017'
            }, {
              'type': 'Polygon',
              'arcs': [[7748, 7749, 7750, 7751, -7118]],
              'id': '54005'
            }, {
              'type': 'Polygon',
              'arcs': [[7752, 7753, -3980, -5690, 7754]],
              'id': '54019'
            }, {
              'type': 'Polygon',
              'arcs': [[7755, 7756, -6858, -7753, 7757, -7750, 7758, 7759]],
              'id': '54039'
            }, {
              'type': 'Polygon',
              'arcs': [[7760, 7761, 7762, 7763, -6895]],
              'id': '72037'
            }, {
              'type': 'Polygon',
              'arcs': [[7764, -160, 7765, -152, -7682, -954, -7103]],
              'id': '72039'
            }, {
              'type': 'Polygon',
              'arcs': [[7766, -7280, -1792, -7689]],
              'id': '08103'
            }, {
              'type': 'Polygon',
              'arcs': [[-1562, -7611, -657, -7136, 7767, -6544, 7768]],
              'id': '18109'
            }, {
              'type': 'Polygon',
              'arcs': [[7769, -6648, 7770, 7771, 7772, -4857]],
              'id': '22059'
            }, {
              'type': 'Polygon',
              'arcs': [[-1543, -6796, 7773, -5116, 7774]],
              'id': '29135'
            }, {
              'type': 'Polygon',
              'arcs': [[-4896, 7775, -1680, -5907, 7776, 7777]],
              'id': '42039'
            }, {
              'type': 'Polygon',
              'arcs': [[-5968, -5435, 7778, 7779, 7780, -6816, -6000]],
              'id': '21205'
            }, {
              'type': 'Polygon',
              'arcs': [[-5004, 7781, 7782, 7783, 7784, -5567, 7785]],
              'id': '47187'
            }, {
              'type': 'Polygon',
              'arcs': [[-1675, -1012, -754, 7786, -344]],
              'id': '38081'
            }, {
              'type': 'Polygon',
              'arcs': [[-7003, -3332, 7787, 7788]],
              'id': '72055'
            }, {
              'type': 'Polygon',
              'arcs': [[7789, -3263, 7790]],
              'id': '16061'
            }, {
              'type': 'Polygon',
              'arcs': [[7791, 7792, 7793, -7791, -3262, 7794, 7795]],
              'id': '16069'
            }, {
              'type': 'Polygon',
              'arcs': [[7796, -7445, 7797, -1551, -6416, 7798, -4873]],
              'id': '20089'
            }, {
              'type': 'Polygon',
              'arcs': [[7799, -3407, 7800, -5660, 7801, -3069]],
              'id': '20117'
            }, {
              'type': 'Polygon',
              'arcs': [[-3406, -4213, -5165, -2207, -5661, -7801]],
              'id': '20131'
            }, {
              'type': 'Polygon',
              'arcs': [[7802, -4232, -3357, 7803, 7804, -2237]],
              'id': '40001'
            }, {
              'type': 'Polygon',
              'arcs': [[-7738, 7805, 7806, 7807, 7808]],
              'id': '37043'
            }, {
              'type': 'Polygon',
              'arcs': [[7809, -3954, -5959, -4556, -5958, -4554, -6540, 7810, 7811, 7812, 7813]],
              'id': '45073'
            }, {
              'type': 'Polygon',
              'arcs': [[-3356, 7814, 7815, 7816, 7817, -7804]],
              'id': '05033'
            }, {
              'type': 'Polygon',
              'arcs': [[-3146, -2258, -6631, -2652, -2904]],
              'id': '20093'
            }, {
              'type': 'Polygon',
              'arcs': [[7818]],
              'id': '72049'
            }, {
              'type': 'Polygon',
              'arcs': [[-2633, -6574, 7819, 7820, 7821, 7822]],
              'id': '28091'
            }, {
              'type': 'Polygon',
              'arcs': [[7823, -6435, -459, -2434, 7824]],
              'id': '28161'
            }, {
              'type': 'Polygon',
              'arcs': [[7825, -2376, -1058, -2736, -176, -2983, -4215]],
              'id': '31065'
            }, {
              'type': 'Polygon',
              'arcs': [[7826, 7827, -5600, -4360, 7828]],
              'id': '53015'
            }, {
              'type': 'Polygon',
              'arcs': [[-1092, 7829, 7830, -2405, 7831, -4224]],
              'id': '01083'
            }, {
              'type': 'Polygon',
              'arcs': [[7832, 7833, 7834, -2465]],
              'id': '12013'
            }, {
              'type': 'Polygon',
              'arcs': [[7835, -3859, -7223, 7836, -7408]],
              'id': '12017'
            }, {
              'type': 'Polygon',
              'arcs': [[-7603, 7837, -7193, 7838, -3704, -3874]],
              'id': '28055'
            }, {
              'type': 'Polygon',
              'arcs': [[7839, -4481, 7840, -4069, -6839, -4474]],
              'id': '18061'
            }, {
              'type': 'Polygon',
              'arcs': [[-7233, -4117, -7012, 7841, -3371]],
              'id': '20129'
            }, {
              'type': 'Polygon',
              'arcs': [[-4717, -6377, 7842, -3937, -6966, -1068]],
              'id': '45083'
            }, {
              'type': 'Polygon',
              'arcs': [[-1549, -3261, 7843, -3440, 7844, -6417]],
              'id': '20143'
            }, {
              'type': 'Polygon',
              'arcs': [[7845, 7846, -4654]],
              'id': '30103'
            }, {
              'type': 'Polygon',
              'arcs': [[7847, -5082, -4981, 7848, 7849, -1662]],
              'id': '31051'
            }, {
              'type': 'Polygon',
              'arcs': [[7850, 7851, -6161, -7106, -5875, -5764]],
              'id': '55013'
            }, {
              'type': 'Polygon',
              'arcs': [[7852, -6023, -5702, 7853, -3165, 7854, 7855]],
              'id': '55025'
            }, {
              'type': 'Polygon',
              'arcs': [[7856, 7857, 7858, 7859, 7860, -4351, 7861, -4840]],
              'id': '22007'
            }, {
              'type': 'Polygon',
              'arcs': [[7862, 7863, 7864, 7865, -6871, -7472, 7866]],
              'id': '42127'
            }, {
              'type': 'Polygon',
              'arcs': [[7867, -7733, -4149, 7868, -51, 7869, 7870]],
              'id': '36077'
            }, {
              'type': 'Polygon',
              'arcs': [[7871, 7872, -3931, -2394, 7873, -2360]],
              'id': '40049'
            }, {
              'type': 'Polygon',
              'arcs': [[-4524, 7874, -7746, 7875, 7876, 7877, -4146]],
              'id': '36041'
            }, {
              'type': 'Polygon',
              'arcs': [[-4231, -7268, 7878, 7879, 7880, -7815, -3355]],
              'id': '05087'
            }, {
              'type': 'Polygon',
              'arcs': [[7881, -7863, 7882, -5895, 7883, -7148]],
              'id': '42115'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7884]], [[7885, 7886, 7887, 7888]]],
              'id': '12037'
            }, {
              'type': 'Polygon',
              'arcs': [[-848, -2115, 7889, 7890, 7891, 7892, 7893]],
              'id': '12039'
            }, {
              'type': 'Polygon',
              'arcs': [[-2466, -7835, 7894, -7889, 7895]],
              'id': '12045'
            }, {
              'type': 'Polygon',
              'arcs': [[7896, -7306, 7897, -7634, 7898, 7899, 7900]],
              'id': '12065'
            }, {
              'type': 'Polygon',
              'arcs': [[7901, -3043, 7902, 7903, -3045]],
              'id': '12103'
            }, {
              'type': 'Polygon',
              'arcs': [[7904, 7905, -533, 7906, -6962, -1940, -537]],
              'id': '40075'
            }, {
              'type': 'Polygon',
              'arcs': [[-7816, -7881, 7907, -5045, 7908]],
              'id': '05047'
            }, {
              'type': 'Polygon',
              'arcs': [[7909, 7910, -2783, 7911, 7912]],
              'id': '40117'
            }, {
              'type': 'Polygon',
              'arcs': [[-3933, 7913, 7914, 7915, 7916, 7917, -2396]],
              'id': '40069'
            }, {
              'type': 'Polygon',
              'arcs': [[-1149, -5330, 7918, 7919, -1698, -6279, 7920]],
              'id': '29081'
            }, {
              'type': 'Polygon',
              'arcs': [[-6792, 7921, 7922, 7923, -6571, -2631]],
              'id': '28031'
            }, {
              'type': 'Polygon',
              'arcs': [[7924, -7829, -4359, -6980, 7925, -7115]],
              'id': '53069'
            }, {
              'type': 'Polygon',
              'arcs': [[7926, 7927, 7928, 7929, 7930]],
              'id': '12019'
            }, {
              'type': 'Polygon',
              'arcs': [[-2276, -7622, 7931, 7932, -5138]],
              'id': '26153'
            }, {
              'type': 'Polygon',
              'arcs': [[-1762, -2910, 7933, -4618, -6159, -7852, 7934]],
              'id': '55031'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7935, 7936, 7937]], [[7938, 7939, 7940, 7941, -1957, -195, 7942]]],
              'id': '13193'
            }, {
              'type': 'Polygon',
              'arcs': [[7943, 7944, -5629, -5625, -1261, -5501]],
              'id': '22027'
            }, {
              'type': 'Polygon',
              'arcs': [[-7721, 7945, 7946, 7947, 7948, 7949, 7950]],
              'id': '06097'
            }, {
              'type': 'Polygon',
              'arcs': [[-3929, -6761, 7951, -7872, -2359, 7952]],
              'id': '40087'
            }, {
              'type': 'Polygon',
              'arcs': [[7953, -2620, -6662, -3897, -3408, -7800, -3068]],
              'id': '31067'
            }, {
              'type': 'Polygon',
              'arcs': [[7954, -5785, -5995, 7955, -3109, 7956, 7957]],
              'id': '48343'
            }, {
              'type': 'Polygon',
              'arcs': [[-7731, -7491, -6756, -3927, 7958]],
              'id': '40109'
            }, {
              'type': 'Polygon',
              'arcs': [[7959, -2368, -6703, 7960, -2385]],
              'id': '48223'
            }, {
              'type': 'Polygon',
              'arcs': [[-4148, 7961, 7962, 7963, -46, -7869]],
              'id': '36057'
            }, {
              'type': 'Polygon',
              'arcs': [[7964, -6275, 7965, 7966, -7910, 7967, -7466]],
              'id': '40113'
            }, {
              'type': 'Polygon',
              'arcs': [[7968, -318, 7969, 7970]],
              'id': '12113'
            }, {
              'type': 'Polygon',
              'arcs': [[-7340, 7971, -2506]],
              'id': '12117'
            }, {
              'type': 'Polygon',
              'arcs': [[-1853, 7972, 7973, -845, -3300, -7310]],
              'id': '13007'
            }, {
              'type': 'Polygon',
              'arcs': [[7974, 7975, -4409, -4457, 7976]],
              'id': '13083'
            }, {
              'type': 'Polygon',
              'arcs': [[7977, 7978, 7979, 7980, -7973, -1852]],
              'id': '13095'
            }, {
              'type': 'Polygon',
              'arcs': [[-7981, 7981, 7982, -7303, -2112, -846, -7974]],
              'id': '13205'
            }, {
              'type': 'Polygon',
              'arcs': [[-7311, -3301, -843, 7983, 7984]],
              'id': '13253'
            }, {
              'type': 'Polygon',
              'arcs': [[7985, -7912, -2788, -7490, -7730]],
              'id': '40119'
            }, {
              'type': 'Polygon',
              'arcs': [[-5988, 7986, -4307, -438, -6047, -6095]],
              'id': '47137'
            }, {
              'type': 'Polygon',
              'arcs': [[-5806, -6776, 7987, -5753, -6683]],
              'id': '21087'
            }, {
              'type': 'Polygon',
              'arcs': [[-5026, -2388, -5012, 7988]],
              'id': '48397'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7989]], [[7990, -3984]]],
              'id': '78020'
            }, {
              'type': 'Polygon',
              'arcs': [[-4881, 7991, -3238, 7992, 7993]],
              'id': '48229'
            }, {
              'type': 'Polygon',
              'arcs': [[-6972, -7077, -6854, -7757, 7994]],
              'id': '54087'
            }, {
              'type': 'Polygon',
              'arcs': [[-6640, -6556, -3950, -6511, -433, -4306]],
              'id': '21147'
            }, {
              'type': 'Polygon',
              'arcs': [[7995, 7996, -7259, 7997, 7998, -6442, 7999]],
              'id': '28153'
            }, {
              'type': 'Polygon',
              'arcs': [[-7665, -2840, 8000, 8001, -4118, -4830, 8002]],
              'id': '55043'
            }, {
              'type': 'Polygon',
              'arcs': [[8003, 8004, 8005, -7356, -4100, -7357, 8006, 8007]],
              'id': '22029'
            }, {
              'type': 'Polygon',
              'arcs': [[-6717, 6715, -6715, 6713, -6713, 6711, -6711, -6710, 6709, -6710, -6709, 6707, -6707, -6706, -6705, -3112, -2600, 8008, 8009, 8010, -2372]],
              'id': '48423'
            }, {
              'type': 'Polygon',
              'arcs': [[8011, -7740, -7875, -4523, 8012]],
              'id': '36033'
            }, {
              'type': 'Polygon',
              'arcs': [[8013, 8014, -3710, 8015, -3708, 8016, -4532, 8017, -8004, 8018]],
              'id': '22107'
            }, {
              'type': 'Polygon',
              'arcs': [[8019, 8020, -2517, -7346, -7354, -8006]],
              'id': '28157'
            }, {
              'type': 'Polygon',
              'arcs': [[-3707, -6743, -6437, -4528, -8017]],
              'id': '28021'
            }, {
              'type': 'Polygon',
              'arcs': [[-339, -7254, -7997, 8021]],
              'id': '28023'
            }, {
              'type': 'Polygon',
              'arcs': [[-2520, 8022, -4977, -1448, -272, -2732]],
              'id': '46049'
            }, {
              'type': 'Polygon',
              'arcs': [[-1458, -5569, -1094, -4223, 8023]],
              'id': '47099'
            }, {
              'type': 'Polygon',
              'arcs': [[-7924, 8024, -6445, -449, 8025, -6572]],
              'id': '28035'
            }, {
              'type': 'Polygon',
              'arcs': [[8026, 8027, -638, 8028, 8029, -7827, -7925, -7114]],
              'id': '53041'
            }, {
              'type': 'Polygon',
              'arcs': [[-7694, 8030, 8031, -6234, 8032, -1284, 8033, -814, -4577]],
              'id': '51143'
            }, {
              'type': 'Polygon',
              'arcs': [[-333, 8034, 8035, 8036, -6458]],
              'id': '54027'
            }, {
              'type': 'Polygon',
              'arcs': [[-6532, 8037, -986, -2609, 8038, 8039]],
              'id': '06115'
            }, {
              'type': 'Polygon',
              'arcs': [[-6578, -7637, -7613, -6741, -3705, -7839, -7192]],
              'id': '28163'
            }, {
              'type': 'Polygon',
              'arcs': [[-2928, 8040, -6835, -6992, 8041, -5077, 8042]],
              'id': '42105'
            }, {
              'type': 'Polygon',
              'arcs': [[-132, -6521, -7567, 8043, 8044, 8045]],
              'id': '48215'
            }, {
              'type': 'Polygon',
              'arcs': [[8046, 8047]],
              'id': '51131'
            }, {
              'type': 'Polygon',
              'arcs': [[-4525, -4144, -7732, -3712, -6367]],
              'id': '36049'
            }, {
              'type': 'Polygon',
              'arcs': [[8048, -7943, -194, 8049]],
              'id': '13249'
            }, {
              'type': 'Polygon',
              'arcs': [[8050, -7666, -8003, -4829, -965, -3865]],
              'id': '19043'
            }, {
              'type': 'Polygon',
              'arcs': [[-6722, 8051, -7154, 8052]],
              'id': '37041'
            }, {
              'type': 'Polygon',
              'arcs': [[8053, 8054, -4461, -4953, 8055, 8056, -2407]],
              'id': '01095'
            }, {
              'type': 'Polygon',
              'arcs': [[8057, 8058, 8059, -7864, -7882, -7147]],
              'id': '36007'
            }, {
              'type': 'Polygon',
              'arcs': [[-7964, 8060, -6318, -47]],
              'id': '36093'
            }, {
              'type': 'Polygon',
              'arcs': [[8061, -2392, 8062, -7045, 8063]],
              'id': '48041'
            }, {
              'type': 'Polygon',
              'arcs': [[8064, 8065, 8066, 8067, 8068, -2402]],
              'id': '51047'
            }, {
              'type': 'Polygon',
              'arcs': [[8069, 8070, -8064, -7044, 8071]],
              'id': '48051'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8072]], [[8073]], [[-453, 8074, 8075, 8076]]],
              'id': '28047'
            }, {
              'type': 'Polygon',
              'arcs': [[8077, 8078, 8079, -2363, -7960, -2384]],
              'id': '48119'
            }, {
              'type': 'Polygon',
              'arcs': [[-7038, 8080, -2, -4505]],
              'id': '49053'
            }, {
              'type': 'Polygon',
              'arcs': [[-6989, -7017, -5645]],
              'id': '42093'
            }, {
              'type': 'Polygon',
              'arcs': [[-5033, -2729, 8081, -424, -1963, -1739, 8082, 8083, 8084]],
              'id': '48105'
            }, {
              'type': 'Polygon',
              'arcs': [[8085, -2501, 8086, 8087, -7972, -7339, 8088]],
              'id': '12127'
            }, {
              'type': 'Polygon',
              'arcs': [[-6524, 8089, 8090, -6672, -7431, -6831, -8041, -2927]],
              'id': '36101'
            }, {
              'type': 'Polygon',
              'arcs': [[-1513, 8091, 8092, -4175, 8093]],
              'id': '55101'
            }, {
              'type': 'Polygon',
              'arcs': [[8094, -2541, 8095, 8096, 8097, -3504]],
              'id': '05059'
            }, {
              'type': 'Polygon',
              'arcs': [[-7230, -2592, -1037, -3179]],
              'id': '19091'
            }, {
              'type': 'Polygon',
              'arcs': [[-3893, -3000, -3607, -2313, -5043, 8098]],
              'id': '29055'
            }, {
              'type': 'Polygon',
              'arcs': [[-5355, -7464, -3535, -3718, -3394, -3680, 8099]],
              'id': '27173'
            }, {
              'type': 'Polygon',
              'arcs': [[-4002, -5821, -3854, -2583, 8100, -6356]],
              'id': '13151'
            }, {
              'type': 'Polygon',
              'arcs': [[8101, 8102, 8103, 8104, -4949]],
              'id': '01011'
            }, {
              'type': 'Polygon',
              'arcs': [[-3993, 8105, -7121, -1163, -211, 8106]],
              'id': '06047'
            }, {
              'type': 'Polygon',
              'arcs': [[8107, -6146, -7096, -2293, 8108, -2291, 8109, 8110, -7027]],
              'id': '51095'
            }, {
              'type': 'Polygon',
              'arcs': [[-5624, 8111, -6643, 8112, -1263]],
              'id': '22049'
            }, {
              'type': 'Polygon',
              'arcs': [[8113, 8114, 8115, 8116, -7151, -8052, -6721]],
              'id': '37073'
            }, {
              'type': 'Polygon',
              'arcs': [[8117, 8118, 8119, -4619, -5597, 8120]],
              'id': '55063'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-7937, 8121, -7940]], [[8122, 8123, 8124, -7938, -7939, -8049, 8125]]],
              'id': '13269'
            }, {
              'type': 'Polygon',
              'arcs': [[8126, 8127, -7152, -8117]],
              'id': '37139'
            }, {
              'type': 'Polygon',
              'arcs': [[-6218, -3768, 8128, 8129, -8065, -2401, -6283]],
              'id': '51061'
            }, {
              'type': 'Polygon',
              'arcs': [[-2412, 8130, -8068, 8131, -2862, -5460]],
              'id': '51137'
            }, {
              'type': 'Polygon',
              'arcs': [[8132, -7871, 8133, -8059, 8134]],
              'id': '36017'
            }, {
              'type': 'Polygon',
              'arcs': [[-4771, 8135, 8136]],
              'id': '51680'
            }, {
              'type': 'Polygon',
              'arcs': [[8137, 8138, 8139, 8140, -7915]],
              'id': '40029'
            }, {
              'type': 'Polygon',
              'arcs': [[-6810, -6766, 8141, -8139, 8142, 8143]],
              'id': '40063'
            }, {
              'type': 'Polygon',
              'arcs': [[-4372, 8144, -8072, -7043, -6065, -6882]],
              'id': '48287'
            }, {
              'type': 'Polygon',
              'arcs': [[8145, -8136, -4770, -3807, 8146, -6235, -8032]],
              'id': '51031'
            }, {
              'type': 'Polygon',
              'arcs': [[-7952, -6760, 8147, -8143, -8138, -7914, -3932, -7873]],
              'id': '40123'
            }, {
              'type': 'Polygon',
              'arcs': [[-2607, -980, 8148, 8149, -4137, -4136, -4369, -6830, 8150, 8151, 8152, 8153, 8154, 8155]],
              'id': '32031'
            }, {
              'type': 'Polygon',
              'arcs': [[8156, 8157, -4924, -6868, -7866]],
              'id': '36105'
            }, {
              'type': 'Polygon',
              'arcs': [[8158, 8159, 8160, 8161, 8162]],
              'id': '42041'
            }, {
              'type': 'Polygon',
              'arcs': [[-3817, -7586, 8163, -3422, 8164, -3059]],
              'id': '54041'
            }, {
              'type': 'Polygon',
              'arcs': [[8165, -3886, -854, -3881, -4077, -5571, 8166]],
              'id': '22053'
            }, {
              'type': 'Polygon',
              'arcs': [[-462, -3096, -600, 8167, 8168]],
              'id': '31113'
            }, {
              'type': 'Polygon',
              'arcs': [[8169, 8170, -3585, 8171, 8172, -8103, 8173]],
              'id': '01113'
            }, {
              'type': 'Polygon',
              'arcs': [[-4454, 8174, 8175, -6177, -6111, -1278]],
              'id': '05135'
            }, {
              'type': 'Polygon',
              'arcs': [[-5056, -7270, -7716, -1160]],
              'id': '06107'
            }, {
              'type': 'Polygon',
              'arcs': [[-4427, -6777, -3497, 8176, -5857, 8177]],
              'id': '21003'
            }, {
              'type': 'Polygon',
              'arcs': [[8178, 8179, 8180, 8181, 8182, 8183, -4797]],
              'id': '22051'
            }, {
              'type': 'Polygon',
              'arcs': [[-4919, 8184, 8185, -7453, 8186]],
              'id': '36079'
            }, {
              'type': 'Polygon',
              'arcs': [[-4920, -8187, -7457, -7447, 8187]],
              'id': '36087'
            }, {
              'type': 'Polygon',
              'arcs': [[-8186, 8188, 8189, -7329, 8190, -7454]],
              'id': '09001'
            }, {
              'type': 'Polygon',
              'arcs': [[8191, -2296, -4247, -2328, 8192, -4452]],
              'id': '29091'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8193]], [[8194]]],
              'id': '66010'
            }, {
              'type': 'Polygon',
              'arcs': [[-692, -963, -7060, -8062, -8071, 8195]],
              'id': '48395'
            }, {
              'type': 'Polygon',
              'arcs': [[8196, 8197, 8198, -1275, -1272, -5517, -7324, 8199]],
              'id': '06067'
            }, {
              'type': 'Polygon',
              'arcs': [[-6764, 8200, 8201, 8202, 8203, 8204]],
              'id': '40061'
            }, {
              'type': 'Polygon',
              'arcs': [[-8204, 8205, -2721, 8206]],
              'id': '40077'
            }, {
              'type': 'Polygon',
              'arcs': [[-7713, -1019, 8207, -6397, 8208]],
              'id': '54029'
            }, {
              'type': 'Polygon',
              'arcs': [[8209, -5173, 8210, -5499, 8211, 8212]],
              'id': '05073'
            }, {
              'type': 'Polygon',
              'arcs': [[8213, 8214, -7425, 8215, 8216, -4509, 8217]],
              'id': '34001'
            }, {
              'type': 'Polygon',
              'arcs': [[-5545, -4017, -4488, -3382, 8218, 8219]],
              'id': '16083'
            }, {
              'type': 'Polygon',
              'arcs': [[-1712, -5029, -708, 8220, -7024]],
              'id': '48333'
            }, {
              'type': 'Polygon',
              'arcs': [[-4834, -7177, -4308, -7987, -5987]],
              'id': '21053'
            }, {
              'type': 'Polygon',
              'arcs': [[8221, -1894, -2111, 8222, -7715, -4333, 8223, -3467]],
              'id': '39151'
            }, {
              'type': 'Polygon',
              'arcs': [[-3626, -4173, 8224, 8225, -3384, 8226]],
              'id': '01117'
            }, {
              'type': 'Polygon',
              'arcs': [[8227, -6769, -3545, -3525, -6135, 8228]],
              'id': '41053'
            }, {
              'type': 'Polygon',
              'arcs': [[8229, 8230, -3453, 8231, -6551, -2190]],
              'id': '20167'
            }, {
              'type': 'Polygon',
              'arcs': [[-6634, 8232, 8233, -1255, -3323, -7549]],
              'id': '20045'
            }, {
              'type': 'Polygon',
              'arcs': [[-7444, 8234, -3072, -1546, -7798]],
              'id': '20157'
            }, {
              'type': 'Polygon',
              'arcs': [[8235, 8236, -8200, -7323, 8237, -7948]],
              'id': '06095'
            }, {
              'type': 'Polygon',
              'arcs': [[8238, -4455, -1281, 8239, -3840, 8240]],
              'id': '05005'
            }, {
              'type': 'Polygon',
              'arcs': [[8241, 8242, 8243, 8244]],
              'id': '51710'
            }, {
              'type': 'Polygon',
              'arcs': [[8245, 8246, -1020, -510, -1719, -3156, -3799, 8247, -5037]],
              'id': '35025'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-8016, -3709]], [[-7570, -3875, -3702, -8015, 8248]]],
              'id': '22065'
            }, {
              'type': 'Polygon',
              'arcs': [[-5038, -8248, -3802, -7556, 8249]],
              'id': '48301'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8250]], [[-7159]], [[8251, 8252]], [[8253, 8254, 8255, -7163, 8256, -6349]]],
              'id': '08014'
            }, {
              'type': 'Polygon',
              'arcs': [[-2723, 8257, -7210, 8258, -3353, -5782, 8259, -4534]],
              'id': '40089'
            }, {
              'type': 'Polygon',
              'arcs': [[8260, -6399, 8261, -4944, -6920]],
              'id': '54069'
            }, {
              'type': 'Polygon',
              'arcs': [[-6188, -6702, -7735, 8262, 8263]],
              'id': '37075'
            }, {
              'type': 'Polygon',
              'arcs': [[8264, -8263, -7739, -7809, 8265, -2138, -5658]],
              'id': '37039'
            }, {
              'type': 'Polygon',
              'arcs': [[-4980, -3643, 8266, -7849]],
              'id': '31043'
            }, {
              'type': 'Polygon',
              'arcs': [[8267, 8268, 8269, -5802, -6507, -7699, 8270, -6197, 8271, -3673]],
              'id': '25027'
            }, {
              'type': 'Polygon',
              'arcs': [[8272, 8273, 8274, -1910, 8275, -2851]],
              'id': '39017'
            }, {
              'type': 'Polygon',
              'arcs': [[8276, -8212, -5502, -1267, -4432, 8277]],
              'id': '22015'
            }, {
              'type': 'Polygon',
              'arcs': [[-4020, -1145, -1828, -4235, 8278]],
              'id': '17103'
            }, {
              'type': 'Polygon',
              'arcs': [[-4362, -5602, 8279, 8280, -7707, 8281]],
              'id': '41051'
            }, {
              'type': 'Polygon',
              'arcs': [[8282, -5505, 8283, -6312, 8284]],
              'id': '37019'
            }, {
              'type': 'Polygon',
              'arcs': [[8285, -6096, -6050, 8286, -6995, -6900, -3510]],
              'id': '47141'
            }, {
              'type': 'Polygon',
              'arcs': [[8287, 8288, 8289, 8290, -4027, 8291]],
              'id': '37083'
            }, {
              'type': 'Polygon',
              'arcs': [[-3099, -7475, -2677, 8292, -3651, -1844]],
              'id': '16023'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-4401]], [[8293, -4404, -6345, -4402, -6351]]],
              'id': '08031'
            }, {
              'type': 'Polygon',
              'arcs': [[-7525, -7605, 8294, -7568, 8295, -5627]],
              'id': '22067'
            }, {
              'type': 'Polygon',
              'arcs': [[8296, -4579, -2288]],
              'id': '51735'
            }, {
              'type': 'Polygon',
              'arcs': [[8297, -8245, 8298, 8299]],
              'id': '51740'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-8252, -8253]], [[-8251]], [[8300, -7164, -8256, -8255, -8254, -6348, 8301, -6465]]],
              'id': '08013'
            }, {
              'type': 'Polygon',
              'arcs': [[8302, 8303, -7297, 8304, -8181]],
              'id': '22071'
            }, {
              'type': 'Polygon',
              'arcs': [[-5067, -3955, -7810, -7736, -6700]],
              'id': '37099'
            }, {
              'type': 'Polygon',
              'arcs': [[8305, 8306, 8307, -2700, 8308, -7257]],
              'id': '01025'
            }, {
              'type': 'Polygon',
              'arcs': [[-7263, -4602, 8309, -6334, -6605, 8310, -8306, -7256]],
              'id': '01091'
            }, {
              'type': 'Polygon',
              'arcs': [[8311, 8312, -6335, -8310, -4601]],
              'id': '01065'
            }, {
              'type': 'Polygon',
              'arcs': [[8313, 8314, -2981, 8315, 8316]],
              'id': '01075'
            }, {
              'type': 'Polygon',
              'arcs': [[8317, -8316, -2980, 8318, -4599, -7262, 8319]],
              'id': '01107'
            }, {
              'type': 'Polygon',
              'arcs': [[-4864, -6233, 8320, -4209, -3404, -3896]],
              'id': '31127'
            }, {
              'type': 'Polygon',
              'arcs': [[8321, -4332, -4734, -4330, -7030, 8322, -2934, 8323, -5178, -6178, -5176, 8324, -7091]],
              'id': '51041'
            }, {
              'type': 'Polygon',
              'arcs': [[-7710, -5750, 8325, -5271, -1746]],
              'id': '48403'
            }, {
              'type': 'Polygon',
              'arcs': [[8326, -6295, -583, 8327]],
              'id': '26019'
            }, {
              'type': 'Polygon',
              'arcs': [[8328, -5901, -6651, 8329, -7439, -4081]],
              'id': '29037'
            }, {
              'type': 'Polygon',
              'arcs': [[-8226, 8330, -3637, 8331, -5261, -3385]],
              'id': '01037'
            }, {
              'type': 'Polygon',
              'arcs': [[-5456, 8332, -7165, -8301, -6464, -473]],
              'id': '08069'
            }, {
              'type': 'Polygon',
              'arcs': [[-7598, -5860, 8333, 8334, -7783, 8335]],
              'id': '47037'
            }, {
              'type': 'Polygon',
              'arcs': [[8336, -7650, -6937, 8337, -6074, 8338]],
              'id': '42027'
            }, {
              'type': 'Polygon',
              'arcs': [[8339, 8340, 8341, 8342, -6067, -7048]],
              'id': '48015'
            }, {
              'type': 'Polygon',
              'arcs': [[8343, -5108, 8344, 8345]],
              'id': '50013'
            }, {
              'type': 'Polygon',
              'arcs': [[-6011, 8346, -8300, 8347, 8348, -8115, 8349]],
              'id': '51800'
            }, {
              'type': 'Polygon',
              'arcs': [[8350, 8351, -2333, -3275]],
              'id': '08025'
            }, {
              'type': 'Polygon',
              'arcs': [[8352, -3278, 8353, -6474]],
              'id': '08027'
            }, {
              'type': 'Polygon',
              'arcs': [[-5623, -5628, -8296, -7572, -6644, -8112]],
              'id': '22073'
            }, {
              'type': 'Polygon',
              'arcs': [[-6342, -2332, -259, -425, -8082, -2728]],
              'id': '48383'
            }, {
              'type': 'Polygon',
              'arcs': [[-2361, -7874, -2393, -4741, -3731, -530]],
              'id': '40137'
            }, {
              'type': 'Polygon',
              'arcs': [[-3611, 8354, -6656, -2325, -2315]],
              'id': '29179'
            }, {
              'type': 'Polygon',
              'arcs': [[-5039, -8250, -7559, 8355, -3234, 8356]],
              'id': '48389'
            }, {
              'type': 'Polygon',
              'arcs': [[-7723, -1880, 8357, -3274, 8358, -2343]],
              'id': '08041'
            }, {
              'type': 'Polygon',
              'arcs': [[8359, 8360, 8361, -7541, 8362, -7581, 8363]],
              'id': '39167'
            }, {
              'type': 'Polygon',
              'arcs': [[-7671, -1740, 8364, -4731, -7674, 8365]],
              'id': '51045'
            }, {
              'type': 'Polygon',
              'arcs': [[-2994, 8366, 8367, -3623, 8368, -2978, 8369]],
              'id': '01127'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-6788]], [[-8036, 8370, 8371, -6220, -6282, -7097, 8372]]],
              'id': '51069'
            }, {
              'type': 'Polygon',
              'arcs': [[-1476, -4657, 8373, 8374, 8375]],
              'id': '30095'
            }, {
              'type': 'Polygon',
              'arcs': [[-2163, 8376, -7821, 8377, 8378, -15]],
              'id': '22117'
            }, {
              'type': 'Polygon',
              'arcs': [[-5859, -1228, -3512, -6903, 8379, 8380, -8334]],
              'id': '47189'
            }, {
              'type': 'Polygon',
              'arcs': [[8381, -4196, -6018, 8382, -3264, -7790, -7794]],
              'id': '16035'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8383]], [[8384, 8385]], [[8386, 8387, -4798, -8184, 8388, 8389, -7860]]],
              'id': '22057'
            }, {
              'type': 'Polygon',
              'arcs': [[8390, -7476, 8391]],
              'id': '26047'
            }, {
              'type': 'Polygon',
              'arcs': [[-7083, 8392, 8393, -8288, -1079, -3831]],
              'id': '37185'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8394]], [[8395]]],
              'id': '69120'
            }, {
              'type': 'Polygon',
              'arcs': [[8396, 8397, -161, -7765, -7102, 8398]],
              'id': '72013'
            }, {
              'type': 'Polygon',
              'arcs': [[-1618, -7367, 8399, -3722, -7483]],
              'id': '26115'
            }, {
              'type': 'Polygon',
              'arcs': [[-2305, 8400, -2347]],
              'id': '30047'
            }, {
              'type': 'Polygon',
              'arcs': [[-2348, -8401, -2304, 8401, 8402, -1997, -3265, -8383, -6017]],
              'id': '30063'
            }, {
              'type': 'Polygon',
              'arcs': [[-8302, -6347, 8403, -6466]],
              'id': '08047'
            }, {
              'type': 'Polygon',
              'arcs': [[-6475, -8354, -3277, -7234, -7156, -3304]],
              'id': '08055'
            }, {
              'type': 'Polygon',
              'arcs': [[8404, 8405, -7120, 8406, -2447, -7078, -5843, -5593]],
              'id': '54059'
            }, {
              'type': 'Polygon',
              'arcs': [[-174, 8407, -8371, -8035, -332]],
              'id': '54065'
            }, {
              'type': 'Polygon',
              'arcs': [[-7258, -8309, -2699, 8408, 8409, -7998]],
              'id': '01129'
            }, {
              'type': 'Polygon',
              'arcs': [[-2148, 8410, 8411, 8412, -3418, -1373, -1367, -7129]],
              'id': '17173'
            }, {
              'type': 'Polygon',
              'arcs': [[8413, -5829, -4421, -7428, -3514, 8414]],
              'id': '18165'
            }, {
              'type': 'Polygon',
              'arcs': [[-4996, 8415, 8416, -7426, -8215, 8417, 8418]],
              'id': '34005'
            }, {
              'type': 'Polygon',
              'arcs': [[-3314, 8419, -5599, -5399, -477, -6569]],
              'id': '27045'
            }, {
              'type': 'Polygon',
              'arcs': [[-263, 8420, 8421, -4759, 8422, 8423]],
              'id': '48439'
            }, {
              'type': 'Polygon',
              'arcs': [[-4868, 8424, 8425, -5887, 8426, 8427, -4875]],
              'id': '17031'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8428]], [[8429]], [[8430]], [[8431]], [[8432]], [[8433]], [[8434]], [[8435]], [[8436]], [[8437]]],
              'id': '69085'
            }, {
              'type': 'Polygon',
              'arcs': [[-8299, -8244, 8438, -4724, 8439, -8348]],
              'id': '51550'
            }, {
              'type': 'Polygon',
              'arcs': [[-3035, 8440, -6566, -5424, -1133, -1314]],
              'id': '26155'
            }, {
              'type': 'Polygon',
              'arcs': [[8441, 8442, -481, -87, 8443, -3033, -3677]],
              'id': '26157'
            }, {
              'type': 'Polygon',
              'arcs': [[-719, 8444, -6968, -6252]],
              'id': '38011'
            }, {
              'type': 'Polygon',
              'arcs': [[8445, -1783, -714, -6251, -3746]],
              'id': '38033'
            }, {
              'type': 'Polygon',
              'arcs': [[-4347, -2253, 8446, 8447, -6998, -6328, 8448]],
              'id': '55035'
            }, {
              'type': 'Polygon',
              'arcs': [[8449, 8450, 8451, -4040, -1273, 8452]],
              'id': '32005'
            }, {
              'type': 'Polygon',
              'arcs': [[8453, -485, 8454, -4238]],
              'id': '18009'
            }, {
              'type': 'Polygon',
              'arcs': [[-3605, -2204, 8455, -486, -8454, -4237]],
              'id': '18179'
            }, {
              'type': 'Polygon',
              'arcs': [[8456, -1955, -5636, 8457, 8458]],
              'id': '05013'
            }, {
              'type': 'Polygon',
              'arcs': [[-2524, 8459, -5892, 8460, 8461, -182, 8462]],
              'id': '17091'
            }, {
              'type': 'Polygon',
              'arcs': [[-7246, -7332, -6503, -4062]],
              'id': '18163'
            }, {
              'type': 'Polygon',
              'arcs': [[8463, -3266, -2856, -3052, 8464, -2988]],
              'id': '16003'
            }, {
              'type': 'Polygon',
              'arcs': [[-6198, -8271, -7701, -7703, 8465]],
              'id': '09013'
            }, {
              'type': 'Polygon',
              'arcs': [[-4480, -7337, 8466, -4312, 8467, 8468, -4070, -7841]],
              'id': '21111'
            }, {
              'type': 'Polygon',
              'arcs': [[-8378, -7820, -6573, -8026, -454, 8469, 8470]],
              'id': '28109'
            }, {
              'type': 'Polygon',
              'arcs': [[8471, 8472, -8387, -7859]],
              'id': '22093'
            }, {
              'type': 'Polygon',
              'arcs': [[-361, -4378, -7687, 8473, -5685, 8474]],
              'id': '49013'
            }, {
              'type': 'Polygon',
              'arcs': [[-6779, -6205, 8475, -3776, -3117]],
              'id': '48209'
            }, {
              'type': 'Polygon',
              'arcs': [[8476, -5688, -5698, 8477, 8478]],
              'id': '49023'
            }, {
              'type': 'Polygon',
              'arcs': [[8479, 8480, 8481, -6719, 8482, -8289, -8394]],
              'id': '37131'
            }, {
              'type': 'Polygon',
              'arcs': [[-2770, -4951, 8483, -1829, 8484, -876]],
              'id': '01041'
            }, {
              'type': 'Polygon',
              'arcs': [[-4598, 8485, 8486, 8487]],
              'id': '16007'
            }, {
              'type': 'Polygon',
              'arcs': [[-2886, 8488, 8489, -1697, -1906, -8275, 8490]],
              'id': '39113'
            }, {
              'type': 'Polygon',
              'arcs': [[8491, 8492, 8493, 8494, 8495, -1831]],
              'id': '01045'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8496, 8497]], [[8498]], [[8499, 8500]]],
              'id': '06075'
            }, {
              'type': 'Polygon',
              'arcs': [[-7135, 8501, 8502, 8503, -2159]],
              'id': '08091'
            }, {
              'type': 'Polygon',
              'arcs': [[-7286, 8504, -5304, -5521, 8505, 8506]],
              'id': '17153'
            }, {
              'type': 'Polygon',
              'arcs': [[8507, 8508, 8509, -6174, -8176, 8510]],
              'id': '05121'
            }, {
              'type': 'Polygon',
              'arcs': [[-3554, -6114, -6123, -4814, -6460, -3363, 8511]],
              'id': '05145'
            }, {
              'type': 'Polygon',
              'arcs': [[8512, -679, 8513, -3470, -949, -6789, -4274]],
              'id': '39005'
            }, {
              'type': 'Polygon',
              'arcs': [[-3924, -2239, 8514, -8201, -6763, -4278]],
              'id': '40101'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8515]], [[8516]], [[-4352, -7861, -8390, 8517, -8385, 8518]]],
              'id': '22109'
            }, {
              'type': 'Polygon',
              'arcs': [[8519, -8229, -6137, -6138, 8520]],
              'id': '41041'
            }, {
              'type': 'Polygon',
              'arcs': [[-482, -8443, 8521]],
              'id': '26063'
            }, {
              'type': 'Polygon',
              'arcs': [[8522, -1150, -7921, -6278, 8523]],
              'id': '29227'
            }, {
              'type': 'Polygon',
              'arcs': [[8524, 8525, -6490, -6794, 8526, -5101]],
              'id': '29175'
            }, {
              'type': 'Polygon',
              'arcs': [[8527]],
              'id': '15003'
            }, {
              'type': 'Polygon',
              'arcs': [[8528, -8478, -5697, 8529, -6382, -4502]],
              'id': '49027'
            }, {
              'type': 'Polygon',
              'arcs': [[-8530, -5696, -6100, -6079, -5588, -6383]],
              'id': '49041'
            }, {
              'type': 'Polygon',
              'arcs': [[8530, -7050, -5586, 8531, -5689, -8477, 8532]],
              'id': '49045'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8533, 8534, 8535, 8536]], [[8537]], [[8538]], [[8539]], [[8540, 8541, 8542]], [[8543]], [[8544]], [[8545]], [[8546]]],
              'id': '12087'
            }, {
              'type': 'Polygon',
              'arcs': [[8547, 8548, -6133, 8549, -6034, 8550, 8551, -4776]],
              'id': '13033'
            }, {
              'type': 'Polygon',
              'arcs': [[-4038, 8552, 8553, -8170, 8554, 8555]],
              'id': '01081'
            }, {
              'type': 'Polygon',
              'arcs': [[8556, -6105, -3791, 8557, 8558, 8559, 8560]],
              'id': '48409'
            }, {
              'type': 'Polygon',
              'arcs': [[-7122, -8106, -2749]],
              'id': '06043'
            }, {
              'type': 'Polygon',
              'arcs': [[-7658, 8561, -8524, -6277, 8562, 8563, -6231]],
              'id': '29147'
            }, {
              'type': 'Polygon',
              'arcs': [[-1369, -1376, -3258, -1190, -3230, -2825]],
              'id': '17025'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8564]], [[8565]], [[8566]], [[8567]], [[-57, 8568, -3186, 8569]]],
              'id': '02130'
            }, {
              'type': 'Polygon',
              'arcs': [[8570, -1444, 8571, -2089]],
              'id': '02282'
            }, {
              'type': 'Polygon',
              'arcs': [[-2203, -1904, 8572, -487, -8456]],
              'id': '18001'
            }, {
              'type': 'Polygon',
              'arcs': [[8573, -1211, -5319, 8574, 8575]],
              'id': '08017'
            }, {
              'type': 'Polygon',
              'arcs': [[-6513, 8576, -5070, 8577, -5972]],
              'id': '47173'
            }, {
              'type': 'Polygon',
              'arcs': [[-184, 8578, -3004, 8579, -8415, -3513, 8580]],
              'id': '17183'
            }, {
              'type': 'Polygon',
              'arcs': [[8581, 8582]],
              'id': '53009'
            }, {
              'type': 'Polygon',
              'arcs': [[8583, 8584, 8585, -8027, -7113, 8586]],
              'id': '53027'
            }, {
              'type': 'Polygon',
              'arcs': [[8587, 8588, -2499, 8589, -7928]],
              'id': '12109'
            }, {
              'type': 'Polygon',
              'arcs': [[-8582, 8590, 8591, -8584, 8592]],
              'id': '53031'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8593]], [[-7950, 8594]]],
              'id': '06041'
            }, {
              'type': 'Polygon',
              'arcs': [[-7092, -8325, -5180, 8595, -7067, 8596, 8597, 8598]],
              'id': '51053'
            }, {
              'type': 'Polygon',
              'arcs': [[-4783, -1253, 8599, -5283]],
              'id': '17129'
            }, {
              'type': 'Polygon',
              'arcs': [[-4376, -6015, 8600, -7281, -7767, -7688]],
              'id': '08081'
            }, {
              'type': 'Polygon',
              'arcs': [[-7299, 8601, -8487, -5364, -4058]],
              'id': '16041'
            }, {
              'type': 'Polygon',
              'arcs': [[-6533, -8040, 8602, -8198, 8603, -3997]],
              'id': '06101'
            }, {
              'type': 'Polygon',
              'arcs': [[-7714, -8209, -6400, -8261, -6919, -840, -4335]],
              'id': '39081'
            }, {
              'type': 'Polygon',
              'arcs': [[-7512, -191, 8604, -6954, 8605]],
              'id': '35009'
            }, {
              'type': 'Polygon',
              'arcs': [[-2880, 8606, -5347, 8607, 8608]],
              'id': '36021'
            }, {
              'type': 'Polygon',
              'arcs': [[-7528, 8609, -2438, -3214, -7635, -6576]],
              'id': '28083'
            }, {
              'type': 'Polygon',
              'arcs': [[-8266, -7808, 8610, -4005, 8611, -2139]],
              'id': '13291'
            }, {
              'type': 'Polygon',
              'arcs': [[8612, -6927, 8613, 8614, -5438, 8615]],
              'id': '39001'
            }, {
              'type': 'Polygon',
              'arcs': [[-4510, -8217, 8616]],
              'id': '34009'
            }, {
              'type': 'Polygon',
              'arcs': [[-4506, -12, -2004, -5054, 8617]],
              'id': '32003'
            }, {
              'type': 'Polygon',
              'arcs': [[-7698, 8618, 8619, 8620, -8233, -6633]],
              'id': '20103'
            }, {
              'type': 'Polygon',
              'arcs': [[-3400, -5359, -8322, -7090]],
              'id': '51145'
            }, {
              'type': 'Polygon',
              'arcs': [[-4166, 8621, 8622, 8623, 8624, -1105, -3811]],
              'id': '53043'
            }, {
              'type': 'Polygon',
              'arcs': [[8625, 8626, -640, 8627, 8628, -8585, -8592]],
              'id': '53045'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8629]], [[8630]], [[8631]], [[8632]]],
              'id': '53055'
            }, {
              'type': 'Polygon',
              'arcs': [[8633, -3250, 8634, 8635, 8636]],
              'id': '17133'
            }, {
              'type': 'Polygon',
              'arcs': [[-1795, 8637, 8638, 8639, -7132, 8640]],
              'id': '08097'
            }, {
              'type': 'Polygon',
              'arcs': [[8641, -8149, -979, 8642, -567]],
              'id': '06035'
            }, {
              'type': 'Polygon',
              'arcs': [[-3575, -2916, -2213, -2170, -289]],
              'id': '19101'
            }, {
              'type': 'Polygon',
              'arcs': [[8643, -5320, -2906, -7232, -3369, 8644]],
              'id': '08099'
            }, {
              'type': 'Polygon',
              'arcs': [[-732, -4197, -8382, -7793, 8645]],
              'id': '16057'
            }, {
              'type': 'Polygon',
              'arcs': [[-2508, 8646, 8647, -6477, 8648]],
              'id': '12097'
            }, {
              'type': 'Polygon',
              'arcs': [[8649, 8650, 8651, -855, 8652, -348]],
              'id': '27171'
            }, {
              'type': 'Polygon',
              'arcs': [[-6607, -2628, 8653, 8654, -8124, 8655, -219]],
              'id': '13293'
            }, {
              'type': 'Polygon',
              'arcs': [[8656, 8657, -7423, 8658, 8659]],
              'id': '31049'
            }, {
              'type': 'Polygon',
              'arcs': [[8660, -939, -689, -187, -7511]],
              'id': '48359'
            }, {
              'type': 'Polygon',
              'arcs': [[8661, -1821, 8662, -1770, -3852, -5820]],
              'id': '13297'
            }, {
              'type': 'Polygon',
              'arcs': [[-6619, -6339, 8663, 8664, 8665, -7198]],
              'id': '13303'
            }, {
              'type': 'Polygon',
              'arcs': [[8666, -7451, 8667, 8668, 8669]],
              'id': '34013'
            }, {
              'type': 'Polygon',
              'arcs': [[8670, 8671, 8672, -4821, 8673, 8674, -5258]],
              'id': '13305'
            }, {
              'type': 'Polygon',
              'arcs': [[8675, -7238, -5159, -3251, -8634, 8676, -3891]],
              'id': '29189'
            }, {
              'type': 'Polygon',
              'arcs': [[-7552, -18, 8677, 8678, -4852]],
              'id': '22063'
            }, {
              'type': 'Polygon',
              'arcs': [[-3387, -5264, -4952, -2768, -6603]],
              'id': '01001'
            }, {
              'type': 'Polygon',
              'arcs': [[-8104, -8173, 8679, 8680, 8681, 8682, -8493, 8683]],
              'id': '01005'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8684]], [[8685]], [[8686]], [[-8409, -2698, 8687, 8688, 8689, 8690]]],
              'id': '01097'
            }, {
              'type': 'Polygon',
              'arcs': [[8691, -1728, 8692, -8623, 8693]],
              'id': '53065'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8694]], [[-4169, -6246, 8695]], [[8696]]],
              'id': '53073'
            }, {
              'type': 'Polygon',
              'arcs': [[-1731, 8697, -3438, -3208, 8698, 8699, 8700]],
              'id': '13019'
            }, {
              'type': 'Polygon',
              'arcs': [[8701, -4596, -6016, -358]],
              'id': '56041'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-1219]], [[8702, -8597, -7070, 8703, -8481]]],
              'id': '51081'
            }, {
              'type': 'Polygon',
              'arcs': [[-8356, -7558, -5034, -8085, 8704, -5867, -3235]],
              'id': '48371'
            }, {
              'type': 'Polygon',
              'arcs': [[-3729, -7249, 8705, 8706, -2936, -5395]],
              'id': '17161'
            }, {
              'type': 'Polygon',
              'arcs': [[-1215, -2887, -8491, -8274, 8707]],
              'id': '39135'
            }, {
              'type': 'Polygon',
              'arcs': [[8708, -1085, 8709, -801, 8710, -1900]],
              'id': '39137'
            }, {
              'type': 'Polygon',
              'arcs': [[8711, -8503, 8712, 8713, -5266]],
              'id': '08111'
            }, {
              'type': 'Polygon',
              'arcs': [[-2923, 8714, -1912, 8715]],
              'id': '48385'
            }, {
              'type': 'Polygon',
              'arcs': [[-2303, -1988, -5607, -6086, 8716, -8402]],
              'id': '30077'
            }, {
              'type': 'Polygon',
              'arcs': [[8717, 8718, 8719, 8720, -4587, 8721]],
              'id': '13309'
            }, {
              'type': 'Polygon',
              'arcs': [[-3088, -5822, 8722, -7220, -2006]],
              'id': '06065'
            }, {
              'type': 'Polygon',
              'arcs': [[-7393, -1652, -506, 8723, 8724]],
              'id': '40115'
            }, {
              'type': 'Polygon',
              'arcs': [[-6896, -7764, 8725, -2758, 8726]],
              'id': '72103'
            }, {
              'type': 'Polygon',
              'arcs': [[-3689, 8727, 8728, -1049]],
              'id': '26001'
            }, {
              'type': 'Polygon',
              'arcs': [[8729, -5873, -825, 8730, 8731, -1498]],
              'id': '56043'
            }, {
              'type': 'Polygon',
              'arcs': [[8732, -5027, -7989, -5014, -4760, -8422]],
              'id': '48113'
            }, {
              'type': 'Polygon',
              'arcs': [[8733, -7195, 8734, 8735]],
              'id': '72059'
            }, {
              'type': 'Polygon',
              'arcs': [[-895, -2206, -3604, -2152, -5982]],
              'id': '18183'
            }, {
              'type': 'Polygon',
              'arcs': [[-5422, -5404, -7494, 8736, -7416, -4567]],
              'id': '47047'
            }, {
              'type': 'Polygon',
              'arcs': [[-4874, -7799, -6419, 8737, -8230, -2189, -3417]],
              'id': '20141'
            }, {
              'type': 'Polygon',
              'arcs': [[-7112, 8738, -7011, 8739, 8740, 8741, -2129]],
              'id': '72011'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-8741, 8742, -2121, -6866, -5017, -4354, 8743]], [[8744]], [[8745]]],
              'id': '72097'
            }, {
              'type': 'Polygon',
              'arcs': [[-2199, 8746]],
              'id': '60010'
            }, {
              'type': 'Polygon',
              'arcs': [[8747, -6207, -5290, -4928, -3670, -5342, 8748]],
              'id': '50003'
            }, {
              'type': 'Polygon',
              'arcs': [[-4167, -3809, -2503, -2488]],
              'id': '53017'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-3785, 8749, 8750, 8751]], [[-8559, 8752, 8753, 8754]]],
              'id': '48355'
            }, {
              'type': 'Polygon',
              'arcs': [[8755, 8756, 8757, -2578, -5106]],
              'id': '50019'
            }, {
              'type': 'Polygon',
              'arcs': [[-5410, -6459, 8758, -7520, -3820, -562, -5413]],
              'id': '54023'
            }, {
              'type': 'Polygon',
              'arcs': [[8759, -5955, 8760, 8761, -2010]],
              'id': '13073'
            }, {
              'type': 'Polygon',
              'arcs': [[-2864, 8762, -5727, -4614, 8763, -4327, -5358]],
              'id': '51085'
            }, {
              'type': 'Polygon',
              'arcs': [[-4535, -8260, -5786, -7955, 8764, -2364, -8080, 8765]],
              'id': '48387'
            }, {
              'type': 'Polygon',
              'arcs': [[8766, -2107, -3580, 8767, 8768, 8769, -6925]],
              'id': '39141'
            }, {
              'type': 'Polygon',
              'arcs': [[-67, 8770, -8718, 8771, 8772, -2511]],
              'id': '13091'
            }, {
              'type': 'Polygon',
              'arcs': [[-6323, 8773, 8774, -1822, -8662, -5819, -4000]],
              'id': '13135'
            }, {
              'type': 'Polygon',
              'arcs': [[-6480, -2141, 8775, 8776, 8777, -6264, -6614]],
              'id': '13085'
            }, {
              'type': 'Polygon',
              'arcs': [[8778, -3632, 8779, -7795, -3267, -8464, -2987, 8780, 8781]],
              'id': '41063'
            }, {
              'type': 'Polygon',
              'arcs': [[-8665, 8782, -4782, 8783, 8784]],
              'id': '13167'
            }, {
              'type': 'Polygon',
              'arcs': [[-6338, 8785, -2012, 8786, -8548, -4775, -8783, -8664]],
              'id': '13163'
            }, {
              'type': 'Polygon',
              'arcs': [[8787, 8788, 8789, -1692, -8490]],
              'id': '39023'
            }, {
              'type': 'Polygon',
              'arcs': [[8790, 8791, 8792, 8793, 8794, -3753, -4443, 8795]],
              'id': '29069'
            }, {
              'type': 'Polygon',
              'arcs': [[8796, -8346, 8797, -7741, -8012]],
              'id': '36019'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-3139]], [[-1282]], [[-7670, -7748, 8798, 8799, -4768, 8800, -1742]]],
              'id': '51163'
            }, {
              'type': 'Polygon',
              'arcs': [[-5882, 8801, -8159, 8802]],
              'id': '42099'
            }, {
              'type': 'Polygon',
              'arcs': [[8803, 8804, -8792, 8805, -8509]],
              'id': '05021'
            }, {
              'type': 'Polygon',
              'arcs': [[-172, -3763, -6217, 8806]],
              'id': '54037'
            }, {
              'type': 'Polygon',
              'arcs': [[8807, 8808, 8809, -2300]],
              'id': '30035'
            }, {
              'type': 'Polygon',
              'arcs': [[-8345, -5107, -2581, 8810, 8811, -7742, -8798]],
              'id': '50007'
            }, {
              'type': 'Polygon',
              'arcs': [[8812, -2963, -4786, -4979, -6125]],
              'id': '19167'
            }, {
              'type': 'Polygon',
              'arcs': [[-722, -411, -2354, -1715, -6906, -5030]],
              'id': '48083'
            }, {
              'type': 'Polygon',
              'arcs': [[-2599, 8813, -1104, -7711, -7039, 8814, -8009]],
              'id': '48401'
            }, {
              'type': 'Polygon',
              'arcs': [[8815, 8816, 8817, 8818, -5432, -8615]],
              'id': '39145'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8819, -1436]], [[8820]], [[8821, -1429, 8822, -1433, 8823, -2018]]],
              'id': '02110'
            }, {
              'type': 'Polygon',
              'arcs': [[8824, 8825, -7533, -7318, -3845]],
              'id': '05077'
            }, {
              'type': 'Polygon',
              'arcs': [[-4816, -614, 8826, -8825, -3844]],
              'id': '05123'
            }, {
              'type': 'Polygon',
              'arcs': [[-5605, 8827, -8092, -1512]],
              'id': '55079'
            }, {
              'type': 'Polygon',
              'arcs': [[-8447, -2252, -2591, 8828, 8829, -8119, 8830]],
              'id': '55053'
            }, {
              'type': 'Polygon',
              'arcs': [[-4574, -6666, -7519, 8831, -8416, -4995]],
              'id': '34021'
            }, {
              'type': 'Polygon',
              'arcs': [[8832, -7089, -6750, -7461, -4748]],
              'id': '37009'
            }, {
              'type': 'Polygon',
              'arcs': [[8833, -2136, -6735, 8834, -1009]],
              'id': '27167'
            }, {
              'type': 'Polygon',
              'arcs': [[-2233, -3448, -341, 8835, 8836, 8837]],
              'id': '38051'
            }, {
              'type': 'Polygon',
              'arcs': [[-8811, -2580, 8838, 8839, 8840]],
              'id': '50023'
            }, {
              'type': 'Polygon',
              'arcs': [[-7850, -8267, -3642, 8841, 8842, -1061, -1663]],
              'id': '31173'
            }, {
              'type': 'Polygon',
              'arcs': [[-6829, 8843, 8844, -8151]],
              'id': '32027'
            }, {
              'type': 'Polygon',
              'arcs': [[8845, -8840, 8846, 8847, -5287]],
              'id': '50017'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8848]], [[8849]], [[-7125, 8850]]],
              'id': '55029'
            }, {
              'type': 'Polygon',
              'arcs': [[-568, -8643, -978, -8038, -6531, -2222]],
              'id': '06063'
            }, {
              'type': 'Polygon',
              'arcs': [[-6930, -3228, -4276, -94, 8851, -797]],
              'id': '39147'
            }, {
              'type': 'Polygon',
              'arcs': [[-5527, -4916, 8852, -7226, 8853, 8854]],
              'id': '13103'
            }, {
              'type': 'Polygon',
              'arcs': [[8855, -5818, 8856, 8857, 8858, -5547, -2611]],
              'id': '31161'
            }, {
              'type': 'Polygon',
              'arcs': [[-602, -269, -106, -107, -1420, 8859]],
              'id': '46087'
            }, {
              'type': 'Polygon',
              'arcs': [[8860, -207, 8861, 8862, 8863, -2761, -4343]],
              'id': '55083'
            }, {
              'type': 'Polygon',
              'arcs': [[-2420, -6336, -2815, 8864]],
              'id': '02068'
            }, {
              'type': 'Polygon',
              'arcs': [[-7450, -4517, 8865, 8866, 8867, -8668]],
              'id': '34017'
            }, {
              'type': 'Polygon',
              'arcs': [[-1500, 8868, -8731, -829, 8869, -6013, -5362, -6343]],
              'id': '56013'
            }, {
              'type': 'Polygon',
              'arcs': [[-2781, -3758, -5452, -6488, -8526]],
              'id': '29137'
            }, {
              'type': 'Polygon',
              'arcs': [[8870, -2638, 8871, -3576, -2105]],
              'id': '39045'
            }, {
              'type': 'Polygon',
              'arcs': [[-8211, -5172, 8872, 8873, -7944, -5500]],
              'id': '05027'
            }, {
              'type': 'Polygon',
              'arcs': [[8874, 8875, -4469, -4119, -8002]],
              'id': '55065'
            }, {
              'type': 'Polygon',
              'arcs': [[-4521, 8876, 8877]],
              'id': '36047'
            }, {
              'type': 'Polygon',
              'arcs': [[-1993, -1544, -7775, -5121, -6116, -2277]],
              'id': '29141'
            }, {
              'type': 'Polygon',
              'arcs': [[-6270, 8878, -869, -7463, -5353, -7397]],
              'id': '27151'
            }, {
              'type': 'Polygon',
              'arcs': [[8879, -6150, -5742, -6055, 8880, -6057, 8881, -3749, -8795]],
              'id': '29143'
            }, {
              'type': 'Polygon',
              'arcs': [[-7855, -3169, -987, -4470, -8876, 8882]],
              'id': '55045'
            }, {
              'type': 'Polygon',
              'arcs': [[-8844, -6828, 8883, -5621, 8884, 8885]],
              'id': '32015'
            }, {
              'type': 'Polygon',
              'arcs': [[8886, -8154]],
              'id': '32029'
            }, {
              'type': 'Polygon',
              'arcs': [[-7474, -6804, -2945, -4664, -4933]],
              'id': '35001'
            }, {
              'type': 'Polygon',
              'arcs': [[-3207, -7412, -7139, 8887, -8699]],
              'id': '13173'
            }, {
              'type': 'Polygon',
              'arcs': [[-5788, -44, -4969, -4564, -7437, -1480, 8888]],
              'id': '56045'
            }, {
              'type': 'Polygon',
              'arcs': [[8889, -6668, -2930, 8890, 8891, 8892]],
              'id': '36009'
            }, {
              'type': 'Polygon',
              'arcs': [[8893, 8894, -136, -7680, -2469, -143, 8895]],
              'id': '72127'
            }, {
              'type': 'Polygon',
              'arcs': [[8896, 8897, -137, -8895]],
              'id': '72139'
            }, {
              'type': 'Polygon',
              'arcs': [[-2696, -1112, -1884, -1890, 8898]],
              'id': '19049'
            }, {
              'type': 'Polygon',
              'arcs': [[-8084, 8899, 8900, -5868, -8705]],
              'id': '48443'
            }, {
              'type': 'Polygon',
              'arcs': [[8901, -7811, -6539, -1917, 8902]],
              'id': '13119'
            }, {
              'type': 'Polygon',
              'arcs': [[-5947, -582, 8903, -7284, 8904]],
              'id': '17199'
            }, {
              'type': 'Polygon',
              'arcs': [[-1937, 8905, -7777, -5910, 8906, -2109]],
              'id': '39155'
            }, {
              'type': 'Polygon',
              'arcs': [[-1171, -1825, 8907, 8908, -1874, 8909]],
              'id': '17203'
            }, {
              'type': 'Polygon',
              'arcs': [[-8714, 8910, -621, -6108, -4049]],
              'id': '08067'
            }, {
              'type': 'Polygon',
              'arcs': [[-3468, -8224, -4336, -838, -1923, 8911]],
              'id': '39157'
            }, {
              'type': 'Polygon',
              'arcs': [[-5268, -2263, -2894, -2144, -25, -6446, -4338, -6120]],
              'id': '27089'
            }, {
              'type': 'Polygon',
              'arcs': [[-1787, -1763, -7935, -7851, -5763, 8912]],
              'id': '27115'
            }, {
              'type': 'Polygon',
              'arcs': [[-5171, 8913, 8914, -8459, 8915, -8873]],
              'id': '05103'
            }, {
              'type': 'Polygon',
              'arcs': [[8916, 8917, -675, -8513, -4273, 8918]],
              'id': '39093'
            }, {
              'type': 'Polygon',
              'arcs': [[8919, -6601, 8920, -6373, 8921, -5066]],
              'id': '37021'
            }, {
              'type': 'Polygon',
              'arcs': [[-6176, 8922, -8796, -4450, -3986, -6122]],
              'id': '05031'
            }, {
              'type': 'Polygon',
              'arcs': [[-5929, -4260, 8923, -8246, -5036, -4878]],
              'id': '35005'
            }, {
              'type': 'Polygon',
              'arcs': [[-2563, -2613, -5550, 8924, -5793, -7438]],
              'id': '31165'
            }, {
              'type': 'Polygon',
              'arcs': [[-8097, 8925, -1956, -8457, -8915, 8926]],
              'id': '05039'
            }, {
              'type': 'Polygon',
              'arcs': [[8927, -4203, 8928, -5064, -3911, -6375, 8929]],
              'id': '37023'
            }, {
              'type': 'Polygon',
              'arcs': [[-6600, -4721, 8930, -8930, -6374, -8921]],
              'id': '37111'
            }, {
              'type': 'Polygon',
              'arcs': [[-7652, 5641, -5642, -5641, -5881, -6939]],
              'id': '42109'
            }, {
              'type': 'Polygon',
              'arcs': [[-8772, -8722, -4586, -3434, -3557, 8931]],
              'id': '13271'
            }, {
              'type': 'Polygon',
              'arcs': [[8932, -768, -7240, 8933]],
              'id': '12115'
            }, {
              'type': 'Polygon',
              'arcs': [[-6541, -4559, -6063, -5957, 8934, 8935, 8936, -1919]],
              'id': '13105'
            }, {
              'type': 'Polygon',
              'arcs': [[8937, -8700, -8888, -7143, 8938, -7631, 8939]],
              'id': '13185'
            }, {
              'type': 'Polygon',
              'arcs': [[-220, -8656, -8123, 8940, -3582, 8941, 8942]],
              'id': '13263'
            }, {
              'type': 'Polygon',
              'arcs': [[-6880, -4683, 8943, -8285, -6311]],
              'id': '37047'
            }, {
              'type': 'Polygon',
              'arcs': [[-7469, -580, -5951, -4302, -6041, -5512, -5511, 5510]],
              'id': '17069'
            }, {
              'type': 'Polygon',
              'arcs': [[-8777, 8944, -4008, 8945, 8946, 8947, -8775, 8948]],
              'id': '13139'
            }, {
              'type': 'Polygon',
              'arcs': [[8949, -5490, -6642, -4538, -3755, 8950]],
              'id': '17001'
            }, {
              'type': 'Polygon',
              'arcs': [[8951, 8952, -2180, 8953, -69, -2510, -1958, -7942]],
              'id': '13153'
            }, {
              'type': 'Polygon',
              'arcs': [[8954, -5273, -4218, 8955]],
              'id': '48457'
            }, {
              'type': 'Polygon',
              'arcs': [[-6225, -7353, -7678, -5376, -7406, -1767]],
              'id': '12041'
            }, {
              'type': 'Polygon',
              'arcs': [[-857, 8956, 8957, -1943, -3161, -3240]],
              'id': '27139'
            }, {
              'type': 'Polygon',
              'arcs': [[-3212, -3106, 8958, -3286, -2942, -7614, -7636]],
              'id': '28007'
            }, {
              'type': 'Polygon',
              'arcs': [[-8770, 8959, -8816, -8614, -6926]],
              'id': '39131'
            }, {
              'type': 'Polygon',
              'arcs': [[-6949, 6947, -6947, -2245, -7035, -3201, -6093]],
              'id': '46095'
            }, {
              'type': 'Polygon',
              'arcs': [[8960, 8961, -8893, 8962, -4894]],
              'id': '36013'
            }, {
              'type': 'Polygon',
              'arcs': [[-8132, -8067, 8963, 8964, 8965, -5723, -8763, -2863]],
              'id': '51177'
            }, {
              'type': 'Polygon',
              'arcs': [[-2327, -6660, 8966, -8511, -8175, -4453, -8193]],
              'id': '29149'
            }, {
              'type': 'Polygon',
              'arcs': [[-7518, 8967, -7427, -8417, -8832]],
              'id': '34025'
            }, {
              'type': 'Polygon',
              'arcs': [[-8818, 8968, -3974, -6526, 8969, -6058, 8970]],
              'id': '39087'
            }, {
              'type': 'Polygon',
              'arcs': [[-4498, 8971, -5140, 8972, -1666, -4108, -5506]],
              'id': '26103'
            }, {
              'type': 'Polygon',
              'arcs': [[8973, -5259, -8675, 8974, -6484]],
              'id': '13229'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8975]], [[8976]]],
              'id': '15007'
            }, {
              'type': 'Polygon',
              'arcs': [[-3175, -5111, -5079, 8977, -8339, -6073, -3520, -6681]],
              'id': '42033'
            }, {
              'type': 'Polygon',
              'arcs': [[-2893, -7392, -7502, -2248, -29, -2146]],
              'id': '27029'
            }, {
              'type': 'Polygon',
              'arcs': [[8978, -3558, -3432, -8698, -1730]],
              'id': '13155'
            }, {
              'type': 'Polygon',
              'arcs': [[8979, -1790, -6427, 8980]],
              'id': '27035'
            }, {
              'type': 'Polygon',
              'arcs': [[-305, -5126, -5132, 8981, -7846, -4653, -3587, -2566]],
              'id': '30087'
            }, {
              'type': 'Polygon',
              'arcs': [[-678, -1895, -8222, -3466, -8514]],
              'id': '39169'
            }, {
              'type': 'Polygon',
              'arcs': [[-624, -4820, 8982, 8983, -7273]],
              'id': '12051'
            }, {
              'type': 'Polygon',
              'arcs': [[-8935, -5956, -8760, -2009, 8984]],
              'id': '13181'
            }, {
              'type': 'Polygon',
              'arcs': [[-4485, 8985, -8672, 8986]],
              'id': '13183'
            }, {
              'type': 'Polygon',
              'arcs': [[-7253, -2792, 8987, -4647, -6102, -1671]],
              'id': '48469'
            }, {
              'type': 'Polygon',
              'arcs': [[-1908, 8988, 8989, -7169, 8990, -7342, 8991]],
              'id': '39025'
            }, {
              'type': 'Polygon',
              'arcs': [[-1011, 8992, -7398, -5704, 8993, -755]],
              'id': '46109'
            }, {
              'type': 'Polygon',
              'arcs': [[-4973, -6094, -355, -8856, -2610, -2561, -4562]],
              'id': '46102'
            }, {
              'type': 'Polygon',
              'arcs': [[-6857, 8994, -3426, -3975, -7754]],
              'id': '54067'
            }, {
              'type': 'Polygon',
              'arcs': [[8995, -7006, 8996, 8997, 8998]],
              'id': '72071'
            }, {
              'type': 'Polygon',
              'arcs': [[-7010, 8999, -2116, -8743, -8740]],
              'id': '72083'
            }, {
              'type': 'Polygon',
              'arcs': [[9000, 9001, -7007, -8996]],
              'id': '72115'
            }, {
              'type': 'Polygon',
              'arcs': [[-7009, 9002, 9003, -7105, -7197, 9004, -2117, -9000]],
              'id': '72081'
            }, {
              'type': 'Polygon',
              'arcs': [[9005, 9006, -7761, -6894]],
              'id': '72089'
            }, {
              'type': 'Polygon',
              'arcs': [[-7194, -6960, 9007, -8735]],
              'id': '72111'
            }, {
              'type': 'Polygon',
              'arcs': [[-5631, -7654, -996, 9008, 9009]],
              'id': '33017'
            }, {
              'type': 'Polygon',
              'arcs': [[-3471, -2284, -3555, -8512, -3367, -3358, -6611]],
              'id': '05045'
            }, {
              'type': 'Polygon',
              'arcs': [[9010, -8636, 9011, -7377, 9012]],
              'id': '29186'
            }, {
              'type': 'Polygon',
              'arcs': [[-6166, -3648, -3738, -7205, -2535]],
              'id': '31153'
            }, {
              'type': 'Polygon',
              'arcs': [[-8130, 9013, 9014, -1523, -5724, -8966, 9015, -8964, -8066]],
              'id': '51179'
            }, {
              'type': 'Polygon',
              'arcs': [[9016, -5931, -4271, -6979, -3308, -716, -1782]],
              'id': '38089'
            }, {
              'type': 'Polygon',
              'arcs': [[-5835, 9017, 9018, 9019, 9020, 9021, 9022]],
              'id': '47051'
            }, {
              'type': 'Polygon',
              'arcs': [[-496, -2169, -5293, -6500, 9023]],
              'id': '38101'
            }, {
              'type': 'Polygon',
              'arcs': [[9024, -684, 9025, -7975, 9026, -9019]],
              'id': '47115'
            }, {
              'type': 'Polygon',
              'arcs': [[9027, -7684, -5736, -5714, -7639, -1944, -8958]],
              'id': '27037'
            }, {
              'type': 'Polygon',
              'arcs': [[-4239, -8455, -491, 9028, -3079, -6626]],
              'id': '18035'
            }, {
              'type': 'Polygon',
              'arcs': [[-7496, -2911, -1785, 9029, -2890]],
              'id': '27061'
            }, {
              'type': 'Polygon',
              'arcs': [[-8729, 9030, -3252, -787]],
              'id': '26069'
            }, {
              'type': 'Polygon',
              'arcs': [[-3451, 9031, 9032, -6559, 9033]],
              'id': '20159'
            }, {
              'type': 'Polygon',
              'arcs': [[9034, -7488, -5898, 9035, -8620]],
              'id': '20209'
            }, {
              'type': 'Polygon',
              'arcs': [[9036, -5579, -559, -936, -2754, -3779, 9037]],
              'id': '48479'
            }, {
              'type': 'Polygon',
              'arcs': [[-8342, 9038, -6912, -6153, 9039, 9040]],
              'id': '48481'
            }, {
              'type': 'Polygon',
              'arcs': [[-2627, -2586, 9041, -887, -2178, 9042, -8654]],
              'id': '13207'
            }, {
              'type': 'Polygon',
              'arcs': [[-1820, -652, 9043, -6392, -1771, -8663]],
              'id': '13219'
            }, {
              'type': 'Polygon',
              'arcs': [[-7936, 9044, -8952, -7941, -8122]],
              'id': '13225'
            }, {
              'type': 'Polygon',
              'arcs': [[9045, 9046, 9047, -8681]],
              'id': '13239'
            }, {
              'type': 'Polygon',
              'arcs': [[-3469, -8912, -1922, 9048, -2635, -951]],
              'id': '39031'
            }, {
              'type': 'Polygon',
              'arcs': [[-9047, 9049, -6623, 9050, -1850, 9051]],
              'id': '13243'
            }, {
              'type': 'Polygon',
              'arcs': [[-3317, -2474, -6897, -8727, -2757, 9052, -1752]],
              'id': '72085'
            }, {
              'type': 'Polygon',
              'arcs': [[9053, -7760, 9054, -6528, 9055]],
              'id': '54079'
            }, {
              'type': 'Polygon',
              'arcs': [[-7119, -7752, 9056, -4937, -2448, -8407]],
              'id': '54109'
            }, {
              'type': 'Polygon',
              'arcs': [[-6869, -4922, 9057, 9058, -6380, -7473]],
              'id': '34037'
            }, {
              'type': 'Polygon',
              'arcs': [[9059, -3627, -8227, -3383, -6332, -8313]],
              'id': '01007'
            }, {
              'type': 'Polygon',
              'arcs': [[9060, -6297, -4959, 9061, 9062, -6429]],
              'id': '28057'
            }, {
              'type': 'Polygon',
              'arcs': [[-7575, 9063, -8951, -3754, -2779, 9064]],
              'id': '29111'
            }, {
              'type': 'Polygon',
              'arcs': [[-5289, 9065, 9066, 9067, 9068, -4926]],
              'id': '33019'
            }, {
              'type': 'Polygon',
              'arcs': [[-2195, -3269, -1646, 9069, 9070, 9071, -2166]],
              'id': '38069'
            }, {
              'type': 'Polygon',
              'arcs': [[9072, 9073, -3741, 9074, -8877, -4520]],
              'id': '36081'
            }, {
              'type': 'Polygon',
              'arcs': [[-8034, -1283, -8033, -6239, -3599, -2667, 9075, -815]],
              'id': '37033'
            }, {
              'type': 'Polygon',
              'arcs': [[9076, -5420, -5509, -3691]],
              'id': '26131'
            }, {
              'type': 'Polygon',
              'arcs': [[-4853, -8679, 9077, -8472, -7858, 9078]],
              'id': '22005'
            }, {
              'type': 'Polygon',
              'arcs': [[9079, -6479, -622, -766, -1897]],
              'id': '12055'
            }, {
              'type': 'Polygon',
              'arcs': [[-6378, -4718, -1066, -3952, -8922]],
              'id': '37089'
            }, {
              'type': 'Polygon',
              'arcs': [[-1154, -3336, -1297, -1180, -2818, -3646]],
              'id': '19029'
            }, {
              'type': 'Polygon',
              'arcs': [[-8790, 9080, -6679, 9081, -2103, 9082, -1693]],
              'id': '39097'
            }, {
              'type': 'Polygon',
              'arcs': [[9083, 9084, -3215, -6478, -8648]],
              'id': '12061'
            }, {
              'type': 'Polygon',
              'arcs': [[9085, -7817, -7909, -5044, -4462, 9086]],
              'id': '05131'
            }, {
              'type': 'Polygon',
              'arcs': [[-8462, 9087, -3005, -8579, -183]],
              'id': '17075'
            }, {
              'type': 'Polygon',
              'arcs': [[-8172, -3584, 9088, -6624, -9050, -9046, -8680]],
              'id': '13259'
            }, {
              'type': 'Polygon',
              'arcs': [[9089, 9090, -1939, -1892, -676, -8918]],
              'id': '39035'
            }, {
              'type': 'Polygon',
              'arcs': [[-3853, -1774, 9091, -881, -9042, -2585]],
              'id': '13159'
            }, {
              'type': 'Polygon',
              'arcs': [[-6265, -8778, -8949, -8774, -6322]],
              'id': '13117'
            }, {
              'type': 'Polygon',
              'arcs': [[9092, 9093, -5546, -8220, 9094, -6826, 9095]],
              'id': '16073'
            }, {
              'type': 'Polygon',
              'arcs': [[9096, 9097, -3994, -8107, -210, 9098, 9099]],
              'id': '06085'
            }, {
              'type': 'Polygon',
              'arcs': [[9100, -4858, -7773, 9101, -3883, 9102, -6562]],
              'id': '22079'
            }, {
              'type': 'Polygon',
              'arcs': [[-90, -6430, -9063, 9103, -8314, 9104, 9105]],
              'id': '28095'
            }, {
              'type': 'Polygon',
              'arcs': [[9106, -4997, -8419, 9107, 9108, -6448]],
              'id': '42101'
            }, {
              'type': 'Polygon',
              'arcs': [[9109, -9009, -995, 9110, -7590, 9111]],
              'id': '33015'
            }, {
              'type': 'Polygon',
              'arcs': [[9112, 9113, -8749, -5341, -8607, -6320]],
              'id': '36083'
            }, {
              'type': 'Polygon',
              'arcs': [[-5063, 9114, -4903, -3913]],
              'id': '37071'
            }, {
              'type': 'Polygon',
              'arcs': [[9115, -6654, 9116, -6151, -8880, -8794, 9117]],
              'id': '29207'
            }, {
              'type': 'Polygon',
              'arcs': [[-8858, 9118, -922, 9119, -8657, 9120, 9121]],
              'id': '31069'
            }, {
              'type': 'Polygon',
              'arcs': [[-4950, -8105, -8684, -8492, -1830, -8484]],
              'id': '01109'
            }, {
              'type': 'Polygon',
              'arcs': [[-4895, -8963, -8892, 9122, -5109, -5216, -1681, -7776]],
              'id': '42123'
            }, {
              'type': 'Polygon',
              'arcs': [[-1325, -2550, -7395, 9123, -5008, 9124]],
              'id': '20099'
            }, {
              'type': 'Polygon',
              'arcs': [[-1891, -526, -5919, -5328, -1166]],
              'id': '19039'
            }, {
              'type': 'Polygon',
              'arcs': [[9125, -8724, -505, -4233, -7803, -2236, 9126]],
              'id': '40041'
            }, {
              'type': 'Polygon',
              'arcs': [[9127, -7415, -5318, -3133, -1577, 9128]],
              'id': '18141'
            }, {
              'type': 'Polygon',
              'arcs': [[9129, -7186, -6851]],
              'id': '37177'
            }, {
              'type': 'Polygon',
              'arcs': [[-7134, -6476, -4774, -616, -8911, -8713, -8502]],
              'id': '08053'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-8751, 9130, -6514, 9131]], [[-8754, 9132, -6518, -130, 9133]]],
              'id': '48273'
            }, {
              'type': 'Polygon',
              'arcs': [[-3617, -7545, 9134, -6887, 9135, -1285, 9136, 9137]],
              'id': '51035'
            }, {
              'type': 'Polygon',
              'arcs': [[-2990, 9138, -7404, 9139, -9096, -6825, -4367, -2099]],
              'id': '41045'
            }, {
              'type': 'Polygon',
              'arcs': [[9140, 9141, -4847, 9142, 9143]],
              'id': '24009'
            }, {
              'type': 'Polygon',
              'arcs': [[-5143, -5595, -5842, -5150, -5581]],
              'id': '21071'
            }, {
              'type': 'Polygon',
              'arcs': [[-6780, -6726, -4163, 9144, 9145, 9146, 9147, -6914, 9148, 9149]],
              'id': '48201'
            }, {
              'type': 'Polygon',
              'arcs': [[-8110, -2290, -4581, 9150]],
              'id': '51700'
            }, {
              'type': 'Polygon',
              'arcs': [[-8865, -2814, -2086, 9151, 9152, 9153, -4960, -2421]],
              'id': '02170'
            }, {
              'type': 'Polygon',
              'arcs': [[-4605, -5175, -5166, -8210, 9154, -3349]],
              'id': '05057'
            }, {
              'type': 'Polygon',
              'arcs': [[-7369, -7418, -6432, 9155, -7531]],
              'id': '28137'
            }, {
              'type': 'Polygon',
              'arcs': [[9156, -8867, 9157, -7516]],
              'id': '36085'
            }, {
              'type': 'Polygon',
              'arcs': [[-2167, -9072, 9158, 9159, 9160, -5294]],
              'id': '38083'
            }, {
              'type': 'Polygon',
              'arcs': [[9161, -2881, -8609, 9162, -4917, -8158]],
              'id': '36111'
            }, {
              'type': 'Polygon',
              'arcs': [[-2972, -1309, -4674, -6005, 9163]],
              'id': '37059'
            }, {
              'type': 'Polygon',
              'arcs': [[-513, 9164, -6965, -7056, -5015, -280]],
              'id': '48197'
            }, {
              'type': 'Polygon',
              'arcs': [[-6030, -7653, -3944, -2247, -6946, 9165]],
              'id': '46117'
            }, {
              'type': 'Polygon',
              'arcs': [[9166, -2445, 9167, -1591, -1699, -7920]],
              'id': '29079'
            }, {
              'type': 'Polygon',
              'arcs': [[-6678, -1933, -2639, -8871, -2104, -9082]],
              'id': '39049'
            }, {
              'type': 'Polygon',
              'arcs': [[-8039, -2608, -8156, 9168, -8453, -1276, -8199, -8603]],
              'id': '06061'
            }, {
              'type': 'Polygon',
              'arcs': [[-8621, -9036, -5902, -8329, -4080, -8234]],
              'id': '20091'
            }, {
              'type': 'Polygon',
              'arcs': [[-5345, -6200, 9169, -7330, -8190, 9170]],
              'id': '09005'
            }, {
              'type': 'Polygon',
              'arcs': [[-1832, -8496, 9171, 9172, 9173, -2875, 9174]],
              'id': '01061'
            }, {
              'type': 'Polygon',
              'arcs': [[9175, -7312, -7985, 9176, -9172, -8495]],
              'id': '01069'
            }, {
              'type': 'Polygon',
              'arcs': [[-6386, 9177, 9178, -9137, -1286, -9136, -6886, -7088, -8833, -4747]],
              'id': '51077'
            }, {
              'type': 'Polygon',
              'arcs': [[-1031, -2959, -5255, -3330, -1212, -8574, 9179]],
              'id': '08063'
            }, {
              'type': 'Polygon',
              'arcs': [[-3641, -3320, -7504, 9180, -8842]],
              'id': '19133'
            }, {
              'type': 'Polygon',
              'arcs': [[-8326, -5749, -6565, 9181, -5572, -3794, -5272]],
              'id': '48351'
            }, {
              'type': 'Polygon',
              'arcs': [[9182, 9183, 9184, -6617, -6394]],
              'id': '13265'
            }, {
              'type': 'Polygon',
              'arcs': [[-539, -1942, -6961, -9165, -512, 9185]],
              'id': '40057'
            }, {
              'type': 'Polygon',
              'arcs': [[-4763, 9186, 9187, -960, -4323]],
              'id': '48349'
            }, {
              'type': 'Polygon',
              'arcs': [[9188, -4780, 9189, -5256, -4589]],
              'id': '13279'
            }, {
              'type': 'Polygon',
              'arcs': [[-2998, 9190, -9013, -7376, -4248, -3608]],
              'id': '29187'
            }, {
              'type': 'Polygon',
              'arcs': [[9191, -4156, -7509, -4668, -6820]],
              'id': '35021'
            }, {
              'type': 'Polygon',
              'arcs': [[-4687, -1533, -1477, -8376, 9192]],
              'id': '30097'
            }, {
              'type': 'Polygon',
              'arcs': [[9193, 9194, -6598, -4704, -6774, -5804]],
              'id': '21155'
            }, {
              'type': 'Polygon',
              'arcs': [[-8335, -8381, 9195, -5831, 9196, 9197, -7784]],
              'id': '47149'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9198]], [[9199, -6247, -2498, -2481, 9200, 9201]]],
              'id': '53061'
            }, {
              'type': 'Polygon',
              'arcs': [[-6289, -2461, -7487, -9035, -8619, -7697]],
              'id': '29165'
            }, {
              'type': 'Polygon',
              'arcs': [[-8276, -1909, -8992, -7345, 9202, 9203, 9204]],
              'id': '39061'
            }, {
              'type': 'Polygon',
              'arcs': [[-7155, -5005, -7786, -5566, -1456, -5540]],
              'id': '47081'
            }, {
              'type': 'Polygon',
              'arcs': [[-4765, -4743, 9205, -7055, -260, -1116]],
              'id': '48337'
            }, {
              'type': 'Polygon',
              'arcs': [[-5686, -8474, -7691, -6098, -5694]],
              'id': '49007'
            }, {
              'type': 'Polygon',
              'arcs': [[-7844, -3260, -3124, -6423, -658, -3441]],
              'id': '20041'
            }, {
              'type': 'Polygon',
              'arcs': [[-2525, -8463, -181, 9206, -8908, -1824]],
              'id': '17105'
            }, {
              'type': 'Polygon',
              'arcs': [[-5047, -2269, -3473, -6613, 9207, -3502, -4464]],
              'id': '05149'
            }, {
              'type': 'Polygon',
              'arcs': [[-5812, -7313, -4086, -2674]],
              'id': '16065'
            }, {
              'type': 'Polygon',
              'arcs': [[-3590, -646, -222, 9208, -4036, -7646]],
              'id': '13285'
            }, {
              'type': 'Polygon',
              'arcs': [[9209, -1898, -764, -8933, 9210]],
              'id': '12081'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9211, 9212, 9213, -8047, 9214]], [[9215]], [[9216, 9217]]],
              'id': '51001'
            }, {
              'type': 'Polygon',
              'arcs': [[-885, 9218, -65, -8954, -2179]],
              'id': '13289'
            }, {
              'type': 'Polygon',
              'arcs': [[-5486, -7401, -998, -5650, 9219]],
              'id': '24035'
            }, {
              'type': 'Polygon',
              'arcs': [[-3674, -8272, -6196, -5343]],
              'id': '25015'
            }, {
              'type': 'Polygon',
              'arcs': [[-4547, -5397, -6542, -3220, 9220, 9221]],
              'id': '17071'
            }, {
              'type': 'Polygon',
              'arcs': [[9222, -9127, -2235, -3923, 9223]],
              'id': '40097'
            }, {
              'type': 'Polygon',
              'arcs': [[-5179, -8324, -2935, -8323, -7029, -6255, -7068, -8596]],
              'id': '51149'
            }, {
              'type': 'Polygon',
              'arcs': [[-7449, -7456, 9224, -9073, -4519]],
              'id': '36005'
            }, {
              'type': 'Polygon',
              'arcs': [[-3505, -8098, -8927, -8914, -5170, 5168, -5168, -5174]],
              'id': '05019'
            }, {
              'type': 'Polygon',
              'arcs': [[-799, 9225, -1812, -6677, -6674, -6754, 9226]],
              'id': '39065'
            }, {
              'type': 'Polygon',
              'arcs': [[-6287, -1416, -556, -5578, -975]],
              'id': '48163'
            }, {
              'type': 'Polygon',
              'arcs': [[-9208, -6612, -2542, -8095, -3503]],
              'id': '05051'
            }, {
              'type': 'Polygon',
              'arcs': [[-156, -5640, -1600, -7302, -5253, -2957]],
              'id': '31057'
            }, {
              'type': 'Polygon',
              'arcs': [[9227, -5530, -6457, -2538, -970, -925]],
              'id': '31023'
            }, {
              'type': 'Polygon',
              'arcs': [[-7690, -1797, 9228, -1231, -6099]],
              'id': '49019'
            }, {
              'type': 'Polygon',
              'arcs': [[-8764, -4613, -6147, -8108, -7026, -4328]],
              'id': '51127'
            }, {
              'type': 'Polygon',
              'arcs': [[-9062, -4958, -2995, -8370, -2977, -8315, -9104]],
              'id': '01093'
            }, {
              'type': 'Polygon',
              'arcs': [[-8810, 9229, -753, -6800, -5976, -2301]],
              'id': '30073'
            }, {
              'type': 'Polygon',
              'arcs': [[-8155, 9230, -8450, -9169]],
              'id': '32510'
            }, {
              'type': 'Polygon',
              'arcs': [[9231, 9232, -5371, -7677]],
              'id': '12125'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-9152, -2092, 9233, 9234]], [[9235]]],
              'id': '02020'
            }, {
              'type': 'Polygon',
              'arcs': [[-7554, -3693, -5508, 9236, 9237, -4189]],
              'id': '55125'
            }, {
              'type': 'Polygon',
              'arcs': [[9238, -2606, -3283, -8959, -3105]],
              'id': '28019'
            }, {
              'type': 'Polygon',
              'arcs': [[-2380, 9239, -8235, -7443]],
              'id': '31169'
            }, {
              'type': 'Polygon',
              'arcs': [[-773, 9240, -515, 9241, -62, -5813]],
              'id': '13223'
            }, {
              'type': 'Polygon',
              'arcs': [[9242, -8533, -8479, -8529, -4501, 9243, -5619]],
              'id': '32033'
            }, {
              'type': 'Polygon',
              'arcs': [[9244, 9245, -1100, -8814, -2598, -3111]],
              'id': '48203'
            }, {
              'type': 'Polygon',
              'arcs': [[-6325, -6358, 9246, -644]],
              'id': '13113'
            }, {
              'type': 'Polygon',
              'arcs': [[-7606, -6627, -3083, 9247, -1582, -7610]],
              'id': '18059'
            }, {
              'type': 'Polygon',
              'arcs': [[-7771, -6647, 9248, -8019, -8008, 9249]],
              'id': '22025'
            }, {
              'type': 'Polygon',
              'arcs': [[9250, -7343, -8991, -7173, -6696, 9251]],
              'id': '21191'
            }, {
              'type': 'Polygon',
              'arcs': [[-3618, -9138, -9179, 9252, -7065]],
              'id': '51197'
            }, {
              'type': 'Polygon',
              'arcs': [[9253, 9254, -6861, -5874, -8730, -1497]],
              'id': '56003'
            }, {
              'type': 'Polygon',
              'arcs': [[-3773, -7020, -6031, 9255, -6590]],
              'id': '46137'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9256]], [[9257]], [[9258, 9259]]],
              'id': '25007'
            }, {
              'type': 'Polygon',
              'arcs': [[-8948, 9260, -1921, -649, -1819]],
              'id': '13157'
            }, {
              'type': 'Polygon',
              'arcs': [[-5891, 9261, -3006, -9088, -8461]],
              'id': '18111'
            }, {
              'type': 'Polygon',
              'arcs': [[9262, -4536, -8766, -8079, 9263]],
              'id': '48277'
            }, {
              'type': 'Polygon',
              'arcs': [[-7389, -2891, -9030, -1784, -8980, 9264, -3538, -7436]],
              'id': '27021'
            }, {
              'type': 'Polygon',
              'arcs': [[-1981, -1613, -1996, -3484, -821]],
              'id': '48153'
            }, {
              'type': 'Polygon',
              'arcs': [[-3082, 9265, -2855, -3860, -1583, -9248]],
              'id': '18139'
            }, {
              'type': 'Polygon',
              'arcs': [[-1300, -7717, -7272, -3019, -3018, -3017, 3015, -3015, 9266]],
              'id': '06079'
            }, {
              'type': 'Polygon',
              'arcs': [[-9033, 9267, -5157, -4789, -6414, -2527, -6560]],
              'id': '20155'
            }, {
              'type': 'Polygon',
              'arcs': [[-3180, -1042, -2695, -2686, -3595]],
              'id': '19025'
            }, {
              'type': 'Polygon',
              'arcs': [[-1788, -8913, -664, -6424]],
              'id': '27065'
            }, {
              'type': 'Polygon',
              'arcs': [[-5078, -8042, -6991, -7651, -8337, -8978]],
              'id': '42035'
            }, {
              'type': 'Polygon',
              'arcs': [[-3329, -902, 9268, -2255, -3145, -1208]],
              'id': '20109'
            }, {
              'type': 'Polygon',
              'arcs': [[-1907, -1695, 9269, -6923, 9270, -8989]],
              'id': '39027'
            }, {
              'type': 'Polygon',
              'arcs': [[-8711, -800, -9227, -6753, -1901]],
              'id': '39003'
            }, {
              'type': 'Polygon',
              'arcs': [[-4344, -2762, -8864, 9271, -6975, -834, -2022]],
              'id': '55115'
            }, {
              'type': 'Polygon',
              'arcs': [[-2238, -7805, -7818, -9086, 9272, -8202, -8515]],
              'id': '40135'
            }, {
              'type': 'Polygon',
              'arcs': [[-6996, -8287, -6049, 9273, 9274, 9275, -810, 9276, -6993, 9277]],
              'id': '47035'
            }, {
              'type': 'Polygon',
              'arcs': [[9278, -6390, -4650, -5814, -64, 9279, -7644, -3634]],
              'id': '01029'
            }, {
              'type': 'Polygon',
              'arcs': [[-84, -7317, 9280, -7365, 9281]],
              'id': '26099'
            }, {
              'type': 'Polygon',
              'arcs': [[-8444, -86, 9282, -6567, -8441, -3034]],
              'id': '26049'
            }, {
              'type': 'Polygon',
              'arcs': [[-3168, 9283, -4870, -1140, -989]],
              'id': '17007'
            }, {
              'type': 'Polygon',
              'arcs': [[-4025, -5477, -6502, 9284, -1780, -8446, -3745]],
              'id': '38053'
            }, {
              'type': 'Polygon',
              'arcs': [[-7544, -7695, -4578, -3047, -6888, -9135]],
              'id': '51141'
            }, {
              'type': 'Polygon',
              'arcs': [[-7287, -8507, 9285, -5737, -6149, 9286]],
              'id': '17003'
            }, {
              'type': 'Polygon',
              'arcs': [[-7209, -4606, -3348, -8259]],
              'id': '05133'
            }, {
              'type': 'Polygon',
              'arcs': [[-6444, 9287, -8690, 9288, -451]],
              'id': '28039'
            }, {
              'type': 'Polygon',
              'arcs': [[-6664, 9289, -8669, -8868, -9157, -7515]],
              'id': '34039'
            }, {
              'type': 'Polygon',
              'arcs': [[-4121, -4471, -4022, 9290, 9291, 9292]],
              'id': '17015'
            }, {
              'type': 'Polygon',
              'arcs': [[-3391, 9293, -3559, -8979, -1729, 9294]],
              'id': '13287'
            }, {
              'type': 'Polygon',
              'arcs': [[-8500, 9295, -9100, 9296, 9297]],
              'id': '06081'
            }, {
              'type': 'Polygon',
              'arcs': [[9298, 9299, -8854, -7225, -3073, 9300, -4778]],
              'id': '13031'
            }, {
              'type': 'Polygon',
              'arcs': [[-4831, -4122, -9293, 9301, -2682]],
              'id': '19097'
            }, {
              'type': 'Polygon',
              'arcs': [[-2160, -8504, -8712, -5265, -1233]],
              'id': '08113'
            }, {
              'type': 'Polygon',
              'arcs': [[-3780, -2755, -133, -8046, 9302]],
              'id': '48427'
            }, {
              'type': 'Polygon',
              'arcs': [[-2140, -8612, -4009, -8945, -8776]],
              'id': '13187'
            }, {
              'type': 'Polygon',
              'arcs': [[-9059, 9303, -8670, -9290, -6663, -4572, -6381]],
              'id': '34027'
            }, {
              'type': 'Polygon',
              'arcs': [[9304, -2800, -2377, -7826, -4214, -1602, -5639]],
              'id': '31063'
            }, {
              'type': 'Polygon',
              'arcs': [[-7108, -4348, -8449, -6327, -5711, -5878]],
              'id': '55033'
            }, {
              'type': 'Polygon',
              'arcs': [[-6157, 9305, -2871, -2918, -249]],
              'id': '48429'
            }, {
              'type': 'Polygon',
              'arcs': [[-9247, -6357, -8101, -2588, -2626, -6606, -217, -645]],
              'id': '13255'
            }, {
              'type': 'Polygon',
              'arcs': [[-3142, -7484, -3720, 9306, -6908]],
              'id': '39051'
            }, {
              'type': 'Polygon',
              'arcs': [[-479, -5402, -3863, -2821, 9307]],
              'id': '19037'
            }, {
              'type': 'Polygon',
              'arcs': [[-8605, -190, -2642, -2872, -6955]],
              'id': '48369'
            }, {
              'type': 'Polygon',
              'arcs': [[-2183, -1754, 9308, -3603, 9309, -3001, -5615]],
              'id': '72109'
            }, {
              'type': 'Polygon',
              'arcs': [[-5908, -1684, -5213, -5057, -3934, -1016, -5904]],
              'id': '42019'
            }, {
              'type': 'Polygon',
              'arcs': [[9310, -1637, 9311, 9312, -8757]],
              'id': '50009'
            }, {
              'type': 'Polygon',
              'arcs': [[-2688, -2697, -8899, -1295, -3335]],
              'id': '19077'
            }, {
              'type': 'Polygon',
              'arcs': [[-9095, -8219, -3381, -7051, -8531, -9243, -5618, -8884, -6827]],
              'id': '32007'
            }, {
              'type': 'Polygon',
              'arcs': [[9313, -9021, 9314, -8054, -2406, -7831]],
              'id': '01089'
            }, {
              'type': 'Polygon',
              'arcs': [[-4041, -8452, 9315, -4636, -2665, -5052, -1158, -7123, -2747]],
              'id': '06051'
            }, {
              'type': 'Polygon',
              'arcs': [[-7221, -8723, -5824, 9316]],
              'id': '06073'
            }, {
              'type': 'Polygon',
              'arcs': [[-4662, -6498, -5388, -592, -594, -3095]],
              'id': '31115'
            }, {
              'type': 'Polygon',
              'arcs': [[-8925, -5549, 9317, 9318, -5794]],
              'id': '31157'
            }, {
              'type': 'Polygon',
              'arcs': [[-718, -3310, -6978, -5986, -3771, -6969, -8445]],
              'id': '38001'
            }, {
              'type': 'Polygon',
              'arcs': [[-1193, -5199, 9319, 9320, -4228, -6296, 9321, -5496]],
              'id': '47071'
            }, {
              'type': 'Polygon',
              'arcs': [[-7956, -5994, 9322, -9245, -3110]],
              'id': '48315'
            }, {
              'type': 'Polygon',
              'arcs': [[-7807, 9323, 9324, -4006, -8611]],
              'id': '13281'
            }, {
              'type': 'Polygon',
              'arcs': [[-9204, 9325, 9326, -6872, -7433, -4515, 9327]],
              'id': '21015'
            }, {
              'type': 'Polygon',
              'arcs': [[9328, -1336, -7414, 9329, 9330]],
              'id': '26159'
            }, {
              'type': 'Polygon',
              'arcs': [[-8083, -1738, 9331, -4379, 9332, -8900]],
              'id': '48465'
            }, {
              'type': 'Polygon',
              'arcs': [[-7199, -8666, -8785, 9333, -9219, -884]],
              'id': '13319'
            }, {
              'type': 'Polygon',
              'arcs': [[-3393, 9334, -7979, 9335, -198]],
              'id': '13177'
            }, {
              'type': 'Polygon',
              'arcs': [[9336, -3076, -4486, -8987, -8671, -5257, -9190]],
              'id': '13267'
            }, {
              'type': 'Polygon',
              'arcs': [[9337, -3700, -3663, 9338, -5019, -5669]],
              'id': '23011'
            }, {
              'type': 'Polygon',
              'arcs': [[-5776, -1364, 9339, -229, -7229]],
              'id': '19189'
            }, {
              'type': 'Polygon',
              'arcs': [[-5682, -2741, -5653, -3824]],
              'id': '19059'
            }, {
              'type': 'Polygon',
              'arcs': [[-5229, -4433, -1265, 9340, -4859, -9101, -6561, -5747]],
              'id': '22069'
            }, {
              'type': 'Polygon',
              'arcs': [[9341, 9342, -158, -8398]],
              'id': '72017'
            }, {
              'type': 'Polygon',
              'arcs': [[-8857, -5817, 9343, -918, -9119]],
              'id': '31075'
            }, {
              'type': 'Polygon',
              'arcs': [[-7571, -8249, -8014, -9249, -6646]],
              'id': '22041'
            }, {
              'type': 'Polygon',
              'arcs': [[-8941, -8126, -8050, -193, -6621, -9089, -3583]],
              'id': '13197'
            }, {
              'type': 'Polygon',
              'arcs': [[-7069, -6258, -6008, -4400, -6012, -8350, -8114, -6720, -8482, -8704]],
              'id': '51175'
            }, {
              'type': 'Polygon',
              'arcs': [[-8448, -8831, -8118, 9344, -6999]],
              'id': '55121'
            }, {
              'type': 'Polygon',
              'arcs': [[9345, 9346, -8236, -7947]],
              'id': '06055'
            }, {
              'type': 'Polygon',
              'arcs': [[-3841, -8240, -1280, -6115, -3552, -2282]],
              'id': '05137'
            }, {
              'type': 'Polygon',
              'arcs': [[-1378, -6425, -667, 9347, 9348, -8651, 9349]],
              'id': '27141'
            }, {
              'type': 'Polygon',
              'arcs': [[-4882, -7994, 9350, -7648]],
              'id': '48141'
            }, {
              'type': 'Polygon',
              'arcs': [[-173, -8807, -8372, -8408]],
              'id': '54003'
            }, {
              'type': 'Polygon',
              'arcs': [[9351, -6837, -4429, 9352, -7596, -321]],
              'id': '21141'
            }, {
              'type': 'Polygon',
              'arcs': [[-468, -2323, -724, -254, -2331]],
              'id': '48081'
            }, {
              'type': 'Polygon',
              'arcs': [[-8769, 9353, -3970, -8969, -8817, -8960]],
              'id': '39079'
            }, {
              'type': 'Polygon',
              'arcs': [[-4824, 9354, -7623, -5218, 9355]],
              'id': '13039'
            }, {
              'type': 'Polygon',
              'arcs': [[-4750, -7462, -4204, -8928, -8931, -4720, -7594]],
              'id': '37011'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9356]], [[9357]], [[9358]], [[9359]], [[9360]], [[9361]], [[9362]], [[9363]], [[9364]], [[9365]], [[9366]], [[9367]], [[9368]], [[9369]], [[9370]], [[9371]], [[9372]], [[9373]], [[9374]], [[9375]], [[9376]], [[9377]], [[9378]], [[9379]], [[9380]], [[9381]], [[9382]], [[9383]], [[9384]], [[9385]], [[9386]], [[9387]], [[9388]], [[9389]], [[9390]], [[9391]], [[9392]], [[9393]], [[9394]], [[9395]], [[9396]], [[9397]], [[9398]]],
              'id': '02016'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9399]], [[9400]], [[9401]], [[9402]], [[-9234, -2091, 9403]], [[9404]], [[9405]], [[9406]], [[-4961, -9154, 9407, -2063, -2076]]],
              'id': '02122'
            }, {
              'type': 'Polygon',
              'arcs': [[-7625, 9408, -8588, -7927, 9409]],
              'id': '12031'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9410]], [[-7704, -6452, 9411]]],
              'id': '44009'
            }, {
              'type': 'Polygon',
              'arcs': [[-6467, -8404, -6346, 9412, -6535]],
              'id': '08019'
            }, {
              'type': 'Polygon',
              'arcs': [[9413, -2297, -8192, -4451, -8239, 9414]],
              'id': '29153'
            }, {
              'type': 'Polygon',
              'arcs': [[9415, -8575, -5321, -8644, 9416, -2334, -8352]],
              'id': '08061'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9417, -7563]], [[-7566, 9418, -8044]]],
              'id': '48061'
            }, {
              'type': 'Polygon',
              'arcs': [[-1537, -2298, -9414, 9419, -7726, -7265, -1689]],
              'id': '29213'
            }, {
              'type': 'Polygon',
              'arcs': [[-1393, -7959, -3930, -7953, -2358, 9420, -405]],
              'id': '40017'
            }, {
              'type': 'Polygon',
              'arcs': [[-7880, 9421, -2271, -5046, -7908]],
              'id': '05071'
            }, {
              'type': 'Polygon',
              'arcs': [[-8882, -6056, -8881, -6054, -6128, -5767, -3750]],
              'id': '47095'
            }, {
              'type': 'Polygon',
              'arcs': [[-3806, -5483, -7071, -7081, -6236, -8147]],
              'id': '51037'
            }, {
              'type': 'Polygon',
              'arcs': [[-8510, -8806, -8791, -8923, -6175]],
              'id': '05055'
            }, {
              'type': 'Polygon',
              'arcs': [[9422, -7901, 9423, -7887, 9424]],
              'id': '12129'
            }, {
              'type': 'Polygon',
              'arcs': [[9425, -3687, -1004, 9426]],
              'id': '26141'
            }, {
              'type': 'Polygon',
              'arcs': [[9427, -8427, -5886, -8460, -2523, -1573]],
              'id': '17197'
            }, {
              'type': 'Polygon',
              'arcs': [[9428]],
              'id': '72147'
            }, {
              'type': 'Polygon',
              'arcs': [[-7758, -7755, -5693, -4938, -9057, -7751]],
              'id': '54081'
            }, {
              'type': 'Polygon',
              'arcs': [[-63, -9242, -518, -6326, -648, -3589, -7645, -9280]],
              'id': '13045'
            }, {
              'type': 'Polygon',
              'arcs': [[9429, -8885, -5620, -9244, -4507, -8618, -5053, -2663, -4635]],
              'id': '32023'
            }, {
              'type': 'Polygon',
              'arcs': [[9430, -6935, 9431, 9432, -5699, -2796]],
              'id': '55039'
            }, {
              'type': 'Polygon',
              'arcs': [[-2217, -4548, -9222, 9433, -7573, -2172]],
              'id': '19111'
            }, {
              'type': 'Polygon',
              'arcs': [[9434, 9435, -9113, -6319, -8061, -7963, 9436, -7877]],
              'id': '36091'
            }, {
              'type': 'Polygon',
              'arcs': [[9437, -4105, 9438, -6733, -851, -3885]],
              'id': '22097'
            }, {
              'type': 'Polygon',
              'arcs': [[-8141, 9439, -2725, -4533, 9440, -7916]],
              'id': '40005'
            }, {
              'type': 'Polygon',
              'arcs': [[-7878, -9437, -7962, -4147]],
              'id': '36035'
            }, {
              'type': 'Polygon',
              'arcs': [[-8142, -6765, -8205, -8207, -2720, -9440, -8140]],
              'id': '40121'
            }, {
              'type': 'Polygon',
              'arcs': [[-3578, 9441, 9442, -8364, -7580, -3965, 9443]],
              'id': '39009'
            }, {
              'type': 'Polygon',
              'arcs': [[-8311, -6604, -2771, -880, 9444, -8307]],
              'id': '01131'
            }, {
              'type': 'Polygon',
              'arcs': [[9445, 9446, -6302, -5407, -5412, 9447, -2424]],
              'id': '42051'
            }, {
              'type': 'Polygon',
              'arcs': [[9448, 9449, 9450, -8056, -4955, -4174, -3624, -8368]],
              'id': '01009'
            }, {
              'type': 'Polygon',
              'arcs': [[-4413, -7168, -4054, -6482, -6615, -770, -4012]],
              'id': '13129'
            }, {
              'type': 'Polygon',
              'arcs': [[-9078, -8678, -17, 9451, -8179, -4799, -8388, -8473]],
              'id': '22095'
            }, {
              'type': 'Polygon',
              'arcs': [[-5896, -7883, -7867, -7471, -5912]],
              'id': '42069'
            }, {
              'type': 'Polygon',
              'arcs': [[-9275, 9452, -5974, 9453, -4316, 9454, -4753, 9455]],
              'id': '47145'
            }, {
              'type': 'Polygon',
              'arcs': [[-8898, 9456, -3316, -1750, -138]],
              'id': '72063'
            }, {
              'type': 'Polygon',
              'arcs': [[9457, -8837, 9458, -6690, -7019]],
              'id': '46021'
            }, {
              'type': 'Polygon',
              'arcs': [[-2118, -9005, -7196, -8734, 9459, -7788, -3331]],
              'id': '72153'
            }, {
              'type': 'Polygon',
              'arcs': [[-7355, -7348, -4855, 9460, -4102]],
              'id': '22121'
            }, {
              'type': 'Polygon',
              'arcs': [[-4418, -7612, -1563, -7769, -6543, 9461]],
              'id': '18133'
            }, {
              'type': 'Polygon',
              'arcs': [[-1182, -1151, -8523, -8562, -7657]],
              'id': '19173'
            }, {
              'type': 'Polygon',
              'arcs': [[-3652, -8293, -2676, -4091, 9462, -7301, -7660]],
              'id': '16011'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9463]], [[9464]], [[9465]], [[9466]], [[9467]], [[9468]], [[9469]], [[9470, -7555, -4187, -440, -4617]]],
              'id': '55003'
            }, {
              'type': 'Polygon',
              'arcs': [[-7000, -9345, -8121, -5596, -8420, -3313, -7485]],
              'id': '27169'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-1287]], [[9471, -7098, -7033, -2414, -5459, 9472, -7522]]],
              'id': '51165'
            }, {
              'type': 'Polygon',
              'arcs': [[9473, 9474, -4549, -7588]],
              'id': '30019'
            }, {
              'type': 'Polygon',
              'arcs': [[-7585, -5339, -3822, -3423, -8164]],
              'id': '54097'
            }, {
              'type': 'Polygon',
              'arcs': [[-8998, 9475, -7110, 9476]],
              'id': '72005'
            }, {
              'type': 'Polygon',
              'arcs': [[9477, -4193, -2476, -9457, -8897, -8894]],
              'id': '72031'
            }, {
              'type': 'Polygon',
              'arcs': [[9478, -8399, -7101, -9004, 9479]],
              'id': '72065'
            }, {
              'type': 'Polygon',
              'arcs': [[9480, -6781, -9150, 9481, -8340, -7047]],
              'id': '48473'
            }, {
              'type': 'Polygon',
              'arcs': [[-1753, -9053, -2760, 9482, -3601, -9309]],
              'id': '72151'
            }, {
              'type': 'Polygon',
              'arcs': [[-6549, -4884, -4700, -7291, -7331]],
              'id': '18147'
            }, {
              'type': 'Polygon',
              'arcs': [[-8391, 9483, -9427, -1003, -1598, -7477]],
              'id': '26031'
            }, {
              'type': 'Polygon',
              'arcs': [[-9163, -8608, -5346, -9171, -8189, -8185, -4918]],
              'id': '36027'
            }, {
              'type': 'Polygon',
              'arcs': [[-5535, -4688, -9193, -8375, 9484, -1495]],
              'id': '30067'
            }, {
              'type': 'Polygon',
              'arcs': [[-6563, -9103, -3882, -8166, 9485]],
              'id': '22003'
            }, {
              'type': 'Polygon',
              'arcs': [[-2943, -1052, -340, 9486, -2964]],
              'id': '28101'
            }, {
              'type': 'Polygon',
              'arcs': [[-4103, -9461, -4854, -9079, -7857, -4839, 9487]],
              'id': '22047'
            }, {
              'type': 'Polygon',
              'arcs': [[-3610, -4251, -6655, -9116, 9488, -6657, -8355]],
              'id': '29223'
            }, {
              'type': 'Polygon',
              'arcs': [[-7907, -532, -3735, -7560, -7057, -6963]],
              'id': '40141'
            }, {
              'type': 'Polygon',
              'arcs': [[-759, 9489, -3716, -6310, 9490, -6303, -365]],
              'id': '36011'
            }, {
              'type': 'Polygon',
              'arcs': [[-7806, -7737, -7814, 9491, -9324]],
              'id': '13241'
            }, {
              'type': 'Polygon',
              'arcs': [[-3988, -4449, -5423, -4570, -7371, -7530, -8826, -8827, -613]],
              'id': '05035'
            }, {
              'type': 'Polygon',
              'arcs': [[-9173, -9177, -7984, -849, -7894, -7833, -2464, -3850, 9492]],
              'id': '12063'
            }, {
              'type': 'Polygon',
              'arcs': [[9493, -6863, -145, -2471, -7679, -3478, -4740]],
              'id': '72021'
            }, {
              'type': 'Polygon',
              'arcs': [[-3480, -7681, -141, -2182, -1121, -3290]],
              'id': '72041'
            }, {
              'type': 'Polygon',
              'arcs': [[-4800, -4225, -7832, -2409, 9494, -2992, -4957]],
              'id': '01079'
            }, {
              'type': 'Polygon',
              'arcs': [[-8468, -4311, 9495, 9496, 9497]],
              'id': '21215'
            }, {
              'type': 'Polygon',
              'arcs': [[-8629, 9498, -639, -8028, -8586]],
              'id': '53067'
            }, {
              'type': 'Polygon',
              'arcs': [[9499, 9500, -3678, -7551, -267, -1453]],
              'id': '46011'
            }, {
              'type': 'Polygon',
              'arcs': [[-5834, -5840, -685, -9025, -9018]],
              'id': '47061'
            }, {
              'type': 'Polygon',
              'arcs': [[-7062, -1673, -6101, -8557, 9501]],
              'id': '48025'
            }, {
              'type': 'Polygon',
              'arcs': [[9502, 9503, -9143, -4849, 9504]],
              'id': '24017'
            }, {
              'type': 'Polygon',
              'arcs': [[-5893, -5911, -7016, -6987, 9505]],
              'id': '42113'
            }, {
              'type': 'Polygon',
              'arcs': [[-2292, -8109]],
              'id': '51830'
            }, {
              'type': 'Polygon',
              'arcs': [[-8765, -7958, 9506, -2365]],
              'id': '48449'
            }, {
              'type': 'Polygon',
              'arcs': [[-2366, -9507, -7957, -3108, -6704]],
              'id': '48063'
            }, {
              'type': 'Polygon',
              'arcs': [[9507, -5836, -9023, 9508]],
              'id': '47127'
            }, {
              'type': 'Polygon',
              'arcs': [[9509, -7917, -9441, -4537, -9263, 9510, 9511]],
              'id': '40013'
            }, {
              'type': 'Polygon',
              'arcs': [[-2391, -116, -6782, -9481, -7046, -8063]],
              'id': '48185'
            }, {
              'type': 'Polygon',
              'arcs': [[-7892, 7890, -7890, -2114, -7307, -7897, -9423, 9512]],
              'id': '12073'
            }, {
              'type': 'Polygon',
              'arcs': [[-91, -9106, 9513, -2602, 9514]],
              'id': '28025'
            }, {
              'type': 'Polygon',
              'arcs': [[-6232, -8564, 9515, -4628, -4210, -8321]],
              'id': '29087'
            }, {
              'type': 'Polygon',
              'arcs': [[-7459, 9516, -6669, -8890, -8962, 9517]],
              'id': '36029'
            }, {
              'type': 'Polygon',
              'arcs': [[-8465, -3051, -7402, -9139, -2989]],
              'id': '16087'
            }, {
              'type': 'Polygon',
              'arcs': [[-6591, -9256, -9166, -6945, -6091, -4971]],
              'id': '46055'
            }, {
              'type': 'Polygon',
              'arcs': [[-8203, -9273, -9087, -4466, -7208, -8258, -2722, -8206]],
              'id': '40079'
            }, {
              'type': 'Polygon',
              'arcs': [[-6059, -8970, -6530, 9518, -8405, -5592, -5334]],
              'id': '54099'
            }, {
              'type': 'Polygon',
              'arcs': [[-7547, 9519, -3748, -6250, -5122, -303]],
              'id': '30079'
            }, {
              'type': 'Polygon',
              'arcs': [[9520, -7971, 9521, -2703]],
              'id': '12033'
            }, {
              'type': 'Polygon',
              'arcs': [[-9334, -8784, 9522, -8719, -8771, -66]],
              'id': '13175'
            }, {
              'type': 'Polygon',
              'arcs': [[9523, -2823, -228, -3325, -889]],
              'id': '19023'
            }, {
              'type': 'Polygon',
              'arcs': [[9524, -5449, 9525, -500, 9526, -6209, -3543, -7709]],
              'id': '41065'
            }, {
              'type': 'Polygon',
              'arcs': [[-6089, -5083, -7848, -1661, -6582, 9527]],
              'id': '31027'
            }, {
              'type': 'Polygon',
              'arcs': [[-9068, 9528, -9112, -7589, 9529, -8269, 9530]],
              'id': '33011'
            }, {
              'type': 'Polygon',
              'arcs': [[-8551, -6033, -5528, -8855, -9300, 9531]],
              'id': '13251'
            }, {
              'type': 'Polygon',
              'arcs': [[-8843, -9181, -7505, -5441, -6456, -1062]],
              'id': '31021'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-4495, 4492, -4494, -4493, -4492, 9532, -9212, 9533]], [[-9218, 9534]], [[-5305, 9535]]],
              'id': '24039'
            }, {
              'type': 'Polygon',
              'arcs': [[-4491, 9536, 9537, -9213, -9533]],
              'id': '24047'
            }, {
              'type': 'Polygon',
              'arcs': [[9538, -492, -9024, -6499, -5475, -6891]],
              'id': '38013'
            }, {
              'type': 'Polygon',
              'arcs': [[9539, 9540, 9541, -5889]],
              'id': '18127'
            }, {
              'type': 'Polygon',
              'arcs': [[-8330, -6650, -1995, -2280, -308, -7440]],
              'id': '29083'
            }, {
              'type': 'Polygon',
              'arcs': [[-6309, 9542, -8135, -8058, -7146, -6304, -9491]],
              'id': '36023'
            }, {
              'type': 'Polygon',
              'arcs': [[-3054, -4085, -5543, -9094, 9543]],
              'id': '16001'
            }, {
              'type': 'Polygon',
              'arcs': [[-2939, -4236, -1173, 9544, -1815]],
              'id': '17175'
            }, {
              'type': 'Polygon',
              'arcs': [[-9160, 9545, -2694, -2230, 9546, 9547]],
              'id': '38043'
            }, {
              'type': 'Polygon',
              'arcs': [[-6215, -7066, -9253, -9178, -6385, 9548]],
              'id': '51173'
            }, {
              'type': 'Polygon',
              'arcs': [[9549, -2013, -8786, -6337, -6618, -9185]],
              'id': '13301'
            }, {
              'type': 'Polygon',
              'arcs': [[-7172, 9550, -5970, -5771, -6698]],
              'id': '21201'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9551]], [[9552]], [[-1778, -2415, -519, 9553]], [[9554]], [[9555]]],
              'id': '02180'
            }, {
              'type': 'Polygon',
              'arcs': [[-2340, -3612, -1077, -466, 9556]],
              'id': '48415'
            }, {
              'type': 'Polygon',
              'arcs': [[9557, -8560, -8755, -9134, -129, -934]],
              'id': '48249'
            }, {
              'type': 'Polygon',
              'arcs': [[-9240, -2621, -7954, -3067]],
              'id': '31095'
            }, {
              'type': 'Polygon',
              'arcs': [[-8380, -6902, -5841, -5832, -9196]],
              'id': '47015'
            }, {
              'type': 'Polygon',
              'arcs': [[-3474, -1293, -2229, -7608, 9558, -6636]],
              'id': '18017'
            }, {
              'type': 'Polygon',
              'arcs': [[-9476, -8997, -7005, -8739, -7111]],
              'id': '72099'
            }, {
              'type': 'Polygon',
              'arcs': [[-9519, -6529, -9055, -7759, -7749, -7117, -8406]],
              'id': '54043'
            }, {
              'type': 'Polygon',
              'arcs': [[9559, -8168, -599, -2801, -9305, -5638, -7421, 9560]],
              'id': '31111'
            }, {
              'type': 'Polygon',
              'arcs': [[-8635, -3249, 9561, 9562, 9563, -7378, -9012]],
              'id': '17157'
            }, {
              'type': 'Polygon',
              'arcs': [[-9433, 9564, -5606, -1511, -5700]],
              'id': '55131'
            }, {
              'type': 'Polygon',
              'arcs': [[-5494, 9565, 9566, -6240]],
              'id': '11001'
            }, {
              'type': 'Polygon',
              'arcs': [[9567, 9568, -5113, -7094, -6144]],
              'id': '51119'
            }, {
              'type': 'Polygon',
              'arcs': [[-3287, 9569, -4871, -2648, -2735]],
              'id': '31061'
            }, {
              'type': 'Polygon',
              'arcs': [[-7325, -5519, -3990, -9098, 9570, -8497, 9571]],
              'id': '06001'
            }, {
              'type': 'Polygon',
              'arcs': [[-6241, -9567, 9572, 9573]],
              'id': '51510'
            }, {
              'type': 'Polygon',
              'arcs': [[-6172, 9574, 9575, -2428, -1952]],
              'id': '05079'
            }, {
              'type': 'Polygon',
              'arcs': [[-6808, 9576, -2455, 9577, -5503, -8283, -8944, -4682]],
              'id': '37141'
            }, {
              'type': 'Polygon',
              'arcs': [[-6199, -8466, -7702, -5315, -7327, -9170]],
              'id': '09003'
            }, {
              'type': 'Polygon',
              'arcs': [[-4177, 9578, -8425, -4867]],
              'id': '17097'
            }, {
              'type': 'Polygon',
              'arcs': [[-6821, -1659, -5531, -9228, -924, -6822, -235, -4627]],
              'id': '31141'
            }, {
              'type': 'Polygon',
              'arcs': [[-6630, -3102, 9579, 9580, -4114, -2653]],
              'id': '20081'
            }, {
              'type': 'Polygon',
              'arcs': [[-3154, -2835, -2726, -5032, -7557, -3800]],
              'id': '48135'
            }, {
              'type': 'Polygon',
              'arcs': [[-310, -2279, -6118, 9581, 9582]],
              'id': '29085'
            }, {
              'type': 'Polygon',
              'arcs': [[-7082, -7073, 9583, -8598, -8703, -8480, -8393]],
              'id': '51025'
            }, {
              'type': 'Polygon',
              'arcs': [[-2810, -9308, -9524, -2532]],
              'id': '19067'
            }, {
              'type': 'Polygon',
              'arcs': [[9584]],
              'id': '51600'
            }, {
              'type': 'Polygon',
              'arcs': [[-5548, -8859, -9122, 9585, 9586, -9318]],
              'id': '31123'
            }, {
              'type': 'Polygon',
              'arcs': [[9587, -1514, -8094, -4179, -4866, -9284, -3167]],
              'id': '55127'
            }, {
              'type': 'Polygon',
              'arcs': [[-9301, -3077, -9337, -4779]],
              'id': '13043'
            }, {
              'type': 'Polygon',
              'arcs': [[-1251, -3153, -1179, 9588, -8411, -2147, 9589]],
              'id': '17115'
            }, {
              'type': 'Polygon',
              'arcs': [[-901, -3270, -2717, -2753, -1565, -377, -2256, -9269]],
              'id': '20063'
            }, {
              'type': 'Polygon',
              'arcs': [[-7999, -8410, -8691, -9288, -6443]],
              'id': '28041'
            }, {
              'type': 'Polygon',
              'arcs': [[9590, -2827, -2804, 9591, -9562, -3248]],
              'id': '17189'
            }, {
              'type': 'Polygon',
              'arcs': [[9592, -325, -746, -3343, -3659, -3699]],
              'id': '23019'
            }, {
              'type': 'Polygon',
              'arcs': [[-2589, -2544, -431, -4186, -6022, 9593]],
              'id': '55001'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9594]], [[9595]], [[-9289, -8689, 9596, -8075, -452]]],
              'id': '28059'
            }, {
              'type': 'Polygon',
              'arcs': [[9597, -1733, 9598, 9599, -7304, -7983]],
              'id': '13071'
            }, {
              'type': 'Polygon',
              'arcs': [[-4945, -8262, -6398, -8208, -1018, -3936, 9600, -9446, -2423]],
              'id': '42125'
            }, {
              'type': 'Polygon',
              'arcs': [[-7400, 9601, -9537, -4490, -5308, -1000]],
              'id': '10005'
            }, {
              'type': 'Polygon',
              'arcs': [[-3122, 9602, -5663, -7550, -3321, -2557, -6422]],
              'id': '20197'
            }, {
              'type': 'Polygon',
              'arcs': [[-5522, -5515, -7178, -5943, 9603, -3487]],
              'id': '21157'
            }, {
              'type': 'Polygon',
              'arcs': [[-7781, 9604, -5336, -5145, -5584, -6585, -6817]],
              'id': '21175'
            }, {
              'type': 'Polygon',
              'arcs': [[-1340, -6689, -6838, -9352, -320, 9605, -5134]],
              'id': '21177'
            }, {
              'type': 'Polygon',
              'arcs': [[-9353, -4428, -8178, -5856, -7597]],
              'id': '21213'
            }, {
              'type': 'Polygon',
              'arcs': [[-4202, -1975, -2976, -5061, -8929]],
              'id': '37035'
            }, {
              'type': 'Polygon',
              'arcs': [[-7467, -7968, -7913, -7986, -7729, -6813]],
              'id': '40103'
            }, {
              'type': 'Polygon',
              'arcs': [[-4736, 9606, -3633, -8779, 9607, -6260]],
              'id': '53013'
            }, {
              'type': 'Polygon',
              'arcs': [[-9487, -8022, -7996, 9608, 9609]],
              'id': '28061'
            }, {
              'type': 'Polygon',
              'arcs': [[-7500, -5675, -4887, -4844, -1185, -3257]],
              'id': '17033'
            }, {
              'type': 'Polygon',
              'arcs': [[-4976, -609, -1455, -3157, -7206, -1450]],
              'id': '46005'
            }, {
              'type': 'Polygon',
              'arcs': [[-9307, -3726, -6931, -8710, -1084, -6909]],
              'id': '39069'
            }, {
              'type': 'Polygon',
              'arcs': [[-9083, -2108, -8767, -6924, -9270, -1694]],
              'id': '39047'
            }, {
              'type': 'Polygon',
              'arcs': [[-3081, -1217, 9610, -2849, -9266]],
              'id': '18041'
            }, {
              'type': 'Polygon',
              'arcs': [[-7961, -6718, -2370, -2386]],
              'id': '48379'
            }, {
              'type': 'Polygon',
              'arcs': [[-5329, -712, -7535, -2446, -9167, -7919]],
              'id': '29129'
            }, {
              'type': 'Polygon',
              'arcs': [[9611, -400, -699, 9612, 9613]],
              'id': '38027'
            }, {
              'type': 'Polygon',
              'arcs': [[-3158, -603, -8860, -1419, -2094]],
              'id': '46061'
            }, {
              'type': 'Polygon',
              'arcs': [[-1888, 9614, -8788, -8489, -2885]],
              'id': '39109'
            }, {
              'type': 'Polygon',
              'arcs': [[-1117, -264, -8424, 9615, -2551, -2868]],
              'id': '48367'
            }, {
              'type': 'Polygon',
              'arcs': [[9616, -1119, -2867, -9306, -6156]],
              'id': '48503'
            }, {
              'type': 'Polygon',
              'arcs': [[-6885, 9617, -8956, -4217, -6725, -831]],
              'id': '48373'
            }, {
              'type': 'Polygon',
              'arcs': [[-6564, -9486, -8167, -5570, -9182]],
              'id': '22011'
            }, {
              'type': 'Polygon',
              'arcs': [[-8486, -4597, -8702, -357, -4383, 9618, -5365]],
              'id': '49033'
            }, {
              'type': 'Polygon',
              'arcs': [[-2505, -3814, 9619, -5445, 9620, -8029, -637]],
              'id': '53077'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9621]], [[-3724, 9622, 9623, -3225, -6929]]],
              'id': '39123'
            }, {
              'type': 'Polygon',
              'arcs': [[-4542, -5952, -5187, 9624, -7381, -5181]],
              'id': '17013'
            }, {
              'type': 'Polygon',
              'arcs': [[-7158, -7236, -4157, -9192, -6819, -5980]],
              'id': '35007'
            }, {
              'type': 'Polygon',
              'arcs': [[-7034, -629, -7203, -6497, -4660, -5815]],
              'id': '31103'
            }, {
              'type': 'Polygon',
              'arcs': [[-1499, -8732, -8869]],
              'id': '56017'
            }, {
              'type': 'Polygon',
              'arcs': [[-8506, -5524, -6184, -5738, -9286]],
              'id': '21007'
            }, {
              'type': 'Polygon',
              'arcs': [[9625, -7041, -1748, -5270, -8955, -9618, -6884, -7022]],
              'id': '48005'
            }, {
              'type': 'Polygon',
              'arcs': [[-5191, -6078, -5277, -4899, -5097, 9626]],
              'id': '45015'
            }, {
              'type': 'Polygon',
              'arcs': [[-931, 9627, -9500, -1452, -607]],
              'id': '46057'
            }, {
              'type': 'Polygon',
              'arcs': [[-4697, -4292, -6129, 9628, -8761, -5954]],
              'id': '45037'
            }, {
              'type': 'Polygon',
              'arcs': [[-1414, -7063, -9502, -8561, -9558, -933, -3570]],
              'id': '48297'
            }, {
              'type': 'Polygon',
              'arcs': [[-1388, 9629, -865, -8879, -6269]],
              'id': '27121'
            }, {
              'type': 'Polygon',
              'arcs': [[9630, 9631, -8360, -9443, 9632]],
              'id': '39115'
            }, {
              'type': 'Polygon',
              'arcs': [[9633]],
              'id': '60040'
            }, {
              'type': 'Polygon',
              'arcs': [[9634, -5450, -9525, -7708, -8281]],
              'id': '41027'
            }, {
              'type': 'Polygon',
              'arcs': [[-311, -9583, 9635, -7640, 9636, -1978]],
              'id': '29167'
            }, {
              'type': 'Polygon',
              'arcs': [[9637, -2311, 9638, -942, -1717]],
              'id': '48115'
            }, {
              'type': 'Polygon',
              'arcs': [[-2425, -9448, -5415, -7627, -7577, -3294]],
              'id': '54061'
            }, {
              'type': 'Polygon',
              'arcs': [[-3244, -6158, -247, -3962, -2355]],
              'id': '48207'
            }, {
              'type': 'Polygon',
              'arcs': [[-245, -2312, -9638, -1716, -508]],
              'id': '48445'
            }, {
              'type': 'Polygon',
              'arcs': [[-7561, -4766, -1114, -9617, -1096]],
              'id': '48009'
            }, {
              'type': 'Polygon',
              'arcs': [[-1363, -6570, -2811, -2530, -9340]],
              'id': '19195'
            }, {
              'type': 'Polygon',
              'arcs': [[-7988, -6775, -4709, -7176, -4832, -5754]],
              'id': '21001'
            }, {
              'type': 'Polygon',
              'arcs': [[-6536, -9413, -6353, -2345, 9639, 9640, 9641]],
              'id': '08093'
            }, {
              'type': 'Polygon',
              'arcs': [[-6131, 9642, 9643, -5192, -9627, -5096, -6898, -1407, 9644]],
              'id': '45075'
            }, {
              'type': 'Polygon',
              'arcs': [[9645, -6537, -9642, 9646, -8639]],
              'id': '08065'
            }, {
              'type': 'Polygon',
              'arcs': [[-8819, -8971, -6061, 9647, -5433]],
              'id': '21089'
            }, {
              'type': 'Polygon',
              'arcs': [[-9492, -7813, 9648, 9649, -8946, -4007, -9325]],
              'id': '13137'
            }, {
              'type': 'Polygon',
              'arcs': [[-3579, -9444, -3964, -3971, -9354, -8768]],
              'id': '39163'
            }, {
              'type': 'Polygon',
              'arcs': [[-8852, -99, -1808, -9226, -798]],
              'id': '39175'
            }, {
              'type': 'Polygon',
              'arcs': [[-4655, -7847, -8982, -5131, -6859, -9255, 9650]],
              'id': '30003'
            }, {
              'type': 'Polygon',
              'arcs': [[-4530, -4255, -2513, -8021, 9651]],
              'id': '28037'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9652]], [[-6020, 9653]]],
              'id': '51683'
            }, {
              'type': 'Polygon',
              'arcs': [[-4754, -9455, -4320, 9654, -5656, -7628]],
              'id': '47107'
            }, {
              'type': 'Polygon',
              'arcs': [[9655, -463, -8169, -9560, 9656, -920]],
              'id': '31117'
            }, {
              'type': 'Polygon',
              'arcs': [[-6811, -8144, -8148, -6759]],
              'id': '40133'
            }, {
              'type': 'Polygon',
              'arcs': [[-5013, -2373, -8011, 9657, -6179, 9658, -9187, -4762]],
              'id': '48213'
            }, {
              'type': 'Polygon',
              'arcs': [[-8812, -8841, -8846, -5292, -6206, 9659, -7743]],
              'id': '50001'
            }, {
              'type': 'Polygon',
              'arcs': [[9660, -9586, -9121, -8660, 9661, 9662, -3918]],
              'id': '31033'
            }, {
              'type': 'Polygon',
              'arcs': [[9663, -323, -7600, 9664, -5002, -4638, -6951]],
              'id': '47125'
            }, {
              'type': 'Polygon',
              'arcs': [[9665, 9666, -4325, -6904, -1128, -705, -3037]],
              'id': '48035'
            }, {
              'type': 'Polygon',
              'arcs': [[9667, -5541, -1459, -8024, -4222, -9321]],
              'id': '47181'
            }, {
              'type': 'Polygon',
              'arcs': [[-6967, -3941, -7213, 9668, 9669, -4289, -4696]],
              'id': '45071'
            }, {
              'type': 'Polygon',
              'arcs': [[-5880, -940, -8661, -7510, -4154]],
              'id': '48205'
            }, {
              'type': 'Polygon',
              'arcs': [[-442, -4191, -1490, -4346, -7107]],
              'id': '55107'
            }, {
              'type': 'Polygon',
              'arcs': [[-3429, 9670, -6298, -9061, -6428, -5678]],
              'id': '28117'
            }, {
              'type': 'Polygon',
              'arcs': [[-2962, 9671, -1855, -3640, -4787]],
              'id': '19035'
            }, {
              'type': 'Polygon',
              'arcs': [[-3101, -1047, -7182, 9672, 9673, -9580]],
              'id': '20119'
            }, {
              'type': 'Polygon',
              'arcs': [[-3410, -540, -9186, -511, -1686, -1382]],
              'id': '48087'
            }, {
              'type': 'Polygon',
              'arcs': [[-7093, -8599, -9584, -7072, -5481]],
              'id': '51135'
            }, {
              'type': 'Polygon',
              'arcs': [[-2637, 9674, -9633, -9442, -3577, -8872]],
              'id': '39127'
            }, {
              'type': 'Polygon',
              'arcs': [[-3714, -7734, -7868, -8133, -9543, -6308]],
              'id': '36053'
            }, {
              'type': 'Polygon',
              'arcs': [[-3010, -5937, -5826, -8414, -8580]],
              'id': '18171'
            }, {
              'type': 'Polygon',
              'arcs': [[-8653, -859, -3239, -3531, -349]],
              'id': '27085'
            }, {
              'type': 'Polygon',
              'arcs': [[-2553, 9675, -9666, -3036]],
              'id': '48425'
            }, {
              'type': 'Polygon',
              'arcs': [[-1887, -6676, -6680, -9081, -8789, -9615]],
              'id': '39021'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9676, -8536]], [[9677, 9678, 9679, -8534, 9680, -8542]]],
              'id': '12086'
            }, {
              'type': 'Polygon',
              'arcs': [[-9532, -9299, -4777, -8552]],
              'id': '13165'
            }, {
              'type': 'Polygon',
              'arcs': [[-5926, 9681, -408, -1804, 9682, -6942]],
              'id': '40043'
            }, {
              'type': 'Polygon',
              'arcs': [[-2398, 9683, 9684, -7052, -9206, -4742]],
              'id': '40085'
            }, {
              'type': 'Polygon',
              'arcs': [[-4591, -5260, -8974, -6483, -3436]],
              'id': '13005'
            }, {
              'type': 'Polygon',
              'arcs': [[-326, -9593, -3698]],
              'id': '23021'
            }, {
              'type': 'Polygon',
              'arcs': [[9685, 9686, -1935, -9091]],
              'id': '39085'
            }, {
              'type': 'Polygon',
              'arcs': [[-6068, -8343, -9041, 9687, -2790]],
              'id': '48089'
            }, {
              'type': 'Polygon',
              'arcs': [[-5780, -5560, -6841, -6038]],
              'id': '21131'
            }, {
              'type': 'Polygon',
              'arcs': [[-3998, -8604, -8197, -8237, -9347, 9688]],
              'id': '06113'
            }, {
              'type': 'Polygon',
              'arcs': [[-9233, 9689, -7930, 9690, -5372]],
              'id': '12007'
            }, {
              'type': 'Polygon',
              'arcs': [[-9115, -5062, -2974, -2832, 9691, -5719, -4904]],
              'id': '37119'
            }, {
              'type': 'Polygon',
              'arcs': [[-8909, -9207, -186, 9692, -1175, -3152, -1249, -1875]],
              'id': '17113'
            }, {
              'type': 'Polygon',
              'arcs': [[-4363, -8282, -7706, -6767, 9693]],
              'id': '41067'
            }, {
              'type': 'Polygon',
              'arcs': [[-7429, -4419, -9462, -6546, -3454, -5674]],
              'id': '18021'
            }, {
              'type': 'Polygon',
              'arcs': [[-9188, -9659, -6183, -7059, -961]],
              'id': '48161'
            }, {
              'type': 'Polygon',
              'arcs': [[-7374, 9694, -5666, 9695, -9141, 9696]],
              'id': '24003'
            }, {
              'type': 'Polygon',
              'arcs': [[-8891, -2929, -8043, -5076, -5110, -9123]],
              'id': '42083'
            }, {
              'type': 'Polygon',
              'arcs': [[-1706, -7576, -9065, -2778, 9697, -3463]],
              'id': '29103'
            }, {
              'type': 'Polygon',
              'arcs': [[-2740, -7231, -3178, -5654]],
              'id': '19147'
            }, {
              'type': 'Polygon',
              'arcs': [[-3464, -9698, -2782, -8525, -5100, 9698]],
              'id': '29121'
            }, {
              'type': 'Polygon',
              'arcs': [[-2604, 9699, -8320, -7261, 9700, -3284]],
              'id': '28103'
            }, {
              'type': 'Polygon',
              'arcs': [[-6440, -6793, -2634, -7823, 9701, -4253]],
              'id': '28077'
            }, {
              'type': 'Polygon',
              'arcs': [[-1879, -4406, -1032, -9180, -8576, -9416, -8351, -8358]],
              'id': '08073'
            }, {
              'type': 'Polygon',
              'arcs': [[-6415, -5430, 9702, -3062, -737]],
              'id': '20077'
            }, {
              'type': 'Polygon',
              'arcs': [[-226, -6554, -1869, -777, -3326]],
              'id': '19171'
            }, {
              'type': 'Polygon',
              'arcs': [[-9514, -9105, -8317, -8318, -9700, -2603]],
              'id': '28087'
            }, {
              'type': 'Polygon',
              'arcs': [[-1608, -1979, -9637, -7643, 9703, -4110]],
              'id': '29057'
            }, {
              'type': 'Polygon',
              'arcs': [[-2310, -2341, -9557, -465, -6783, -9639]],
              'id': '48033'
            }, {
              'type': 'Polygon',
              'arcs': [[-5655, -3181, -3594, -9672]],
              'id': '19021'
            }, {
              'type': 'Polygon',
              'arcs': [[-6192, -1405, -5542, -9668, -9320, -5198]],
              'id': '47039'
            }, {
              'type': 'Polygon',
              'arcs': [[-7403, -3055, -9544, -9093, -9140]],
              'id': '16027'
            }, {
              'type': 'Polygon',
              'arcs': [[-4254, -9702, -7822, -8377, -2162]],
              'id': '28147'
            }, {
              'type': 'Polygon',
              'arcs': [[-9069, -9531, -8268, -3672, -4927]],
              'id': '33005'
            }, {
              'type': 'Polygon',
              'arcs': [[-9168, -2444, -3465, -9699, -5099, -1592]],
              'id': '29115'
            }, {
              'type': 'Polygon',
              'arcs': [[-6943, -9683, -1807, -534, -3409, -2623]],
              'id': '40129'
            }, {
              'type': 'Polygon',
              'arcs': [[9704, -6024, -7853, 9705, -2838, -4622]],
              'id': '55111'
            }, {
              'type': 'Polygon',
              'arcs': [[-9102, -7772, -9250, -8007, -7358, -4106, -9438, -3884]],
              'id': '22009'
            }, {
              'type': 'Polygon',
              'arcs': [[-4111, -9704, -7642, -1539, -1688, 9706, -1650]],
              'id': '29109'
            }, {
              'type': 'Polygon',
              'arcs': [[-1080, -8292, -4031, 9707, -5391]],
              'id': '37127'
            }, {
              'type': 'Polygon',
              'arcs': [[-499, -6072, -2102, 9708, -6210, -9527]],
              'id': '41069'
            }, {
              'type': 'Polygon',
              'arcs': [[-5434, -9648, -6060, -5332, 9709, -7779]],
              'id': '21043'
            }, {
              'type': 'Polygon',
              'arcs': [[-6037, 9710, -6602, -8920, -5065, -4989]],
              'id': '37115'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-6019, -6021, -9654], [-9653]], [[-3767, 9711, 9712, 9713, -9014, -8129]]],
              'id': '51153'
            }, {
              'type': 'Polygon',
              'arcs': [[-8418, -8214, 9714, -9108]],
              'id': '34007'
            }, {
              'type': 'Polygon',
              'arcs': [[-9613, -698, -2692, 9715]],
              'id': '38031'
            }, {
              'type': 'Polygon',
              'arcs': [[-7100, -7079, -6216, -9549, -6389, -1631, -6786]],
              'id': '51167'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9716]], [[9717]], [[-8973, -5139, -7933, 9718, -1667]]],
              'id': '26041'
            }, {
              'type': 'Polygon',
              'arcs': [[-6730, -4425, -7333, -4478, -7840, -4473, -6359, -73]],
              'id': '18175'
            }, {
              'type': 'Polygon',
              'arcs': [[-4670, -7514, -4257, -5928, -2948]],
              'id': '35019'
            }, {
              'type': 'Polygon',
              'arcs': [[-6411, -2852, -9205, -9328, -4514]],
              'id': '18029'
            }, {
              'type': 'Polygon',
              'arcs': [[-9203, -7344, -9251, 9719, -9326]],
              'id': '21117'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9720]], [[-9339, -3662, -7363, 9721, -5020]]],
              'id': '23015'
            }, {
              'type': 'Polygon',
              'arcs': [[-8737, -7493, -3431, -5677, -7417]],
              'id': '28009'
            }, {
              'type': 'Polygon',
              'arcs': [[-103, -745, -3184, -3825, -8813, -6124]],
              'id': '19119'
            }, {
              'type': 'Polygon',
              'arcs': [[-7086, 9722, -5852, 9723, -5378, 9724]],
              'id': '21049'
            }, {
              'type': 'Polygon',
              'arcs': [[9725, 9726, -6046, 9727, -2830]],
              'id': '37167'
            }, {
              'type': 'Polygon',
              'arcs': [[-9197, -5830, -9508, 9728, 9729]],
              'id': '47003'
            }, {
              'type': 'Polygon',
              'arcs': [[-5462, -5960, -3397, -5479, -3804, 9730]],
              'id': '51029'
            }, {
              'type': 'Polygon',
              'arcs': [[-9420, -9415, -8241, -3839, -7727]],
              'id': '05089'
            }, {
              'type': 'Polygon',
              'arcs': [[-8563, -6280, -3889, -6288, -4629, -9516]],
              'id': '29003'
            }, {
              'type': 'Polygon',
              'arcs': [[-2979, -8369, -3628, -9060, -8312, -4600, -8319]],
              'id': '01125'
            }, {
              'type': 'Polygon',
              'arcs': [[9731, -6864, -9494, -4739, -2477, -1758]],
              'id': '72135'
            }, {
              'type': 'Polygon',
              'arcs': [[-5196, -6035, -4987, -6693, -5073]],
              'id': '47063'
            }, {
              'type': 'Polygon',
              'arcs': [[-3813, -4738, -6262, 9732, -6070, -5446, -9620]],
              'id': '53005'
            }, {
              'type': 'Polygon',
              'arcs': [[-8986, -4484, 9733, -4822, -8673]],
              'id': '13191'
            }, {
              'type': 'Polygon',
              'arcs': [[-4880, -5040, -8357, -3233, -7992]],
              'id': '48109'
            }, {
              'type': 'Polygon',
              'arcs': [[-2011, -8762, -9629, -6134, -8549, -8787]],
              'id': '13245'
            }, {
              'type': 'Polygon',
              'arcs': [[-9604, -5942, -6952, -6193, -3488]],
              'id': '21035'
            }, {
              'type': 'Polygon',
              'arcs': [[9734, -5632, -9010, -9110, -9529, -9067]],
              'id': '33013'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-4161, 9735]], [[9736, -6917]], [[-9148, 9146, -9146, 9737, -6915]]],
              'id': '48167'
            }, {
              'type': 'Polygon',
              'arcs': [[-9319, -9587, -9661, -3917, 9738, -5795]],
              'id': '31007'
            }, {
              'type': 'Polygon',
              'arcs': [[-2540, -3361, -6173, -1950, -8926, -8096]],
              'id': '05053'
            }, {
              'type': 'Polygon',
              'arcs': [[9739, -5248, 9740, -4512, 9741, -5243]],
              'id': '34033'
            }, {
              'type': 'Polygon',
              'arcs': [[-6981, -9694, -6770, -8228, -8520, 9742]],
              'id': '41057'
            }, {
              'type': 'Polygon',
              'arcs': [[-7744, -9660, -6208, -8748, -9114, -9436, 9743]],
              'id': '36115'
            }, {
              'type': 'Polygon',
              'arcs': [[9744, -7497, -2888, -2261]],
              'id': '27077'
            }, {
              'type': 'Polygon',
              'arcs': [[-8257, -7162, -1867, -1027, -4405, -8294, -6350]],
              'id': '08001'
            }, {
              'type': 'Polygon',
              'arcs': [[9745, -3999, -9689, -9346, -7946, -7720]],
              'id': '06033'
            }, {
              'type': 'Polygon',
              'arcs': [[-8936, -8985, -2014, -9550, -9184, 9746]],
              'id': '13317'
            }, {
              'type': 'Polygon',
              'arcs': [[-5102, -8527, -6797, -1541, 9747]],
              'id': '29089'
            }, {
              'type': 'Polygon',
              'arcs': [[-6772, 9748, -5203, -3547, -240, -6984]],
              'id': '42011'
            }, {
              'type': 'Polygon',
              'arcs': [[9749, -5990, -6097, -8286, -3509]],
              'id': '47087'
            }, {
              'type': 'Polygon',
              'arcs': [[9750, -6026, -147, -7766, -159, -9343]],
              'id': '72091'
            }, {
              'type': 'Polygon',
              'arcs': [[-3060, -8165, -3421, -8995, -6856, -7076]],
              'id': '54007'
            }, {
              'type': 'Polygon',
              'arcs': [[-7171, 9751, -8616, -5437, -5967, -9551]],
              'id': '21161'
            }, {
              'type': 'Polygon',
              'arcs': [[9752, -9330, -7413, -9128, 9753]],
              'id': '26021'
            }, {
              'type': 'Polygon',
              'arcs': [[-9693, -185, -8581, -5146, -1176]],
              'id': '17019'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-7204]], [[-824]], [[-4609, -7523, -9473, -5458, 9754, -8799, -7747]]],
              'id': '51015'
            }, {
              'type': 'Polygon',
              'arcs': [[-3365, -6461, -3847, -7322, 9755, -9575, -6171]],
              'id': '05001'
            }, {
              'type': 'Polygon',
              'arcs': [[-8655, -9043, -2181, -8953, -9045, -8125]],
              'id': '13079'
            }, {
              'type': 'Polygon',
              'arcs': [[-3458, -6629, -6547, -6407, -4889]],
              'id': '18027'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9756]], [[9757, -7184]], [[-4727, 9758]], [[-7188, 9759]]],
              'id': '37055'
            }, {
              'type': 'Polygon',
              'arcs': [[-4026, -3743, -9520, -7546]],
              'id': '30021'
            }, {
              'type': 'Polygon',
              'arcs': [[-8221, -707, -1131, -1724, -6082, -7025]],
              'id': '48281'
            }, {
              'type': 'Polygon',
              'arcs': [[-7633, -6226, -1765, 9760, -7899]],
              'id': '12123'
            }, {
              'type': 'Polygon',
              'arcs': [[9761, -7166, -4411]],
              'id': '13047'
            }, {
              'type': 'Polygon',
              'arcs': [[-772, -6267, -6321, -516, -9241]],
              'id': '13067'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-4841, -7862, -4350]], [[-4104, -9488, -4838, -6734, -9439]]],
              'id': '22099'
            }, {
              'type': 'Polygon',
              'arcs': [[-7507, -3446, 9762, -7825, -2433, -8610, -7527]],
              'id': '28135'
            }, {
              'type': 'Polygon',
              'arcs': [[-9582, -6117, -1590, -912, -7641, -9636]],
              'id': '29059'
            }, {
              'type': 'Polygon',
              'arcs': [[-4030, -4262, -5299, -4675, -5392, -9708]],
              'id': '37195'
            }, {
              'type': 'Polygon',
              'arcs': [[-1645, -6229, -401, -9612, 9763, -9070]],
              'id': '38005'
            }, {
              'type': 'Polygon',
              'arcs': [[-9670, 9764, 9765, -9643, -6130, -4290]],
              'id': '45063'
            }, {
              'type': 'Polygon',
              'arcs': [[-1737, -2837, -2924, -8716, -1911, -4380, -9332]],
              'id': '48137'
            }, {
              'type': 'Polygon',
              'arcs': [[-4414, -4010, -4648, -4458]],
              'id': '13055'
            }, {
              'type': 'Polygon',
              'arcs': [[9766, -3550, -7315, 9767, 9768]],
              'id': '24025'
            }, {
              'type': 'Polygon',
              'arcs': [[-5865, -5946, -6881, -5208, -4282, -5200, -5092]],
              'id': '45069'
            }, {
              'type': 'Polygon',
              'arcs': [[-3070, -7802, -5664, -9603, -3121, -3259]],
              'id': '20161'
            }, {
              'type': 'Polygon',
              'arcs': [[-5854, -7419, -1624, -1332, -9329, 9769]],
              'id': '26005'
            }, {
              'type': 'Polygon',
              'arcs': [[-6795, -5350, -5470, -5117, -7774]],
              'id': '29051'
            }, {
              'type': 'Polygon',
              'arcs': [[-7911, -7967, 9770, 9771, -3926, -4277, -2784]],
              'id': '40143'
            }, {
              'type': 'Polygon',
              'arcs': [[-3777, -8476, -6204, -5381, -1928, 9772]],
              'id': '48187'
            }, {
              'type': 'Polygon',
              'arcs': [[-8758, -9313, 9773, -8847, -8839, -2579]],
              'id': '50005'
            }, {
              'type': 'Polygon',
              'arcs': [[-5701, -1515, -9588, -3166, -7854]],
              'id': '55055'
            }, {
              'type': 'Polygon',
              'arcs': [[-8162, 9774, -5238, 9775, 9776]],
              'id': '42001'
            }, {
              'type': 'Polygon',
              'arcs': [[-6418, -7845, -3439, -3449, -8231, -8738]],
              'id': '20105'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-9202, 9777]], [[9778]]],
              'id': '53029'
            }, {
              'type': 'Polygon',
              'arcs': [[9779, -5000, -6090, -9528, -6581, -669, -5387, -7202]],
              'id': '31107'
            }, {
              'type': 'Polygon',
              'arcs': [[-8887, -8153, 9780, -4633, -9316, -8451, -9231]],
              'id': '32019'
            }, {
              'type': 'Polygon',
              'arcs': [[-7780, -9710, -5331, -9605]],
              'id': '21063'
            }, {
              'type': 'Polygon',
              'arcs': [[-4714, -5380, -4690, -6840, -6594, 9781]],
              'id': '21079'
            }, {
              'type': 'Polygon',
              'arcs': [[-5779, -5152, -5847, -6784, -5562]],
              'id': '21133'
            }, {
              'type': 'Polygon',
              'arcs': [[-3129, -4794, 9782, -7335, -7446]],
              'id': '21223'
            }, {
              'type': 'Polygon',
              'arcs': [[-4319, -6189, -8264, -8265, -5657, -9655]],
              'id': '47123'
            }, {
              'type': 'Polygon',
              'arcs': [[-2403, -8069, -8131, -2411, -7032]],
              'id': '51113'
            }, {
              'type': 'Polygon',
              'arcs': [[-7237, -3499, -1371, -2824, -9591, -3247]],
              'id': '17027'
            }, {
              'type': 'Polygon',
              'arcs': [[-4819, 9783, -9679, 9784, -8983]],
              'id': '12011'
            }, {
              'type': 'Polygon',
              'arcs': [[-9581, -9674, 9785, -7013, -4115]],
              'id': '20175'
            }, {
              'type': 'Polygon',
              'arcs': [[-8010, -8815, -7042, -9626, -7021, -6180, -9658]],
              'id': '48073'
            }, {
              'type': 'Polygon',
              'arcs': [[-9756, -7321, -3681, -7601, -2429, -9576]],
              'id': '05041'
            }, {
              'type': 'Polygon',
              'arcs': [[-9463, -4090, -4592, -8488, -8602, -7298]],
              'id': '16029'
            }, {
              'type': 'Polygon',
              'arcs': [[-4677, -3909, -4315, -2456, -9577, -6807]],
              'id': '37061'
            }, {
              'type': 'Polygon',
              'arcs': [[-8232, -3452, -9034, -6558, -6732, -6552]],
              'id': '20009'
            }, {
              'type': 'Polygon',
              'arcs': [[-1806, 9786, -7905, -536]],
              'id': '40149'
            }, {
              'type': 'Polygon',
              'arcs': [[-7279, -6469, -6538, -9646, -8638, -1794]],
              'id': '08037'
            }, {
              'type': 'Polygon',
              'arcs': [[-2110, -8907, -5909, -5906, -7712, -8223]],
              'id': '39099'
            }, {
              'type': 'Polygon',
              'arcs': [[-5263, 9787, -8555, -8174, -8102, -4948]],
              'id': '01087'
            }, {
              'type': 'Polygon',
              'arcs': [[-8573, -1903, -6755, -2884, -488]],
              'id': '39107'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-9585]], [[-3766, -5495, -6243, -3138, -6242, -9574, 9788, -9503, 9789, -9713, -9712]]],
              'id': '51059'
            }, {
              'type': 'Polygon',
              'arcs': [[-9238, 9790, -4341, -1462, -4190]],
              'id': '55085'
            }, {
              'type': 'Polygon',
              'arcs': [[-8781, -2986, -2097, 9791]],
              'id': '41061'
            }, {
              'type': 'Polygon',
              'arcs': [[-6132, -9645, -1410, -6032, -8550]],
              'id': '45011'
            }, {
              'type': 'Polygon',
              'arcs': [[9792, -362, -8475, -5684]],
              'id': '49051'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9793]], [[9794]], [[9795]], [[-6292, -8327, 9796]], [[9797]]],
              'id': '26089'
            }, {
              'type': 'Polygon',
              'arcs': [[-7574, -9434, -9221, -3224, -5488, -8950, -9064]],
              'id': '17067'
            }, {
              'type': 'Polygon',
              'arcs': [[9798, -5966, -1552, 9799, -1520]],
              'id': '51193'
            }, {
              'type': 'Polygon',
              'arcs': [[-3636, -7647, -4039, -8556, -9788, -5262, -8332]],
              'id': '01123'
            }, {
              'type': 'Polygon',
              'arcs': [[-1732, -8701, -8938, 9800, -9599]],
              'id': '13075'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9801]], [[-5417, 9802]], [[9803]]],
              'id': '26083'
            }, {
              'type': 'Polygon',
              'arcs': [[-3285, -9701, -7260, -336, -1051]],
              'id': '28069'
            }, {
              'type': 'Polygon',
              'arcs': [[-1086, -8709, -1899, -2202]],
              'id': '39125'
            }, {
              'type': 'Polygon',
              'arcs': [[-6036, -1487, -7595, -4723, -6599, -9711]],
              'id': '47171'
            }, {
              'type': 'Polygon',
              'arcs': [[-9189, -4588, -8721, 9804]],
              'id': '13209'
            }, {
              'type': 'Polygon',
              'arcs': [[-9600, -9801, -8940, -7630, -7898, -7305]],
              'id': '13027'
            }, {
              'type': 'Polygon',
              'arcs': [[-3919, -9663, 9805, -2955, -2956, -1029, -1866, -7161]],
              'id': '08075'
            }, {
              'type': 'Polygon',
              'arcs': [[-1809, -97, -6790, -947, -1931]],
              'id': '39117'
            }, {
              'type': 'Polygon',
              'arcs': [[-9049, -1926, 9806, -9631, -9675, -2636]],
              'id': '39119'
            }, {
              'type': 'Polygon',
              'arcs': [[-8853, -4915, 9807, -7227]],
              'id': '13051'
            }, {
              'type': 'Polygon',
              'arcs': [[-9048, -9052, -1849, -7309, 9808, -8682]],
              'id': '13061'
            }, {
              'type': 'Polygon',
              'arcs': [[-9662, -8659, -7422, -2952, -9806]],
              'id': '08115'
            }, {
              'type': 'Polygon',
              'arcs': [[-3857, -7341, -8649, -9080, -1896, 9809, -3041]],
              'id': '12105'
            }, {
              'type': 'Polygon',
              'arcs': [[9810, -9511, -9264, -8078, -2383, -5025]],
              'id': '48147'
            }, {
              'type': 'Polygon',
              'arcs': [[-6185, -3491, -7638, -6126, -6052, -5740]],
              'id': '21105'
            }, {
              'type': 'Polygon',
              'arcs': [[-9020, -9027, -7977, -4456, -8055, -9315]],
              'id': '01071'
            }, {
              'type': 'Polygon',
              'arcs': [[-8942, -3581, -8171, -8554, 9811]],
              'id': '13215'
            }, {
              'type': 'Polygon',
              'arcs': [[9812, -9291, -4021, -8279, -4234, -2937, -8707]],
              'id': '17195'
            }, {
              'type': 'Polygon',
              'arcs': [[9813, -9084, -8647, -2507, -8088]],
              'id': '12009'
            }, {
              'type': 'Polygon',
              'arcs': [[-3392, -9295, -1734, -9598, -7982, -7980, -9335]],
              'id': '13321'
            }, {
              'type': 'Polygon',
              'arcs': [[-8975, -8674, -4825, -9356, -5217, -6485]],
              'id': '13025'
            }, {
              'type': 'Polygon',
              'arcs': [[-1805, -406, -9421, -2362, -528, -7906, -9787]],
              'id': '40015'
            }, {
              'type': 'Polygon',
              'arcs': [[9814, -9729, -9509, -9022, -9314, -7830, -1091]],
              'id': '47103'
            }, {
              'type': 'Polygon',
              'arcs': [[-6921, -4946, -3299, -7539, -8362, 9815]],
              'id': '39111'
            }, {
              'type': 'Polygon',
              'arcs': [[9816, -4620, -8120, -8830]],
              'id': '55081'
            }, {
              'type': 'Polygon',
              'arcs': [[-6376, -3915, -4911, -3938, -7843]],
              'id': '45021'
            }, {
              'type': 'Polygon',
              'arcs': [[-5507, -5215, -208, -8861, -4342, -9791, -9237]],
              'id': '55041'
            }, {
              'type': 'Polygon',
              'arcs': [[-806, -7087, -9725, -5377, -4712, 9817]],
              'id': '21067'
            }, {
              'type': 'Polygon',
              'arcs': [[-394, -4131, -6522, -6667, -9517, -7458]],
              'id': '36037'
            }, {
              'type': 'Polygon',
              'arcs': [[9818, 9819, 9820, -6592, -9195]],
              'id': '21229'
            }, {
              'type': 'Polygon',
              'arcs': [[-8291, 9821, -6848, 9822, -4263, -4028]],
              'id': '37117'
            }, {
              'type': 'Polygon',
              'arcs': [[-3372, -7842, -7015, -4032, -5879, -4152]],
              'id': '40025'
            }, {
              'type': 'Polygon',
              'arcs': [[-5211, -6314, -5274, -6077, -4284]],
              'id': '45067'
            }, {
              'type': 'Polygon',
              'arcs': [[-877, -8485, -1833, -9175, -2874, -315, 9823, -6608]],
              'id': '01039'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9824]], [[9825]], [[-7271, -2008, -7219, 9826, -7216]]],
              'id': '06037'
            }, {
              'type': 'Polygon',
              'arcs': [[-8939, -7142, -7675, -7351, -7632]],
              'id': '12047'
            }, {
              'type': 'Polygon',
              'arcs': [[-7274, -8984, -9785, -9678, -8541, 9827]],
              'id': '12021'
            }, {
              'type': 'Polygon',
              'arcs': [[-2898, -6227, -1326, -9125, -5007, 9828, -6273]],
              'id': '20125'
            }, {
              'type': 'Polygon',
              'arcs': [[-3232, -6228, -5558, -7247, -4066, -5950, -862]],
              'id': '17193'
            }, {
              'type': 'Polygon',
              'arcs': [[-503, -1651, -9707, -1691, -7264, -4229]],
              'id': '29009'
            }, {
              'type': 'Polygon',
              'arcs': [[-85, -9282, -7364, -1616, -6568, -9283]],
              'id': '26125'
            }, {
              'type': 'Polygon',
              'arcs': [[-5598, -4624, -7667, -8051, -5401]],
              'id': '19005'
            }, {
              'type': 'Polygon',
              'arcs': [[-6274, -9829, -5011, 9829, -9771, -7966]],
              'id': '40147'
            }, {
              'type': 'Polygon',
              'arcs': [[9830, -4585, -6496, -6798, -6316]],
              'id': '30005'
            }, {
              'type': 'Polygon',
              'arcs': [[-5965, 9831, -1554]],
              'id': '51103'
            }, {
              'type': 'Polygon',
              'arcs': [[-7410, -6486, -5220, -7626, -9410, -7931, -9690, -9232, -7676]],
              'id': '12003'
            }, {
              'type': 'Polygon',
              'arcs': [[-1264, -8113, -6649, -7770, -4856, -9341]],
              'id': '22127'
            }, {
              'type': 'Polygon',
              'arcs': [[-7785, -9198, -9730, -9815, -1090, -5568]],
              'id': '47117'
            }, {
              'type': 'Polygon',
              'arcs': [[-1521, -9800, -1556, 9832, -9568, -6143, -5725]],
              'id': '51057'
            }, {
              'type': 'Polygon',
              'arcs': [[-490, -2883, -1213, -3080, -9029]],
              'id': '18135'
            }, {
              'type': 'Polygon',
              'arcs': [[9833, -749, -9230, -8809]],
              'id': '30101'
            }, {
              'type': 'Polygon',
              'arcs': [[-3701, -9338, -5668, -5996, 9834]],
              'id': '23007'
            }, {
              'type': 'Polygon',
              'arcs': [[-1329, -1135, -5426, -2705, 9835, -1622]],
              'id': '26045'
            }, {
              'type': 'Polygon',
              'arcs': [[-8600, -1252, -9590, -2150, -7128, -3027, -5323, -5284]],
              'id': '17167'
            }, {
              'type': 'Polygon',
              'arcs': [[9836, -4096, 9837, -9259]],
              'id': '25001'
            }, {
              'type': 'Polygon',
              'arcs': [[9838, -6892, -5478, -4550, -9475]],
              'id': '30091'
            }, {
              'type': 'Polygon',
              'arcs': [[-7513, -8606, -6953, -1021, -8247, -8924, -4259]],
              'id': '35041'
            }, {
              'type': 'Polygon',
              'arcs': [[-9703, -5429, -7468, -6812, -3063]],
              'id': '40053'
            }, {
              'type': 'Polygon',
              'arcs': [[-8161, 9839, -3551, -9767, 9840, -5239, -9775]],
              'id': '42133'
            }, {
              'type': 'Polygon',
              'arcs': [[-1773, -6396, -6616, -7200, -882, -9092]],
              'id': '13237'
            }, {
              'type': 'Polygon',
              'arcs': [[-9649, -7812, -8902, 9841]],
              'id': '13257'
            }, {
              'type': 'Polygon',
              'arcs': [[-9650, -9842, -8903, -1916, -9261, -8947]],
              'id': '13011'
            }, {
              'type': 'Polygon',
              'arcs': [[-5890, -9542, -1580, -3476, -6638, -3007, -9262]],
              'id': '18073'
            }, {
              'type': 'Polygon',
              'arcs': [[-3442, -663, -5155, -9268, -9032, -3450]],
              'id': '20113'
            }, {
              'type': 'Polygon',
              'arcs': [[-9265, -8981, -6426, -1380, 9842, -3539]],
              'id': '27097'
            }, {
              'type': 'Polygon',
              'arcs': [[-5233, -7183, -1081, -5390, -7145, -5574]],
              'id': '37183'
            }, {
              'type': 'Polygon',
              'arcs': [[-3685, -7529, -6580, -7191, -7838, -7602]],
              'id': '28151'
            }, {
              'type': 'Polygon',
              'arcs': [[-9302, -9292, -9813, -8706, -7248, -294, -2683]],
              'id': '19045'
            }, {
              'type': 'Polygon',
              'arcs': [[-7745, -9744, -9435, -7876]],
              'id': '36113'
            }, {
              'type': 'Polygon',
              'arcs': [[-9445, -879, -6610, 9843, -2701, -8308]],
              'id': '01099'
            }, {
              'type': 'Polygon',
              'arcs': [[-5576, -7144, -6875]],
              'id': '37105'
            }, {
              'type': 'Polygon',
              'arcs': [[-9841, -9769, 9844, -5667, -9695, -7373, -5240]],
              'id': '24005'
            }, {
              'type': 'Polygon',
              'arcs': [[-9026, -683, -812, 9845, -4756, -7629, -9762, -4410, -7976]],
              'id': '47065'
            }, {
              'type': 'Polygon',
              'arcs': [[-170, 9846, -9776, -5242, -7372, -5491, -3764]],
              'id': '24021'
            }, {
              'type': 'Polygon',
              'arcs': [[-5769, -1559, -5406, -5421, -4445]],
              'id': '47097'
            }, {
              'type': 'Polygon',
              'arcs': [[-8134, -7870, -50, -2882, -9162, -8157, -7865, -8060]],
              'id': '36025'
            }, {
              'type': 'Polygon',
              'arcs': [[-4172, -6391, -9279, -3638, -8331, -8225]],
              'id': '01121'
            }, {
              'type': 'Polygon',
              'arcs': [[-1623, -9836, -2710, -3140, -1196, -1334]],
              'id': '26025'
            }, {
              'type': 'Polygon',
              'arcs': [[-8640, -9647, -9641, 9847, -6472, -7133]],
              'id': '08015'
            }, {
              'type': 'Polygon',
              'arcs': [[-1178, -5148, 9848, -8412, -9589]],
              'id': '17139'
            }, {
              'type': 'Polygon',
              'arcs': [[-9156, -6436, -7824, -9763, -3445, -7532]],
              'id': '28107'
            }, {
              'type': 'Polygon',
              'arcs': [[-8403, -8717, -6085, -1998]],
              'id': '30039'
            }, {
              'type': 'Polygon',
              'arcs': [[-9749, -6771, -4998, -9107, -6447, -5204]],
              'id': '42091'
            }, {
              'type': 'Polygon',
              'arcs': [[-8338, -6940, -5884, 9849, -5708, -5161, -6075]],
              'id': '42061'
            }, {
              'type': 'Polygon',
              'arcs': [[-8341, -9482, -9149, -6913, -9039]],
              'id': '48157'
            }, {
              'type': 'Polygon',
              'arcs': [[-6211, -9709, -2101, -4366, -6823]],
              'id': '41013'
            }, {
              'type': 'Polygon',
              'arcs': [[-8290, -8483, -6724, 9850, -6849, -9822]],
              'id': '37015'
            }, {
              'type': 'Polygon',
              'arcs': [[-8829, -2590, -9594, -9705, -4621, -9817]],
              'id': '55057'
            }, {
              'type': 'Polygon',
              'arcs': [[-2397, -7918, -9510, 9851, -9684]],
              'id': '40095'
            }, {
              'type': 'Polygon',
              'arcs': [[-1721, -693, -8196, -8070, -8145, -4371]],
              'id': '48331'
            }, {
              'type': 'Polygon',
              'arcs': [[-6294, -4243, -2895, -1349, -584]],
              'id': '26165'
            }, {
              'type': 'Polygon',
              'arcs': [[-9164, -6004, -9726, -2829, -2973]],
              'id': '37159'
            }, {
              'type': 'Polygon',
              'arcs': [[-807, -9818, -4711, 9852, 9853, -2775]],
              'id': '21239'
            }, {
              'type': 'Polygon',
              'arcs': [[-7180, -7289, -5923, -5924, -6941, 9854]],
              'id': '40059'
            }, {
              'type': 'Polygon',
              'arcs': [[-836, -6977, -6936, -9431, -2795, -428]],
              'id': '55139'
            }, {
              'type': 'Polygon',
              'arcs': [[-5135, -9606, -319, -9664, -6950, -5940, -6588]],
              'id': '21047'
            }, {
              'type': 'Polygon',
              'arcs': [[-3135, -816, -9076, -2671, -5573, -1202]],
              'id': '37001'
            }, {
              'type': 'Polygon',
              'arcs': [[-9724, -5851, -1316, -3868, -5379]],
              'id': '21065'
            }, {
              'type': 'Polygon',
              'arcs': [[-3935, -5060, -6682, -3524, -6301, -9447, -9601]],
              'id': '42129'
            }, {
              'type': 'Polygon',
              'arcs': [[-6201, -5103, -9748, -1540, -1992, -5465]],
              'id': '29195'
            }, {
              'type': 'Polygon',
              'arcs': [[9855, -756, -8994, -5707, -928, -605, -4975]],
              'id': '46037'
            }, {
              'type': 'Polygon',
              'arcs': [[9856, -7724, -3778, -9773, -1927, -1411, -6286]],
              'id': '48029'
            }, {
              'type': 'Polygon',
              'arcs': [[-1743, -8801, -4772, -8137, -8146, -8031, -7693, 9857]],
              'id': '51019'
            }, {
              'type': 'Polygon',
              'arcs': [[-8990, -9271, -6928, -8613, -9752, -7170]],
              'id': '39015'
            }, {
              'type': 'Polygon',
              'arcs': [[-9733, -6261, -9608, -8782, -9792, -2096, -6071]],
              'id': '41059'
            }, {
              'type': 'Polygon',
              'arcs': [[-436, -5975, -9453, -9274, -6048]],
              'id': '47129'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-7656, -2933]], [[-8365, -1744, -9858, -7692, -7542, -4732]]],
              'id': '51161'
            }, {
              'type': 'Polygon',
              'arcs': [[-8965, -9016]],
              'id': '51630'
            }, {
              'type': 'Polygon',
              'arcs': [[-8693, -1727, -5825, -5311, -734, 9858, -8624]],
              'id': '53063'
            }, {
              'type': 'Polygon',
              'arcs': [[-8363, -7540, -7537, -7582]],
              'id': '54073'
            }, {
              'type': 'Polygon',
              'arcs': [[9859, -9480, -9003, -7008, -9002]],
              'id': '72027'
            }, {
              'type': 'Polygon',
              'arcs': [[-9786, -9673, -7181, -9855, -6944, -1220, -6107, -7014]],
              'id': '40007'
            }, {
              'type': 'Polygon',
              'arcs': [[-3948, -6843, 9860, -2714, -5071, -8577, -6512]],
              'id': '47025'
            }, {
              'type': 'Polygon',
              'arcs': [[-1236, -6110, -5237, -4936, -6300, -4809, -6462, -5758]],
              'id': '04001'
            }, {
              'type': 'Polygon',
              'arcs': [[-9209, -221, -8943, -9812, -8553, -4037]],
              'id': '13145'
            }, {
              'type': 'Polygon',
              'arcs': [[-7834, -7893, -9513, -9425, -7886, -7895]],
              'id': '12077'
            }, {
              'type': 'Polygon',
              'arcs': [[-8470, -8077, 9861, 9862]],
              'id': '28045'
            }, {
              'type': 'Polygon',
              'arcs': [[9863, -4897, -7778, -8906, -1936, -9687]],
              'id': '39007'
            }, {
              'type': 'Polygon',
              'arcs': [[-2224, -6534, -3995, -9746, -7719]],
              'id': '06021'
            }, {
              'type': 'Polygon',
              'arcs': [[-9124, -7394, -8725, -9126, -9223, 9864, -5009]],
              'id': '40035'
            }, {
              'type': 'Polygon',
              'arcs': [[-7285, -8904, -7470, -5300, -8505]],
              'id': '17087'
            }, {
              'type': 'Polygon',
              'arcs': [[-7388, 7386, -7386, 7384, -7384, 7382, -7382, -9625, -5186, -7239, -8676, -3890, -1303]],
              'id': '29183'
            }, {
              'type': 'Polygon',
              'arcs': [[9865, -2900, -6276, -7965, -7465, -5427]],
              'id': '20035'
            }, {
              'type': 'Polygon',
              'arcs': [[-7604, -3872, -7569, -8295]],
              'id': '22123'
            }, {
              'type': 'Polygon',
              'arcs': [[9866, -9547, -2234, -8838, -9458, -7018, -5984, -4268]],
              'id': '38029'
            }, {
              'type': 'Polygon',
              'arcs': [[-6659, 9867, -8804, -8508, -8967]],
              'id': '29181'
            }, {
              'type': 'Polygon',
              'arcs': [[-9099, -209, -1298, 9868, -9297]],
              'id': '06087'
            }, {
              'type': 'Polygon',
              'arcs': [[-4467, -4046, -3025, -7718, 9869]],
              'id': '06023'
            }, {
              'type': 'Polygon',
              'arcs': [[-8836, -346, 9870, -2518, -6691, -9459]],
              'id': '46089'
            }, {
              'type': 'Polygon',
              'arcs': [[-1106, -8625, -9859, -733, -8646, -7792, 9871, -3630, -9607, -4735]],
              'id': '53075'
            }, {
              'type': 'Polygon',
              'arcs': [[9872, -8694, -8622, -4165]],
              'id': '53019'
            }, {
              'type': 'Polygon',
              'arcs': [[-6622, -199, -9336, -7978, -1851, -9051]],
              'id': '13273'
            }, {
              'type': 'Polygon',
              'arcs': [[-651, -1920, -8937, -9747, -9183, -6393, -9044]],
              'id': '13221'
            }, {
              'type': 'Polygon',
              'arcs': [[-8374, -4656, -9651, -9254, -1496, -9485]],
              'id': '30009'
            }, {
              'type': 'Polygon',
              'arcs': [[-5730, -5796, -9739, -3921, -7160, -8333, -5455]],
              'id': '56021'
            }, {
              'type': 'Polygon',
              'arcs': [[-655, -1585, -3862, -81, -6729, -7137]],
              'id': '18005'
            }, {
              'type': 'Polygon',
              'arcs': [[-9327, -9720, -9252, -6695, -803, -6845, -6873]],
              'id': '21081'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9873]], [[-9624, 9874, -8919, -4272, -3226]]],
              'id': '39043'
            }, {
              'type': 'Polygon',
              'arcs': [[9875, -9853, -4715, -9782, -6593, -9821]],
              'id': '21167'
            }, {
              'type': 'Polygon',
              'arcs': [[-7499, -7503, -2131, -8834, -1008, -37]],
              'id': '27027'
            }, {
              'type': 'Polygon',
              'arcs': [[-6002, -6818, -5848, -9723, -7085]],
              'id': '21173'
            }, {
              'type': 'Polygon',
              'arcs': [[-6003, -1205, -6878, -5862, -9727]],
              'id': '37123'
            }, {
              'type': 'Polygon',
              'arcs': [[-9349, 9876, -7685, -9028, -8957, -856, -8652]],
              'id': '27053'
            }, {
              'type': 'Polygon',
              'arcs': [[-4300, -6506, -1342, -5133, -6587, -6042]],
              'id': '21233'
            }, {
              'type': 'Polygon',
              'arcs': [[9877, -9754, -9129, -1576, -9541]],
              'id': '18091'
            }, {
              'type': 'Polygon',
              'arcs': [[-2719, -6372, 9878, -2546, -1323]],
              'id': '20011'
            }, {
              'type': 'Polygon',
              'arcs': [[-9692, -2831, -9728, -6045, -5090, -5720]],
              'id': '37179'
            }, {
              'type': 'Polygon',
              'arcs': [[-8243, 9879, -4725, -8439]],
              'id': '51810'
            }, {
              'type': 'Polygon',
              'arcs': [[-8863, 9880, -7127, -870, -6933, -6976, -9272]],
              'id': '55009'
            }, {
              'type': 'Polygon',
              'arcs': [[-9848, -9640, -2344, -8359, -3273, -8353, -6473]],
              'id': '08043'
            }, {
              'type': 'Polygon',
              'arcs': [[9881, -9609, -8000, -6441, -8025, -7923]],
              'id': '28067'
            }, {
              'type': 'Polygon',
              'arcs': [[-1971, -390, -7442, -7797, -4872, -9570]],
              'id': '31181'
            }, {
              'type': 'Polygon',
              'arcs': [[-8440, -4729, 9882, -8127, -8116, -8349]],
              'id': '37029'
            }, {
              'type': 'Polygon',
              'arcs': [[-9616, -8423, -4764, -4321, -9667, -9676, -2552]],
              'id': '48251'
            }, {
              'type': 'Polygon',
              'arcs': [[-1796, -8641, -7131, -6355, -2156, -9229]],
              'id': '08077'
            }, {
              'type': 'Polygon',
              'arcs': [[-5978, -6799, -5718, -4685, -1984]],
              'id': '30013'
            }, {
              'type': 'Polygon',
              'arcs': [[-5156, -661, -1127, -376, -2901, -9866, -4791]],
              'id': '20015'
            }, {
              'type': 'Polygon',
              'arcs': [[-6501, -5297, -5932, -9017, -1781, -9285]],
              'id': '38025'
            }, {
              'type': 'Polygon',
              'arcs': [[-5585, -4384, -363, -9793, -5683, -8532]],
              'id': '49035'
            }, {
              'type': 'Polygon',
              'arcs': [[-7054, 9883, -5028, -8733, -8421, -262]],
              'id': '48121'
            }, {
              'type': 'Polygon',
              'arcs': [[-2243, -4758, -126, -702, -1423, -5001, -9780, -7201, -627]],
              'id': '46023'
            }, {
              'type': 'Polygon',
              'arcs': [[-9755, -5463, -9731, -3803, -4769, -8800]],
              'id': '51125'
            }, {
              'type': 'Polygon',
              'arcs': [[-7683, -3291, -1124, 9884, -119, -4182, -6222]],
              'id': '72043'
            }, {
              'type': 'Polygon',
              'arcs': [[-9071, -9764, -9614, -9716, -2691, -9546, -9159]],
              'id': '38103'
            }, {
              'type': 'Polygon',
              'arcs': [[9885, -6865, -9732, -1757]],
              'id': '72051'
            }, {
              'type': 'Polygon',
              'arcs': [[-1816, -9545, -1172, -8910, -1873, -4125]],
              'id': '17143'
            }, {
              'type': 'Polygon',
              'arcs': [[-6449, -9109, -9715, -8218, -4508, -9741, -5247]],
              'id': '34015'
            }, {
              'type': 'Polygon',
              'arcs': [[-666, -5766, -5732, -7686, -9877, -9348]],
              'id': '27003'
            }, {
              'type': 'Polygon',
              'arcs': [[-345, -7787, -757, -9856, -4974, -8023, -2519, -9871]],
              'id': '46013'
            }, {
              'type': 'Polygon',
              'arcs': [[-5921, -3065, -6815, -1390, -403, -9682, -5925]],
              'id': '40093'
            }, {
              'type': 'Polygon',
              'arcs': [[-930, -5706, -5356, -8100, -3679, -9501, -9628]],
              'id': '46039'
            }, {
              'type': 'Polygon',
              'arcs': [[-2016, 9886]],
              'id': '02230'
            }, {
              'type': 'Polygon',
              'arcs': [[-1633, -6388, -6168, -6387, -4745, -7593, -1485, -5194]],
              'id': '47163'
            }, {
              'type': 'Polygon',
              'arcs': [[-6508, -5555, 9887]],
              'id': '44001'
            }, {
              'type': 'Polygon',
              'arcs': [[-8578, -5075, -6694, -5614, -6186, -4317, -9454, -5973]],
              'id': '47093'
            }, {
              'type': 'Polygon',
              'arcs': [[-8870, -828, -1484, -5457, -471, -7278, -8601, -6014]],
              'id': '56007'
            }, {
              'type': 'Polygon',
              'arcs': [[-5648, -6985, -242, -3546, -9840, -8160, -8802]],
              'id': '42043'
            }, {
              'type': 'Polygon',
              'arcs': [[-7668]],
              'id': '51580'
            }, {
              'type': 'Polygon',
              'arcs': [[-2839, -9706, -7856, -8883, -8875, -8001]],
              'id': '55049'
            }, {
              'type': 'Polygon',
              'arcs': [[-6997, -9278, -6994, -9277, -809, -681, -5839]],
              'id': '47175'
            }, {
              'type': 'Polygon',
              'arcs': [[-2922, -7725, -9857, -6285, -1913, -8715]],
              'id': '48019'
            }, {
              'type': 'Polygon',
              'arcs': [[-9174, -9493, -3849, -2876]],
              'id': '12059'
            }, {
              'type': 'Polygon',
              'arcs': [[-5448, -501, -9526]],
              'id': '41055'
            }, {
              'type': 'Polygon',
              'arcs': [[-8683, -9809, -7308, -9176, -8494]],
              'id': '01067'
            }, {
              'type': 'Polygon',
              'arcs': [[-8916, -8458, -5635, -7526, -5626, -7945, -8874]],
              'id': '05139'
            }, {
              'type': 'Polygon',
              'arcs': [[-8037, -8373, -7099, -9472, -7521, -8759]],
              'id': '54031'
            }, {
              'type': 'Polygon',
              'arcs': [[-9323, -5993, 9888, -8278, -4431, -5228, -1101, -9246]],
              'id': '22017'
            }, {
              'type': 'Polygon',
              'arcs': [[-2615, -7663, -7252, -4043]],
              'id': '41029'
            }, {
              'type': 'Polygon',
              'arcs': [[-7251, -4138, 4136, -8150, -8642, -566, -4045]],
              'id': '06049'
            }, {
              'type': 'Polygon',
              'arcs': [[-7492, -5497, -9322, -6299, -9671, -3428]],
              'id': '28003'
            }, {
              'type': 'Polygon',
              'arcs': [[-9417, -8645, -3368, -7235, -2335]],
              'id': '08011'
            }, {
              'type': 'Polygon',
              'arcs': [[-7768, -7138, -6731, -71, -3456, -6545]],
              'id': '18105'
            }, {
              'type': 'Polygon',
              'arcs': [[-8469, -9498, 9889, -4071]],
              'id': '21029'
            }, {
              'type': 'Polygon',
              'arcs': [[-1925, -6922, -9816, -8361, -9632, -9807]],
              'id': '39121'
            }, {
              'type': 'Polygon',
              'arcs': [[-4310, -2776, -9854, -9876, -9820, 9890, -9496]],
              'id': '21005'
            }, {
              'type': 'Polygon',
              'arcs': [[-9890, -9497, -9891, -9819, -9194, -5803, -4072]],
              'id': '21179'
            }, {
              'type': 'Polygon',
              'arcs': [[-7049, -5366, -9619, -4386, -5587]],
              'id': '49057'
            }, {
              'type': 'Polygon',
              'arcs': [[-7037, -6163, -1238, -725, -3, -8081]],
              'id': '49025'
            }, {
              'type': 'Polygon',
              'arcs': [[-3350, -9155, -8213, -8277, -9889, -5992, -5783, -3351]],
              'id': '05091'
            }, {
              'type': 'Polygon',
              'arcs': [[-7212, -7659, -5963, 9891, -9765, -9669]],
              'id': '45079'
            }, {
              'type': 'Polygon',
              'arcs': [[-9691, -7929, -8590, -2502, -8086, 9892, -5373]],
              'id': '12107'
            }, {
              'type': 'Polygon',
              'arcs': [[9893, -5948, -8905, -7283, -7379, -9564]],
              'id': '17077'
            }, {
              'type': 'Polygon',
              'arcs': [[-9823, -6853, -7190, 9894, -6846, -3957, -4264]],
              'id': '37013'
            }, {
              'type': 'Polygon',
              'arcs': [[-368, -6670, -8091, 9895]],
              'id': '36123'
            }, {
              'type': 'Polygon',
              'arcs': [[-8177, -3496, -5991, -9750, -3508, -1226, -5858]],
              'id': '47111'
            }, {
              'type': 'Polygon',
              'arcs': [[-4381, -977, -5580, -9037, 9896]],
              'id': '48323'
            }, {
              'type': 'Polygon',
              'arcs': [[-1010, -8835, -6736, -6272, -7396, -8993]],
              'id': '27155'
            }, {
              'type': 'Polygon',
              'arcs': [[-8845, -8886, -9430, -4634, -9781, -8152]],
              'id': '32001'
            }, {
              'type': 'Polygon',
              'arcs': [[-5129, -5789, -8889, -1479, -5872, -6860]],
              'id': '56005'
            }, {
              'type': 'Polygon',
              'arcs': [[-7828, -8030, -9621, -5451, -9635, -8280, -5601]],
              'id': '53059'
            }, {
              'type': 'Polygon',
              'arcs': [[-1960, -2512, -8773, -8932, -3556, -9294, -3390]],
              'id': '13315'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9897]], [[-9007, 9898, -7762]]],
              'id': '72053'
            }, {
              'type': 'Polygon',
              'arcs': [[-9276, -9456, -4752, -9846, -811]],
              'id': '47143'
            }, {
              'type': 'Polygon',
              'arcs': [[-1319, -6586, -5582, -5154, -5778, -3826]],
              'id': '21025'
            }, {
              'type': 'Polygon',
              'arcs': [[-6371, -7441, -313, -1977, -1606, -2547, -9879]],
              'id': '29217'
            }, {
              'type': 'Polygon',
              'arcs': [[-9844, -6609, -9824, -314, -7969, -9521, -2702]],
              'id': '01053'
            }, {
              'type': 'Polygon',
              'arcs': [[-5374, -9893, -8089, -7338, -3855, -7836, -7407]],
              'id': '12083'
            }, {
              'type': 'Polygon',
              'arcs': [[-9872, -7796, -8780, -3631]],
              'id': '53003'
            }, {
              'type': 'Polygon',
              'arcs': [[-9489, -9118, -8793, -8805, -9868, -6658]],
              'id': '29023'
            }, {
              'type': 'Polygon',
              'arcs': [[-7380, -7288, -9287, -6148, -9117, -6653]],
              'id': '29031'
            }, {
              'type': 'Polygon',
              'arcs': [[-5564, -6787, -1636, -2711, -9861, -6842]],
              'id': '51105'
            }, {
              'type': 'Polygon',
              'arcs': [[-2993, -9495, -2408, -8057, -9451, 9449, -9449, -8367]],
              'id': '01043'
            }, {
              'type': 'Polygon',
              'arcs': [[-5147, -3517, -7501, -3419, -8413, -9849]],
              'id': '17029'
            }, {
              'type': 'Polygon',
              'arcs': [[-9559, -7609, -2570, -5935, -6637]],
              'id': '18015'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9899]], [[-8305, -7296, 9900, -8182]]],
              'id': '22075'
            }, {
              'type': 'Polygon',
              'arcs': [[-5816, -464, -9656, -919, -9344]],
              'id': '31091'
            }, {
              'type': 'Polygon',
              'arcs': [[-5295, -9161, -9548, -9867, -4267, -4206]],
              'id': '38015'
            }, {
              'type': 'Polygon',
              'arcs': [[-5691, -3978, -7672, -8366, -7673]],
              'id': '54063'
            }, {
              'type': 'Polygon',
              'arcs': [[-7599, -8336, -7782, -5003, -9665]],
              'id': '47021'
            }, {
              'type': 'Polygon',
              'arcs': [[-7149, -7884, -5894, -9506, -6986, -6833, -7432]],
              'id': '42015'
            }, {
              'type': 'Polygon',
              'arcs': [[-7336, -9783, -4796, -4313, -8467]],
              'id': '21185'
            }, {
              'type': 'Polygon',
              'arcs': [[-7267, -7728, -3842, -2265, -9422, -7879]],
              'id': '05101'
            }, {
              'type': 'Polygon',
              'arcs': [[-8848, -9774, -9312, -1641, -7655, -5633, -9735, -9066, -5288]],
              'id': '33009'
            }, {
              'type': 'Polygon',
              'arcs': [[-6934, -873, 9901, -5603, -9565, -9432]],
              'id': '55117'
            }, {
              'type': 'Polygon',
              'arcs': [[-2965, -9610, -9882, -7922, -6791, -6738]],
              'id': '28129'
            }, {
              'type': 'Polygon',
              'arcs': [[-8379, -8471, -9863, 9902, -8303, -8180, -9452, -16]],
              'id': '22103'
            }, {
              'type': 'Polygon',
              'arcs': [[-9573, -9566, -5493, -7375, -9697, -9144, -9504, -9789]],
              'id': '24033'
            }, {
              'type': 'Polygon',
              'arcs': [[-1387, -3540, -9843, -1379, -9350, -8650, -347, -866, -9630]],
              'id': '27145'
            }, {
              'type': 'Polygon',
              'arcs': [[-9530, -7592, -3666, -5798, -3664, -5799, -8270]],
              'id': '25017'
            }, {
              'type': 'Polygon',
              'arcs': [[-5709, -9850, -5883, -8803, -8163, -9777, -9847, -169]],
              'id': '42055'
            }, {
              'type': 'Polygon',
              'arcs': [[-9592, -2808, -5949, -9894, -9563]],
              'id': '17145'
            }, {
              'type': 'Polygon',
              'arcs': [[-5471, -4441, -1305, -3894, -8099, -5042, -5469]],
              'id': '29073'
            }, {
              'type': 'Polygon',
              'arcs': [[-1216, -8708, -8273, -2850, -9611]],
              'id': '18161'
            }, {
              'type': 'Polygon',
              'arcs': [[-8677, -8637, -9011, -9191, -2997, -3892]],
              'id': '29099'
            }, {
              'type': 'Polygon',
              'arcs': [[-9830, -5010, -9865, -9224, -3922, -9772]],
              'id': '40131'
            }, {
              'type': 'Polygon',
              'arcs': [[-9892, -5962, -5193, -9644, -9766]],
              'id': '45017'
            }, {
              'type': 'Polygon',
              'arcs': [[-3967, -7583, -6973, -7995, -7756, -9054, 9903]],
              'id': '54035'
            }, {
              'type': 'Polygon',
              'arcs': [[9904]],
              'id': '69100'
            }, {
              'type': 'Polygon',
              'arcs': [[-9885, -1123, -2185, -5617, 9905, -120]],
              'id': '72123'
            }, {
              'type': 'Polygon',
              'arcs': [[-2791, -9688, -9040, -6152, -4642, -8988]],
              'id': '48239'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9906]], [[-641, -8627, 9907]]],
              'id': '53035'
            }, {
              'type': 'Polygon',
              'arcs': [[-3042, -9810, -9210, 9908, -7903]],
              'id': '12057'
            }, {
              'type': 'Polygon',
              'arcs': [[-8428, -9428, -4876]],
              'id': '17043'
            }, {
              'type': 'Polygon',
              'arcs': [[-9058, -4921, -8188, -7452, -8667, -9304]],
              'id': '34031'
            }, {
              'type': 'Polygon',
              'arcs': [[-9685, -9852, -9512, -9811, -5024, -9884, -7053]],
              'id': '48181'
            }, {
              'type': 'Polygon',
              'arcs': [[-4781, -9805, -8720, -9523]],
              'id': '13283'
            }, {
              'type': 'Polygon',
              'arcs': [[-457, -92, -9515, -2601, -9239, -3104, -2435]],
              'id': '28155'
            }, {
              'type': 'Polygon',
              'arcs': [[-9120, -921, -9657, -9561, -7420, -8658]],
              'id': '31101'
            }, {
              'type': 'Polygon',
              'arcs': [[-8018, -4531, -9652, -8020, -8005]],
              'id': '28001'
            }, {
              'type': 'Polygon',
              'arcs': [[-4129, -760, -369, -9896, -8090, -6523]],
              'id': '36069'
            }, {
              'type': 'Polygon',
              'arcs': [[-3968, -9904, -9056, -6527, -3972]],
              'id': '54053'
            }, {
              'type': 'Polygon',
              'arcs': [[-729, -3837, -6406, -3089, -9]],
              'id': '04025'
            }]
          },
          'states': {
            'type': 'GeometryCollection',
            'geometries': [{
              'type': 'MultiPolygon',
              'arcs': [[[-1237, -1236, -6110, -5237, -4936, -6300, 4809, -3762, 4810, -4930, 7206, 284, 4806, 5761, 5759, 3091, 3087, -2005, 10, 11, 0, 1, 2, 724, 725]]],
              'id': '04'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-8471, -9863, 9902, 8303, 7294, 9900, 8182, 8388, 8517, 8385, 8518, 4352, 4841, 3878, 4077, 4078, -3796, -3795, 5571, -9182, 6564, 5748, 5749, 5750, 5230, -1102, -1101, -9246, -9323, -5993, 9888, 8276, -8212, 5498, 5499, 7943, 7944, 5625, -7525, -7605, -7604, 3872, 3873, -3703, -3702, -3710, -3709, -3708, 8016, -4532, 8017, 8004, 8005, 7353, 7345, -2516, -2515, 12, 13, -2163, 8376, -7821, 8377]], [[4842]], [[7291]], [[7292]], [[7293]], [[8383]], [[8515]], [[8516]], [[9899]]],
              'id': '22'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9094, -6826, 9095, -9140, 7403, -9139, -2989, -2988, 8463, 3266, 7794, 7795, 7791, 8645, 732, 733, 5310, 5824, -1726, 1246, 1243, 1244, -5369, -2351, -2350, 4194, -6018, 8382, 3264, -2001, -2000, -1530, -1529, -1528, 5808, -5537, 5809, -6344, 4087, 4088, -4592, -4598, 8485, -5364, 4058, 4059, 3379, 3380, 8218]]],
              'id': '16'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[5268, 5266, 2259, 9744, 7494, 2906, 4131, 3591, 4132, 2908, 2909, 1761, -7935, -7851, 5763, 5764, 5733, 5734, -5715, -5714, -5713, -6331, -6330, -7001, -7000, -9345, -8121, 5596, -4625, 5597, -5400, -5399, -477, -476, -2809, 6569, 1362, 1363, 5775, 5776, 2765, -2738, -2737, 5681, -3823, 3182, 3183, 744, -102, 1517, 3677, 3678, 8099, 5355, 5356, -5705, 7397, -8993, -1010, -1009, -1008, -37, -36, -6170, 31, 32, -6446, -4338, -6120]]],
              'id': '27'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[35, 36, 1007, 1008, 1009, 1010, -754, 7786, 344, 345, 8835, 8836, -9458, -7018, 5984, -3771, -6969, -6968, -6252, 719, -6251, -3746, -3745, -4025, -4551, 5477, 6891, 6889, 9538, 492, 2192, 3267, 1641, 2741, 6118, -5269, 6119, 4337, 6445, -33, -32, 6169]]],
              'id': '38'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[1423, -6291, -6253, 6967, 6968, 3770, -5985, 7017, 9457, -8837, -8836, -346, -345, -7787, 753, -1011, 8992, -7398, 5704, -5357, -5356, -8100, -3679, -3678, -1518, 101, 102, 6123, 6124, 4978, -4788, -3644, 4979, 4980, 5081, 5082, 6088, 6089, 4999, -9780, -7201, 627, 628, 7033, 3202, 353, -8856, -2610, 2561, 2562, 2563, 4562, 4563, 4968, 43, 44, 1427]]],
              'id': '46'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-7864, -7882, 7147, 7148, 7431, -6832, -6831, -8041, 2927, 2928, 8890, 8891, 8962, -4894, 8960, 9517, 7459, 391, 4127, 757, 9489, 3716, 6367, 4526, 8012, 8796, -8346, 8797, 7741, 7742, -9660, -6208, -8748, -8749, -5341, -5347, -5346, -9171, -8189, 8185, 7453, 7454, 9224, 9073, 3741, 6364, 3739, 9074, 8877, 4521, 4516, 4517, -7449, -7448, -7447, 8187, 4920, 4921, 4922, -6868, -7866, -7865]], [[6361]], [[6362]], [[6363]], [[6365]], [[6368]], [[9156, -8867, 9157, -7516]]],
              'id': '36'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[51]], [[52]], [[53]], [[8823, 2018, 1446, 8571, 2089, 9403, 9234, 9152, 9407, 2063, 2076, 2043, 2071, 762, 2072, 6402, 4962, 6404, 4964, 521, 9553, 1778, 3599, 2416, 2812, 2087, 8570, 1444, 2019, 9886, 2016, 8821, 1429, 1654, 55, 8568, 3184, 8569, 57, 1655, 1431, 8822, 1433]], [[58]], [[59]], [[1434]], [[1436, 8819]], [[1437]], [], [[1439]], [[1440]], [[1442, 3210]], [[1652, 3197]], [[2014]], [[2025]], [[2026]], [[2027]], [[2028]], [[2029]], [[2030]], [[2031]], [[2032]], [[2033]], [[2034]], [[2035]], [[2036]], [[2037]], [[2038]], [[2039]], [[2040]], [[2041]], [[2044]], [[2045]], [[2046]], [[2047]], [[2048]], [[2049]], [[2050]], [[2051]], [[2052]], [[2053]], [[2054]], [[2055]], [[2056]], [[2057]], [[2058]], [[2059]], [[2060]], [[2061]], [[2065]], [[2066]], [[2067]], [[2068]], [[2069]], [[2070]], [[2077]], [[2078]], [[2079]], [[2080]], [[2081]], [[2082]], [[2083]], [[2084]], [[3186]], [[3187]], [[3188]], [[3189]], [[3190]], [[3191]], [[3192]], [[3193]], [[3194]], [[3195]], [[3196]], [[3198, 3208]], [[3209]], [[4965]], [[4966]], [[4967]], [[6400]], [[6401]], [[6403]], [[8564]], [[8565]], [[8566]], [[8567]], [[8820]], [[9235]], [[9356]], [[9357]], [[9358]], [[9359]], [[9360]], [[9361]], [[9362]], [[9363]], [[9364]], [[9365]], [[9366]], [[9367]], [[9368]], [[9369]], [[9370]], [[9371]], [[9372]], [[9373]], [[9374]], [[9375]], [[9376]], [[9377]], [[9378]], [[9379]], [[9380]], [[9381]], [[9382]], [[9383]], [[9384]], [[9385]], [[9386]], [[9387]], [[9388]], [[9389]], [[9390]], [[9391]], [[9392]], [[9393]], [[9394]], [[9395]], [[9396]], [[9397]], [[9398]], [[9399]], [[9400]], [[9401]], [[9402]], [[9404]], [[9405]], [[9406]], [[9551]], [[9552]], [[9554]], [[9555]]],
              'id': '02'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[4013, -4648, -4458, 4414, -4457, 7976, 7974, 7975, 4409, 9761, 7166, 4050, 4051, 2136, 2137, -8266, -7808, -7807, -7806, -7737, -7814, -7813, -7812, -7811, 6539, -4560, -4559, -6063, -5957, -5956, -5955, 8760, -9629, -6134, -6133, 8549, -6034, -6033, -5528, -5527, -4916, -4915, 9807, 7227, 4482, 9733, 4822, 9354, -7623, 5218, 5219, 6485, 7409, 7410, 7140, 7141, 8938, -7631, -7630, -7898, 7305, 7306, 2113, 2114, 847, 848, 7983, 7984, 7311, 7307, 9808, -8682, -8681, -8680, -8172, 3584, -8171, -8554, -8553, -4037, -4036, -7646, 3590, -7645, -9280, 63, 5813, -4649]]],
              'id': '13'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[5671, 7429, -3515, -3514, 8414, -8580, 3003, 3004, -9088, -8461, 5891, 5885, 5886, 5887, 9539, 9877, -9754, 9127, -7415, 5315, -2802, 2677, -1199, -1198, -3144, -6911, -6910, -1088, -1087, 2201, -1905, -1904, 8572, 487, 488, -2883, 1213, 1214, -8708, -8273, 2850, -9205, -9328, 4514, 7432, -6874, -3125, -3130, 7445, 7334, 7335, 7336, 4479, 7840, -4069, -6839, 4474, 4885, -4294, -4701, -4700, -7291, -7290, -6504, -6503, 4062, 4063, 4064, 4065, 7246, -5557, 4891, -4845, 4886, 5674]]],
              'id': '18'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7315, 9280, 7365, 8399, -3722, -3721, 7483, 3141, 3142, 3143, 1197, 1198, -2678, 2801, -5316, 7414, -9128, 9753, 9752, 9330, 9769, 5854, 1358, 4859, 1352, 586, 8327, 9796, 6292, 2645, 7477, 8391, 9483, 9425, 3687, 8727, 9030, 3252, 3675, 8441, 8521, 482]], [[-5214, 5506, 5507, 3692, 3693, 3694, 3695, 3689, 9076, 5415, 9802, 5417, 4496, 8971, 5136, 2272, 7615, 7620, 7931, 9718, 1667, -205, 203, -203, -202, 4108]], [[7478]], [[7479]], [[7480]], [[7481]], [[7614]], [[7617]], [[7618]], [[7619]], [[9716]], [[9717]], [[9793]], [[9794]], [[9795]], [[9797]], [[9801]], [[9803]]],
              'id': '26'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-8317, -8318, -8320, -7261, -7260, 336, 337, -7254, -7259, 7997, -8410, -8691, -8690, -8689, 9596, 8075, 9861, 9862, 8470, -8378, 7820, -8377, 2162, -14, -13, 2514, 2515, -7346, -7354, -8006, -8005, -8018, 4531, -8017, 3707, 3708, 3709, 3701, 3702, -3874, -7603, -7602, 3685, 3680, 3681, -7320, -7319, 7532, 7529, 7370, -4569, -4568, 7415, -8737, -7493, 3426, -7492, -5497, -9322, 6295, -4227, -4802, -4956, -4959, 9061, 9103, -8314]], [[8072]], [[8073]], [[9594]], [[9595]]],
              'id': '28'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[1086, 1087, 6909, 6910, -3143, -3142, -7484, 3720, 3721, 3722, 9622, 9874, 8916, 9089, 9685, 9863, -4897, -7778, -7777, -5910, -5909, -5906, -5905, -1014, 7712, -8209, -6400, -8261, 6919, -4943, -4946, -3299, -7539, -7541, 8362, -7581, -7580, 3965, 3966, 3967, 3971, 3972, -6526, 8969, -6058, 8970, 8818, -5432, -5438, 8615, -9752, -7170, -7169, 8990, -7342, -7345, 9202, 9203, 9204, -2851, 8272, 8707, -1215, -1214, 2882, -489, -488, -8573, 1903, 1904, -2202]], [[9621]], [[9873]]],
              'id': '39'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8900, 5868, 7035, 7992, 9350, -7648, -4882, -4881, -4880, -5040, -5039, -5038, -8248, 3798, 3155, 1718, 509, 1019, 1020, 6952, 6953, -8605, 190, 191, -7511, -7510, -4154, -4153, 5878, 4031, 4032, 630, 6105, 6106, 1219, 1220, 2621, 2622, 3408, -541, -540, -9186, 511, 9164, -6965, -6964, 7056, 7559, -3734, -3733, -4744, -4743, 9205, 7051, -9685, -9852, -9512, -9511, 9262, -4536, -4535, -8260, 5781, -3352, 5782, 5991, 5992, 9322, 9245, 1100, 1101, -5231, -5751, -5750, -5749, -6565, 9181, -5572, 3794, 3795, -4079, 5438, 4159, 9735, 4161, 9144, 9737, 6915, 9736, 6917, 6154, 4643, 3783, 8749, 9130, 6514, 7561, 9417, 7563, 6516, 9131, 8751, 3781, 4644, 6102, 3785, 4640, 3787, 6103, 3789, 8557, 8752, 9132, 6518, 7564, 9418, 8044, 9302, 3780, 9037, 9896, 4381, 9332]]],
              'id': '48'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[6958, 9007, 8735, 9459, 7788, 7003, 4357, 8743, 8741, 2129, 7108, 9476, 8998, 9000, 9859, 9478, 8396, 9341, 9750, 6024, 1755, 9885, 6861, 141, 8895, 9477, 4193, 6892, 9005, 9898, 7762, 8725, 2758, 9482, 3601, 9309, 3001, 5615, 9905, 120, 4182]], [[6955]], [[7818]], [[8744]], [[8745]], [[9428]], [[9897]]],
              'id': '72'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8658, 9661, 9662, 3918, 3919, 3920, 9738, -5795, -5794, -5793, -7438, -2563, -2562, 2609, 8855, -354, -3203, -7034, -629, -628, 7200, 9779, -5000, -6090, -6089, -5083, -5082, -4981, -4980, -3643, -3642, 8841, -9181, -7505, 5441, -3650, -3649, -3648, -3738, -3737, -5279, 4861, 4862, -6233, 8320, 4209, 4210, 4211, 4212, 3405, 3406, -7800, -3068, -3067, -8235, 7443, 7444, -7797, -4872, -4871, -2648, -2647, -176, -2983, -2982, 4215, 1603, -7302, -5253, -2957, 156, 152, -2953, 7421]]],
              'id': '31'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[164, 165, 618, 619, -6108, 4049, -1235, -1234, -1233, -1232, -9229, 1796, 1790, -7689, -7688, -4376, -6015, 8600, 7277, 470, 471, -5456, 8332, 7159, -3920, -3919, -9663, -9662, -8659, -7422, 2952, -153, -157, 2956, 2957, -5255, -3330, -1212, -1211, -5319, -5321, -5320, -2906, -7232, 3369, 3370, 3371, 3372, -4151, 7235, 7157, -5979]], [], [], [], []],
              'id': '08'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-9841, 9766, -3550, -3549, -5207, -5252, -5251, 5484, -7401, 998, 999, 5307, 4489, 9536, 9537, -9213, -9212, 9533, 4495, 5308, 5650, 9219, 5486, 7313, 9767, 9844, 5664, 9695, 9141, 4847, 9504, 9502, -9789, -9573, -9566, 5493, 5494, -3765, -3764, 170, 171, 172, 173, 331, 332, 333, 5408, 5409, 5410, 5406, 5407, 328, 329, 330, 167, 168, 9846, -9776, 5237, 5238]], [[5305, 9535]], [[5651]], [[-9218, 9534]]],
              'id': '24'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[4870, 4871, 7796, -7445, -7444, 8234, 3066, 3067, 7799, -3407, -3406, -4213, -4212, -4211, 4627, 4628, 4629, -6290, 7696, 8618, 9034, -7488, -5898, -5902, -8329, 4080, 4081, 6369, 6370, 9878, 2546, -1610, 2547, -4112, -1648, 7392, 7393, 9123, -5008, -5007, 9828, 6273, 6274, -7965, -7465, 5427, 5428, 9702, -3062, 737, 738, -5920, 7288, 7179, 7180, 9672, 9785, -7013, 4115, -7012, 7841, -3371, -3370, 7231, 2905, 5319, 5320, 5318, 1210, 1211, 3329, 5254, -2958, 5252, 7301, -1604, -4216, 2981, 2982, 175, 2646, 2647]]],
              'id': '20'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-5510, 5301, 5302, -5521, 8505, 9285, -5737, -6149, 9286, 7287, 7281, -7379, -7378, -9012, 8635, 8636, 8633, 3250, 3244, -5158, 7237, 7238, 5185, 9624, -7381, -5181, 4542, 4543, -3756, -3755, 8950, -9064, -7574, -9434, 9221, -4547, -4546, 5397, -3729, -7249, 8705, 9812, 9291, 9292, 4121, 4122, 4117, 4118, 4468, 4469, 986, 987, -3168, 9283, 4865, -4178, -4177, 9578, 8425, -5887, -5886, -5892, 8460, 9087, -3005, -3004, 8579, -8415, 3513, 3514, -7430, -5672, -5675, -4887, 4844, -4892, 5556, -7247, -4066, -4065, -4303, -4302, -6041, -5512]]],
              'id': '17'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[201, 202, 203, 204, 205, 8861, 9880, 7123, 8850, 7125, 871, 9901, 5603, 8827, 8092, 4175, 4176, 4177, -4866, -9284, 3167, -988, -987, -4470, -4469, -4119, -4118, -4830, 8002, 7665, 7666, 4623, 4624, -5597, 8120, 9344, 6999, 7000, 6329, 6330, 5712, 5713, 5714, -5735, -5734, -5765, -5764, 7850, 7934, -1762, -2910, 7933, 4615, 9470, 7552, -3696, 3694, -3694, -3693, -5508, -5507, 5213, -4109]], [[4614]], [[8848]], [[8849]], [[9463]], [[9464]], [[9465]], [[9466]], [[9467]], [[9468]], [[9469]]],
              'id': '55'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9297, 8500, 9295, 9096, 9570, 8497, 9571, 7325, 8237, 7948, 8594, 7950, 7721, 9869, 4467, -3281, -2617, -2616, 4042, 4043, -7251, -4138, 4136, -8150, -8149, 979, 2606, -8156, 9168, -8453, 1272, 4039, -8452, 9315, -4636, -2665, -2664, 5052, 5053, 2003, -11, 2004, -3088, -3092, -5760, 5822, 9316, 7221, 9826, 7216, 3021, 9266, 1300, 9868]], [[3010]], [[3011]], [[3012]], [[3013]], [[7213]], [[7217]], [[8498]], [[8593]], [[9824]], [[9825]]],
              'id': '06'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[4787, -4979, -6125, -6124, -103, -745, -3184, -3183, 3822, -5682, 2736, 2737, -2766, -5777, -5776, -1364, -1363, -6570, 2808, 475, 476, 5398, 5399, -5598, -4624, -7667, -7666, -8003, 4829, -4123, -4122, -9293, -9292, -9813, -8706, 7248, 3728, -5398, 4545, 4546, -9222, 9433, -7573, 2172, -1704, -1703, 3217, 4826, 4827, 710, 711, 5328, 5329, 1148, 1149, -8523, -8562, 7657, -6230, 5280, -4862, 5278, 3736, 3737, 3647, 3648, 3649, -5442, 7504, 9180, -8842, 3641, 3642, 3643]]],
              'id': '19'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-9767, 9840, -5239, -5238, 9775, -9847, -169, -168, -331, -330, -329, -5408, -5407, -5412, 9447, 2424, 2425, 2426, -4945, -8262, -6398, -8208, 1018, 1013, 5904, 5905, 5908, 5909, 7776, 7777, 4896, 4892, 4893, -8963, -8892, -8891, -2929, -2928, 8040, 6830, 6831, -7432, -7149, -7148, 7881, 7863, 7864, 7865, 6867, -4923, 6868, 7472, -6379, 5744, 4993, -4575, 4994, 4995, -8419, 9107, 9108, 6448, -5246, 5205, 5206, 3548, 3549]]],
              'id': '42'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7586, 9473, 9838, -6892, -5478, 4550, 4024, 3744, 3745, 6250, -720, 6251, 6252, 6290, -1424, -5787, 5127, 5128, 5129, -6859, -9255, -9254, -1496, -1495, -1505, 5535, 5536, -5809, 1527, 1528, 1529, 1999, 2000, -3265, -8383, 6017, -4195, 2349, 2350, 5368, -1245, 5367, 2298, 8807, 9833, 749, 6314, 9830, 4581]]],
              'id': '30'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-4082, -4081, 8328, 5901, 5897, 7487, -9035, -8619, -7697, 6289, -4630, -4629, -4628, -4210, -8321, 6232, -4863, -5281, 6229, -7658, 8561, 8522, -1150, -1149, -5330, -5329, -712, -711, -4828, -4827, -3218, 1702, 1703, -2173, 7572, 7573, 9063, -8951, 3754, 3755, -4544, -4543, 5180, 7380, -9625, -5186, -7239, -7238, 5157, -3245, -3251, -8634, -8637, -8636, 9011, 7377, 7378, -7282, -7288, -9287, 6148, 5736, 5737, 5738, 5739, 5740, -6055, 8880, -6057, 8881, 3749, 3750, 3751, -4443, 8795, 8790, 8791, -8805, -8804, -8508, -8511, -8175, -4453, -4452, -4451, -8239, 9414, 9419, -7726, -7265, 1689, -7264, -4229, 503, 504, 505, 1651, 1647, 4111, -2548, 1609, -2547, -9879, -6371, -6370]]],
              'id': '29'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-9173, -9177, -7984, -849, -848, -2115, -2114, -7307, -7306, 7897, 7629, 7630, -8939, -7142, -7141, -7411, -7410, -6486, -5220, -5219, 7622, 7623, 9408, 8588, 2499, 8086, 9813, 9084, 3215, 1834, 4817, 9783, 9679, 8534, 9676, 8536, 9680, 8542, 9827, 7274, 7241, 7276, 7243, 8933, 9210, 9908, 7903, 3045, 7901, 3043, 7223, 7836, 7408, 1768, 9760, 7899, 9423, 7887, 7895, 2466, 2877, 316, 7969, 9521, -2703, 9520, 7968, 313, 314, 2873, 2874, -9174]], [[7275]], [[7884]], [[8537]], [[8538]], [[8539]], [[8543]], [[8544]], [[8545]], [[8546]]],
              'id': '12'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[5940, -6952, -6193, 3488, 3489, -7638, -6126, 6052, 6053, 6054, -5741, -5740, -5739, -5738, -9286, -8506, 5520, -5303, -5302, 5509, 5510, 5511, 6040, 4301, 4302, -4064, -4063, 6502, 6503, 7289, 7290, 4699, 4700, 4293, -4886, -4475, 6838, 4068, -7841, -4480, -7337, -7336, -7335, -7446, 3129, 3124, 6873, -7433, -4515, 9327, -9204, -9203, 7344, 7341, -8991, 7168, 7169, 9751, -8616, 5437, 5431, -8819, -8971, 6057, 6058, 5333, 5591, 5592, 5842, 5843, 5844, 5845, -6784, 5562, 5563, 6841, 6842, 3947, 3948, -6511, -433, -432, 4306, -7987, -5987, 4834, 3494, 3495, 8176, -5857, -5856, -7597, -7596, 321, 322, -9664, -6950]], [[6055, 6056]]],
              'id': '21'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[3343, 7358, 3345, 3659, 7361, 9721, 5020, 6005, 993, 994, 995, 996, 5997, -1639, 5998, 9834, 3696, 327, 746]], [[3336]], [[3337]], [[3338]], [[3339]], [[3340]], [[3341]], [[3656]], [[7359]], [[7360]], [[9720]]],
              'id': '23'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[357, 358, 4374, 4375, 7687, 7688, -1791, -1797, 9228, 1231, 1232, 1233, 1234, 1235, 1236, -726, -725, -3, -2, -4505, -4504, -4503, -4502, 8528, 8478, 8532, 8530, 7050, -3380, -4060, -4059, 5363, -8486, -4597, -8702]]],
              'id': '49'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-2622, -1221, -1220, -6107, -6106, -631, -4033, -4032, -5879, -4152, -3372, -7842, 7011, -4116, 7012, -9786, -9673, -7181, -7180, -7289, 5919, -739, -738, 3061, -9703, -5429, -5428, 7464, 7964, -6275, -6274, -9829, 5006, 5007, -9124, -7394, -7393, -1652, -506, -505, -4233, -4232, -3357, 7803, -7818, -9086, -9087, -4466, -7208, -7210, 8258, -3353, -5782, 8259, 4534, 4535, -9263, 9510, 9511, 9851, 9684, -7052, -9206, 4742, 4743, 3732, 3733, -7560, -7057, 6963, 6964, -9165, -512, 9185, 539, 540, -3409, -2623]]],
              'id': '40'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-3948, -6843, 9860, 2710, -1635, -1634, -1633, -6388, -6168, -6387, 4745, 4746, 4747, 4748, 4749, 7593, -4719, -4723, -6599, -9711, 6036, 4988, 4989, -5069, 5611, 6186, 6187, -8264, -8265, 5657, -2137, -4052, -4051, -7167, -9762, -4410, -7976, -7975, 9026, 9019, 9020, -9314, -7830, 1091, 1092, -4223, -4222, -4228, -6296, 9321, 5496, 7491, -3427, 7492, 8736, -7416, 4567, 4568, 4569, 5422, -4448, -4447, -4446, -4445, -4444, -3751, -3750, -8882, -6056, -8881, -6054, -6053, 6125, 7637, -3490, -3489, 6192, 6951, -5941, 6949, 9663, -323, -322, 7595, 7596, 5855, 5856, -8177, -3496, -3495, -4835, 5986, 7986, -4307, 431, 432, 6510, -3949]]],
              'id': '47'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-9733, -6261, -9608, 8778, -3632, 8779, -7795, -3267, -8464, 2987, 2988, 9138, -7404, 9139, -9096, -6825, 4367, 4368, 4135, 4137, 7250, -4044, -4043, 2615, 2616, 3280, 3281, 7661, 7663, 6141, 8520, 9742, 6981, 6979, 4358, 4359, 4360, -5602, 8279, 9634, -5450, -5449, -5448, 496, -5447, 6069]]],
              'id': '41'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-5410, -5409, -334, -333, -332, -174, -173, -172, -3763, -6217, -8372, -8371, 8035, -8373, -7099, -9472, 7521, 7522, -4608, 2124, 2125, 3975, 3976, -7672, -8366, -7673, 5691, 4939, 4940, 4941, 2449, 2450, -7078, -5843, -5593, -5592, -5334, -6059, -8970, 6525, -3973, -3972, -3968, -3967, -3966, 7579, 7580, -8363, 7540, 7538, 3298, 4945, 4942, -6920, 8260, 6399, 8208, -7713, -1019, 8207, 6397, 8261, 4944, -2427, -2426, -2425, -9448, 5411, -5411]]],
              'id': '54'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-7533, 7318, 7319, -3682, -3681, -3686, 7601, 7602, -3873, 7603, 7604, 7524, -5626, -7945, -7944, -5500, -5499, 8211, -8277, -9889, -5992, -5783, 3351, 3352, -8259, 7209, 7207, 4465, 9086, 9085, 7817, -7804, 3356, 4231, 4232, -504, 4228, 7263, -1690, 7264, 7725, -9420, -9415, 8238, 4450, 4451, 4452, 8174, 8510, 8507, 8803, 8804, -8792, -8791, -8796, 4442, -3752, 4443, 4444, 4445, 4446, 4447, -5423, -4570, -7371, -7530]]],
              'id': '05'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9200, 9777, 9199, 6247, 8695, 4163, 9872, 8691, 1724, -1247, 1725, -5825, -5311, -734, -733, -8646, -7792, -7796, -8780, 3631, -8779, 9607, 6260, 9732, -6070, 5446, -497, 5447, 5448, 5449, -9635, -8280, 5601, -4361, -4360, -4359, -6980, 7925, 7115, 8586, 8592, 8582, 8590, 8625, 9907, 641, 8627, 9498, 634, 2483]], [[2484]], [[6243]], [[6244]], [[6248]], [[8629]], [[8630]], [[8631]], [[8632]], [[8694]], [[8696]], [[9198]], [[9778]], [[9906]]],
              'id': '53'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[3595, -6238, -7084, 3829, -7083, 8392, 8479, 8480, 8481, 6719, 8113, 8114, -8349, -8440, 4723, 4724, 4725, 9758, 4727, 9882, 8127, 7152, 8052, 6722, 9850, 6849, 9129, 7186, 9759, 7188, 9894, 6846, 3958, 6904, 2453, 9577, 5503, 8283, -6312, -6311, -5209, 6880, 5945, 5864, -5091, -5090, -5720, -5719, -4904, -4903, 3913, 3914, 6375, 6376, 4716, -1067, -1066, -1072, 3952, 3953, -7810, 7736, 7805, 7806, 7807, 8265, -2138, -5658, 8264, 8263, -6188, -6187, -5612, 5068, -4990, -4989, -6037, 9710, 6598, 4722, 4718, -7594, -4750, -4749, -4748, 8832, 7087, 6885, 6886, 6887, 3046, 3047, 812, 813, -8034, -1283, -8033, -6239]], [[7184, 9757]], [[9756]]],
              'id': '37'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[], [], [], [[8032, 1282, 8033, -814, -813, -3048, -3047, -6888, -6887, -6886, -7088, -8833, -4747, -4746, 6386, 6167, 6387, 1632, 1633, 1634, -2711, -9861, -6842, -5564, -5563, 6783, -5846, -5845, -5844, 7077, -2451, -2450, -4942, -4941, -4940, -5692, 7672, 8365, 7671, -3977, -3976, -2126, -2125, 4607, -7523, -7522, 9471, 7098, 8372, -8036, 8370, 8371, 6216, 3762, -171, 3763, 3764, -5495, 6239, -9567, 9572, 9788, -9503, 9789, 9713, 9014, 1518, 9798, 5963, 9831, 1554, 9832, 9568, 5113, 7094, 2286, 8296, 4579, 9150, 8110, 7027, 6256, 6009, 8346, 8297, 8241, 9879, -4725, -4724, 8439, 8348, -8115, -8114, -6720, -8482, -8481, -8480, -8393, 7082, -3830, 7083, 6237, -3596, 6238]], [], [], [], [], [], [], [], [], [], [], [], [[9211, 9212, 9213, 8047, 9214]], [[9215]], [[9216, 9217]], []],
              'id': '51'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[6014, -4375, -359, -358, 8701, 4596, 4597, 4591, -4089, -4088, 6343, -5810, -5536, 1504, 1494, 1495, 9253, 9254, 6858, -5130, -5129, -5128, 5786, -1428, -45, -44, -4969, -4564, -4563, -2564, 7437, 5792, 5793, 5794, -9739, -3921, -7160, -8333, 5455, -472, -471, -7278, -8601]]],
              'id': '56'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-314, -7969, -9521, 2702, 2703, 8687, 8688, 8689, 8690, 8409, -7998, 7258, 7253, -338, -337, 7259, 7260, 8319, 8317, 8316, 8313, -9104, -9062, 4958, 4955, 4801, 4226, 4227, 4221, 4222, -1093, -1092, 7829, 9313, -9021, -9020, -9027, -7977, 4456, -4415, 4457, 4647, -4014, 4648, -5814, -64, 9279, 7644, -3591, 7645, 4035, 4036, 8552, 8553, 8170, -3585, 8171, 8679, 8680, 8681, -9809, -7308, -7312, -7985, 9176, 9172, 9173, -2875, -2874, -315]], [[8684]], [[8685]], [[8686]]],
              'id': '01'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-6376, -3915, -3914, 4902, 4903, 5718, 5719, 5089, 5090, -5865, -5946, -6881, 5208, 6310, 6311, 6312, 5275, 4900, 6898, 4984, 4913, 4914, 4915, 5526, 5527, 6032, 6033, -8550, 6132, 6133, 9628, -8761, 5954, 5955, 5956, 6062, 4558, 4559, -6540, 7810, 7811, 7812, 7813, 7809, -3954, -3953, 1071, 1065, 1066, -4717, -6377]]],
              'id': '45'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[1626, 4928, 4929, -4811, 3761, -4810, 6299, 4935, 5236, 6109, -4050, 6107, -620, -619, -166, -165, 5978, -7158, -7236, 4150, -3373, 4151, 4152, 4153, 7509, 7510, -192, -191, 8604, -6954, -6953, -1021, -1020, -510, -1719, -3156, -3799, 8247, 5037, 5038, 5039, 4879, 4880, 4881, 7647, 7648]]],
              'id': '35'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-996, -995, 9110, -7590, -7589, 9529, -8269, -8268, -3672, -4927, -4926, -5289, -5288, -8848, -9774, -9312, 1636, 1637, 1638, -5998, -997]]],
              'id': '33'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[2195]], [[2196]], [[2197]], [[2199, 8746]], [[9633]]],
              'id': '60'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[9310, -1637, 9311, 9773, 8847, 5287, 5288, 4925, 4926, -3671, -3670, -5342, 8748, 8747, 6207, 9659, -7743, -7742, -8798, 8345, 8343, 5104, 8755]]],
              'id': '50'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[2663, 2664, 4635, -9316, 8451, -4040, -1273, 8452, -9169, 8155, -2607, -980, 8148, 8149, -4137, -4136, -4369, -4368, 6824, 6825, -9095, -8219, -3381, -7051, -8531, -8533, -8479, -8529, 4501, 4502, 4503, 4504, -1, -12, -2004, -5054, -5053]]],
              'id': '32'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[3559]], [[3560]], [[3561]], [[3563, 7695]], [[3628]], [[8527]], [[8975]], [[8976]]],
              'id': '15'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7588, 7589, 7590, 3667, 5799, 4092, 5796, 4094, 9837, 9259, 9836, 4096, 5552, -4140, 5553, 5554, 5555, 5800, -6507, -7699, 8270, 6197, 6198, 6199, 5344, 5345, 5346, 5340, 5341, 3669, 3670, 3671, 8267, 8268, -9530]], [[5550]], [[6075]], [[9256]], [[9257]]],
              'id': '25'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[3980]], [[3981]], [[3982]], [[3984, 7990]], [[5531]], [[5532]], [[7989]]],
              'id': '78'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[4139, 4140]], [[4141]], [[4142]], [[6508, 6450, 9411, -7704, 6452, 6453, 6509, 6506, -5801, -5556, -5555, 9887]], [[9410]]],
              'id': '44'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-6449, -9109, -9108, 8418, -4996, -4995, 4574, -4994, -5745, 6378, -7473, -6869, -4922, -4921, -8188, 7446, 7447, 7448, -4518, -4517, 8865, 8866, -9157, 7515, 7516, 8967, 7423, 8215, 8616, 4510, 9741, -5243, 9739, -5248, -5247]]],
              'id': '34'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[5242, 5243]], [[5244]], [[-999, 7400, -5485, 5250, 5251, -5206, 5245, 5246, 5247, 5248, 7398, 9601, -9537, -4490, -5308, -1000]]],
              'id': '10'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[5312, 7327, 8190, -7454, -8186, 8188, 9170, -5345, -6200, -6199, -6198, -8271, 7698, -6510, -6454, -6453, 7703, 7704]]],
              'id': '09'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[7001]], [[8394]], [[8395]], [[8428]], [[8429]], [[8430]], [[8431]], [[8432]], [[8433]], [[8434]], [[8435]], [[8436]], [[8437]], [[9904]]],
              'id': '69'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[8193]], [[8194]]],
              'id': '66'
            }, {
              'type': 'MultiPolygon',
              'arcs': [[[-5494, 9565, 9566, -6240]]],
              'id': '11'
            }]
          },
          'nation': {
            'type': 'GeometryCollection',
            'geometries': [{
              'type': 'MultiPolygon',
              'arcs': [[[1626, 4928, 7206, 284, 4806, 5761, 5822, 9316, 7221, 9826, 7216, 3021, 9266, 1300, 9868, 9297, 8500, 9295, 9096, 9570, 8497, 9571, 7325, 8237, 7948, 8594, 7950, 7721, 9869, 4467, 3281, 7661, 7663, 6141, 8520, 9742, 6981, 7925, 7115, 8586, 8592, 8582, 8590, 8625, 9907, 641, 8627, 9498, 634, 2483, 9200, 9777, 9199, 6247, 8695, 4163, 9872, 8691, 1724, 1243, 5367, 2298, 8807, 9833, 749, 6314, 9830, 4581, 7586, 9473, 9838, 6889, 9538, 492, 2192, 3267, 1641, 2741, 6118, 5266, 2259, 9744, 7494, 2906, 4131, 3591, 4132, 2908, 7933, 4615, 9470, 7552, 3689, 9076, 5415, 9802, 5417, 4496, 8971, 5136, 2272, 7615, 7620, 7931, 9718, 1667, 205, 8861, 9880, 7123, 8850, 7125, 871, 9901, 5603, 8827, 8092, 4175, 9578, 8425, 5887, 9539, 9877, 9752, 9330, 9769, 5854, 1358, 4859, 1352, 586, 8327, 9796, 6292, 2645, 7477, 8391, 9483, 9425, 3687, 8727, 9030, 3252, 3675, 8441, 8521, 482, 7315, 9280, 7365, 8399, 3722, 9622, 9874, 8916, 9089, 9685, 9863, 4892, 8960, 9517, 7459, 391, 4127, 757, 9489, 3716, 6367, 4526, 8012, 8796, 8343, 5104, 8755, 9310, 1637, 5998, 9834, 3696, 327, 746, 3343, 7358, 3345, 3659, 7361, 9721, 5020, 6005, 993, 9110, 7590, 3667, 5799, 4092, 5796, 4094, 9837, 9259, 9836, 4096, 5552, 4140, 5553, 9887, 6508, 6450, 9411, 7704, 5312, 7327, 8190, 7454, 9224, 9073, 3741, 6364, 3739, 9074, 8877, 4521, 8865, 9157, 7516, 8967, 7423, 8215, 8616, 4510, 9741, 5243, 9739, 5248, 7398, 9601, 9537, 9213, 8047, 9214, 9533, 4495, 5308, 5650, 9219, 5486, 7313, 9767, 9844, 5664, 9695, 9141, 4847, 9504, 9789, 9713, 9014, 1518, 9798, 5963, 9831, 1554, 9832, 9568, 5113, 7094, 2286, 8296, 4579, 9150, 8110, 7027, 6256, 6009, 8346, 8297, 8241, 9879, 4725, 9758, 4727, 9882, 8127, 7152, 8052, 6722, 9850, 6849, 9129, 7186, 9759, 7188, 9894, 6846, 3958, 6904, 2453, 9577, 5503, 8283, 6312, 5275, 4900, 6898, 4984, 4913, 9807, 7227, 4482, 9733, 4822, 9354, 7623, 9408, 8588, 2499, 8086, 9813, 9084, 3215, 1834, 4817, 9783, 9679, 8534, 9676, 8536, 9680, 8542, 9827, 7274, 7241, 7276, 7243, 8933, 9210, 9908, 7903, 3045, 7901, 3043, 7223, 7836, 7408, 1768, 9760, 7899, 9423, 7887, 7895, 2466, 2877, 316, 7969, 9521, 2703, 8687, 9596, 8075, 9861, 9902, 8303, 7294, 9900, 8182, 8388, 8517, 8385, 8518, 4352, 4841, 3878, 4077, 5438, 4159, 9735, 4161, 9144, 9737, 6915, 9736, 6917, 6154, 4643, 3783, 8749, 9130, 6514, 7561, 9417, 7563, 6516, 9131, 8751, 3781, 4644, 6102, 3785, 4640, 3787, 6103, 3789, 8557, 8752, 9132, 6518, 7564, 9418, 8044, 9302, 3780, 9037, 9896, 4381, 9332, 8900, 5868, 7035, 7992, 9350, 7648], [5510]], [[4842]], [[7291]], [[7292]], [[7293]], [[8383]], [[8515]], [[8516]], [[9899]], [[6361]], [[6362]], [[6363]], [[6365]], [[6368]], [[51]], [[52]], [[53]], [[8823, 2018, 1446, 8571, 2089, 9403, 9234, 9152, 9407, 2063, 2076, 2043, 2071, 762, 2072, 6402, 4962, 6404, 4964, 521, 9553, 1778, 3599, 2416, 2812, 2087, 8570, 1444, 2019, 9886, 2016, 8821, 1429, 1654, 55, 8568, 3184, 8569, 57, 1655, 1431, 8822, 1433]], [[58]], [[59]], [[1434]], [[1436, 8819]], [[1437]], [], [[1439]], [[1440]], [[1442, 3210]], [[1652, 3197]], [[2014]], [[2025]], [[2026]], [[2027]], [[2028]], [[2029]], [[2030]], [[2031]], [[2032]], [[2033]], [[2034]], [[2035]], [[2036]], [[2037]], [[2038]], [[2039]], [[2040]], [[2041]], [[2044]], [[2045]], [[2046]], [[2047]], [[2048]], [[2049]], [[2050]], [[2051]], [[2052]], [[2053]], [[2054]], [[2055]], [[2056]], [[2057]], [[2058]], [[2059]], [[2060]], [[2061]], [[2065]], [[2066]], [[2067]], [[2068]], [[2069]], [[2070]], [[2077]], [[2078]], [[2079]], [[2080]], [[2081]], [[2082]], [[2083]], [[2084]], [[3186]], [[3187]], [[3188]], [[3189]], [[3190]], [[3191]], [[3192]], [[3193]], [[3194]], [[3195]], [[3196]], [[3198, 3208]], [[3209]], [[4965]], [[4966]], [[4967]], [[6400]], [[6401]], [[6403]], [[8564]], [[8565]], [[8566]], [[8567]], [[8820]], [[9235]], [[9356]], [[9357]], [[9358]], [[9359]], [[9360]], [[9361]], [[9362]], [[9363]], [[9364]], [[9365]], [[9366]], [[9367]], [[9368]], [[9369]], [[9370]], [[9371]], [[9372]], [[9373]], [[9374]], [[9375]], [[9376]], [[9377]], [[9378]], [[9379]], [[9380]], [[9381]], [[9382]], [[9383]], [[9384]], [[9385]], [[9386]], [[9387]], [[9388]], [[9389]], [[9390]], [[9391]], [[9392]], [[9393]], [[9394]], [[9395]], [[9396]], [[9397]], [[9398]], [[9399]], [[9400]], [[9401]], [[9402]], [[9404]], [[9405]], [[9406]], [[9551]], [[9552]], [[9554]], [[9555]], [[7478]], [[7479]], [[7480]], [[7481]], [[7614]], [[7617]], [[7618]], [[7619]], [[9716]], [[9717]], [[9793]], [[9794]], [[9795]], [[9797]], [[9801]], [[9803]], [[8072]], [[8073]], [[9594]], [[9595]], [[9621]], [[9873]], [[6958, 9007, 8735, 9459, 7788, 7003, 4357, 8743, 8741, 2129, 7108, 9476, 8998, 9000, 9859, 9478, 8396, 9341, 9750, 6024, 1755, 9885, 6861, 141, 8895, 9477, 4193, 6892, 9005, 9898, 7762, 8725, 2758, 9482, 3601, 9309, 3001, 5615, 9905, 120, 4182]], [[6955]], [[7818]], [[8744]], [[8745]], [[9428]], [[9897]], [], [], [], [], [[5305, 9535]], [[5651]], [[9534, 9216]], [[4614]], [[8848]], [[8849]], [[9463]], [[9464]], [[9465]], [[9466]], [[9467]], [[9468]], [[9469]], [[3010]], [[3011]], [[3012]], [[3013]], [[7213]], [[7217]], [[8498]], [[8593]], [[9824]], [[9825]], [[7275]], [[7884]], [[8537]], [[8538]], [[8539]], [[8543]], [[8544]], [[8545]], [[8546]], [[3336]], [[3337]], [[3338]], [[3339]], [[3340]], [[3341]], [[3656]], [[7359]], [[7360]], [[9720]], [[2484]], [[6243]], [[6244]], [[6248]], [[8629]], [[8630]], [[8631]], [[8632]], [[8694]], [[8696]], [[9198]], [[9778]], [[9906]], [[7184, 9757]], [[9756]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [[9215]], [], [[8684]], [[8685]], [[8686]], [[2195]], [[2196]], [[2197]], [[2199, 8746]], [[9633]], [[3559]], [[3560]], [[3561]], [[3563, 7695]], [[3628]], [[8527]], [[8975]], [[8976]], [[5550]], [[6075]], [[9256]], [[9257]], [[3980]], [[3981]], [[3982]], [[3984, 7990]], [[5531]], [[5532]], [[7989]], [[4141]], [[4142]], [[9410]], [[5244]], [[7001]], [[8394]], [[8395]], [[8428]], [[8429]], [[8430]], [[8431]], [[8432]], [[8433]], [[8434]], [[8435]], [[8436]], [[8437]], [[9904]], [[8193]], [[8194]]]
            }]
          }
        },
      };

      function getStatesGeoJson() {
        var features = (0, topojson_client__WEBPACK_IMPORTED_MODULE_13__.feature)(usTopoJson, usTopoJson.objects.states).features;
        features.forEach(function (f) {
          var _a;

          return ((_a = f.properties) !== null && _a !== void 0 ? _a : f.properties = {}).label = usNameLookup[f.id];
        });
        return (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.featureCollection)(features);
      }

      function getCountiesForStateGeoJson(state) {
        var prefix = state;
        Object.entries(usNameLookup).forEach(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
              id = _ref7[0],
              name = _ref7[1];

          if (name === state) {
            prefix = id;
          }
        });
        var geometries = usTopoJson.objects.counties.geometries.filter(function (g) {
          return g.id.indexOf(prefix) === 0;
        });
        var features = (0, topojson_client__WEBPACK_IMPORTED_MODULE_13__.feature)(usTopoJson, {
          'type': 'GeometryCollection',
          geometries: geometries
        }).features;
        features.forEach(function (f) {
          var _a;

          return ((_a = f.properties) !== null && _a !== void 0 ? _a : f.properties = {}).label = state;
        });
        return (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.featureCollection)(features);
      }

      var _c0$1 = ["tooltipElement"];

      var _c1$1 = function _c1$1() {
        return [3];
      };

      var _c2$1 = function _c2$1() {
        return [0, 0];
      };

      var _c3$1 = function _c3$1(a0) {
        return {
          padding: a0
        };
      };

      var _c4$1 = function _c4$1() {
        return ["!=", "$type", "Point"];
      };

      var _c5$1 = function _c5$1() {
        return ["get", "type"];
      };

      var _c6$1 = function _c6$1(a1) {
        return ["match", a1, "grid-line-x", "#DEDAD7", "grid-line-y", "#DEDAD7", "axis-line", "#01426A", "#bdbdbd"];
      };

      var _c7$1 = function _c7$1(a1) {
        return ["match", a1, "grid-line-x", 1, "grid-line-y", 1, "axis-line", 2, "bounds-mark", 0, 3];
      };

      var _c8$1 = function _c8$1(a0, a1) {
        return {
          "line-color": a0,
          "line-width": a1
        };
      };

      var _c9$1 = function _c9$1() {
        return {
          "fill-color": "#fff",
          "fill-outline-color": "#DEDAD7",
          "fill-opacity": 0.6
        };
      };

      var _c10$1 = function _c10$1() {
        return {
          "line-color": "#DEDAD7",
          "line-width": 1.5
        };
      };

      var _c11$1 = function _c11$1() {
        return {
          "text-color": "#000"
        };
      };

      var _c12$1 = function _c12$1() {
        return ["get", "icon"];
      };

      var _c13$1 = function _c13$1() {
        return ["get", "areaSize"];
      };

      var _c14$1 = function _c14$1() {
        return ["get", "labelPosition"];
      };

      var _c15$1 = function _c15$1(a1) {
        return ["==", a1, ""];
      };

      var _c16$1 = function _c16$1() {
        return ["get", "label"];
      };

      var _c17$1 = function _c17$1(a1, a3) {
        return ["case", a1, "", a3];
      };

      var _c18$1 = function _c18$1() {
        return ["top", "bottom", "left", "right"];
      };

      var _c19$1 = function _c19$1() {
        return ["Roboto Regular"];
      };

      var _c20$1 = function _c20$1(a0, a2, a3, a5, a10) {
        return {
          "icon-image": a0,
          "icon-allow-overlap": true,
          "symbol-sort-key": a2,
          "text-field": a3,
          "text-justify": "auto",
          "text-variable-anchor": a5,
          "text-radial-offset": 1,
          "text-optional": true,
          "text-size": 14,
          "text-allow-overlap": true,
          "text-font": a10
        };
      };

      var _c21$1 = function _c21$1() {
        return ["==", "type", "axis-line"];
      };

      var _c22$1 = function _c22$1() {
        return {
          "line-color": "#01426A",
          "line-width": 2
        };
      };

      var _c23$1 = function _c23$1() {
        return {
          "line-cap": "round"
        };
      };

      var _c24$1 = function _c24$1() {
        return ["==", "$type", "Point"];
      };

      var _c25$1 = function _c25$1(a1) {
        return ["match", a1, "axis-label-x", "#006298", "axis-label-y", "#006298", "#01426A"];
      };

      var _c26$1 = function _c26$1(a1) {
        return ["match", a1, "axis-line-label-x", "#FFFFFF", "axis-line-label-y", "#FFFFFF", "rgba(0, 0, 0, 0)"];
      };

      var _c27$1 = function _c27$1(a1) {
        return ["match", a1, "axis-line-label-x", 6, "axis-line-label-y", 6, 0];
      };

      var _c28$1 = function _c28$1(a0, a1, a2) {
        return {
          "text-color": a0,
          "text-halo-color": a1,
          "text-halo-width": a2
        };
      };

      var _c29$1 = function _c29$1(a1) {
        return ["match", a1, "axis-line-arrow-x", 24, "axis-line-arrow-y", 24, 24];
      };

      var _c30$1 = function _c30$1() {
        return ["Open Sans Regular"];
      };

      var _c31$1 = function _c31$1(a1) {
        return ["literal", a1];
      };

      var _c32$1 = function _c32$1() {
        return ["Open Sans Bold"];
      };

      var _c33$1 = function _c33$1(a1, a3, a5, a7, a9, a10) {
        return ["match", a1, "axis-label-x", a3, "axis-label-y", a5, "axis-line-arrow-x", a7, "axis-line-arrow-y", a9, a10];
      };

      var _c34$1 = function _c34$1(a1, a3, a5, a9) {
        return ["match", a1, "axis-label-y", a3, "axis-line-label-y", a5, "axis-line-arrow-x", 0, "axis-line-arrow-y", a9, 0];
      };

      var _c35$1 = function _c35$1() {
        return ["get", "maxYLabelLength"];
      };

      var _c36 = function _c36(a1) {
        return ["*", a1, 0.5];
      };

      var _c37 = function _c37(a1) {
        return ["+", a1, 1.25];
      };

      var _c38 = function _c38(a1, a5) {
        return ["match", a1, "axis-label-x", 1.75, "axis-label-y", a5, "axis-line-arrow-x", 0, "axis-line-arrow-y", 0, 0.5];
      };

      var _c39 = function _c39(a1) {
        return ["match", a1, "tick-label-y", "right", "axis-label-y", "bottom", "axis-line-label-x", "left", "axis-line-label-y", "left", "axis-line-arrow-x", "right", "axis-line-arrow-y", "right", "top"];
      };

      var _c40 = function _c40(a0, a1, a3, a4, a5, a7) {
        return {
          "text-field": a0,
          "text-size": a1,
          "text-allow-overlap": true,
          "text-font": a3,
          "text-rotate": a4,
          "text-radial-offset": a5,
          "text-justify": "auto",
          "text-anchor": a7
        };
      }; // Precompute some geometry


      var usGeoJson = reprojector('albersUsa', getStatesGeoJson());
      var gridGeoJson5 = reprojector('albersUsa', graticule(5));
      var gridGeoJson1 = reprojector('albersUsa', graticule(1));
      var grid5 = withAxes(gridGeoJson5);
      var worldBbox = (0, _turf_bbox__WEBPACK_IMPORTED_MODULE_4__["default"])(grid5.geojson);

      var GeographicMapComponent = /*#__PURE__*/function () {
        function GeographicMapComponent(dataProcessorService, xMacroscopeDataService) {
          _classCallCheck(this, GeographicMapComponent);

          this.dataProcessorService = dataProcessorService;
          this.xMacroscopeDataService = xMacroscopeDataService;
          this.featureSelection = 'USA';
          this.nodeDefaults = {
            shape: 'circle',
            areaSize: 16,
            color: '#000',
            transparency: 0
          };
          this.nodes$ = rxjs__WEBPACK_IMPORTED_MODULE_35__.EMPTY; // Outputs

          this.nodeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_36__.EventEmitter();
          this.style = blankStyle;
          this.worldBbox = worldBbox;
          this.worldPadding = grid5.padding;
          this.graticule = grid5.geojson;
          this.basemapGeoJson = usGeoJson;
        }

        _createClass(GeographicMapComponent, [{
          key: "worldBbox2d",
          get: function get() {
            return this.worldBbox;
          }
        }, {
          key: "toNgxDinoEvent",
          value: function toNgxDinoEvent(event, layers, data) {
            var _a;

            var bboxMargin = new maplibre_gl__WEBPACK_IMPORTED_MODULE_9__.Point(4, 4);
            var pointBox = [event.point.sub(bboxMargin), event.point.add(bboxMargin)];
            var features = this.map.queryRenderedFeatures(pointBox, {
              layers: layers
            });
            var itemId = (_a = features[0].properties) === null || _a === void 0 ? void 0 : _a[_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.idSymbol];
            var item = data.find(function (i) {
              return i[_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.idSymbol] === itemId;
            });

            if (item) {
              return new _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.NgxDinoEvent(event.originalEvent, item[_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.rawDataSymbol], item, this);
            }
          }
        }, {
          key: "nodeClicked",
          value: function nodeClicked(event) {
            var ngxDinoEvent = this.toNgxDinoEvent(event, ['nodes'], this.nodes);

            if (ngxDinoEvent) {
              this.nodeClick.emit(ngxDinoEvent);
            }

            this.tempClickListener(ngxDinoEvent);
          } // FIXME: Remove specifics to xMacroscope

        }, {
          key: "tempClickListener",
          value: function tempClickListener(event) {
            var _a, _b;

            var selection = !event || event.data.selected ? [] : [event.data];
            (_b = (_a = this.xMacroscopeDataService.runStreamController) === null || _a === void 0 ? void 0 : _a.selectRuns) === null || _b === void 0 ? void 0 : _b.call(_a, selection);
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter(event) {
            var _a, _b, _c;

            this.map.getCanvas().style.cursor = 'pointer';
            var tooltip = (_c = (_b = (_a = event === null || event === void 0 ? void 0 : event.features) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.properties) === null || _c === void 0 ? void 0 : _c.tooltip;
            this.showTooltip(event.originalEvent, tooltip);
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave(_event) {
            this.hideTooltip();
          }
        }, {
          key: "showTooltip",
          value: function showTooltip(event, tooltip) {
            var el = this.tooltipElement.nativeElement;
            var x = event.x,
                y = event.y;

            if (!el || !tooltip) {
              return;
            }

            el.textContent = tooltip;
            el.style.left = "".concat(x - 40, "px");
            el.style.top = "".concat(y - 40, "px");
            el.style.visibility = 'visible';
          }
        }, {
          key: "hideTooltip",
          value: function hideTooltip() {
            var el = this.tooltipElement.nativeElement;

            if (!el) {
              return;
            }

            el.style.visibility = 'hidden';
          }
        }, {
          key: "onMapLoad",
          value: function onMapLoad(map) {
            this.map = map;
            this.map.resize();
            new DataDrivenIcons().addTo(map);
            this.ngOnChanges({
              data: new _angular_core__WEBPACK_IMPORTED_MODULE_36__.SimpleChange(undefined, this.data, false)
            });
          }
        }, {
          key: "layout",
          value: function layout(nodes) {
            if ((0, lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(nodes)) {
              this.nodes = nodes;
              this.nodesGeoJson = reprojector('albersUsa', nodesGeoJson(nodes));
              var w = this.map ? this.map.getCanvas().width : 1000;
              var h = this.map ? this.map.getCanvas().height : 1000;
              var viewBox = [0, 0, w, h];
              var state = this.featureSelection;
              var feature = usGeoJson.features.find(function (f) {
                var _a;

                return ((_a = f.properties) === null || _a === void 0 ? void 0 : _a.label) === state;
              });

              if (state && state !== 'USA' && !!feature) {
                // Limit nodes showing to just those in the selected state
                this.nodesGeoJson = (0, _turf_points_within_polygon__WEBPACK_IMPORTED_MODULE_8__["default"])(this.nodesGeoJson, feature); // Stretch out the state bounding box to match the screen aspect ratio. This will
                // necessarily include some parts of bordering states.

                var featureBounds = fitBoundsToAspectRatio((0, _turf_bbox__WEBPACK_IMPORTED_MODULE_4__["default"])(feature), viewBox); // Clip the 1°x1° grid to the region we will be displaying

                var grid = withAxes((0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.featureCollection)(gridGeoJson1.features.map(function (f) {
                  return (0, _turf_bbox_clip__WEBPACK_IMPORTED_MODULE_5__["default"])((0, _turf_clone__WEBPACK_IMPORTED_MODULE_6__["default"])(f), featureBounds);
                }).filter(function (f) {
                  return !!f.geometry;
                }))); // Clip the us map to the region we will be displaying

                var clippedFeatures = usGeoJson.features.reduce(function (result, feat) {
                  var clip = (0, _turf_bbox_clip__WEBPACK_IMPORTED_MODULE_5__["default"])((0, _turf_clone__WEBPACK_IMPORTED_MODULE_6__["default"])(feat), featureBounds);
                  var coords = clip.geometry.coordinates.filter(function (coord) {
                    return coord.length > 0;
                  });

                  if (coords.length > 0) {
                    clip.geometry.coordinates = coords;
                    result.push(clip);
                  }

                  return result;
                }, []);
                var featureGeoJson = (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.featureCollection)(clippedFeatures); // Get the counties for the selected state

                var countiesGeoJson = reprojector('albersUsa', getCountiesForStateGeoJson(state)); // Set the base map to the counties + the us map region selected

                this.basemapGeoJson = (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.featureCollection)([].concat(_toConsumableArray(featureGeoJson.features), _toConsumableArray(countiesGeoJson.features)));
                this.graticule = grid.geojson;
                this.worldPadding = grid.padding;
                this.worldBbox = fitBoundsToAspectRatio((0, _turf_bbox__WEBPACK_IMPORTED_MODULE_4__["default"])(grid.geojson), viewBox);
              } else {
                this.basemapGeoJson = usGeoJson;
                this.graticule = grid5.geojson;
                this.worldPadding = grid5.padding;
                this.worldBbox = fitBoundsToAspectRatio((0, _turf_bbox__WEBPACK_IMPORTED_MODULE_4__["default"])(grid5.geojson), viewBox);
              } // Adjust some extra to prevent label clipping


              this.worldPadding = Object.assign(Object.assign({}, this.worldPadding), {
                left: this.worldPadding.left + 16
              });
            }
          }
        }, {
          key: "refreshNodes",
          value: function refreshNodes() {
            var _this12 = this;

            if (this.data) {
              this.nodes$ = this.getGraphicSymbolData('nodes', this.nodeDefaults);
            } else {
              this.nodes$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_32__.of)([]);
            }

            if (this.nodesSubscription) {
              this.nodesSubscription.unsubscribe();
            }

            this.nodesSubscription = this.nodes$.subscribe(function (nodes) {
              return _this12.layout(nodes);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.data.properties.nodeDefaults) {
              this.nodeDefaults = this.data.properties.nodeDefaults;
            }

            if (this.data.properties.featureSelection) {
              this.featureSelection = this.data.properties.featureSelection;
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('data' in changes) {
              this.refreshNodes();
            }
          }
        }, {
          key: "dvlOnGraphicSymbolChange",
          value: function dvlOnGraphicSymbolChange(changes) {
            if ('nodes' in changes) {
              this.refreshNodes();
            }
          }
        }, {
          key: "dvlOnPropertyChange",
          value: function dvlOnPropertyChange(changes) {
            if ('nodeDefaults' in changes) {
              this.nodeDefaults = this.data.properties.nodeDefaults;
              this.refreshNodes();
            }

            if ('featureSelection' in changes) {
              this.featureSelection = this.data.properties.featureSelection;
              this.refreshNodes();
            }
          }
        }, {
          key: "getGraphicSymbolData",
          value: function getGraphicSymbolData(slot) {
            var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return new GraphicSymbolData(this.dataProcessorService, this.data, slot, defaults).asDataArray();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.nodesSubscription) {
              this.nodesSubscription.unsubscribe();
            }
          }
        }]);

        return GeographicMapComponent;
      }();

      GeographicMapComponent.ɵfac = function GeographicMapComponent_Factory(t) {
        return new (t || GeographicMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdirectiveInject"](_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.DataProcessorService), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdirectiveInject"](_XMacroscopeDataService));
      };

      GeographicMapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineComponent"]({
        type: GeographicMapComponent,
        selectors: [["mav-geographic-map"]],
        viewQuery: function GeographicMapComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵviewQuery"](_c0$1, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵloadQuery"]()) && (ctx.tooltipElement = _t.first);
          }
        },
        inputs: {
          data: "data"
        },
        outputs: {
          nodeClick: "nodeClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵProvidersFeature"]([ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.MapService]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵNgOnChangesFeature"]],
        decls: 12,
        vars: 126,
        consts: [[1, "tooltip"], ["tooltipElement", ""], [3, "zoom", "center", "fitBounds", "fitBoundsOptions", "renderWorldCopies", "interactive", "load"], ["id", "graticule", 3, "data"], ["id", "basemap", 3, "data"], ["id", "nodes", 3, "data"], ["id", "graticule", "source", "graticule", "type", "line", 3, "filter", "paint"], ["id", "basemapFill", "source", "basemap", "type", "fill", 3, "paint"], ["id", "basemapLines", "source", "basemap", "type", "line", 3, "paint"], ["id", "nodes", "source", "nodes", "type", "symbol", 3, "paint", "layout", "click", "mouseEnter", "mouseLeave"], ["id", "axes", "source", "graticule", "type", "line", 3, "filter", "paint", "layout"], ["id", "graticule-labels", "source", "graticule", "type", "symbol", 3, "filter", "paint", "layout"]],
        template: function GeographicMapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementStart"](2, "mgl-map", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵlistener"]("load", function GeographicMapComponent_Template_mgl_map_load_2_listener($event) {
              return ctx.onMapLoad($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](3, "mgl-geojson-source", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](4, "mgl-geojson-source", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](5, "mgl-geojson-source", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](6, "mgl-layer", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](7, "mgl-layer", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](8, "mgl-layer", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementStart"](9, "mgl-layer", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵlistener"]("click", function GeographicMapComponent_Template_mgl_layer_click_9_listener($event) {
              return ctx.nodeClicked($event);
            })("mouseEnter", function GeographicMapComponent_Template_mgl_layer_mouseEnter_9_listener($event) {
              return ctx.onMouseEnter($event);
            })("mouseLeave", function GeographicMapComponent_Template_mgl_layer_mouseLeave_9_listener($event) {
              return ctx.onMouseLeave($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](10, "mgl-layer", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](11, "mgl-layer", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵstyleMap"](ctx.style);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("zoom", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](23, _c1$1))("center", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](24, _c2$1))("fitBounds", ctx.worldBbox2d)("fitBoundsOptions", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](25, _c3$1, ctx.worldPadding))("renderWorldCopies", false)("interactive", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("data", ctx.graticule);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("data", ctx.basemapGeoJson);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("data", ctx.nodesGeoJson);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("filter", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](27, _c4$1))("paint", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction2"](34, _c8$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](29, _c6$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](28, _c5$1)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](32, _c7$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](31, _c5$1))));

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](37, _c9$1));

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](38, _c10$1));

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](39, _c11$1))("layout", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction5"](51, _c20$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](40, _c12$1), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](41, _c13$1), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction2"](46, _c17$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](43, _c15$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](42, _c14$1)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](45, _c16$1)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](49, _c18$1), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](50, _c19$1)));

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("filter", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](57, _c21$1))("paint", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](58, _c22$1))("layout", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](59, _c23$1));

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("filter", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](60, _c24$1))("paint", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction3"](70, _c28$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](62, _c25$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](61, _c5$1)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](65, _c26$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](64, _c5$1)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](68, _c27$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](67, _c5$1))))("layout", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction6"](119, _c40, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](74, _c16$1), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](76, _c29$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](75, _c5$1)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction6"](94, _c33$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](78, _c5$1), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](80, _c31$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](79, _c30$1)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](83, _c31$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](82, _c30$1)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](86, _c31$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](85, _c32$1)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](89, _c31$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](88, _c32$1)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](92, _c31$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](91, _c19$1))), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction4"](102, _c34$1, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](101, _c5$1), -90, -90, -90), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction2"](113, _c38, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](107, _c5$1), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](111, _c37, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](109, _c36, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](108, _c35$1)))), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](117, _c39, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](116, _c5$1))));
          }
        },
        directives: [ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.MapComponent, ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.GeoJSONSourceComponent, ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.LayerComponent],
        styles: ["mgl-map[_ngcontent-%COMP%]{height:100%;width:100%}.tooltip[_ngcontent-%COMP%]{position:fixed;text-align:left;width:auto;height:auto;padding:5px;font:12px open-sans;color:#fff;background:black;pointer-events:none;opacity:0;z-index:10;display:inline-block;visibility:hidden;opacity:.7;transition:opacity .2s}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵsetClassMetadata"](GeographicMapComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Component,
          args: [{
            selector: 'mav-geographic-map',
            templateUrl: './geographic-map.component.html',
            styleUrls: ['./geographic-map.component.scss'],
            providers: [ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.MapService]
          }]
        }], function () {
          return [{
            type: _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.DataProcessorService
          }, {
            type: _XMacroscopeDataService
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Input
          }],
          nodeClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Output
          }],
          tooltipElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.ViewChild,
            args: ['tooltipElement', {
              "static": true
            }]
          }]
        });
      })();

      var GeographicMapVisualization = /*#__PURE__*/function (_dvl_fw_core__WEBPACK2) {
        _inherits(GeographicMapVisualization, _dvl_fw_core__WEBPACK2);

        var _super7 = _createSuper(GeographicMapVisualization);

        function GeographicMapVisualization() {
          var _this13;

          _classCallCheck(this, GeographicMapVisualization);

          _this13 = _super7.apply(this, arguments);
          _this13.defaultDescription = 'US Map: This proportional symbol map shows 50 US states and other jurisdictions using the Albers equal-area conic projection (Alaska and Hawaii are inset). Each dataset record is represented by a circle centered at its geolocation. The area, interior color, and exterior color of each circle may represent numeric attribute values. Minimum and maximum data values are given in the legend.<br><br>World Map: This proportional symbol map shows 252 countries of the world using the equal-area Eckert IV projection. Each dataset record is represented by a circle centered at its geolocation. The area, interior color, and exterior color of each circle may represent numeric attribute values. Minimum and maximum data values are given in the legend.';
          _this13.component = GeographicMapComponent;
          _this13.graphicSymbolOptions = [// Disabled basemap options as they are not usable at this point, see Issue #XXX
          // {
          //   id: 'basemap', label: 'Basemap', type: 'area',
          //   graphicVariableOptions: [
          //     { type: 'color', label: 'Color Hue', visualization: 'color', scaleType: 'nominal', staticVisualization: 'color-area' },
          //     { type: 'strokeColor', label: 'Stroke Color Hue', visualization: 'color', advanced: true },
          //     { type: 'transparency', label: 'Transparency', advanced: true },
          //     { id: 'strokeTransparency', type: 'transparency', label: 'Stroke Transparency', advanced: true },
          //     { type: 'strokeWidth', label: 'Stroke Width', visualization: 'edge-size', staticVisualization: 'thickness', advanced: true },
          //     { type: 'strokeDashArray', label: 'Stroke Dash', advanced: true },
          //   ]
          // },
          {
            id: 'nodes',
            label: 'Nodes',
            type: 'area',
            graphicVariableOptions: [{
              type: 'identifier',
              label: 'Identifier',
              visualization: 'id',
              scaleType: 'ratio',
              required: true
            }, {
              type: 'latitude',
              label: 'Latitude',
              visualization: 'x-axis',
              scaleType: 'ratio',
              required: true
            }, {
              type: 'longitude',
              label: 'Longitude',
              visualization: 'y-axis',
              scaleType: 'ratio',
              required: true
            }, {
              type: 'color',
              label: 'Color Hue',
              visualization: 'color',
              scaleType: 'nominal',
              staticVisualization: 'color-area'
            }, {
              id: 'strokeColor',
              type: 'color',
              label: 'Stroke Color Hue',
              visualization: 'color',
              advanced: true
            }, {
              type: 'strokeWidth',
              label: 'Stroke Width',
              visualization: 'edge-size',
              staticVisualization: 'thickness',
              advanced: true
            }, {
              type: 'areaSize',
              label: 'Size',
              visualization: 'node-size',
              scaleType: 'ratio',
              required: true,
              staticVisualization: 'area-size'
            }, {
              type: 'transparency',
              label: 'Transparency',
              advanced: true
            }, {
              id: 'strokeTransparency',
              type: 'transparency',
              label: 'Stroke Transparency',
              advanced: true
            }, {
              id: 'label',
              type: 'text',
              label: 'Label',
              visualization: 'label',
              scaleType: 'nominal'
            }, {
              id: 'tooltip',
              type: 'text',
              label: 'Tooltip',
              visualization: 'label'
            }, {
              type: 'labelPosition',
              label: 'Label Position',
              advanced: true
            }, {
              type: 'shape',
              label: 'Shape',
              advanced: true
            }, {
              type: 'pulse',
              label: 'Pulse',
              advanced: true
            }]
          }, {
            id: 'edges',
            label: 'Edges',
            type: 'line',
            graphicVariableOptions: [{
              type: 'identifier',
              label: 'Identifier',
              visualization: 'id',
              scaleType: 'ratio',
              required: true
            }, {
              id: 'latitude1',
              type: 'latitude',
              label: 'Source Latitude',
              visualization: 'source',
              scaleType: 'ratio',
              required: true
            }, {
              id: 'longitude1',
              type: 'longitude',
              label: 'Source Longitude',
              visualization: 'source',
              scaleType: 'ratio',
              required: true
            }, {
              id: 'latitude2',
              type: 'latitude',
              label: 'Target Latitude',
              visualization: 'target',
              scaleType: 'ratio',
              required: true
            }, {
              id: 'longitude2',
              type: 'longitude',
              label: 'Target Longitude',
              visualization: 'target',
              scaleType: 'ratio',
              required: true
            }, {
              id: 'strokeColor',
              type: 'color',
              label: 'Color Hue',
              visualization: 'color',
              staticVisualization: 'color-edges'
            }, {
              type: 'strokeWidth',
              label: 'Size',
              visualization: 'edge-size',
              scaleType: 'ratio',
              required: true,
              staticVisualization: 'thickness'
            }, {
              type: 'transparency',
              label: 'Transparency',
              advanced: true
            }]
          }];
          return _this13;
        }

        return GeographicMapVisualization;
      }(_dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultVisualization);

      var GeographicMapVisualizationFactory = /*#__PURE__*/function () {
        function GeographicMapVisualizationFactory() {
          _classCallCheck(this, GeographicMapVisualizationFactory);

          this.id = 'geomap';
          this.type = 'visualization';
        }

        _createClass(GeographicMapVisualizationFactory, [{
          key: "fromJSON",
          value: function fromJSON(data, context, _registry) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", new GeographicMapVisualization(data, context));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "toJSON",
          value: function toJSON(instance, _context, _registry) {
            return instance.toJSON();
          }
        }]);

        return GeographicMapVisualizationFactory;
      }();

      function SymbolLegendComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](2, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵstyleProp"]("width", ctx_r1.maxIconWidth + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("src", ctx_r1.getDataUrl(item_r2.icon), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("title", item_r2.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtextInterpolate"](item_r2.label);
        }
      }

      function SymbolLegendComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtemplate"](1, SymbolLegendComponent_div_0_div_1_Template, 5, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("ngForOf", ctx_r0.items);
        }
      }

      function valueLabel(o) {
        if ((0, lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(o)) {
          return Math.round(o).toLocaleString();
        } else {
          return o;
        }
      }

      var DataItem = function DataItem(data) {
        _classCallCheck(this, DataItem);

        var _a, _b, _c, _d, _e, _f;

        Object.assign(this, {
          value: data.value,
          input: (_a = data.input) !== null && _a !== void 0 ? _a : data.value,
          label: (_c = (_b = data.label) !== null && _b !== void 0 ? _b : data.input) !== null && _c !== void 0 ? _c : valueLabel((_d = data.value) !== null && _d !== void 0 ? _d : ''),
          order: (_f = (_e = data.order) !== null && _e !== void 0 ? _e : data.input) !== null && _f !== void 0 ? _f : data.value,
          icon: IconConfig.asString(data),
          areaSize: data.areaSize
        });
      };

      var SymbolLegendComponent = /*#__PURE__*/function () {
        function SymbolLegendComponent(dataProcessorService) {
          _classCallCheck(this, SymbolLegendComponent);

          this.dataProcessorService = dataProcessorService;
          this.itemDefaults = {
            shape: 'square',
            areaSize: 196,
            color: '#000',
            transparency: 0,
            strokeColor: null,
            strokeWidth: 1,
            strokeTransparency: 0
          };
          this.items$ = rxjs__WEBPACK_IMPORTED_MODULE_35__.EMPTY;
          this.items = [];
          this.maxIconWidth = 0;
          this.iconCache = {};
        }

        _createClass(SymbolLegendComponent, [{
          key: "processItems",
          value: function processItems(data) {
            var _a, _b, _c, _d;

            var items = (0, lodash__WEBPACK_IMPORTED_MODULE_0__.orderBy)(data.map(function (d) {
              return new DataItem(d);
            }), 'order', 'asc').filter(function (d) {
              return d.value !== undefined && d.label !== 'Visitor' && d.label !== 'Barefoot';
            }
            /** FIXME: Remove xMac specific cases */
            );
            var type = this.getLegendType('value', this.data.graphicSymbols.items);

            switch (type) {
              case 'qualitative':
                this.items = (0, lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(items, 'input');
                break;

              case 'quantitative':
                {
                  var stats = this.computeSummaryStatistics(items);
                  this.items = [stats.min, stats.median, stats.max];
                  break;
                }

              default:
                this.items = [];
                break;
            }

            if (this.items.length > 0) {
              var icon = DataDrivenIcon.fromString((_b = (_a = (0, lodash__WEBPACK_IMPORTED_MODULE_0__.maxBy)(items, 'areaSize')) === null || _a === void 0 ? void 0 : _a.icon) !== null && _b !== void 0 ? _b : '');
              this.maxIconWidth = (_d = (_c = icon === null || icon === void 0 ? void 0 : icon.canvas) === null || _c === void 0 ? void 0 : _c.width) !== null && _d !== void 0 ? _d : 0;
            } else {
              this.maxIconWidth = 0;
            }
          }
        }, {
          key: "getLegendType",
          value: function getLegendType(gvName, graphicSymbol) {
            var gv = graphicSymbol.graphicVariables[gvName];

            switch (gv.dataVariable.dataType) {
              case _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DataType.NUMBER:
                return 'quantitative';

              case _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DataType.BOOLEAN:
              case _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DataType.UNKNOWN:
              case _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DataType.STRING:
              default:
                return 'qualitative';
            }
          }
        }, {
          key: "getDataUrl",
          value: function getDataUrl(icon) {
            var _a, _b, _c;

            if (!this.iconCache[icon]) {
              this.iconCache[icon] = (_c = (_b = (_a = DataDrivenIcon.fromString(icon)) === null || _a === void 0 ? void 0 : _a.toDataUrl) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : '';
            }

            return this.iconCache[icon];
          }
        }, {
          key: "computeSummaryStatistics",
          value: function computeSummaryStatistics(data) {
            var min = data.length > 0 ? data[0] : undefined;
            var max = data.length > 0 ? data.slice(-1)[0] : undefined;
            var median = data.length > 0 ? data[Math.floor((data.length - 1) / 2)] : undefined;
            return {
              min: min,
              max: max,
              median: median
            };
          }
        }, {
          key: "refreshItems",
          value: function refreshItems() {
            var _this14 = this;

            if (this.data) {
              var itemDefaults = Object.assign(Object.assign({}, this.itemDefaults), this.data.properties.itemDefaults);
              this.items$ = this.getGraphicSymbolData('items', itemDefaults);
            } else {
              this.items$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_32__.of)([]);
            }

            if (this.itemsSubscription) {
              this.itemsSubscription.unsubscribe();
            }

            this.itemsSubscription = this.items$.subscribe(function (items) {
              return _this14.processItems(items);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.refreshItems();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('data' in changes) {
              this.refreshItems();
            }
          }
        }, {
          key: "dvlOnGraphicSymbolChange",
          value: function dvlOnGraphicSymbolChange(changes) {
            if ('items' in changes) {
              this.refreshItems();
            }
          }
        }, {
          key: "dvlOnPropertyChange",
          value: function dvlOnPropertyChange(changes) {
            if ('itemDefaults' in changes) {
              this.refreshItems();
            }
          }
        }, {
          key: "getGraphicSymbolData",
          value: function getGraphicSymbolData(slot) {
            var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return new GraphicSymbolData(this.dataProcessorService, this.data, slot, defaults).asDataArray();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.itemsSubscription) {
              this.itemsSubscription.unsubscribe();
            }
          }
        }]);

        return SymbolLegendComponent;
      }();

      SymbolLegendComponent.ɵfac = function SymbolLegendComponent_Factory(t) {
        return new (t || SymbolLegendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdirectiveInject"](_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.DataProcessorService));
      };

      SymbolLegendComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineComponent"]({
        type: SymbolLegendComponent,
        selectors: [["mav-symbol-legend"]],
        inputs: {
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "dvl-symbol-legend legend-container", 4, "ngIf"], [1, "dvl-symbol-legend", "legend-container"], ["class", "legend-row", 4, "ngFor", "ngForOf"], [1, "legend-row"], [1, "mark"], ["alt", "", 1, "icon", 3, "src"], [1, "label", 3, "title"]],
        template: function SymbolLegendComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtemplate"](0, SymbolLegendComponent_div_0_Template, 2, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("ngIf", ctx.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_38__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_38__.NgForOf],
        styles: [".legend-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap}.legend-container[_ngcontent-%COMP%]   .legend-row[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;line-height:1.5rem}.legend-container[_ngcontent-%COMP%]   .legend-row[_ngcontent-%COMP%]   .mark[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.legend-container[_ngcontent-%COMP%]   .legend-row[_ngcontent-%COMP%]   .mark[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:block;margin:auto}.legend-container[_ngcontent-%COMP%]   .legend-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-left:.5rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-family:Lato;font-size:1.25rem}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵsetClassMetadata"](SymbolLegendComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Component,
          args: [{
            selector: 'mav-symbol-legend',
            templateUrl: './symbol-legend.component.html',
            styleUrls: ['./symbol-legend.component.scss']
          }]
        }], function () {
          return [{
            type: _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.DataProcessorService
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Input
          }]
        });
      })();

      var SymbolLegendVisualization = /*#__PURE__*/function (_dvl_fw_core__WEBPACK3) {
        _inherits(SymbolLegendVisualization, _dvl_fw_core__WEBPACK3);

        var _super8 = _createSuper(SymbolLegendVisualization);

        function SymbolLegendVisualization() {
          var _this15;

          _classCallCheck(this, SymbolLegendVisualization);

          _this15 = _super8.apply(this, arguments);
          _this15.defaultDescription = 'A legend of symbol data.';
          _this15.component = SymbolLegendComponent;
          _this15.graphicSymbolOptions = [{
            id: 'items',
            label: 'Items',
            type: 'area',
            graphicVariableOptions: [{
              type: 'identifier',
              label: 'Identifier',
              visualization: 'id',
              scaleType: 'ratio',
              required: true
            }, {
              type: 'color',
              label: 'Color Hue',
              visualization: 'color',
              scaleType: 'nominal',
              staticVisualization: 'color-area'
            }, {
              id: 'strokeColor',
              type: 'color',
              label: 'Stroke Color Hue',
              visualization: 'color',
              advanced: true
            }, {
              type: 'areaSize',
              label: 'Size',
              visualization: 'node-size',
              scaleType: 'ratio',
              staticVisualization: 'area-size'
            }, {
              type: 'transparency',
              label: 'Transparency',
              advanced: true
            }, {
              id: 'strokeTransparency',
              type: 'transparency',
              label: 'Stroke Transparency',
              advanced: true
            }, {
              type: 'shape',
              label: 'Shape',
              advanced: true
            }]
          }];
          return _this15;
        }

        return SymbolLegendVisualization;
      }(_dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultVisualization);

      var SymbolLegendVisualizationFactory = /*#__PURE__*/function () {
        function SymbolLegendVisualizationFactory() {
          _classCallCheck(this, SymbolLegendVisualizationFactory);

          this.id = 'symbol-legend';
          this.type = 'visualization';
        }

        _createClass(SymbolLegendVisualizationFactory, [{
          key: "fromJSON",
          value: function fromJSON(data, context, _registry) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", new SymbolLegendVisualization(data, context));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "toJSON",
          value: function toJSON(instance, _context, _registry) {
            return instance.toJSON();
          }
        }]);

        return SymbolLegendVisualizationFactory;
      }();

      var GraphicVariableLegendComponent = /*#__PURE__*/function () {
        function GraphicVariableLegendComponent(xMacroscopeDataService) {
          _classCallCheck(this, GraphicVariableLegendComponent);

          this.xMacroscopeDataService = xMacroscopeDataService;
        }

        _createClass(GraphicVariableLegendComponent, [{
          key: "refreshItems",
          value: function refreshItems() {
            var _a, _b, _c;

            if (this.data) {
              // FIXME: Remove specifics to xMacroscope
              var project = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.project) !== null && _b !== void 0 ? _b : this.xMacroscopeDataService.project;
              var allGraphicSymbols = (_c = this.data.graphicSymbols) !== null && _c !== void 0 ? _c : {};
              var allSlots = Object.keys(allGraphicSymbols);
              var slot = allSlots.length && allSlots[0];
              var gs = allGraphicSymbols[slot];
              var gv = gs.graphicVariables[this.data.properties['graphicVariable']];
              var itemDefaults = this.data.properties['itemDefaults'] || undefined;

              if (gs && gv) {
                var graphicSymbol = this.createGraphicSymbol(gv, gs, project);
                this.legend = this.createLegend(this.data.id, graphicSymbol, {
                  itemDefaults: itemDefaults
                }, project);
              }
            }
          }
        }, {
          key: "createLegend",
          value: function createLegend(id, graphicSymbol, properties, project) {
            var visualization = new SymbolLegendVisualization({
              id: id,
              template: 'symbol-legend',
              properties: properties,
              graphicSymbols: {}
            }, project);
            visualization.graphicSymbols = {
              items: graphicSymbol
            };
            return visualization;
          }
        }, {
          key: "createGraphicSymbol",
          value: function createGraphicSymbol(graphicVariable, sourceGraphicSymbol, project) {
            var _graphicVariables;

            var gvars = {};

            var _iterator2 = _createForOfIteratorHelper(project.graphicVariables),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var gv = _step2.value;

                if (gv.dataVariable === graphicVariable.dataVariable && !gvars[gv.type]) {
                  gvars[gv.type] = gv;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var graphicVariables = (_graphicVariables = {
              identifier: sourceGraphicSymbol.graphicVariables.identifier
            }, _defineProperty(_graphicVariables, graphicVariable.type, graphicVariable), _defineProperty(_graphicVariables, "value", graphicVariable), _defineProperty(_graphicVariables, "input", gvars.input), _defineProperty(_graphicVariables, "label", gvars.label), _defineProperty(_graphicVariables, "order", gvars.order), _graphicVariables);
            var graphicSymbol = new _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultGraphicSymbol({
              id: 'items',
              type: sourceGraphicSymbol.type,
              recordStream: sourceGraphicSymbol.recordStream.id,
              graphicVariables: {}
            }, project);
            graphicSymbol.graphicVariables = graphicVariables;
            return graphicSymbol;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.refreshItems();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('data' in changes) {
              this.refreshItems();
            }
          }
        }, {
          key: "dvlOnGraphicSymbolChange",
          value: function dvlOnGraphicSymbolChange(_changes) {
            this.refreshItems();
          }
        }, {
          key: "dvlOnPropertyChange",
          value: function dvlOnPropertyChange(changes) {
            if ('graphicVariable' in changes || 'itemDefaults' in changes) {
              this.refreshItems();
            }
          }
        }]);

        return GraphicVariableLegendComponent;
      }();

      GraphicVariableLegendComponent.ɵfac = function GraphicVariableLegendComponent_Factory(t) {
        return new (t || GraphicVariableLegendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdirectiveInject"](_XMacroscopeDataService));
      };

      GraphicVariableLegendComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineComponent"]({
        type: GraphicVariableLegendComponent,
        selectors: [["mav-graphic-variable-legend"]],
        inputs: {
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 1,
        consts: [[3, "data"], ["visualization", ""]],
        template: function GraphicVariableLegendComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](0, "dvl-visualization", 0, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("data", ctx.legend);
          }
        },
        directives: [_dvl_fw_angular__WEBPACK_IMPORTED_MODULE_39__.DvlFwVisualizationComponent],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵsetClassMetadata"](GraphicVariableLegendComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Component,
          args: [{
            selector: 'mav-graphic-variable-legend',
            templateUrl: './graphic-variable-legend.component.html',
            styleUrls: ['./graphic-variable-legend.component.scss']
          }]
        }], function () {
          return [{
            type: _XMacroscopeDataService
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Input
          }]
        });
      })();

      var GraphicVariableLegendVisualization = /*#__PURE__*/function (_dvl_fw_core__WEBPACK4) {
        _inherits(GraphicVariableLegendVisualization, _dvl_fw_core__WEBPACK4);

        var _super9 = _createSuper(GraphicVariableLegendVisualization);

        function GraphicVariableLegendVisualization(data, project) {
          var _this16;

          _classCallCheck(this, GraphicVariableLegendVisualization);

          _this16 = _super9.call(this, data, project);
          _this16.project = project;
          _this16.defaultDescription = 'A legend of a graphic variable data.';
          _this16.component = GraphicVariableLegendComponent;
          _this16.graphicSymbolOptions = [{
            id: 'items',
            label: 'Items',
            type: 'area',
            graphicVariableOptions: [{
              type: 'identifier',
              label: 'Identifier',
              visualization: 'id',
              scaleType: 'ratio',
              required: true
            }]
          }];
          return _this16;
        }

        return GraphicVariableLegendVisualization;
      }(_dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultVisualization);

      var GraphicVariableLegendVisualizationFactory = /*#__PURE__*/function () {
        function GraphicVariableLegendVisualizationFactory() {
          _classCallCheck(this, GraphicVariableLegendVisualizationFactory);

          this.id = 'symbol-legend';
          this.type = 'visualization';
        }

        _createClass(GraphicVariableLegendVisualizationFactory, [{
          key: "fromJSON",
          value: function fromJSON(data, context, _registry) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", new GraphicVariableLegendVisualization(data, context));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }, {
          key: "toJSON",
          value: function toJSON(instance, _context, _registry) {
            return instance.toJSON();
          }
        }]);

        return GraphicVariableLegendVisualizationFactory;
      }(); // See https://github.com/Leaflet/Leaflet/blob/dc6a0ae61a70b1d34f9ee2c4f814bdd21841c774/src/geo/projection/Projection.SphericalMercator.js#L32


      var earthRadius = 6378137;
      var d = 180 / Math.PI;

      function unproject(x, y) {
        var lng = x * d / earthRadius;
        var lat = (2 * Math.atan(Math.exp(y / earthRadius)) - Math.PI / 2) * d;
        return new maplibre_gl__WEBPACK_IMPORTED_MODULE_9__.LngLat(lng, lat);
      }

      var Cartesian2dBounds = /*#__PURE__*/function () {
        function Cartesian2dBounds() {
          var minX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.MAX_SAFE_INTEGER;
          var maxX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MIN_SAFE_INTEGER;
          var minY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_SAFE_INTEGER;
          var maxY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.MIN_SAFE_INTEGER;

          _classCallCheck(this, Cartesian2dBounds);

          this.minX = minX;
          this.maxX = maxX;
          this.minY = minY;
          this.maxY = maxY;
        }

        _createClass(Cartesian2dBounds, [{
          key: "extend",
          value: function extend(x, y) {
            this.minX = Math.min(x, this.minX);
            this.maxX = Math.max(x, this.maxX);
            this.minY = Math.min(y, this.minY);
            this.maxY = Math.max(y, this.maxY);
            return this;
          }
        }]);

        return Cartesian2dBounds;
      }();

      var Cartesian2dProjection = /*#__PURE__*/function () {
        function Cartesian2dProjection(sourceBounds) {
          _classCallCheck(this, Cartesian2dProjection);

          this.sourceBounds = sourceBounds;
          var _this$sourceBounds = this.sourceBounds,
              minX = _this$sourceBounds.minX,
              maxX = _this$sourceBounds.maxX,
              minY = _this$sourceBounds.minY,
              maxY = _this$sourceBounds.maxY;
          this.mercatorWidth = earthRadius * 2.5;
          this.mercatorHeight = this.mercatorWidth * ((maxY - minY) / (maxX - minX));
        }

        _createClass(Cartesian2dProjection, [{
          key: "toLngLat",
          value: function toLngLat(x, y) {
            var _this$sourceBounds2 = this.sourceBounds,
                minX = _this$sourceBounds2.minX,
                maxX = _this$sourceBounds2.maxX,
                minY = _this$sourceBounds2.minY,
                maxY = _this$sourceBounds2.maxY;
            var mercatorWidth = this.mercatorWidth,
                mercatorHeight = this.mercatorHeight;
            var mercatorX = (x - minX) / (maxX - minX) * mercatorWidth - mercatorWidth / 2;
            var mercatorY = (y - minY) / (maxY - minY) * -mercatorHeight + mercatorHeight / 2;
            return unproject(mercatorX, mercatorY);
          }
        }, {
          key: "getWorldBbox",
          value: function getWorldBbox() {
            var _this$sourceBounds3 = this.sourceBounds,
                minX = _this$sourceBounds3.minX,
                maxX = _this$sourceBounds3.maxX,
                minY = _this$sourceBounds3.minY,
                maxY = _this$sourceBounds3.maxY;
            var ul = this.toLngLat(minX, minY).toArray();
            var br = this.toLngLat(maxX, maxY).toArray();
            return [ul[0], ul[1], br[0], br[1]];
          }
        }]);

        return Cartesian2dProjection;
      }();

      var _c0 = ["tooltipElement"];

      var _c1 = function _c1() {
        return [2];
      };

      var _c2 = function _c2() {
        return [0, 0];
      };

      var _c3 = function _c3(a0) {
        return {
          padding: a0
        };
      };

      var _c4 = function _c4() {
        return ["!=", "$type", "Point"];
      };

      var _c5 = function _c5() {
        return ["get", "type"];
      };

      var _c6 = function _c6(a1) {
        return ["match", a1, "grid-line-x", "#DEDAD7", "grid-line-y", "#DEDAD7", "axis-line", "#01426A", "#bdbdbd"];
      };

      var _c7 = function _c7(a1) {
        return ["match", a1, "grid-line-x", 1, "grid-line-y", 1, "axis-line", 2, "bounds-mark", 0, 3];
      };

      var _c8 = function _c8(a0, a1) {
        return {
          "line-color": a0,
          "line-width": a1
        };
      };

      var _c9 = function _c9() {
        return ["==", "$type", "Point"];
      };

      var _c10 = function _c10(a1) {
        return ["match", a1, "axis-label-x", "#006298", "axis-label-y", "#006298", "#01426A"];
      };

      var _c11 = function _c11(a1) {
        return ["match", a1, "axis-line-label-x", "#FFFFFF", "axis-line-label-y", "#FFFFFF", "rgba(0, 0, 0, 0)"];
      };

      var _c12 = function _c12(a1) {
        return ["match", a1, "axis-line-label-x", 6, "axis-line-label-y", 6, 0];
      };

      var _c13 = function _c13(a0, a1, a2) {
        return {
          "text-color": a0,
          "text-halo-color": a1,
          "text-halo-width": a2
        };
      };

      var _c14 = function _c14() {
        return ["get", "label"];
      };

      var _c15 = function _c15(a1) {
        return ["match", a1, "axis-line-arrow-x", 24, "axis-line-arrow-y", 24, 24];
      };

      var _c16 = function _c16() {
        return ["Open Sans Regular"];
      };

      var _c17 = function _c17(a1) {
        return ["literal", a1];
      };

      var _c18 = function _c18() {
        return ["Open Sans Bold"];
      };

      var _c19 = function _c19() {
        return ["Roboto Regular"];
      };

      var _c20 = function _c20(a1, a3, a5, a7, a9, a10) {
        return ["match", a1, "axis-label-x", a3, "axis-label-y", a5, "axis-line-arrow-x", a7, "axis-line-arrow-y", a9, a10];
      };

      var _c21 = function _c21(a1, a3, a5, a9) {
        return ["match", a1, "axis-label-y", a3, "axis-line-label-y", a5, "axis-line-arrow-x", 0, "axis-line-arrow-y", a9, 0];
      };

      var _c22 = function _c22() {
        return ["get", "maxYLabelLength"];
      };

      var _c23 = function _c23(a1) {
        return ["*", a1, 0.5];
      };

      var _c24 = function _c24(a1) {
        return ["+", a1, 1.25];
      };

      var _c25 = function _c25(a1, a5) {
        return ["match", a1, "axis-label-x", 1.75, "axis-label-y", a5, "axis-line-arrow-x", 0, "axis-line-arrow-y", 0, 0.5];
      };

      var _c26 = function _c26(a1) {
        return ["match", a1, "tick-label-y", "right", "axis-label-y", "bottom", "axis-line-label-x", "left", "axis-line-label-y", "left", "axis-line-arrow-x", "right", "axis-line-arrow-y", "right", "top"];
      };

      var _c27 = function _c27(a0, a1, a3, a4, a5, a7) {
        return {
          "text-field": a0,
          "text-size": a1,
          "text-allow-overlap": true,
          "text-font": a3,
          "text-rotate": a4,
          "text-radial-offset": a5,
          "text-justify": "auto",
          "text-anchor": a7
        };
      };

      var _c28 = function _c28() {
        return {
          "text-color": "#000"
        };
      };

      var _c29 = function _c29() {
        return ["get", "icon"];
      };

      var _c30 = function _c30() {
        return ["get", "areaSize"];
      };

      var _c31 = function _c31() {
        return ["get", "labelPosition"];
      };

      var _c32 = function _c32(a1) {
        return ["==", a1, ""];
      };

      var _c33 = function _c33(a1, a3) {
        return ["case", a1, "", a3];
      };

      var _c34 = function _c34() {
        return ["top", "bottom", "left", "right"];
      };

      var _c35 = function _c35(a0, a2, a3, a5, a10) {
        return {
          "icon-image": a0,
          "icon-allow-overlap": true,
          "symbol-sort-key": a2,
          "text-field": a3,
          "text-justify": "auto",
          "text-variable-anchor": a5,
          "text-radial-offset": 1,
          "text-optional": true,
          "text-size": 14,
          "text-allow-overlap": true,
          "text-font": a10
        };
      };

      var ScatterplotMapComponent = /*#__PURE__*/function () {
        function ScatterplotMapComponent(dataProcessorService, xMacroscopeDataService) {
          _classCallCheck(this, ScatterplotMapComponent);

          this.dataProcessorService = dataProcessorService;
          this.xMacroscopeDataService = xMacroscopeDataService;
          this.nodeDefaults = {
            shape: 'circle',
            areaSize: 16,
            color: '#000',
            transparency: 0
          };
          this.nodes$ = rxjs__WEBPACK_IMPORTED_MODULE_35__.EMPTY; // Outputs

          this.nodeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_36__.EventEmitter();
          this.style = blankStyle;
          this.nodes = [];
        }

        _createClass(ScatterplotMapComponent, [{
          key: "worldBbox2d",
          get: function get() {
            return this.worldBbox;
          }
        }, {
          key: "toNgxDinoEvent",
          value: function toNgxDinoEvent(event, layers, data) {
            var _a;

            var bboxMargin = new maplibre_gl__WEBPACK_IMPORTED_MODULE_9__.Point(4, 4);
            var pointBox = [event.point.sub(bboxMargin), event.point.add(bboxMargin)];
            var features = this.map.queryRenderedFeatures(pointBox, {
              layers: layers
            });
            var itemId = (_a = features[0].properties) === null || _a === void 0 ? void 0 : _a[_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.idSymbol];
            var item = data.find(function (i) {
              return i[_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.idSymbol] === itemId;
            });

            if (item) {
              return new _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.NgxDinoEvent(event.originalEvent, item[_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.rawDataSymbol], item, this);
            }
          }
        }, {
          key: "nodeClicked",
          value: function nodeClicked(event) {
            var ngxDinoEvent = this.toNgxDinoEvent(event, ['nodes'], this.nodes);

            if (ngxDinoEvent) {
              this.nodeClick.emit(ngxDinoEvent);
            }

            this.tempClickListener(ngxDinoEvent);
          } // FIXME: Remove specifics to xMacroscope

        }, {
          key: "tempClickListener",
          value: function tempClickListener(event) {
            var _a, _b;

            var selection = !event || event.data.selected ? [] : [event.data];
            (_b = (_a = this.xMacroscopeDataService.runStreamController) === null || _a === void 0 ? void 0 : _a.selectRuns) === null || _b === void 0 ? void 0 : _b.call(_a, selection);
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter(event) {
            var _a, _b;

            this.map.getCanvas().style.cursor = 'pointer';
            var tooltip = (_b = (_a = event.features) === null || _a === void 0 ? void 0 : _a[0].properties) === null || _b === void 0 ? void 0 : _b.tooltip;
            this.showTooltip(event.originalEvent, tooltip);
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave(_event) {
            this.hideTooltip();
          }
        }, {
          key: "showTooltip",
          value: function showTooltip(event, tooltip) {
            var el = this.tooltipElement.nativeElement;
            var x = event.x,
                y = event.y;

            if (!el || !tooltip) {
              return;
            }

            el.textContent = tooltip;
            el.style.left = "".concat(x - 40, "px");
            el.style.top = "".concat(y - 40, "px");
            el.style.visibility = 'visible';
          }
        }, {
          key: "hideTooltip",
          value: function hideTooltip() {
            var el = this.tooltipElement.nativeElement;

            if (!el) {
              return;
            }

            el.style.visibility = 'hidden';
          }
        }, {
          key: "onMapLoad",
          value: function onMapLoad(map) {
            this.map = map;
            this.map.resize();
            new DataDrivenIcons().addTo(map);
            this.ngOnChanges({
              data: new _angular_core__WEBPACK_IMPORTED_MODULE_36__.SimpleChange(undefined, this.data, false)
            });
          }
        }, {
          key: "layout",
          value: function layout(nodes) {
            var _a, _b;

            if ((0, lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(nodes)) {
              var w = this.map ? this.map.getCanvas().width : 1000;
              var h = this.map ? this.map.getCanvas().height : 1000;
              var gs = this.data.graphicSymbols['points'];

              if (!gs.graphicVariables.x || !gs.graphicVariables.y) {
                nodes = [];
              }

              var xDV = gs.graphicVariables['x'].dataVariable;
              var yDV = gs.graphicVariables['y'].dataVariable;
              var flipX = xDV.dataType !== _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DataType.NUMBER;
              var xScale = this.getScale(nodes, 'x', gs, flipX ? [w, 0] : [0, w]);
              var yScale = this.getScale(nodes, 'y', gs, [h, 0]);

              var _iterator3 = _createForOfIteratorHelper(nodes),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var node = _step3.value;
                  node.position = [(_a = xScale(node.x)) !== null && _a !== void 0 ? _a : 0, (_b = yScale(node.y)) !== null && _b !== void 0 ? _b : 0];
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              var margin = 80;
              var bounds = new Cartesian2dBounds(-margin, w + margin, -margin, h + margin);
              var projection = new Cartesian2dProjection(bounds);
              this.nodes = nodes;
              this.nodesGeoJson = nodesGeoJson(nodes, projection);
              var grid = this.getGrid(xScale, yScale, projection, xDV.label, yDV.label);
              this.graticule = grid.geojson;
              this.worldPadding = grid.padding;
              this.worldBbox = (0, _turf_bbox__WEBPACK_IMPORTED_MODULE_4__["default"])(this.graticule);
            }
          }
        }, {
          key: "getGrid",
          value: function getGrid(xScale, yScale, projection) {
            var xAxisLabel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            var yAxisLabel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
            var numTicks = 10;
            var xTicks = this.getTicks(xScale, numTicks);
            var yTicks = this.getTicks(yScale, numTicks);
            var _projection$sourceBou = projection.sourceBounds,
                minX = _projection$sourceBou.minX,
                maxX = _projection$sourceBou.maxX,
                minY = _projection$sourceBou.minY,
                maxY = _projection$sourceBou.maxY;
            return withAxes((0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.featureCollection)([].concat(_toConsumableArray(xTicks.map(function (t) {
              return (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.lineString)([projection.toLngLat(t.point, minY).toArray(), projection.toLngLat(t.point, maxY).toArray()], {
                type: 'grid-line-x',
                label: t.label
              });
            })), _toConsumableArray(yTicks.map(function (t) {
              return (0, _turf_helpers__WEBPACK_IMPORTED_MODULE_7__.lineString)([projection.toLngLat(minX, t.point).toArray(), projection.toLngLat(maxX, t.point).toArray()], {
                type: 'grid-line-y',
                label: t.label
              });
            })))), xAxisLabel, yAxisLabel);
          }
        }, {
          key: "getTicks",
          value: function getTicks(scale, numTicks) {
            if (scale.ticks && scale.tickFormat) {
              var ticks = scale.ticks(numTicks);
              var formatter = scale.tickFormat(numTicks);
              return ticks.map(function (tick) {
                var _a;

                return {
                  point: (_a = scale(tick)) !== null && _a !== void 0 ? _a : 0,
                  label: formatter(tick)
                };
              });
            } else if (scale.domain) {
              var _ticks = scale.domain();

              return _ticks.map(function (label) {
                var _a;

                return {
                  point: (_a = scale(label)) !== null && _a !== void 0 ? _a : 0,
                  label: label
                };
              });
            }

            return [];
          }
        }, {
          key: "getScale",
          value: function getScale(nodes, gvName, graphicSymbol) {
            var range = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [1000, 0];

            var _a;

            var gv = graphicSymbol.graphicVariables[gvName];

            var getGVValue = function getGVValue(node) {
              return node[gvName];
            };

            switch (gv.dataVariable.dataType) {
              case _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DataType.NUMBER:
                {
                  // const domainL: number[] = extent(nodes, n => +n[gvName]);
                  // FIXME: Remove xMacroscope specific customization.
                  var domainL = [0, (_a = (0, d3_array__WEBPACK_IMPORTED_MODULE_40__["default"])(nodes, function (node) {
                    return +getGVValue(node);
                  })[1]) !== null && _a !== void 0 ? _a : 0];
                  var scaleL = (0, d3_scale__WEBPACK_IMPORTED_MODULE_41__["default"])().domain(domainL).nice(10).rangeRound(range);
                  return scaleL;
                }

              case _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DataType.BOOLEAN:
              case _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DataType.UNKNOWN:
              case _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DataType.STRING:
              default:
                {
                  var domainP = (0, lodash__WEBPACK_IMPORTED_MODULE_0__.reverse)((0, lodash__WEBPACK_IMPORTED_MODULE_0__.sortedUniq)(nodes.map(getGVValue).sort()));
                  var scaleP = (0, d3_scale__WEBPACK_IMPORTED_MODULE_42__.point)().domain(domainP).padding(0.5).rangeRound(range);
                  return scaleP;
                }
            }
          }
        }, {
          key: "refreshNodes",
          value: function refreshNodes() {
            var _this17 = this;

            if (this.data) {
              this.nodes$ = this.getGraphicSymbolData('points', this.nodeDefaults);
            } else {
              this.nodes$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_32__.of)([]);
            }

            if (this.nodesSubscription) {
              this.nodesSubscription.unsubscribe();
            }

            this.nodesSubscription = this.nodes$.subscribe(function (nodes) {
              return _this17.layout(nodes);
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('data' in changes) {
              this.refreshNodes();
            }
          }
        }, {
          key: "dvlOnGraphicSymbolChange",
          value: function dvlOnGraphicSymbolChange(changes) {
            if ('points' in changes) {
              this.refreshNodes();
            }
          }
        }, {
          key: "dvlOnPropertyChange",
          value: function dvlOnPropertyChange(changes) {
            if ('pointDefaults' in changes) {
              this.nodeDefaults = this.data.properties.pointDefaults;
              this.refreshNodes();
            }
          }
        }, {
          key: "getGraphicSymbolData",
          value: function getGraphicSymbolData(slot) {
            var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return new GraphicSymbolData(this.dataProcessorService, this.data, slot, defaults).asDataArray();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.nodesSubscription) {
              this.nodesSubscription.unsubscribe();
            }
          }
        }]);

        return ScatterplotMapComponent;
      }();

      ScatterplotMapComponent.ɵfac = function ScatterplotMapComponent_Factory(t) {
        return new (t || ScatterplotMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdirectiveInject"](_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.DataProcessorService), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdirectiveInject"](_XMacroscopeDataService));
      };

      ScatterplotMapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineComponent"]({
        type: ScatterplotMapComponent,
        selectors: [["mav-scatterplot-map"]],
        viewQuery: function ScatterplotMapComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵloadQuery"]()) && (ctx.tooltipElement = _t.first);
          }
        },
        inputs: {
          data: "data"
        },
        outputs: {
          nodeClick: "nodeClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵProvidersFeature"]([ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.MapService]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵNgOnChangesFeature"]],
        decls: 8,
        vars: 115,
        consts: [[1, "tooltip"], ["tooltipElement", ""], [3, "zoom", "center", "fitBounds", "fitBoundsOptions", "renderWorldCopies", "interactive", "load"], ["id", "graticule", 3, "data"], ["id", "nodes", 3, "data"], ["id", "graticule", "source", "graticule", "type", "line", 3, "filter", "paint"], ["id", "graticule-labels", "source", "graticule", "type", "symbol", 3, "filter", "paint", "layout"], ["id", "nodes", "source", "nodes", "type", "symbol", 3, "paint", "layout", "click", "mouseEnter", "mouseLeave"]],
        template: function ScatterplotMapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementStart"](2, "mgl-map", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵlistener"]("load", function ScatterplotMapComponent_Template_mgl_map_load_2_listener($event) {
              return ctx.onMapLoad($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](3, "mgl-geojson-source", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](4, "mgl-geojson-source", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](5, "mgl-layer", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](6, "mgl-layer", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementStart"](7, "mgl-layer", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵlistener"]("click", function ScatterplotMapComponent_Template_mgl_layer_click_7_listener($event) {
              return ctx.nodeClicked($event);
            })("mouseEnter", function ScatterplotMapComponent_Template_mgl_layer_mouseEnter_7_listener($event) {
              return ctx.onMouseEnter($event);
            })("mouseLeave", function ScatterplotMapComponent_Template_mgl_layer_mouseLeave_7_listener($event) {
              return ctx.onMouseLeave($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵstyleMap"](ctx.style);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("zoom", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](17, _c1))("center", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](18, _c2))("fitBounds", ctx.worldBbox2d)("fitBoundsOptions", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](19, _c3, ctx.worldPadding))("renderWorldCopies", false)("interactive", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("data", ctx.graticule);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("data", ctx.nodesGeoJson);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("filter", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](21, _c4))("paint", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction2"](28, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](23, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](22, _c5)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](26, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](25, _c5))));

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("filter", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](31, _c9))("paint", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction3"](41, _c13, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](33, _c10, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](32, _c5)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](36, _c11, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](35, _c5)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](39, _c12, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](38, _c5))))("layout", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction6"](90, _c27, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](45, _c14), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](47, _c15, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](46, _c5)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction6"](65, _c20, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](49, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](51, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](50, _c16)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](54, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](53, _c16)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](57, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](56, _c18)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](60, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](59, _c18)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](63, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](62, _c19))), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction4"](73, _c21, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](72, _c5), -90, -90, -90), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction2"](84, _c25, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](78, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](82, _c24, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](80, _c23, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](79, _c22)))), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](88, _c26, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](87, _c5))));

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](97, _c28))("layout", _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction5"](109, _c35, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](98, _c29), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](99, _c30), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction2"](104, _c33, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction1"](101, _c32, _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](100, _c31)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](103, _c14)), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](107, _c34), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵpureFunction0"](108, _c19)));
          }
        },
        directives: [ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.MapComponent, ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.GeoJSONSourceComponent, ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.LayerComponent],
        styles: ["mgl-map[_ngcontent-%COMP%]{height:100%;width:100%}.tooltip[_ngcontent-%COMP%]{position:fixed;text-align:left;width:auto;height:auto;padding:5px;font:12px open-sans;color:#fff;background:black;pointer-events:none;opacity:0;z-index:10;display:inline-block;visibility:hidden;opacity:.7;transition:opacity .2s}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵsetClassMetadata"](ScatterplotMapComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Component,
          args: [{
            selector: 'mav-scatterplot-map',
            templateUrl: './scatterplot-map.component.html',
            styleUrls: ['./scatterplot-map.component.scss'],
            providers: [ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.MapService]
          }]
        }], function () {
          return [{
            type: _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.DataProcessorService
          }, {
            type: _XMacroscopeDataService
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Input
          }],
          nodeClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Output
          }],
          tooltipElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.ViewChild,
            args: ['tooltipElement', {
              "static": true
            }]
          }]
        });
      })();

      var ScatterplotMapVisualization = /*#__PURE__*/function (_dvl_fw_core__WEBPACK5) {
        _inherits(ScatterplotMapVisualization, _dvl_fw_core__WEBPACK5);

        var _super10 = _createSuper(ScatterplotMapVisualization);

        function ScatterplotMapVisualization() {
          var _this18;

          _classCallCheck(this, ScatterplotMapVisualization);

          _this18 = _super10.apply(this, arguments);
          _this18.defaultDescription = 'A scatter graph visualization uses Cartesian coordinates as a reference system. In the current MAV, records are represented by circles. Circles are placed based on values for two data variables: one plotted along the x-axis, the other along the y-axis. Circles can be size coded and color coded to represent additional data variables. A third data variable can be added to the graph using tooltips for circles.';
          _this18.component = ScatterplotMapComponent;
          _this18.graphicSymbolOptions = [{
            id: 'points',
            label: 'Points',
            type: 'area',
            graphicVariableOptions: [{
              type: 'identifier',
              label: 'Identifier',
              visualization: 'id',
              scaleType: 'ratio',
              required: true
            }, {
              id: 'x',
              type: 'axis',
              label: 'X-Axis',
              visualization: 'x-axis',
              required: true
            }, {
              id: 'y',
              type: 'axis',
              label: 'Y-Axis',
              visualization: 'y-axis',
              required: true
            }, {
              type: 'color',
              label: 'Color Hue',
              visualization: 'color',
              scaleType: 'nominal',
              staticVisualization: 'color-area'
            }, {
              id: 'strokeColor',
              type: 'color',
              label: 'Stroke Color Hue',
              visualization: 'color',
              advanced: true
            }, {
              type: 'areaSize',
              label: 'Size',
              visualization: 'node-size',
              scaleType: 'ratio',
              staticVisualization: 'area-size'
            }, {
              type: 'transparency',
              label: 'Transparency',
              advanced: true
            }, {
              id: 'strokeTransparency',
              type: 'transparency',
              label: 'Stroke Transparency',
              advanced: true
            }, {
              id: 'tooltip',
              type: 'text',
              label: 'Tooltip',
              visualization: 'label'
            }, {
              type: 'shape',
              label: 'Shape',
              advanced: true
            }, {
              type: 'pulse',
              label: 'Pulse',
              advanced: true
            }]
          }];
          return _this18;
        }

        return ScatterplotMapVisualization;
      }(_dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultVisualization);

      var ScatterplotMapVisualizationFactory = /*#__PURE__*/function () {
        function ScatterplotMapVisualizationFactory() {
          _classCallCheck(this, ScatterplotMapVisualizationFactory);

          this.id = 'scattergraph';
          this.type = 'visualization';
        }

        _createClass(ScatterplotMapVisualizationFactory, [{
          key: "fromJSON",
          value: function fromJSON(data, context, _registry) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", new ScatterplotMapVisualization(data, context));

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }, {
          key: "toJSON",
          value: function toJSON(instance, _context, _registry) {
            return instance.toJSON();
          }
        }]);

        return ScatterplotMapVisualizationFactory;
      }();

      function TableComponent_ng_container_2_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementStart"](0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtextInterpolate"](ctx_r4.columns[column_r3].label);
        }
      }

      function TableComponent_ng_container_2_td_2_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](0, "img", 11);
        }

        if (rf & 2) {
          var element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵnextContext"]().$implicit;

          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("src", element_r7[column_r3], _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵsanitizeUrl"]);
        }
      }

      function TableComponent_ng_container_2_td_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵnextContext"]().$implicit;

          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtextInterpolate"](element_r7[column_r3]);
        }
      }

      function TableComponent_ng_container_2_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵlistener"]("click", function TableComponent_ng_container_2_td_2_Template_td_click_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵrestoreView"](_r15);

            var element_r7 = restoredCtx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵnextContext"](2);

            return ctx_r14.rowClicked($event, element_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtemplate"](1, TableComponent_ng_container_2_td_2_img_1_Template, 1, 1, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtemplate"](2, TableComponent_ng_container_2_td_2_ng_template_2_Template, 1, 1, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r7 = ctx.$implicit;

          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵstyleProp"]("background-color", element_r7.color || undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵclassProp"]("selected", element_r7.pulse);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("ngSwitch", ctx_r5.columns[column_r3].type);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("ngSwitchCase", "imageUrl");
        }
      }

      function TableComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementContainerStart"](0, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtemplate"](1, TableComponent_ng_container_2_th_1_Template, 2, 1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtemplate"](2, TableComponent_ng_container_2_td_2_Template, 3, 6, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var column_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("matColumnDef", column_r3);
        }
      }

      function TableComponent_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](0, "tr", 12);
        }
      }

      function TableComponent_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](0, "tr", 13);
        }
      }

      var TableComponent = /*#__PURE__*/function () {
        function TableComponent(dataProcessorService, xMacroscopeDataService) {
          _classCallCheck(this, TableComponent);

          this.dataProcessorService = dataProcessorService;
          this.xMacroscopeDataService = xMacroscopeDataService; // Outputs

          this.nodeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_36__.EventEmitter();
          this.items$ = rxjs__WEBPACK_IMPORTED_MODULE_35__.EMPTY;
          this.columns = {};
          this.displayedColumns = [];
        }

        _createClass(TableComponent, [{
          key: "getColumns",
          value: function getColumns(gs) {
            var columns = {};
            (0, lodash__WEBPACK_IMPORTED_MODULE_0__.entries)(gs.graphicVariables).filter(function (_ref8) {
              var _ref9 = _slicedToArray(_ref8, 1),
                  key = _ref9[0];

              return key !== 'identifier' && key !== 'order' && key !== 'pulse' && key !== 'color';
            }).forEach(function (_ref10) {
              var _ref11 = _slicedToArray(_ref10, 2),
                  id = _ref11[0],
                  gv = _ref11[1];

              columns[id] = {
                id: id,
                label: gv.label || gv.dataVariable.label,
                type: gv.type
              };
            });
            return columns;
          }
        }, {
          key: "refreshItems",
          value: function refreshItems() {
            if (this.data) {
              this.columns = this.getColumns(this.data.graphicSymbols['items']);
              this.displayedColumns = Object.keys(this.columns);
              this.items$ = this.getGraphicSymbolData('items').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.map)(function (items) {
                return (0, lodash__WEBPACK_IMPORTED_MODULE_0__.orderBy)(items, 'order', 'asc');
              }));
            } else {
              this.items$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_32__.of)([]);
            }
          }
        }, {
          key: "toNgxDinoEvent",
          value: function toNgxDinoEvent(event, item) {
            if (item) {
              return new _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.NgxDinoEvent(event.type, item[_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.rawDataSymbol], item, this, event);
            }
          }
        }, {
          key: "rowClicked",
          value: function rowClicked(event, item) {
            var ngxDinoEvent = this.toNgxDinoEvent(event, item);

            if (ngxDinoEvent) {
              this.nodeClick.emit(ngxDinoEvent);
            }

            this.tempClickListener(ngxDinoEvent);
          } // FIXME: Remove specifics to xMacroscope

        }, {
          key: "tempClickListener",
          value: function tempClickListener(event) {
            var _a, _b;

            var selection = !event || event.data.selected ? [] : [event.data];
            (_b = (_a = this.xMacroscopeDataService.runStreamController) === null || _a === void 0 ? void 0 : _a.selectRuns) === null || _b === void 0 ? void 0 : _b.call(_a, selection);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.refreshItems();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('data' in changes) {
              this.refreshItems();
            }
          }
        }, {
          key: "dvlOnGraphicSymbolChange",
          value: function dvlOnGraphicSymbolChange(changes) {
            if ('items' in changes) {
              this.refreshItems();
            }
          }
        }, {
          key: "dvlOnPropertyChange",
          value: function dvlOnPropertyChange(changes) {
            if ('itemDefaults' in changes) {
              this.refreshItems();
            }
          }
        }, {
          key: "getGraphicSymbolData",
          value: function getGraphicSymbolData(slot) {
            var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return new GraphicSymbolData(this.dataProcessorService, this.data, slot, defaults).asDataArray();
          }
        }]);

        return TableComponent;
      }();

      TableComponent.ɵfac = function TableComponent_Factory(t) {
        return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdirectiveInject"](_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.DataProcessorService), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdirectiveInject"](_XMacroscopeDataService));
      };

      TableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineComponent"]({
        type: TableComponent,
        selectors: [["mav-table"]],
        inputs: {
          data: "data"
        },
        outputs: {
          nodeClick: "nodeClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 4,
        consts: [["mat-table", "", 1, "mav-table", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "selected", "background-color", "ngSwitch", "click", 4, "matCellDef"], ["scope", "col", "mat-header-cell", ""], ["mat-cell", "", 3, "ngSwitch", "click"], ["alt", "", "class", "image-url", 3, "src", 4, "ngSwitchCase"], ["ngSwitchDefault", ""], ["alt", "", 1, "image-url", 3, "src"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function TableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelement"](1, "caption");

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtemplate"](2, TableComponent_ng_container_2_Template, 3, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtemplate"](3, TableComponent_tr_3_Template, 1, 0, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵtemplate"](4, TableComponent_tr_4_Template, 1, 0, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("dataSource", ctx.items$);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatTable, _angular_common__WEBPACK_IMPORTED_MODULE_38__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_38__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_38__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_38__.NgSwitchDefault, _angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatRow],
        styles: [".mav-table[_ngcontent-%COMP%]{width:100%}.mav-table[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{background-color:gray}.mav-table[_ngcontent-%COMP%]   .image-url[_ngcontent-%COMP%]{height:3rem}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵsetClassMetadata"](TableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Component,
          args: [{
            selector: 'mav-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.scss']
          }]
        }], function () {
          return [{
            type: _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.DataProcessorService
          }, {
            type: _XMacroscopeDataService
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Input
          }],
          nodeClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Output
          }]
        });
      })();

      var TableVisualization = /*#__PURE__*/function (_dvl_fw_core__WEBPACK6) {
        _inherits(TableVisualization, _dvl_fw_core__WEBPACK6);

        var _super11 = _createSuper(TableVisualization);

        function TableVisualization() {
          var _this19;

          _classCallCheck(this, TableVisualization);

          _this19 = _super11.apply(this, arguments);
          _this19.defaultDescription = 'A table displaying data.';
          _this19.component = TableComponent;
          _this19.graphicSymbolOptions = [{
            id: 'data',
            label: 'Data',
            type: 'area',
            graphicVariableOptions: [{
              type: 'identifier',
              label: 'Identifier',
              visualization: 'id',
              scaleType: 'ratio',
              required: true
            }, {
              type: 'order',
              label: 'Sort Order'
            }, {
              type: 'color',
              label: 'Color Hue',
              visualization: 'color',
              scaleType: 'nominal',
              staticVisualization: 'color-area'
            }]
          }];
          return _this19;
        }

        return TableVisualization;
      }(_dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultVisualization);

      var TableVisualizationFactory = /*#__PURE__*/function () {
        function TableVisualizationFactory() {
          _classCallCheck(this, TableVisualizationFactory);

          this.id = 'table';
          this.type = 'visualization';
        }

        _createClass(TableVisualizationFactory, [{
          key: "fromJSON",
          value: function fromJSON(data, context, _registry) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", new TableVisualization(data, context));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }, {
          key: "toJSON",
          value: function toJSON(instance, _context, _registry) {
            return instance.toJSON();
          }
        }]);

        return TableVisualizationFactory;
      }(); // TODO: Make opponent locations be data/site driven
      // TODO: Get Minnesota and California locations


      function getOpponentRuns(location) {
        /* eslint-disable @typescript-eslint/naming-convention */
        var opponentRunData = [{
          id: 'penguin-run',
          start: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'year').toDate(),
          end: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'year').add(5.48, 'seconds').toDate(),
          pinned: true,
          person: {
            id: 'penguin',
            icon: 'penguin',
            age: 13,
            height: 35,
            opponent: 'real-penguin',
            shoes: 'penguin-feet'
          },
          locations: {
            'Indiana': {
              zipCode: '47907',
              state: 'IN',
              latitude: 40.4237,
              longitude: -86.9212
            },
            'Minnesota': {
              zipCode: '47907',
              state: 'IN',
              latitude: 40.4237,
              longitude: -86.9212
            },
            'Ohio': {
              zipCode: '44114',
              state: 'OH',
              latitude: 41.5085,
              longitude: -81.6954
            },
            'California': {
              zipCode: '47907',
              state: 'IN',
              latitude: 40.4237,
              longitude: -86.9212
            }
          }
        }, {
          id: 'squirrel-run',
          start: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(2, 'year').toDate(),
          end: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(2, 'year').add(2.20, 'seconds').toDate(),
          pinned: true,
          person: {
            id: 'squirrel',
            icon: 'squirrel',
            age: 3,
            height: 11,
            opponent: 'real-squirrel',
            shoes: 'squirrel-feet'
          },
          locations: {
            'Indiana': {
              zipCode: '47405',
              state: 'IN',
              latitude: 39.1727,
              longitude: -86.5222
            },
            'Minnesota': {
              zipCode: '47907',
              state: 'IN',
              latitude: 40.4237,
              longitude: -86.9212
            },
            'Ohio': {
              zipCode: '43215',
              state: 'OH',
              latitude: 39.959836,
              longitude: -83.007020
            },
            'California': {
              zipCode: '47907',
              state: 'IN',
              latitude: 40.4237,
              longitude: -86.9212
            }
          }
        }, {
          id: 'cheetah-run',
          start: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(3, 'year').toDate(),
          end: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(3, 'year').add(0.37, 'seconds').toDate(),
          pinned: true,
          person: {
            id: 'cheetah',
            icon: 'cheetah',
            age: 5,
            height: 36,
            opponent: 'real-cheetah',
            shoes: 'cheetah-feet'
          },
          locations: {
            'Indiana': {
              zipCode: '46202',
              state: 'IN',
              latitude: 39.7739,
              longitude: -86.1763
            },
            'Minnesota': {
              zipCode: '47907',
              state: 'IN',
              latitude: 40.4237,
              longitude: -86.9212
            },
            'Ohio': {
              zipCode: '45220',
              state: 'OH',
              latitude: 39.1433,
              longitude: -84.5090
            },
            'California': {
              zipCode: '47907',
              state: 'IN',
              latitude: 40.4237,
              longitude: -86.9212
            }
          }
        }];
        /* eslint-enable @typescript-eslint/naming-convention */

        return opponentRunData.map(function (run) {
          return Object.assign(run.person, run.locations[location], run);
        });
      }

      var opponentRuns = {
        'default': getOpponentRuns('Indiana'),
        'inspirata': getOpponentRuns('Ohio'),
        'cosi': getOpponentRuns('Ohio'),
        'cns-iu': getOpponentRuns('Indiana'),
        'smm': getOpponentRuns('Minnesota'),
        'uci': getOpponentRuns('California')
      };

      var GraphQLRunDataStream = /*#__PURE__*/function () {
        function GraphQLRunDataStream(runStreamController, endpoint) {
          _classCallCheck(this, GraphQLRunDataStream);

          this.runStreamController = runStreamController;
          this.endpoint = endpoint;
          this.id = 'runs';
          this.label = 'Runs';
          this.client = new GraphqlClient(endpoint).client;
          (0, rxjs__WEBPACK_IMPORTED_MODULE_44__.merge)(this.getPastRunsCompleted(runStreamController.historySize), this.subscribeToMessages()).subscribe(function (message) {
            return runStreamController.sendMessage(message);
          });
        }

        _createClass(GraphQLRunDataStream, [{
          key: "asObservable",
          value: function asObservable() {
            return this.runStreamController.createRunStream();
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return (0, lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(this, ['id', 'label']);
          }
        }, {
          key: "getPastRunsCompleted",
          value: function getPastRunsCompleted(lastX) {
            var _this20 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_45__.defer)(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var results;
                return regeneratorRuntime.wrap(function _callee7$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return this.client.query({
                          query: RECENT_RUNS,
                          variables: {
                            lastX: lastX
                          }
                        });

                      case 2:
                        results = _context8.sent;
                        return _context8.abrupt("return", (0, lodash__WEBPACK_IMPORTED_MODULE_0__.reverse)(results.data.Runs));

                      case 4:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee7, this);
              }));
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.map)(function (runs) {
              return runs.map(function (run) {
                return asMessage({
                  type: 'run-finished',
                  timestamp: run.end,
                  run: run
                });
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_46__.concatMap)(function (r) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_47__.from)(r);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_48__.delay)(200));
          }
        }, {
          key: "subscribeToMessages",
          value: function subscribeToMessages() {
            var _this21 = this;

            // Zen observables should technically be interoperable with rxjs observables
            // But to be on the safe side manually convert between them
            var queryResult = new rxjs__WEBPACK_IMPORTED_MODULE_49__.Observable(function (observer) {
              var boundObserver = {
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer)
              };

              var query = _this21.client.subscribe({
                query: MESSAGE_SUBSCRIPTION
              });

              var sub = query.subscribe(boundObserver);
              return function () {
                return sub.unsubscribe();
              };
            });
            return queryResult.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.map)(function (result) {
              var _a;

              return asMessage((_a = result.data) === null || _a === void 0 ? void 0 : _a.runMessageSubscription);
            }));
          }
        }]);

        return GraphQLRunDataStream;
      }();

      var MockRunDataStream = /*#__PURE__*/function () {
        function MockRunDataStream(runStreamController) {
          _classCallCheck(this, MockRunDataStream);

          this.runStreamController = runStreamController;
          this.id = 'runs';
          this.label = 'Runs';
          this.mocker = new RunMocker({
            next: runStreamController.sendMessage.bind(runStreamController)
          });
          this.mocker.startMocking();
          this.mocker.sendPastRuns(this.runStreamController.historySize);
        }

        _createClass(MockRunDataStream, [{
          key: "asObservable",
          value: function asObservable() {
            return this.runStreamController.createRunStream();
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return (0, lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(this, ['id', 'label']);
          }
        }]);

        return MockRunDataStream;
      }();

      var ChangeTracker = /*#__PURE__*/function () {
        function ChangeTracker(stream, count, highlightCount) {
          var _this22 = this;

          _classCallCheck(this, ChangeTracker);

          this.count = count;
          this.highlightCount = highlightCount;
          this.accumulator = [];
          this.runsSelected = false;
          this.changeStream = stream.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_50__.filter)(function (message) {
            return message instanceof _RunFinishedMessage;
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.map)(function (message) {
            return message.run;
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.map)(function (runs) {
            return _this22.accumulate([runs]);
          }));
        }

        _createClass(ChangeTracker, [{
          key: "asObservable",
          value: function asObservable() {
            return this.changeStream;
          }
        }, {
          key: "snapshot",
          value: function snapshot() {
            return _toConsumableArray(this.accumulator);
          }
        }, {
          key: "accumulate",
          value: function accumulate(runs) {
            var _this23 = this;

            var inserted = [];
            var removed = [];
            var replaced = [];
            var addCount = runs.length;
            var currentCount = this.accumulator.length,
                maxCount = this.count,
                highlightCount = this.highlightCount;
            var accumulator = this.accumulator; // Add to/remove from accumulator

            if (addCount >= maxCount) {
              inserted = runs.slice(-maxCount);
              removed = _toConsumableArray(accumulator);
              accumulator = inserted;
            } else {
              var removeCount = Math.max(0, currentCount + addCount - maxCount);
              inserted = runs;
              accumulator = accumulator.concat(runs);

              if (removeCount > 0) {
                removed = accumulator.slice(0, removeCount);
                accumulator = accumulator.slice(removeCount);
              }
            } // Update highlights


            accumulator.forEach(function (run, index) {
              var fromTheEnd = accumulator.length - index;

              if (fromTheEnd <= highlightCount && !_this23.runsSelected) {
                run.highlighted = true;
              } else if (run.highlighted) {
                var runClone = new _Run(run);
                run.highlighted = false;
                runClone.highlighted = false;
                replaced.push([run, runClone]);
              }
            });
            this.accumulator = accumulator;
            return new _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.RawChangeSet(inserted, removed, undefined, replaced);
          }
        }, {
          key: "selectRuns",
          value: function selectRuns(runs) {
            var runsSelected = this.runsSelected = runs.length > 0;
            var replaced = [];
            var run2id = {};
            runs.forEach(function (r) {
              return run2id[r.id] = r;
            });
            var newSnapshot = []; // FIXME: This is a little too complicated/wordy. Simplify.

            if (runsSelected) {
              this.accumulator.forEach(function (run) {
                if (run.id in run2id) {
                  var runClone = new _Run(run);
                  runClone.selected = true;
                  runClone.highlighted = false;
                  replaced.push([run, runClone]);
                  newSnapshot.push(runClone);
                } else if (run.selected || run.highlighted) {
                  var _runClone = new _Run(run);

                  _runClone.selected = false;
                  _runClone.highlighted = false;
                  replaced.push([run, _runClone]);
                  newSnapshot.push(_runClone);
                } else {
                  newSnapshot.push(run);
                }
              });
            } else {
              var highlightCount = this.highlightCount;
              this.accumulator.forEach(function (run, index, accumulator) {
                var fromTheEnd = accumulator.length - index;

                if (fromTheEnd <= highlightCount) {
                  var runClone = new _Run(run);
                  runClone.highlighted = true;
                  runClone.selected = false;
                  replaced.push([run, runClone]);
                  newSnapshot.push(runClone);
                } else if (run.highlighted || run.selected) {
                  var _runClone2 = new _Run(run);

                  _runClone2.highlighted = false;
                  _runClone2.selected = false;
                  replaced.push([run, _runClone2]);
                  newSnapshot.push(_runClone2);
                } else {
                  newSnapshot.push(run);
                }
              });
            }

            this.accumulator = newSnapshot;
            return new _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.RawChangeSet([], [], [], replaced);
          }
        }]);

        return ChangeTracker;
      }();

      var _RunStreamController = /*#__PURE__*/function () {
        function _RunStreamController() {
          var _this24 = this;

          var historySize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
          var highlightCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

          _classCallCheck(this, _RunStreamController);

          this.historySize = historySize;
          this.highlightCount = highlightCount;
          this.opponentRuns = [];
          this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_51__.Subject();
          this.emitter = new rxjs__WEBPACK_IMPORTED_MODULE_51__.Subject();
          this.starter = new rxjs__WEBPACK_IMPORTED_MODULE_51__.Subject();
          this.stopper = new rxjs__WEBPACK_IMPORTED_MODULE_51__.Subject();
          this.running = true;
          this.snapshot = [];
          this.messageStream = this.messages.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_52__.share)());
          this.changeTracker = new ChangeTracker(this.messageStream, this.historySize, this.highlightCount);
          this.runStream = (0, rxjs__WEBPACK_IMPORTED_MODULE_44__.merge)(this.changeTracker.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_53__.windowToggle)(this.starter, function () {
            return _this24.stopper;
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_54__.mergeAll)()), this.emitter).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_52__.share)());
          setTimeout(function () {
            return _this24.starter.next();
          }, 0);
          this.runStream.subscribe();
        }

        _createClass(_RunStreamController, [{
          key: "sendMessage",
          value: function sendMessage(message) {
            this.messages.next(message);
          }
        }, {
          key: "sendRunChange",
          value: function sendRunChange(change) {
            this.emitter.next(change);
          }
        }, {
          key: "selectRuns",
          value: function selectRuns(runs) {
            var change = this.changeTracker.selectRuns(runs);
            this.emitter.next(change);
          }
        }, {
          key: "createRunStream",
          value: function createRunStream() {
            var opponentRuns = (0, rxjs__WEBPACK_IMPORTED_MODULE_32__.of)(_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.RawChangeSet.fromArray(this.opponentRuns));
            var snapshot = (0, rxjs__WEBPACK_IMPORTED_MODULE_32__.of)(_ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.RawChangeSet.fromArray(this.changeTracker.snapshot()));
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_44__.merge)(opponentRuns, snapshot, this.runStream);
          }
        }, {
          key: "start",
          value: function start() {
            if (!this.running) {
              this.emitter.next(this.snapshotDiff(_toConsumableArray(this.snapshot), this.changeTracker.snapshot()));
              this.starter.next();
              this.running = true;
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            if (this.running) {
              this.stopper.next();
              this.running = false;
              this.snapshot = this.changeTracker.snapshot();
            }
          }
        }, {
          key: "snapshotDiff",
          value: function snapshotDiff(snapshot1, snapshot2) {
            if (snapshot1.length === 0) {
              return new _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.RawChangeSet(snapshot2);
            } else if (snapshot2.length === 0) {
              return new _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.RawChangeSet(undefined, snapshot1);
            }

            var first = snapshot2[0];
            var index = snapshot1.lastIndexOf(first);

            if (index >= 0) {
              var diffCount = snapshot1.length - index;
              return new _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.RawChangeSet(snapshot2.slice(diffCount), snapshot1.slice(0, index), undefined, snapshot2.slice(0, diffCount).map(function (item) {
                return [item, item];
              }));
            } else {
              return new _ngx_dino_core__WEBPACK_IMPORTED_MODULE_14__.RawChangeSet(snapshot2, snapshot1);
            }
          }
        }]);

        return _RunStreamController;
      }();

      var _XMacroscopeDataSource = /*#__PURE__*/function () {
        function _XMacroscopeDataSource(data, _project) {
          _classCallCheck(this, _XMacroscopeDataSource);

          this.template = 'xmacroscope';
          this.runStreamController = new _RunStreamController();
          this.id = data.id;
          this.properties = data.properties;
          this.recordStreams = this.createRecordStreams();
        }

        _createClass(_XMacroscopeDataSource, [{
          key: "toJSON",
          value: function toJSON() {
            return {
              id: this.id,
              template: this.template,
              properties: this.properties,
              recordStreams: this.recordStreams.map(function (s) {
                return s.toJSON();
              })
            };
          }
        }, {
          key: "createRecordStreams",
          value: function createRecordStreams() {
            var _this$properties = this.properties,
                mockData = _this$properties.mockData,
                endpoint = _this$properties.endpoint,
                controller = this.runStreamController;

            if (mockData) {
              return [new MockRunDataStream(controller)];
            } else if (endpoint) {
              return [new GraphQLRunDataStream(controller, endpoint)];
            }

            return [];
          }
        }]);

        return _XMacroscopeDataSource;
      }();

      var _XMacroscopeDataSourceFactory = /*#__PURE__*/function () {
        function _XMacroscopeDataSourceFactory() {
          _classCallCheck(this, _XMacroscopeDataSourceFactory);

          this.id = 'xmacroscope';
          this.type = 'dataSource';
        }

        _createClass(_XMacroscopeDataSourceFactory, [{
          key: "fromJSON",
          value: function fromJSON(data, context, _registry) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      return _context9.abrupt("return", new _XMacroscopeDataSource(data, context));

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee8);
            }));
          }
        }, {
          key: "toJSON",
          value: function toJSON(instance, _context, _registry) {
            return instance.toJSON();
          }
        }]);

        return _XMacroscopeDataSourceFactory;
      }();

      var _XMacroscopeProject = /*#__PURE__*/function (_dvl_fw_core__WEBPACK7) {
        _inherits(_XMacroscopeProject, _dvl_fw_core__WEBPACK7);

        var _super12 = _createSuper(_XMacroscopeProject);

        function _XMacroscopeProject(config) {
          var _this25;

          _classCallCheck(this, _XMacroscopeProject);

          var _a;

          _this25 = _super12.call(this);
          _this25.config = config;

          if (config.staticData) {
            _this25.dataSources = _this25.getStaticDataSources(config.staticData);
          } else {
            _this25.dataSources = _this25.getDataSources((_a = config.mockData) !== null && _a !== void 0 ? _a : false, config.endpoint);
          }

          _this25.recordSets = _this25.getRecordSets();
          _this25.graphicVariables = _this25.getGraphicVariables();
          _this25.graphicSymbols = _this25.getGraphicSymbols();
          _this25.visualizations = _this25.getVisualizations();
          return _this25;
        }

        _createClass(_XMacroscopeProject, [{
          key: "getDataSources",
          value: function getDataSources(mockData, endpoint) {
            var ds = new _XMacroscopeDataSource({
              id: 'runDataSource',
              properties: {
                mockData: mockData,
                endpoint: endpoint
              },
              recordStreams: [{
                id: 'runs',
                label: 'Runs'
              }]
            }, this);
            this.runStreamController = ds.runStreamController;
            var runs = Array.isArray(this.config.opponentRuns) ? this.config.opponentRuns : [];
            this.runStreamController.opponentRuns = runs.map(function (r) {
              return new _Run(r);
            });
            return [ds];
          }
        }, {
          key: "getStaticDataSources",
          value: function getStaticDataSources(staticData) {
            if (staticData === 'mocked') {
              this.rawData.push(new MockRunRawData({
                id: 'runs',
                template: 'json',
                data: {
                  'runs': []
                }
              }));
            } else {
              var runs = staticData.data.Runs.map(function (run) {
                var _a;

                return (_a = asMessage({
                  type: 'run-finished',
                  timestamp: run.end,
                  run: run
                }).run) === null || _a === void 0 ? void 0 : _a.toJSON();
              });
              this.rawData.push(new _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultRawData({
                id: 'runs',
                template: 'json',
                data: {
                  runs: runs
                }
              }));
            } // TODO: fix associated bug in MAV


            this.rawData.push(new _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultRawData({
              id: 'activityLog',
              template: 'activityLog',
              data: {
                'activityLog': []
              }
            }));
            return [new _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultDataSource({
              id: 'runDataSource',
              template: 'defaultDataSource',
              properties: {
                rawData: 'runs'
              },
              recordStreams: [{
                id: 'runs',
                label: 'Runs'
              }]
            }, this)];
          }
        }, {
          key: "getRecordSets",
          value: function getRecordSets() {
            return [new _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultRecordSet({
              id: 'run',
              label: 'Run',
              labelPlural: 'Runs',
              defaultRecordStream: 'runs',
              dataVariables: [{
                id: 'icon',
                label: 'Icon',
                dataType: 'string',
                scaleType: 'nominal'
              }, {
                id: 'age',
                label: 'Age (years)',
                dataType: 'number',
                scaleType: 'linear'
              }, {
                id: 'height',
                label: 'Height (inches)',
                dataType: 'number',
                scaleType: 'linear'
              }, {
                id: 'time',
                label: 'Time (seconds)',
                dataType: 'number',
                scaleType: 'linear'
              }, {
                id: 'opponent',
                label: 'Opponent',
                dataType: 'string',
                scaleType: 'nominal'
              }, {
                id: 'shoes',
                label: 'Shoes',
                dataType: 'string',
                scaleType: 'nominal'
              }, {
                id: 'zipCode',
                label: 'Zip Code',
                dataType: 'number',
                scaleType: 'nominal'
              }]
            }, this)];
          }
        }, {
          key: "getGraphicVariables",
          value: function getGraphicVariables() {
            return _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultGraphicVariableMapping.fromJSON([{
              recordStream: 'runs',
              mappings: {
                run: {
                  icon: {
                    identifier: [{
                      selector: 'id'
                    }],
                    imageUrl: [{
                      selector: 'person.iconShape',
                      label: ' '
                    }],
                    text: [{
                      id: 'fixed',
                      selector: 'fixed.text',
                      label: 'Fixed'
                    }],
                    shape: [{
                      id: 'fixed',
                      selector: 'fixed.shape'
                    }],
                    color: [{
                      id: 'fixed',
                      selector: 'fixed.color',
                      label: 'Fixed'
                    }, {
                      id: 'row-color',
                      selector: 'tableRowColor',
                      label: 'Row Color'
                    }],
                    input: [{
                      id: 'fixed',
                      selector: 'fixed.text',
                      label: 'Fixed'
                    }],
                    label: [{
                      id: 'fixed',
                      selector: 'fixed.text',
                      label: 'Fixed'
                    }, {
                      id: 'label',
                      selector: 'person.label'
                    }],
                    order: [{
                      id: 'fixed',
                      selector: 'endOrder',
                      label: 'Fixed'
                    }],
                    areaSize: [{
                      id: 'fixed',
                      selector: 'fixed.areaSize',
                      label: 'Fixed'
                    }],
                    pulse: [{
                      id: 'pulse',
                      selector: 'selected'
                    }, {
                      id: 'fixed',
                      selector: 'fixed.pulse',
                      label: 'Fixed'
                    }],
                    transparency: [{
                      id: 'fixed',
                      selector: 'fixed.transparency',
                      label: 'Fixed'
                    }],
                    strokeTransparency: [{
                      id: 'fixed',
                      selector: 'fixed.strokeTransparency',
                      label: 'Fixed'
                    }],
                    strokeWidth: [{
                      id: 'fixed',
                      selector: 'fixed.strokeWidth',
                      label: 'Fixed'
                    }],
                    strokeColor: [{
                      id: 'fixed',
                      selector: 'fixed.strokeColor',
                      label: 'Fixed'
                    }]
                  },
                  age: {
                    axis: [{
                      selector: 'person.age'
                    }],
                    input: [{
                      selector: 'person.age'
                    }],
                    label: [{
                      selector: 'person.age'
                    }],
                    order: [{
                      selector: 'person.age'
                    }],
                    areaSize: [{
                      selector: 'person.ageAreaSize'
                    }]
                  },
                  height: {
                    axis: [{
                      selector: 'person.height'
                    }],
                    input: [{
                      selector: 'person.height'
                    }],
                    label: [{
                      selector: 'person.height'
                    }],
                    order: [{
                      selector: 'person.height'
                    }],
                    areaSize: [{
                      selector: 'person.heightAreaSize'
                    }]
                  },
                  time: {
                    axis: [{
                      selector: 'timeSeconds'
                    }],
                    input: [{
                      selector: 'timeSeconds'
                    }],
                    label: [{
                      selector: 'timeLabel'
                    }],
                    order: [{
                      selector: 'timeSeconds'
                    }],
                    areaSize: [{
                      selector: 'timeAreaSize'
                    }]
                  },
                  opponent: {
                    input: [{
                      selector: 'person.Opponent.label'
                    }],
                    label: [{
                      selector: 'person.Opponent.label'
                    }],
                    order: [{
                      selector: 'person.Opponent.label'
                    }],
                    text: [{
                      selector: 'person.Opponent.label'
                    }],
                    color: [{
                      selector: 'person.Opponent.color'
                    }],
                    shape: [{
                      selector: 'person.Opponent.shape'
                    }]
                  },
                  shoes: {
                    input: [{
                      selector: 'person.Shoe.label'
                    }],
                    label: [{
                      selector: 'person.Shoe.label'
                    }],
                    order: [{
                      selector: 'person.Shoe.label'
                    }],
                    text: [{
                      selector: 'person.Shoe.label'
                    }],
                    color: [{
                      selector: 'person.Shoe.color'
                    }],
                    shape: [{
                      selector: 'person.Shoe.shape'
                    }]
                  },
                  zipCode: {
                    latitude: [{
                      selector: 'person.latitude'
                    }],
                    longitude: [{
                      selector: 'person.longitude'
                    }],
                    identifier: [{
                      selector: 'person.state'
                    }],
                    order: [{
                      selector: 'person.zipCode'
                    }],
                    label: [{
                      selector: 'person.zipCode'
                    }]
                  }
                }
              }
            }], this);
          }
        }, {
          key: "getGraphicSymbols",
          value: function getGraphicSymbols() {
            return [new _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultGraphicSymbol({
              id: 'runTable',
              type: 'record',
              recordStream: 'runs',
              graphicVariables: {
                identifier: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'identifier',
                  graphicVariableId: 'identifier'
                },
                order: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'order',
                  graphicVariableId: 'fixed'
                },
                color: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'color',
                  graphicVariableId: 'row-color'
                },
                pulse: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'pulse',
                  graphicVariableId: 'pulse'
                },
                icon: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'imageUrl',
                  graphicVariableId: 'imageUrl'
                },
                age: {
                  recordSet: 'run',
                  dataVariable: 'age',
                  graphicVariableType: 'label',
                  graphicVariableId: 'label'
                },
                height: {
                  recordSet: 'run',
                  dataVariable: 'height',
                  graphicVariableType: 'label',
                  graphicVariableId: 'label'
                },
                time: {
                  recordSet: 'run',
                  dataVariable: 'time',
                  graphicVariableType: 'label',
                  graphicVariableId: 'label'
                },
                opponent: {
                  recordSet: 'run',
                  dataVariable: 'opponent',
                  graphicVariableType: 'label',
                  graphicVariableId: 'label'
                },
                shoes: {
                  recordSet: 'run',
                  dataVariable: 'shoes',
                  graphicVariableType: 'label',
                  graphicVariableId: 'label'
                },
                zipCode: {
                  recordSet: 'run',
                  dataVariable: 'zipCode',
                  graphicVariableType: 'label',
                  graphicVariableId: 'label'
                }
              }
            }, this), new _dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultGraphicSymbol({
              id: 'runPoints',
              type: 'area',
              recordStream: 'runs',
              graphicVariables: {
                identifier: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'identifier',
                  graphicVariableId: 'identifier'
                },
                pulse: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'pulse',
                  graphicVariableId: 'pulse'
                },
                shape: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'shape',
                  graphicVariableId: 'fixed'
                },
                color: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'color',
                  graphicVariableId: 'fixed'
                },
                areaSize: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'areaSize',
                  graphicVariableId: 'fixed'
                },
                transparency: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'transparency',
                  graphicVariableId: 'fixed'
                },
                strokeColor: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'strokeColor',
                  graphicVariableId: 'fixed'
                },
                strokeTransparency: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'strokeTransparency',
                  graphicVariableId: 'fixed'
                },
                strokeWidth: {
                  recordSet: 'run',
                  dataVariable: 'icon',
                  graphicVariableType: 'strokeWidth',
                  graphicVariableId: 'fixed'
                },
                x: {
                  recordSet: 'run',
                  dataVariable: 'time',
                  graphicVariableType: 'axis',
                  graphicVariableId: 'axis'
                },
                y: {
                  recordSet: 'run',
                  dataVariable: 'height',
                  graphicVariableType: 'axis',
                  graphicVariableId: 'axis'
                },
                latitude: {
                  recordSet: 'run',
                  dataVariable: 'zipCode',
                  graphicVariableType: 'latitude',
                  graphicVariableId: 'latitude'
                },
                longitude: {
                  recordSet: 'run',
                  dataVariable: 'zipCode',
                  graphicVariableType: 'longitude',
                  graphicVariableId: 'longitude'
                }
              }
            }, this)];
          }
        }, {
          key: "getVisualizations",
          value: function getVisualizations() {
            var _a, _b;

            return [new TableVisualization({
              id: 'datatable',
              template: 'table',
              properties: {},
              graphicSymbols: {
                items: 'runTable'
              }
            }, this), new ScatterplotMapVisualization({
              id: 'scattergraph',
              template: 'scattergraph',
              properties: {
                gridlines: true,
                showAxisLabels: true,
                showAxisIndicators: true
              },
              graphicSymbols: {
                points: 'runPoints'
              }
            }, this), new GeographicMapVisualization({
              id: 'geomap',
              template: 'geomap',
              properties: {
                basemapZoomLevels: [{
                  selector: ['world', 'united states', 'states'],
                  projection: 'albersUsa',
                  label: 'United States',
                  "class": 'us-icon'
                }, {
                  selector: ['world', 'united states', (_a = this.config.defaultUsState) !== null && _a !== void 0 ? _a : 'Indiana', 'counties'],
                  projection: 'albersUsa',
                  label: (_b = this.config.defaultUsState) !== null && _b !== void 0 ? _b : 'Indiana',
                  "class": 'state-icon'
                }],
                basemapSelectedZoomLevel: 2,
                basemapDefaultColor: 'white',
                basemapDefaultStrokeColor: '#bebebe',
                basemapDefaultStrokeWidth: '0.1%'
              },
              graphicSymbols: {
                nodes: 'runPoints'
              }
            }, this), new GraphicVariableLegendVisualization({
              id: 'color-legend',
              template: 'graphic-variable-legend',
              properties: {
                graphicVariable: 'color',
                itemDefaults: {
                  strokeColor: '#83786F',
                  strokeWidth: 1,
                  shape: 'square'
                }
              },
              graphicSymbols: {
                items: 'runPoints'
              }
            }, this), new GraphicVariableLegendVisualization({
              id: 'shape-legend',
              template: 'graphic-variable-legend',
              properties: {
                graphicVariable: 'shape',
                itemDefaults: {
                  color: '#FFFFFF',
                  strokeColor: '#83786F',
                  strokeWidth: 1
                }
              },
              graphicSymbols: {
                items: 'runPoints'
              }
            }, this), new GraphicVariableLegendVisualization({
              id: 'size-legend',
              template: 'graphic-variable-legend',
              properties: {
                graphicVariable: 'areaSize',
                itemDefaults: {
                  color: '#FFFFFF',
                  strokeColor: '#83786F',
                  strokeWidth: 1,
                  shape: 'circle'
                }
              },
              graphicSymbols: {
                items: 'runPoints'
              }
            }, this)];
          }
        }], [{
          key: "create",
          value: function create(config) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return _XMacroscopeProject.resolveConfig(config);

                    case 2:
                      config = _context10.sent;
                      return _context10.abrupt("return", new _XMacroscopeProject(config));

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee9);
            }));
          }
        }, {
          key: "resolveConfig",
          value: function resolveConfig(config) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var resolvedConfig, settings;
              return regeneratorRuntime.wrap(function _callee10$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      resolvedConfig = Object.assign({}, config);

                      if (!(0, lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(config.opponentRuns)) {
                        resolvedConfig.opponentRuns = opponentRuns[config.opponentRuns] || [];
                      }

                      if (!(config.endpoint && config.deploymentLocation)) {
                        _context11.next = 7;
                        break;
                      }

                      _context11.next = 5;
                      return LocationSettings.getSettings(config.endpoint, config.deploymentLocation);

                    case 5:
                      settings = _context11.sent;

                      if (settings) {
                        if (settings.usState) {
                          resolvedConfig.defaultUsState = settings.usState;
                        }

                        if (settings.runTimeout) {
                          resolvedConfig.runTimeout = settings.runTimeout;
                        }
                      }

                    case 7:
                      return _context11.abrupt("return", resolvedConfig);

                    case 8:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee10);
            }));
          }
        }]);

        return _XMacroscopeProject;
      }(_dvl_fw_core__WEBPACK_IMPORTED_MODULE_16__.DefaultProject); // eslint-disable-next-line @typescript-eslint/naming-convention


      var _XMacroscopeProjectConfigService = new _angular_core__WEBPACK_IMPORTED_MODULE_36__.InjectionToken('XMacroscopeProjectConfig');

      var _XMacroscopeDataService = function _XMacroscopeDataService(config) {
        _classCallCheck(this, _XMacroscopeDataService);

        var _a, _b;

        this.config = config;
        this.project = new _XMacroscopeProject(this.config);
        this.runStreamController = this.project.runStreamController;
        this.messages = (_b = (_a = this.runStreamController) === null || _a === void 0 ? void 0 : _a.messageStream) !== null && _b !== void 0 ? _b : rxjs__WEBPACK_IMPORTED_MODULE_35__.EMPTY;
      };

      _XMacroscopeDataService.ɵfac = function XMacroscopeDataService_Factory(t) {
        return new (t || _XMacroscopeDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_XMacroscopeProjectConfigService));
      };

      _XMacroscopeDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineInjectable"]({
        token: _XMacroscopeDataService,
        factory: _XMacroscopeDataService.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵsetClassMetadata"](_XMacroscopeDataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Injectable
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.Inject,
              args: [_XMacroscopeProjectConfigService]
            }]
          }];
        }, null);
      })();

      function _configFactory(config) {
        return function () {
          return _XMacroscopeProject.resolveConfig(config);
        };
      }

      var _XMacroscopeDataModule = /*#__PURE__*/function () {
        function _XMacroscopeDataModule() {
          _classCallCheck(this, _XMacroscopeDataModule);
        }

        _createClass(_XMacroscopeDataModule, null, [{
          key: "forRoot",
          value: function forRoot(config) {
            return {
              ngModule: _XMacroscopeDataModule,
              providers: [_XMacroscopeDataService, {
                provide: _XMacroscopeProjectConfigService,
                useValue: config
              }, {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_36__.APP_INITIALIZER,
                useFactory: _configFactory,
                deps: [_XMacroscopeProjectConfigService],
                multi: true
              }]
            };
          }
        }]);

        return _XMacroscopeDataModule;
      }();

      _XMacroscopeDataModule.ɵfac = function XMacroscopeDataModule_Factory(t) {
        return new (t || _XMacroscopeDataModule)();
      };

      _XMacroscopeDataModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineNgModule"]({
        type: _XMacroscopeDataModule
      });
      _XMacroscopeDataModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵsetClassMetadata"](_XMacroscopeDataModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.NgModule
        }], null, null);
      })();

      var _XMacroscopePlugin = /*#__PURE__*/function () {
        function _XMacroscopePlugin() {
          _classCallCheck(this, _XMacroscopePlugin);
        }

        _createClass(_XMacroscopePlugin, [{
          key: "register",
          value: function register(registry) {
            registry.registerObjectFactory(new _XMacroscopeDataSourceFactory());
          }
        }]);

        return _XMacroscopePlugin;
      }();

      var _VisualizationsModule = function _VisualizationsModule() {
        _classCallCheck(this, _VisualizationsModule);
      };

      _VisualizationsModule.ɵfac = function VisualizationsModule_Factory(t) {
        return new (t || _VisualizationsModule)();
      };

      _VisualizationsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineNgModule"]({
        type: _VisualizationsModule
      });
      _VisualizationsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_38__.CommonModule, ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.NgxMapLibreGLModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatTableModule, _dvl_fw_angular__WEBPACK_IMPORTED_MODULE_39__.DvlFwAngularModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵsetClassMetadata"](_VisualizationsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_36__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_38__.CommonModule, ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.NgxMapLibreGLModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatTableModule, _dvl_fw_angular__WEBPACK_IMPORTED_MODULE_39__.DvlFwAngularModule],
            declarations: [GeographicMapComponent, GraphicVariableLegendComponent, ScatterplotMapComponent, SymbolLegendComponent, TableComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵsetNgModuleScope"](_VisualizationsModule, {
          declarations: [GeographicMapComponent, GraphicVariableLegendComponent, ScatterplotMapComponent, SymbolLegendComponent, TableComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_38__.CommonModule, ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_37__.NgxMapLibreGLModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_43__.MatTableModule, _dvl_fw_angular__WEBPACK_IMPORTED_MODULE_39__.DvlFwAngularModule]
        });
      })();
      /*
       * Public API Surface of xmacroscope-dvl-fw-plugin
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    70809: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var _home_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home/main/main.component */
      91664);
      /* harmony import */


      var _backend_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./backend/main/main.component */
      61127);
      /* harmony import */


      var _make_a_vis_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./make-a-vis/main/main.component */
      70717);
      /* harmony import */


      var _endline_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./endline/main/main.component */
      29743);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/environment */
      24766);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      1858); // TODO


      var routes = [{
        path: 'home',
        pathMatch: 'full',
        component: _home_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
      }, {
        path: 'backend',
        component: _backend_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent
      }, {
        path: 'mav',
        component: _make_a_vis_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent
      }, {
        path: 'endline',
        component: _endline_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent
      }, {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
          useHash: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.useHashStrategy
        })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    20721: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! xmacroscope-dvl-fw-plugin */
      37443);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      5759);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tabs */
      89964);

      function AppComponent_a_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var routeLink_r1 = ctx.$implicit;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", routeLink_r1.route)("active", _r3.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", routeLink_r1.label, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "no-header": a0
        };
      };

      var _AppComponent = function _AppComponent(route, dataService) {
        var _this26 = this;

        _classCallCheck(this, _AppComponent);

        this.dataService = dataService;
        this.title = 'AISL xMacroscope';
        this.showAppHeader = true;
        this.routeLinks = [{
          label: 'Home',
          route: '/home',
          index: '0'
        }, {
          label: 'Backend',
          route: '/backend',
          index: '1'
        }, {
          label: 'Make A Vis',
          route: '/mav',
          index: '2'
        }, {
          label: 'Endline',
          route: '/endline',
          index: '3'
        }];
        route.queryParams.subscribe(function (q) {
          if ('showAppHeader' in q) {
            _this26.showAppHeader = q['showAppHeader'] === 'true';
          } else if (Object.keys(q).length === 0) {
            _this26.showAppHeader = true;
          }
        });
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_2__.XMacroscopeDataService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 12,
        vars: 7,
        consts: [[1, "toolbar", "z-depth-1-half"], [1, "title"], ["href", "https://github.com/cns-iu/xmacroscope", "title", "View source on Github", "aria-label", "View source on Github", 1, "github-corner"], ["width", "64", "height", "64", "viewBox", "0 0 250 250", "aria-hidden", "true", 2, "fill", "#8CC53E", "color", "#fff", "position", "absolute", "top", "0", "border", "0", "right", "0"], ["d", "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"], ["d", "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2", "fill", "currentColor", 1, "octo-arm", 2, "transform-origin", "130px 106px"], ["d", "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z", "fill", "currentColor", 1, "octo-body"], [1, "nav-tabs", 3, "ngClass"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_a_10_Template, 3, 3, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("no-header", !ctx.showAppHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !ctx.showAppHeader));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.routeLinks);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabNav, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
        styles: [".toolbar[_ngcontent-%COMP%] {\n  height: 4.5vh;\n  background: #fff;\n  color: #006298;\n}\n.toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin: 15px;\n}\n.nav-tabs[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.nav-tabs[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: #006298;\n  opacity: 1;\n}\n.nav-tabs[_ngcontent-%COMP%]     .mat-ink-bar._mat-animation-noopable {\n  background: #006298;\n}\n.no-header[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFDSjtBQUNBO0VBQ0UsZ0JBQUE7QUFFRjtBQUFFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFFSjtBQUFFO0VBQ0UsbUJBQUE7QUFFSjtBQUFBO0VBQ0UsYUFBQTtBQUdGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyXG4gIGhlaWdodDogNC41dmhcbiAgYmFja2dyb3VuZDogI2ZmZlxuICBjb2xvcjogIzAwNjI5OFxuXG4gIC50aXRsZVxuICAgIGZvbnQtc2l6ZTogMjVweFxuICAgIG1hcmdpbjogMTVweFxuXG4ubmF2LXRhYnNcbiAgYmFja2dyb3VuZDogI2ZmZlxuXG4gIC5tYXQtdGFiLWxpbmtcbiAgICBjb2xvcjogIzAwNjI5OFxuICAgIG9wYWNpdHk6IDFcblxuICA6Om5nLWRlZXAgLm1hdC1pbmstYmFyLl9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlXG4gICAgYmFja2dyb3VuZDogIzAwNjI5OFxuXG4ubm8taGVhZGVyXG4gIGRpc3BsYXk6IG5vbmUiXX0= */", ".github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%]{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%]{animation:none}.github-corner[_ngcontent-%COMP%]   .octo-arm[_ngcontent-%COMP%]{animation:octocat-wave 560ms ease-in-out}}"]
      });
      /***/
    },

    /***/
    50023: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tabs */
      89964);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/toolbar */
      5759);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      94462);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngxs/store */
      46931);
      /* harmony import */


      var xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! xmacroscope-dvl-fw-plugin */
      37443);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../environments/environment */
      24766);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      70809);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      20721);
      /* harmony import */


      var _backend_backend_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./backend/backend.module */
      84914);
      /* harmony import */


      var _endline_endline_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./endline/endline.module */
      11875);
      /* harmony import */


      var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home/home.module */
      82711);
      /* harmony import */


      var _make_a_vis_make_a_vis_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./make-a-vis/make-a-vis.module */
      64915);
      /* harmony import */


      var _shared_state_icon_registry_icon_registry_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/state/icon-registry/icon-registry.state */
      36838);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        providers: [xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_10__.XMacroscopeDataService],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forRoot([_shared_state_icon_registry_icon_registry_state__WEBPACK_IMPORTED_MODULE_8__.IconRegistryState], {
          developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production
        }), xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_10__.XMacroscopeDataModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.projectConfiguration), xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_10__.VisualizationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _backend_backend_module__WEBPACK_IMPORTED_MODULE_4__.BackendModule, _endline_endline_module__WEBPACK_IMPORTED_MODULE_5__.EndlineModule, _home_home_module__WEBPACK_IMPORTED_MODULE_6__.HomeModule, _make_a_vis_make_a_vis_module__WEBPACK_IMPORTED_MODULE_7__.MakeAVisModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵk"], xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_10__.XMacroscopeDataModule, xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_10__.VisualizationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _backend_backend_module__WEBPACK_IMPORTED_MODULE_4__.BackendModule, _endline_endline_module__WEBPACK_IMPORTED_MODULE_5__.EndlineModule, _home_home_module__WEBPACK_IMPORTED_MODULE_6__.HomeModule, _make_a_vis_make_a_vis_module__WEBPACK_IMPORTED_MODULE_7__.MakeAVisModule]
        });
      })();
      /***/

    },

    /***/
    84914: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BackendModule": function BackendModule() {
          return (
            /* binding */
            _BackendModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main/main.component */
      61127);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var _BackendModule = function _BackendModule() {
        _classCallCheck(this, _BackendModule);
      };

      _BackendModule.ɵfac = function BackendModule_Factory(t) {
        return new (t || _BackendModule)();
      };

      _BackendModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _BackendModule
      });
      _BackendModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_BackendModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
          exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent]
        });
      })();
      /***/

    },

    /***/
    61127: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainComponent": function MainComponent() {
          return (
            /* binding */
            _MainComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      64058);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! xmacroscope-dvl-fw-plugin */
      37443);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      7005);

      function MainComponent_code_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "code", 4);
        }

        if (rf & 2) {
          var msg_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.formatMsg(msg_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "no-header": a0
        };
      };

      var _MainComponent = /*#__PURE__*/function () {
        function _MainComponent(route, dataService) {
          var _this27 = this;

          _classCallCheck(this, _MainComponent);

          this.route = route;
          this.dataService = dataService;
          this.showAppHeader = true;
          this.messageCache = [];
          route.queryParams.subscribe(function (q) {
            if ('showAppHeader' in q) {
              _this27.showAppHeader = q['showAppHeader'] === 'true';
            } else if (Object.keys(q).length === 0) {
              _this27.showAppHeader = true;
            }
          });
        }

        _createClass(_MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            this.messages = this.dataService.messages.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (msg) {
              return _this28.accumulate(msg);
            }));
          }
        }, {
          key: "accumulate",
          value: function accumulate(message) {
            var _a, _b;

            this.messageCache.push(message);

            if (this.messageCache.length > ((_b = (_a = this.dataService.runStreamController) === null || _a === void 0 ? void 0 : _a.historySize) !== null && _b !== void 0 ? _b : 0)) {
              this.messageCache.shift();
            }

            return this.messageCache.concat().reverse();
          }
        }, {
          key: "formatMsg",
          value: function formatMsg(message) {
            var msg = "type: ".concat(message.type, ", timestamp: ").concat(message.timestamp.toLocaleString());

            if (message['run']) {
              msg += ",<br>&nbsp;&nbsp;&nbsp;&nbsp;run: ".concat(JSON.stringify(message['run']));
            }

            return msg;
          }
        }]);

        return _MainComponent;
      }();

      _MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || _MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_3__.XMacroscopeDataService));
      };

      _MainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MainComponent,
        selectors: [["app-backend-main"]],
        decls: 9,
        vars: 6,
        consts: [[1, "backend-container", 3, "ngClass"], [1, "content"], [1, "message-box"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Backend Debug Display");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Incoming Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainComponent_code_7_Template, 1, 1, "code", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, !ctx.showAppHeader));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.messages));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
        styles: [".backend-container[_ngcontent-%COMP%] {\n  height: 89vh;\n  padding: 1vh 0.5vw 1vh 0.5vw;\n}\n.backend-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 85vh;\n  background: #fff;\n  color: #006298;\n  padding: 2vh;\n}\n.backend-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: normal;\n  margin-bottom: 10px;\n}\n.backend-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: normal;\n  margin-bottom: 10px;\n}\n.message-box[_ngcontent-%COMP%] {\n  height: 77vh;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  margin: 15px;\n}\n.message-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n}\n.no-header[_ngcontent-%COMP%] {\n  height: 98vh;\n}\n.no-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 94vh;\n}\n.no-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%] {\n  height: 86vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUdGO0FBREU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQURBO0VBQ0UsWUFBQTtBQUlGO0FBRkU7RUFDRSxZQUFBO0FBSUo7QUFGSTtFQUNFLFlBQUE7QUFJTiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tlbmQtY29udGFpbmVyXG4gIGhlaWdodDogODl2aFxuICBwYWRkaW5nOiAxdmggMC41dncgMXZoIDAuNXZ3XG4gXG4gIC5jb250ZW50XG4gICAgaGVpZ2h0OiA4NXZoXG4gICAgYmFja2dyb3VuZDogI2ZmZlxuICAgIGNvbG9yOiAjMDA2Mjk4XG4gICAgcGFkZGluZzogMnZoXG5cbiAgICBoMVxuICAgICAgICBmb250LXNpemU6IDJlbVxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbiAgICBoMlxuICAgICAgICBmb250LXNpemU6IDEuNWVtXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxuXG4ubWVzc2FnZS1ib3hcbiAgaGVpZ2h0OiA3N3ZoXG4gIG92ZXJmbG93LXk6IHNjcm9sbFxuICBvdmVyZmxvdy14OiBoaWRkZW5cbiAgbWFyZ2luOiAxNXB4XG5cbiAgY29kZVxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxuXG4ubm8taGVhZGVyXG4gIGhlaWdodDogOTh2aFxuICBcbiAgLmNvbnRlbnRcbiAgICBoZWlnaHQ6IDk0dmhcbiAgICBcbiAgICAubWVzc2FnZS1ib3hcbiAgICAgIGhlaWdodDogODZ2aCAiXX0= */"]
      });
      /***/
    },

    /***/
    63142: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DisplayScreenComponent": function DisplayScreenComponent() {
          return (
            /* binding */
            _DisplayScreenComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      76246);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! xmacroscope-dvl-fw-plugin */
      37443);
      /* harmony import */


      var _timer_service_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../timer-service/timer.service */
      35835);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      89370);

      function DisplayScreenComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r0.personaColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r0.personaIcon);
        }
      }

      function DisplayScreenComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Waiting for Runner");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function DisplayScreenComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Get Ready");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "00:00");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function DisplayScreenComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Go!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.timerText);
        }
      }

      function DisplayScreenComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Finished!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.timerText);
        }
      }

      var _DisplayScreenComponent = /*#__PURE__*/function () {
        function _DisplayScreenComponent(dataService, timerService) {
          _classCallCheck(this, _DisplayScreenComponent);

          this.dataService = dataService;
          this.timerService = timerService;
          this.timerText = '00:00';
          this.personaColor = '#000';
          this.personaShape = 'circle';
          this.personaBackgroundSize = {
            width: 420,
            height: 420
          };
          this.personaShapeSize = 25000;
          this.personaBackgroundRadius = 200;
        }

        _createClass(_DisplayScreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            var timeoutHandle = null; // used to store setTimeout Id to clear it when a new message arrives.

            this.dataService.messages.subscribe(function (msg) {
              // clearing a timeout if it had been set earlier.
              if (timeoutHandle) {
                clearTimeout(timeoutHandle);
                timeoutHandle = null;
              }

              _this29.handleMessage(msg);
              /*
               * If a RunFinishedMessage does not arrive, the screen is tricked to
               * show 'Waiting for Runner' text.
               * To do this, a timeout is fetched from the environment and when the timeout expires,
               * a SignupStartedMessage is simulated, this ends the timer and displays
               * 'Waiting for Runner' text.
               */


              if (msg instanceof xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_3__.RunStartedMessage) {
                timeoutHandle = setTimeout(function () {
                  _this29.timerService.stop();

                  _this29.handleMessage(_this29.createDummySignupStartedMessage());
                }, _this29.dataService.config.runTimout);
              }
            });
            this.timerService.getFormattedTimeObservable().subscribe(function (timerText) {
              _this29.timerText = timerText;
            });
          }
        }, {
          key: "handleMessage",
          value: function handleMessage(msg) {
            var _a;

            this.updatePersona(msg);
            this.lastMessage = msg;

            if (msg instanceof xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_3__.RunStartedMessage) {
              this.timerService.start();
            } else if (msg instanceof xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_3__.RunFinishedMessage) {
              this.timerService.stop();
              this.timerText = this.timerService.formatTime((0, moment__WEBPACK_IMPORTED_MODULE_0__.duration)((_a = msg.run) === null || _a === void 0 ? void 0 : _a.timeMillis, 'millisecond'));
            }
          }
        }, {
          key: "updatePersona",
          value: function updatePersona(msg) {
            var _a;

            if ((_a = msg === null || msg === void 0 ? void 0 : msg.run) === null || _a === void 0 ? void 0 : _a.person) {
              this.personaIcon = "emoji:".concat(msg.run.person.icon);
              this.personaColor = msg.run.persona.color;
              this.personaShape = msg.run.persona.shape;
            }
          }
        }, {
          key: "createDummySignupStartedMessage",
          value: function createDummySignupStartedMessage() {
            return new xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_3__.SignupStartedMessage();
          }
        }]);

        return _DisplayScreenComponent;
      }();

      _DisplayScreenComponent.ɵfac = function DisplayScreenComponent_Factory(t) {
        return new (t || _DisplayScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_3__.XMacroscopeDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_timer_service_timer_service__WEBPACK_IMPORTED_MODULE_1__.TimerService));
      };

      _DisplayScreenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _DisplayScreenComponent,
        selectors: [["app-display-screen"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_3__.XMacroscopeDataService, _timer_service_timer_service__WEBPACK_IMPORTED_MODULE_1__.TimerService])],
        decls: 7,
        vars: 5,
        consts: [[1, "endline-screen-container"], ["class", "endline-screen-persona", 4, "ngIf"], [1, "endline-screen-text"], [4, "ngIf"], [1, "endline-screen-persona"], ["inline", "", 1, "icon", 3, "svgIcon"], [1, "endline-label"], [1, "endline-timer"]],
        template: function DisplayScreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DisplayScreenComponent_div_1_Template, 2, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DisplayScreenComponent_div_3_Template, 3, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DisplayScreenComponent_div_4_Template, 5, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DisplayScreenComponent_div_5_Template, 5, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DisplayScreenComponent_div_6_Template, 5, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.lastMessage == null ? null : ctx.lastMessage.type) !== "signup-started");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.lastMessage == null ? null : ctx.lastMessage.type) === "signup-started");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.lastMessage == null ? null : ctx.lastMessage.type) === "signup-finished");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.lastMessage == null ? null : ctx.lastMessage.type) === "run-started");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.lastMessage == null ? null : ctx.lastMessage.type) === "run-finished");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
        styles: [".endline-screen-container[_ngcontent-%COMP%] {\n  display: flex;\n  color: #006298;\n  font-size: 150px;\n  font-weight: 700;\n  width: 90%;\n  justify-content: space-evenly;\n}\n.endline-screen-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 31.25rem;\n  height: 31.25rem;\n  justify-content: center;\n}\n.endline-screen-container[_ngcontent-%COMP%]   .endline-screen-persona[_ngcontent-%COMP%] {\n  width: 20%;\n  justify-content: center;\n  padding: 13% 0 0 15%;\n}\n.endline-screen-container[_ngcontent-%COMP%]   .endline-screen-text[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 15% 0 0 17%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktc2NyZWVuLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFDSTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBQ1I7QUFDSTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7QUFDUiIsImZpbGUiOiJkaXNwbGF5LXNjcmVlbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmRsaW5lLXNjcmVlbi1jb250YWluZXIgXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBjb2xvcjogIzAwNjI5OFxyXG4gICAgZm9udC1zaXplOiAxNTBweFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMFxyXG4gICAgd2lkdGg6IDkwJVxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHlcclxuXHJcbiAgICAuaWNvblxyXG4gICAgICAgIHdpZHRoOiAzMS4yNXJlbVxyXG4gICAgICAgIGhlaWdodDogMzEuMjVyZW1cclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG5cclxuICAgIC5lbmRsaW5lLXNjcmVlbi1wZXJzb25hXHJcbiAgICAgICAgd2lkdGg6IDIwJVxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICAgICAgcGFkZGluZzogMTMlIDAgMCAxNSVcclxuICAgIFxyXG4gICAgLmVuZGxpbmUtc2NyZWVuLXRleHRcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgICAgIHBhZGRpbmc6IDE1JSAwIDAgMTclIl19 */"]
      });
      /***/
    },

    /***/
    11875: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EndlineModule": function EndlineModule() {
          return (
            /* binding */
            _EndlineModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      89370);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main/main.component */
      29743);
      /* harmony import */


      var _timer_service_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./timer-service/timer.service */
      35835);
      /* harmony import */


      var _display_screen_display_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./display-screen/display-screen.component */
      63142);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      75349);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var _EndlineModule = function _EndlineModule() {
        _classCallCheck(this, _EndlineModule);
      };

      _EndlineModule.ɵfac = function EndlineModule_Factory(t) {
        return new (t || _EndlineModule)();
      };

      _EndlineModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _EndlineModule
      });
      _EndlineModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_timer_service_timer_service__WEBPACK_IMPORTED_MODULE_1__.TimerService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_EndlineModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent, _display_screen_display_screen_component__WEBPACK_IMPORTED_MODULE_2__.DisplayScreenComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
          exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent]
        });
      })();
      /***/

    },

    /***/
    29743: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainComponent": function MainComponent() {
          return (
            /* binding */
            _MainComponent2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _display_screen_display_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../display-screen/display-screen.component */
      63142);

      var _c0 = function _c0(a0) {
        return {
          "no-header": a0
        };
      };

      var _MainComponent2 = function _MainComponent2(route) {
        var _this30 = this;

        _classCallCheck(this, _MainComponent2);

        this.showAppHeader = true;
        route.queryParams.subscribe(function (q) {
          if ('showAppHeader' in q) {
            _this30.showAppHeader = q['showAppHeader'] === 'true';
          } else if (Object.keys(q).length === 0) {
            _this30.showAppHeader = true;
          }
        });
      };

      _MainComponent2.ɵfac = function MainComponent_Factory(t) {
        return new (t || _MainComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
      };

      _MainComponent2.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MainComponent2,
        selectors: [["app-endline-main"]],
        decls: 3,
        vars: 3,
        consts: [[1, "endline-container", 3, "ngClass"], [1, "content"], [1, "display-screen"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-display-screen", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, !ctx.showAppHeader));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _display_screen_display_screen_component__WEBPACK_IMPORTED_MODULE_0__.DisplayScreenComponent],
        styles: ["body {\n  background: #ffffff;\n}\n\n.endline-container[_ngcontent-%COMP%] {\n  height: 89vh;\n  padding: 1vh 0.5vw 1vh 0.5vw;\n}\n\n.endline-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 89vh;\n  background: #ffffff;\n}\n\n.no-header[_ngcontent-%COMP%] {\n  height: 98vh;\n}\n\n.no-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 98vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0FBRUY7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNFLFlBQUE7QUFHRjs7QUFERTtFQUNFLFlBQUE7QUFHSiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIGJvZHlcbiAgYmFja2dyb3VuZDogI2ZmZmZmZlxuXG4uZW5kbGluZS1jb250YWluZXJcbiAgaGVpZ2h0OiA4OXZoXG4gIHBhZGRpbmc6IDF2aCAwLjV2dyAxdmggMC41dndcbiBcbiAgLmNvbnRlbnRcbiAgICBoZWlnaHQ6IDg5dmhcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmXG5cbi5uby1oZWFkZXJcbiAgaGVpZ2h0OiA5OHZoXG4gIFxuICAuY29udGVudFxuICAgIGhlaWdodDogOTh2aCJdfQ== */"]
      });
      /***/
    },

    /***/
    35835: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimerService": function TimerService() {
          return (
            /* binding */
            _TimerService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      76246);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var moment_duration_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment-duration-format */
      98166);
      /* harmony import */


      var moment_duration_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_duration_format__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      64058);
      /* harmony import */


      var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./timer */
      50159);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      1858);

      moment_duration_format__WEBPACK_IMPORTED_MODULE_1___default()(moment__WEBPACK_IMPORTED_MODULE_0___default());

      var _TimerService = /*#__PURE__*/function () {
        function _TimerService() {
          _classCallCheck(this, _TimerService);

          this.timer = new _timer__WEBPACK_IMPORTED_MODULE_2__.Timer();
        }

        _createClass(_TimerService, [{
          key: "getTimer",
          value: function getTimer() {
            return this.timer;
          }
        }, {
          key: "start",
          value: function start() {
            this.timer.start();
          }
        }, {
          key: "stop",
          value: function stop() {
            this.timer.stop();
          }
        }, {
          key: "getFormattedTimeObservable",
          value: function getFormattedTimeObservable() {
            var _this31 = this;

            var _timeFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ss:SS';

            var timerObs = this.getTimer().asObservable();
            return timerObs.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (time) {
              return _this31.formatTime(time);
            }));
          }
        }, {
          key: "formatTime",
          value: function formatTime(time) {
            var timeFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ss:SS';
            return (0, moment__WEBPACK_IMPORTED_MODULE_0__.duration)(time, 'millisecond').format(timeFormat, {
              trim: false
            });
          }
        }]);

        return _TimerService;
      }();

      _TimerService.ɵfac = function TimerService_Factory(t) {
        return new (t || _TimerService)();
      };

      _TimerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _TimerService,
        factory: _TimerService.ɵfac
      });
      /***/
    },

    /***/
    50159: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Timer": function Timer() {
          return (
            /* binding */
            _Timer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      17802);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      30759);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      28158);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      57518);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      64058);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      76246);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

      var _Timer = /*#__PURE__*/function () {
        function _Timer() {
          var _this32 = this;

          var accumulator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var granularity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 70;

          _classCallCheck(this, _Timer);

          this.accumulator = accumulator;
          this.granularity = granularity;
          this.running = false;
          this.ticker = (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(granularity).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function () {
            return _this32.isRunning;
          })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function () {
            return (0, moment__WEBPACK_IMPORTED_MODULE_0__.duration)(_this32.accumulator + _this32.timeDifference());
          }));
          this.eventEmiter = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          this.combinedObserver = (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(this.ticker, this.eventEmiter);
        }

        _createClass(_Timer, [{
          key: "isRunning",
          get: function get() {
            return this.running;
          }
        }, {
          key: "start",
          value: function start() {
            this.setStartTime();
            this.setRunning();
          }
        }, {
          key: "stop",
          value: function stop() {
            this.clearRunning();
            this.clearStartTime();
            this.accumulator = 0;
            this.emit(0);
          }
        }, {
          key: "pause",
          value: function pause() {
            this.clearRunning();
            this.accumulator += this.timeDifference();
            this.clearStartTime();
            this.emit(this.accumulator);
          }
        }, {
          key: "reset",
          value: function reset() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            this.setStartTime();
            this.accumulator = offset;
            this.emit(offset);
          }
        }, {
          key: "asObservable",
          value: function asObservable() {
            return this.combinedObserver;
          }
        }, {
          key: "setRunning",
          value: function setRunning() {
            this.running = true;
          }
        }, {
          key: "clearRunning",
          value: function clearRunning() {
            this.running = false;
          }
        }, {
          key: "setStartTime",
          value: function setStartTime() {
            this.startTime = +moment__WEBPACK_IMPORTED_MODULE_0__();
          }
        }, {
          key: "clearStartTime",
          value: function clearStartTime() {
            this.startTime = undefined;
          }
        }, {
          key: "timeDifference",
          value: function timeDifference() {
            return this.startTime ? +moment__WEBPACK_IMPORTED_MODULE_0__() - this.startTime : 0;
          }
        }, {
          key: "emit",
          value: function emit(dur) {
            this.eventEmiter.next((0, moment__WEBPACK_IMPORTED_MODULE_0__.duration)(dur));
          }
        }]);

        return _Timer;
      }();
      /***/

    },

    /***/
    82711: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeModule": function HomeModule() {
          return (
            /* binding */
            _HomeModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main/main.component */
      91664);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var _HomeModule = function _HomeModule() {
        _classCallCheck(this, _HomeModule);
      };

      _HomeModule.ɵfac = function HomeModule_Factory(t) {
        return new (t || _HomeModule)();
      };

      _HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _HomeModule
      });
      _HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_HomeModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
          exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent]
        });
      })();
      /***/

    },

    /***/
    91664: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainComponent": function MainComponent() {
          return (
            /* binding */
            _MainComponent3
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      7005);

      var _c0 = function _c0(a0) {
        return {
          "no-header": a0
        };
      };

      var _MainComponent3 = function _MainComponent3(route) {
        var _this33 = this;

        _classCallCheck(this, _MainComponent3);

        this.showAppHeader = true;
        route.queryParams.subscribe(function (q) {
          if ('showAppHeader' in q) {
            _this33.showAppHeader = q['showAppHeader'] === 'true';
          } else if (Object.keys(q).length === 0) {
            _this33.showAppHeader = true;
          }
        });
      };

      _MainComponent3.ɵfac = function MainComponent_Factory(t) {
        return new (t || _MainComponent3)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
      };

      _MainComponent3.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MainComponent3,
        selectors: [["app-home-main"]],
        decls: 6,
        vars: 3,
        consts: [[1, "home-container", 3, "ngClass"], [1, "content"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "AISL/xMacroscope Demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose a tab to see individual screens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, !ctx.showAppHeader));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
        styles: [".home-container[_ngcontent-%COMP%] {\n  height: 89vh;\n  padding: 1vh 0.5vw 1vh 0.5vw;\n}\n.home-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 85vh;\n  background: #fff;\n  color: #006298;\n  padding: 2vh;\n}\n.home-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: normal;\n  margin-bottom: 1vh;\n}\n.home-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: normal;\n  margin-bottom: 1vh;\n}\n.no-header[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.no-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 94vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUFJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBQTtFQUNFLGFBQUE7QUFHRjtBQURFO0VBQ0UsWUFBQTtBQUdKIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb250YWluZXJcbiAgaGVpZ2h0OiA4OXZoXG4gIHBhZGRpbmc6IDF2aCAwLjV2dyAxdmggMC41dndcbiBcbiAgLmNvbnRlbnRcbiAgICBoZWlnaHQ6IDg1dmhcbiAgICBiYWNrZ3JvdW5kOiAjZmZmXG4gICAgY29sb3I6ICMwMDYyOThcbiAgICBwYWRkaW5nOiAydmhcblxuICAgIGgxXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbVxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDF2aFxuICAgIGgyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXZoXG5cbi5uby1oZWFkZXJcbiAgaGVpZ2h0OiAxMDB2aFxuXG4gIC5jb250ZW50XG4gICAgaGVpZ2h0OiA5NHZoIl19 */"]
      });
      /***/
    },

    /***/
    55743: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GraphicVariableLegendComponent": function GraphicVariableLegendComponent() {
          return (
            /* binding */
            _GraphicVariableLegendComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      54758);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! xmacroscope-dvl-fw-plugin */
      37443);
      /* harmony import */


      var _shared_services_update_vis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/services/update-vis.service */
      8445);
      /* harmony import */


      var _dvl_fw_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @dvl-fw/angular */
      4711);

      var _c0 = ["visualization"];

      var _GraphicVariableLegendComponent = /*#__PURE__*/function () {
        function _GraphicVariableLegendComponent(dataService, updateService) {
          var _this34 = this;

          _classCallCheck(this, _GraphicVariableLegendComponent);

          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
          this.project = dataService.project;
          this.subscriptions.add(updateService.update.subscribe(function () {
            _this34.component.runDataChangeDetection();
          }));
        }

        _createClass(_GraphicVariableLegendComponent, [{
          key: "visualizationId",
          set: function set(id) {
            this.legend = this.project.visualizations.find(function (vis) {
              return vis.id === id;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "isSizeLegend",
          value: function isSizeLegend() {
            return this.legend.id === 'size-legend';
          }
        }]);

        return _GraphicVariableLegendComponent;
      }();

      _GraphicVariableLegendComponent.ɵfac = function GraphicVariableLegendComponent_Factory(t) {
        return new (t || _GraphicVariableLegendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_3__.XMacroscopeDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_update_vis_service__WEBPACK_IMPORTED_MODULE_0__.UpdateVisService));
      };

      _GraphicVariableLegendComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _GraphicVariableLegendComponent,
        selectors: [["app-graphic-variable-legend"]],
        viewQuery: function GraphicVariableLegendComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.component = _t.first);
          }
        },
        inputs: {
          visualizationId: "visualizationId"
        },
        decls: 3,
        vars: 3,
        consts: [[1, "graphic-variable-legend", "container"], [1, "legend", 3, "data"], ["visualization", ""]],
        template: function GraphicVariableLegendComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "dvl-visualization", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("size-legend", ctx.isSizeLegend());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.legend);
          }
        },
        directives: [_dvl_fw_angular__WEBPACK_IMPORTED_MODULE_4__.DvlFwVisualizationComponent],
        styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.container[_ngcontent-%COMP%]     .legend-container {\n  height: 7.25rem;\n}\n.container[_ngcontent-%COMP%]     .legend-container .legend-row {\n  width: 8rem;\n}\n.container.size-legend[_ngcontent-%COMP%]     .legend-container {\n  height: auto;\n}\n.container.size-legend[_ngcontent-%COMP%]     .legend-container .legend-row:nth-child(3) {\n  margin-top: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYXBoaWMtdmFyaWFibGUtbGVnZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtBQUNKO0FBQ0k7RUFDRSxXQUFBO0FBQ047QUFJSTtFQUNFLFlBQUE7QUFGTjtBQUlNO0VBQ0UsbUJBQUE7QUFGUiIsImZpbGUiOiJncmFwaGljLXZhcmlhYmxlLWxlZ2VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gIDo6bmctZGVlcCAubGVnZW5kLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA3LjI1cmVtO1xuXG4gICAgLmxlZ2VuZC1yb3cge1xuICAgICAgd2lkdGg6IDhyZW07XG4gICAgfVxuICB9XG5cbiAgJi5zaXplLWxlZ2VuZCB7XG4gICAgOjpuZy1kZWVwIC5sZWdlbmQtY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogYXV0bztcblxuICAgICAgLmxlZ2VuZC1yb3c6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTAuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    41083: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LegendViewModule": function LegendViewModule() {
          return (
            /* binding */
            _LegendViewModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      89370);
      /* harmony import */


      var _dvl_fw_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @dvl-fw/angular */
      4711);
      /* harmony import */


      var src_app_shared_components_button_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/components/button-group */
      6706);
      /* harmony import */


      var _graphic_variable_legend_graphic_variable_legend_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./graphic-variable-legend/graphic-variable-legend.component */
      55743);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main/main.component */
      61412);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var _LegendViewModule = function _LegendViewModule() {
        _classCallCheck(this, _LegendViewModule);
      };

      _LegendViewModule.ɵfac = function LegendViewModule_Factory(t) {
        return new (t || _LegendViewModule)();
      };

      _LegendViewModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _LegendViewModule
      });
      _LegendViewModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dvl_fw_angular__WEBPACK_IMPORTED_MODULE_5__.DvlFwAngularModule, src_app_shared_components_button_group__WEBPACK_IMPORTED_MODULE_0__.ButtonGroupModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_LegendViewModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent, _graphic_variable_legend_graphic_variable_legend_component__WEBPACK_IMPORTED_MODULE_1__.GraphicVariableLegendComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dvl_fw_angular__WEBPACK_IMPORTED_MODULE_5__.DvlFwAngularModule, src_app_shared_components_button_group__WEBPACK_IMPORTED_MODULE_0__.ButtonGroupModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule],
          exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent]
        });
      })();
      /***/

    },

    /***/
    61412: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainComponent": function MainComponent() {
          return (
            /* binding */
            _MainComponent4
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _dvl_fw_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @dvl-fw/core */
      83345);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash */
      20345);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! xmacroscope-dvl-fw-plugin */
      37443);
      /* harmony import */


      var _shared_services_update_vis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/update-vis.service */
      8445);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      89370);
      /* harmony import */


      var _shared_components_button_group_button_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/button-group/button-group.component */
      22994);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _graphic_variable_legend_graphic_variable_legend_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../graphic-variable-legend/graphic-variable-legend.component */
      55743);

      function MainComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", item_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.label);
        }
      }

      function MainComponent_ng_container_11_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-graphic-variable-legend", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var legend_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", legend_r4.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](legend_r4.label + ": " + ctx_r5.variableLabel(legend_r4.variable));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visualizationId", legend_r4.type);
        }
      }

      function MainComponent_ng_container_11_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MainComponent_ng_container_11_ng_container_1_div_1_Template, 6, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var legend_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.isVariableFixed(legend_r4.variable));
        }
      }

      function MainComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MainComponent_ng_container_11_ng_container_1_Template, 2, 1, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.legends);
        }
      }

      var _MainComponent4 = /*#__PURE__*/function () {
        function _MainComponent4(dataService, updateService) {
          _classCallCheck(this, _MainComponent4);

          this.updateService = updateService;
          this.activeVisualization = 'datatable';
          this.activeVisualizationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.navigation = [{
            label: 'Data Table',
            id: 'datatable',
            icon: 'visualization:table',
            hideLegend: true
          }, {
            label: 'Scatter Graph',
            id: 'scattergraph',
            icon: 'visualization:scatter-graph',
            hideLegend: false
          }, {
            label: 'Map',
            id: 'geomap',
            icon: 'visualization:geomap',
            hideLegend: false
          }];
          this.legends = [{
            variable: 'color',
            label: 'Color',
            icon: 'label:color',
            type: 'color-legend'
          }, {
            variable: 'shape',
            label: 'Shape',
            icon: 'label:shape',
            type: 'shape-legend'
          }, {
            variable: 'areaSize',
            label: 'Size',
            icon: 'label:size',
            type: 'size-legend'
          }];
          this.selected = this.navigation[0];
          this.project = dataService.project;
          this.originalGraphicSymbol = this.getRunPoints().toJSON();
          this.originalTableOrder = this.getRunTable().graphicVariables.order;
        }

        _createClass(_MainComponent4, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this35 = this;

            var _a;

            if ('activeVisualization' in changes) {
              this.selected = (_a = this.navigation.find(function (n) {
                return n.id === _this35.activeVisualization;
              })) !== null && _a !== void 0 ? _a : this.navigation[0];
            }
          }
        }, {
          key: "isVariableFixed",
          value: function isVariableFixed(type) {
            var id = (0, lodash__WEBPACK_IMPORTED_MODULE_0__.get)(this.getRunPoints(), ['graphicVariables', type, 'id']);
            return id === 'fixed' || id === undefined;
          }
        }, {
          key: "variableLabel",
          value: function variableLabel(type) {
            return (0, lodash__WEBPACK_IMPORTED_MODULE_0__.get)(this.getRunPoints(), ['graphicVariables', type, 'label']);
          }
        }, {
          key: "goHome",
          value: function goHome() {
            this.navigationChanged(this.navigation[0]);
            var gs = new _dvl_fw_core__WEBPACK_IMPORTED_MODULE_5__.DefaultGraphicSymbol(this.originalGraphicSymbol, this.project);
            Object.assign(this.getRunPoints().graphicVariables, gs.graphicVariables);
            this.getRunTable().graphicVariables.order = this.originalTableOrder;
            this.updateService.triggerUpdate(this.project.visualizations.find(function (v) {
              return v.id === 'datatable';
            }));
          }
        }, {
          key: "navigationChanged",
          value: function navigationChanged(event) {
            this.selected = event;
            this.activeVisualization = this.selected.id;
            this.activeVisualizationChange.emit(this.selected.id);
          }
        }, {
          key: "getRunPoints",
          value: function getRunPoints() {
            return this.project.graphicSymbols.find(function (g) {
              return g.id === 'runPoints';
            });
          }
        }, {
          key: "getRunTable",
          value: function getRunTable() {
            return this.project.graphicSymbols.find(function (g) {
              return g.id === 'runTable';
            });
          }
        }]);

        return _MainComponent4;
      }();

      _MainComponent4.ɵfac = function MainComponent_Factory(t) {
        return new (t || _MainComponent4)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](xmacroscope_dvl_fw_plugin__WEBPACK_IMPORTED_MODULE_6__.XMacroscopeDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_update_vis_service__WEBPACK_IMPORTED_MODULE_1__.UpdateVisService));
      };

      _MainComponent4.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _MainComponent4,
        selectors: [["app-legend-view-main"]],
        inputs: {
          activeVisualization: "activeVisualization"
        },
        outputs: {
          activeVisualizationChange: "activeVisualizationChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 12,
        vars: 4,
        consts: [[1, "container", "default-legend-theme", "default-button-theme"], [1, "navigation"], [1, "home", 3, "click"], [1, "icon"], [1, "label"], [1, "filler"], [1, "buttons", 3, "items", "value", "deselectable", "valueChange"], ["class", "button", 4, "appButtonContent"], [1, "legend-view-container"], [4, "ngIf"], [1, "button"], ["inline", "", 1, "icon", 3, "svgIcon"], [4, "ngFor", "ngForOf"], ["class", "item", 4, "ngIf"], [1, "item"], [1, "title"], [1, "content", 3, "visualizationId"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainComponent_Template_div_click_2_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "app-button-group", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function MainComponent_Template_app_button_group_valueChange_8_listener($event) {
              return ctx.navigationChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MainComponent_div_9_Template, 4, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MainComponent_ng_container_11_Template, 2, 1, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.navigation)("value", ctx.selected)("deselectable", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.selected.hideLegend);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _shared_components_button_group_button_group_component__WEBPACK_IMPORTED_MODULE_2__.ButtonGroupComponent, _shared_components_button_group_button_group_component__WEBPACK_IMPORTED_MODULE_2__.ButtonContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _graphic_variable_legend_graphic_variable_legend_component__WEBPACK_IMPORTED_MODULE_3__.GraphicVariableLegendComponent],
      });
      /***/
    },

    /***/
    70717: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainComponent": function MainComponent() {
          return (
            /* binding */
            _MainComponent5
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var _visualization_view_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../visualization-view/main/main.component */
      49263);
      /* harmony import */


      var _legend_view_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../legend-view/main/main.component */
      61412);

      var _MainComponent5 = function _MainComponent5(route) {
        var _this36 = this;

        _classCallCheck(this, _MainComponent5);

        this.showAppHeader = true;
        route.queryParams.subscribe(function (q) {
          if ('showAppHeader' in q) {
            _this36.showAppHeader = q['showAppHeader'] === 'true';
          } else if (Object.keys(q).length === 0) {
          }
        });


