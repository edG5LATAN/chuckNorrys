import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header-icon'>
        <img src="img/iconoChuck.png" alt="icono header"/>
      </div>
      <nav>
        <ul>
         <li>The best Joks of CHUCK NORRYS</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
