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
    <div className="fixed bottom-0 dark:text-slate-300 w-full px-3">
       <div className="px-4   my-3 py-3  shadow-xl  rounded-xl border border-base-300  w-full md:w-[500px]  ">
       <h3 className=" text-lg font-bold">Add a Book</h3>
        <form onSubmit={handleSubmit}  className="flex flex-col justify-center items-start gap-3 ">
            <label className="">Book Title</label>
            <input className=" input input-sm input-bordered  w-full rounded-lg px-2 p-1 " value={title} onChange={handleChange} />
            <button className=" rounded-xl btn btn-sm  px-2 py-1">Create</button>
        </form>
       </div>
    </div>
    )
}

export default BookCreate;