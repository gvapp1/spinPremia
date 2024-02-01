import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
interface Props {
    title: string;
    onPress: () => void;
    color: string;
    nameIcon: string;
    disabled?: boolean;    
    style?: StyleProp<ViewStyle>;
}

export const BtnIconSingUp = ({ title, onPress, color, nameIcon, disabled, style,  }: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.8}
            style={{ ...styles.containerButton, ...style as any }}
            onPress={onPress}
            disabled={disabled}>            
            <Icon name={nameIcon} color={color} size={25} style={{ paddingLeft: 40, paddingRight: 20 }} />
            <Text style={{...styles.buttonText, color}}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',        
        borderWidth: 2,
        paddingVertical: 10,
        borderRadius: 100,
        alignItems: 'center',
        marginHorizontal: 25,
        marginVertical: 5,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
});