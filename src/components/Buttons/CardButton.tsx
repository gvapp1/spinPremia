import React from "react";
import { View, Text, StyleProp, ViewStyle, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { itemsImage } from "../../data/images";
import Icon from 'react-native-vector-icons/Ionicons';


interface Props {
    imagePath: string;
    title: string;
    subtitle: string;
    onPress: () => void;
    style: StyleProp<ViewStyle> | any;
}

export const CardButton = ({ imagePath, title, onPress, subtitle, style = {} }: Props) => {
    const img = itemsImage.find((item) => item.name === imagePath);
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

    console.log(screenWidth);

    return (
        <View style={{
            width: screenWidth - 230,
            top: 50,
            left: 20,
            height: 180,
            //justifyContent: 'center',
            borderRadius: 15, backgroundColor: 'red'
        }}>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
                <View style={styles.containerButton}>
                    <Image source={img?.img} style={styles.containerImage} />
                </View>

                <Text style={styles.title}>{title}</Text>
                <Text style={{ fontSize: 16, width: screenWidth - 220 }}>{subtitle}</Text>
              
                <Image source={img?.img} style={{height:70, width:'100%', borderRadius:10}} />

            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
    },
    containerButton: {
        height: 25,
        width: 25,
        borderRadius: 100,
        marginRight: 10,
        marginLeft: 20,
        //top: -15,
    },
    containerImage: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    title: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        width: '80%'
    },
    subtitle: {
        fontSize: 18,
        color: 'white',
    },
});