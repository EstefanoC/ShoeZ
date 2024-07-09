export interface TagInterface {
  id: number;
  name: TagType;
  active?: boolean;
}

export type TagType = 'jordan' | 'nike' | 'retro' | 'puma' | 'new balance';
