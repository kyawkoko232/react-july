import BookShow from './BookShow';

function BookList( {books, onDelete} ){

    const renderedBooks = books.map((book)=>{
        return <BookShow onDelete={onDelete} key={book.id} book={book} />;
    });


    return (
    <div className='grid grid-cols-5'>
        {renderedBooks}
    </div>
        
    )
}

export default BookList;