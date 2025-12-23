import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import {gql, useQuery, useMutation} from '@apollo/client'


const ADD_animal_QUERY = gql`

mutation addNewAnimal(
    $image:String!,
    $title:String!,
    $rating:Float!,
    $price:String!,
    $description:[String!]!,
    $slug:String!,
    $onSale:Boolean!,
    $category:String!,
    $stock:Int!
    
    ){

    addAnimal(
        image:$image,
        title:$title,
        rating:$rating,
        price:$price,
        description:$description,
        slug:$slug,
        onSale:$onSale,
        category:$category,
        stock:$stock
        ){
title,
image
    }
}

`

function LandingPage() {

    const [addAnimal] = useMutation(ADD_animal_QUERY)


const animalsInfo = useQuery(gql`
query{animals{id,image,title,rating,price,description,slug,stock,onSale}}
`)
 
const {data,error, loading} = animalsInfo

if(loading) return <h2>loading...</h2>
if(error) return <h2>error something loading</h2>


    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={data.animals}/>
            <button onClick={()=>{addAnimal({variables:{
                image:"matobirds",
                title:"bird",
                rating:4.5,
                price:"100",
                description:["best pet", "lovly pet"],
                slug:"bird",
                onSale:true,
                category:"2",
                stock:12
            }})}}>Add animal</button>
        </div>
    )
}

export default LandingPage


// image:"matobirds"
// title:"bird"
// rating:4.5
// price:"100"
// description:["best pet", "lovly pet"]
// slug:"bird"
// onSale:True
// category:"2"