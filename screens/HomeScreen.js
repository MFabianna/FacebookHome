import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import CreatePost from '../components/CreatePost';
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import ProfileScreen from './ProfileScreen';

export default function HomeScreen({ onLogout }) {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <View style={styles.container}>
      <Header onLogout={onLogout} />
      <BottomNavigation activeTab={activeTab} onTabPress={setActiveTab} />
      
      {/* Condition stricte pour éviter les doublons */}
      {activeTab === 'profile' ? (
        <ProfileScreen />
      ) : (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <CreatePost />
          <Stories />
          <Posts />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  content: { flex: 1 },
});