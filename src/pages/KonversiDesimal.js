import React from 'react'

import FormKonversiDesimal from '../components/FormKonversiDesimal'
import SEO from '../components/SEO'
import Main from '../layouts/Main'

function KonversiDesimal() {
    return (
        <>
            <SEO title='Kalkulator Konversi Desimal | Naufal Akbar Nugroho' desc='Salah satu studi kasus alat hitung Konversi Bilangan Sistem oleh Naufal Akbar Nugroho' author='Naufal Akbar Nugroho' siteName='https://nuflakbrr-praktikum.vercel.app/' url='https://nuflakbrr-praktikum.vercel.app/konversi/desimal' />
            <Main>
                <FormKonversiDesimal />
            </Main>
        </>
    )
}

export default KonversiDesimal