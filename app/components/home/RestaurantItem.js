import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'



export default function RestaurantItem({restaurantData}) {
    return (
        <View>
            {restaurantData.map((restaurant, index) => (
                <TouchableOpacity activeOpacity={0.7} key={index}>
                    <View style={{ borderRadius: 25, backgroundColor: COLORS.white, marginTop: 10, padding: 15, marginHorizontal: 5 }}

                    >
                        <RestaurantImage image_url={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const RestaurantImage = ({ image_url }) => (
    <>
        <Image source={{ uri: image_url }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color={COLORS.primary} />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = ({ name, rating }) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 13, color: COLORS.darkgray }}>30-45 • 45min</Text>
        </View>
        <View style={{ backgroundColor: COLORS.darkGray, height: 30, width: 30, alignItems: "center", borderRadius: 15, }}>
            <Text style={{ fontWeight: "500" }}>{rating}</Text>
            <AntDesign name="staro" size={20} color={COLORS.primary} />
        </View>

    </View>
)