import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = ()=>{
    const key = 'CvVMtvfnq2LfieDApqLKLZtOVAd5ZV1y';

    //este es el hook con las categorias ingresadas
    const [categories , setcategories ] = useState(['goku', 'mob psycho 100'])
    const agregaCat = ()=>{
        setcategories([...categories,"Shrek"]);
    }
    return (
        <>
            {/*La app de react se dividen en 3 partes*/}

            {/* titulo */}
                <h1>Hola Mundo</h1>

            {/*input*/}
            <AddCategory/>
            <button onClick={agregaCat}>Agregar Categoria</button>
            {/*contenido resultado*/}
            <ol>
                {/* iterar categories */}
                {/* cuando se construyen elementos de forma dinamica iterando objetos, obligado ponerles un key la cual debe ser unica */}
                {
                    categories.map(cat=>{
                        return <li key={cat}>{cat}</li>
                    })
                }
            </ol>
        </>
    );
}