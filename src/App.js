
import React,{ Fragment } from 'react';
import Blog from './components/Blog';
import ImageSliderAuto from './components/ImageSliderAuto';
import { ImageData } from './json/JsonData';
import FAQs from './components/FAQs';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ScrollToTop from "react-scroll-to-top";

function App(){
const [loginUser, setLoginUser] = useState({});
return(
<> 


<Router>
      <Navbar />
      <Routes>
	<Route path='/' exact element={
  <Fragment>
    <Blog/>
 <ImageSliderAuto ImageData={ImageData} SlideInterValTime={2000} />
 <Cards/>
<FAQs/>
  </Fragment>}
/>
	 <Route path='/blog' exact element = { <Blog/> }/>
         <Route path='/photos' exact element = {  <ImageSliderAuto ImageData={ImageData} SlideInterValTime={2000} /> }/>
         <Route path='/types' exact element = {  <Cards/> }/>
         <Route path='/faqs' exact element = {  <FAQs/> }/>
      </Routes>
    </Router>
<div style={{ marginTop: "10vh" }} >
      <ScrollToTop smooth />  
        </div>
       </> 
);
}

export default App;