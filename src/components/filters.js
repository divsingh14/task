import React from 'react';

class SearchFilter extends React.Component{
    render(){
        return(
            <div className="row my-3 filter-div">
                <div className="col-sm-9">
                    <p>Selected Filters <span className="filter">Continental <a href=""><i className="fas fa-times-circle"></i></a> </span></p>
                </div>
                <div className="col-sm-3 text-right">
                    <p>
                        Sort by 
                        <select name="" className="filter mx-1">
                            <option value="">Popularity</option>
                        </select>
                    </p>
                </div>
                <hr/>
            </div>
        );
    }
}

export default SearchFilter;