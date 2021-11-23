export interface UserState {
  loading: boolean;
  auth: boolean;
  error: Error;
  user: User;
}

export interface User {
  id: number;
  email: string;
  name: string;
  token: string;
}

export interface Registration {
  email: string;
  name: string;
  password: string;
}
