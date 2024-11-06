export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export interface IFormData {
  title: string;
  content: string;
  category: CategoryEnum;
  createdAt: string;
}

export enum CategoryEnum {
  WORK = "work",
  PERSONAL = "personal",
  SHOPPING = "shopping",
}
