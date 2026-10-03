import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      onLogin();
    } else {
      Alert.alert("Erreur", "Veuillez entrer votre email et mot de passe.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>facebook</Text>
      <TextInput style={styles.input} placeholder="Numéro de téléphone ou email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Mot de passe" value={password} onChangeText={setPassword} secureTextEntry={true} />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity><Text style={styles.forgotPassword}>Mot de passe oublié ?</Text></TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Créer un nouveau compte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', paddingHorizontal: 20 },
  logo: { fontSize: 50, fontWeight: 'bold', color: '#1877F2', textAlign: 'center', marginBottom: 40, marginTop: -100 },
  input: { backgroundColor: '#F0F2F5', borderRadius: 8, padding: 15, marginBottom: 15, fontSize: 16, borderWidth: 1, borderColor: '#E4E6EB' },
  loginButton: { backgroundColor: '#1877F2', borderRadius: 8, padding: 15, alignItems: 'center', marginBottom: 15 },
  loginButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  forgotPassword: { color: '#1877F2', textAlign: 'center', fontSize: 14, marginBottom: 30 },
  divider: { height: 1, backgroundColor: '#E4E6EB', marginBottom: 20 },
  createButton: { backgroundColor: '#42B72A', borderRadius: 8, padding: 15, alignItems: 'center', alignSelf: 'center', width: '80%' },
  createButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});