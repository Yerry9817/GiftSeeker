import { useState } from "react";

export const AddCategory = ()=>{

    //este es el valor que va a tener el input y que se van a agregar a categories
    const [InputValue, setInputValue] = useState('');
    
    //para cambiar el valor del input al hook, se necesita hacer un onChange porque se podrian el input como 
    //readOnly
    const onChangeInputValue = (event)=>{
        setInputValue(event.target.value);
        console.log(InputValue);
        
    } 

    const onSubmitForm=(event)=>{
        event.preventDefault();
        console.log("Si");
        //add here code for onSubmit form
    }
    return (
        //se necesita que cuando se escriba y se presione enter se ejecute una funcion, un onSubmit
        <>
            <form action="submit" onSubmit={(event)=>{onSubmitForm(event)}}>
                <input type="text" placeholder="Type a category..." onChange={(event)=>{onChangeInputValue(event)}} />
            </form>
            
        </>
    );
}