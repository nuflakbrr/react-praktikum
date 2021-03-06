import React, { useState } from 'react'

import Alert from './Alert'
import Modal from './Modal'
import TextInput from './TextInput'

function FormKonversiBiner() {
    const [biner, setBiner] = useState(0)
    const [option, setOption] = useState(0)
    const [hasil, setHasil] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const binerToDecimal = parseInt(biner, 2)

        if (option === 'desimal') {
            setHasil(binerToDecimal)
        } else if (option === 'oktal') {
            setHasil(binerToDecimal.toString(8))
        } else if (option === 'heksadesimal') {
            setHasil(binerToDecimal.toString(16))
        }
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Konversi Bilangan Biner</h2>
                    <button className='btn btn-dark badge ms-3' data-bs-toggle='modal' data-bs-target='#Biner'><i className='bi bi-info-circle-fill'></i></button>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Biner' type='number' onChange={(e) => setBiner(e.target.value)} value={biner} id='biner' placeholder='Silakan masukkan nominal disini' />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Pilih Bilangan</label>
                        <select className='form-select' id='option' onChange={(e) => setOption(e.target.value)} value={option}>
                            <option value='oktal'>Oktal</option>
                            <option value='desimal'>Desimal</option>
                            <option value='heksadesimal'>Heksadesimal</option>
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
            <Modal title='Tentang Kalkulator Konversi Biner' id='Biner' content='Kalkulator Konversi Bilangan Sistem Biner adalah alat bantu hitung untuk mengkonversi bilangan sistem dari Biner ke Oktal, Desimal, ataupun Heksadesimal.' />
        </>
    )
}

export default FormKonversiBiner