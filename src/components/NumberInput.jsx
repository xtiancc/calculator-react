import React from 'react'
import PropTypes from 'prop-types'

const NumberInput = ({name, numbers, modifyNumbers}) => {

    const handleChange = (e) => {
        modifyNumbers({
            ...numbers,
            [e.target.name]: parseFloat(e.target.value)
        }       
        )
    }

    return (
        <div className="w-50 m-auto">
            <input className="form-control mb-3" value={numbers[name]} name={name} onChange={handleChange} type="number"/>
        </div>
    )
}

NumberInput.propTypes = { 
    name: PropTypes.string,
    numbers: PropTypes.object,
    modifyNumbers: PropTypes.func
}

export default NumberInput;