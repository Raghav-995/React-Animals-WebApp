import { useEffect } from "react";
import { useState, useRef } from "react";
import '../App.css';

export  function useOnHoverOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mouseover", listener);
      return () => {
        document.removeEventListener("mouseout", listener);
      };
    },
    [ref, handler]
  );
}
export function Menu() {
 const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); 
    return (
        <>
            <div className="dropdown-content" >
           <ul><li><a href='/M'>1.Mammals</a></li>
           <li><a href='/B'>2.Birds</a></li>
<li><a href='/R'>3.Reptiles</a></li>
<li><a href='/F'>4.Fish</a></li>
<li><a href='/A'>5.Amphibians</a></li>
	    </ul>
            </div>
        </>
    )
}
