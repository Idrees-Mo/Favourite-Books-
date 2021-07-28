import { gql, useMutation } from "@apollo/client";

const CREATE_AUTHOR = gql`
  mutation CeateAuthor($name: String!, $photo_url: String!) {
    createAuthor(name: $name, photo_url: $photo_url) {
      id
      name
      photo_url
    }
  }
`;

export const useCreateAuthor = () => {
  const [createAuthor, { error }] = useMutation(CREATE_AUTHOR);
  return createAuthor;
};
