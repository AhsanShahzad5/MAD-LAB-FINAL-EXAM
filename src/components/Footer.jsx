import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Footer() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [post, setPost] = useState({ content: '', image: null }); // State for post content and image

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  const handleCreatePress = () => {
    setModalVisible(true); // Show the modal when the create button is pressed
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const handleChatPress = () => {
    navigation.navigate('Chatbot');
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible); // Toggle modal visibility
  };

  const handlePost = () => {
    // Log the post object to the console
    console.log('Post:', post);
    // Placeholder for sending to the database later
    Alert.alert('Post Created', 'Your post has been logged to the console!');
    setPost({ content: '', image: null }); // Reset post content and image
    toggleModal(); // Close the modal
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={handleHomePress}>
        <Entypo name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreatePress}>
        <Ionicons name="create" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleChatPress}>
        <AntDesign name="wechat" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleProfilePress}>
        <FontAwesome name="user" size={24} color="white" />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create Post</Text>
            <TextInput
              style={styles.input}
              placeholder="Post content goes here..."
              placeholderTextColor="#aaa"
              maxLength={500}
              multiline={true}
              value={post.content} // Bind to state
              onChangeText={(text) => setPost({ ...post, content: text })} // Update content in state
            />
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.imageButton}
                onPress={() => {
                  // Placeholder for image selection
                  const dummyImage = 'data:image/png;base64,exampleImageData'; // Replace this with actual image data
                  setPost({ ...post, image: dummyImage });
                  Alert.alert('Image Added', 'Dummy image data has been added.');
                }}
              >
                <Text style={styles.imageButtonText}>📷</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.postButton} onPress={handlePost}>
                <Text style={styles.postButtonText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#1c1c1e',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 100,
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 10,
    color: '#fff',
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  imageButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
  },
  imageButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  postButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
