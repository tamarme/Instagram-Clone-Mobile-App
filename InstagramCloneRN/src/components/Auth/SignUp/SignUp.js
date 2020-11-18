import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import Divider from 'react-native-divider';

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textLogoContainer}>
                <Image
                    style={styles.textLogo}
                    source={require('../../../../assets/images/logo.png')}
                />
            </View>
            <View style={styles.textSignUpContainer}>
                <Text style={styles.textSignUp}>Sign up to see photoes and videos</Text>
                <Text style={styles.textSignUp}>from your friends.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.touchableOpacityContainer}>
                    <View style={styles.buttonSubContainer}>
                        <Image
                            style={styles.fbLogo}
                            source={require('../../../../assets/images/fb-logo.png')}
                        />
                        <Text style={styles.buttonText}>Sign up with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.textInputsContainer}>
                <Divider orientation="center"><Text style={styles.divider}>OR</Text></Divider>
                <TextInput
                    placeholder='Mobile Number Or Email'
                    style={styles.textInputs}
                //onChangeText={text => onChangeText(text)}
                />
                <TextInput
                    placeholder='Full Name'
                    style={styles.textInputs}
                //onChangeText={text => onChangeText(text)}
                />
                <TextInput
                    placeholder='Username'
                    style={styles.textInputs}
                //onChangeText={text => onChangeText(text)}
                />
                <TextInput
                    secureTextEntry
                    placeholder='Password'
                    style={styles.textInputs}
                //onChangeText={text => onChangeText(text)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.touchableOpacityContainer}>
                    <View style={styles.buttonSubContainer}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.footerTextContainer}>
                <Text style={styles.footerText}>By signing up, you agree to our</Text>
                <Text style={styles.footerTextBold}>Terms & Privacy Policy.</Text>
            </View>
            <View style={styles.dividerView} />
            <View style={styles.lohInContainer}>
                <Text style={styles.logInText}>Have an account? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('login')}
                >
                    <Text style={styles.logInTextBlue}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        marginTop: Constants.statusBarHeight,
        paddingLeft: 35,
        paddingRight: 35,
        backgroundColor: '#fff'

    },
    textLogoContainer: {
        paddingTop: 20,
        flexGrow: 0,
        alignItems: 'center'
    },
    textLogo: {
        width: 170,
        height: 60,
    },
    textSignUpContainer: {
        flexGrow: 0,
        alignItems: 'center',
    },
    textSignUp: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    },
    buttonContainer: {
        paddingTop: 12,
        alignItems: 'stretch',
        backgroundColor: '#3b579d',
        marginTop: 12,
        borderRadius: 3,
        marginBottom: 7
    },
    touchableOpacityContainer: {
        flexGrow: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSubContainer: {
        flexDirection: 'row',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        height: 32,
    },
    fbLogo: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    divider: {
        fontWeight: 'bold',
        color: 'grey',
    },
    textInputsContainer: {
        flexGrow: 1
    },
    textInputs: {
        padding: 7,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#e1e7f7',
        marginTop: 5,
        marginBottom: 5,
    },
    signUpButtonContainer: {
        flexGrow: 0
    },
    footerTextContainer: {
        flexGrow: 0,
        marginBottom: 20,
        alignItems: 'center'
    },
    footerText: {
        fontSize: 14,
        color: 'gray',
    },
    footerTextBold: {
        fontSize: 14,
        color: 'gray',
        fontWeight: 'bold'
    },
    lohInContainer: {
        flexGrow: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
        alignItems: 'center'
    },
    logInText: {
        fontSize: 14,
        color: 'gray',
    },
    logInTextBlue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3b579d',
    },
    dividerView: {
        borderWidth: 0.5,
        borderColor: '#e1e7f7',
        marginBottom: 30,
    }
})

export default SignUp