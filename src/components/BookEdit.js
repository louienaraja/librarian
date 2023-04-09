import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const { editBookById } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBookById(book.id, newTitle);
    onSubmit();
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        className="input"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
