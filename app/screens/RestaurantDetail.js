import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/restaurantDetails/About'
import MenuItem from '../components/restaurantDetails/MenuItem'


export default function RestaurantDetail() {
    return (
        <View>
             <About />
            <Divider width={1.8} style={{marginVertical: 20}}/>
            <MenuItem />
        </View>
    )
}
