export interface WikiEntry {
  Id: number;
  Creator: number;
  CreateTime: Date;
  UpdateTime: Date;
  Title: string;
  Content: string;
  Uuid: string;
}

export interface WikiTitle {
  Title: string;
  UUID: string;
}
