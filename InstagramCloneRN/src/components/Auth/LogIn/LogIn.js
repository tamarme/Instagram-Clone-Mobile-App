import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import Divider from 'react-native-divider';
import { AuthContext } from '../../../context/context';


const LogIn = ({ navigation }) => {
    const { signIn } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <View style={styles.textLogoContainer}>
                <Image
                    style={styles.textLogo}
                    source={require('../../../../assets/images/logo.png')}
                />
            </View>

            <View style={styles.textInputsContainer}>
                <TextInput
                    placeholder='Phone number email or username'
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
                <TouchableOpacity
                    style={styles.touchableOpacityContainer}
                    onPress={() => { signIn() }}
                >
                    <View style={styles.buttonSubContainer}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.footerTextContainer}>
                <Text style={styles.footerText}>Forgot your login details? </Text>
                <Text style={styles.footerTextBold}>Get help signing in.</Text>
            </View>
            <Divider orientation="center"><Text style={styles.divider}>OR</Text></Divider>
            <View style={styles.lightLogInFBContainer}>
                <TouchableOpacity style={styles.touchableOpacityLightLogInFB}>
                    <View style={styles.buttonSubContainer}>
                        <Image
                            style={styles.fbLogo}
                            source={require('../../../../assets/images/fb-logo-blue.png')}
                        />
                        <Text style={styles.lightLogInFBTextBlue}>Log in with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.dividerView} />
            <View style={styles.lohInContainer}>
                <Text style={styles.logInText}>Don't have an account? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('signup')}
                >
                    <Text style={styles.logInTextBlue}>Sign Up</Text>
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
    touchableOpacityLightLogInFB: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    textLogoContainer: {
        paddingTop: 20,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    textLogo: {
        width: 190,
        height: 70,
    },
    textLogInContainer: {
        flexGrow: 0,
        alignItems: 'center',
    },
    textLogIn: {
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
        flexGrow: 0,
        marginTop: 15
    },
    textInputs: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#e1e7f7',
        marginTop: 5,
        marginBottom: 5,
    },
    LogInButtonContainer: {
        flexGrow: 0
    },
    footerTextContainer: {
        flexGrow: 0,
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerText: {
        fontSize: 12,
        color: 'gray',
    },
    footerTextBold: {
        fontSize: 12,
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
        marginTop: 20,
    },
    lightLogInFBTextBlue: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3b579d',
    },
    lightLogInFBContainer: {
        justifyContent: 'center',
    }
})

export default LogIn