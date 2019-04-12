import {Tile} from './Tile';
import {getNeighbors} from './Util';

export class Renderer {
    private readonly grass = 'hsl(106,100%,63%)';
    private readonly tree: HTMLImageElement;
    private readonly wall: HTMLImageElement;
    private context: CanvasRenderingContext2D;

    constructor(private canvas: HTMLCanvasElement, private TILE_XY: number) {
        this.context =  <CanvasRenderingContext2D>canvas.getContext('2d');
        this.context.globalCompositeOperation = 'soft-light';
        this.tree = new Image();
        this.tree.src = 'tree.png';
        this.wall = new Image();
        this.wall.src = 'wood.png';
    }
    
    private getLength() {
        return this.canvas.width;
    }
    
    public render(map: Tile[][]){
       this.canvas.width =this.canvas.offsetWidth;
       this.canvas.height =this.canvas.offsetHeight;
        const renderLength = this.getLength() / this.TILE_XY;

        this.context.clearRect(0, 0, this.getLength(), this.getLength());

        map.forEach((row, x) => {
            row.forEach((obj, y) => {
                if(!['tree', 'wall'].includes(obj.type)){
                    if (obj.type === 'grass') {
                        this.context.fillStyle = this.grass;
                    } else {
                        const neighbors = getNeighbors(obj, map);
                        let brightness = 0;
                        if(neighbors.find(tile => tile.type !== 'water')) {
                            brightness = 60;
                        } else {
                            brightness = Math.max(neighbors.reduce((p, n) => Math.max(p, n.brightness || 0), 0) - 15, 0);
                        }
                        obj.brightness = brightness;

                        const fillStyle = `hsl(221,100%,${brightness}%)`;
                        this.context.fillStyle = fillStyle;

                    }
                    this.context.fillRect(x * renderLength, y * renderLength, renderLength, renderLength);
                } else if(obj.type === 'tree') {
                    this.context.fillStyle = this.grass;
                    this.context.fillRect(x * renderLength, y * renderLength, renderLength, renderLength);
                    this.context.drawImage(this.tree, x * renderLength, y * renderLength, renderLength, renderLength);
                } else {
                    this.context.drawImage(this.wall, x * renderLength, y * renderLength, renderLength, renderLength);
                }
            });
        });

    }
    
}