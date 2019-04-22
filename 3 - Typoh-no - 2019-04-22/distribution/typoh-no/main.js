(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/PanicAudioSystem.ts":
/*!*************************************!*\
  !*** ./src/app/PanicAudioSystem.ts ***!
  \*************************************/
/*! exports provided: PanicAudioSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanicAudioSystem", function() { return PanicAudioSystem; });
var PanicAudioSystem = /** @class */ (function () {
    function PanicAudioSystem() {
        this.audio = new Audio();
        this.audio.src = 'assets/noise.mp3';
        this.audio.load();
        this.audio.loop = true;
        this.audio.volume = 0.05;
    }
    PanicAudioSystem.prototype.listen = function (state) {
        if (['nervous', 'angsty', 'panicked'].includes(state)) {
            if (state === 'angsty') {
                this.audio.volume = 0.05;
            }
            if (state === 'panicked') {
                this.audio.volume = 0.3;
            }
            this.audio.play();
        }
        else {
            this.audio.pause();
        }
    };
    return PanicAudioSystem;
}());



/***/ }),

/***/ "./src/app/PanicSystem.ts":
/*!********************************!*\
  !*** ./src/app/PanicSystem.ts ***!
  \********************************/
/*! exports provided: PanicSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanicSystem", function() { return PanicSystem; });
var PanicSystem = /** @class */ (function () {
    function PanicSystem(panic) {
        this.panic = panic;
        this.panicListeners = [];
    }
    PanicSystem.prototype.registerListener = function (listener) {
        this.panicListeners.push(listener);
    };
    PanicSystem.prototype.setInterval = function (interval) {
        this.timeoutTime = interval;
    };
    PanicSystem.prototype.start = function () {
        var _this = this;
        this.timeout = setTimeout(function () {
            console.log(_this.panic);
            _this.setPanic(_this.panic + 2.5);
            _this.timeoutTime -= 5;
            _this.start();
        }, this.timeoutTime);
    };
    PanicSystem.prototype.stop = function () {
        clearTimeout(this.timeoutTime);
    };
    PanicSystem.prototype.setPanic = function (panic) {
        var _this = this;
        if (panic < 0) {
            this.panic = 0;
        }
        else if (panic > 100) {
            this.panic = 100;
        }
        else {
            this.panic = panic;
        }
        this.panicListeners.forEach(function (listener) { return listener(_this.convertToStage(_this.panic)); });
    };
    PanicSystem.prototype.goodType = function () {
        this.setPanic(this.panic / 1.05);
    };
    PanicSystem.prototype.badType = function () {
        this.setPanic(this.panic + 10);
    };
    PanicSystem.prototype.convertToStage = function (panic) {
        if (panic === 100) {
            return 'dead';
        }
        if (panic < 5) {
            return 'calm';
        }
        if (panic < 40) {
            return 'anxious';
        }
        if (panic < 50) {
            return 'nervous';
        }
        if (panic < 60) {
            return 'angsty';
        }
        return 'panicked';
    };
    return PanicSystem;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  font-family: sans;\n  background-color: cornsilk;\n  width: 100vw;\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n}\n\n.lost {\n  background-color: black;\n}\n\n.panic {\n  background-color: #333333 !important;\n  color: red !important;\n}\n\n.anxious {\n  color: orange !important;\n}\n\n.nervous {\n  background-color: #666666 !important;\n  color: red !important;\n}\n\n.angsty {\n  background-color: #666666 !important;\n  color: red !important;\n}\n\n.red {\n  color: red;\n}\n\n.centered {\n  position: absolute;\n  width: 50%;\n  border: 1px solid black;\n  border-radius: 3px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  padding: 20px;\n}\n\n.title {\n  font-size: 60px;\n  color: #333333;\n  -webkit-animation: shake-other 2s ease-in-out infinite;\n          animation: shake-other 2s ease-in-out infinite;\n}\n\n.type {\n  color: darkgoldenrod;\n}\n\n.answer{\n  margin-top: 30px;\n  border: 1px solid #333333;\n  resize: none;\n  text-align: center;\n  font-size: 20px;\n}\n\n.shake-jesus-why {\n  -webkit-animation: shake-other 0.2s ease-in-out infinite;\n          animation: shake-other 0.2s ease-in-out infinite;\n}\n\n.shake-fast {\n  -webkit-animation: shake 1s ease-in-out infinite;\n          animation: shake 1s ease-in-out infinite;\n}\n\n.shake {\n  -webkit-animation: shake-other 2s ease-in-out infinite;\n          animation: shake-other 2s ease-in-out infinite;\n}\n\n.shake-slowest {\n  -webkit-animation: shake 5s ease-in-out infinite;\n          animation: shake 5s ease-in-out infinite;\n}\n\n@-webkit-keyframes shake {\n  10%, 80% {\n    -webkit-transform: translate3d(-2px, 0, 0) rotate(1deg);\n            transform: translate3d(-2px, 0, 0) rotate(1deg);\n  }\n\n  20%, 90% {\n    -webkit-transform: translate3d(3px, 0, 0) rotate(-1deg);\n            transform: translate3d(3px, 0, 0) rotate(-1deg);\n  }\n\n  5%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0) rotate(4deg);\n            transform: translate3d(-4px, 0, 0) rotate(4deg);\n  }\n\n  40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0) rotate(-1deg);\n            transform: translate3d(4px, 0, 0) rotate(-1deg);\n  }\n}\n\n@keyframes shake {\n  10%, 80% {\n    -webkit-transform: translate3d(-2px, 0, 0) rotate(1deg);\n            transform: translate3d(-2px, 0, 0) rotate(1deg);\n  }\n\n  20%, 90% {\n    -webkit-transform: translate3d(3px, 0, 0) rotate(-1deg);\n            transform: translate3d(3px, 0, 0) rotate(-1deg);\n  }\n\n  5%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0) rotate(4deg);\n            transform: translate3d(-4px, 0, 0) rotate(4deg);\n  }\n\n  40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0) rotate(-1deg);\n            transform: translate3d(4px, 0, 0) rotate(-1deg);\n  }\n}\n\n@-webkit-keyframes shake-other {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg);\n  }\n  25% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  50% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg);\n  }\n  75% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg);\n  }\n  90% {\n    -webkit-transform: translate(-2px, 3px) rotate(-1deg);\n            transform: translate(-2px, 3px) rotate(-1deg);\n  }\n  100% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg);\n  }\n}\n\n@keyframes shake-other {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg);\n  }\n  25% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  50% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg);\n  }\n  75% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg);\n  }\n  90% {\n    -webkit-transform: translate(-2px, 3px) rotate(-1deg);\n            transform: translate(-2px, 3px) rotate(-1deg);\n  }\n  100% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg);\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" *ngIf=\"!lost\" [ngClass]=\"classes\">\n  <div class=\"centered\">\n    <h1 class=\"title\" *ngIf=\"!started\">Typoh-no! 🧀</h1>\n    <h3 class=\"type\" [ngClass]=\"classes\">\"{{question}}\"</h3>\n    <textarea #typo class=\"answer\" rows=\"1\" cols=\"60\" disabled=\"{{disabled}}\"\n              placeholder=\"{{placeholder}}{{started ? '' : ' ⌨️' }}\" [(ngModel)]=\"typedText\"\n              [class.red]=\"wrong\"\n              (ngModelChange)=\"onChange($event)\"\n              (keydown.enter)=\"$event.preventDefault()\"\n    ></textarea>\n    <h4 class=\"red\">{{wrong ? '⬅️!!': ''}}</h4>\n  </div>\n</div>\n<div class=\"lost\" *ngIf=\"lost\">\n  <div class=\"centered\">\n    <h1 class=\"title\">💀 oopsy whoopsy 💀 <br>🔄 F5</h1>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _PanicAudioSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanicAudioSystem */ "./src/app/PanicAudioSystem.ts");
/* harmony import */ var _PanicSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanicSystem */ "./src/app/PanicSystem.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./src/app/state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'typoh-no';
        this.placeholder = '';
        this.started = false;
        this.typedText = "";
        this.disabled = false;
        this.lost = false;
        this.classes = [];
        this.wrong = false;
        this.typeTimestamps = [];
        this.startTimeout = 2500;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.question = "Let's go!";
        this.interval = this.loopHint();
        setTimeout(function () { return _this.focusText(); }, 100);
    };
    AppComponent.prototype.loopHint = function () {
        var _this = this;
        var count = 0;
        return setInterval(function () {
            count++;
            if (count > _this.question.length + 20) {
                count = 0;
            }
            _this.placeholder = _this.question.substring(0, count);
        }, 150);
    };
    AppComponent.prototype.onChange = function (text) {
        if (!this.started) {
            this.wrong = !this.question.startsWith(text);
            if (text === this.question) {
                this.start();
            }
        }
        else {
            if (this.question.startsWith(text)) {
                if (this.question === text) {
                    this.nextStage();
                }
                else {
                    this.good();
                }
            }
            else {
                this.bad();
            }
        }
        this.typeTimestamps.push(new Date().getTime());
        this.updateAvg();
    };
    AppComponent.prototype.updateAvg = function () {
        if (this.typeTimestamps.length > 2) {
            var diffs = this.typeTimestamps.map(function (o, i, a) { return (i > 0) ? o - a[i - 1] : null; }).filter(function (x) { return x !== null; });
            var sum = diffs.reduce(function (p, n) { return p + n; }, 0);
            // this is insane
            if (sum > this.startTimeout) {
                sum -= this.startTimeout;
            }
            var avg = sum / diffs.length;
            if (this.panicSystem) {
                this.panicSystem.setInterval(avg);
            }
        }
    };
    AppComponent.prototype.nextStage = function () {
        var _this = this;
        setTimeout(function () {
            _this.question = _state__WEBPACK_IMPORTED_MODULE_3__["states"][++_this.stageCounter];
            _this.typedText = '';
        }, 150);
    };
    AppComponent.prototype.start = function () {
        var _this = this;
        window.clearInterval(this.interval);
        this.text = '';
        this.placeholder = '';
        this.stageCounter = -1;
        this.disabled = true;
        this.panicSystem = new _PanicSystem__WEBPACK_IMPORTED_MODULE_2__["PanicSystem"](0);
        this.classes = ['panic', 'shake-jesus-why'];
        setTimeout(function () {
            _this.started = true;
            _this.disabled = false;
            _this.panicSystem.registerListener(function (panic) {
                if (panic === 'dead') {
                    _this.lost = true;
                }
            });
            _this.panicSystem.registerListener(function (p) { return _this.stylePanic(p); });
            var pas = new _PanicAudioSystem__WEBPACK_IMPORTED_MODULE_1__["PanicAudioSystem"]();
            _this.panicSystem.registerListener(function (p) { return pas.listen(p); });
            _this.nextStage();
            _this.panicSystem.start();
            setTimeout(function () {
                _this.focusText();
            }, 100);
        }, this.startTimeout);
    };
    AppComponent.prototype.focusText = function () {
        this.textArea.nativeElement.focus();
    };
    AppComponent.prototype.good = function () {
        this.panicSystem.goodType();
        this.wrong = false;
    };
    AppComponent.prototype.bad = function () {
        this.panicSystem.badType();
        this.wrong = true;
    };
    AppComponent.prototype.stylePanic = function (p) {
        if (p === 'calm') {
            this.classes = [];
        }
        else if (p === 'anxious') {
            this.classes = ['anxious', 'shake-slowest'];
        }
        else if (p === 'nervous') {
            this.classes = ['nervous', 'shake'];
        }
        else if (p === 'angsty') {
            this.classes = ['angsty', 'shake-fast'];
        }
        else if (p === 'panicked') {
            this.classes = ['panic', 'shake-jesus-why'];
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("typo"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "textArea", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/state.ts":
/*!**************************!*\
  !*** ./src/app/state.ts ***!
  \**************************/
/*! exports provided: states */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
var states = [
    "Oh no!",
    "I am in a typing frenzy.",
    "I have to keep going.",
    "I have to be REALLY correct.",
    "If I do not, I'll panic.",
    "That is when things go... real bad.",
    "Sometimes, but not always, but sometimes, I dream about cheese.",
    "Sometimes, I dream about weird text.",
    "Text like:",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "Sometimes it goes like that.",
    "Sometimes it is a little harder though.",
    "vJDm5tNkphfgT9eGraeqk",
    "And still, I managed to keep my cool.",
    "I mastered the art of not panicking.",
    "Thanks for playing. You won... this time."
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/Dropbox/Code/ludum-dare-challenges/3 - Typoh-no - 2019-04-22/code/typoh-no/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map