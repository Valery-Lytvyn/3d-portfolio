import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import Button from '../../button/Button';
import './titleChapter.scss';
import astronaut from '../../../assets/images/astronaut.png';

function TitleChapter() {
   return (
      <div className='titleChapter'>
         <div className="titleMotto">
            <h1>Think. Make. Solve.</h1>
            <div className='subtitle'>
               <AiOutlineMinus />
               <div className="slogan ps-1">
                  What I Do
               </div>

            </div>
            <div className='subtitleText py-3'>
               I like creating great, human-centered digital experiences.
            </div>
            <Button text={'Learn More'} />
         </div>
         <div className='titlePictureWrap'>
            <div className="titlePicture">
               <img className='astronautPic' src={astronaut} alt="astronaut" />
            </div>
         </div>
      </div>
   )
}

export default TitleChapter