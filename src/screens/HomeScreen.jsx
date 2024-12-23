import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostsSection from "../components/PostsSection";
const HomePage = () => {
  return (
    <View style = {styles.container}>

    
    <View style={styles.secondContainer}>
     <Header/>

      {/* Post Section */}
     <PostsSection />

      {/* Footer */}
   
      <Footer />
    </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: "#000", // Background color
  
},
secondContainer:{
  flex: 0.99,
borderRadius: 20, // Rounded corners
  padding: 10, // Padding from all sides
  margin: 10, // Ensures it doesn't stick to the edges
} ,
  
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
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footerSubText: {
    color: "#aaa",
  },
 
});
