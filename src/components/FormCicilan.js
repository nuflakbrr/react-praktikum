import React, { useState } from 'react'

import TextInput from './TextInput'
import Modal from './Modal'
import Alert from './Alert'

function FormCicilan() {
    const [nominal, setNominal] = useState(0)
    const [bunga, setBunga] = useState(0)
    const [periode, setPeriode] = useState(0)
    const [hasil, setHasil] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const formValid = nominal > 0 && bunga > 0 && periode > 0
        if (!formValid) {
            return
        }
        const cicilan = nominal / periode + ((nominal / periode) * (bunga / 100))
        setHasil(cicilan)
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Kalkulator Cicilan Bank</h2>
                    <button className='btn btn-dark badge ms-3' data-bs-toggle='modal' data-bs-target='#Cicilan'><i class='bi bi-info-circle-fill'></i></button>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Nominal (ex: 5000000)' onChange={(e) => setNominal(e.target.value)} value={nominal} id='nominal' type='number' placeholder='Silakan masukkan nominal disini' />
                    </div>
                    <div className='form-group mb-3'>
                        <TextInput label='Bunga (ex: 25)' onChange={(e) => setBunga(e.target.value)} value={bunga} type='number' placeholder='Silakan masukkan nominal disini' margin='me-4' extra='%' />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Periode</label>
                        <div className='d-flex align-items-center'>
                            <select className='form-select me-3' onChange={(e) => setPeriode(e.target.value)} value={periode}>
                                <option selected disabled>Pilih Bulan</option>
                                <option value='1'>1 Bulan</option>
                                <option value='2'>2 Bulan</option>
                                <option value='3'>3 Bulan</option>
                                <option value='4'>4 Bulan</option>
                                <option value='5'>5 Bulan</option>
                                <option value='6'>6 Bulan</option>
                                <option value='7'>7 Bulan</option>
                                <option value='8'>8 Bulan</option>
                                <option value='9'>9 Bulan</option>
                                <option value='10'>10 Bulan</option>
                                <option value='11'>11 Bulan</option>
                                <option value='12'>12 Bulan</option>
                            </select>
                            <span>bln</span>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex align-items-end justify-content-end'>
                        <button type='submit' className='btn btn-dark'>Hitung Cicilan</button>
                    </div>
                </form>
            </div>
            <div className='card p-3 my-5'>
                <h2 className='text-center fw-bold'>Hasil</h2>
                <Alert heading={`Hasil akhir : Rp ${hasil}`} type='info' icons='bi bi-info-circle-fill' />
            </div>
            <Modal id='Cicilan' title='Tentang Kalkulator Cicilan Bank' content='Kalkulator Cicilan Bank adalah alat bantu hitung Cicilan Bank (Kredit). Berdasarkan UU No. 10 tahun 1998, kredit bank adalah "penyediaan uang atau tagihan yang dapat dipersamakan dengan itu, berdasarkan persetujuan atau kesepakatan pinjam meminjam antara bank dengan pihak lain yang mewajibkan pihak peminjam untuk melunasi utangnya setelah jangka waktu tertentu dengan pemberian bunga".' />
        </>
    )
}

export default FormCicilan