// src/components/Search.js

import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import '../App.css';


function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
       .includes(searchField.toLowerCase()) 
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredPersons={filteredPersons} />
        </Scroll>
      );
    }
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search a Animal</h2>
    <div className='f2'>
        <span>🔍</span>
	<input   style={{ width: "200px",backgroundColor:'#eee',borderRadius: "40%", padding: 5}}
          type = "search" 
          placeholder ="Search....🔍"
          onChange = {handleChange}/>
	   {searchList()}

        </div></div>
     
      </section>
);
}

export default Search;