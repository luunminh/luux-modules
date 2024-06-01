import { IGetDesign } from '@modules/design/queries';

export interface ServerToClientEvents {
  editing: (data: IGetDesign) => void;
  join: (isJoin: boolean) => void;
  leave: (isLeave: boolean) => void;
}

export interface ClientToServerEvents {
  join: (designId: string) => void;
  leave: (designId: string) => void;
  editing: (data: IGetDesign) => void;
}
