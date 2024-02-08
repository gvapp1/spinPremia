import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../../screens/Tabs/HomeScreen";
import { PromotionsScreen } from "../../screens/Tabs/PromotionsScreen";


export type RootStackParams = {
    HomeScreen: undefined,   
    PromotionsScreen: undefined,
    //SignInScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const Tab1 = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PromotionsScreen" component={PromotionsScreen} />            
        </Stack.Navigator>
    )
}