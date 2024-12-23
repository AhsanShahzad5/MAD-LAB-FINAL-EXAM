import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Actions from "./PostActions";

const PostsSection = () => {
  return (
 

    
    <>

      {/* Post Section */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }} // Placeholder avatar
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.username}>ahsan___106</Text>
            <Text style={styles.subtitle}>What's new?</Text>
          </View>
        </View>

        {/* Post Content */}
        <View style={styles.postContent}>
          <Image
            source={{ uri: "https://via.placeholder.com/300x400" }} // Placeholder image
            style={styles.postImage}
            resizeMode="cover"
          />
        </View>
        <Actions/>
      </ScrollView>

    
    </>
  );
};

export default PostsSection;

const styles = StyleSheet.create({
 
  
  scrollContent: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#aaa",
    fontSize: 12,
  },
  postContent: {
    marginBottom: 20,
  },
  postImage: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    backgroundColor: "#444",
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  }
 
});
