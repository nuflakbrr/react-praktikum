import React from 'react'

import TextInput from './TextInput'

function FormKonversi() {
    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Kalkulator Konversi Bilangan Biner</h2>
                    <button className='btn btn-dark badge ms-3' data-bs-toggle='modal' data-bs-target='#Konversi'><i class='bi bi-info-circle-fill'></i></button>
                </div>
                <form>
                    <div className='form-group mb-3'>
                        <TextInput label='Biner' type='number' />
                    </div>
                    <div className='form-group mb-3'>

                    </div>
                </form>
            </div>
        </>
    )
}

export default FormKonversi