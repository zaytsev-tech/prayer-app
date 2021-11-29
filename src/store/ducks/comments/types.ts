export interface Comment {
  id: number;
  body: string;
  created: string;
  prayerId?: null;
  userId: number;
}

export interface SetterComment {
  body: string;
}
