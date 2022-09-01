export type Player = '' | 'x' | 'o';

export type Tile = {
  clicked: boolean;
  player: Player;
};
