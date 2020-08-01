import React from 'react'
import { Link } from "react-router-dom"

const ButtonReturn = ({ ruta, btnStyles, text }) => {
    return (

        <div>
            <Link data-testid="anyButton" to={ruta} className={btnStyles}> {text} </Link>
        </div>
    )
}

export default ButtonReturn