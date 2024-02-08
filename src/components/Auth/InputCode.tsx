import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

interface Props {
    disabled: boolean;
    textNumber: string;
    onChange?: (text: string) => void;

}
export const InputCode = ({ onChange, disabled, textNumber }: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    return (

        <View style={{width:80}}>
            <TextInput style={{ height: 50, fontSize: 30,  fontWeight: 'bold'  }}
                placeholder={isFocused ? '' : '0'}
                textAlign="center" maxLength={1} keyboardType="number-pad"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={textNumber}              
                onChangeText={(text: string) => onChange!(text)}
                editable={!disabled}
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
        marginTop:15,
        alignItems: 'center'
    },
    lineModal: {
        backgroundColor: '#3454DB',
        width: 70,
        height: 1,
        borderRadius: 10,
        
    },
});
