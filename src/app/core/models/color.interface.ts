export interface ColorInterface {
  id: number;
  name: ColorType;
  active?: boolean;
}

export type ColorType =
  | 'red'
  | 'white'
  | 'black'
  | 'blue'
  | 'grey'
  | 'green'
  | 'purple';
