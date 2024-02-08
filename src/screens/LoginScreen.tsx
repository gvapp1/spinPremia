import React, { useState } from "react";
import { Text, StyleSheet, Modal, View, Image, Dimensions } from "react-native";
import { StatusBar } from 'react-native';
import { FabIcon } from "../components/Buttons/FabIcon";
import theme from '../themes/theme';
import { FabImage } from "../components/Buttons/FabImage";
import { FabImageAbsolute } from "../components/Buttons/FabImageAbsolute";
import { FabContainerImage } from "../components/Buttons/FabContainerImage";
import { CardButton } from "../components/Buttons/CardButton";


export const LoginScreen = ({ navigation }: any) => {

    const { colors } = theme;


    return (
        <>
            <StatusBar backgroundColor="rgba(128, 128, 128, 0.4)" />
            <View style={{
                flexDirection: 'row', marginHorizontal: 20, justifyContent: 'flex-start',
                marginTop: 20
            }}>
                <FabIcon iconName="sparkles" text='' onPress={() => { navigation.navigate('LoginScreen') }}
                    style={{ backgroundColor: '#00B7C5', color: 'white' }} />
                <FabIcon iconName="grid" text='Todas' onPress={() => { navigation.navigate('LoginScreen') }}
                    style={{ backgroundColor: '#F5F5F7', color: '#3458C6' }} />

                <FabImage imagePath="volaris" text='Todas' onPress={() => { navigation.navigate('LoginScreen') }}
                    style={{ backgroundColor: 'black' }} />

                <FabImage imagePath="vix" text='ViX' onPress={() => { navigation.navigate('LoginScreen') }}
                    style={{ backgroundColor: 'orange' }} />

                <FabImage imagePath="oxxoGas" text='OXXO GAS' onPress={() => { navigation.navigate('LoginScreen') }}
                    style={{ backgroundColor: 'orange' }} />
            </View>

            {/* <FabImageAbsolute imagePath="celularDinero" text='Recarga de tiempo aire' onPress={() => { navigation.navigate('LoginScreen') }}
                    style={{ backgroundColor: 'white' }} />
                <FabImageAbsolute imagePath="spinPremiaCard" text='Recarga de tiempo aire' onPress={() => { navigation.navigate('LoginScreen') }}
                    style={{ backgroundColor: 'white' }} /> */}

            {/* <FabContainerImage imagePath="volaris"
                title='¡A la vuelta de tu vida!'
                subtitle='Disfruta todas las promos, servicios y experiencias OXXO'
                onPress={() => { navigation.navigate('LoginScreen') }}
                style={{ backgroundColor: 'white' }} />

            <FabContainerImage imagePath="oxxo"
                title='Factura tus tickets'
                subtitle='Agrega los tickets de tu tienda OXXO y crea tus facturas'
                onPress={() => { navigation.navigate('LoginScreen') }}
                style={{ backgroundColor: 'white' }} /> */}

            <CardButton imagePath="cardPromociones"
                title='Tus promos favoritas'
                subtitle='Cámbialas en tu tienda OXXO mas cercana'
                onPress={() => { navigation.navigate('LoginScreen') }}
                style={{ backgroundColor: 'white' }} />

        </>
    )
}

