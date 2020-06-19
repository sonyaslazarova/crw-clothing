import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/original.svg';
import "./header.style.scss";

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'></Logo>
    </Link>
    <div className='options'>
      <div className='option'><Link className='option' to='/shop'>SHOP</Link></div>
      <div className='option'><Link className='option' to='/shop'>Contact</Link></div>
    </div>   
  </div>
)

export default Header;