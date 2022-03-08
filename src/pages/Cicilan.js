import React from 'react'

import Main from '../layouts/Main'
import FormCicilan from '../components/FormCicilan'
import SEO from '../components/SEO'

const Cicilan = () => {
    return (
        <>
            <SEO title='Kalkulator Cicilan Bank | Naufal Akbar Nugroho' desc='Salah satu studi kasus alat hitung Cicilan Bank oleh Naufal Akbar Nugroho' author='Naufal Akbar Nugroho' siteName='https://nuflakbrr-praktikum.vercel.app/' url='https://nuflakbrr-praktikum.vercel.app/cicilan' />
            <Main>
                <FormCicilan />
            </Main>
        </>
    )
}

export default Cicilan