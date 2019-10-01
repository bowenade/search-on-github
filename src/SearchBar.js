import React from 'react';
import { connect } from "react-redux";

import './SearchBar.css';


class SearchBar extends React.Component {


    render() {
        return (

            <div className = "main">
                <h1> Search On Github</h1>
                <div className = "form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input 
                    type = "text" 
                    className = "form-control"
                    onChange = { this.searchChangeHandler.bind(this) } 
                    placeholder = "Search here" 
                    name = "Search"
                    />
                </div>
            </div>
        );
    }
  

    searchChangeHandler(event) {
        const search = {
                        type: "SEARCH",
                        // pass in the search text
                        value: event.target.value
                    }
        this.props.dispatch(search)
    }
}


  
export default connect()(SearchBar);