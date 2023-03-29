import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './navbar.scss';
import logo from '../../../assets/images/logo.png';
import Button from '../../button/Button';

function Navbar() {
   const navItems = ['Home', 'Studio', 'Works', 'Contacts']

   return (
      <div className='navbar pt-3'>
         <div className="linkSection">
            <div className="logo">
               <img src={logo} alt="logo" />
            </div>
            <ul className="navLink m-0 ms-4">
               {navItems.map((item, index) => (
                  <li className="navItem px-3" key={index}>
                     {item}
                  </li>
               ))}
            </ul>
         </div>
         <div className="searchSection">
            <div className="searchIcon me-3">
               <BsSearch />
            </div>
            <Button text='Hire Now' />
         </div>
      </div>
   )
}

export default Navbar