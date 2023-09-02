import React from 'react';
import './Hero.css';

const Hero =() => {
    return (
        <section id="hero-section" className="hero-wrapper">
           <div className="paddings innerWidth flexCenter hero-container">
               {/* left side */}
               <div className="flexColStart hero-left">
                   <div className="hero-title">
                       <div className="orange-circle"/>
                       <h1>
                           Literature
                       </h1>
                   </div>

                   <div className="flexColStart hero-des">
                       <span className="secondaryText">Literature is the treasure trove of human imagination, a gateway to distant realms 
                       and emotions, where words become bridges between authors and readers, and hearts connect across ages."</span>
                       <span className="secondaryText"><i>~ Mark Twain</i></span>
                   </div>
  
               </div>
                {/* right side */}
               <div className="flexCenter hero-right">
                   <div className="image-container">
                       <img src="./content-literature-hero-img.jpg" alt=" "/>
                   </div>
               </div>
            
            </div> 

        </section>
    )
}

export default Hero