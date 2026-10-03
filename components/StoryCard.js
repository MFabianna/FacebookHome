import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function StoryCard({ name, storyImage, profileImage }) {
  return (
    <View style={styles.container}>
      <View style={styles.storyImageContainer}>
        <Image source={{ uri: storyImage }} style={styles.storyImage} />
        <View style={styles.profileContainer}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        </View>
      </View>
      <Text style={styles.nameText} numberOfLines={1}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginRight: 10, width: 75 },
  storyImageContainer: { width: 70, height: 110, borderRadius: 10, backgroundColor: '#E4E6EB', overflow: 'hidden', justifyContent: 'flex-end', alignItems: 'center' },
  storyImage: { width: '100%', height: '100%', position: 'absolute' },
  profileContainer: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FFFFFF', borderWidth: 3, borderColor: '#1877F2', justifyContent: 'center', alignItems: 'center', marginBottom: 5, zIndex: 1 },
  profileImage: { width: 30, height: 30, borderRadius: 15 },
  nameText: { fontSize: 12, color: '#050505', textAlign: 'center' },
});