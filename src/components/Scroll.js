// src/components/Scroll.js

import React from 'react';

const Scroll = (props) => {
  return( 
    <div style={{overflow: 'hidden',textAlign:'center', height:'15vh'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;