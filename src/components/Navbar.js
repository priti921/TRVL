import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closedMobileMenu = () => setClick(false);

  return (

    <>
        <nav className='navbar'>
            <div className="nav-container">

                <Link to="/" className="navbar-logo">
                    TRAVEL <i class="fa-solid fa-earth-americas"></i>
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                {/* NAV ITEMS */}

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closedMobileMenu}>
                      Home
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closedMobileMenu}>
                      Services
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closedMobileMenu}>
                      Products
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closedMobileMenu}>
                      Sign-up
                    </Link>
                  </li>

                </ul>

            </div>
        </nav>
    </>

  )

}

export default Navbar