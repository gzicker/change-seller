(window["webpackJsonpolimpica_change_seller_0_7_4"] = window["webpackJsonpolimpica_change_seller_0_7_4"] || []).push([["ChangeSeller~ChangeSellerDetail"],{

/***/ "./react/components/ModalError.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vtex.styleguide/Modal");
/* harmony import */ var vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_2__);




var ModalError = function ModalError(props) {
  var open = props.open,
      error = props.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(open),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    class: '',
    title: '',
    message: ''
  }),
      _useState4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    {
      !!error && error ? setState({
        class: 'c-danger',
        title: 'Error!',
        message: 'Ha ocurrido un error en el sistema, por favor intente hacer su consulta nuevamente'
      }) : setState({
        class: 'c-warning',
        title: 'Warning!',
        message: 'No hay items disponibles para realizar el cambio de orden'
      });
    }
  }, [error]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    centered: true,
    isOpen: isOpen,
    onClose: function onClose() {
      return setIsOpen(!isOpen);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "".concat(state.class, " t-heading-3")
  }, " ", state === null || state === void 0 ? void 0 : state.title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "t-body"
  }, " ", state === null || state === void 0 ? void 0 : state.message, " "));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalError);

/***/ }),

/***/ "./react/helpers/parseData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMessages", function() { return parseMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDateAndHour", function() { return parseDateAndHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePrice", function() { return parsePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRemovedItems", function() { return parseRemovedItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simulationData", function() { return simulationData; });
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");

var parseMessages = function parseMessages(_ref) {
  var messages = _ref.messages,
      optionalMessage = _ref.optionalMessage;
  var parsedMessages = !!messages && messages.length > 0 ? messages : [{
    text: optionalMessage
  }];
  return parsedMessages;
};
var parseDateAndHour = function parseDateAndHour(_ref2) {
  var date = _ref2.date;

  var _a;

  var newDate = new Date(date);

  var _ref3 = (_a = newDate === null || newDate === void 0 ? void 0 : newDate.toLocaleDateString()) === null || _a === void 0 ? void 0 : _a.split('/'),
      _ref4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 3),
      month = _ref4[0],
      day = _ref4[1],
      year = _ref4[2];

  var formattedHour = newDate.toLocaleTimeString();
  var parsedDateAndHour = !!date && !!newDate ? "".concat(day, "/").concat(month, "/").concat(year, " - ").concat(formattedHour) : '';
  return parsedDateAndHour;
};
var parsePrice = function parsePrice(_ref5) {
  var price = _ref5.price;
  if (!price || isNaN(price)) return 0;
  var parsedPrice = "$ ".concat(price / 100);
  return parsedPrice;
};
var parseRemovedItems = function parseRemovedItems(_ref6) {
  var modifiedItems = _ref6.modifiedItems,
      originItems = _ref6.originItems,
      simulationItems = _ref6.simulationItems;
  var removedItems = Object.values(modifiedItems).filter(function (item) {
    return (item === null || item === void 0 ? void 0 : item.quantity) < 1;
  });
  var removedItemsId = removedItems.map(function (item) {
    return item === null || item === void 0 ? void 0 : item.id;
  });
  var removedItemsNames = originItems === null || originItems === void 0 ? void 0 : originItems.filter(function (item) {
    return removedItemsId.includes(item === null || item === void 0 ? void 0 : item.id);
  }).map(function (item) {
    return item === null || item === void 0 ? void 0 : item.name;
  });
  var idItemsToTranspher = simulationItems.map(function (simulatedItem) {
    return simulatedItem.id;
  });
  var itemsWithouthInventary = originItems === null || originItems === void 0 ? void 0 : originItems.filter(function (item) {
    return !idItemsToTranspher.includes(item === null || item === void 0 ? void 0 : item.id);
  }).map(function (item) {
    return item === null || item === void 0 ? void 0 : item.name;
  }).filter(function (itemName) {
    return !removedItemsNames.includes(itemName);
  });
  return {
    removedItemsNames: removedItemsNames,
    itemsWithouthInventary: itemsWithouthInventary
  };
};
var simulationData = function simulationData(_ref7) {
  var items = _ref7.items,
      order = _ref7.order,
      sellerId = _ref7.sellerId,
      deliveryPolicy = _ref7.deliveryPolicy;
  var storePreferencesData = order.storePreferencesData,
      clientProfileData = order.clientProfileData,
      merchantName = order.merchantName,
      paymentData = order.paymentData.transactions;

  var _items = Object.values(items).filter(function (i) {
    return (i === null || i === void 0 ? void 0 : i.quantity) > 0;
  });

  var countryCode = storePreferencesData === null || storePreferencesData === void 0 ? void 0 : storePreferencesData.countryCode;

  var _paymentData = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(paymentData, 1),
      transactions = _paymentData[0];

  var payments = transactions.payments;

  var _payments = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(payments, 1),
      paymentMethod = _payments[0];

  return {
    items: _items,
    country: countryCode,
    seller: sellerId,
    geoCoordinates: deliveryPolicy,
    paymentData: paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.paymentSystem,
    clientProfileData: {
      email: clientProfileData === null || clientProfileData === void 0 ? void 0 : clientProfileData.email
    },
    sellerOrder: merchantName === null || merchantName === void 0 ? void 0 : merchantName.toLowerCase()
  };
};

/***/ }),

/***/ "./react/hooks/useRequest.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/8cb062cdad5bdc24c4b38c1ae6cda8db99179f284e61c3ac0900292244a483cc/dev/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);






var useRequest = function useRequest(schema) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    data: Object.assign({}, schema),
    loading: false,
    error: false
  }),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var getData = /*#__PURE__*/function () {
    var _ref = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(endpoint) {
      var _yield$axios$get, data;

      return _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setState(Object.assign(Object.assign({}, state), {
                loading: true
              }));
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(endpoint));

            case 4:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              setState(Object.assign(Object.assign({}, state), {
                data: data,
                loading: false
              }));
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              setState(Object.assign(Object.assign({}, state), {
                error: true
              }));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function getData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    state: state,
    getData: getData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useRequest);

/***/ }),

/***/ "./react/hooks/useValidateOwner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseGetCurrentUser", function() { return UseGetCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseGetRole", function() { return UseGetRole; });
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var UseGetCurrentUser = /*#__PURE__*/function () {
  var _ref = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var user, dataUser;
    return _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('/api/vtexid/pub/authenticated/user');

          case 2:
            user = _context.sent;
            _context.next = 5;
            return user.json();

          case 5:
            dataUser = _context.sent;

            if (!dataUser) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", dataUser);

          case 8:
            throw new Error('Invalid response from server');

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function UseGetCurrentUser() {
    return _ref.apply(this, arguments);
  };
}();
var UseGetRole = /*#__PURE__*/function () {
  var _ref2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(userID) {
    var isOwner, response, dataUser, index, element;
    return _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            isOwner = false;
            _context2.next = 3;
            return fetch("/api/license-manager/users/".concat(userID, "/roles"));

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.json();

          case 6:
            dataUser = _context2.sent;

            if (!(dataUser.length === 0)) {
              _context2.next = 11;
              break;
            }

            isOwner = true;
            _context2.next = 20;
            break;

          case 11:
            index = 0;

          case 12:
            if (!(index < dataUser.length)) {
              _context2.next = 20;
              break;
            }

            element = dataUser[index];

            if (!(element.id === 1 || (element === null || element === void 0 ? void 0 : element.name) === 'Fulfillment admin')) {
              _context2.next = 17;
              break;
            }

            isOwner = true;
            return _context2.abrupt("break", 20);

          case 17:
            index++;
            _context2.next = 12;
            break;

          case 20:
            return _context2.abrupt("return", isOwner);

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function UseGetRole(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var useValidateOwner = function useValidateOwner() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      owner = _useState2[0],
      setOwner = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      message = _useState4[0],
      setMessage = _useState4[1];

  var getRole = /*#__PURE__*/function () {
    var _ref3 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(userID) {
      return _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return UseGetRole(userID).then(function (data) {
                if (!data) setMessage('No tienes permisos para acceder a esta sección');
                setOwner(data);
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getRole(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getCurrentUser = /*#__PURE__*/function () {
    var _ref4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      return _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              UseGetCurrentUser().then(function (data) {
                getRole(data.userId);
              });

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getCurrentUser() {
      return _ref4.apply(this, arguments);
    };
  }();

  var getInitalData = function getInitalData() {
    getCurrentUser();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getInitalData();
  }, []);
  return {
    owner: owner,
    message: message
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useValidateOwner);

/***/ }),

/***/ "./react/schema/schemas.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDERS_SCHEMA", function() { return ORDERS_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTALS_TABLE", function() { return TOTALS_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDERS_LIST_SCHEMA", function() { return ORDERS_LIST_SCHEMA; });
/* harmony import */ var _helpers_parseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./react/helpers/parseData.ts");

var unallowedStatus = ['canceled', 'invoiced'];
var ORDERS_SCHEMA = {
  list: [],
  items: [],
  paymentData: {
    transactions: [{
      payments: [{
        paymentSystemName: ''
      }]
    }]
  }
};
var TOTALS_TABLE = {
  properties: {
    id: {
      title: 'Concepto'
    },
    name: {
      title: 'Descripción'
    },
    value: {
      title: 'Costo total',
      cellRenderer: function cellRenderer(_ref) {
        var cellData = _ref.cellData;
        return Object(_helpers_parseData__WEBPACK_IMPORTED_MODULE_0__["parsePrice"])({
          price: cellData
        });
      }
    }
  }
};
var ORDERS_LIST_SCHEMA = {
  properties: {
    clientName: {
      title: 'Nombre'
    },
    creationDate: {
      title: 'Fecha - Hora',
      width: 200,
      cellRenderer: function cellRenderer(_ref2) {
        var cellData = _ref2.cellData;
        return Object(_helpers_parseData__WEBPACK_IMPORTED_MODULE_0__["parseDateAndHour"])({
          date: cellData
        });
      }
    },
    orderId: {
      title: 'Order Id',
      width: 210
    },
    totalItems: {
      title: '# de productos',
      with: 20,
      cellRenderer: function cellRenderer(_ref3) {
        var rowData = _ref3.rowData;

        var _a;

        var value = !!(rowData === null || rowData === void 0 ? void 0 : rowData.totalItems) ? rowData === null || rowData === void 0 ? void 0 : rowData.totalItems : (_a = rowData === null || rowData === void 0 ? void 0 : rowData.items) === null || _a === void 0 ? void 0 : _a.length;
        return value;
      }
    },
    totalValue: {
      title: 'Valor total',
      cellRenderer: function cellRenderer(_ref4) {
        var rowData = _ref4.rowData;
        var price = !!(rowData === null || rowData === void 0 ? void 0 : rowData.totalValue) ? rowData === null || rowData === void 0 ? void 0 : rowData.totalValue : rowData === null || rowData === void 0 ? void 0 : rowData.value;
        var parsedPrice = Object(_helpers_parseData__WEBPACK_IMPORTED_MODULE_0__["parsePrice"])({
          price: price
        });
        return !parsedPrice ? '' : parsedPrice;
      }
    },
    status: {
      title: 'Estado',
      cellRenderer: function cellRenderer(_ref5) {
        var cellData = _ref5.cellData;
        var isAllowed = !unallowedStatus.includes(cellData);

        if (isAllowed) {
          return cellData;
        }

        return /*#__PURE__*/React.createElement("p", {
          className: "c-danger"
        }, cellData);
      }
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=ChangeSeller~ChangeSellerDetail.js.map