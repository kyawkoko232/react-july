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

    let content = <span className=""> Title - {book.title}</span>;
    if (showEdit) {
      content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }

    let name = <span className="font-semibold text-sm badge badge-info badge-sm">Edit </span>;
    if (showEdit){
      name =  <span className="font-semibold text-sm badge badge-info badge-sm">Book</span>;
    }

    return (
    <div className="py-1 ">
      <div className=" border dark:bg-slate-900 border-base-200 shadow-xl relative  max-w-md flex-1 transition-all duration-300  py-4 px-3 m-2 rounded-xl">
      <div className="actions">
        {/* Edit  */}
        <button className="edit rounded-lg px-2  " 
        onClick={handleEditClick}> 
          { name }
        </button>

        {/* Delete  */}
        <button className="w-8 h-8 badge badge-secondary  leading-none absolute  right-3 top-3 rounded-full" 
       onClick={handleDeleteClick} >
         x 
         </button>
      </div>
      <div className="text-lg py-2"> {content} </div>
      </div>
    </div>
    )
}

export default BookShow;