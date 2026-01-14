export interface Issue {
  id?: string;
  title: string;
  room: string;
  category: string;
  priority: string;
  status?: string;
  assignee?: string;
}

export interface Pagination {
  limit: number;
  offset: number;
}

export type User = {
  name: string;
  password: string;
};
