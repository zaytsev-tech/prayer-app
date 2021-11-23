export interface Column {
  title: string;
  description: string;
  id?: number;
  userId?: number;
}

export interface MainColumn {
  columns: Record<string, Column>;
}
