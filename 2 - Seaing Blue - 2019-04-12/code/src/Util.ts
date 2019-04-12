import {Tile} from './Tile';

export function getNeighbors(v: Tile, map: Tile[][]): Tile[] {
    return [
        {x: v.x - 1, y: v.y},
        {x: v.x + 1, y: v.y},
        {x: v.x, y: v.y + 1},
        {x: v.x, y: v.y - 1}
    ].filter(obj => {
        const inBounds = (n: number) => n >= 0 && n < map.length;
        return inBounds(obj.x) && inBounds(obj.y);
    }).map(obj => map[obj.x][obj.y])
}

export function flattenTileMap(map: Tile[][]){
    return map.reduce((acc, next) => acc.concat(next), [])
}