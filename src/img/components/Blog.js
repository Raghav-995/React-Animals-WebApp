import React from 'react';
import '../App.css';
import an from '../an.jpg';
import logo from '../logo.svg';
import Animalvideo from '../img/Animalvideo.mp4';

const Blog=()=>{
return(
<><div className='b1'><div className='blo'>
    <img align='left' src={an}   alt="Avatar-woman" />
    <img  align='center' src={logo}   alt="Avatar-woman" />
<img align='right' src={an}   alt="Avatar-woman" />
<img  align='right' src={logo}   alt="Avatar-woman" />
<h1>Animals</h1>
   <div style={{padding:'40px',textAlign:'left'}}> 
    <p>Animals (or Metazoa) are living creatures with many cells.
 Animals get their energy from other living things.
 Usualy, they eat them or are parasites.
 Animals, plants, fungi, and some other living things have complex cells, 
so they are grouped together as eukaryotes.
he study of animals is called zoology.
Most animals are mobile, meaning they can move around.
 Animals take in oxygen, and give out carbon dioxide. Animals range in length from 8.5 micrometres (0.00033 in) to 33.6 metres (110 ft).
 They have complex interactions with each other and their environments, forming intricate food webs.
 The scientific study of animals is known as zoology.
Animals are categorised into ecological groups depending on
 how they obtain or consume organic material, including 
carnivores, herbivores, omnivores, detritivores, and parasites. Humans make use of many animal species, such as for food (including meat, milk, and eggs),for 
materials (such as leather and wool), as pets, and as working animals including for transport.</p></div>
  


  <div className="right">
   
   <center><Video/></center>

</div>
<div style={{padding:'40px',textAlign:'left'}}> 
    <p>Animals (or Metazoa) are living creatures with many cells.
 Animals get their energy from other living things.
 Usualy, they eat them or are parasites.
 Animals, plants, fungi, and some other living things have complex cells, 
so they are grouped together as eukaryotes.
he study of animals is called zoology.
Most animals are mobile, meaning they can move around.
 Animals take in oxygen, and give out carbon dioxide. Animals range in length from 8.5 micrometres (0.00033 in) to 33.6 metres (110 ft).
 They have complex interactions with each other and their environments, forming intricate food webs.
 The scientific study of animals is known as zoology.
Animals are categorised into ecological groups depending on
 how they obtain or consume organic material, including 
carnivores, herbivores, omnivores, detritivores, and parasites. Humans make use of many animal species, such as for food (including meat, milk, and eggs),for 
materials (such as leather and wool), as pets, and as working animals including for transport.</p></div>
  
  </div>
</div>
</>
)
};


const Video = () => {
  return (
   <iframe
      width="850"
      height="450"
      src={Animalvideo}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
  );
};

export default Blog;