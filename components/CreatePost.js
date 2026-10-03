import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CreatePost() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image 
          source={{ uri: 'https://i.pravatar.cc/150?img=5' }} 
          style={styles.avatar} 
        />
        <TouchableOpacity style={styles.inputPlaceholder}>
          <Text style={styles.inputText}>À quoi pensez-vous ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.action}>
          <Ionicons name="videocam" size={24} color="#F3425F" />
          <Text style={styles.actionText}>Vidéo en direct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Ionicons name="images" size={24} color="#45BD62" />
          <Text style={styles.actionText}>Photo/vidéo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Ionicons name="happy" size={24} color="#F7B928" />
          <Text style={styles.actionText}>Humeur/Activité</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#FFFFFF', padding: 10, marginBottom: 10 },
  topSection: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 45, height: 45, borderRadius: 22.5, marginRight: 10 },
  inputPlaceholder: { flex: 1, backgroundColor: '#F0F2F5', borderRadius: 20, paddingVertical: 10, paddingHorizontal: 15 },
  inputText: { color: '#65676B', fontSize: 16 },
  divider: { height: 1, backgroundColor: '#E4E6EB', marginVertical: 10 },
  bottomSection: { flexDirection: 'row', justifyContent: 'space-around' },
  action: { flexDirection: 'row', alignItems: 'center' },
  actionText: { marginLeft: 5, color: '#65676B', fontWeight: '600', fontSize: 13 },
});