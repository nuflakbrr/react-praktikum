import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

import TextInput from './TextInput'
import Alert from './Alert'

const FormBMI = () => {
    const [height, setHeight] = useState(1.0)
    const [mass, setMass] = useState(30)
    const [bmi, setBmi] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const formValid = height > 0 && mass > 0
        if (!formValid) {
            return
        }
        const bmi = mass / (height * height)
        setBmi(bmi)
    }

    return (
        <>
            <div className='card p-3'>
                <h2 className='text-center fw-bold'>Kalkulator BMI</h2>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Berat (ex: 60)' type='number' onChange={(e) => setMass(e.target.value)} id='weight' value={mass} placeholder='Silakan masukkan berat anda' min='30' extra='Kg' margin='me-3' />
                    </div>
                    <div className='form-group my-3'>
                        <TextInput label='Tinggi (ex: 1.7)' type='number' onChange={(e) => setHeight(e.target.value)} id='height' value={height} placeholder='Silakan masukkan tinggi anda' min='1' extra='Mt' margin='me-3' />
                    </div>
                    <hr />
                    <div className='d-flex align-items-end justify-content-end'>
                        <button type='submit' className='btn btn-dark'>Hitung BMI</button>
                    </div>
                </form>
            </div>
            <div className='card p-3 my-5'>
                <h2 className='text-center fw-bold'>Hasil</h2>
                {
                    bmi < 18.5 ? <Alert heading='Kekurangan Berat Badan (Kurus)' type='danger' icons='bi-exclamation-triangle-fill' />
                        : bmi < 25 ? <Alert heading='Berat Badan Normal' type='success' icons='bi-check-circle-fill' />
                            : bmi < 30 ? <Alert heading='Kelebihan Berat Badan (Gemuk)' type='warning' icons='bi-exclamation-triangle-fill' />
                                : <Alert heading='Obesitas' type='danger' icons='bi-exclamation-triangle-fill' />
                }
            </div>
        </>
    )
}

export default FormBMI