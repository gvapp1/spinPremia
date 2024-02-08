import React, { useEffect, useRef, useState } from "react";
import {
    View, Text, StyleSheet, TouchableOpacity,
    Modal, StatusBar, TextInput, Animated, Dimensions,
    FlatList, Keyboard, ScrollView
} from "react-native";
import theme from '../themes/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderTitle } from "../components/Auth/HeaderTitle";
import { ItemSeparator } from "../components/Auth/ItemSeparator";
import { lineContry, menuCountries } from "../data/menuCountries";
import { CardCountry } from "../components/Auth/CardCountry";
import { MenuCountry } from "../interface/dataCountry";
import { BtnSingUp } from "../components/BtnSingUp";
import { BackButton } from "../components/BackButton";


export const Sign = ({ navigation }: any) => {
    const { colors } = theme;
    const slideAnim = useRef(new Animated.Value(0)).current; // Inicializa la animación
    const screenHeight = Dimensions.get('window').height; // Obtiene la altura de la pantalla
    const [modalVisible, setModalVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [country, setCountry] = useState<MenuCountry>(menuCountries[0]);
    const [textNumber, setTextNumber] = useState('');
    const [habilitaBotton, setHabilitaBotton] = useState(false);

    useEffect(() => {
        if (isFocused) { // Inicia la animación solo cuando isFocused es true
            Animated.timing(
                slideAnim,
                {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }
            ).start();
        } else {
            slideAnim.setValue(0); // Resetea la animación cuando isFocused es false
        }
    }, [isFocused]);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        console.log('no tiene el focus');
        setIsFocused(false);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleSelectCountry = (country: MenuCountry) => {
        setTextNumber('');
        setCountry(country);
        closeModal();
    };

    const onChangeText = (value: string) => {
        if (country && country.name === 'México' && value.length > 3) {
            let numberTwo = value.substring(0, 2);
            let numberThree = value.substring(0, 3);
            let result = lineContry.find(f => f.line === numberTwo || f.line === numberThree);
            if (result)
                value = '(' + result.line + ')' + value.substring(result.line.length);

        }
        if (country && country.name === 'México' && value.length === 12 || country && country.name !== 'México' && value.length === 10) {
            setHabilitaBotton(true);
        }
        else {
            setHabilitaBotton(false);
        }

        setTextNumber(value);
    };

    return (
        <>
            <View style={{ flex: 1, backgroundColor: colors.background }}>
                <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
                <BackButton onPress={() => navigation.pop()} />
                <View style={{ flex: 1, justifyContent: 'flex-end', top: 80, marginHorizontal: 20, backgroundColor: colors.background }}>
                    <ScrollView>
                        <Text style={styles.titleScreen}>¡Hola! Escribe tu número de celular</Text>
                        <Text style={styles.subTitleScreen}>Con tu numero de celular podras crear una cuenta o iniciar sesión</Text>
                        {isFocused ? (
                            <Animated.Text
                                style={[
                                    styles.countryButton,
                                    { transform: [{ translateY: slideAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }] }
                                ]}
                            >
                                Mi número
                            </Animated.Text>
                        ) : <View style={{ height: 15 }}></View>}
                        <View style={styles.selectionContainer}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setModalVisible(true)} >
                                <Icon name={country.icon} size={30} color='#5C6C8B' />
                                <Icon name="chevron-down-outline" size={20} color='#5C6C8B' />
                            </TouchableOpacity>
                            <TextInput
                                style={styles.input}
                                placeholder={isFocused ? '' : 'Mi número'}
                                placeholderTextColor={'#5C6C8B'}
                                onFocus={handleFocus}
                                onBlur={() => { handleBlur(); Keyboard.dismiss(); }}
                                value={textNumber}
                                keyboardType="number-pad"
                                maxLength={country.name === 'México' ? 12 : 10}
                                onChangeText={value => onChangeText(value)}
                            />
                        </View>
                    </ScrollView>

                    {textNumber.length > 0 &&
                        <BtnSingUp title="Continuar"
                            onPress={() => navigation.navigate('VerificationCodeScreen', { phoneNumber: textNumber.replace('(', '').replace(')',''), country: country})}
                            style={{
                                backgroundColor: '#3454DB',
                                marginBottom: 90,
                                borderWidth: 0,
                                marginHorizontal: 0,
                                opacity: habilitaBotton ? 1 : 0.5
                            }}
                            disabled={!habilitaBotton}
                        />
                    }

                </View>
            </View >
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
                <View style={styles.containerModal}>
                    <View style={{ height: screenHeight * 0.92, backgroundColor: 'rgba(128, 128, 128, 0.4)' }}>
                        <TouchableOpacity onPress={closeModal} style={{ height: '10%' }}>
                        </TouchableOpacity>

                        <View style={{ ...styles.containerCountry, backgroundColor: colors.background }}>
                            <View style={styles.containerLineModal}>
                                <View style={styles.lineModal}>
                                </View>
                            </View>
                            <View style={{ ...styles.containerTitleModal }}>
                                <HeaderTitle title="Seleccionar país" />
                                <View style={{ flex: 1 }}></View>
                                <Icon name="close-outline" size={30} color='#5C6C8B' onPress={closeModal} />
                            </View>
                            <FlatList
                                style={{ marginHorizontal: 20 }}
                                showsVerticalScrollIndicator={false}
                                data={menuCountries}
                                renderItem={({ item }) => <CardCountry menuCountry={item} onPress={handleSelectCountry} />}
                                keyExtractor={(item) => item.name}
                                ItemSeparatorComponent={() => <ItemSeparator />}
                                ListFooterComponent={() => <ItemSeparator />}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </>

    )
}
const styles = StyleSheet.create({
    input: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4A62C1',
        left: 10,
        width: '80%'
    },
    titleScreen: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subTitleScreen: {
        fontSize: 18,
        fontWeight: '300',
    },
    countryButton: {
        color: '#5C6C8B',
        fontWeight: 'bold'
    },
    selectionContainer: {
        flexDirection: 'row',
        marginTop: 5,
        borderColor: '#5C6C8B',
        borderBottomWidth: 1,
    },
    containerModal: {
        justifyContent: 'flex-end',
        flex: 1
    },
    containerCountry: {
        //marginTop: 70,
        height: '90%',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20
    },
    containerLineModal: {
        marginTop: 10,
        alignItems: 'center'
    },
    lineModal: {
        backgroundColor: '#3F3F3F',
        width: 35,
        height: 5,
        borderRadius: 10
    },
    containerTitleModal: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 20,
        marginBottom: 15,
        paddingBottom: 20,
        borderBottomColor: '#DDDFEB',
        borderBottomWidth: 1
    },
});
