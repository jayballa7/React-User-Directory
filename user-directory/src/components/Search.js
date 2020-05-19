import React from 'react';
import '../styles/Search.css';


  function Search() {
    return (
        <div className = "searchbar">
            <form className="form-inline">
                <div className="form-group mb-2">
                    <input type="text" readonly className="form-control-plaintext" id="search-label" value="Search Employees"/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="password" className="form-control" id="searchbox" placeholder="Enter last name"/>
                </div>
                    <button type="submit" className="btn btn-primary mb-2">Search</button>
            </form>
        </div>
    );
  }
  
//   <nav className="navbar navbar-light bg-light">
//   <form className="form-inline mx-auto">
//       <label className = "search-label">Search Names</label>
//       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//   </form>
// </nav>

export default Search;