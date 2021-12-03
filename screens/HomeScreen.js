import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged, signOut, } from "@firebase/auth";
import { auth } from '../Firebase';


const HomeScreen = () => {

    const navigation = useNavigation();
  
    const logout = async () => {
      await signOut(auth);
      navigation.replace("Login");
    };
  
    return (
      <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={logout}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
     button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
  })