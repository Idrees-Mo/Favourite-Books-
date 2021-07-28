import { gql, useQuery } from "@apollo/client";
import { Author } from "../../interfaces/author.interface";

export const GET_AUTHORS = gql`
  query getAuthors {
    getAuthors {
      id
      name
      photo_url
    }
  }
`;

export const useGetAuthors = (): Author[] | undefined => {
  const { data } = useQuery(GET_AUTHORS);
  if (data) {
    return data.getAuthors;
  }
};
