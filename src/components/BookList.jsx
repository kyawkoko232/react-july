import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from './BookShow';
import Alert from "./alert";

function BookList({ books, onDelete, onEdit }) {
    const { count, incrementCount } = useContext(BooksContext);
  
    const renderedBooks = books.map((book) => {
      return (
        <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
      );
    });
  
    return (
      <div className="book-list relative w-full md:grid grid-cols-3">
        <div className="absolute right-0 bottom-0">
        {count}
        <button className="btn btn-sm btn-secondary"  onClick={incrementCount}>Click</button>
        </div>
        {renderedBooks}
      </div>
    );
  }

export default BookList;