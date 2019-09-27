import React from 'react';
import { connect } from "react-redux";
import $ from 'jquery';
import './SearchBar.css';
import { debounce } from "lodash";


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
                    onChange = { e => this.searchChangeHandler(e.target.value) } 
                    placeholder = "Search here" 
                    name = "Search"
                    />
                </div>
                <div className="table-responsive-vertical">
                    <table className="table table-hover table-mc-light-blue">
                        <tbody>
                            <tr>
                                <th>Project Name</th>
                                <th>Stars</th>
                                <th>Views</th>
                            </tr>
 
                            { this.createTableItems() }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    createTableItems() {
        return this.props.project.map((result) => {
            return (

                <tr key ={result.id}>
                    <td>
                        <a href= {result.url} >
                        {result.name}
                        </a>
                    </td>
                    <td>{result.star}</td>
                    <td>{result.view}</td>
                </tr>

            );
        });


    }

    searchChangeHandler = debounce((value) => {
        console.log(value)
        this.performSearch(value);
    },1000)
    componentWillUmount() {
        this.searchChangeHandler.cancel();
    }
    performSearch(inputString) {
        console.log("Perform search ")
        const urlString = "https://api.github.com/search/repositories?q="+inputString
      
        $.ajax({
          url: urlString,
          success: (searchResults) => {
            console.log("Fetched data successfully")
      
            const results = searchResults.items
      
            var projectRows = []
      
            results.forEach((project) => {
              const projectRow = {
                  id:project.id,
                  name:project.name,
                  url: project.html_url,
                  star: project.stargazers_count,
                  view: project.watchers_count
                }
              projectRows.push(projectRow)
            })
            const search = {
                type: "SEARCH",
                project: projectRows
            }
        
            this.props.dispatch(search)
    
          },
          error: (xhr, status, err) => {
            console.error("Failed to fetch data")
          }
        })
      
      }
}

const mapStateToProps = (state) => ({
    project: state.project
})


  
export default connect(mapStateToProps)(SearchBar);