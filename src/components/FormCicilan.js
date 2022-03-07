import React from 'react'

import TextInput from './TextInput'
import TextSelect from './TextSelect'

function FormCicilan() {
    return (
        <>
            <div className='card p-3'>
                <h2 className='text-center fw-bold'>Kalkulator Cicilan Bank</h2>
                <form>
                    <div className='form-group mb-3'>
                        <TextInput label='Nominal' />
                    </div>
                    <div className='form-group mb-3'>
                        <TextInput label='Bunga' />
                    </div>
                    <div className='form-group mb-3'>
                        <TextSelect label='Periode' margin='me-3' extra='bulan' />
                    </div>
                </form>
                <div className='d-flex align-items-end justify-content-end'>
                    <button type='submit' className='btn btn-dark'>Hitung Cicilan</button>
                </div>
            </div>
            <div className='card p-3 my-5'>
                <h2 className='text-center fw-bold'>Hasil</h2>
            </div>
        </>
    )
}

export default FormCicilan