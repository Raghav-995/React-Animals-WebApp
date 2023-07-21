import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import an from '../an.jpg';
import logo from '../logo.svg';
const Blog=()=>{
return(
<>
<div className='blo'>
<div className="split left">
  <div className='centered1'>
    <img   src={an}   alt="Avatar-woman" /></div>
<div className='centered2'>
    <img   src={logo}   alt="Avatar-woman" /></div>
<h1 style={{color:'Green', textShadow:" 2px 2px"}}>Animals</h1>
   <div style={{padding:'40px',textAlign:'left'}}> 
    <p >Animals (or Metazoa) are living creatures with many cells.
 Animals get their energy from other living things.
 Usualy, they eat them or are parasites.
 Animals, plants, fungi, and some other living things have complex cells, 
so they are grouped together as eukaryotes.</p>
<p>The study of animals is called zoology.
Most animals are mobile, meaning they can move around.
 Animals take in oxygen, and give out carbon dioxide.</p>
<p>Animals are categorised into ecological groups depending on
 how they obtain or consume organic material, including 
carnivores, herbivores, omnivores, detritivores, and parasites.</p></div>
  
</div>

<div class="split right">
  <div class="centered">
   
   <Video/>
  </div>
</div>
     
</div>
</>
)
};

const src = "https://www.youtube.com/embed/YqcOaxJCZr8";

const Video = () => {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
  );
};

export default Blog;