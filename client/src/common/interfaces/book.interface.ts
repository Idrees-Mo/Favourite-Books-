import { Author } from "./author.interface";

export interface Book {
  id: string;
  title: string;
  cover_url: string;
  author?: Author;
}
