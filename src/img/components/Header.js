import ani from '../ani.jpg';
import { useState, useRef } from "react";
import {Menu,useOnHoverOutside} from "./useOnHoverOutside";
import '../App.css';


export default function Header() {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

 return (
   <div>
        <ul><li>
<img src={ani} alt='animals' height={40} width={100} style={{margin:10}}/></li>
<li><a href='/#'><span>Animals</span></a></li>
<li><a href='/#'>Photos</a></li>
<li><div className='dropdown' ref={dropdownRef}>
             
             <button
              className="bu"
              onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
            >
             <li> Types of Animals</li>
            </button>

            {isMenuDropDownOpen && <Menu />} 
             
</div></li>

<li><a href='FAQ'>FAQ's</a></li>
<li><a href='/login' style={{position: 'absolute', right: 100}}>Login</a></li>
<li><a href='/signup' style={{position: 'absolute', right: 20}}>SignUp</a></li></ul>

</div>
);
}