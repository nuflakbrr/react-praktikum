import React from 'react'

import FormKonversiHeksa from '../components/FormKonversiHeksa'
import SEO from '../components/SEO'
import Main from '../layouts/Main'

function KonversiHeksa() {
    return (
        <>
            <SEO title='Kalkulator Konversi Heksadesimal | Naufal Akbar Nugroho' desc='Salah satu studi kasus alat hitung Konversi Bilangan Sistem oleh Naufal Akbar Nugroho' author='Naufal Akbar Nugroho' siteName='https://nuflakbrr-praktikum.vercel.app/' url='https://nuflakbrr-praktikum.vercel.app/konversi/heksadesimal' />
            <Main>
                <FormKonversiHeksa />
            </Main>
        </>
    )
}

export default KonversiHeksa