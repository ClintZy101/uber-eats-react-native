import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { COLORS } from '../../constants/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar({setLocation}) {
    return (
        <View style={{
            marginTop: 15,
            flexDirection: "row"
        }}>
            <GooglePlacesAutocomplete
            onPress={(data, details = null)=>{
                const loc = data.description
                setLocation(loc)
                // console.log(city)
            }}
                query={{ key: "AIzaSyABWQxZHAAyDp63rHCciU3gYD-rSzhVnuA" }}
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: COLORS.lightGray,
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: COLORS.lightGray,
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 5,
                        marginRight: 15
                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name='location-sharp' size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 8,
                            backgroundColor: COLORS.white,
                            padding: 9,
                            borderRadius: 30,
                            alignItems: "center"
                        }}
                    >
                        <AntDesign name='clockcircle' size={11} style={{ marginRight: 6 }} />
                        <Text>Search</Text>
                    </View>
                )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})
