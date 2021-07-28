import { gql, useQuery } from "@apollo/client";
import { Book } from "../../interfaces/book.interface";

export const GET_BOOKS = gql`
  query getBooks {
    getBooks {
      id
      title
      cover_url
      author {
        name
        id
        photo_url
        books {
          cover_url
        }
      }
    }
  }
`;

export const useGetBooks = (): Book[] | undefined => {
  const { data } = useQuery(GET_BOOKS);
  if (data) {
    return data.getBooks;
  }
};
