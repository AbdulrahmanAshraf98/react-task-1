import React from 'react';
import "./style.css";

function About(){
    return (
        <section className="about">
             <div className="container">
                 <div className="title-center">
                     <h2>We've got what you need!</h2>
                 </div>
                 <p className="desc">
                 Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!
                 </p>
                 <button className="btn btn-white">Get Started!</button>
             </div>
        </section>
       
    );
}
export default About