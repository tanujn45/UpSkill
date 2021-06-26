import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import * as firebase from "firebase";
import AppButton from '../components/AppButton';
import AppHeading from '../components/AppHeading';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../constants/colors';
// import firebaseConfig from '../../config/keys';




const PhoneNumber = ({ navigation }) => {

    const [phoneNumber, setPhoneNumber] = React.useState();
    // const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
    // const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
    // ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device."}
    // : undefined);

    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [code, setCode] = useState('');
    // const [verificationId, setVerificationId] = useState(null);
    // const recaptchaVerifier = useRef(null);

    // // Function to be called when requesting for a verification code
    // const sendVerification = () => {
    //   const phoneProvider = new firebase.auth.PhoneAuthProvider();
    //   phoneProvider
    //     .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
    //     .then(setVerificationId);
    // };

    // // Function to be called when confirming the verification code that we received
    // // from Firebase via SMS
    // const confirmCode = () => {
    //   const credential = firebase.auth.PhoneAuthProvider.credential(
    //     verificationId,
    //     code
    //   );
    //   firebase
    //     .auth()
    //     .signInWithCredential(credential)
    //     .then((result) => {
    //       // Do something with the results here
    //       console.log(result);
    //     });
    // }

    // function navigateToOTPV() {
    //     navigation.navigate('OTPVerification', phoneNumber);
    // }

    return (
        <Screen>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
                enabled={Platform.OS === 'ios'}
                style={styles.container}
            >
                <View>
                    <AppHeading style={styles.heading}>
                        Compelete your{' '}
                        <AppHeading fontColor={colors.primary}>
                            profile
                        </AppHeading>
                    </AppHeading>
                    <AppText>Phone Number</AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPhoneNumber}
                        value={phoneNumber}
                        placeholder="Eg. 9876543210"
                        keyboardType="phone-pad"
                        returnKeyType={'done'}
                        placeholderTextColor={colors.grey}
                        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                    />
                </View>
                <AppButton
                    title="Send OTP"
                    bgColor={colors.primary}
                    onPress={() => navigation.navigate('OTPVerification', phoneNumber)}
                />
            </KeyboardAvoidingView>
            {/* {attemptInvisibleVerification && <FirebaseRecaptchaBanner />} */}
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        width: '100%',
        justifyContent: 'space-between',
        padding: 20
    },
    heading: {
        marginBottom: 25
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
        fontSize: 14,
        marginTop: 15,
        marginBottom: 35,
        paddingBottom: 10,
        color: '#fff'
    }
});

export default PhoneNumber;
