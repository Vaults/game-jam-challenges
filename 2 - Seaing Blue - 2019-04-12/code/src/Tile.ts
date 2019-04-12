export type TileType = 'grass' | 'water' | 'wall' | 'tree';

export class Tile {
    public type: TileType;
    public x: number;
    public y: number;
    public brightness: number;
}