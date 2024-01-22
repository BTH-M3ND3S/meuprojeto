import { useState } from "react";
function contador(props){
    const  [contador, setContador] = useState(0)
    
    function incrementar(props){
        setContador(contador + 1)
    }
    function dividir(props){
        setContador(contador / 2)
    }
    function voltar(props){
        setContador(contador - contador)
    }
        return(
            <>
            <div>{contador}</div>
            <button style={{color: 'red'}} className="contagem" onClick={incrementar}>contar</button>
            <button onClick={dividir}>dividir</button>
            <button onClick={voltar}>voltar a zero</button>
            </>
           
        )
}


export default contador;