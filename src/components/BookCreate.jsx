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
    <div className="absolute bottom-0 ">
       <div className="p-8 border rounded-xl bg-slate-600 w-[500px]  ">
       <h3 className="text-slate-200 text-2xl">Add a Book</h3>
        <form onSubmit={handleSubmit}  className="flex flex-col justify-center items-start gap-3 ">
            <label className="text-slate-300">Book Title</label>
            <input className="border w-full border-slate-900 rounded-lg p-2 " value={title} onChange={handleChange} />
            <button className="bg-blue-600 px-2 py-1.5 rounded-xl text-slate-300">Create</button>
        </form>
       </div>
    </div>
    )
}

export default BookCreate;