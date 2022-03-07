import React from 'react'

import Main from '../layouts/Main'

const Home = () => {
    return (
        <>
            <Main>
                <div className='container my-5'>
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">Selamat Datang di Tugas Praktikum 1 React.js <br /> Selamat Menikmati Project Ini! 😄</p>
                    <hr className="my-4" />
                    <a className="btn btn-dark btn-lg" href="https://github.com/nuflakbrr/react-praktikum" role="button">Source Code</a>
                </div>
            </Main>
        </>
    )
}

export default Home