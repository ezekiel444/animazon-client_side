import React from 'react'
import { Container } from 'react-bootstrap'
import animals from "../../assets/images"
import star from "../../assets/svg/star.svg"
import "./AnimalPage.css"
import { useParams } from "react-router-dom"
import {gql, useQuery} from '@apollo/client'

const FETCH_SPECIFIC_ANIMAL = gql`
query GET_ANIMAL($slug:String!){
    animal(slug:$slug){
        id,
        image,
        title,
        rating,
        price,
        description,
        slug,
        stock,
        onSale}

}
`

function AnimalPage() {

    const { slug } = useParams();
    
    const {data, loading, error} = useQuery(FETCH_SPECIFIC_ANIMAL,{variables:{slug}})
    
    if(error) return <h2>error... page</h2>

    if(loading)return <h2>Loading...</h2>


    const {
        image,
        title,
        rating,
        price,
        description,
        stock,
         } = data.animal



    return (
        <div className="py-5">
            <Container>
                <div className="d-flex">
                    <img className="product-img" src={animals[image]}  style={{marginRight: "1rem"}}/>
                <div className="text-container">
                        <h1>{title}</h1>
                        <div className="star-container">
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <div className="rating-stock-container">
                                <p>{rating} rating</p>
                                <p>{stock} in stock</p>
                            </div>
                            
                        </div>
                        <div className="about-container">
                            <h4>About this Animal</h4>
        {description.map((describe,index)=>{
            return <ul key={index}>
                <li>{describe}</li>
            </ul>
        })}
                        </div>
                    </div>
                    <div className="cart-container border">
                        <p className="price"><span>CAD$ {price}</span></p>
                        <p className="delivery-time" >FREE delivery: Thursday, Feb 25 Details
                            <button className="buy-now-btn" style={{marginTop: "2rem"}}>
                                Add to Cart
                            </button>
                            <button>
                                Buy Now
                            </button>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AnimalPage
