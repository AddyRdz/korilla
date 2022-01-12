import React from "react"

const Receipt = ({person, order, main, paid, hide, id}) => {
    return(
        <div onClick={ () => hide(id) } className={ paid ? "hidden": null } >
            <h1 className="person">{person}</h1>
                <ul className="order">
                    <li>{main}</li>
                </ul>
        </div>
    )
}

export default Receipt