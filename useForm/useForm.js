import {useState} from 'react';


export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = (evento) =>{
        //console.log(evento.target.value)
        const {target} = evento;
        const {value, name} = target;

        setFormState({
            ...formState,
            [name]: value, //propiedades computadas de los objetos
        });
    }

    const onCleanForm = () =>{
        
        setFormState(
            initialForm,
        );
    }

    return {
        ...formState, //Esta linea desestructura el objeto form, para que al momento de devolver el objeto ya se puedan desestructurar directamente los atributos
        formState,
        onInputChange,
        onCleanForm,
    }
}
