import React from "react";
import { View, Text, StyleProp, ViewStyle, StyleSheet, TouchableOpacity, Image } from "react-native";
import { itemsImage } from "../../data/images";

interface Props {
    imagePath: string;
    text: string;
    onPress: () => void;
    style: StyleProp<ViewStyle> | any;
}

export const FabImage = ({ imagePath, text, onPress, style = {} }: Props) => {
    const img = itemsImage.find((item) => item.name === imagePath);

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
            <View style={{ ...styles.containerButton, backgroundColor: style.backgroundColor }}>
                <Image source={img?.img} style={styles.containerImage} />
            </View>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerButton: {
        height: 40,
        width: 40,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    containerImage: {
        width: '100%',
        height: '100%',
        borderRadius: 100,

    },
    text: {
        color: 'black',
        //marginTop: 5,
        textAlign: 'center',
        fontWeight: '600'
    }
});