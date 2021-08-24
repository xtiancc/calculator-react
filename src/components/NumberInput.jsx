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
        <label>
            <input value={numbers[name]} name={name} onChange={handleChange} type="number"/>
        </label>
    )
}

NumberInput.propTypes = { 
    name: PropTypes.string,
    numbers: PropTypes.object,
    modifyNumbers: PropTypes.func
}

export default NumberInput;