import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useRecoilValue, useSetRecoilState } from "recoil";
// import userAtom from "../../atoms/userAtom";
// import { useNavigation } from "@react-navigation/native";
// import useShowToast from "../../hooks/useShowToast";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
const LogoutButton = () => {
//   const setUser = useSetRecoilState(userAtom);
//   const showToast = useShowToast();
//   const navigation = useNavigation(); // Use React Navigation for navigation
const navigation = useNavigation();

  const handleLogout = async () => {
   console.log("logout")
   navigation.navigate("Login")
  };
//   const handleLogout = async () => {
//     try {
//       // API call to log out the user
//       const res = await fetch("/api/users/logout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();

//       if (data.error) {
//         showToast("Error", data.error, "error");
//         return;
//       }

//       localStorage.removeItem("user-threads"); // This can be replaced with AsyncStorage for React Native
//       setUser(null);
//       navigation.navigate("Auth"); // Navigate to the auth screen
//     } catch (error) {
//       showToast("Error", error, "error");
//     }
//   };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      {/* Replace FiLogOut with a React Native icon, e.g., from react-native-vector-icons */}
      <AntDesign name="logout" color="white"  size={25} />    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent", // Transparent background
    padding: 10,
    borderRadius: 5, // Optional styling
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LogoutButton;
