import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Linking, SafeAreaView, TextInput, StyleSheet } from 'react-native';

export const WhatsAppMessageSender = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [whatsAppMsg, setWhatsAppMsg] = useState(
      //'Please follow https://staging.aboutreact.com',
      'Este es un mensaje'
    );

    const initiateWhatsApp = () => {
        // Check for perfect 10 digit length
        if (mobileNumber.length != 10) {
          alert('Please insert correct WhatsApp number');
          return;
        }
        // Using 91 for India
        // You can change 91 with your country code
        let url =
          'whatsapp://send?text=' + 
           whatsAppMsg +
          '&phone=52' + mobileNumber;
        Linking.openURL(url)
          .then((data) => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            alert('Make sure Whatsapp installed on your device');
          });
      };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Example to Send WhatsApp Message from React Native App
        </Text>
        <Text style={styles.titleTextsmall}>
          Enter WhatsApp Number
        </Text>
        <TextInput
          value={mobileNumber}
          onChangeText={
            (mobileNumber) => setMobileNumber(mobileNumber)
          }
          placeholder={'Enter WhatsApp Number'}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <Text style={styles.titleTextsmall}>
          WhatsApp Message
        </Text>
        <TextInput
          value={whatsAppMsg}
          onChangeText={
            (whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)
          }
          placeholder={'WhatsApp Message'}
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={initiateWhatsApp}>
          <Text style={styles.buttonTextStyle}>
            Send WhatsApp Message
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    titleText: {
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    titleTextsmall: {
      marginVertical: 8,
      fontSize: 16,
    },
    buttonStyle: {
      justifyContent: 'center',
      marginTop: 15,
      padding: 10,
      backgroundColor: '#8ad24e',
    },
    buttonTextStyle: {
      color: '#fff',
      textAlign: 'center',
    },
    textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '100%',
      paddingHorizontal: 10,
    },
  });