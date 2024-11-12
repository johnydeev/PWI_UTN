import React from 'react'
import { useState } from 'react'

const EstadosScreen = () => {
    const [count,setCount] = useState(0)
    const [hiddenText, setHiddenText] = useState(false)

    const sumar = () => {
        setCount(count + 1)
    }
    const restar = () => {
        setCount(count - 1)
    }

    const handleShowHiddenText = () => {
        setHiddenText ( prevHiddenText => !prevHiddenText)
    }
    return (
        <div style={{margin:"30px"}}>
            <h1>ESTADOS</h1>
                <button onClick={sumar}>SUMAR</button>
                <span>{count}</span>
                <button onClick={restar}>RESTAR</button>
                <br/>
                <br/>
                <button onClick={handleShowHiddenText}>Abrir</button>
                {
                    hiddenText ? <span>Mensaje Oculto</span> : ""
                }
        </div>
        
    )
}

export default EstadosScreen