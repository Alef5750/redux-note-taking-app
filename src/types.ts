export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export interface ICreateNotePayload {
  id?: number;
  title: string;
  content: string;
  category: CategoryEnum;
  createdAt: string;
}
export interface IUpdateNotePayload {
  id: number;
  updatedFields: Partial<ICreateNotePayload>;
}

export enum CategoryEnum {
  WORK = "work",
  PERSONAL = "personal",
  SHOPPING = "shopping",
}
