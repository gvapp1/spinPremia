import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity, Alert, StyleProp, ScrollView } from 'react-native';
import theme from '../themes/theme';
import { BtnSingUp } from "../components/BtnSingUp";
import { Carrusel } from "../components/Carrusel";

export const WelcomeScreen = ({ navigation }: any) => {
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
    const { colors } = theme;

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
            <View style={{ height: screenHeight * 0.59 }}>
                <Image source={require('../assets/spinPremia.jpeg')} style={{ width: screenWidth, height: '30%' }} />
                <Image source={require('../assets/astronauta.jpeg')} style={{ width: screenWidth, height: '70%' }} />
            </View>

            <View style={{ backgroundColor: colors.card, height: screenHeight * 0.41 }}>
                <View style={{ height: '40%' }}>
                    <Carrusel />
                </View>
                <View style={{ height: '60%' }}>
                    <BtnSingUp title="Crear cuenta" onPress={() => navigation.navigate('Sign')} style={{ backgroundColor: '#3454DB', }} />
                    <BtnSingUp title="Iniciar sesión" onPress={() => navigation.navigate('Sign')} style={{ marginTop: 10, borderColor: 'white' }} />
                    <Text style={{ color: 'white', textAlign: "center", marginHorizontal: 20, marginTop: 25 }}>
                        Al continuar, aceptas haber leído nuestros {' '}
                        <Text
                            style={{ textDecorationLine: 'underline', color: '#7380C9', fontWeight: 'bold' }}
                            onPress={() => Alert.alert('Términos y condiciones', 'Aquí van los términos y condiciones.')}>
                            Términos y Condiciones {' '}
                        </Text>
                        así como nuestro
                        <Text
                            style={{ textDecorationLine: 'underline', color: '#7380C9', fontWeight: 'bold' }}
                            onPress={() => Alert.alert('Aviso de privacidad', 'Aquí va el aviso de privacidad.')}>
                            Aviso de Privacidad
                        </Text>
                    </Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({

})