import React from "react"

function Receipt({person, order, main, paid, hide}){

    return(
        <div onClick={ () => hide (paid) } className={paid ? "hidden": null} >
            <h1 className="person">{person}</h1>
                <ul className="order">
                    <li>{main}</li>
                </ul>
        </div>
    )
}

export default Receipt