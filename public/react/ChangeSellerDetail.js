(window["webpackJsonpolimpica_change_seller_0_7_4"] = window["webpackJsonpolimpica_change_seller_0_7_4"] || []).push([["ChangeSellerDetail"],{

/***/ "../../../../../usr/local/data/service/node_modules/css-loader/dist/cjs.js?!../../../../../usr/local/data/service/node_modules/postcss-loader/dist/cjs.js?!./react/styles/OrderDetails.css":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__("../../../../../usr/local/data/service/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("../../../../../usr/local/data/service/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".olimpica-change-seller-0-x-tags__wrapper{\n    display: flex;\n    width: 100%;\n}\n\n.olimpica-change-seller-0-x-data__container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./react/styles/OrderDetails.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":[".tags__wrapper{\n    display: flex;\n    width: 100%;\n}\n\n.data__container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"tags__wrapper": "olimpica-change-seller-0-x-tags__wrapper",
	"data__container": "olimpica-change-seller-0-x-data__container"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../ChangeSellerDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/src/node/build/react/3.x/entrypoints/shared.js");
/* harmony import */ var _usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__);


var requireEntry = function requireEntry() {
  return __webpack_require__("./react/ChangeSellerDetail.tsx");
};

__webpack_require__.p = Object(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__["getPublicPath"])('olimpica.change-seller@0.7.4');

var _register = Object(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__["register"])(requireEntry, module, 'olimpica.change-seller@0.7.4', 'olimpica.change-seller@0.x', 'ChangeSellerDetail'),
    renderHotReload = _register.renderHotReload,
    setupHMR = _register.setupHMR;

if (false) { var hotEmitter, hotLog; }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../../../../usr/local/data/service/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./react/ChangeSellerDetail.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ChangeSellerDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./react/components/ChangeSellerDetail.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_components_ChangeSellerDetail__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./react/components/ChangeSellerDetail.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vtex_styleguide_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vtex.styleguide/Layout");
/* harmony import */ var vtex_styleguide_Layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vtex.styleguide/PageBlock");
/* harmony import */ var vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vtex_styleguide_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vtex.styleguide/PageHeader");
/* harmony import */ var vtex_styleguide_PageHeader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_PageHeader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useValidateOwner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./react/hooks/useValidateOwner.ts");
/* harmony import */ var _OrderDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./react/components/OrderDetails.tsx");








var ChangeSellerDetail = function ChangeSellerDetail() {
  var _useValidateOwner = Object(_hooks_useValidateOwner__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      owner = _useValidateOwner.owner,
      message = _useValidateOwner.message;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_Layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    pageHeader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_PageHeader__WEBPACK_IMPORTED_MODULE_4___default.a, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "change-seller.navigation.label-table"
      })
    })
  }, owner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variation: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OrderDetails__WEBPACK_IMPORTED_MODULE_6__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex vh-100 items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "t-heading-5"
  }, message)));
};

/* harmony default export */ __webpack_exports__["default"] = (ChangeSellerDetail);

/***/ }),

/***/ "./react/components/ConfirmationModal.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vtex_styleguide_ModalDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vtex.styleguide/ModalDialog");
/* harmony import */ var vtex_styleguide_ModalDialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_ModalDialog__WEBPACK_IMPORTED_MODULE_2__);




var ConfirmationModal = function ConfirmationModal(_ref) {
  var props = _ref.props,
      setConfirmationModalState = _ref.setConfirmationModalState;
  var confirmation = props.confirmation,
      modalState = props.modalState,
      message = props.message,
      loading = props.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(modalState),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleClose = function handleClose() {
    setConfirmationModalState(Object.assign(Object.assign({}, props), {
      modalState: false
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setState(modalState);
  }, [modalState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_ModalDialog__WEBPACK_IMPORTED_MODULE_2___default.a, {
    centered: true,
    loading: loading,
    confirmation: {
      onClick: confirmation,
      label: 'Transferir',
      isDangerous: false
    },
    cancelation: {
      onClick: handleClose,
      label: 'Cancelar'
    },
    isOpen: state,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "f3 f3-ns fw3 gray"
  }, "Resumen de la transferencia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, message.split('\n').map(function (textLine, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: textLine + index
    }, " ", textLine, " ");
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfirmationModal);

/***/ }),

/***/ "./react/components/GeneralData.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vtex.styleguide/Divider");
/* harmony import */ var vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vtex_styleguide_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vtex.styleguide/Box");
/* harmony import */ var vtex_styleguide_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Box__WEBPACK_IMPORTED_MODULE_4__);






var GeneralData = function GeneralData(props) {
  var _a, _b, _c, _d;

  var orders = props.orders,
      message = props.message,
      paymentMethod = props.paymentMethod,
      paymentMethods = props.paymentMethods;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      localMessage = _useState2[0],
      setLocalMessage = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!!message && message !== '') {
      setLocalMessage( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: message
      }));
    }
  }, [message]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Box__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "change-seller.general-data.title-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "ml4 t-action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "change-seller.general-data.t1-item-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ml4 t-action--small"
  }, "".concat((_a = orders === null || orders === void 0 ? void 0 : orders.clientProfileData) === null || _a === void 0 ? void 0 : _a.firstName, "  ").concat((_b = orders === null || orders === void 0 ? void 0 : orders.clientProfileData) === null || _b === void 0 ? void 0 : _b.lastName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "ml4 t-action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "change-seller.general-data.t1-item-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ml4 t-action--small"
  }, (_c = orders === null || orders === void 0 ? void 0 : orders.clientProfileData) === null || _c === void 0 ? void 0 : _c.phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    orientation: "horizontal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "change-seller.general-data.title-2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "change-seller.general-data.t2-item-1"
  }), ":"), paymentMethods === null || paymentMethods === void 0 ? void 0 : paymentMethods.map(function (method, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: "".concat(method, "-").concat(idx),
      className: "c-action-primary mb4 pa2"
    }, method);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "pv2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    orientation: "horizontal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "mt4 mb4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "t-action--small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "change-seller.general-data.t2-item-2"
  })), " ", orders === null || orders === void 0 ? void 0 : orders.orderId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "t-action--small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "change-seller.general-data.t2-item-3.1"
  })), " ", paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.group), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "t-action--small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "change-seller.general-data.t2-item-3"
  })), " ", paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.paymentSystemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "t-action--small"
  }, "Seller:"), " ", (_d = orders === null || orders === void 0 ? void 0 : orders.merchantName) === null || _d === void 0 ? void 0 : _d.toLowerCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "c-danger"
  }, localMessage));
};

/* harmony default export */ __webpack_exports__["default"] = (GeneralData);

/***/ }),

/***/ "./react/components/ListSellers.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vtex_styleguide_ModalDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vtex.styleguide/ModalDialog");
/* harmony import */ var vtex_styleguide_ModalDialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_ModalDialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vtex_styleguide_AutocompleteInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vtex.styleguide/AutocompleteInput");
/* harmony import */ var vtex_styleguide_AutocompleteInput__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_AutocompleteInput__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useSellersList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./react/hooks/useSellersList.tsx");






var ListSellers = function ListSellers(props) {
  var modalState = props.modalState,
      close = props.close,
      handleConfirmation = props.handleConfirmation,
      isLoading = props.isLoading,
      originSeller = props.originSeller;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Seleccione un seller'),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      optionState = _useState2[0],
      setOptionState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      deliveryPolicy = _useState4[0],
      setDeliveryPolicy = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      term = _useState6[0],
      setTerm = _useState6[1];

  var timeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useSellersList = Object(_hooks_useSellersList__WEBPACK_IMPORTED_MODULE_4__["useSellersList"])(),
      _useSellersList2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSellersList, 3),
      sellers = _useSellersList2[0],
      loadingSellers = _useSellersList2[1],
      error = _useSellersList2[2];

  var handleDropdownChange = function handleDropdownChange(args) {
    if (!!args) {
      var _deliveryPolicy = args.deliveryPolicy,
          value = args.value;
      setDeliveryPolicy(_deliveryPolicy);
      setOptionState(value);
    }
  };

  console.log('originSeller: ', originSeller);
  var input = {
    onChange: function onChange(term) {
      if (term) {
        setLoading(true);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(function () {
          setLoading(false);
          setTerm(term);
          timeoutRef.current = null;
        }, 1000);
      } else {
        setTerm(term);
      }
    },
    onSearch: function onSearch(args) {
      return console.log('args: ', args);
    },
    onClear: function onClear() {
      return setTerm('');
    },
    placeholder: 'Search seller... (e.g.: swl1)',
    value: term
  };

  var findValues = function findValues() {
    var match = function match(item) {
      return item.value.toLowerCase().includes(term === null || term === void 0 ? void 0 : term.toLowerCase());
    };

    var values = sellers === null || sellers === void 0 ? void 0 : sellers.filter(function (item) {
      return match(item);
    });
    var value = !term.length ? [] : values;
    return value;
  };

  var options = {
    onSelect: function onSelect(args) {
      return handleDropdownChange(args);
    },
    loading: loading,
    value: findValues()
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_ModalDialog__WEBPACK_IMPORTED_MODULE_2___default.a, {
    centered: true,
    isOpen: modalState,
    onClose: close,
    loading: loadingSellers || isLoading,
    confirmation: {
      onClick: function onClick() {
        return handleConfirmation(optionState, deliveryPolicy);
      },
      label: 'Continuar',
      isDangerous: false
    },
    cancelation: {
      onClick: close,
      label: 'Cancel'
    }
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Simulation in progress...")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_AutocompleteInput__WEBPACK_IMPORTED_MODULE_3___default.a, {
    input: input,
    options: options
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "c-danger"
  }, "One error has been occurred loading sellers"));
};

/* harmony default export */ __webpack_exports__["default"] = (ListSellers);

/***/ }),

/***/ "./react/components/OrderDetails.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./react/hooks/useRequest.tsx");
/* harmony import */ var _graphql_listPayments_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./react/graphql/listPayments.graphql");
/* harmony import */ var _graphql_listPayments_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_graphql_listPayments_graphql__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _graphql_orderSimulation_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./react/graphql/orderSimulation.graphql");
/* harmony import */ var _graphql_orderSimulation_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_graphql_orderSimulation_graphql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _graphql_changeOrder_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./react/graphql/changeOrder.graphql");
/* harmony import */ var _graphql_changeOrder_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_graphql_changeOrder_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vtex_session_client_useFullSession__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("vtex.session-client/useFullSession");
/* harmony import */ var vtex_session_client_useFullSession__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vtex_session_client_useFullSession__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helpers_parseNewOrderData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./react/helpers/parseNewOrderData.ts");
/* harmony import */ var vtex_render_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("vtex.render-runtime");
/* harmony import */ var vtex_render_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vtex_render_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("vtex.styleguide/Table");
/* harmony import */ var vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("vtex.styleguide/Spinner");
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("vtex.styleguide/Divider");
/* harmony import */ var vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("vtex.styleguide/Button");
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var vtex_styleguide_Box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("vtex.styleguide/Box");
/* harmony import */ var vtex_styleguide_Box__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Box__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("vtex.styleguide/Modal");
/* harmony import */ var vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _TableWrapper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./react/components/TableWrapper.tsx");
/* harmony import */ var _ListSellers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./react/components/ListSellers.tsx");
/* harmony import */ var _GeneralData__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./react/components/GeneralData.tsx");
/* harmony import */ var _SimulationTable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./react/components/SimulationTable.tsx");
/* harmony import */ var _ModalError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./react/components/ModalError.tsx");
/* harmony import */ var _styles_OrderDetails_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./react/styles/OrderDetails.css");
/* harmony import */ var _styles_OrderDetails_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_styles_OrderDetails_css__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _schema_schemas__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./react/schema/schemas.tsx");
/* harmony import */ var _helpers_parseData__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./react/helpers/parseData.ts");
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./react/components/ConfirmationModal.tsx");





























var statusToHide = ['canceled'];

var OrderDetails = function OrderDetails() {
  var location = window === null || window === void 0 ? void 0 : window.location;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useRequest = Object(_hooks_useRequest__WEBPACK_IMPORTED_MODULE_6__["default"])(_schema_schemas__WEBPACK_IMPORTED_MODULE_26__["ORDERS_SCHEMA"]),
      state = _useRequest.state,
      getData = _useRequest.getData;

  var _useFullSession = vtex_session_client_useFullSession__WEBPACK_IMPORTED_MODULE_10___default()(),
      currentSession = _useFullSession.data;

  var orders = state.data,
      loading = state.loading,
      error = state.error;
  var paymentData = orders.paymentData.transactions;

  var _paymentData = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(paymentData, 1),
      transactions = _paymentData[0];

  var payments = transactions.payments;

  var _payments = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(payments, 1),
      paymentMethod = _payments[0];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(['']),
      _useState4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      allowedPaymentMethods = _useState4[0],
      setAllowedPaymentMethods = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState6 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      isModalOpen = _useState6[0],
      setIsModalOpen = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState8 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
      allowedMessage = _useState8[0],
      setAllowedMessage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState10 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
      isDisabled = _useState10[0],
      setIsDisabled = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState12 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState11, 2),
      items = _useState12[0],
      setItems = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState14 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState13, 2),
      deliveryPolicy = _useState14[0],
      setDeliveryPolicy = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState16 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState15, 2),
      errorMessage = _useState16[0],
      setErrorMessage = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState18 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState17, 2),
      modalState = _useState18[0],
      setModalState = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{}]),
      _useState20 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState19, 2),
      messages = _useState20[0],
      setMessages = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('Simulate order'),
      _useState22 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState21, 2),
      primaryActionText = _useState22[0],
      setPrimaryActionText = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('/admin/app/change-seller'),
      _useState24 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState23, 2),
      to = _useState24[0],
      setTo = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState26 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState25, 2),
      alert = _useState26[0],
      setAlert = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState28 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState27, 2),
      orderId = _useState28[0],
      setOrderId = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState30 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState29, 2),
      warn = _useState30[0],
      setWarn = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState32 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState31, 2),
      targetSeller = _useState32[0],
      setTargetSeller = _useState32[1];

  var _useQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["useQuery"])(_graphql_listPayments_graphql__WEBPACK_IMPORTED_MODULE_7___default.a),
      paymentMethodsList = _useQuery.data,
      allowedMethodsLoader = _useQuery.loading;

  var _useMutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["useMutation"])(_graphql_orderSimulation_graphql__WEBPACK_IMPORTED_MODULE_8___default.a),
      _useMutation2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      orderSimulation = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      simulation = _useMutation2$.data,
      simulationError = _useMutation2$.error,
      isLoading = _useMutation2$.loading;

  var _useMutation3 = Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["useMutation"])(_graphql_changeOrder_graphql__WEBPACK_IMPORTED_MODULE_9___default.a),
      _useMutation4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation3, 2),
      changeOrder = _useMutation4[0],
      _useMutation4$ = _useMutation4[1],
      changeOrderResponse = _useMutation4$.data,
      changeOrderError = _useMutation4$.error,
      changeOrderLoading = _useMutation4$.loading;

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    confirmation: function confirmation() {},
    modalState: false,
    message: '',
    loading: changeOrderLoading
  }),
      _useState34 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState33, 2),
      confirmationModalState = _useState34[0],
      setConfirmationModalState = _useState34[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var urlPharam = location === null || location === void 0 ? void 0 : location.pathname.split('/');
    var orderId = urlPharam[urlPharam.length - 1];
    var endpoint = "/api/oms/pvt/orders/".concat(orderId);
    getData(endpoint);
  }, [location]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var _a, _b;

    var allowedMethods = (_a = paymentMethodsList === null || paymentMethodsList === void 0 ? void 0 : paymentMethodsList.listPayments) === null || _a === void 0 ? void 0 : _a.filter(function (method) {
      return method === null || method === void 0 ? void 0 : method.isAllowed;
    });

    var _paymentMethods = (_b = allowedMethods === null || allowedMethods === void 0 ? void 0 : allowedMethods.map(function (method) {
      return method === null || method === void 0 ? void 0 : method.paymentSystemName.toLowerCase().trim();
    })) !== null && _b !== void 0 ? _b : [];

    setAllowedPaymentMethods(_paymentMethods);
  }, [paymentMethodsList]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var _a;

    var paymentMethodGroup = (_a = paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.group) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    var methodsValidation = allowedPaymentMethods === null || allowedPaymentMethods === void 0 ? void 0 : allowedPaymentMethods.includes(paymentMethodGroup);
    var message = methodsValidation ? ' ' : 'El método de pago no permite transferir la orden';
    setAllowedMessage(message);
    setIsDisabled(!methodsValidation);
  }, [paymentMethod, allowedPaymentMethods]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var _a;

    var messages = (_a = simulation === null || simulation === void 0 ? void 0 : simulation.simulateOrder) === null || _a === void 0 ? void 0 : _a.messages;
    if (!messages) return;
    var optionalMessage = 'Todos los items pueden ser transferidos';
    var messagesList = Object(_helpers_parseData__WEBPACK_IMPORTED_MODULE_27__["parseMessages"])({
      messages: messages,
      optionalMessage: optionalMessage
    });
    setMessages(messagesList);
  }, [simulation]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var _a, _b, _c, _d, _e, _f, _g;

    var messages = (_b = (_a = changeOrderResponse === null || changeOrderResponse === void 0 ? void 0 : changeOrderResponse.changeOrder) === null || _a === void 0 ? void 0 : _a.orderForm) === null || _b === void 0 ? void 0 : _b.messages;
    var generatedOrderData = !!((_c = changeOrderResponse === null || changeOrderResponse === void 0 ? void 0 : changeOrderResponse.changeOrder) === null || _c === void 0 ? void 0 : _c.orders) && ((_d = changeOrderResponse === null || changeOrderResponse === void 0 ? void 0 : changeOrderResponse.changeOrder) === null || _d === void 0 ? void 0 : _d.orders[0]);
    var orderId = generatedOrderData === null || generatedOrderData === void 0 ? void 0 : generatedOrderData.orderId;
    var messagesList = !!messages ? messages : [];
    var totalizers = (_f = (_e = changeOrderResponse === null || changeOrderResponse === void 0 ? void 0 : changeOrderResponse.changeOrder) === null || _e === void 0 ? void 0 : _e.error) === null || _f === void 0 ? void 0 : _f.totalizers;
    setMessages(messagesList);

    if (!!((_g = changeOrderResponse === null || changeOrderResponse === void 0 ? void 0 : changeOrderResponse.changeOrder) === null || _g === void 0 ? void 0 : _g.orders)) {
      setAlert(true);
      setOrderId(orderId);
    } else if (!!totalizers && totalizers.length) {
      changeOrderData();
    }
  }, [changeOrderResponse]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var _a, _b, _c, _d;

    var _errors = !!changeOrderResponse && ((_b = (_a = changeOrderResponse === null || changeOrderResponse === void 0 ? void 0 : changeOrderResponse.changeOrder) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message);

    var totalizers = (_d = (_c = changeOrderResponse === null || changeOrderResponse === void 0 ? void 0 : changeOrderResponse.changeOrder) === null || _c === void 0 ? void 0 : _c.error) === null || _d === void 0 ? void 0 : _d.totalizers;

    if (!!_errors && !(totalizers === null || totalizers === void 0 ? void 0 : totalizers.length)) {
      setErrorMessage(_errors);
      setModalState(true);
    } else if (totalizers === null || totalizers === void 0 ? void 0 : totalizers.length) {
      var newShippingValue = (totalizers === null || totalizers === void 0 ? void 0 : totalizers.find(function (_ref) {
        var id = _ref.id;
        return id === 'Shipping';
      }).value) / 100;
      setWarn("The logistic values was changed, the new shipping cost is $".concat(newShippingValue !== null && newShippingValue !== void 0 ? newShippingValue : 0));
    }
  }, [changeOrderResponse]);

  var handleClose = function handleClose() {
    return setIsModalOpen(false);
  };

  var handleConfirmation = /*#__PURE__*/function () {
    var _ref2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(sellerId, deliveryPolicy) {
      return _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setDeliveryPolicy(deliveryPolicy);
              _context.next = 3;
              return orderSimulation({
                variables: {
                  data: Object(_helpers_parseData__WEBPACK_IMPORTED_MODULE_27__["simulationData"])({
                    order: orders,
                    items: items,
                    sellerId: sellerId,
                    deliveryPolicy: deliveryPolicy
                  })
                }
              });

            case 3:
              setTargetSeller(sellerId);
              setIsOpen(!isOpen);
              setPrimaryActionText('Transfer order');
              setTo(location === null || location === void 0 ? void 0 : location.href);
              setIsModalOpen(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleConfirmation(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onChange = function onChange(e, id) {
    if (!simulation) {
      var item = items[id];
      var quantity = e.value;
      setItems(Object.assign(Object.assign({}, items), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, id, Object.assign(Object.assign({}, item), {
        quantity: quantity
      }))));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var quantities = {};
    orders.items.forEach(function (ord) {
      var id = ord.id,
          quantity = ord.quantity,
          attachments = ord.attachments;
      var newOrder = {
        id: id,
        quantity: quantity,
        attachments: JSON.stringify(attachments)
      };
      quantities = Object.assign(Object.assign({}, quantities), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, id, newOrder));
    });
    setItems(Object.assign(Object.assign({}, items), quantities));
  }, [orders]);

  var transpherOrder = function transpherOrder(_ref3) {
    var data = _ref3.data;

    try {
      changeOrder({
        variables: {
          data: Object.assign({}, data)
        }
      });
    } catch (error) {
      console.error('One error was ocurred: ', error);
    }
  };

  var changeOrderData = /*#__PURE__*/function () {
    var _ref4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var _a, _b, _c, simulationItems, totalizers, message, Data;

      return _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              simulationItems = (_a = simulation === null || simulation === void 0 ? void 0 : simulation.simulateOrder) === null || _a === void 0 ? void 0 : _a.items;
              totalizers = (_c = (_b = changeOrderResponse === null || changeOrderResponse === void 0 ? void 0 : changeOrderResponse.changeOrder) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.totalizers;
              message = Object(_helpers_parseNewOrderData__WEBPACK_IMPORTED_MODULE_12__["valuesMessage"])(totalizers);
              Data = Object(_helpers_parseNewOrderData__WEBPACK_IMPORTED_MODULE_12__["parseNewOrderData"])({
                data: orders,
                items: simulationItems,
                sessionData: currentSession,
                deliveryPolicy: deliveryPolicy,
                localItems: items,
                simulation: simulation,
                targetSeller: targetSeller
              });
              setConfirmationModalState(Object.assign(Object.assign({}, confirmationModalState), {
                confirmation: function confirmation() {
                  return transpherOrder({
                    data: Data
                  });
                },
                modalState: true,
                message: message !== null && message !== void 0 ? message : Data.coments
              }));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function changeOrderData() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleClick = function handleClick() {
    var _a, _b;

    var simulationItemsLength = (_b = (_a = simulation === null || simulation === void 0 ? void 0 : simulation.simulateOrder) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length;

    if (!simulation) {
      setIsModalOpen(true);
    } else if (simulationItemsLength > 0) {
      changeOrderData();
    } else if (simulationItemsLength === 0) {
      setModalState(true);
      setErrorMessage('La ordén no tiene items disponibles para transferir');
    }
  };

  var handleCancelation = function handleCancelation() {
    location.href = '/admin/app/change-seller';
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, loading || allowedMethodsLoader || allowedMethodsLoader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_15___default.a, null) : statusToHide.includes(orders === null || orders === void 0 ? void 0 : orders.status) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "t-heading-5"
  }, "La orden ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", null, orders === null || orders === void 0 ? void 0 : orders.orderId), " fue cancelada, por lo tanto no puede ser transferida")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_GeneralData__WEBPACK_IMPORTED_MODULE_22__["default"], {
    orders: orders,
    message: allowedMessage,
    paymentMethods: allowedPaymentMethods,
    paymentMethod: paymentMethod
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_16___default.a, {
    orientation: "horizontal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Box__WEBPACK_IMPORTED_MODULE_18___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_14___default.a, {
    items: orders === null || orders === void 0 ? void 0 : orders.totals,
    schema: _schema_schemas__WEBPACK_IMPORTED_MODULE_26__["TOTALS_TABLE"],
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TableWrapper__WEBPACK_IMPORTED_MODULE_20__["default"], {
    orders: orders,
    onChange: onChange,
    items: items
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SimulationTable__WEBPACK_IMPORTED_MODULE_23__["default"], {
    messages: messages
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Box__WEBPACK_IMPORTED_MODULE_18___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_render_runtime__WEBPACK_IMPORTED_MODULE_13__["Link"], {
    to: to
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
    variation: "tertiary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "change-seller.order-details-buttons.go-back"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "ph3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
    onClick: handleClick,
    disabled: isDisabled,
    isLoading: changeOrderLoading
  }, primaryActionText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ListSellers__WEBPACK_IMPORTED_MODULE_21__["default"], {
    modalState: isModalOpen,
    close: handleClose,
    handleConfirmation: handleConfirmation,
    isLoading: isLoading,
    originSeller: orders === null || orders === void 0 ? void 0 : orders.merchantName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_19___default.a, {
    isOpen: modalState,
    onClose: function onClose() {
      return setModalState(!modalState);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "c-danger t-heading-5"
  }, errorMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_28__["default"], {
    props: Object.assign(Object.assign({}, confirmationModalState), {
      loading: changeOrderLoading
    }),
    setConfirmationModalState: setConfirmationModalState
  })), !!error || !!simulationError || !!changeOrderError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ModalError__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: isOpen,
    error: true
  }) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_19___default.a, {
    centered: true,
    isOpen: alert,
    onClose: handleCancelation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "f3 f3-ns fw3 t-heading-3 c-success"
  }, "\xA1Success!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Your order has been succesfully created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "New order id: ", orderId), !!warn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "t-heading-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", null, "Note:"), warn)))));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderDetails);

/***/ }),

/***/ "./react/components/SimulationTable.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtex.styleguide/Table");
/* harmony import */ var vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_1__);


var SCHEMA = {
  properties: {
    text: {
      title: 'Mensajes'
    }
  }
};

var SimulationTable = function SimulationTable(_ref) {
  var messages = _ref.messages;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !!messages && messages.length >= 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    items: messages,
    schema: SCHEMA,
    fullWidth: true
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (SimulationTable);

/***/ }),

/***/ "./react/components/TableWrapper.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vtex_styleguide_NumericStepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtex.styleguide/NumericStepper");
/* harmony import */ var vtex_styleguide_NumericStepper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_NumericStepper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vtex.styleguide/Table");
/* harmony import */ var vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_OrderDetails_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./react/styles/OrderDetails.css");
/* harmony import */ var _styles_OrderDetails_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_OrderDetails_css__WEBPACK_IMPORTED_MODULE_3__);





var TableWrapper = function TableWrapper(_ref) {
  var orders = _ref.orders,
      _onChange = _ref.onChange,
      items = _ref.items;
  var ITEMS_TABLE = {
    properties: {
      name: {
        title: 'Nombre de producto',
        width: 350
      },
      quantity: {
        title: 'Cantidad inicial',
        width: 150,
        cellRenderer: function cellRenderer(_ref2) {
          var cellData = _ref2.cellData;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ml7 t-heading-5"
          }, " ", cellData, " ");
        }
      },
      price: {
        title: 'Precio unitario',
        width: 150,
        headerRight: true,
        cellRenderer: function cellRenderer(_ref3) {
          var cellData = _ref3.cellData;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "w-100 tr"
          }, " $ ", cellData / 100, " ");
        }
      },
      total: {
        title: 'Total',
        width: 150,
        headerRight: true,
        cellRenderer: function cellRenderer(_ref4) {
          var rowData = _ref4.rowData;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "w-100 tr"
          }, " $ ", rowData.price * rowData.quantity / 100, " ");
        }
      },
      actions: {
        title: 'Nueva cantidad',
        width: 180,
        headerRight: true,
        cellRenderer: function cellRenderer(_ref5) {
          var rowData = _ref5.rowData;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ml5"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_NumericStepper__WEBPACK_IMPORTED_MODULE_1___default.a, {
            onChange: function onChange(e) {
              return _onChange(e, rowData.id);
            },
            value: items[rowData.id].quantity,
            size: "small"
          }));
        }
      },
      newTotal: {
        title: 'Nuevo Total',
        width: 150,
        headerRight: true,
        cellRenderer: function cellRenderer(_ref6) {
          var rowData = _ref6.rowData;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "w-100 tr"
          }, " $ ", rowData.price * items[rowData.id].quantity / 100, " ");
        }
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "t-heading-3"
  }, 'Items'), Object.values(items).length <= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "NAN"), Object.values(items).length >= 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_2___default.a, {
    items: orders.items,
    schema: ITEMS_TABLE,
    fullWidth: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TableWrapper);

/***/ }),

/***/ "./react/graphql/changeOrder.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeOrderSeller"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IChangeOrder"}},"directives":[]}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"context"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sender"},"value":{"kind":"StringValue","value":"olimpica.change-seller@0.7.4","block":false}}]},{"kind":"Directive","name":{"kind":"Name","value":"runtimeMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"StringValue","value":"f942706ce624f63115272a95d0f2a13585a82f48f021e944714a352618ec09fb","block":false}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderForm"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderFormId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"messages"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fields"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ean"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"orders"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"orderGroup"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sellerOrderId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"receiverUri"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalizers"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":725}};
    doc.loc.source = {"body":"mutation changeOrderSeller($data: IChangeOrder) @context(sender: \"olimpica.change-seller@0.7.4\") @runtimeMeta(hash: \"f942706ce624f63115272a95d0f2a13585a82f48f021e944714a352618ec09fb\") {\n  changeOrder(data: $data) {\n    orderForm {\n      orderFormId\n      messages {\n        text\n        status\n        fields {\n          id\n          ean\n          name\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    orders {\n      orderId\n      orderGroup\n      sellerOrderId\n      __typename\n    }\n    transactionData {\n      receiverUri\n      __typename\n    }\n    error {\n      message\n      totalizers {\n        id\n        value\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["changeOrderSeller"] = oneQuery(doc, "changeOrderSeller");
        


/***/ }),

/***/ "./react/graphql/getSellers.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSellers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SellersPaginationParams"}},"directives":[]}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"context"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"provider"},"value":{"kind":"StringValue","value":"vtex.sellers-graphql","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"sender"},"value":{"kind":"StringValue","value":"olimpica.change-seller@0.7.4","block":false}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sellers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"parameters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sellerType"},"value":{"kind":"IntValue","value":"2"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}]}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"runtimeMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"StringValue","value":"572f220527080d989d14ee893c2c552bef9a9cd2353d7ba4fda219121e0aadc3","block":false}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"label"},"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deliveryPolicy"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paging"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"to"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":483}};
    doc.loc.source = {"body":"query getSellers($pagination: SellersPaginationParams) @context(provider: \"vtex.sellers-graphql\", sender: \"olimpica.change-seller@0.7.4\") {\n  sellers(parameters: {filters: {sellerType: 2}, pagination: $pagination}) @runtimeMeta(hash: \"572f220527080d989d14ee893c2c552bef9a9cd2353d7ba4fda219121e0aadc3\") {\n    items {\n      value: id\n      label: name\n      deliveryPolicy\n      __typename\n    }\n    paging {\n      from\n      to\n      total\n      __typename\n    }\n    __typename\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["getSellers"] = oneQuery(doc, "getSellers");
        


/***/ }),

/***/ "./react/graphql/listPayments.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"paymentMethods"},"variableDefinitions":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"context"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sender"},"value":{"kind":"StringValue","value":"olimpica.change-seller@0.7.4","block":false}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPayments"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"runtimeMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"StringValue","value":"3da679bcf78b39c0c8a22f795fd93f157ce55d7cfcd95960d8f6fce6d05dabbf","block":false}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAllowed"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"paymentSystemName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":233}};
    doc.loc.source = {"body":"query paymentMethods @context(sender: \"olimpica.change-seller@0.7.4\") {\n  listPayments @runtimeMeta(hash: \"3da679bcf78b39c0c8a22f795fd93f157ce55d7cfcd95960d8f6fce6d05dabbf\") {\n    isAllowed\n    paymentSystemName\n    __typename\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["paymentMethods"] = oneQuery(doc, "paymentMethods");
        


/***/ }),

/***/ "./react/graphql/orderSimulation.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"simulateOrderMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ICartSimulation"}},"directives":[]}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"context"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sender"},"value":{"kind":"StringValue","value":"olimpica.change-seller@0.7.4","block":false}}]},{"kind":"Directive","name":{"kind":"Name","value":"runtimeMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"StringValue","value":"b7202c7a6085154a93a7b211ff515d8c9a4c6965d81b749268ec4da372b470ae","block":false}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"simulateOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"requestIndex"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"seller"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sellerChain"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tax"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceValidUntil"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listPrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sellingPrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rewardValue"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rewardValue"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceTags"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rawValue"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availability"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceDefinition"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sellingPrices"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"calculatedSellingPrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"logisticsInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"itemIndex"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"shipsTo"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"slas"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deliveryChannel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tax"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listPrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"shippingEstimate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"availableDeliveryWindows"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDateUtc"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"endDateUtc"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tax"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listPrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"deliveryIds"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"warehouseId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":1378}};
    doc.loc.source = {"body":"mutation simulateOrderMutation($data: ICartSimulation) @context(sender: \"olimpica.change-seller@0.7.4\") @runtimeMeta(hash: \"b7202c7a6085154a93a7b211ff515d8c9a4c6965d81b749268ec4da372b470ae\") {\n  simulateOrder(data: $data) {\n    items {\n      id\n      requestIndex\n      quantity\n      seller\n      sellerChain\n      tax\n      priceValidUntil\n      price\n      listPrice\n      sellingPrice\n      rewardValue\n      attachments\n      rewardValue\n      priceTags {\n        name\n        value\n        rawValue\n        __typename\n      }\n      availability\n      priceDefinition {\n        sellingPrices {\n          value\n          quantity\n          __typename\n        }\n        calculatedSellingPrice\n        total\n        __typename\n      }\n      __typename\n    }\n    totals {\n      id\n      name\n      value\n      __typename\n    }\n    messages {\n      text\n      __typename\n    }\n    logisticsInfo {\n      quantity\n      itemIndex\n      shipsTo\n      slas {\n        id\n        deliveryChannel\n        name\n        tax\n        price\n        listPrice\n        shippingEstimate\n        availableDeliveryWindows {\n          startDateUtc\n          endDateUtc\n          tax\n          price\n          listPrice\n          __typename\n        }\n        deliveryIds {\n          warehouseId\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["simulateOrderMutation"] = oneQuery(doc, "simulateOrderMutation");
        


/***/ }),

/***/ "./react/helpers/parseNewOrderData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeliveryWindow", function() { return getDeliveryWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSellersData", function() { return setSellersData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotal", function() { return getTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseLogisticInfo", function() { return parseLogisticInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseNewOrderData", function() { return parseNewOrderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valuesMessage", function() { return valuesMessage; });
/* harmony import */ var _parseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./react/helpers/parseData.ts");


var makeMessage = function makeMessage(_ref) {
  var data = _ref.data,
      sessionData = _ref.sessionData,
      localItems = _ref.localItems,
      simulationItems = _ref.simulationItems;

  var _a, _b, _c, _d, _e, _f, _g;

  var currentDate = new Date(Date.now()).toString();
  var transferenceDate = Object(_parseData__WEBPACK_IMPORTED_MODULE_0__["parseDateAndHour"])({
    date: currentDate
  });
  var createdDate = Object(_parseData__WEBPACK_IMPORTED_MODULE_0__["parseDateAndHour"])({
    date: data === null || data === void 0 ? void 0 : data.creationDate
  });
  var shippingDate = (_b = (_a = data === null || data === void 0 ? void 0 : data.shippingData) === null || _a === void 0 ? void 0 : _a.logisticsInfo[0]) === null || _b === void 0 ? void 0 : _b.shippingEstimateDate;
  var shippingStimatedDate = Object(_parseData__WEBPACK_IMPORTED_MODULE_0__["parseDateAndHour"])({
    date: shippingDate
  });
  var observationsValue = (_c = data === null || data === void 0 ? void 0 : data.openTextField) === null || _c === void 0 ? void 0 : _c.value;
  var observations = !!observationsValue ? observationsValue : ' ';

  var _parseRemovedItems = Object(_parseData__WEBPACK_IMPORTED_MODULE_0__["parseRemovedItems"])({
    modifiedItems: localItems,
    originItems: data === null || data === void 0 ? void 0 : data.items,
    simulationItems: simulationItems
  }),
      itemsWithouthInventary = _parseRemovedItems.itemsWithouthInventary;

  var message = "\n      PEDIDO PROCEDENTE DE UNA TRANSFERENCIA:\n      -Transferido de ".concat(data === null || data === void 0 ? void 0 : data.merchantName, " por ").concat((_g = (_f = (_e = (_d = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _d === void 0 ? void 0 : _d.namespaces) === null || _e === void 0 ? void 0 : _e.authentication) === null || _f === void 0 ? void 0 : _f.adminUserEmail) === null || _g === void 0 ? void 0 : _g.value, "\n      -Creado: ").concat(createdDate, "\n      -Fecha estimada de env\xEDo en la orden anterior: ").concat(shippingStimatedDate, "\n      -Fecha y hora de transferencia: ").concat(transferenceDate, "\n\n      ").concat(!!observations && observations !== ' ' ? "OBSERVACIONES DEL PEDIDO\n        -Nota: \"".concat(observations, "\".") : '', "\n\n      PRODUCTOS NO TRANSFERIDOS \n\n      ").concat(!!itemsWithouthInventary ? "-Productos sin inventario:\n            * ".concat(itemsWithouthInventary.join('\n')) : '', "\n    ");
  return message;
};

var getDeliveryWindow = function getDeliveryWindow(_ref2) {
  var logisticsInfo = _ref2.logisticsInfo;

  var _a, _b, _c, _d, _e, _f;

  if (!logisticsInfo || logisticsInfo.length < 1) {
    throw new Error('Logistics info is undefined, please check that');
  }

  var deliveryWindow = logisticsInfo.filter(function (info) {
    var _a;

    return ((_a = info === null || info === void 0 ? void 0 : info.slas) === null || _a === void 0 ? void 0 : _a.length) > 0;
  });
  var data = {
    startDateUtc: (_c = (_b = (_a = deliveryWindow[0]) === null || _a === void 0 ? void 0 : _a.slas[0]) === null || _b === void 0 ? void 0 : _b.availableDeliveryWindows[0]) === null || _c === void 0 ? void 0 : _c.startDateUtc,
    endDateUtc: (_f = (_e = (_d = deliveryWindow[0]) === null || _d === void 0 ? void 0 : _d.slas[0]) === null || _e === void 0 ? void 0 : _e.availableDeliveryWindows[0]) === null || _f === void 0 ? void 0 : _f.endDateUtc
  };
  return data;
};
var setSellersData = function setSellersData(items, globalSeller) {
  return items.map(function (item) {
    var _a;

    var itemWithSeller = Object.assign(Object.assign({}, item), {
      seller: globalSeller,
      attachments: (_a = item === null || item === void 0 ? void 0 : item.attachments) !== null && _a !== void 0 ? _a : ''
    });
    return itemWithSeller;
  });
};
var getTotal = function getTotal(items, logisticInfo) {
  var total = 0;
  items.forEach(function (item, indx) {
    var _a, _b, _c;

    var itemValue = (_a = item === null || item === void 0 ? void 0 : item.priceDefinition) === null || _a === void 0 ? void 0 : _a.total;
    var logisticValue = (_c = (_b = logisticInfo[indx]) === null || _b === void 0 ? void 0 : _b.slas[0]) === null || _c === void 0 ? void 0 : _c.price;
    total += itemValue + logisticValue;
  });
  return total;
};
var parseLogisticInfo = function parseLogisticInfo(logisticInfo) {
  var _a;

  var slasName = (_a = logisticInfo[0].slas[0]) === null || _a === void 0 ? void 0 : _a.name;
  var logistics = logisticInfo.map(function (item) {
    var _a, _b, _c, _d;

    var formatedItem = {
      "itemIndex": item === null || item === void 0 ? void 0 : item.itemIndex,
      "selectedSla": "",
      "selectedDeliveryChannel": "",
      "quantity": item === null || item === void 0 ? void 0 : item.quantity,
      "price": 0,
      "shipsTo": item === null || item === void 0 ? void 0 : item.shipsTo,
      "deliveryWindow": "",
      "shippingEstimate": "",
      "deliveryChannels": item === null || item === void 0 ? void 0 : item.deliveryChannels
    };

    if (item.slas.length > 0 && !item.selectedSla) {
      var sla = (_a = item === null || item === void 0 ? void 0 : item.slas) === null || _a === void 0 ? void 0 : _a.find(function (sla) {
        return sla.name === slasName;
      });
      var availableDelivery = Object.assign(Object.assign({}, sla === null || sla === void 0 ? void 0 : sla.availableDeliveryWindows[0]), {
        listPrice: (_c = (_b = sla === null || sla === void 0 ? void 0 : sla.availableDeliveryWindows[0]) === null || _b === void 0 ? void 0 : _b.listPrice) !== null && _c !== void 0 ? _c : 0
      });
      formatedItem.selectedSla = sla === null || sla === void 0 ? void 0 : sla.name;
      formatedItem.shippingEstimate = sla === null || sla === void 0 ? void 0 : sla.shippingEstimate;
      formatedItem.deliveryWindow = availableDelivery;
      formatedItem.price = (_d = sla === null || sla === void 0 ? void 0 : sla.price) !== null && _d !== void 0 ? _d : 0;
      formatedItem.selectedDeliveryChannel = sla === null || sla === void 0 ? void 0 : sla.deliveryChannel;
    }

    return formatedItem;
  });
  return logistics;
};
var parseNewOrderData = function parseNewOrderData(_ref3) {
  var data = _ref3.data,
      items = _ref3.items,
      sessionData = _ref3.sessionData,
      deliveryPolicy = _ref3.deliveryPolicy,
      localItems = _ref3.localItems,
      simulation = _ref3.simulation;

  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

  var logisticsInfo = (_a = simulation === null || simulation === void 0 ? void 0 : simulation.simulateOrder) === null || _a === void 0 ? void 0 : _a.logisticsInfo;
  var simulationItems = (_b = simulation === null || simulation === void 0 ? void 0 : simulation.simulateOrder) === null || _b === void 0 ? void 0 : _b.items;
  var messages = (_c = simulation === null || simulation === void 0 ? void 0 : simulation.simulateOrder) === null || _c === void 0 ? void 0 : _c.messages;
  var message = makeMessage({
    data: data,
    sessionData: sessionData,
    messages: messages,
    localItems: localItems,
    simulationItems: simulationItems
  });
  var globalSeller = (_e = (_d = simulation === null || simulation === void 0 ? void 0 : simulation.simulateOrder) === null || _d === void 0 ? void 0 : _d.items[0]) === null || _e === void 0 ? void 0 : _e.seller;
  var itemsWithSellers = setSellersData(items, globalSeller);
  var totalValue = getTotal(itemsWithSellers, logisticsInfo);
  var logisticInfo = parseLogisticInfo(logisticsInfo);
  var orderData = {
    itemsOrder: itemsWithSellers,
    orderId: data === null || data === void 0 ? void 0 : data.orderId,
    marketplaceOrderId: data === null || data === void 0 ? void 0 : data.marketplaceOrderId,
    sellerOrder: (_f = data === null || data === void 0 ? void 0 : data.merchantName) === null || _f === void 0 ? void 0 : _f.toLowerCase(),
    email: (_g = data === null || data === void 0 ? void 0 : data.clientProfileData) === null || _g === void 0 ? void 0 : _g.email,
    shippingData: {
      address: {
        addressId: (_j = (_h = data === null || data === void 0 ? void 0 : data.shippingData) === null || _h === void 0 ? void 0 : _h.address) === null || _j === void 0 ? void 0 : _j.addressId,
        geoCoordinates: deliveryPolicy
      },
      logisticsInfoOrder: logisticInfo
    },
    value: totalValue,
    paymentData: {
      payments: [{
        paymentSystem: (_m = (_l = (_k = data === null || data === void 0 ? void 0 : data.paymentData) === null || _k === void 0 ? void 0 : _k.transactions[0]) === null || _l === void 0 ? void 0 : _l.payments[0]) === null || _m === void 0 ? void 0 : _m.paymentSystem,
        referenceValue: totalValue,
        value: totalValue,
        installments: (_q = (_p = (_o = data === null || data === void 0 ? void 0 : data.paymentData) === null || _o === void 0 ? void 0 : _o.transactions[0]) === null || _p === void 0 ? void 0 : _p.payments[0]) === null || _q === void 0 ? void 0 : _q.installments
      }]
    },
    coments: message
  };
  return orderData;
};
var valuesMessage = function valuesMessage(totalizers) {
  var newShippingValue = (totalizers === null || totalizers === void 0 ? void 0 : totalizers.find(function (_ref4) {
    var id = _ref4.id;
    return id === 'Shipping';
  }).value) / 100;
  var newValuesMessage = "\n    Los valores de envio fueron cambiados\n    Nuevo costo de env\xEDo: $".concat(newShippingValue, "\n    \xBFDesea continuar?\n  ");
  var message = !!totalizers && totalizers.length ? newValuesMessage : null;
  return message;
};

/***/ }),

/***/ "./react/hooks/useSellersList.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSellersList", function() { return useSellersList; });
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphql_getSellers_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./react/graphql/getSellers.graphql");
/* harmony import */ var _graphql_getSellers_graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_graphql_getSellers_graphql__WEBPACK_IMPORTED_MODULE_4__);





var useSellersList = function useSellersList() {
  var _a;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      sellersList = _useState2[0],
      setSellersList = _useState2[1];

  var _useLazyQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["useLazyQuery"])(_graphql_getSellers_graphql__WEBPACK_IMPORTED_MODULE_4___default.a),
      _useLazyQuery2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useLazyQuery, 2),
      listSellers = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      data = _useLazyQuery2$.data,
      loadingSellers = _useLazyQuery2$.loading,
      error = _useLazyQuery2$.error;

  var paging = (_a = data === null || data === void 0 ? void 0 : data.sellers) === null || _a === void 0 ? void 0 : _a.paging;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    listSellers({
      variables: {
        pagination: {
          from: 0,
          to: 100
        }
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if ((paging === null || paging === void 0 ? void 0 : paging.total) > (paging === null || paging === void 0 ? void 0 : paging.to)) {
      listSellers({
        variables: {
          pagination: {
            from: paging === null || paging === void 0 ? void 0 : paging.to,
            to: paging === null || paging === void 0 ? void 0 : paging.total
          }
        }
      });
    }
  }, [data]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var _a;

    !!data && setSellersList([].concat(Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(sellersList), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])((_a = data === null || data === void 0 ? void 0 : data.sellers) === null || _a === void 0 ? void 0 : _a.items)));
  }, [data]);
  return [sellersList, loadingSellers, error, paging];
};

/***/ }),

/***/ "./react/styles/OrderDetails.css":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("../../../../../usr/local/data/service/node_modules/css-loader/dist/cjs.js?!../../../../../usr/local/data/service/node_modules/postcss-loader/dist/cjs.js?!./react/styles/OrderDetails.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":{"before":"#override_link_0"},"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("../../../../../usr/local/data/service/node_modules/@vtex/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = ReactApollo;

/***/ }),

/***/ "react-intl":
/***/ (function(module, exports) {

module.exports = ReactIntl;

/***/ }),

/***/ "regenerator-runtime":
/***/ (function(module, exports) {

module.exports = regeneratorRuntime;

/***/ }),

/***/ "vtex.render-runtime":
/***/ (function(module, exports) {

module.exports = __RENDER_8_RUNTIME__;

/***/ }),

/***/ "vtex.session-client/useFullSession":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.session-client@1.x/useFullSession'];

/***/ }),

/***/ "vtex.styleguide/AutocompleteInput":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/AutocompleteInput'];

/***/ }),

/***/ "vtex.styleguide/Box":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Box'];

/***/ }),

/***/ "vtex.styleguide/Button":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Button'];

/***/ }),

/***/ "vtex.styleguide/Divider":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Divider'];

/***/ }),

/***/ "vtex.styleguide/Layout":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Layout'];

/***/ }),

/***/ "vtex.styleguide/Modal":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Modal'];

/***/ }),

/***/ "vtex.styleguide/ModalDialog":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/ModalDialog'];

/***/ }),

/***/ "vtex.styleguide/NumericStepper":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/NumericStepper'];

/***/ }),

/***/ "vtex.styleguide/PageBlock":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/PageBlock'];

/***/ }),

/***/ "vtex.styleguide/PageHeader":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/PageHeader'];

/***/ }),

/***/ "vtex.styleguide/Spinner":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Spinner'];

/***/ }),

/***/ "vtex.styleguide/Table":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Table'];

/***/ })

},[["../ChangeSellerDetail.js","common","vendors~ChangeSeller~ChangeSellerDetail","ChangeSeller~ChangeSellerDetail"]]]);
//# sourceMappingURL=ChangeSellerDetail.js.map