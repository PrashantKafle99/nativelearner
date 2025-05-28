import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';

const AuthScreen = () => {
     const [isSignUp,setSignUp] =useState<boolean>(false)
     const [email,setEmail] =useState<string>('');
     const [password,setPassword] =useState<string>('');
     const [error,setError] =useState<string | null>('');
     const theme = useTheme();

     const handleSwitchMode = ()=> {
             setSignUp((prev) => !prev)
     }
const HandleAuth = async () => {
  if(!email || !password) {
      setError("Please fill in all fields");
      return;
  }
  if(password.length <6){
    setError("Password Must be greater than 6 character");
    return;
  }
  setError(null)

}
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>{isSignUp ? 'Create New Account' : 'Welcome back'}</Text>
            <TextInput 
            label="Email"
              autoCapitalize="none" 
              keyboardType="email-address" 
              placeholder='example@gmail.com'
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 15 }}
              mode="outlined"
              onChangeText={setEmail}
            />
            <TextInput
              label="Password"
              secureTextEntry
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 15 }}
              mode="outlined"
              onChangeText={setEmail}
            />
            {error && <Text style={{color: theme.colors.error}}> {error}</Text>}
            <Button
              mode="contained"
              style={{ marginTop: 20 }} onPress={HandleAuth}
            >
             {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
            <Button onPress={handleSwitchMode} mode="text">{isSignUp ? 'Already have account? Sign In' : "Don't have account? Sign Up"}</Button>
        </View>
        
    </KeyboardAvoidingView>
  )
}

export default AuthScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20 ,
    alignItems: "center",
    textAlign: "center"
  }
})