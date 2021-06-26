import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import axios from "axios";
import colors from '../constants/colors';
import AppButton from '../components/AppButton';
import AppHeading from '../components/AppHeading';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import { func } from 'prop-types';

const CompleteProfile = ({ route, navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(route.params);
    const [country, setCountry] = useState('');


    function sendData() {
        var axios = require('axios');
var data = JSON.stringify({
  "name": fullName,
  "email": email,
  "number": phoneNumber,
  "residence": country
});

console.log(data)

var config = {
  method: 'post',
  url: 'http://10.0.2.2:3000/api/users',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

            // axios.post('http://localhost:3000/api/users',
            //          {
            //             'name': fullName,
            //             'email': email,
            //             'number': phoneNumber,
            //             'residence': country,
            //           })
            //           .then(function (response) {
            //             console.log(response);
            //           })
            //           .catch(function (error) {
            //             if (error.response) {
            //                 // The request was made, but the server responded with a status code
            //                 // that falls out of the range of 2xx
            //                 console.log(error.response.data);
            //                 console.log(error.response.status);
            //                 console.log(error.response.headers);
            //               } else {
            //                 // Something happened in setting up the request that triggered an Error
            //                 console.log('Error', error.message);
            //               }
            //               console.log(error.config);
            //           });

            // axios({
            //     method: "post",
            //     url: "http://localhost:3000/api/users",
            //     data: bodyFormData,
            //     headers: { "Content-Type": "multipart/form-data" },
            //   })
            //     .then(function (response) {
            //       //handle success
            //       console.log(response);
            //     })
            //     .catch(function (response) {
            //       //handle error
            //       console.log(response);
            //     });
    }

    return (
        <Screen>
            <View
                style={styles.container}
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
                    <AppText>Full Name</AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={setFullName}
                        value={fullName}
                        placeholder="Eg. John Doe"
                        keyboardType="default"
                        returnKeyType={'done'}
                        placeholderTextColor={colors.grey}
                    />
                    <AppText>Email Address</AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Eg. john@doe.com"
                        keyboardType="email-address"
                        returnKeyType={'done'}
                        placeholderTextColor={colors.grey}
                    />
                    <AppText>Phone Number</AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPhoneNumber}
                        value={phoneNumber}
                        placeholder="Eg. 9876543210"
                        keyboardType="phone-pad"
                        returnKeyType={'done'}
                        placeholderTextColor={colors.grey}
                    />
                    <AppText>Country</AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={setCountry}
                        value={country}
                        placeholder="Eg. India"
                        keyboardType="default"
                        returnKeyType={'done'}
                        placeholderTextColor={colors.grey}
                    />
                </View>
                <AppButton
                    bgColor={colors.primary}
                    onPress={sendData()}
                />
            </View>
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

export default CompleteProfile;
