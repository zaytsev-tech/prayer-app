export interface User {
  id: number;
  email: string;
  name: string;
  token: string;
}

export interface LoginData {
  email: string;
  pass: string;
}
