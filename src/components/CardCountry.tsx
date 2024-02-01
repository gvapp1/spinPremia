import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import { MenuCountry } from '../interface/dataCountry';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    menuCountry: MenuCountry;
    onPress: (country: MenuCountry) => void;
}
export const CardCountry = ({ menuCountry, onPress }: Props) => {


    return (
        <TouchableOpacity onPress={() => onPress(menuCountry)}>
            <View style={styles.container}>
                <Icon name={menuCountry.icon} size={23} color="black" />
                <Text style={styles.itemText}>{menuCountry.name}</Text>
                <View style={{ flex: 1 }}></View>
                <Icon name="chevron-forward-outline" size={23} color="black" />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 10, paddingTop: 20
    },
    itemText: {
        marginLeft: 5,
        fontSize: 19
    }
});
