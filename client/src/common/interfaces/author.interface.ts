import { Book } from "./book.interface";

export interface Author {
  id: string;
  name: string;
  photo_url?: string;
  books?: Book[];
}
