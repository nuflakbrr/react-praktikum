import React, { useState } from 'react'

import TextInput from './TextInput'
import Alert from './Alert'
import Modal from './Modal'

function FormPajak() {
    const [nominal, setNominal] = useState(0)
    const [ppn, setPpn] = useState(0)
    const [diskon, setDiskon] = useState(0)
    const [total, setTotal] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const formValid = nominal > 0 && ppn > 0 && diskon > 0
        if (!formValid) {
            return
        }
        const total = nominal - (nominal * (ppn / 100)) - (nominal * (diskon / 100))
        setTotal(total)
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Kalkulator Pajak</h2>
                    <button className='btn btn-dark badge ms-3' data-bs-toggle='modal' data-bs-target='#Pajak'><i class='bi bi-info-circle-fill'></i></button>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Nominal (ex: 500000)' type='number' onChange={(e) => setNominal(e.target.value)} value={nominal} id='nominal' placeholder='Silakan masukkan nominal disini' />
                    </div>
                    <div className='form-group mb-3'>
                        <TextInput label='PPN (ex: 10)' type='number' onChange={(e) => setPpn(e.target.value)} value={ppn} id='tax' margin='me-3' min='10' extra='%' placeholder='Silakan masukkan nominal disini' />
                    </div>
                    <div className='form-group mb-3'>
                        <TextInput label='Diskon (ex: 25)' type='number' onChange={(e) => setDiskon(e.target.value)} value={diskon} id='discount' margin='me-3' extra='%' placeholder='Silakan masukkan nominal disini' />
                    </div>
                    <hr />
                    <div className='d-flex align-items-end justify-content-end'>
                        <button type='submit' className='btn btn-dark'>Hitung Pajak</button>
                    </div>
                </form>
            </div>
            <div className='card p-3 my-5'>
                <h2 className='text-center fw-bold'>Hasil</h2>
                <Alert heading={`Hasil akhir : Rp ${total}`} type='info' icons='bi bi-info-circle-fill' />
            </div>
            <Modal id='Pajak' title='Tentang Kalkulator Pajak' content='Kalkulator Pajak adalah alat bantu hitung Pajak (Pajak Penambahan Nilai). Pajak Pertambahan Nilai atau PPN adalah pungutan yang dibebankan atas transaksi jual-beli barang dan jasa yang dilakukan oleh wajib pajak pribadi atau wajib pajak badan yang telah menjadi Pengusaha Kena Pajak (PKP).' />
        </>
    )
}

export default FormPajak