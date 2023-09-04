import React from "react";
import ani from '../ani.jpg';
import '../App.css';
import {Link} from 'react-router-dom';
import Search from './Search';
import initialDetails from '../data/initialDetails';

const Navbar = () => {

	return (
		<div className='nav'>
			<ul><li>
             <img src={ani} alt='animals' height={40} width={100} style={{margin:10}}/>
              </li>
                 <li>
                <Link to='blog'>
                    Animals</Link>
                  
</li>
                <li>
                   <Link to="photos" >
                   Photos
                  </Link>
                </li>
              
              <li><Link to="types">
                Types of Animals
             
		</Link></li>
		<li>
		 <Link to="faqs">
                   FAQs
                  </Link>
                </li>
<li>
<Search details={initialDetails}/></li>
		
	<div style={{
        float:'right'
       
      }}>
</div></ul>
            
		</div>
	);
}

export default Navbar;
