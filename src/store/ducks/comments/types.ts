export interface Comment {
  id: number;
  body: Record<string, unknown>;
  created: string;
  prayerId?: null;
  userId: number;
}

export interface CommentState {
  isLoading: boolean;
  isError: boolean;
  error: unknown | null;
  data: Record<string, Comment>;
}

export interface SetterComment {
  body: string;
}
