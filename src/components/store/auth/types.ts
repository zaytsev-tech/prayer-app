export interface Main {
  loading: boolean;
  error: Error;
  user: User;
  columns: [Column];
}

export interface User {
  id: number;
  email: string;
  name: string;
  token: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Registration {
  email: string;
  name: string;
  password: string;
}

export interface Column {
  title: string;
  description: string;
  id: number;
}
