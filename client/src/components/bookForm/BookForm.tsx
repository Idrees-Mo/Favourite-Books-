import { useState } from "react";
import { useCreateBook } from "../../common/hooks/books/useCreateBook";
import { GET_BOOKS } from "../../common/hooks/books/useGetBooks";

const BookForm = () => {
  const createBook = useCreateBook();
  const [title, setTitle] = useState("");
  const [cover_url, setCoverUrl] = useState("");
  const [authId, setAuthId] = useState("");

  const onsubmit = (e: any) => {
    e.preventDefault();
    createBook({
      variables: {
        title,
        cover_url,
        authId,
      },
      refetchQueries: [{ query: GET_BOOKS }],
    });
    setTitle("");
    setAuthId("");
    setCoverUrl("");
  };
  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Book Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="cover_url"
        value={cover_url}
        placeholder="Book Cover URL"
        onChange={(e) => setCoverUrl(e.target.value)}
      />
      <input
        type="text"
        name="authId"
        value={authId}
        placeholder="Book Author Id"
        onChange={(e) => setAuthId(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
