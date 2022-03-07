import React from 'react'

function Alert({ heading, type, icons }) {
    return (
        <div>
            <div className={`alert alert-${type} alert-dismissible d-flex align-items-center`} role="alert">
                <div>
                    <div className='d-flex'>
                        <i className={`bi ${icons} me-2 fs-5`}></i>
                        <h4 className="alert-heading">{heading}</h4>
                    </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div >
    )
}

export default Alert