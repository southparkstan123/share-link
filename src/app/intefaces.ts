export interface ILink {
    id: string
    url: string;
    title: string;
    isShared: boolean;
    tags: ITag[];
}

export interface ITag {
    name: string;
  }
