export interface Prayer {
  id?: number;
  title: string;
  description: string;
  checked: boolean;
  columnId?: number;
  commentsIds: Record<string, Comment>;
}

export interface Comment {
  body: string;
  created: string;
  prayerId: number;
  userId: number;
}
