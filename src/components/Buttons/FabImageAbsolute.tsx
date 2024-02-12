import React from "react";
import { View, Text, StyleProp, ViewStyle, StyleSheet, TouchableOpacity, Image } from "react-native";
import { itemsImage } from "../../data/images";

interface Props {
    imagePath: string;
    text: string;
    onPress: () => void;
    style: StyleProp<ViewStyle> | any;
}

export const FabImageAbsolute = ({ imagePath, text, onPress, style = {} }: Props) => {
    const img = itemsImage.find((item) => item.name === imagePath);

    return (
        <View style={{
            width: 155, height: 50,           
             borderRadius: 15,
             backgroundColor: style.backgroundColor,
        }}>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
                <Image source={img?.img} style={styles.containerImage} />
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {       
        alignItems: 'center',       
        flexDirection: 'row',
        borderRadius: 100,       
    },
    containerImage: {        
        height: 40,
        width: 40,
        top: -15,
        borderRadius: 100,
        marginLeft: 15,
        backgroundColor: 'transparent'
    },
    text: {       
        color: 'black',
        marginTop: 5,
        textAlign: 'center',
        fontWeight: '600',
        width: 75,
        height: 30,
    }
});