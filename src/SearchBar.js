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
        const text = event.target.value;

        // search empty string 
        // if (text === ""){
        //     console.log("Empty inputs")
        //     this.props.dispatch({type: "SEARCH_EMPTY"})
        // }
        // // have some text for search
        // else{
            const search = {
                            type: "SEARCH",
                            // pass in the search text
                            value: text
                        }
            console.log(text)
            this.props.dispatch(search)
        // }
    }
}


  
export default connect()(SearchBar);