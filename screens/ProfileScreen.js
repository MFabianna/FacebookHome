import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const profilePic = 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Morpho_menelaus_huebneri_MHNT_Male_dos.jpg';
  const coverPic = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80';

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.coverContainer}>
        <Image source={{ uri: coverPic }} style={styles.coverImage} resizeMode="cover" />
      </View>

      <View style={styles.profileInfo}>
        <Image source={{ uri: profilePic }} style={styles.profileImage} resizeMode="cover" />
        <Text style={styles.name}>Fabi Anna</Text>
        <Text style={styles.stats}>125 amis · 8 publications</Text>
        <Text style={styles.bio}>ZEN 🌙</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.blueButton}>
            <Ionicons name="add-circle-outline" size={20} color="#FFF" />
            <Text style={styles.buttonText}>Ajouter à la story</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.grayButton}>
            <Ionicons name="create-outline" size={20} color="#FFF" />
            <Text style={styles.buttonText}>Modifier le profil</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={styles.activeTab}><Text style={styles.activeTabText}>Tout</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Photos</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Reels</Text></TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Détails personnels</Text>
        <View style={styles.detailRow}>
          <Ionicons name="heart-outline" size={22} color="#65676B" />
          <Text style={styles.detailText}>Marié(e)</Text>
          <Ionicons name="lock-closed" size={14} color="#888" style={{marginLeft: 'auto'}} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Amis</Text>
        <Text style={{color: '#1877F2', fontSize: 14, fontWeight: '600'}}>Voir tout</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  coverContainer: { height: 150, backgroundColor: '#ddd' },
  coverImage: { width: '100%', height: '100%' },
  profileInfo: { alignItems: 'center', paddingHorizontal: 15, paddingBottom: 15, backgroundColor: '#FFF' },
  profileImage: { width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: '#FFF', marginTop: -50, marginBottom: 10 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#050505' },
  stats: { fontSize: 14, color: '#65676B', marginTop: 5 },
  bio: { fontSize: 16, color: '#050505', marginTop: 10, fontWeight: '600' },
  buttonContainer: { flexDirection: 'row', marginTop: 15, width: '100%' },
  blueButton: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1877F2', padding: 10, borderRadius: 6, marginRight: 5 },
  grayButton: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E4E6EB', padding: 10, borderRadius: 6, marginLeft: 5 },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 14, marginLeft: 5 },
  tabs: { flexDirection: 'row', backgroundColor: '#FFF', marginTop: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#E4E6EB' },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 15 },
  activeTab: { flex: 1, alignItems: 'center', paddingVertical: 15, borderBottomWidth: 3, borderBottomColor: '#1877F2' },
  tabText: { color: '#65676B', fontWeight: '600' },
  activeTabText: { color: '#1877F2', fontWeight: 'bold' },
  section: { backgroundColor: '#FFF', marginTop: 10, padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#050505' },
  detailRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  detailText: { fontSize: 16, color: '#050505', marginLeft: 15 },
});