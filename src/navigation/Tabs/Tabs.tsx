import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tab1 } from "./Tab1";
import { Tab2 } from "./Tab2";
import { Text, TouchableOpacity } from "react-native";


const Tab = createBottomTabNavigator();
const FloatingButton = () => {
    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                bottom: 16,
                right: '50%',
                backgroundColor: 'blue',
                padding: 16,
                borderRadius: 50,
            }}
            onPress={() => {
                // Acciones al hacer clic en el botón flotante
                // Puedes navegar a otra pantalla o realizar cualquier acción necesaria
                console.log('Floating button clicked');
            }}>
            <Text style={{ color: 'white' }}>+</Text>
        </TouchableOpacity>
    );
};
export const Tabs = () => {
    return (
        <>
            <Tab.Navigator
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen name="Tab1" component={Tab1} />
                <Tab.Screen name="Tab2" component={Tab2} />

            </Tab.Navigator>
            <FloatingButton />
        </>

    )
}