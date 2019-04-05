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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textContent {\n  background-color: cornsilk;\n  width: 40%;\n  height: 300px;\n  max-height: 300px;\n  margin: auto;\n  border: 3px solid salmon;\n  border-radius: 5px;\n}\n\n.textContent {\n  text-align: center;\n  position: relative;\n}\n\n.textContent .speech {\n  padding-top: 20px;\n  font-size: 30px;\n  font-family: Monaco, \"Lucida Console\", monospace;\n}\n\n.textContent .addendum {\n  margin: auto;\n  text-align: left;\n  width: 80%;\n  font-family: sans-serif;\n}\n\n.textContent button {\n  background-color: darkkhaki;\n  border: 1px black solid;\n  border-radius: 5px;\n  padding: 5px 10px;\n  outline: none;\n}\n\n.textContent .alien {\n  width: 150px;\n  position: absolute;\n  -ms-interpolation-mode: nearest-neighbor;\n      image-rendering: -moz-crisp-edges;\n      image-rendering: pixelated;\n  -webkit-animation-name: alien;\n          animation-name: alien;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n\n@-webkit-keyframes alien {\n  0%   {left: 10px; bottom: 0}\n  25%  {left: 10px; bottom: 5px}\n  50%  {left: 15px; bottom: 5px}\n  75%  {left: 15px; bottom: 0}\n  100% {left: 10px; bottom: 0}\n}\n\n@keyframes alien {\n  0%   {left: 10px; bottom: 0}\n  25%  {left: 10px; bottom: 5px}\n  50%  {left: 15px; bottom: 5px}\n  75%  {left: 15px; bottom: 0}\n  100% {left: 10px; bottom: 0}\n}\n\n.allContent {\n  padding-top: 10%;\n}\n\n.control {\n  padding-top: 50px;\n  display: flex;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n  color: bisque;\n  font-family: Monaco, \"Lucida Console\", monospace;\n}\n\n.control-centered {\n  display: flex;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.notesContainer {\n  width: 400px;\n}\n\n.notes {\n  width: 80%;\n  height: 200px;\n  color: #eed3c3;\n  background-color: #333333;\n  border: 2px solid bisque;\n  border-radius: 2px;\n  outline: none\n}\n\n.dictionaryContainer a {\n  font-weight: bold;\n}\n\n.dictionaryContainer a:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.dictionaryContainer td {\n  width: 170px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"allContent\">\n  <div class=\"textContent\">\n    <img *ngIf=\"state.alien\" class=\"alien\" [src]=\"'assets/' + state.alien\">\n    <div class=\"speech\">{{state.response | alienTalk:dictionary}}</div>\n    <br>\n    <div class=\"addendum\">{{state.addendum | typewriter | async}}</div>\n    <br>\n    <button *ngIf=\"!state.response || !state.answer\" (click)=\"nextState()\"> OK </button>\n  </div>\n  <div class=\"control\">\n    <div class=\"control-centered\">\n      <div class=\"notesContainer\">\n        <label for=\"notes\"><h2 class=\"notesTitle\">Notes</h2></label>\n        <textarea name=\"notes\" id=\"notes\" class=\"notes\" placeholder=\"type your notes here\"></textarea>\n      </div>\n      <div class=\"dictionaryContainer\">\n        <h2>Dictionary</h2>\n        <table>\n          <tr *ngFor=\"let item of dictionary | keyvalue\">\n            <td>{{item.key}}</td>\n            <td><a (click)=\"process(item)\">{{item.value}}</a></td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

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
/* harmony import */ var _imports_dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imports/dictionary */ "./src/app/imports/dictionary.ts");
/* harmony import */ var _imports_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imports/states */ "./src/app/imports/states.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.stateIndex = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.dictionary = _imports_dictionary__WEBPACK_IMPORTED_MODULE_1__["dictionary"];
        this.responseStage = [];
        this.state = _imports_states__WEBPACK_IMPORTED_MODULE_2__["states"][this.stateIndex];
    };
    AppComponent.prototype.process = function (item) {
        this.responseStage.push(item.key);
        if (this.state.answer === null || this.state.response === null) {
            // No input
            this.nextState();
        }
        else {
            if (this.state.answer.startsWith(this.responseStage.join(" "))) {
                if (this.state.answer === this.responseStage.join(" ")) {
                    // Correct complete answer
                    this.nextState();
                }
            }
            else {
                this.responseStage = [];
            }
        }
    };
    AppComponent.prototype.nextState = function () {
        this.responseStage = [];
        this.state = _imports_states__WEBPACK_IMPORTED_MODULE_2__["states"][++this.stateIndex];
        if (this.state.alien) {
            var audio = new Audio("assets/alien.m4a");
            audio.load();
            audio.playbackRate = [0.5, 0.75, 1][~~(Math.random() * 3)];
            audio.currentTime = 0.5;
            audio.volume = 0.2;
            audio.play()
                .then(function () { }); //Chrome fix
        }
    };
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _imports_alien_talk_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imports/alien-talk.pipe */ "./src/app/imports/alien-talk.pipe.ts");
/* harmony import */ var _imports_typewriter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imports/typewriter.pipe */ "./src/app/imports/typewriter.pipe.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _imports_alien_talk_pipe__WEBPACK_IMPORTED_MODULE_3__["AlienTalkPipe"],
                _imports_typewriter_pipe__WEBPACK_IMPORTED_MODULE_4__["TypewriterPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/imports/alien-talk.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/imports/alien-talk.pipe.ts ***!
  \********************************************/
/*! exports provided: AlienTalkPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlienTalkPipe", function() { return AlienTalkPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlienTalkPipe = /** @class */ (function () {
    function AlienTalkPipe() {
    }
    AlienTalkPipe.prototype.transform = function (text, dictionary) {
        if (!text) {
            return "";
        }
        var translatedText = text.split(" ").map(function (token) { return dictionary[token] || token; }).join(" ");
        return translatedText[0].toLocaleUpperCase() + translatedText.substring(1) + '.';
    };
    AlienTalkPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'alienTalk'
        })
    ], AlienTalkPipe);
    return AlienTalkPipe;
}());



/***/ }),

/***/ "./src/app/imports/dictionary.ts":
/*!***************************************!*\
  !*** ./src/app/imports/dictionary.ts ***!
  \***************************************/
/*! exports provided: dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionary", function() { return dictionary; });
var words = ['body', 'like', 'orbital', 'moon', 'day', 'all', 'birth', 'mouth', 'sponge', 'hello', 'grateful', 'mind', 'in'];
var createDictionary = function () { return words.reduce(function (acc, next) {
    var vowels = "aeiou";
    var consonants = "bcdfghjklmnpqrstvxyz";
    var randomCharacter = function () {
        if (Math.random() > 0.2) {
            return vowels[~~(Math.random() * 5)];
        }
        return consonants[~~(Math.random() * 21)];
    };
    acc[next] = Array(3 + ~~(Math.random() * 4)).fill("").map(function (_) { return randomCharacter(); }).join('');
    return acc;
}, {}); };
var storedDict = window.localStorage.getItem('dict');
if (!storedDict) {
    window.localStorage.setItem('dict', JSON.stringify(createDictionary()));
}
var dictionary = JSON.parse(window.localStorage.getItem('dict'));


/***/ }),

/***/ "./src/app/imports/states.ts":
/*!***********************************!*\
  !*** ./src/app/imports/states.ts ***!
  \***********************************/
/*! exports provided: states */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
// Very naive way to do this, basically shooting yourself in the foot.
// Acceptable due to short lifecycle of game
var states = [
    {
        answer: null,
        addendum: "You are stranded on an alien planet. You have lived there for multiple years. The humanoid aliens are mostly friendly and you have built a dictionary."
    },
    {
        answer: null,
        addendum: "Although with considerable effort, you have derived the meaning of words. These aliens are really hard to understand. After a good sleep, a youngling " +
            "walks up to you. The alien is about half your size, black with glowing teal elements and has a very loud voice. It speaks through its thorax."
    },
    {
        response: "hello",
        answer: "hello",
        alien: "alien-child.png"
    },
    {
        response: "body like orbital moon",
        addendum: "The child runs away. You take offense somehow.",
        answer: null
    },
    {
        response: null,
        addendum: "Your instructor comes in. After these years his help has been very important for fitting in. It isn't easy though.",
        answer: null,
        alien: "alien-base.png",
    },
    {
        response: "mind like sponge",
        addendum: "He always says 'mind like sponge' although you have no idea what that means. When you repeat his words, he always seems content.",
        answer: 'mind like sponge',
        alien: "alien-base.png",
    },
    {
        response: "mind like sponge",
        addendum: "Your instructor grabs a sponge, and fills it with a liquid. He then points towards your head. He makes a gesture of growth. He then points to the moon.",
        answer: 'mind like moon',
        alien: "alien-base.png",
    },
    {
        response: "like moon in mouth",
        addendum: "The instructor sees that you made some kind of connection, but that you do not understand him fully.",
        answer: null,
        alien: "alien-base.png",
    },
    {
        response: null,
        addendum: "The instructor sees the child that talked to you earlier. You've gotten quite proficient at reading body language. " +
            "The instructor clearly disapproves of the child.",
        answer: null,
        alien: "alien-angry.png",
    },
    {
        response: "mind like moon in mouth",
        addendum: "The instructor shouts at the child. The child seems distraught.",
        answer: null,
        alien: "alien-angry.png",
    },
    {
        response: "body like orbital moon",
        addendum: "The child speaks directed towards you. You think hard on what to say to the child. Maybe something like the instructor said.",
        answer: "mind like moon in mouth",
        alien: "alien-child.png"
    },
    {
        response: "grateful",
        addendum: "The child seems embarrassed. The instructor is happy that you've told the child off. You get a feeling for what it means. " +
            "It seems the instructor wants you to reflect on that you've grasped a concept. He looks at the moon. You want to tell him, " +
            "that you will keep learning and then become good at what you are doing. You sit down and try to tell him.",
        answer: "mind like sponge mind like moon",
        alien: "alien-happy.png",
    },
    {
        response: "mind like sponge mind like moon !!!!",
        addendum: "The teacher is ecstatic! For the first time, it seems you are capable of understanding more than mere words. All this time, " +
            "they have been speaking in metaphors. You reflect on this and try to take as much as you can. You thank the instructor.",
        answer: "grateful",
        alien: "alien-happy.png",
    },
    {
        response: null,
        addendum: "The teacher is ecstatic! For the first time, it seems you are capable of understanding more than mere words. All this time, " +
            "they have been speaking in metaphors. You reflect on this and try to take as much as you can. You thank the instructor. It leaves.",
        answer: null,
    },
    {
        response: 'day like all birth',
        addendum: "An alien runs into your house. The alien excretes a large amount of saliva and points towards your water supply.",
        answer: 'mouth like sponge',
        alien: "alien-angry.png",
    },
    {
        response: 'grateful',
        addendum: "The alien seems content.",
        answer: null,
        alien: "alien-base.png",
    },
    {
        response: null,
        addendum: "It seems as if the alien was on the brink of death. It leaves immediately.",
        answer: null,
    },
    {
        response: null,
        addendum: "Thank you for playing.",
        answer: null,
    }
];


/***/ }),

/***/ "./src/app/imports/typewriter.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/imports/typewriter.pipe.ts ***!
  \********************************************/
/*! exports provided: TypewriterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypewriterPipe", function() { return TypewriterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypewriterPipe = /** @class */ (function () {
    function TypewriterPipe() {
        this.audio = new Audio();
        this.interval = setInterval(function () { }, 1000000);
        this.audio.src = "assets/type.mp3";
        this.audio.load();
    }
    TypewriterPipe.prototype.transform = function (value) {
        var _this = this;
        clearInterval(this.interval);
        if (value) {
            var behaviorSubject_1 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            var i_1 = 0;
            this.interval = setInterval(function () {
                behaviorSubject_1.next(value.substring(0, i_1));
                var increment = function () {
                    if (i_1 < value.length) {
                        i_1++;
                        _this.audio.currentTime = 0.09;
                        _this.audio.play()
                            .then(function () { }); //Chrome fix
                    }
                };
                if (![".", ","].includes(value[i_1 - 1])) {
                    increment();
                }
                else {
                    setTimeout(function () {
                        increment();
                    }, 200);
                }
            }, 30);
            return behaviorSubject_1;
        }
        return value;
    };
    TypewriterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'typewriter'
        }),
        __metadata("design:paramtypes", [])
    ], TypewriterPipe);
    return TypewriterPipe;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/Dropbox/Code/ludum-dare-challenges/1 - 2019-04-05/code/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map