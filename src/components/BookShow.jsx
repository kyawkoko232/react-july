function BookShow( {book, onDelete}){
    const handleClick = ()=> {
        onDelete(book.id);
        console.log("Delete Clicked");
        console.log(book.id)
    };
    return (
    <div className=" transition-all duration-1000">
     
      <div className="bg-slate-700 relative  max-w-sm flex-1 hover:bg-gray-300 transition-all duration-300 hover:text-black-500 p-5 m-2 rounded-xl text-slate-300">
      <div className="actions">
        <button 
        className="w-8 h-8 leading-none absolute bg-red-600 right-1 top-1 rounded-full" 
       onClick={handleClick}
        > x </button>
      </div>
      <div className="text-sm">id - {book.id}</div>
      <div className="text-xl">book titile - {book.title}</div>
      </div>
    </div>
    )
}

export default BookShow;