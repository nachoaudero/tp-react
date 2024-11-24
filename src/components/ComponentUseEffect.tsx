import {useEffect, useState} from "react";

export const ComponentUseEffect = () => {
    const [state, setState] = useState(false);
    useEffect(() => {
        return () => {
            console.log("Componente desmontado");
        }
    }, []);

    useEffect(() => {
        console.log("Componente actualizado");
    }, [state]);
    return (
        <div>
            <p>Estado: {state ? "Es true" : "Es false"}</p>
            <button
                onClick={
                ()=>setState(!state)
            }>Cambiar estado</button>
        </div>
    )
}