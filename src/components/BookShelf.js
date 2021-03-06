import React, { Component } from 'react';

import Book from './Book';

class BookShelf extends Component {
 

  render() {
    const { books, updateBook } = this.props;

    return (
      <ol className="books-grid">
        {books.map(book => (
          <Book
            book={book}
            books={books}
            key={book.id}
            updateBook={updateBook}
          />
        ))}
      </ol>
    
    );
  }
}

export default BookShelf;