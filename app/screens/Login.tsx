import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

interface LoginScreenProps {
  setIsLoggedIn: (loggedIn: boolean) => void;
}

export default function LoginScreen({ setIsLoggedIn }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === 'xyz' && password === '12345678') {
      // Mark user as logged in
      setIsLoggedIn(true);

      // Delay navigation until the app is ready
      setTimeout(() => {
        router.push('/(tabs)'); // Navigate after ensuring the layout has mounted
      }, 50);
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#10365B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
