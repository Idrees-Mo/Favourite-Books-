import { gql, useMutation } from "@apollo/client";

export const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!) {
    removeBook(id: $id) {
      title
    }
  }
`;

export const useDeleteBook = () => {
  const [removeBook] = useMutation(REMOVE_BOOK);
  return removeBook;
};
