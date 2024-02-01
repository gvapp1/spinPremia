import React, { useState } from "react";
import { Text, StyleSheet, Modal, View } from "react-native";
import { StatusBar } from 'react-native';

export const LoginScreen = ({ navigation }: any) => {
    const [modalVisible, setModalVisible] = useState(true);
    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <>
            <StatusBar backgroundColor="rgba(128, 128, 128, 0.4)" />
            <Text>Hola</Text>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
                <View style={{ position: 'absolute', top: 0 - StatusBar.currentHeight!, left: 0, right: 0, bottom: 0 }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(128, 128, 128, 0.4)' }}>

                    </View>
                </View>
            </Modal>
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
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginTop: 20,
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




    // containerModal: {        
    //     flex: 1
    //},

});

