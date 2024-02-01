import React from "react";
import { Text, View } from "react-native";

interface Props {
    title: string;
}

export const HeaderTitle = ({ title }: Props) => {

    return (
        <View >
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'justify',                
            }}>{title}</Text>
        </View>
    )

}