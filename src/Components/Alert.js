import React from 'react'

const Alert = ({ alert }) => {
    return (

        alert && <div className={`alert alert-${alert.type} alert-dismissible fade show text-center`} role="alert">
            <strong className="text-capitalize">{alert.type} : </strong> {alert.message}
        </div>

    )
}

export default Alert
