import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

export const InputCode = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [textNumber, setTextNumber] = useState('');
    const onChangeText = (value: string) => {       
        setTextNumber(value);
    };
    return (
        
        <View>
            <TextInput style={{ height: 40, fontSize: 30, marginBottom:20, fontWeight:'bold' }} 
            placeholder={isFocused ? '' : '0'} 
            textAlign="center" maxLength={1} keyboardType="number-pad"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={textNumber}
            onChangeText={value => onChangeText(value)}
             />
            <View style={styles.containerLineModal}>
                <View style={styles.lineModal}>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    containerLineModal: {
        marginTop: 10,
        alignItems: 'center'
    },
    lineModal: {
        backgroundColor: '#3F3F3F',
        width: 60,
        height: 1,
        borderRadius: 10
    },
});
