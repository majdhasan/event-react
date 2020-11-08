import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function NavSupplier() {
  return (
    <div>
      <nav className='navbar navbar-expand-sm navbar-dark sticky-top'>
        <a className='navbar-brand' href='/'>
          Eventastic
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav ml-auto'>
           
            <li className='nav-item'>
              <Link className='nav-link js-scroll-trigger' to=''>
                I'm a Customer
              </Link>
            </li>
            <li className='nav-item'>
              <HashLink
                className='nav-link js-scroll-trigger'
                to={'#portfolio'}
              >
                Features
              </HashLink>
            </li>
            <li className='nav-item'>
              <Link className='nav-link js-scroll-trigger' to='/signup'>
                Sign up
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link js-scroll-trigger' to='login'>
                App
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
