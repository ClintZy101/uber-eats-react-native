import React, { useState } from 'react'
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../constants/theme'


export default function HeaderTabs({activeTab, setActiveTab}) {
    

    return (
        <View style={styles.container}>
            <HeaderButton title="Delivery"  activeTab={activeTab} setActiveTab={setActiveTab}/>
            <HeaderButton title="Pickup"  activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>
    )
}

const HeaderButton = ({ title, activeTab, setActiveTab }) => (
        <TouchableOpacity
        onPress={()=> {setActiveTab(title)}}
        style={{
            borderRadius: 30,
            backgroundColor: activeTab === title ? COLORS.black : COLORS.white,
            paddingVertical: 6,
            paddingHorizontal: 16,
        }}
        >
            <Text style={{
                color: activeTab === title ? COLORS.white : COLORS.black,
                fontWeight: "bold",
                fontSize: 15
            }} activeTab={activeTab}>{title}</Text>
        </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },
})
