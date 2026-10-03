import React, { useState } from 'react';
import { ScrollView, StyleSheet, Modal, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StoryCard from './StoryCard';

const { width, height } = Dimensions.get('window');

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState(null);

  const storiesData = [
    { id: '1', name: 'Mario', storyImage: 'https://picsum.photos/seed/mario/400/800', profileImage: 'https://i.pravatar.cc/150?u=1' },
    { id: '2', name: 'Jean', storyImage: 'https://picsum.photos/seed/jean/400/800', profileImage: 'https://i.pravatar.cc/150?u=2' },
    { id: '3', name: 'Sarah', storyImage: 'https://picsum.photos/seed/sarah/400/800', profileImage: 'https://i.pravatar.cc/150?u=3' },
    { id: '4', name: 'Larry', storyImage: 'https://picsum.photos/seed/larry/400/800', profileImage: 'https://i.pravatar.cc/150?u=4' },
    { id: '5', name: 'Sophie', storyImage: 'https://picsum.photos/seed/sophie/400/800', profileImage: 'https://i.pravatar.cc/150?u=5' },
  ];

  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container} contentContainerStyle={styles.contentContainer}>
        {storiesData.map((story) => (
          <TouchableOpacity key={story.id} onPress={() => setSelectedStory(story)} activeOpacity={0.8}>
            <StoryCard name={story.name} storyImage={story.storyImage} profileImage={story.profileImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={!!selectedStory} animationType="fade" transparent={false} onRequestClose={() => setSelectedStory(null)}>
        {selectedStory && (
          <View style={styles.modalContainer}>
            <Image source={{ uri: selectedStory.storyImage }} style={styles.fullImage} resizeMode="cover" />
            <View style={styles.header}>
              <Image source={{ uri: selectedStory.profileImage }} style={styles.avatar} />
              <Text style={styles.name}>{selectedStory.name}</Text>
              <TouchableOpacity onPress={() => setSelectedStory(null)}>
                <Ionicons name="close-circle" size={32} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#FFFFFF', marginBottom: 10, height: 140 },
  contentContainer: { paddingHorizontal: 10 },
  modalContainer: { flex: 1, backgroundColor: '#000' },
  fullImage: { width: '100%', height: '100%' },
  header: { position: 'absolute', top: 50, left: 20, right: 20, flexDirection: 'row', alignItems: 'center', zIndex: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10, borderWidth: 2, borderColor: '#FFF' },
  name: { color: '#FFF', fontSize: 16, fontWeight: 'bold', flex: 1 },
});