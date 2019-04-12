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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BuildSystem_1 = __webpack_require__(1);
const Deteriorator_1 = __webpack_require__(3);
const LandCreateSystem_1 = __webpack_require__(4);
const Renderer_1 = __webpack_require__(5);
const TreeCreateSystem_1 = __webpack_require__(6);
const FPS = 60;
const TILE_XY = 32;
const INITIAL_SIZE = 6;
function buildMap() {
    const map = new Array(TILE_XY).fill('')
        .map((_, x) => new Array(TILE_XY).fill('').map((_, y) => {
        const type = 'water';
        return { type, x, y, brightness: 1 };
    }));
    Array(INITIAL_SIZE + 2).fill('').forEach((_, i) => {
        Array(INITIAL_SIZE + 2).fill('').forEach((_, j) => {
            map[TILE_XY / 2 - (INITIAL_SIZE + 2) / 2 + i][TILE_XY / 2 - (INITIAL_SIZE + 2) / 2 + j].type = 'wall';
        });
    });
    Array(INITIAL_SIZE).fill('').forEach((_, i) => {
        Array(INITIAL_SIZE).fill('').forEach((_, j) => {
            const type = 'grass';
            map[TILE_XY / 2 - INITIAL_SIZE / 2 + i][TILE_XY / 2 - INITIAL_SIZE / 2 + j].type = type;
        });
    });
    return map;
}
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('renderArea');
    const map = buildMap();
    const buildSystem = new BuildSystem_1.BuildSystem(map);
    let mousedown = false;
    const buildMouse = (event) => {
        const x = event.pageX - canvas.offsetLeft;
        const y = event.pageY - canvas.offsetTop;
        const xT = ~~((x / canvas.width) * TILE_XY);
        const yT = ~~((y / canvas.height) * TILE_XY);
        buildSystem.click(xT, yT);
    };
    const buildTouch = (event) => {
        const x = event.touches[0].clientX - canvas.offsetLeft;
        const y = event.touches[0].clientY - canvas.offsetTop;
        const xT = ~~((x / canvas.width) * TILE_XY);
        const yT = ~~((y / canvas.height) * TILE_XY);
        buildSystem.click(xT, yT);
    };
    let mouseDownListener = _ => { mousedown = true; };
    let mouseUpListener = _ => { mousedown = false; };
    let mouseMoveListener = (event) => {
        if (mousedown) {
            buildMouse(event);
        }
    };
    let touchMoveListener = (event) => {
        if (mousedown) {
            buildTouch(event);
        }
    };
    let canvasWrapper = (listener) => {
        return (event) => {
            event.preventDefault();
            listener(event);
        };
    };
    canvas.addEventListener('mousedown', mouseDownListener);
    canvas.addEventListener('mouseup', mouseUpListener);
    canvas.addEventListener('click', mouseMoveListener);
    canvas.addEventListener('touchstart', canvasWrapper(mouseDownListener));
    canvas.addEventListener('touchend', canvasWrapper(mouseUpListener));
    canvas.addEventListener('mousemove', mouseMoveListener);
    canvas.addEventListener('touchmove', canvasWrapper(touchMoveListener));
    const renderer = new Renderer_1.Renderer(canvas, TILE_XY);
    const deteriorator = new Deteriorator_1.Deteriorator(TILE_XY, 0.995);
    let frameCount = 0;
    const intervalLoop = () => {
        frameCount++;
        if (frameCount > 1200) {
            deteriorator.deteriorate(map);
        }
        LandCreateSystem_1.LandCreateSystem.run(map);
        new TreeCreateSystem_1.TreeCreateSystem(0.9995).run(map);
        renderer.render(map);
    };
    setInterval(intervalLoop, 1000 / FPS);
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = __webpack_require__(2);
class BuildSystem {
    constructor(map) {
        this.map = map;
        this.wood = 0;
        this.place = new Audio('place.mp3');
        this.chop = new Audio('chop.mp3');
        this.chop.volume = 0.7;
    }
    click(x, y) {
        const selectedTile = this.map[x][y];
        if (selectedTile.type === 'tree') {
            selectedTile.type = 'grass';
            this.wood++;
            this.chop.currentTime = 0.01;
            this.chop.play().then(_ => { });
        }
        else if (this.wood > 0 && selectedTile.type === 'water') {
            if (this.checkAdjacent(selectedTile)) {
                this.place.currentTime = 0.13;
                this.place.play().then(_ => { });
                selectedTile.type = 'wall';
                this.wood--;
            }
        }
    }
    checkAdjacent(v) {
        return Util_1.getNeighbors(v, this.map)
            .filter(tile => tile.type !== 'water')
            .length > 0;
    }
}
exports.BuildSystem = BuildSystem;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getNeighbors(v, map) {
    return [
        { x: v.x - 1, y: v.y },
        { x: v.x + 1, y: v.y },
        { x: v.x, y: v.y + 1 },
        { x: v.x, y: v.y - 1 }
    ].filter(obj => {
        const inBounds = (n) => n >= 0 && n < map.length;
        return inBounds(obj.x) && inBounds(obj.y);
    }).map(obj => map[obj.x][obj.y]);
}
exports.getNeighbors = getNeighbors;
function flattenTileMap(map) {
    return map.reduce((acc, next) => acc.concat(next), []);
}
exports.flattenTileMap = flattenTileMap;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = __webpack_require__(2);
class Deteriorator {
    constructor(TILE_XY, baseChance) {
        this.TILE_XY = TILE_XY;
        this.baseChance = baseChance;
        this.waterSound = new Audio('water.mp3');
        this.waterSound.load();
        this.waterSound.volume = 0.4;
    }
    //fastest implementation, would have chosen for A* if more time
    deteriorate(map) {
        const grassTile = this.breadthFirstSearch(map);
        if (grassTile != null) {
            const newChance = this.baseChance / 1.05;
            this.deteriorateTile(grassTile, newChance);
        }
        else {
            this.deteriorateTile(this.getRandomWallTile(map), this.baseChance);
        }
    }
    deteriorateTile(tile, chance) {
        if (tile) {
            if (Math.random() > chance) {
                this.waterSound.play();
                tile.type = 'water';
            }
        }
    }
    getRandomWallTile(map) {
        const wallTiles = Util_1.flattenTileMap(map)
            .filter(tile => tile.type === 'wall');
        return wallTiles[~~(Math.random() * wallTiles.length)];
    }
    breadthFirstSearch(map) {
        let waterTile = Util_1.flattenTileMap(map).find(tile => tile.type === 'water');
        let S = (waterTile) ? [waterTile] : [];
        let D = [];
        while (S.length > 0) {
            const v = S.pop();
            if (v.type !== 'wall' && v.type !== 'water') {
                return v;
            }
            if (v.type === 'wall') {
                continue;
            }
            let validItems = Util_1.getNeighbors(v, map);
            let newItems = validItems.filter(obj => !D.includes(obj));
            S = S.concat(newItems);
            D = D.concat(validItems);
        }
        return null;
    }
}
exports.Deteriorator = Deteriorator;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = __webpack_require__(2);
class LandCreateSystem {
    static run(map) {
        Util_1.flattenTileMap(map)
            .filter(tile => tile.type === 'wall')
            .forEach(v => {
            if (!Util_1.getNeighbors(v, map)
                .some(tile => tile.type === 'water')) {
                v.type = 'grass';
            }
        });
    }
}
exports.LandCreateSystem = LandCreateSystem;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = __webpack_require__(2);
class Renderer {
    constructor(canvas, TILE_XY) {
        this.canvas = canvas;
        this.TILE_XY = TILE_XY;
        this.grass = 'hsl(106,100%,63%)';
        this.context = canvas.getContext('2d');
        this.context.globalCompositeOperation = 'soft-light';
        this.tree = new Image();
        this.tree.src = 'tree.png';
        this.wall = new Image();
        this.wall.src = 'wood.png';
    }
    getLength() {
        return this.canvas.width;
    }
    render(map) {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        const renderLength = this.getLength() / this.TILE_XY;
        this.context.clearRect(0, 0, this.getLength(), this.getLength());
        map.forEach((row, x) => {
            row.forEach((obj, y) => {
                if (!['tree', 'wall'].includes(obj.type)) {
                    if (obj.type === 'grass') {
                        this.context.fillStyle = this.grass;
                    }
                    else {
                        const neighbors = Util_1.getNeighbors(obj, map);
                        let brightness = 0;
                        if (neighbors.find(tile => tile.type !== 'water')) {
                            brightness = 60;
                        }
                        else {
                            brightness = Math.max(neighbors.reduce((p, n) => Math.max(p, n.brightness || 0), 0) - 15, 0);
                        }
                        obj.brightness = brightness;
                        const fillStyle = `hsl(221,100%,${brightness}%)`;
                        this.context.fillStyle = fillStyle;
                    }
                    this.context.fillRect(x * renderLength, y * renderLength, renderLength, renderLength);
                }
                else if (obj.type === 'tree') {
                    this.context.fillStyle = this.grass;
                    this.context.fillRect(x * renderLength, y * renderLength, renderLength, renderLength);
                    this.context.drawImage(this.tree, x * renderLength, y * renderLength, renderLength, renderLength);
                }
                else {
                    this.context.drawImage(this.wall, x * renderLength, y * renderLength, renderLength, renderLength);
                }
            });
        });
    }
}
exports.Renderer = Renderer;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = __webpack_require__(2);
class TreeCreateSystem {
    constructor(baseChance) {
        this.baseChance = baseChance;
    }
    run(map) {
        const flat = Util_1.flattenTileMap(map);
        const grass = flat.filter(tile => tile.type === 'grass');
        const trees = flat.filter(tile => tile.type === 'tree');
        if (trees.length < grass.length / 2) {
            grass
                .forEach(tile => {
                if (Math.random() > this.baseChance) {
                    tile.type = 'tree';
                }
            });
        }
    }
}
exports.TreeCreateSystem = TreeCreateSystem;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1aWxkU3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9EZXRlcmlvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xhbmRDcmVhdGVTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmVlQ3JlYXRlU3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7QUNsRkEsNkNBQTBDO0FBQzFDLDhDQUE0QztBQUM1QyxrREFBb0Q7QUFDcEQsMENBQW9DO0FBRXBDLGtEQUFvRDtBQUVwRCxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDZixN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QUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztZQUMvQixLQUFLO2lCQUNBLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDWixJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztpQkFDdEI7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNWO0lBQ0wsQ0FBQztDQUNKO0FBZkQsNENBZUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHtCdWlsZFN5c3RlbX0gZnJvbSAnLi9CdWlsZFN5c3RlbSc7XG5pbXBvcnQge0RldGVyaW9yYXRvcn0gZnJvbSAnLi9EZXRlcmlvcmF0b3InO1xuaW1wb3J0IHtMYW5kQ3JlYXRlU3lzdGVtfSBmcm9tICcuL0xhbmRDcmVhdGVTeXN0ZW0nO1xuaW1wb3J0IHtSZW5kZXJlcn0gZnJvbSAnLi9SZW5kZXJlcic7XG5pbXBvcnQge1RpbGUsIFRpbGVUeXBlfSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHtUcmVlQ3JlYXRlU3lzdGVtfSBmcm9tICcuL1RyZWVDcmVhdGVTeXN0ZW0nO1xuXG5jb25zdCBGUFMgPSA2MDtcbmNvbnN0IFRJTEVfWFkgPSAzMjtcbmNvbnN0IElOSVRJQUxfU0laRSA9IDY7XG5cbmZ1bmN0aW9uIGJ1aWxkTWFwKCkge1xuICAgIGNvbnN0IG1hcDogVGlsZVtdW10gPSBuZXcgQXJyYXk8c3RyaW5nPihUSUxFX1hZKS5maWxsKCcnKVxuICAgICAgICAubWFwKChfLCB4KSA9PiBuZXcgQXJyYXkoVElMRV9YWSkuZmlsbCgnJykubWFwKChfLCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlOiBUaWxlVHlwZSA9ICd3YXRlcic7XG4gICAgICAgICAgICByZXR1cm4ge3R5cGUsIHgsIHksIGJyaWdodG5lc3M6IDF9O1xuICAgICAgICB9KSk7XG5cbiAgICBBcnJheShJTklUSUFMX1NJWkUgKyAyKS5maWxsKCcnKS5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICAgIEFycmF5KElOSVRJQUxfU0laRSArIDIpLmZpbGwoJycpLmZvckVhY2goKF8sIGopID0+IHtcbiAgICAgICAgICAgIG1hcFtUSUxFX1hZLzIgLSAoSU5JVElBTF9TSVpFICsgMikvMiArIGldW1RJTEVfWFkvMiAtIChJTklUSUFMX1NJWkUgKyAyKS8yICsgal0udHlwZSA9ICd3YWxsJztcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxuICAgIEFycmF5KElOSVRJQUxfU0laRSkuZmlsbCgnJykuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgICAgICBBcnJheShJTklUSUFMX1NJWkUpLmZpbGwoJycpLmZvckVhY2goKF8sIGopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGU6IFRpbGVUeXBlID0gJ2dyYXNzJztcbiAgICAgICAgICAgIG1hcFtUSUxFX1hZLzIgLSBJTklUSUFMX1NJWkUvMiArIGldW1RJTEVfWFkvMiAtIElOSVRJQUxfU0laRS8yICsgal0udHlwZSA9IHR5cGU7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hcDtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbmRlckFyZWEnKTtcblxuICAgIGNvbnN0IG1hcCA9IGJ1aWxkTWFwKCk7XG4gICAgY29uc3QgYnVpbGRTeXN0ZW0gPSBuZXcgQnVpbGRTeXN0ZW0obWFwKTtcblxuICAgIGxldCBtb3VzZWRvd24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGJ1aWxkTW91c2UgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IGV2ZW50LnBhZ2VYIC0gY2FudmFzLm9mZnNldExlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSBldmVudC5wYWdlWSAtIGNhbnZhcy5vZmZzZXRUb3A7XG5cbiAgICAgICAgY29uc3QgeFQgPSB+figoeCAvIGNhbnZhcy53aWR0aCkgKiBUSUxFX1hZKTtcbiAgICAgICAgY29uc3QgeVQgPSB+figoeSAvIGNhbnZhcy5oZWlnaHQpICogVElMRV9YWSk7XG5cbiAgICAgICAgYnVpbGRTeXN0ZW0uY2xpY2soeFQsIHlUKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFRvdWNoID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgICAgICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSAtIGNhbnZhcy5vZmZzZXRUb3A7XG5cbiAgICAgICAgY29uc3QgeFQgPSB+figoeCAvIGNhbnZhcy53aWR0aCkgKiBUSUxFX1hZKTtcbiAgICAgICAgY29uc3QgeVQgPSB+figoeSAvIGNhbnZhcy5oZWlnaHQpICogVElMRV9YWSk7XG5cbiAgICAgICAgYnVpbGRTeXN0ZW0uY2xpY2soeFQsIHlUKTtcbiAgICB9XG5cbiAgICBsZXQgbW91c2VEb3duTGlzdGVuZXIgPSBfID0+IHsgbW91c2Vkb3duID0gdHJ1ZTsgfTtcbiAgICBsZXQgbW91c2VVcExpc3RlbmVyID0gXyA9PiB7IG1vdXNlZG93biA9IGZhbHNlOyB9O1xuICAgIGxldCBtb3VzZU1vdmVMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAobW91c2Vkb3duKSB7XG4gICAgICAgICAgICBidWlsZE1vdXNlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IHRvdWNoTW92ZUxpc3RlbmVyID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChtb3VzZWRvd24pIHtcbiAgICAgICAgICAgIGJ1aWxkVG91Y2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBjYW52YXNXcmFwcGVyID0gKGxpc3RlbmVyOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxpc3RlbmVyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bkxpc3RlbmVyKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW91c2VNb3ZlTGlzdGVuZXIpO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2FudmFzV3JhcHBlcihtb3VzZURvd25MaXN0ZW5lcikpO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICAgY2FudmFzV3JhcHBlcihtb3VzZVVwTGlzdGVuZXIpKTtcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVMaXN0ZW5lcik7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsICBjYW52YXNXcmFwcGVyKHRvdWNoTW92ZUxpc3RlbmVyKSk7XG5cblxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGNhbnZhcywgVElMRV9YWSk7XG4gICAgY29uc3QgZGV0ZXJpb3JhdG9yID0gbmV3IERldGVyaW9yYXRvcihUSUxFX1hZLCAwLjk5NSk7XG4gICAgbGV0IGZyYW1lQ291bnQgPSAwO1xuICAgIGNvbnN0IGludGVydmFsTG9vcCA9ICgpID0+IHtcbiAgICAgICAgZnJhbWVDb3VudCsrO1xuICAgICAgICBpZihmcmFtZUNvdW50ID4gMTIwMCkge1xuICAgICAgICAgICAgZGV0ZXJpb3JhdG9yLmRldGVyaW9yYXRlKG1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgTGFuZENyZWF0ZVN5c3RlbS5ydW4obWFwKTtcbiAgICAgICAgbmV3IFRyZWVDcmVhdGVTeXN0ZW0oMC45OTk1KS5ydW4obWFwKTtcblxuICAgICAgICByZW5kZXJlci5yZW5kZXIobWFwKTtcbiAgICB9XG5cblxuICAgIHNldEludGVydmFsKGludGVydmFsTG9vcCwgMTAwMCAvIEZQUyk7XG5cbn0pO1xuXG5cblxuIiwiaW1wb3J0IHtUaWxlfSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHtnZXROZWlnaGJvcnN9IGZyb20gJy4vVXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBCdWlsZFN5c3RlbSB7XG5cbiAgICBwdWJsaWMgd29vZDogbnVtYmVyPSAwO1xuICAgIHB1YmxpYyBwbGFjZTogSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBwdWJsaWMgY2hvcDogSFRNTEF1ZGlvRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBUaWxlW11bXSl7XG4gICAgICAgIHRoaXMucGxhY2UgPSBuZXcgQXVkaW8oJ3BsYWNlLm1wMycpO1xuICAgICAgICB0aGlzLmNob3AgPSBuZXcgQXVkaW8oJ2Nob3AubXAzJyk7XG4gICAgICAgIHRoaXMuY2hvcC52b2x1bWUgPSAwLjc7XG4gICAgfVxuXG4gICAgY2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUaWxlID0gdGhpcy5tYXBbeF1beV07XG4gICAgICAgIGlmKHNlbGVjdGVkVGlsZS50eXBlID09PSAndHJlZScpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkVGlsZS50eXBlID0gJ2dyYXNzJztcbiAgICAgICAgICAgIHRoaXMud29vZCsrO1xuICAgICAgICAgICAgdGhpcy5jaG9wLmN1cnJlbnRUaW1lID0gMC4wMTtcbiAgICAgICAgICAgIHRoaXMuY2hvcC5wbGF5KCkudGhlbihfID0+IHt9KTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMud29vZCA+IDAgJiYgc2VsZWN0ZWRUaWxlLnR5cGUgPT09ICd3YXRlcicpe1xuICAgICAgICAgICAgaWYodGhpcy5jaGVja0FkamFjZW50KHNlbGVjdGVkVGlsZSkpe1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2UuY3VycmVudFRpbWUgPSAwLjEzO1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2UucGxheSgpLnRoZW4oXyA9PiB7fSk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUaWxlLnR5cGUgPSAnd2FsbCc7XG4gICAgICAgICAgICAgICAgdGhpcy53b29kLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQWRqYWNlbnQodjogVGlsZSkge1xuICAgICAgICByZXR1cm4gZ2V0TmVpZ2hib3JzKHYsIHRoaXMubWFwKVxuICAgICAgICAgICAgLmZpbHRlcih0aWxlID0+IHRpbGUudHlwZSAhPT0gJ3dhdGVyJylcbiAgICAgICAgICAgIC5sZW5ndGggPiAwO1xuXG4gICAgfVxufSIsImltcG9ydCB7VGlsZX0gZnJvbSAnLi9UaWxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5laWdoYm9ycyh2OiBUaWxlLCBtYXA6IFRpbGVbXVtdKTogVGlsZVtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7eDogdi54IC0gMSwgeTogdi55fSxcbiAgICAgICAge3g6IHYueCArIDEsIHk6IHYueX0sXG4gICAgICAgIHt4OiB2LngsIHk6IHYueSArIDF9LFxuICAgICAgICB7eDogdi54LCB5OiB2LnkgLSAxfVxuICAgIF0uZmlsdGVyKG9iaiA9PiB7XG4gICAgICAgIGNvbnN0IGluQm91bmRzID0gKG46IG51bWJlcikgPT4gbiA+PSAwICYmIG4gPCBtYXAubGVuZ3RoO1xuICAgICAgICByZXR1cm4gaW5Cb3VuZHMob2JqLngpICYmIGluQm91bmRzKG9iai55KTtcbiAgICB9KS5tYXAob2JqID0+IG1hcFtvYmoueF1bb2JqLnldKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlblRpbGVNYXAobWFwOiBUaWxlW11bXSl7XG4gICAgcmV0dXJuIG1hcC5yZWR1Y2UoKGFjYywgbmV4dCkgPT4gYWNjLmNvbmNhdChuZXh0KSwgW10pXG59IiwiaW1wb3J0IHtUaWxlfSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHtmbGF0dGVuVGlsZU1hcCwgZ2V0TmVpZ2hib3JzfSBmcm9tICcuL1V0aWwnO1xuXG5leHBvcnQgY2xhc3MgRGV0ZXJpb3JhdG9yIHtcblxuICAgIHByaXZhdGUgd2F0ZXJTb3VuZDogSFRNTEF1ZGlvRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgVElMRV9YWTogbnVtYmVyLCBwcml2YXRlIGJhc2VDaGFuY2Upe1xuICAgICAgICB0aGlzLndhdGVyU291bmQgPSBuZXcgQXVkaW8oJ3dhdGVyLm1wMycpO1xuICAgICAgICB0aGlzLndhdGVyU291bmQubG9hZCgpO1xuICAgICAgICB0aGlzLndhdGVyU291bmQudm9sdW1lID0gMC40O1xuICAgIH1cblxuICAgIC8vZmFzdGVzdCBpbXBsZW1lbnRhdGlvbiwgd291bGQgaGF2ZSBjaG9zZW4gZm9yIEEqIGlmIG1vcmUgdGltZVxuICAgIHB1YmxpYyBkZXRlcmlvcmF0ZShtYXA6IFRpbGVbXVtdKSB7XG4gICAgICAgIGNvbnN0IGdyYXNzVGlsZTogVGlsZSB8IG51bGwgPSB0aGlzLmJyZWFkdGhGaXJzdFNlYXJjaChtYXApO1xuICAgICAgICBpZihncmFzc1RpbGUgIT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zdCBuZXdDaGFuY2UgPSB0aGlzLmJhc2VDaGFuY2UgLyAxLjA1O1xuICAgICAgICAgICAgdGhpcy5kZXRlcmlvcmF0ZVRpbGUoZ3Jhc3NUaWxlLCBuZXdDaGFuY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXRlcmlvcmF0ZVRpbGUodGhpcy5nZXRSYW5kb21XYWxsVGlsZShtYXApLCB0aGlzLmJhc2VDaGFuY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXRlcmlvcmF0ZVRpbGUodGlsZTogVGlsZSwgY2hhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgaWYodGlsZSl7XG4gICAgICAgICAgICBpZihNYXRoLnJhbmRvbSgpID4gY2hhbmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YXRlclNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aWxlLnR5cGUgPSAnd2F0ZXInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21XYWxsVGlsZShtYXA6IFRpbGVbXVtdKSB7XG4gICAgICAgIGNvbnN0IHdhbGxUaWxlcyA9IGZsYXR0ZW5UaWxlTWFwKG1hcClcbiAgICAgICAgICAgIC5maWx0ZXIodGlsZSA9PiB0aWxlLnR5cGUgPT09ICd3YWxsJyk7XG4gICAgICAgIHJldHVybiB3YWxsVGlsZXNbfn4oTWF0aC5yYW5kb20oKSAqIHdhbGxUaWxlcy5sZW5ndGgpXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJyZWFkdGhGaXJzdFNlYXJjaChtYXA6IFRpbGVbXVtdKSB7XG4gICAgICAgIGxldCB3YXRlclRpbGUgPSBmbGF0dGVuVGlsZU1hcChtYXApLmZpbmQodGlsZSA9PiB0aWxlLnR5cGUgPT09ICd3YXRlcicpO1xuICAgICAgICBsZXQgUyA9ICh3YXRlclRpbGUpID8gW3dhdGVyVGlsZV0gOiBbXTtcbiAgICAgICAgbGV0IEQ6IFRpbGVbXSA9IFtdO1xuICAgICAgICB3aGlsZShTLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgY29uc3QgdiA9IFMucG9wKCk7XG4gICAgICAgICAgICBpZih2LnR5cGUgIT09ICd3YWxsJyAmJiB2LnR5cGUgIT09ICd3YXRlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHYudHlwZSA9PT0gJ3dhbGwnKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB2YWxpZEl0ZW1zID0gZ2V0TmVpZ2hib3JzKHYsIG1hcCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdJdGVtcyA9IHZhbGlkSXRlbXMuZmlsdGVyKG9iaiA9PiAhRC5pbmNsdWRlcyhvYmopKTtcblxuICAgICAgICAgICAgUyA9IFMuY29uY2F0KG5ld0l0ZW1zKTtcbiAgICAgICAgICAgIEQgPSBELmNvbmNhdCh2YWxpZEl0ZW1zKTtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQge1RpbGV9IGZyb20gJy4vVGlsZSc7XG5pbXBvcnQge2ZsYXR0ZW5UaWxlTWFwLCBnZXROZWlnaGJvcnN9IGZyb20gJy4vVXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBMYW5kQ3JlYXRlU3lzdGVtIHtcbiAgICBwdWJsaWMgc3RhdGljIHJ1bihtYXA6IFRpbGVbXVtdKXtcbiAgICAgICAgZmxhdHRlblRpbGVNYXAobWFwKVxuICAgICAgICAgICAgLmZpbHRlcih0aWxlID0+IHRpbGUudHlwZSA9PT0gJ3dhbGwnKVxuICAgICAgICAgICAgLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIWdldE5laWdoYm9ycyh2LCBtYXApXG4gICAgICAgICAgICAgICAgICAgIC5zb21lKHRpbGUgPT4gdGlsZS50eXBlID09PSAnd2F0ZXInKSl7XG4gICAgICAgICAgICAgICAgICAgIHYudHlwZSA9ICdncmFzcyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHtUaWxlfSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHtnZXROZWlnaGJvcnN9IGZyb20gJy4vVXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBncmFzcyA9ICdoc2woMTA2LDEwMCUsNjMlKSc7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmVlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd2FsbDogSFRNTEltYWdlRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgcHJpdmF0ZSBUSUxFX1hZOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gIDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+Y2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc29mdC1saWdodCc7XG4gICAgICAgIHRoaXMudHJlZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnRyZWUuc3JjID0gJ3RyZWUucG5nJztcbiAgICAgICAgdGhpcy53YWxsID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMud2FsbC5zcmMgPSAnd29vZC5wbmcnO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGdldExlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgcmVuZGVyKG1hcDogVGlsZVtdW10pe1xuICAgICAgIHRoaXMuY2FudmFzLndpZHRoID10aGlzLmNhbnZhcy5vZmZzZXRXaWR0aDtcbiAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPXRoaXMuY2FudmFzLm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3QgcmVuZGVyTGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSAvIHRoaXMuVElMRV9YWTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuZ2V0TGVuZ3RoKCksIHRoaXMuZ2V0TGVuZ3RoKCkpO1xuXG4gICAgICAgIG1hcC5mb3JFYWNoKChyb3csIHgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChvYmosIHkpID0+IHtcbiAgICAgICAgICAgICAgICBpZighWyd0cmVlJywgJ3dhbGwnXS5pbmNsdWRlcyhvYmoudHlwZSkpe1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLnR5cGUgPT09ICdncmFzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmdyYXNzO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gZ2V0TmVpZ2hib3JzKG9iaiwgbWFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBicmlnaHRuZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5laWdoYm9ycy5maW5kKHRpbGUgPT4gdGlsZS50eXBlICE9PSAnd2F0ZXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSA2MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJpZ2h0bmVzcyA9IE1hdGgubWF4KG5laWdoYm9ycy5yZWR1Y2UoKHAsIG4pID0+IE1hdGgubWF4KHAsIG4uYnJpZ2h0bmVzcyB8fCAwKSwgMCkgLSAxNSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouYnJpZ2h0bmVzcyA9IGJyaWdodG5lc3M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxTdHlsZSA9IGBoc2woMjIxLDEwMCUsJHticmlnaHRuZXNzfSUpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCAqIHJlbmRlckxlbmd0aCwgeSAqIHJlbmRlckxlbmd0aCwgcmVuZGVyTGVuZ3RoLCByZW5kZXJMZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihvYmoudHlwZSA9PT0gJ3RyZWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmdyYXNzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCAqIHJlbmRlckxlbmd0aCwgeSAqIHJlbmRlckxlbmd0aCwgcmVuZGVyTGVuZ3RoLCByZW5kZXJMZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMudHJlZSwgeCAqIHJlbmRlckxlbmd0aCwgeSAqIHJlbmRlckxlbmd0aCwgcmVuZGVyTGVuZ3RoLCByZW5kZXJMZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy53YWxsLCB4ICogcmVuZGVyTGVuZ3RoLCB5ICogcmVuZGVyTGVuZ3RoLCByZW5kZXJMZW5ndGgsIHJlbmRlckxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIFxufSIsImltcG9ydCB7VGlsZX0gZnJvbSAnLi9UaWxlJztcbmltcG9ydCB7ZmxhdHRlblRpbGVNYXB9IGZyb20gJy4vVXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBUcmVlQ3JlYXRlU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhc2VDaGFuY2U6IG51bWJlcil7fVxuICAgIHB1YmxpYyBydW4obWFwOiBUaWxlW11bXSkge1xuICAgICAgICBjb25zdCBmbGF0ID0gZmxhdHRlblRpbGVNYXAobWFwKTtcbiAgICAgICAgY29uc3QgZ3Jhc3MgPSBmbGF0LmZpbHRlcih0aWxlID0+IHRpbGUudHlwZSA9PT0gJ2dyYXNzJyk7XG4gICAgICAgIGNvbnN0IHRyZWVzID0gZmxhdC5maWx0ZXIodGlsZSA9PiB0aWxlLnR5cGUgPT09ICd0cmVlJyk7XG4gICAgICAgIGlmKHRyZWVzLmxlbmd0aCA8IGdyYXNzLmxlbmd0aCAvIDIpe1xuICAgICAgICAgICAgZ3Jhc3NcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoTWF0aC5yYW5kb20oKSA+IHRoaXMuYmFzZUNoYW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS50eXBlID0gJ3RyZWUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==