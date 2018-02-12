import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    //this.handleTermChange = this.handleTermChange.bind(this);
  }
  
  search(event) {
    this.props.onSearch(document.getElementById("searchbox").value);
  }
/*
  handleTermChange(event) {
    console.log(event.target.value);    
    this.props.onUpdateTerm(event.target.value);
  }
*/
  render() {
    return (
      <div className="SearchBar">
        <input id="searchbox" placeholder="Enter A Song, Album, or Artist" />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

