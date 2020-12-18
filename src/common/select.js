import React ,{Component } from 'react';


class Select extends Component {
state = {
  selectValue:""
}

handleChange= (e) =>{
  this.props.updateBook(this.props.book, e.target.value);
 
  }
    render(){
      
      const {book, books} = this.props;
      let currentShelf= 'none'
      
      for (let item of books){
          if(item.id===book.id){
            currentShelf=item.shelf
            break;
          }
      }
  
  
return (

  <form>  
    <div className="book-shelf-changer">
                    <select 
                    value={currentShelf}
                    onChange={this.handleChange}
                    >
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                
                  </div>
    
  </form>

) 
}
}
export default Select