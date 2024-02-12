import React from "react";
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import theme from '../../themes/theme';
import { FabIcon } from "../../components/Buttons/FabIcon";
import Icon from "react-native-vector-icons/Ionicons";
import { FabContainerImage } from "../../components/Buttons/FabContainerImage";
import { FabImage } from "../../components/Buttons/FabImage";
import { FabImageAbsolute } from "../../components/Buttons/FabImageAbsolute";
import { CardButton } from "../../components/Buttons/CardButton";

export const HomeScreen = ({ navigation }: any) => {
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
    const { colors } = theme;
    const user = {
        nombre: 'Omar',
        puntos: 220,
        puntosValor: 1000
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <ScrollView>
                {/* CONTENEDOR DE ENCABEZADO */}
                <View style={{
                    backgroundColor: colors.primary,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    width: screenWidth,
                    height: 160,
                    //justifyContent: 'center',
                    paddingTop: 30,
                    paddingHorizontal: 20,
                    marginBottom: 45
                }}>

                    <TouchableOpacity onPress={() => console.log('Hola')}
                        style={{ flexDirection: 'row', marginVertical: 40 }}>
                        <Image source={require("../../assets/volaris.jpg")}
                            style={{ width: 50, height: 50, borderRadius: 100 }}></Image>
                        <Text style={{ color: colors.text, paddingLeft: 10, fontSize: 26, fontWeight: 'bold' }}>¡Hola, {user.nombre}!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} activeOpacity={1}>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: colors.text,
                            borderRadius: 100,
                            height: 50,
                            width: screenWidth - 20,
                            position: 'absolute',
                            paddingLeft: 10,
                            paddingVertical: 5,
                            alignItems: 'center',
                        }}>

                            <FabIcon iconName="sparkles" text='' onPress={() => { console.log('Hola') }}
                                style={{
                                    backgroundColor: colors.primary,
                                    color: colors.text,
                                }} />
                            <Text style={{ color: 'black', fontSize: 20, marginHorizontal: 15 }}><Text style={{ fontWeight: 'bold' }}>{user.puntos}</Text> puntos</Text>
                            <Text style={{ color: 'gray', fontSize: 20, marginHorizontal: 15 }}>|</Text>
                            <Text style={{ color: 'gray', fontSize: 14, marginLeft: 15 }}>Valen ${user.puntos.toFixed(2)}</Text>
                            <View style={{ flex: 1 }}></View>
                            <Icon name="chevron-forward-outline" size={23} color="gray" style={{ marginRight: 20 }} />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* CONTENEDOR DE GANA PUNTOS */}
                <TouchableOpacity activeOpacity={0.8}
                    style={{
                        marginHorizontal: 20, backgroundColor: colors.text, borderRadius: 20
                    }}
                    onPress={() => navigation.navigate('Sign')}>
                    <Image source={require("../../assets/gana_puntos.jpeg")} resizeMode="stretch"
                        style={{ width: screenWidth - 40, height: 140, borderRadius: 20 }}>
                    </Image>
                </TouchableOpacity>

                {/* MARCAS PARTICIPANTES */}
                <View style={{ margin: 20, backgroundColor: colors.text, borderRadius: 20, paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 24, fontWeight: '600', paddingVertical: 10 }}>Marcas participantes</Text>
                    <FabContainerImage imagePath="volaris"
                        title='¡A la vuelta de tu vida!'
                        subtitle='Disfruta todas las promos, servicios y experiencias OXXO'
                        onPress={() => { navigation.navigate('LoginScreen') }}
                        style={{ backgroundColor: colors.customCard }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                        <FabImage imagePath="volaris" text='Todas' onPress={() => { navigation.navigate('LoginScreen') }}
                            style={{ backgroundColor: 'black' }} />

                        <FabImage imagePath="vix" text='ViX' onPress={() => { navigation.navigate('LoginScreen') }}
                            style={{ backgroundColor: 'orange' }} />

                        <FabImage imagePath="oxxoGas" text='OXXO GAS' onPress={() => { navigation.navigate('LoginScreen') }}
                            style={{ backgroundColor: 'orange' }} />

                        <FabIcon iconName="grid" text='Todas' onPress={() => { navigation.navigate('LoginScreen') }}
                            style={{ backgroundColor: '#F5F5F7', color: '#3458C6' }} />
                    </View>


                </View>

                {/* HAZ MÁS FÁCIL TU DÍA */}
                <View style={{ marginHorizontal: 20, backgroundColor: colors.text, borderRadius: 20, paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 24, fontWeight: '600', paddingVertical: 10 }}>Haz más fácil tu día</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                        <FabImageAbsolute imagePath="celularDinero" text='Recarga de tiempo aire' onPress={() => { navigation.navigate('LoginScreen') }}
                            style={{ backgroundColor: colors.customCard }} />
                        <FabImageAbsolute imagePath="spinPremiaCard" text='Spin by OXXO' onPress={() => { navigation.navigate('LoginScreen') }}
                            style={{ backgroundColor: colors.customCard }} />
                    </View>
                </View>

                <FlatList
                    style={{ marginHorizontal: 20 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({ item }) => <CardButton imagePath="cardPromociones"
                        title='Tus promos favoritas'
                        subtitle='Cámbialas en tu tienda OXXO mas cercana'
                        onPress={() => { navigation.navigate('LoginScreen') }}
                        style={{ backgroundColor: 'white' }} />}
                    keyExtractor={(item) => item.toString()}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                >

                </FlatList>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        height: 40,
        width: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    text: {
        color: 'black',
        marginTop: 5,
        textAlign: 'center',
        fontWeight: '600'
    }
});
