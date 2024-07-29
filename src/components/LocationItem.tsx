import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import Location from "../models/Location";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";

interface LocationItemProps {
    location: Location,
    onLocationSelected: () => void
}

const LocationItem: FunctionComponent<LocationItemProps> = ({location, onLocationSelected}) => {
    return (
        <TouchableOpacity style={styles.groupItemContainer} activeOpacity={0.4} onPress={onLocationSelected}>
            <View style={styles.groupItemInformationContainer}>
                <Text style={styles.groupItemInformationTitle}>{location.name}</Text>
                <Text style={styles.groupItemInformationDescription}>{location.description}</Text>
            </View>
            <Ionicons name="chevron-forward" size={28} style={styles.groupItemChevron}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    groupItemContainer: {
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 8,
        minHeight: 125,
        maxHeight: 350,

        marginBottom: 8,


        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",



        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    groupItemInformationContainer: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "70%"
    },
    groupItemInformationTitle: {
        marginBottom: 8
    }, 
    groupItemInformationDescription: {
        color: "#9C9C9C"
    },
    groupItemChevron: {
        justifyContent: 'center',
        alignItems: "center"
    }
})

export default LocationItem;