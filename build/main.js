require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/user */ "./src/routes/user.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);




mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.connect('mongodb://localhost:27017/apirest-users', {
  useNewUrlParser: true
});
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const {
  PORT
} = process.env;
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({
  extended: false
}));
app.use("/users", _routes_user__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.listen(PORT, () => {
  console.log(`ciao sur le port ${PORT}`);
});

/***/ }),

/***/ "./src/models/user-model.js":
/*!**********************************!*\
  !*** ./src/models/user-model.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: String,
  lastname: String,
  birthdate: Date
});
const User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("User", userSchema);
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/routes/user.js":
/*!****************************!*\
  !*** ./src/routes/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user-model */ "./src/models/user-model.js");

const UserRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
 //const users = [{"id":1001, "username":"bruce.wayne@wayne-entreprise.com", "createdAt":"2018-01-12T23:00:00.000Z", "firstname":"Bruce", "lastname":"Wayne", "avatarUrl":"https://images.forbes.com/media/lists/fictional/2011/bruce-wayne_197x282.jpg", "address":{"city":"Gotham" } }, {"id":1002, "username":"c.k@daily-planet.com", "createdAt":"2018-30-11T23:00:00.000Z", "firstname":"Clark", "lastname":"Kent", "avatarUrl":"https://resize-parismatch.ladmedia.fr/r/,600,forcey/img/var/news/storage/images/paris-match/culture/medias/l-evolution-physique-des-stars-de-lois-et-clark-les-nouvelles-aventures-de-superman-905795/dean-cain-clark-kent-superman/9605673-1-fre-FR/Dean-Cain-Clark-Kent-Superman.jpg", "address":{"city":"Metropolis" } }, {"id":1003, "username":"barry.allen@starlabs.com", "createdAt":"2018-29-11T23:00:00.000Z", "firstname":"Barry", "lastname":"Allen", "avatarUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBwA2efztaIA7oJsn1f9Nswj2QuHTs7feck9Jpd-d6uJ9W5yYdw", "address":{"city":"CentralCity" } } ]

UserRouter.get('/', (req, res) => {
  // res.json(users);
  _models_user_model__WEBPACK_IMPORTED_MODULE_1__["default"].find({}, (err, result) => {
    if (err) res.send(err);
    res.json(result);
  });
});
UserRouter.get('/:id', (req, res) => {
  //res.json(users[req.params.id])
  _models_user_model__WEBPACK_IMPORTED_MODULE_1__["default"].find({
    _id: req.params.id
  }, (err, result) => {
    if (err) res.send(err);
    res.json(result);
  });
});
UserRouter.post('/', (req, res) => {
  /*	users.push(req.body);
  	res.json(users[users.length-1]); */
  let user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["default"](req.body);
  user.save().then(result => {
    res.json(result);
  }).catch(err => {
    res.send(err);
  });
});
UserRouter.put('/:id', (req, res) => {
  /* users[req.params.id] = req.body; 
  res.send(users[req.params.id]); */
  _models_user_model__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: req.body
  }, {
    new: true
  }, (err, result) => {
    if (err) res.send(err);
    res.json(result);
  });
});
UserRouter.delete('/:id', (req, res) => {
  //users.splice(req.params.id, 1);
  _models_user_model__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndDelete({
    _id: req.params.id
  }, (err, result) => {
    if (err) res.send(err);
    res.send("nothing");
  });
});
/* harmony default export */ __webpack_exports__["default"] = (UserRouter);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/matthieu/Desktop/apirest/src/index.js */"./src/index.js");


/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=main.map