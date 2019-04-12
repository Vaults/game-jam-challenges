import {Tile} from './Tile';
import {flattenTileMap, getNeighbors} from './Util';

export class LandCreateSystem {
    public static run(map: Tile[][]){
        flattenTileMap(map)
            .filter(tile => tile.type === 'wall')
            .forEach(v => {
                if(!getNeighbors(v, map)
                    .some(tile => tile.type === 'water')){
                    v.type = 'grass';
                }
            })
    }
}