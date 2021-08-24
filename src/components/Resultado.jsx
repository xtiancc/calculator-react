import React from 'react'
import PropTypes from 'prop-types'

const Resultado = ({operacion , calculo }) => {

    return (
        <div>
            <p><span className="fw-bold">{operacion}:</span> {calculo} </p>
        </div>
    )
}

Resultado.propTypes = {
    operacion: PropTypes.string,
    calculo: PropTypes.number
}

export default Resultado
