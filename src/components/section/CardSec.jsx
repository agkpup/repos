// App.js

import React from 'react';
import Card from '../Card'; 


const CardSec=()=>{
return (
    <>
    <div >
       <div className="card-container">
         <Card
           gifUrl="seo.gif" 
           text="I am you SEO Engine"
         />
         <Card
           gifUrl="ad.gif" 
           text="Online Advertisement"
         />
         <Card
          gifUrl="ecom.gif" 
          text="E commerce partner"
        />
       </div>
    </div>
    </>
)
}
export default CardSec;
