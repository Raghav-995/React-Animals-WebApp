import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ani from './ani.jpg';
import  {useState} from 'react';
import searchBar from './files/searchBar'
import Search from './components/Search';
import initialDetails from './data/initialDetails';
import Blog from './components/Blog';
const App=()=>{

return(
<div>
<ul><li>
<img src={ani} alt='animals' height={40} width={100} style={{margin:10}}/></li>
<li><a><span>Animals</span></a></li>
<li><a>Photos</a></li>
<li>
<a href="#">Types of Animals</a>
</li>
<li><a href='FAQ'>FAQ's</a></li>
<li><a href='/login' style={{position: 'absolute', right: 100}}>Login</a></li>
<li><a href='/signup' style={{position: 'absolute', right: 20}}>SignUp</a></li></ul>
<div className="tc bg-green ma0 pa4 min-vh-100">
   <Search details={initialDetails}/>
</div>
</div>
)
};




export default App;
