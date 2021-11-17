export interface User {
  id: number;
  email: string;
  name: string;
  token: string;
}

export interface Login {
  email: string;
  pass: string;
}
