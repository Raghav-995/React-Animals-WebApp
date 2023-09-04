import Search from './components/Search';
import initialDetails from './data/initialDetails';
import './App.css';
import Header from './components/Header';
import React from 'react';
import Blog from './components/Blog';
import ImageSliderAuto from './components/ImageSliderAuto';
import { ImageData } from './json/JsonData';
import FAQs from './components/FAQs';
import Cards from './components/Cards';


function App(){

return(
<> <Header/>
<Search details={initialDetails}/><Blog/><ImageSliderAuto ImageData={ImageData} SlideInterValTime={2000} />
<Cards/>
<FAQs/>

       </> 
);
}

export default App;