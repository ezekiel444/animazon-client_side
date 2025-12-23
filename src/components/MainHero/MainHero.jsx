import React from 'react'
import "./MainHero.css"
import animals from "../../assets/images"
import {Container} from "reactstrap"
import {useQuery, gql} from '@apollo/client'


function MainHero() {

    const cardInfo = useQuery(gql`
    query{
        mainCards{
            title,
            image
        }
    }
    `)

    const {data, loading, error}= cardInfo

    if(loading) return <h3>Loading</h3> 
   if (error) return <h3>error, something is wrong</h3>


    return (
        <div className="MainHero">
            <Container>
                    <div className="header-container">
                        <h2>Find your <br/> new four-legged <br/> best friend</h2>
                        <img src={animals.rhino} />
                    </div>
                    <div className="cards-container">
                        {data.mainCards.map((card, index) => {
                            return (
                                <div className="card" key={index}>
                                    <h3>{card.title}</h3>
                                    <img src={animals[card.image]} style={{width: "100%"}}/>
                                </div>
                            )
                        })}
                    </div>
            </Container>
        </div>
    )
}

export default MainHero
