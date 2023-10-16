import { useState } from "react";
import BookEdit from './BookEdit.jsx';


function BookShow( {book, onEdit, onDelete }){
  const [showEdit, setShowEdit] = useState(false);
    
  const handleDeleteClick = ()=> {
        onDelete(book.id);
    };

    const handleEditClick = ()=> {
      setShowEdit(!showEdit);
    }

    const handleSubmit = (id, newTitle) => {
      setShowEdit(false);
      onEdit(id, newTitle);
    };

    let content = <span className=" text-blue-400"> Title - {book.title}</span>;
    if (showEdit) {
      content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }

    let name = <h1 className="text-sm">Edit </h1>;
    if (showEdit){
      name =  <h1 className="text-sm">Book</h1>;
    }

    return (
    <div className="py-1 ">
      <div className="border shadow-xl relative  max-w-md flex-1 transition-all duration-300  py-4 px-3 m-2 rounded-xl text-slate-300">
      <div className="actions">
        <button className="edit rounded-lg px-2 text-slate-800 bg-green-400 md:hover:bg-green-200 " onClick={handleEditClick}> 
          { name }
        </button>

        <button 
        className="w-8 h-8 hover:bg-blue-600 leading-none absolute bg-red-600 right-3 top-3 rounded-full" 
       onClick={handleDeleteClick}
        > x </button>
      </div>
      <div className="text-lg py-2"> {content} </div>
      </div>
    </div>
    )
}

export default BookShow;