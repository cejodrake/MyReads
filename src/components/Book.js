import  React ,  {Component}  from 'react';
import Select  from  '../common/select'

class Book extends Component {

    render(){
        const {book ,books, updateBook}  = this.props
        
        const Img =
        book.imageLinks && book.imageLinks.thumbnail
          ? book.imageLinks.thumbnail
          : 
          null

      const title = book.title ? book.title : 'No title available';
      

        return (            
        
          <li>
          <div className="book">
            <div className="book-top">
              
              <div
                className="book-cover"
                style={{ width: 128, height: 193 ,
                  backgroundImage: `url(${Img})` }}
              />
               <Select book={book} books={books} updateBook={updateBook} /> 
            </div>

            <div className="book-title">{title}</div>
            {/* Check for authors and render each on separate line if exist*/
            book.authors &&
              book.authors.map((a, index) => (
                <div className="book-authors" key={index} >
                  {a.author}

                </div>
              ))}
          </div>
        </li>
      )
    }

}

export default Book ; 
