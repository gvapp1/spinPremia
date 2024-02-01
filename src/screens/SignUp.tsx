import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Modal } from "react-native";
import theme from '../themes/theme';


export const SignUp = () => {
    const { colors } = theme;
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    return (
        <View>
            <Text style={{backgroundColor:'red'}}>SignUp</Text>
        </View>
        // <View style={styles.container}>
        //     <TouchableOpacity onPress={toggleModal}>
        //         <Text style={{color:'red'}}>Show Modal</Text>
        //     </TouchableOpacity>

        //     <Modal
        //         animationType="slide" // Esta es la propiedad clave para la animación de la parte inferior hacia arriba
        //         transparent={true}
        //         visible={modalVisible}
        //         onRequestClose={() => {
        //             setModalVisible(!modalVisible);
        //         }}
        //     >
        //         <View style={styles.modalContainer}>
        //             <View style={styles.modalContent}>
        //                 <Text>Contenido del Modal</Text>
        //                 <TouchableOpacity onPress={toggleModal}>
        //                     <Text>Close Modal</Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </View>
        //     </Modal>
        // </View>
    );

}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,
        backgroundColor:'red'
    },
    modalContainer: {
        //flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
    },
});
