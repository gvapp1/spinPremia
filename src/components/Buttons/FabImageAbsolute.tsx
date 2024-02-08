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
            width: 160, left: 100, height: 50, justifyContent: 'center',
            alignItems: 'center', borderRadius: 15, backgroundColor: 'red'
        }}>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
                <View style={{ ...styles.containerButton, 
                    // backgroundColor: style.backgroundColor
                    backgroundColor: 'transparent'
                     }}>
                    <Image source={img?.img} style={styles.containerImage} />
                </View>
                <Text style={styles.text}>{text}</Text> 
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'red',
        //justifyContent: 'center',
        alignItems: 'center',
        //textAlign: 'center',
        flexDirection: 'row',
        borderRadius: 100,
        //backgroundColor: 'green',
        
    },
    containerButton: {
        height: 40,
        width: 40,
        borderRadius: 100,
        //marginRight: 5
        marginRight:10,
        marginLeft: 20,
        top: -15,
    },
    containerImage: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    text: {
        color: 'black',
        //marginTop: 5,
        //textAlign: 'center',
        fontWeight: '600',
        width: 100,
        height: 30,
    }
});