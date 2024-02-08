import React, { useEffect, useState } from "react";
import theme from '../themes/theme';
import { View, Text, StatusBar, StyleSheet, Modal, Dimensions, Image, TouchableOpacity, FlatList, Keyboard } from "react-native";
import { BackButton } from "../components/BackButton";
import { InputCode } from "../components/Auth/InputCode";
import { HeaderTitle } from "../components/Auth/HeaderTitle";
import Icon from "react-native-vector-icons/Ionicons";
import { BtnIconSingUp } from "../components/Auth/BtnIconSingUp";
import { CustomAlert } from "../components/CustomAlert";
import { WhatsAppMessageSender } from "../components/Auth/WhatsAppMessageSender";
import { SMSAppMessageSender } from "../components/Auth/SMSAppMessageSender";

export const VerificationCodeScreen = ({ navigation, route }: any) => {
    const { phoneNumber } = route.params;
    const { colors } = theme;
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
    const [modalVisible, setModalVisible] = useState(true);
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [counter, setCounter] = useState(12);
    const [codes, setCodes] = useState([
        { id: '1', text: '', disabled: false },
        { id: '2', text: '', disabled: true },
        { id: '3', text: '', disabled: true },
        { id: '4', text: '', disabled: true },
    ]);

    useEffect(() => {
        if (counter > 0) {
            const timer = setTimeout(() => {
                setCounter(counter - 1);
            }, 1000); // 1000ms = 1s

            // Limpiar el temporizador si el componente se desmonta
            return () => clearTimeout(timer);
        }
    }, [counter]);

    useEffect(() => {
        if (isAlertVisible) {
            const timer = setTimeout(() => {
                hideAlert();
            }, 3500); // 5000ms = 5s

            // Limpiar el temporizador si el componente se desmonta
            return () => clearTimeout(timer);
        }
    }, [isAlertVisible]);

    useEffect(() => {
        const isFilled = areAllFieldsFilled();
        if (isFilled) {
            {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Tabs' }],
                  });
                //Keyboard.dismiss();
            }
        }
    }, [codes]);

    const showAlert = () => {
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    const closeScreen = () => {
        setModalVisible(false);
        navigation.pop();
    };


    const closeModal = () => {
        setCounter(12);
        setModalVisible(false);
        showAlert();
    };


   

    const areAllFieldsFilled = () => {
        return codes.every(code => code.text !== '');
    };

    const onChangeText = (id: string, text: string) => {
        setCodes(codes.map((code, index, array) => {
            if (code.id === id) {
                const updatedCode = { ...code, text };
                if (array[index + 1]) {
                    array[index + 1] = { ...array[index + 1], disabled: false };
                }
                return updatedCode;
            }
            return code;
        }));       
        
    };



    return (
        <>
            <StatusBar backgroundColor={modalVisible ? "rgba(128, 128, 128, 0.4)" : colors.background} barStyle="dark-content" />
            <View style={{ flex: 1, backgroundColor: colors.background }}>
                <BackButton onPress={() => navigation.pop()} />
                <View style={{ ...styles.container, backgroundColor: colors.background }}>
                    <Text style={styles.titleScreen}>Escribe el codigo que recibiste al: {phoneNumber}</Text>
                    <View style={styles.containerInputCode}>
                        <FlatList
                            data={codes}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <InputCode
                                    onChange={(text) => onChangeText(item.id, text)}
                                    textNumber={item.text}
                                    disabled={item.disabled}
                                    
                                />
                            )}
                            horizontal={true}
                        />
                    </View>
                    {counter === 0 ?
                        <TouchableOpacity activeOpacity={0.6} onPress={() => setModalVisible(true)}>
                            <Text style={{ marginVertical: 20, fontWeight: '500', fontSize: 18, color: '#3454DB' }}>¿No es tu número de celular?</Text>
                        </TouchableOpacity>
                        :
                        <Text style={styles.subTitleScreen}>Puedes solicitar un nuevo codigo en <Text style={{ fontWeight: 'bold' }}>{counter}</Text> segundos</Text>
                    }

                </View>

            </View >
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
                <View style={{ height: screenHeight, backgroundColor: 'rgba(128, 128, 128, 0.4)' }}>
                    <View style={{
                        height: screenHeight,
                        marginTop: 120,
                        borderTopStartRadius: 20,
                        borderTopEndRadius: 20,
                        backgroundColor: '#FFFFFF'
                    }}>
                        <View style={styles.containerLineModal}>
                            <View style={styles.lineModal}>
                            </View>
                        </View>
                        <View style={{ ...styles.containerTitleModal }}>
                            <HeaderTitle title="Código de verificación" />
                            <View style={{ flex: 1 }}></View>
                            <Icon name="close-outline" size={30} color='#5C6C8B' onPress={closeScreen} />
                        </View>
                        <Image source={require('../assets/candado.png')} style={{ width: screenWidth, height: '30%' }} />
                        <Text style={{ marginHorizontal: 20, fontSize: 24, marginTop: 10 }}>Te enviaremos un código de verificación a tu numero
                            <Text style={{ fontWeight: 'bold' }}> {phoneNumber} </Text>
                            para poder verificar tu identidad</Text>

                        <TouchableOpacity activeOpacity={0.6} onPress={closeScreen}>
                            <Text style={{ textAlign: 'center', marginVertical: 20, fontWeight: '500', fontSize: 18, color: '#3454DB' }}>¿No es tu número de celular?</Text>
                        </TouchableOpacity>
                        <BtnIconSingUp
                            title="Verificar numero por WhastApp"
                            onPress={closeModal}
                            color="#FFFFFF"
                            nameIcon="logo-whatsapp"
                            style={{ backgroundColor: '#3454DB', borderWidth: 0, top: 10 }} />
                        <BtnIconSingUp title="Verificar número por SMS"
                            onPress={closeModal}
                            color="#3454DB"
                            nameIcon="phone-portrait-outline"
                            style={{ marginTop: 20, borderColor: '#3454DB' }} />
                    </View>
                </View>
            </Modal>

            <CustomAlert
                visible={isAlertVisible}
                //title="Alerta Personalizada"
                nameIcon="checkmark-circle"
                message="¡Listo! Te enviamos en un mensaje de WhatsApp el código de verificación"
                onClose={hideAlert}
            />

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 80,
        marginHorizontal: 20,
        backgroundColor: 'red',
    },
    containerInputCode: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    titleScreen: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subTitleScreen: {
        marginTop: 20,
        fontSize: 18,
    },




    containerModal: {
        justifyContent: 'flex-end',
        flex: 1
    },
    containerCountry: {
        marginTop: 80,
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
