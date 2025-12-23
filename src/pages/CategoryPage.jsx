import React from 'react'
import { useParams } from "react-router-dom"
import { Container } from 'react-bootstrap'
import CardDisplay from '../components/CardDisplay/CardDisplay'
import {gql,useQuery} from '@apollo/client'

const FETCH_CATEGORY = gql`
query Get_Category($slug:String!){
    category(slug:$slug){
        id,
        image,
        category,
        animals{
            id,
            image,
            title,
            price
    }
}
}

`

function CategoryPage() {
    
    const { slug } = useParams()

    const {error, loading, data } = useQuery(FETCH_CATEGORY, {variables:{slug}})



    if(error) return <h2>error... page</h2>

    if(loading)return <h2>Loading...</h2>
console.log(data);

    return (
        <div className="py-5">
            <Container>
                <h1 className="text-capitalize">
                    {}
                    <CardDisplay 
                        animals={data.category.animals}
                    />
                </h1>
            </Container>
        </div>
    )
}

export default CategoryPage
