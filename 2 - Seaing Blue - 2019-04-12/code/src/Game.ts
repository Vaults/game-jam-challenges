import {BuildSystem} from './BuildSystem';
import {Deteriorator} from './Deteriorator';
import {LandCreateSystem} from './LandCreateSystem';
import {Renderer} from './Renderer';
import {Tile, TileType} from './Tile';
import {TreeCreateSystem} from './TreeCreateSystem';

const FPS = 60;
const TILE_XY = 32;
const INITIAL_SIZE = 6;

function buildMap() {
    const map: Tile[][] = new Array<string>(TILE_XY).fill('')
        .map((_, x) => new Array(TILE_XY).fill('').map((_, y) => {
            const type: TileType = 'water';
            return {type, x, y, brightness: 1};
        }));

    Array(INITIAL_SIZE + 2).fill('').forEach((_, i) => {
        Array(INITIAL_SIZE + 2).fill('').forEach((_, j) => {
            map[TILE_XY/2 - (INITIAL_SIZE + 2)/2 + i][TILE_XY/2 - (INITIAL_SIZE + 2)/2 + j].type = 'wall';
        });
    });


    Array(INITIAL_SIZE).fill('').forEach((_, i) => {
        Array(INITIAL_SIZE).fill('').forEach((_, j) => {
            const type: TileType = 'grass';
            map[TILE_XY/2 - INITIAL_SIZE/2 + i][TILE_XY/2 - INITIAL_SIZE/2 + j].type = type;
        });
    });

    return map;
}

document.addEventListener("DOMContentLoaded", () => {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('renderArea');

    const map = buildMap();
    const buildSystem = new BuildSystem(map);

    let mousedown = false;

    const buildMouse = (event: MouseEvent) => {
        const x = event.pageX - canvas.offsetLeft;
        const y = event.pageY - canvas.offsetTop;

        const xT = ~~((x / canvas.width) * TILE_XY);
        const yT = ~~((y / canvas.height) * TILE_XY);

        buildSystem.click(xT, yT);
    }

    const buildTouch = (event: TouchEvent) => {
        const x = event.touches[0].clientX - canvas.offsetLeft;
        const y = event.touches[0].clientY - canvas.offsetTop;

        const xT = ~~((x / canvas.width) * TILE_XY);
        const yT = ~~((y / canvas.height) * TILE_XY);

        buildSystem.click(xT, yT);
    }

    let mouseDownListener = _ => { mousedown = true; };
    let mouseUpListener = _ => { mousedown = false; };
    let mouseMoveListener = (event: MouseEvent) => {
        if (mousedown) {
            buildMouse(event);
        }
    };
    let touchMoveListener = (event: TouchEvent) => {
        if (mousedown) {
            buildTouch(event);
        }
    }
    let canvasWrapper = (listener: any) => {
        return (event) => {
            event.preventDefault();
            listener(event);
        }
    }


    canvas.addEventListener('mousedown', mouseDownListener);
    canvas.addEventListener('mouseup', mouseUpListener);
    canvas.addEventListener('click', mouseMoveListener);
    canvas.addEventListener('touchstart', canvasWrapper(mouseDownListener));
    canvas.addEventListener('touchend',   canvasWrapper(mouseUpListener));

    canvas.addEventListener('mousemove', mouseMoveListener);
    canvas.addEventListener('touchmove',  canvasWrapper(touchMoveListener));


    const renderer = new Renderer(canvas, TILE_XY);
    const deteriorator = new Deteriorator(TILE_XY, 0.995);
    let frameCount = 0;
    const intervalLoop = () => {
        frameCount++;
        if(frameCount > 1200) {
            deteriorator.deteriorate(map);
        }
        LandCreateSystem.run(map);
        new TreeCreateSystem(0.9995).run(map);

        renderer.render(map);
    }


    setInterval(intervalLoop, 1000 / FPS);

});



