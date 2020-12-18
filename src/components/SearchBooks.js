import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';
class SearchBook  extends  Component {

    state ={
        query:"", 
        listBooks:'',
        errorQuery:false
    }

  searchBooks =(e) => {
      const query  = e.target.value;
       this.setState({query, errorQuery:false})

    if (query) {
        BooksAPI.search(query.trim(),20).then(books => {
            books.length > 0 
            ? this.setState({listBooks:books,errorQuery:false})
            : this.setState({listBooks:[],errorQuery:true})
        })

    }else{
        this.setState({listBooks:[], errorQuery:false})
    }
  }

    render(){
        const {query, listBooks, errorQuery} = this.state;
        const {books, updateBook} = this.props;
        return (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">
                  Close
                </Link>
                <div className="search-books-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by title or author"
                    value={query}
                    onChange={this.searchBooks}
                  />
                </div>
              </div>
              <div className="search-books-results">
                {listBooks.length > 0 && (
                  <div>
                    <h3>Search returned {listBooks.length} books </h3>
                    <ol className="books-grid">
                      {listBooks.map(book => (
                        <Book
                          book={book}
                          books={books}
                          key={book.id}
                          updateBook={updateBook}
                        />
                      ))}
                    </ol>
                  </div>
                )}
                {errorQuery && (<div className="alert alert-info" role="alert">
                      Sorry , Books not found !!!!
                </div>)}
              </div>
            </div>
          );
    }
}
export default  SearchBook;