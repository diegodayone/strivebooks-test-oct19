import React from 'react';
import { Jumbotron, Container, Input } from "reactstrap"
import MyBooks from "../data/fantasy.json"
import BookList from './BookList.jsx';
import BookDetails from "./BookDetails"

class MainComponent extends React.Component {
    state = {
        search: "",
        selectedBook: undefined
      }

      selectBook = (book) =>{
        this.setState({
            selectedBook: book
        })
      }

    render() { 
        return (  
        
        <Container> 
            <Jumbotron>
            <h1 className="display-3">Welcome to Strivebooks</h1>
            <p className="lead">Best ebooks in town! </p>
            <hr className="my-2" />
            <p>Only fantasy books at the moment</p>
          </Jumbotron> 

        { this.state.selectedBook && <BookDetails selectedBook={this.state.selectedBook} /> }

          <Input className="my-5" type="text" value={this.state.search} onChange={(val) => this.setState({search: val.target.value.toLowerCase()})} placeholder="Type to search"></Input>
          
          <BookList books={MyBooks} filter={this.state.search} onBookSelected={this.selectBook}></BookList>

        </Container> );
    }
}
 
export default MainComponent;