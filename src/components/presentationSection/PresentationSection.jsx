import React from 'react';
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AiOutlineMinus } from 'react-icons/ai';
import Cube from '../cube/Cube';

import './presentationSection.scss';


function PresentationSection() {
   return (
      <section className='presentationSection'>
         <div className='presentationPictureWrap'>
            <div className="presentationPicture">

            </div>
         </div>
         <div className="presentationMotto">
            <h2>Think outside the square space</h2>
            <div className='subtitle'>
               <AiOutlineMinus />
               <div className="slogan ps-1">
                  Who I am
               </div>
            </div>
            <div className='subtitleText py-3'>
               Creative developer. With passion for his work.
            </div>
         </div>
      </section>
   )
}

export default PresentationSection