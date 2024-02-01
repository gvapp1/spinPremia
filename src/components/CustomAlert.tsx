import { Modal, Text, View, TouchableOpacity, Animated } from 'react-native';
import React, { useRef, useEffect } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  visible: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  nameIcon: string;
}

export const CustomAlert = ({ visible, onClose, title, message, nameIcon }: Props) => {
  const position = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    Animated.timing(position, {
      toValue: visible ? 0 : -300,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Modal
      transparent
      animationType="none"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Animated.View
          style={{
            transform: [{ translateY: position }],
            backgroundColor: '#1E2541',
            padding: 20,
            borderRadius: 10,
            width: 350,
          }}
        >
          {title &&
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: 'white' }}>
              {title}
            </Text>
          }
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name={nameIcon} size={20} color="green" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: '500', textAlign: 'justify', color: 'white' }}>{message}</Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};