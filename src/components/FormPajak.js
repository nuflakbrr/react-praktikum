import React from 'react'

import TextInput from './TextInput'
import Modal from './Modal'

function FormPajak() {
    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Kalkulator Pajak</h2>
                    <button className='btn btn-dark badge ms-3' data-bs-toggle='modal' data-bs-target='#Pajak'><i class='bi bi-info-circle-fill'></i></button>
                </div>
                <form>
                    <div className='form-group mb-3'>
                        <TextInput label='Nominal' type='number' />
                    </div>
                    <div className='form-group mb-3'>
                        <TextInput label='PPN' margin='me-3' extra='%' />
                    </div>
                    <div className='form-group mb-3'>
                        <TextInput label='Diskon' margin='me-3' extra='%' />
                    </div>
                </form>
                <hr />
                <div className='d-flex align-items-end justify-content-end'>
                    <button type='submit' className='btn btn-dark'>Hitung Pajak</button>
                </div>
            </div>
            <div className='card p-3 my-5'>
                <h2 className='text-center fw-bold'>Hasil</h2>
            </div>
            <Modal id='Pajak' title='Tentang Kalkulator Pajak' content='Kalkulator Pajak adalah alat bantu hitung Pajak (Pajak Penghasilan). Pajak Pertambahan Nilai atau PPN adalah pungutan yang dibebankan atas transaksi jual-beli barang dan jasa yang dilakukan oleh wajib pajak pribadi atau wajib pajak badan yang telah menjadi Pengusaha Kena Pajak (PKP).' />
        </>
    )
}

export default FormPajak