import React,{Component} from 'react';
import BookShelf from './BookShelf';

class BookList extends Component {
 
     render (){
        const {allBooks,updateBook} = this.props;
        const types= [
            { type: 'currentlyReading', title: 'Currently Reading' },
            { type: 'wantToRead', title: 'Want to Read' },
            { type: 'read', title: 'Read' }
        ]


         return (
            <div className="list-books-content">
            {types.map((shelf) => {

              const shelfBooks = allBooks.filter(book => book.shelf === shelf.type);
      
              return (
                <div className="bookshelf" key={shelf.title}>
                  <h2 className="bookshelf-title">{shelf.title}</h2>
                  <div className="bookshelf-books">
                    <BookShelf books={shelfBooks} updateBook={updateBook} />
                  </div>
                </div>
              );
            })
            
            }
          </div>
         )
     }
}

export default BookList;