import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import { COLORS } from '../constants/theme'

export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.lightGray, flex:1}}>
            <View style={{ backgroundColor: COLORS.white, padding: 15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})