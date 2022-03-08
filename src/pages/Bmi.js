import React from 'react'

import Main from '../layouts/Main'
import FormBMI from '../components/FormBMI'
import SEO from '../components/SEO'

const Bmi = () => {
    return (
        <>
            <SEO title='Kalkulator BMI | Naufal Akbar Nugroho' desc='Salah satu studi kasus alat hitung BMI oleh Naufal Akbar Nugroho' author='Naufal Akbar Nugroho' siteName='https://nuflakbrr-praktikum.vercel.app/' url='https://nuflakbrr-praktikum.vercel.app/bmi' />
            <Main>
                <FormBMI />
            </Main>
        </>
    )
}

export default Bmi