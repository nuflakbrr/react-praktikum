import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    // get year now
    const year = new Date().getFullYear()

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4">
                    <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        Naufal Akbar
                    </Link>
                    <span className="text-muted">&copy; {year} nuflakbrr</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="https://github.com/nuflakbrr" target='_blank' rel='noreferrer'>
                            <i className="bi bi-github"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://instagram.com/kbrnugroho" target='_blank' rel='noreferrer'>
                            <i className="bi bi-instagram"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://twitter.com/nuflakbrr" target='_blank' rel='noreferrer'>
                            <i className="bi bi-twitter"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>

    )
}

export default Footer