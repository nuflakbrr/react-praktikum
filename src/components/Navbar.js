import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import $ from 'jquery'
import Popper from 'popper.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // add class active to navbar item
    const activeClass = (path) => {
        return window.location.pathname === path ? "active" : ""
    }

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-3'>
                <div className='container'>
                    <Link className='navbar-brand fw-bold' to='/'>Naufal Akbar Nugroho</Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <Link className={`nav-link ${activeClass("/")}`} aria-current='page' to='/'>Beranda</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className={`nav-link ${activeClass("/bmi")}`} to='/bmi'>BMI</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className={`nav-link ${activeClass("/cicilan")}`} to='/cicilan'>Cicilan Bank</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className={`nav-link ${activeClass("/pajak")}`} to='/pajak'>Pajak PPN</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className={`nav-link ${activeClass("/konversi")}`} to='/konversi'>Konversi Bilangan</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Navbar