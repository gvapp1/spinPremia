import { Linking } from 'react-native';
const shareToWhatsAppWithContact = (text:string, phoneNumber:number) => {
 Linking.openURL(`whatsapp://send?text=${text}&phone=${phoneNumber}`);
}