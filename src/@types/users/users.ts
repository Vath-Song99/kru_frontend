interface CardTeachersTypes {
  className?: string;
  imageUrl?: string;
  nameSubject?: string;
  teacherName?: string;
  rateStars?: number;
  reviews?: number;
  students?: number;
  description?: string;
  pricing?: number;
}

export interface AuthModel {
  // readonly id: string;
  lastname: string;
  firstname: string;
  name: string;
  email: string;
  password: string;
}
export interface UserContextType {
  auth: AuthModel[];
  addNewAuth: (auth: AuthModel) => void;
}
export type AuthForm = Omit<AuthModel, "id">;
export type { CardTeachersTypes };
