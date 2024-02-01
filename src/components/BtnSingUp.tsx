import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from "react-native";

interface Props {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const BtnSingUp = ({ title, onPress, style, disabled }: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.8}
            style={{ ...styles.button, ...style as any }}
            //  onPress={() => {
            //     if (!disabled) {
            //         onPress();
            //     }
            // }}
            onPress={onPress}
            disabled={disabled}>

            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        paddingVertical: 15,
        borderRadius: 100,
        alignItems: 'center',
        marginHorizontal: 25
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
});