import React from "react"


function SearchBar({search, setSearch}) {
    
    

 
    return (
        <form action="/" method="get" className="live-search-form">
        <label htmlFor="header-search">
        <span ></span>
        </label>
        <input
        type="text"
        id="header-search"
        placeholder="Search by amount, description"
        name="s" 
        value= {search}
        onChange = {e=>setSearch(e.target.value)}
        className="live-search-form-field"
        />
    </form>
    )
    
    }
    
    export default SearchBar