import React from 'react';
import '../styles/Search.css';


  function Search(props) {
    return (
        <div className = "searchbar">
            <form>
                <div className="form-group row">
                    <label for="searchbar" className="col-sm-3 col-form-label search-label">Search Employees</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control searchbox" id="searchbar" placeholder="Enter first or last name"/>
                    </div>
                </div>
            </form>
        </div>
    );
  }

export default Search;