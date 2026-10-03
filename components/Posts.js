import React from 'react';
import { View } from 'react-native';
import PostCard from './PostCard';

export default function Posts() {
  const postsData = [
    { id: '1', name: 'Marie Randria', time: 'Il y a 2 h', content: 'Quelle magnifique journée ! ☀️', postImage: 'https://picsum.photos/seed/1/400/300', likes: 124, comments: 18, shares: 5, profileImage: 'https://i.pravatar.cc/150?u=1' },
    { id: '2', name: 'Jean Martin', time: 'Il y a 4 h', content: 'Nouveau projet en cours ! 💻', postImage: null, likes: 45, comments: 12, shares: 2, profileImage: 'https://i.pravatar.cc/150?u=2' },
    { id: '3', name: 'Sarah Dubois', time: 'Il y a 5 h', content: 'Soirée pizza entre amis 🍕', postImage: 'https://picsum.photos/seed/2/400/300', likes: 89, comments: 24, shares: 1, profileImage: 'https://i.pravatar.cc/150?u=3' },
    { id: '4', name: 'Larry Page', time: 'Il y a 6 h', content: 'La technologie avance vite.', postImage: null, likes: 210, comments: 56, shares: 15, profileImage: 'https://i.pravatar.cc/150?u=4' },
    { id: '5', name: 'Sophie Turner', time: 'Il y a 8 h', content: 'Mon nouveau look ! 💇‍♀️', postImage: 'https://picsum.photos/seed/3/400/300', likes: 342, comments: 89, shares: 12, profileImage: 'https://i.pravatar.cc/150?u=5' },
    { id: '6', name: 'Lucas Bernard', time: 'Il y a 10 h', content: 'Entraînement terminé ! 💪', postImage: 'https://picsum.photos/seed/4/400/300', likes: 67, comments: 8, shares: 0, profileImage: 'https://i.pravatar.cc/150?u=6' },
    { id: '7', name: 'Emma Watson', time: 'Il y a 12 h', content: 'Lecture du dimanche.', postImage: null, likes: 156, comments: 34, shares: 7, profileImage: 'https://i.pravatar.cc/150?u=7' },
    { id: '8', name: 'Thomas Anderson', time: 'Il y a 1 j', content: 'Le code c\'est de la poésie. 🖥️', postImage: 'https://picsum.photos/seed/5/400/300', likes: 98, comments: 15, shares: 4, profileImage: 'https://i.pravatar.cc/150?u=8' },
    { id: '9', name: 'Olivia Rodrigo', time: 'Il y a 1 j', content: 'Concert incroyable ! 🎸', postImage: 'https://picsum.photos/seed/6/400/300', likes: 512, comments: 102, shares: 45, profileImage: 'https://i.pravatar.cc/150?u=9' },
    { id: '10', name: 'Noah Centineo', time: 'Il y a 2 j', content: 'Week-end à la plage ! ️', postImage: 'https://picsum.photos/seed/7/400/300', likes: 234, comments: 45, shares: 11, profileImage: 'https://i.pravatar.cc/150?u=10' },
  ];

  return (
    <View>
      {postsData.map((post) => (
        <PostCard 
          key={post.id} 
          profileImage={post.profileImage} 
          name={post.name} 
          time={post.time} 
          content={post.content} 
          postImage={post.postImage} 
          likes={post.likes} 
          comments={post.comments} 
          shares={post.shares} 
        />
      ))}
    </View>
  );
}