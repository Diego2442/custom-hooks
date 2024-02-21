import {useState} from 'react';

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    /* video 119 para lograr exponer métodos del hook */
    const incremento = ( value = 4) => {
        setCounter(counter + value);
    }

    const decremento = () => {
        if (counter === 0) return; 
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        //counter: counter,
        incremento,
        decremento,
        reset,
    }
}