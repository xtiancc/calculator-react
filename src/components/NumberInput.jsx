import React from 'react'
import PropTypes from 'prop-types'

const NumberInput = ({name, number, modifyNumber}) => {

    const handleChange = (e) => {
        modifyNumber(parseFloat(e.target.value));
    }

    return (
        <label>
            {name}: <input value={number} onChange={handleChange} type="number"/>
        </label>
    )
}

NumberInput.propTypes = { 
    name: PropTypes.string,
    modifyNumber: PropTypes.func
}

export default NumberInput;