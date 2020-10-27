import React from 'react';
import s from './Navbar.module.css';

//let s = {
//  'nav': 'Navbar_nav__2Ug6Y',
//  'item': 'Navbar_item__2rt6M'
//}

const Navbar = () => {
    return (
      <nav className={s.nav}>
          <div className={s.item}>
            <a>Profile</a> 
          </div>
          <div className={s.item}>
          <a>Message</a> 
          </div>
          <div className={s.item}>
            <a>News</a> 
          </div>
          <div className={s.item}>
          <a>Music</a> 
          </div>
          <div className={s.item}>
          <a>Settings</a> 
          </div>
        </nav>
    );
}

export default Navbar;