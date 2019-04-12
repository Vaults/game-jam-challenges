import {Tile} from './Tile';
import {getNeighbors} from './Util';

export class BuildSystem {

    public wood: number= 0;
    public place: HTMLAudioElement;
    public chop: HTMLAudioElement;

    constructor(private map: Tile[][]){
        this.place = new Audio('place.mp3');
        this.chop = new Audio('chop.mp3');
        this.chop.volume = 0.7;
    }

    click(x: number, y: number) {
        const selectedTile = this.map[x][y];
        if(selectedTile.type === 'tree') {
            selectedTile.type = 'grass';
            this.wood++;
            this.chop.currentTime = 0.01;
            this.chop.play().then(_ => {});
        } else if(this.wood > 0 && selectedTile.type === 'water'){
            if(this.checkAdjacent(selectedTile)){
                this.place.currentTime = 0.13;
                this.place.play().then(_ => {});
                selectedTile.type = 'wall';
                this.wood--;
            }
        }
    }

    private checkAdjacent(v: Tile) {
        return getNeighbors(v, this.map)
            .filter(tile => tile.type !== 'water')
            .length > 0;

    }
}