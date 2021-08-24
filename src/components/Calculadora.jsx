import React, {useState} from 'react'
import NumberInput from './NumberInput';
import Resultado from './Resultado';

const Calculadora = () => {

    const [numbers, setNumbers] = useState({
        numberOne: 0,
        numberTwo: 0
    })

    return (
        <div>
            <NumberInput name="numberOne" numbers={numbers} modifyNumbers={setNumbers}/>
            <NumberInput name="numberTwo" numbers={numbers} modifyNumbers={setNumbers}/>

            <Resultado operacion="Suma" calculo={numbers.numberOne + numbers.numberTwo}/>
            <Resultado operacion="Resta" calculo={numbers.numberOne - numbers.numberTwo}/>
            <Resultado operacion="Multiplicación" calculo={numbers.numberOne * numbers.numberTwo}/>
            <Resultado operacion="División" calculo={numbers.numberOne / numbers.numberTwo}/>
        </div>
    )
}

export default Calculadora
