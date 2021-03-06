import React from 'react'
import { View, Text, Image } from 'react-native'

const image= "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
const title = "Farmhouse Kitchen Filipino Cuisine"
const description= "Filipino • Comfort Food • $$ • 🎫 • 4 ⭐ (2900+)"

export default function About() {
    return (
        <View>
            <RestaurantImage image={image}/>
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props)=> (
    <Image source={{uri: props.image}} style={{width: "100%",height:180}} />
)

const RestaurantTitle = (props) => (
    <Text
    style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    }}
    >{props.title}</Text>
)
const RestaurantDescription = (props) => (
    <Text
    style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 16
    }}
    >{props.description}</Text>
)
