import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
            "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
        title: "Tandoori Chicken",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
        price: "$19.20",
        image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
        title: "Chilaquiles",
        description:
            "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
        price: "$14.50",
        image:
            "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
        title: "Chicken Caesar Salad",
        description:
            "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
        price: "$21.50",
        image:
            "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
            "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
    },
];

export default function MenuItem() {
    return (
        <View>
            {foods.map((food, index) => (
                <View key={index}
                    style={{
                        padding: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <FoodInfo title={food.title} description={food.description} price={food.price} />
                    <FoodImage image={food.image}/>
                </View>
            ))}
        </View>
    )
}

const FoodInfo = (props) => (
    <View
    style={{width: 240}}
    >
        <Text
        style={styles.text}
        >{props.title}</Text>
        <Text>{props.description}</Text>
        <Text>{props.price}</Text>
    </View>
)

const FoodImage = (props) => (
<Image source={{ uri: props.image }} style={{ width: 100, height: 100, borderRadius: 15 }} />
)

const styles = StyleSheet.create({
    text:{
        margin:5,
        fontWeight: "400"
    }
})