import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookApp from './components/BookList'
import Search from  './components/SearchBooks';

import { Route ,Link} from 'react-router-dom';

class App extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    allBooks:[],
  
  }

  componentDidMount () {
    BooksAPI.getAll()
    .then(allBooks=>{
      this.setState(()=> ({
        allBooks
      }))
    })
 
  }


updateBook = (changeBook,shelf) =>{
    BooksAPI.update(changeBook, shelf)
    .then(book => {
      changeBook.shelf = shelf;
      this.setState(prevBooks =>({
        allBooks:prevBooks.allBooks
        .filter(book=> book.id !== changeBook.id)
        .concat(changeBook)
      }));
    });
  }
  

render() {
  
      return (
      <div className="app">
       <div>
       <Route  exact path ="/search" render={()=> (
       
          <Search 
            books={this.state.allBooks} 
            updateBook={this.updateBook} 
          
            /> 
            )} />
      
        <Route exact  patch = "/" render={() => (
            <BookApp  
            allBooks ={this.state.allBooks}
            updateBook ={this.updateBook}
           />
        )}/>
              <div className="open-search">
                  <Link to="/search"><button >Add a book</button></Link>
                </div>
        
            </div>
      </div>
    )
  }
}

export default App
