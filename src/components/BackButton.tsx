import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
    onPress: () => void;
}
export const BackButton = ({ onPress }: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.backButton}
            onPress={onPress}>           
            <Icon name="chevron-back-outline" size={30} color="black" />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 10,
        bottom: 80,
        left: 10,
    }
});