import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomNavigation({ activeTab, onTabPress }) {
  const tabs = [
    { id: 'home', icon: 'home' },
    { id: 'profile', icon: 'person' }, // ✅ Ajouté
    { id: 'messenger', icon: 'chatbubble-outline' },
    { id: 'watch', icon: 'play-circle-outline' },
    { id: 'notifications', icon: 'notifications-outline' },
    { id: 'marketplace', icon: 'storefront-outline' },
  ];

  return (
    <View style={styles.navContainer}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity 
            key={tab.id} 
            style={styles.navItem} 
            onPress={() => onTabPress(tab.id)}
          >
            <Ionicons 
              name={tab.icon} 
              size={26} 
              color={isActive ? '#1877F2' : '#65676B'} 
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingTop: 12,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#E4E6EB',
  },
  navItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});