(window["webpackJsonpolimpica_change_seller_0_7_4"] = window["webpackJsonpolimpica_change_seller_0_7_4"] || []).push([["ChangeSeller"],{

/***/ "../../../../../usr/local/data/service/node_modules/css-loader/dist/cjs.js?!../../../../../usr/local/data/service/node_modules/postcss-loader/dist/cjs.js?!./react/styles/SelectOrder.css":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__("../../../../../usr/local/data/service/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("../../../../../usr/local/data/service/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".olimpica-change-seller-0-x-pagination__wrapper{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.olimpica-change-seller-0-x-pagination__buttons{\n    display: flex;\n    justify-content: space-between;\n    width: 10%;\n}", "",{"version":3,"sources":["webpack://./react/styles/SelectOrder.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,UAAU;AACd","sourcesContent":[".pagination__wrapper{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.pagination__buttons{\n    display: flex;\n    justify-content: space-between;\n    width: 10%;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"pagination__wrapper": "olimpica-change-seller-0-x-pagination__wrapper",
	"pagination__buttons": "olimpica-change-seller-0-x-pagination__buttons"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../ChangeSeller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/src/node/build/react/3.x/entrypoints/shared.js");
/* harmony import */ var _usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__);


var requireEntry = function requireEntry() {
  return __webpack_require__("./react/ChangeSeller.tsx");
};

__webpack_require__.p = Object(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__["getPublicPath"])('olimpica.change-seller@0.7.4');

var _register = Object(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__["register"])(requireEntry, module, 'olimpica.change-seller@0.7.4', 'olimpica.change-seller@0.x', 'ChangeSeller'),
    renderHotReload = _register.renderHotReload,
    setupHMR = _register.setupHMR;

if (false) { var hotEmitter, hotLog; }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../../../../usr/local/data/service/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./react/ChangeSeller.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ChangeSeller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./react/components/ChangeSeller.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_components_ChangeSeller__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./react/components/ChangeSeller.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/8cb062cdad5bdc24c4b38c1ae6cda8db99179f284e61c3ac0900292244a483cc/dev/node_modules/react-query/es/index.js");
/* harmony import */ var vtex_styleguide_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vtex.styleguide/Layout");
/* harmony import */ var vtex_styleguide_Layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vtex.styleguide/PageBlock");
/* harmony import */ var vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vtex_styleguide_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vtex.styleguide/PageHeader");
/* harmony import */ var vtex_styleguide_PageHeader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_PageHeader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useValidateOwner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./react/hooks/useValidateOwner.ts");
/* harmony import */ var _SelectOrder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./react/components/SelectOrder.tsx");








var queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__["QueryClient"]();

var ChangeSeller = function ChangeSeller() {
  var _useValidateOwner = Object(_hooks_useValidateOwner__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      owner = _useValidateOwner.owner,
      message = _useValidateOwner.message;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_Layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pageHeader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_PageHeader__WEBPACK_IMPORTED_MODULE_5___default.a, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "change-seller.navigation.label-table"
      })
    })
  }, owner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variation: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_query__WEBPACK_IMPORTED_MODULE_2__["QueryClientProvider"], {
    client: queryClient
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SelectOrder__WEBPACK_IMPORTED_MODULE_7__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex vh-100 items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "t-heading-5"
  }, message)));
};

/* harmony default export */ __webpack_exports__["default"] = (ChangeSeller);

/***/ }),

/***/ "./react/components/Pagination.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtex.styleguide/Button");
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vtex_css_handles_useCssHandles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vtex.css-handles/useCssHandles");
/* harmony import */ var vtex_css_handles_useCssHandles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vtex_css_handles_useCssHandles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_SelectOrder_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./react/styles/SelectOrder.css");
/* harmony import */ var _styles_SelectOrder_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_SelectOrder_css__WEBPACK_IMPORTED_MODULE_3__);




var CSS_HANDLES = ['pagination__wrapper', 'pagination__buttons'];

var Pagination = function Pagination(_ref) {
  var page = _ref.page,
      setPage = _ref.setPage;
  var handles = vtex_css_handles_useCssHandles__WEBPACK_IMPORTED_MODULE_2___default()(CSS_HANDLES);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(handles.pagination__wrapper, " pa4")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(handles.pagination__buttons)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ma4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variation: "tertiary",
    onClick: function onClick() {
      return setPage(function (old) {
        return Math.max(old - 1, 0);
      });
    },
    disabled: page === 1
  }, '<')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ma4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variation: "tertiary",
    onClick: function onClick() {
      return setPage(function (old) {
        return old + 1;
      });
    }
  }, " ", '>', " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Page ", page)));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./react/components/SelectOrder.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vtex_styleguide_InputSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vtex.styleguide/InputSearch");
/* harmony import */ var vtex_styleguide_InputSearch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_InputSearch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vtex.styleguide/Divider");
/* harmony import */ var vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vtex.styleguide/Table");
/* harmony import */ var vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vtex.styleguide/Spinner");
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ModalError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./react/components/ModalError.tsx");
/* harmony import */ var _schema_schemas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./react/schema/schemas.tsx");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./react/components/Pagination.tsx");
/* harmony import */ var _hooks_useHandleChange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./react/hooks/useHandleChange.tsx");
/* harmony import */ var _hooks_useSearchType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./react/hooks/useSearchType.tsx");












var SelectOrder = function SelectOrder() {
  var _useHandleChange = Object(_hooks_useHandleChange__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      _useHandleChange2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useHandleChange, 2),
      handleChange = _useHandleChange2[0],
      input = _useHandleChange2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useSearchType = Object(_hooks_useSearchType__WEBPACK_IMPORTED_MODULE_10__["default"])({
    input: input,
    page: page
  }),
      _useSearchType2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSearchType, 2),
      handleSearch = _useSearchType2[0],
      _useSearchType2$ = _useSearchType2[1],
      orders = _useSearchType2$.data,
      loading = _useSearchType2$.loading,
      error = _useSearchType2$.error;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      message = _useState4[0],
      setMessage = _useState4[1];

  var showOrderDetail = function showOrderDetail(orderId) {
    location.assign("/admin/app/change-seller/".concat(orderId));
  };

  var search = function search() {
    handleSearch();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    handleSearch();
  }, [page]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _a;

    var ordersList = (_a = orders[0]) === null || _a === void 0 ? void 0 : _a.list;

    if (!!ordersList && !(ordersList === null || ordersList === void 0 ? void 0 : ordersList.length)) {
      setMessage('Ordenes no encontradas');
    } else {
      setMessage('');
    }
  }, [orders]);

  var ordersFilter = function ordersFilter() {
    var toHide = ['canceled'];

    var match = function match(order) {
      return !toHide.includes(order === null || order === void 0 ? void 0 : order.status);
    };

    return orders.filter(match);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_InputSearch__WEBPACK_IMPORTED_MODULE_2___default.a, {
    placeholder: "B\xFAscar ordenes por correo o Id de la orden...",
    size: "regular",
    value: input,
    onChange: handleChange,
    onSubmit: search
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    orientation: "horizontal"
  }), loading && !error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_5___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "pa3 t-action--small c-action-primary"
  }, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    orientation: "horizontal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fullWidth: true,
    schema: _schema_schemas__WEBPACK_IMPORTED_MODULE_7__["ORDERS_LIST_SCHEMA"],
    items: ordersFilter(),
    onRowClick: function onRowClick(_ref) {
      var rowData = _ref.rowData;
      return showOrderDetail(rowData === null || rowData === void 0 ? void 0 : rowData.orderId);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_8__["default"], {
    page: page,
    setPage: setPage
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ModalError__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: true,
    error: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectOrder);

/***/ }),

/***/ "./react/graphql/getOrdersByEmail.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOrdersByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IListOrders"}},"directives":[]}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"context"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sender"},"value":{"kind":"StringValue","value":"olimpica.change-seller@0.7.4","block":false}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listOrders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"context"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"provider"},"value":{"kind":"StringValue","value":"olimpica@change-seller","block":false}}]},{"kind":"Directive","name":{"kind":"Name","value":"runtimeMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"StringValue","value":"e625cb780a17761f4da2ab9e6a695e3b47f1ebfcebc7aeacb55c245edfccbc9e","block":false}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"list"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"creationDate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"clientName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalValue"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"paymentNames"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"statusDescription"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"marketPlaceOrderId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sequence"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"salesChannel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"affiliateId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"origin"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastMessageUnread"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"orderIsComplete"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"authorizedDate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"callCenterOperatorName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostname"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"orderFormId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paging"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"perPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currentPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":767}};
    doc.loc.source = {"body":"query getOrdersByEmail($data: IListOrders) @context(sender: \"olimpica.change-seller@0.7.4\") {\n  listOrders(data: $data) @context(provider: \"olimpica@change-seller\") @runtimeMeta(hash: \"e625cb780a17761f4da2ab9e6a695e3b47f1ebfcebc7aeacb55c245edfccbc9e\") {\n    list {\n      orderId\n      creationDate\n      clientName\n      totalValue\n      paymentNames\n      status\n      statusDescription\n      marketPlaceOrderId\n      sequence\n      salesChannel\n      affiliateId\n      origin\n      lastMessageUnread\n      orderIsComplete\n      authorizedDate\n      callCenterOperatorName\n      totalItems\n      currencyCode\n      hostname\n      orderFormId\n      __typename\n    }\n    paging {\n      total\n      perPage\n      currentPage\n      __typename\n    }\n    __typename\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["getOrdersByEmail"] = oneQuery(doc, "getOrdersByEmail");
        


/***/ }),

/***/ "./react/hooks/useHandleChange.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var useHandleChange = function useHandleChange() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = function handleChange(e) {
    var target = e === null || e === void 0 ? void 0 : e.target;
    var value = target === null || target === void 0 ? void 0 : target.value;
    setState(value);
  };

  return [handleChange, state];
};

/* harmony default export */ __webpack_exports__["default"] = (useHandleChange);

/***/ }),

/***/ "./react/hooks/useSearchType.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_getOrdersByEmail_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./react/graphql/getOrdersByEmail.graphql");
/* harmony import */ var _graphql_getOrdersByEmail_graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_graphql_getOrdersByEmail_graphql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _useRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./react/hooks/useRequest.tsx");

 // import { getData } from '../helpers/getData'


 // import { useQuery } from 'react-query';


var unallowedStatus = ['canceled', 'invoiced'];

var useSearchType = function useSearchType(_ref) {
  var input = _ref.input,
      page = _ref.page,
      _ref$per_page = _ref.per_page,
      per_page = _ref$per_page === void 0 ? 10 : _ref$per_page;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    data: [],
    loading: false,
    error: ''
  }),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // const { data, isLoading, error, refetch, isFetching } = useQuery('orders', () => getData({url, page}))


  var _useRequest = Object(_useRequest__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      getData = _useRequest.getData,
      _useRequest$state = _useRequest.state,
      data = _useRequest$state.data,
      isLoading = _useRequest$state.loading,
      error = _useRequest$state.error;

  var _useLazyQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["useLazyQuery"])(_graphql_getOrdersByEmail_graphql__WEBPACK_IMPORTED_MODULE_2___default.a),
      _useLazyQuery2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLazyQuery, 2),
      getOrders = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      gqlOrders = _useLazyQuery2$.data,
      loading = _useLazyQuery2$.loading;

  var _ref2 = !!data ? data : {
    list: [{}]
  },
      ordersList = _ref2.list;

  var emailRegex = /^\w+.?[a-z]*@[a-z]{4,10}.{1}[a-z]{2,10}.?[a-z]{0,10}$/;
  var idRegex = /^[SLR]*[0-9\-?]{10,}$/;

  var handleSearch = function handleSearch() {
    var email = input === null || input === void 0 ? void 0 : input.match(emailRegex);
    var id = input === null || input === void 0 ? void 0 : input.match(idRegex);

    if (!input) {
      var url = "/api/oms/pvt/orders/?per_page=".concat(10, "&page=", page);
      getData(url);
    } else if (email === null || email === void 0 ? void 0 : email.length) {
      var variables = {
        data: {
          email: input,
          page: page,
          per_page: per_page
        }
      };
      getOrders({
        variables: variables
      });
    } else if (id === null || id === void 0 ? void 0 : id.length) {
      var _url = "/api/oms/pvt/orders/".concat(input, "?per_page=", 10, "&page=").concat(page);

      getData(_url);
    }

    return;
  };

  var filterOrders = function filterOrders(ordersList) {
    if (!ordersList) return [];
    var orders = ordersList === null || ordersList === void 0 ? void 0 : ordersList.filter(function (order) {
      return !unallowedStatus.includes(order === null || order === void 0 ? void 0 : order.status);
    });
    return orders;
  };

  var parseOrders = function parseOrders() {
    !!ordersList && ordersList.length > 0 ? setState(Object.assign(Object.assign({}, state), {
      loading: false,
      data: filterOrders(ordersList)
    })) : setState(Object.assign(Object.assign({}, state), {
      loading: false,
      data: [data]
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setState(Object.assign(Object.assign({}, state), {
      loading: isLoading || loading
    }));
  }, [isLoading, loading]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!!error) {
      var message = 'Ocurrió un error buscando las ordenes';
      setState(Object.assign(Object.assign({}, state), {
        error: message
      }));
    }
  }, [error]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _a;

    var orders = filterOrders((_a = gqlOrders === null || gqlOrders === void 0 ? void 0 : gqlOrders.listOrders) === null || _a === void 0 ? void 0 : _a.list);

    if (!!orders && orders.length) {
      setState(Object.assign(Object.assign({}, state), {
        data: orders,
        loading: false
      }));
    }
  }, [gqlOrders]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    parseOrders();
  }, [data]);
  return [handleSearch, state];
};

/* harmony default export */ __webpack_exports__["default"] = (useSearchType);

/***/ }),

/***/ "./react/styles/SelectOrder.css":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("../../../../../usr/local/data/service/node_modules/css-loader/dist/cjs.js?!../../../../../usr/local/data/service/node_modules/postcss-loader/dist/cjs.js?!./react/styles/SelectOrder.css");

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

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "react-intl":
/***/ (function(module, exports) {

module.exports = ReactIntl;

/***/ }),

/***/ "regenerator-runtime":
/***/ (function(module, exports) {

module.exports = regeneratorRuntime;

/***/ }),

/***/ "vtex.css-handles/useCssHandles":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.css-handles@0.x/useCssHandles'];

/***/ }),

/***/ "vtex.styleguide/Button":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Button'];

/***/ }),

/***/ "vtex.styleguide/Divider":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Divider'];

/***/ }),

/***/ "vtex.styleguide/InputSearch":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/InputSearch'];

/***/ }),

/***/ "vtex.styleguide/Layout":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Layout'];

/***/ }),

/***/ "vtex.styleguide/Modal":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Modal'];

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

},[["../ChangeSeller.js","common","vendors~ChangeSeller~ChangeSellerDetail","vendors~ChangeSeller","ChangeSeller~ChangeSellerDetail"]]]);
//# sourceMappingURL=ChangeSeller.js.map