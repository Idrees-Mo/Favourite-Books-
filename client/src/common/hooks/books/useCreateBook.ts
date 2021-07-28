import { gql, useMutation } from "@apollo/client";

const CREATE_BOOK = gql`
  mutation CeateBook($title: String!, $cover_url: String!, $authId: ID!) {
    createBook(title: $title, cover_url: $cover_url, authId: $authId) {
      id
      title
      cover_url
      author {
        name
        id
        photo_url
      }
    }
  }
`;

export const useCreateBook = () => {
  const [createBook, { error }] = useMutation(CREATE_BOOK);
  return createBook;
};
