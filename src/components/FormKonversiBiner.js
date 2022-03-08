import React, { useState } from 'react'

import TextInput from './TextInput'

function FormKonversi() {
    const [biner, setBiner] = useState(0)
    const [convert, setConvert] = useState(0)
    const [hasil, setHasil] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const formValid = biner > 0 && convert > 0
        if (!formValid) {
            return
        }

    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Kalkulator Konversi Bilangan Biner</h2>
                    <button className='btn btn-dark badge ms-3' data-bs-toggle='modal' data-bs-target='#Konversi'><i class='bi bi-info-circle-fill'></i></button>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Biner' type='number' onChange={(e) => setBiner(e.target.value)} value={biner} id='biner' placeholder='Silakan masukkan nominal disini' />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Pilih Bilangan</label>
                        <select className='form-select' id='convert' onChange={(e) => setConvert(e.target.value)} value={convert}>
                            <option selected disabled>Pilih Sistem Bilangan</option>
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
                <p>hasil : {hasil}</p>
            </div>
        </>
    )
}

export default FormKonversi