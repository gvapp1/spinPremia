import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./Tab1";
import { PromotionsScreen } from "../../screens/Tabs/PromotionsScreen";



const StackTab2 = createStackNavigator<RootStackParams>();

export const Tab2 = () => {
    return (
        <StackTab2.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <StackTab2.Screen name="HomeScreen" component={PromotionsScreen} />
           
        </StackTab2.Navigator>
    )
}