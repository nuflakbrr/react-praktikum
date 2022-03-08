import React from 'react'

import Main from '../layouts/Main'
import FormPajak from '../components/FormPajak'
import SEO from '../components/SEO'

const Pajak = () => {
    return (
        <>
            <SEO title='Kalkulator Pajak PPN | Naufal Akbar Nugroho' desc='Salah satu studi kasus alat hitung Pajak PPN oleh Naufal Akbar Nugroho' author='Naufal Akbar Nugroho' siteName='https://nuflakbrr-praktikum.vercel.app/' url='https://nuflakbrr-praktikum.vercel.app/pajak' />
            <Main>
                <FormPajak />
            </Main>
        </>
    )
}

export default Pajak