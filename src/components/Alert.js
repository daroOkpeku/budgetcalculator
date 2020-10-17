import React from 'react'

const Alert = ({ type, text }) => {
    console.log(type)
    return (
        <div className={`alert alert-${type}`}>
            {text}
        </div>
    )
}


export default Alert
