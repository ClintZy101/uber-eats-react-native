import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItem from '../components/home/RestaurantItem'
import SearchBar from '../components/home/SearchBar'
import { COLORS } from '../constants/theme'
import { localRestaurants } from '../api/index'
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";


export default function Home() {
    const [restaurantData, setRestaurantData] = useState([localRestaurants])
    const [location, setLocation] = useState("");
    const [activeTab, setActiveTab] = useState("Delivery")

    const getRestaurantsByTab = async() => {
        if(location){
            let restaurants = localRestaurants.filter(data=> data.location === location.toLowerCase())
            let filteredRestaurants = restaurants.filter(data => data.transactions.includes(activeTab.toLowerCase()))
          await  setRestaurantData(filteredRestaurants)
        } else{
            let filteredRestaurants = localRestaurants.filter(data=> data.transactions.includes(activeTab.toLowerCase()))
            await setRestaurantData(filteredRestaurants)
        }
            
    }
  

    useEffect(() => {
        getRestaurantsByTab()
    }, [activeTab, location])
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.lightGray, flex: 1 }}>
            <View style={{ backgroundColor: COLORS.white, padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar setLocation={setLocation} />
            </View>
            <ScrollView>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}