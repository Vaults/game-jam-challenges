import {Tile} from './Tile';
import {flattenTileMap, getNeighbors} from './Util';

export class Deteriorator {

    private waterSound: HTMLAudioElement;

    constructor(private TILE_XY: number, private baseChance){
        this.waterSound = new Audio('water.mp3');
        this.waterSound.load();
        this.waterSound.volume = 0.4;
    }

    //fastest implementation, would have chosen for A* if more time
    public deteriorate(map: Tile[][]) {
        const grassTile: Tile | null = this.breadthFirstSearch(map);
        if(grassTile != null){
            const newChance = this.baseChance / 1.05;
            this.deteriorateTile(grassTile, newChance);
        } else {
            this.deteriorateTile(this.getRandomWallTile(map), this.baseChance);
        }
    }

    private deteriorateTile(tile: Tile, chance: number) {
        if(tile){
            if(Math.random() > chance) {
                this.waterSound.play();
                tile.type = 'water';
            }
        }
    }

    private getRandomWallTile(map: Tile[][]) {
        const wallTiles = flattenTileMap(map)
            .filter(tile => tile.type === 'wall');
        return wallTiles[~~(Math.random() * wallTiles.length)];
    }

    private breadthFirstSearch(map: Tile[][]) {
        let waterTile = flattenTileMap(map).find(tile => tile.type === 'water');
        let S = (waterTile) ? [waterTile] : [];
        let D: Tile[] = [];
        while(S.length > 0){
            const v = S.pop();
            if(v.type !== 'wall' && v.type !== 'water') {
                return v;
            }
            if(v.type === 'wall') {
                continue;
            }

            let validItems = getNeighbors(v, map);

            let newItems = validItems.filter(obj => !D.includes(obj));

            S = S.concat(newItems);
            D = D.concat(validItems);

        }
        return null;
    }
}