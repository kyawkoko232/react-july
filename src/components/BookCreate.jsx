import { useState } from "react";

function BookCreate({ onCreate }){
  
    const [title, setTitle] = useState('');
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('')
    }

    return (
    <div className="fixed bottom-0 w-full px-3 ">
       <div className="px-4  my-3 py-3 border rounded-xl bg-slate-600 w-full md:w-[500px]  ">
       <h3 className="text-slate-200 text-lg font-bold">Add a Book</h3>
        <form onSubmit={handleSubmit}  className="flex flex-col justify-center items-start gap-3 ">
            <label className="text-slate-200">Book Title</label>
            <input className="border w-full border-slate-900 rounded-lg px-2 p-1 " value={title} onChange={handleChange} />
            <button className="bg-blue-600 px-2 py-1 rounded-xl text-slate-300">Create</button>
        </form>
       </div>
    </div>
    )
}

export default BookCreate;