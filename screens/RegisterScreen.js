import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View , Button } from 'react-native';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged, signOut, } from "@firebase/auth";
import { auth } from '../Firebase';


const RegisterScreen = () => {

    const navigation = useNavigation()
  
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
 

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("Home")
          }
        })
    
        return unsubscribe
      }, [])
      
      const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={registerEmail}
            onChangeText={text => setRegisterEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={registerPassword}
            onChangeText={text => setRegisterPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
  
        <View style={styles.buttonContainer}>

          <TouchableOpacity
            onPress={register}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
  
  export default RegisterScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })