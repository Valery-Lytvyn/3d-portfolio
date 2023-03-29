import React from 'react';
import './worksSection.scss';


function WorksSection() {

   const worksArr = [
      "Web Design",
      "Development",
      "Illustration",
      "Product Design",
      "Social Media",
   ];
   return (
      <section className='worksSection'>
         <ul className='worksList'>
            {worksArr.map((item) => (
               <li className='workItem' key={item}>
                  {item}
               </li>
            ))}
         </ul>
      </section>
   )
}

export default WorksSection