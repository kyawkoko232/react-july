import { useState, useEffect } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from "axios";
import BooksContext from "./context/books";
import Alert from "./components/alert";



function App(){

  const [books, setBooks] = useState([]);
  const [alertData, setAlertData] = useState({ show: false, type: '', message: '' });

  const fetchBooks = async() => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  useEffect(()=>{
    fetchBooks();
  }, []);


  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title : newTitle
    });
     console.log(response); 

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book; 
    });
    setBooks(updatedBooks);
    setAlertData({ show: true, type: 'success', message: 'Book updated successfully!' });

    setTimeout(() => {
        setAlertData({ ...alertData, show: false });
    }, 3000);
  };


  const deleteAlert = () => {
    setAlertData({ show: true, type: 'warning', message: 'Book deleted successfully!' });

    setTimeout(() => {
        setAlertData({ ...alertData, show: false });
    }, 3000);
}

  const deleteBookById = async (id) => {

    const userConfirmation = window.confirm("Are you sure you want to delete this book?");
    if (userConfirmation) {
      await axios.delete(`http://localhost:3001/books/${id}`)

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
  
    deleteAlert();

    setBooks(updatedBooks);
    }
    
  };
  
 const createBook =  async(title) => {
  const response = await axios.post('http://localhost:3001/books',{
    title
  });
  
  console.log(response)
  const updatedBooks = [
    ...books, 
   response.data
  ]
  setBooks(updatedBooks);
 }


 return(

  <div className="app relative font-poppins container mx-auto py-10">
    {alertData.show && <Alert message={alertData.message} type={alertData.type} />}
  <BookList onEdit={editBookById} books={books} alert={deleteAlert} onDelete={deleteBookById} />
  <BookCreate  onCreate={createBook} />
  </div>
)
  
}

export default App;