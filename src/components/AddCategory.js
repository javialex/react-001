import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    //const [inputValue, setInputValue] = useState(); <-- Valor undefined si va vacío dentro de los paréntesis
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length > 2) {
            setCategories(cats=>[inputValue,...cats,]);
            setInputValue('');        
        }
    }
    //No es necesario usar fragment (<>) debido a que ya introdujimos un agrupador (form)
    return (            
    <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
    </form>    
  )
}
AddCategory.propTypes = {
    //Definiendo una propiedad de tipo string y valor requerido siempre
    setCategories: PropTypes.func.isRequired
}
