import React from 'react';
import './header.scss';
import Navbar from './navbar/Navbar';
import TitleChapter from './titleChapter/TitleChapter';

function Header() {
   return (
      <section>
         <Navbar />
         <TitleChapter />
      </section>
   )
}

export default Header