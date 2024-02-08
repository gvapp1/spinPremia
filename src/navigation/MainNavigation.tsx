import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { Sign } from "../screens/Sign";
import { LoginScreen } from '../screens/LoginScreen';
import { VerificationCodeScreen } from '../screens/VerificationCodeScreen';
import { Tabs } from './Tabs/Tabs';


const MainNavigator = () => {
    const Stack = createStackNavigator();
    const usuario = {
        id: '1',
        nombre: 'Juan',
        apellido: 'Perez',
        active: true,
    }
    return (
        <Stack.Navigator
            initialRouteName="WelcomeScreen"
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
                // headerStyle: {
                //     height: 30,
                //     backgroundColor: 'white',
                // },

            }}>
            {/* <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen name="WelcomeScreen" component={usuario.active ? Tabs : WelcomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen
                name="Sign"
                component={Sign}
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#F5F6FA', // Cambia el color de fondo del encabezado a blanco
                        //height: 30,
                    },
                    headerBackTitleVisible: false,
                    title: ''
                }}
            />
            <Stack.Screen name='VerificationCodeScreen' component={VerificationCodeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    );
}

export default MainNavigator;