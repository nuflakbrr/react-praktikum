import React, { useState } from 'react'

import Alert from './Alert'
import Modal from './Modal'
import TextInput from './TextInput'

function FormKonversiHeksa() {
    const [heksa, setHeksa] = useState(0)
    const [option, setOption] = useState(0)
    const [hasil, setHasil] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const heksaToDecimal = parseInt(heksa, 16)

        if (option === 'desimal') {
            setHasil(heksaToDecimal)
        } else if (option === 'oktal') {
            setHasil(heksaToDecimal.toString(8))
        } else if (option === 'biner') {
            setHasil(heksaToDecimal.toString(2))
        }
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Konversi Bilangan Heksadesimal</h2>
                    <button className='btn btn-dark badge ms-3' data-bs-toggle='modal' data-bs-target='#Heksa'><i className='bi bi-info-circle-fill'></i></button>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Heksadesimal' type='text' onChange={(e) => setHeksa(e.target.value)} value={heksa} id='biner' placeholder='Silakan masukkan nominal disini' />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Pilih Bilangan</label>
                        <select className='form-select' id='option' onChange={(e) => setOption(e.target.value)} value={option}>
                            <option value='biner'>Biner</option>
                            <option value='oktal'>Oktal</option>
                            <option value='desimal'>Desimal</option>
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
            <Modal title='Tentang Kalkulator Konversi Heksadesimal' id='Heksa' content='Kalkulator Konversi Bilangan Sistem Heksadesimal adalah alat bantu hitung untuk mengkonversi bilangan sistem dari Heksadesimal ke Biner, Oktal, ataupun Desimal.' />
        </>
    )
}

export default FormKonversiHeksa