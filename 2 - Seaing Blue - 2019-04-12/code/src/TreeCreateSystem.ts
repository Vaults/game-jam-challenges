import {Tile} from './Tile';
import {flattenTileMap} from './Util';

export class TreeCreateSystem {
    constructor(private baseChance: number){}
    public run(map: Tile[][]) {
        const flat = flattenTileMap(map);
        const grass = flat.filter(tile => tile.type === 'grass');
        const trees = flat.filter(tile => tile.type === 'tree');
        if(trees.length < grass.length / 2){
            grass
                .forEach(tile => {
                    if(Math.random() > this.baseChance) {
                        tile.type = 'tree';
                    }
                });
        }
    }
}