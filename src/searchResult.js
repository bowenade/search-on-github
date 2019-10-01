
import React from 'react';
import { connect } from "react-redux";


class SearchResults extends React.Component {
    render() {
        return (
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
    
}

const mapStateToProps = (state) => ({
    project: state.project
})

export default connect(mapStateToProps)(SearchResults);