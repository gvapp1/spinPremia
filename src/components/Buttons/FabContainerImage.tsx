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

export const FabContainerImage = ({ imagePath, title, onPress, subtitle, style = {} }: Props) => {
    const img = itemsImage.find((item) => item.name === imagePath);
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

    console.log(screenWidth);

    return (
        <View style={{
            width: screenWidth - 50,
            top: 50,
            left: 20,
            height: 100, justifyContent: 'center',
            borderRadius: 15, backgroundColor: 'red'
        }}>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
                <View style={styles.containerButton}>
                    <Image source={img?.img} style={styles.containerImage} />
                </View>
                <View >
                    <Text style={styles.title}>{title}</Text>
                    <Text style={{ fontSize: 16, width: screenWidth-180}}>{subtitle}</Text>
                </View>               
                <Icon name="chevron-forward-outline" size={30} color="black" />
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
    containerButton: {
        height: 60,
        width: 60,
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
        color: 'black',
        fontWeight: '600',
        fontSize: 22,
    },
    subtitle: {
        fontSize: 18,
    },
});