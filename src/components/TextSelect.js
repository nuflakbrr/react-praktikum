import React from 'react'

function TextSelect({ label, value, margin, extra }) {
    return (
        <div>
            <label>{label}</label>
            <div className='d-flex align-items-center'>
                <select className={`form-select ${margin}`}>
                    <option>{value}</option>
                </select>
                <span>{extra}</span>
            </div>
        </div>
    )
}

export default TextSelect