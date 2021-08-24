import React, {useState} from 'react'
import NumberInput from './NumberInput';
import Resultado from './Resultado';

const Calculadora = () => {

    const [numberOne, setnumberOne] = useState(0)
    const [numberTwo, setnumberTwo] = useState(0)

    return (
        <div>
            <NumberInput name="Número 1" number={numberOne} modifyNumber={setnumberOne}/>
            <NumberInput name="Número 2" number={numberTwo} modifyNumber={setnumberTwo}/>

            <Resultado operacion="Suma" calculo={numberOne+numberTwo}/>
            <Resultado operacion="Resta" calculo={numberOne-numberTwo}/>
            <Resultado operacion="Multiplicación" calculo={numberOne*numberTwo}/>
            <Resultado operacion="División" calculo={numberOne/numberTwo}/>
        </div>
    )
}

export default Calculadora
