import React from 'react'

import FormKonversiOktal from '../components/FormKonversiOktal'
import SEO from '../components/SEO'
import Main from '../layouts/Main'

const KonversiOktal = () => {
    return (
        <>
            <SEO title='Kalkulator Konversi Oktal | Naufal Akbar Nugroho' desc='Salah satu studi kasus alat hitung Konversi Bilangan Sistem oleh Naufal Akbar Nugroho' author='Naufal Akbar Nugroho' siteName='https://nuflakbrr-praktikum.vercel.app/' url='https://nuflakbrr-praktikum.vercel.app/konversi/oktal' />
            <Main>
                <FormKonversiOktal />
            </Main>
        </>
    )
}

export default KonversiOktal