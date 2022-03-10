import React, { useState } from 'react'

import Alert from './Alert'
import Modal from './Modal'
import TextInput from './TextInput'

function FormKonversiOktal() {
    const [oktal, setOktal] = useState(0)
    const [option, setOption] = useState(0)
    const [hasil, setHasil] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const oktalToDecimal = parseInt(oktal, 8)

        if (option === 'desimal') {
            setHasil(oktalToDecimal)
        } else if (option === 'biner') {
            setHasil(oktalToDecimal.toString(2))
        } else if (option === 'heksadesimal') {
            setHasil(oktalToDecimal.toString(16))
        }
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Konversi Bilangan Oktal</h2>
                    <button className='btn btn-dark badge ms-3' data-bs-toggle='modal' data-bs-target='#Oktal'><i className='bi bi-info-circle-fill'></i></button>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Oktal' type='number' onChange={(e) => setOktal(e.target.value)} value={oktal} id='biner' placeholder='Silakan masukkan nominal disini' />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Pilih Bilangan</label>
                        <select className='form-select' id='option' onChange={(e) => setOption(e.target.value)} value={option}>
                            <option value='desimal'>Desimal</option>
                            <option value='heksadesimal'>Heksadesimal</option>
                            <option value='biner'>Biner</option>
                        </select>
                    </div>
                    <hr />
                    <div className='d-flex align-items-end justify-content-end'>
                        <button type='submit' className='btn btn-dark'>Hitung Konversi</button>
                    </div>
                </form>
            </div>
            <div className='card p-3 my-5'>
                <h2 className='text-center fw-bold'>Hasil</h2>
                <Alert heading={`Hasil akhir : ${hasil}`} icons='bi bi-info-circle-fill' type='info' />
            </div>
            <Modal title='Tentang Kalkulator Konversi Oktal' id='Oktal' content='Kalkulator Konversi Bilangan Sistem Oktal adalah alat bantu hitung untuk mengkonversi bilangan sistem dari Oktal ke Biner, Desimal, ataupun Heksadesimal.' />
        </>
    )
}

export default FormKonversiOktal