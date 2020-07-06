import React from 'react';

class SearchFilter extends React.Component{
    render(){
        return(
            <div className="row mt-3 filter-div">
                <div className="col-lg-8 col-md-8 col-sm-8 ">
                    <p><span className="filter-title">Selected Filters :  </span><span className="filter">Continental <a href="/" className="ml-1"><i className="fas fa-times-circle"></i></a> </span></p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 text-right">
                    <p>
                        <span className="filter-title">Sort by :</span>
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