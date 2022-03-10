import React, { useState } from 'react'

import Alert from './Alert'
import Modal from './Modal'
import TextInput from './TextInput'

function FormKonversiDesimal() {
    const [desimal, setDesimal] = useState(0)
    const [option, setOption] = useState(0)
    const [hasil, setHasil] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const decimalToBiner = parseInt(desimal, 10).toString(2)
        const decimalToOktal = parseInt(desimal, 10).toString(8)
        const decimalToHeksa = parseInt(desimal, 10).toString(16)

        if (option === 'biner') {
            setHasil(decimalToBiner)
        } else if (option === 'oktal') {
            setHasil(decimalToOktal)
        } else if (option === 'heksadesimal') {
            setHasil(decimalToHeksa)
        }
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Konversi Bilangan Desimal</h2>
                    <button className='btn btn-dark badge ms-3' data-bs-toggle='modal' data-bs-target='#Desimal'><i className='bi bi-info-circle-fill'></i></button>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Desimal' type='number' onChange={(e) => setDesimal(e.target.value)} value={desimal} id='biner' placeholder='Silakan masukkan nominal disini' />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Pilih Bilangan</label>
                        <select className='form-select' id='option' onChange={(e) => setOption(e.target.value)} value={option}>
                            <option value='heksadesimal'>Heksadesimal</option>
                            <option value='biner'>Biner</option>
                            <option value='oktal'>Oktal</option>
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
            <Modal title='Tentang Kalkulator Konversi Desimal' id='Desimal' content='Kalkulator Konversi Bilangan Sistem Desimal adalah alat bantu hitung untuk mengkonversi bilangan sistem dari Desimal ke Biner, Oktal, ataupun Heksadesimal.' />
        </>
    )
}

export default FormKonversiDesimal