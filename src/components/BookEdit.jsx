import { useState } from "react";

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
  
    const handleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      onSubmit(book.id, title);
    };

    
    return (
        <div className="rounded-lg">
            <form onSubmit={handleSubmit} action="" className="space-y-2">
                <label className="mr-2 text-base">Name</label>
                <input  value={title} onChange={handleChange} className="border border-1 py-0.5 px-2 focus:outline-none  rounded-lg" />
                <button className="btn btn-sm  btn-success text-sm  px-2   rounded-xl">Save</button>
            </form>
        </div>
    )
}

export default BookEdit;