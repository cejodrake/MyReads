import React, {Component} from  'react'
import { Link } from 'react-router-dom';
import BookList  from  './BookList'


class BookApp extends Component {

    render(){
        const  { allBooks, updateBook} = this.props
        return (

            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BookList
              allBooks ={allBooks}  
              updateBook ={updateBook}/>
           
              </div>
            </div>
            
            <div className="open-search">
                
              
            </div>
          </div>
        )
    }
}

export default BookApp;