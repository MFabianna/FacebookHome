import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ onLogout }) {
  const handleMenuPress = () => {
    Alert.alert(
      "Déconnexion",
      "Voulez-vous vraiment vous déconnecter ?",
      [
        { text: "Annuler", style: "cancel" },
        { text: "Se déconnecter", onPress: onLogout, style: "destructive" }
      ]
    );
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logoText}>facebook</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="add-circle" size={26} color="#1C1E21" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search" size={26} color="#1C1E21" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleMenuPress}>
          <Ionicons name="menu" size={26} color="#1C1E21" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EB',
  },
  logoText: { fontSize: 28, fontWeight: 'bold', color: '#1877F2' },
  iconsContainer: { flexDirection: 'row' },
  iconButton: { marginLeft: 10, backgroundColor: '#E4E6EB', borderRadius: 20, width: 36, height: 36, justifyContent: 'center', alignItems: 'center' },
});