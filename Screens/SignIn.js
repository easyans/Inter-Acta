import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native'
const SignIn = ({ navigation }) => {

    function navigate() {
        navigation.navigate('signUp');
    }

    return (
        <View style={StyleSheet.mainView}>
            <View style={styles.TopView}>
                <Image source={require('../assets/images/logo.png')} style={styles.image} />
                <Text style={styles.Heading}>Welcome to nextdown{'\n'}</Text>
                <Text style={styles.Heading}>Sign In to continue</Text>
            </View>
            <View style={styles.BottomView}>
                <View style={styles.FormView}>
                    <TextInput placeholder={"Email Address"} placeholderTextColor={"#fff"} style={styles.TextInput} />
                    <TextInput placeholder={"Password"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign in to continue</Text>
                    </TouchableOpacity>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.signupButton}  onPress={navigate}>
                            <Text style={styles.signupText}>SignUp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SignIn with Google</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>SignIn with LinkedIn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'Center',
    },
    TopView: {
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomView: {
        width: '100%',
        height: '60%',
        backgroundColor: '#000000',
        borderTopLeftRadius: '30',
        borderTopRightRadius: '30',
        alignItems: 'center',
    },
    ImageStyle: {
        width: '50%',
        height: 50,
        resizeMode: 'contain',
        marginTop: '20',
        marginBottom: '20',
    },
    Heading: {
        fontSize: 30,
        lineHeight: 29,
        fontWeight: 'regular',
        letterSpacing: 0.5,
        width: 'auto',
        fontWeight: 400,
        letterSpacing: 0.005,
    },
    FormView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 60,
    },
    TextInput: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#fff',
        height: 41,
        borderRadius: 10,
        paddingLeft: 50,
        marginTop: 20,
        color: "#fff",
    },
    button: {
        backgroundColor: '#1E1E1E',
        paddingVertical: 12,
        paddingHorizontal: 70,
        borderRadius: 12,
        marginTop: 29,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'regular',
        textAlign: 'center',
    },
    signupButton: {
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    signupButton: {
        marginRight: 10,
    },
    signupText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 29,
    },
    forgotPasswordText: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#fff',
        marginTop: 29,
    },

})

export default SignIn;