import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Button, Image, Input } from 'react-native-elements'
import { auth } from '../firebase'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() =>
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                navigation.replace('Home')
            }
        }), [])

    const signIn = () => { }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
            <Image
                source={{ uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png' }}
                style={{ width: 200, height: 200 }}
            />

            <View style={styles.inputContainer}>

                <Input
                    placeholder='Email'
                    autoFocus
                    type='email'
                    value={email}
                    onChangeText={setEmail}
                />

                <Input
                    placeholder='Password'
                    secureTextEntry
                    type='password'
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <Button
                containerStyle={styles.button}
                title='Login'
                onPress={signIn}
            />

            <Button
                containerStyle={styles.button}
                title='Register'
                type='outline'
                onPress={() => navigation.navigate('Register')}
            />

            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})