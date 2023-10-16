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
        <div className="text-black-500  rounded-lg">
            <form onSubmit={handleSubmit} action="" className="space-y-2">
                <label className="mr-2 text-base">Name</label>
                <input  value={title} onChange={handleChange} className="border border-1 py-0.5 px-2 focus:outline-none text-slate-800 rounded-lg" />
                <button className="py-1 text-sm mt-5 px-2 bg-blue-400  rounded-xl">Save</button>
            </form>
        </div>
    )
}

export default BookEdit;