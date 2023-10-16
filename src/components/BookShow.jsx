import { useState } from "react";
import BookEdit from './BookEdit';

function BookShow( {book, onDelete}){
  const [showEdit, setShowEdit] = useState(false);
    const handleDeleteClick = ()=> {
        onDelete(content);
    };

    const handleEditClick = ()=> {
      setShowEdit(!showEdit);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
      content = <BookEdit />;
    }

    return (
    <div className="">
     
      <div className="bg-slate-700 relative  max-w-sm flex-1 hover:bg-gray-300 transition-all duration-300 hover:text-black-500 p-5 m-2 rounded-xl text-slate-300">
      <div className="actions">
        <button className="edit rounded-lg px-2 text-white hover:text-slate-600 hover:bg-green-300  bg-black-500 " onClick={handleEditClick}> 
          Edit
        </button>
        <button 
        className="w-8 h-8 hover:bg-blue-600 leading-none absolute bg-red-600 right-1 top-1 rounded-full" 
       onClick={handleDeleteClick}
        > x </button>
      </div>
      <div className="text-sm">id - {book.id}</div>
      <div className="text-xl">book titile - {content}</div>
      </div>
    </div>
    )
}

export default BookShow;