import React from "react";
import { View, Text, StyleProp, ViewStyle, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName: string;
    text: string;
    onPress: () => void;
    style: StyleProp<ViewStyle> | any;
}

export const FabIcon = ({ iconName, text, onPress, style = {} }: Props) => {
    return (
        <>
            <TouchableOpacity activeOpacity={0.8}
                onPress={onPress}
                style={styles.container}
            >
                <View style={{ ...styles.containerButton, backgroundColor: style.backgroundColor }}>
                    <Icon name={iconName}
                        color={style.color}
                        size={18}
                        style={{ transform: [{ rotate: '90deg' }] }}
                    />
                </View>
                {text && (
                    <Text style={styles.text}>{text}</Text>
                )}

            </TouchableOpacity>

        </>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerButton: {
        height: 40,
        width: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    text: {
        paddingTop:5,
        color: 'black',
        textAlign: 'center',
        fontWeight: '600'
    }
});