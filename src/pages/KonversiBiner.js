import React from 'react'

import FormKonversiBiner from '../components/FormKonversiBiner'
import Main from '../layouts/Main'
import SEO from '../components/SEO'

const KonversiBiner = () => {
    return (
        <>
            <SEO title='Kalkulator Konversi Biner | Naufal Akbar Nugroho' desc='Salah satu studi kasus alat hitung Konversi Bilangan Sistem oleh Naufal Akbar Nugroho' author='Naufal Akbar Nugroho' siteName='https://nuflakbrr-praktikum.vercel.app/' url='https://nuflakbrr-praktikum.vercel.app/konversi/biner' />
            <Main>
                <FormKonversiBiner />
            </Main>
        </>
    )
}

export default KonversiBiner