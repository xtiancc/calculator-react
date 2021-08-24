import React, {useState} from 'react'
import NumberInput from './NumberInput';
import Resultado from './Resultado';
import {operaciones} from '../helpers/operaciones'

const Calculadora = () => {

    const [numbers, setNumbers] = useState({
        numberOne: 0,
        numberTwo: 0
    })

    const {suma, resta, multiplicacion, division} = operaciones(numbers)

    return (
        <div>
            <NumberInput name="numberOne" numbers={numbers} modifyNumbers={setNumbers}/>
            <NumberInput name="numberTwo" numbers={numbers} modifyNumbers={setNumbers}/>

            <Resultado operacion="Suma" calculo={suma()}/>
            <Resultado operacion="Resta" calculo={resta()}/>
            <Resultado operacion="Multiplicación" calculo={multiplicacion()}/>
            <Resultado operacion="División" calculo={division()}/>
        </div>
    )
}

export default Calculadora
