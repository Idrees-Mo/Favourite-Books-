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

export const useGetBooks = () => {
  const { data, loading, error } = useQuery(GET_BOOKS);
  return { data, loading, error };
};
