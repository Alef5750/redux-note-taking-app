export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export interface ICreateNotePayload {
  id?: number | undefined;
  title: string;
  content: string;
  category: CategoryEnum;
  createdAt: string;
}
export interface IUpdateNotePayload {
  id: number | undefined;
  changes: Partial<ICreateNotePayload>;
}

export enum CategoryEnum {
  WORK = "work",
  PERSONAL = "personal",
  SHOPPING = "shopping",
}
