import BookShow from './BookShow';

function BookList( {books, onEdit, onDelete } ){

    const renderedBooks = books.map((book)=>{
        return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />;
    });


    return (
    <div className='h-full md:grid grid-cols-5 mb-[200px]'>
        {renderedBooks}
    </div>
        
    )
}

export default BookList;