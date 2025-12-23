import React from 'react'
import Card from '../Card/Card'
import {Container} from "react-bootstrap"

function CardDisplay({animals}) {

    return (
        <div className="card-display">
            <Container className="card-display-container">
                {animals.map((animal,index) => {
                    return <Card animal={animal} key={index} />
                })}
            </Container>
        </div>
    )
}

export default CardDisplay
