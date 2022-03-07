import React from 'react'
import Modal from './Modal'

import TextInput from './TextInput'
import TextSelect from './TextSelect'

function FormCicilan() {
    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Kalkulator Cicilan Bank</h2>
                    <button className='btn btn-dark badge ms-3' data-bs-toggle='modal' data-bs-target='#Cicilan'><i class='bi bi-info-circle-fill'></i></button>
                </div>
                <form>
                    <div className='form-group mb-3'>
                        <TextInput label='Nominal' type='number' />
                    </div>
                    <div className='form-group mb-3'>
                        <TextInput label='Bunga' type='number' margin='me-4' extra='%' />
                    </div>
                    <div className='form-group mb-3'>
                        <TextSelect label='Periode' margin='me-3' extra='bln' />
                    </div>
                </form>
                <hr />
                <div className='d-flex align-items-end justify-content-end'>
                    <button type='submit' className='btn btn-dark'>Hitung Cicilan</button>
                </div>
            </div>
            <div className='card p-3 my-5'>
                <h2 className='text-center fw-bold'>Hasil</h2>
            </div>
            <Modal id='Cicilan' title='Tentang Kalkulator Cicilan Bank' content='Kalkulator CIcilan Bank adalah alat bantu hitung Cicilan Bank (Kredit). Berdasarkan UU No. 10 tahun 1998, kredit bank adalah "penyediaan uang atau tagihan yang dapat dipersamakan dengan itu, berdasarkan persetujuan atau kesepakatan pinjam meminjam antara bank dengan pihak lain yang mewajibkan pihak peminjam untuk melunasi utangnya setelah jangka waktu tertentu dengan pemberian bunga".' />
        </>
    )
}

export default FormCicilan