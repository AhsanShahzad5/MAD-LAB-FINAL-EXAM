import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostsSection from "../components/PostsSection";

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>AS</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.username}>ahsan shahzad</Text>
            <Text style={styles.userHandle}>ahsan123</Text>
          </View>
        </View>
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
          <Text style={styles.followersText}>0 followers</Text>
        </View>
      </View>

      {/* Posts Section */}
      <PostsSection />

      {/* Footer */}
      <Footer />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  profileContainer: {
    padding: 20,
    backgroundColor: "#1c1c1e",
    borderRadius: 10,
    margin: 10,
    marginBottom: 0,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2ecc71",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  profileInfo: {
    marginLeft: 10,
  },
  username: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  userHandle: {
    color: "#aaa",
    fontSize: 12,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#444",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
  followersText: {
    color: "#fff",
    fontSize: 12,
  },
});
