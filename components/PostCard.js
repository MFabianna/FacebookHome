import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Modal, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const REACTIONS = [
  { id: 'like', emoji: '👍', label: 'J\'aime', color: '#1877F2' },
  { id: 'love', emoji: '❤️', label: 'J\'adore', color: '#F33E58' },
  { id: 'care', emoji: '🥰', label: 'Care', color: '#F7B125' },
  { id: 'haha', emoji: '😆', label: 'Haha', color: '#F7B125' },
  { id: 'wow', emoji: '😮', label: 'Wouah', color: '#F7B125' },
  { id: 'sad', emoji: '😢', label: 'Triste', color: '#F7B125' },
  { id: 'angry', emoji: '😡', label: 'Grrr', color: '#E9710F' },
];

const SHARE_OPTIONS = [
  { id: '1', name: 'Story', icon: 'add-circle-outline' },
  { id: '2', name: 'Groupes', icon: 'people-outline' },
  { id: '3', name: 'Profil d\'ami', icon: 'person-outline' },
  { id: '4', name: 'WhatsApp', icon: 'chatbubbles-outline' },
  { id: '5', name: 'Messages', icon: 'chatbubble-outline' },
  { id: '6', name: 'Copier le lien', icon: 'link-outline' },
];

export default function PostCard({ profileImage, name, time, content, postImage, likes: initialLikes, comments: initialComments, shares: initialShares }) {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [commentCount, setCommentCount] = useState(initialComments);
  const [shareCount, setShareCount] = useState(initialShares);
  const [showReactions, setShowReactions] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [userComments, setUserComments] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleReaction = (reaction) => {
    const wasLiked = selectedReaction !== null;
    setSelectedReaction(reaction);
    if (!wasLiked) setLikeCount(likeCount + 1);
    setShowReactions(false);
  };

  const handleLikePress = () => {
    if (showReactions) { setShowReactions(false); return; }
    if (selectedReaction) {
      setSelectedReaction(null);
      setLikeCount(likeCount - 1);
    } else {
      handleReaction(REACTIONS[0]);
    }
  };

  const submitComment = () => {
    if (commentText.trim().length > 0) {
      setUserComments([...userComments, { id: Date.now().toString(), text: commentText }]);
      setCommentCount(commentCount + 1);
      setCommentText('');
    }
  };

  const handleShare = () => {
    setShareCount(shareCount + 1);
    setShowShareModal(false);
    Alert.alert('Succès', 'Publication partagée !');
  };

  return (
    <View style={styles.postContainer}>
      {/* Header du post */}
      <View style={styles.header}>
        <Image source={{ uri: profileImage }} style={styles.avatar} />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <TouchableOpacity><Ionicons name="ellipsis-horizontal" size={20} color="#65676B" /></TouchableOpacity>
      </View>

      {/* Contenu */}
      <Text style={styles.content}>{content}</Text>
      {postImage && <Image source={{ uri: postImage }} style={styles.postImage} />}

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {selectedReaction && <Text style={{ fontSize: 14, marginRight: 5 }}>{selectedReaction.emoji}</Text>}
          <Text style={styles.statsText}>{likeCount}</Text>
        </View>
        <Text style={styles.statsText}>{commentCount} commentaires · {shareCount} partages</Text>
      </View>

      <View style={styles.divider} />

      {/* Menu de réactions */}
      {showReactions && (
        <View style={styles.reactionPopup}>
          {REACTIONS.map((reaction) => (
            <TouchableOpacity 
              key={reaction.id} 
              onPress={() => handleReaction(reaction)} 
              style={styles.reactionItem}
            >
              <Text style={styles.reactionEmoji}>{reaction.emoji}</Text>
              <Text style={styles.reactionLabel}>{reaction.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Boutons d'action */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={handleLikePress}
          onLongPress={() => setShowReactions(true)}
          delayLongPress={400}
        >
          <Ionicons 
            name={selectedReaction ? "heart" : "heart-outline"} 
            size={20} 
            color={selectedReaction ? selectedReaction.color : '#65676B'} 
          />
          <Text style={[styles.actionText, { color: selectedReaction ? selectedReaction.color : '#65676B' }]}>
            {selectedReaction ? selectedReaction.label : "J'aime"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => setShowCommentBox(!showCommentBox)}>
          <Ionicons name="chatbubble-outline" size={20} color="#65676B" />
          <Text style={styles.actionText}>Commenter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => setShowShareModal(true)}>
          <Ionicons name="share-outline" size={20} color="#65676B" />
          <Text style={styles.actionText}>Partager</Text>
        </TouchableOpacity>
      </View>

      {/* Section commentaires style Facebook */}
      {showCommentBox && (
        <View style={styles.commentSection}>
          {/* Afficher les commentaires existants */}
          {userComments.map((c) => (
            <View key={c.id} style={styles.commentBubble}>
              <Image source={{ uri: profileImage }} style={styles.smallAvatar} />
              <View style={styles.commentTextBubble}>
                <Text style={styles.commentName}>Moi</Text>
                <Text style={styles.commentText}>{c.text}</Text>
              </View>
            </View>
          ))}
          
          {/* Zone de saisie */}
          <View style={styles.commentInputRow}>
            <Image source={{ uri: profileImage }} style={styles.smallAvatar} />
            <View style={styles.commentInputWrapper}>
              <TextInput 
                style={styles.commentInput} 
                placeholder="Écrire un commentaire..." 
                value={commentText}
                onChangeText={setCommentText}
                onSubmitEditing={submitComment}
                returnKeyType="send"
              />
              {commentText.length > 0 && (
                <TouchableOpacity onPress={submitComment} style={styles.sendButton}>
                  <Ionicons name="send" size={20} color="#1877F2" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      )}

      {/* Modal de partage */}
      <Modal visible={showShareModal} transparent animationType="slide" onRequestClose={() => setShowShareModal(false)}>
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={() => setShowShareModal(false)}>
          <View style={styles.shareSheet}>
            <View style={styles.shareHandle} />
            <View style={styles.shareHeader}>
              <Image source={{ uri: profileImage }} style={styles.shareAvatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.shareName}>{name}</Text>
                <Text style={styles.sharePrivacy}>🔒 Moi uniquement</Text>
              </View>
              <TouchableOpacity style={styles.shareNowButton} onPress={handleShare}>
                <Text style={styles.shareNowText}>Partager</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.shareTitle}>Partager vers</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.shareOptionsContainer}>
              {SHARE_OPTIONS.map((opt) => (
                <TouchableOpacity key={opt.id} style={styles.shareOption} onPress={handleShare}>
                  <View style={styles.shareIconCircle}>
                    <Ionicons name={opt.icon} size={24} color="#FFF" />
                  </View>
                  <Text style={styles.shareOptionText}>{opt.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: { backgroundColor: '#FFFFFF', marginBottom: 10, padding: 15 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 45, height: 45, borderRadius: 22.5, marginRight: 10 },
  headerInfo: { flex: 1 },
  name: { fontWeight: 'bold', fontSize: 15, color: '#050505' },
  time: { fontSize: 12, color: '#65676B' },
  content: { fontSize: 15, color: '#050505', marginBottom: 10 },
  postImage: { width: '100%', height: 250, borderRadius: 8, marginBottom: 10 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  statsText: { color: '#65676B', fontSize: 13 },
  divider: { height: 1, backgroundColor: '#E4E6EB', marginVertical: 10 },
  actionsContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  actionButton: { flexDirection: 'row', alignItems: 'center', paddingVertical: 5, flex: 1, justifyContent: 'center' },
  actionText: { fontWeight: '600', fontSize: 14, marginLeft: 5 },
  
  reactionPopup: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 30, 
    paddingVertical: 8, 
    paddingHorizontal: 10,
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  reactionItem: { alignItems: 'center', paddingHorizontal: 8 },
  reactionEmoji: { fontSize: 32 },
  reactionLabel: { fontSize: 10, color: '#65676B', marginTop: 2 },

  commentSection: { marginTop: 10 },
  commentBubble: { flexDirection: 'row', marginBottom: 10, alignItems: 'flex-start' },
  commentTextBubble: { backgroundColor: '#F0F2F5', borderRadius: 18, paddingHorizontal: 12, paddingVertical: 8, flex: 1 },
  commentName: { fontWeight: 'bold', fontSize: 13, color: '#050505', marginBottom: 2 },
  commentText: { fontSize: 14, color: '#050505' },
  commentInputRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  smallAvatar: { width: 32, height: 32, borderRadius: 16, marginRight: 10 },
  commentInputWrapper: { 
    flex: 1, 
    backgroundColor: '#F0F2F5', 
    borderRadius: 20, 
    paddingHorizontal: 15, 
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentInput: { flex: 1, fontSize: 14, color: '#050505' },
  sendButton: { marginLeft: 5 },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  shareSheet: { backgroundColor: '#FFFFFF', borderTopLeftRadius: 15, borderTopRightRadius: 15, padding: 20, paddingBottom: 40 },
  shareHandle: { width: 40, height: 4, backgroundColor: '#E4E6EB', borderRadius: 2, alignSelf: 'center', marginBottom: 15 },
  shareHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#E4E6EB' },
  shareAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  shareName: { color: '#050505', fontWeight: 'bold', fontSize: 16 },
  sharePrivacy: { color: '#65676B', fontSize: 12, marginTop: 2 },
  shareNowButton: { backgroundColor: '#1877F2', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 6 },
  shareNowText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  shareTitle: { color: '#050505', fontSize: 16, fontWeight: 'bold', marginBottom: 15 },
  shareOptionsContainer: { paddingBottom: 10 },
  shareOption: { alignItems: 'center', marginRight: 20, width: 70 },
  shareIconCircle: { width: 55, height: 55, borderRadius: 27.5, backgroundColor: '#1877F2', justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  shareOptionText: { color: '#050505', fontSize: 12, textAlign: 'center' },
});