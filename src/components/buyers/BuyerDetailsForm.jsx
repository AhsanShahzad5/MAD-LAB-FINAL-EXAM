import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const  BuyerDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentDetails: "",
    preferences: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profile Setup</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#FFB74D"
        value={formData.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor="#FFB74D"
        value={formData.address}
        onChangeText={(text) => handleChange("address", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Payment Details"
        placeholderTextColor="#FFB74D"
        value={formData.paymentDetails}
        onChangeText={(text) => handleChange("paymentDetails", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Preferences"
        placeholderTextColor="#FFB74D"
        value={formData.preferences}
        onChangeText={(text) => handleChange("preferences", text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF5722",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FF5722",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
    color: "#FF5722",
  },
  button: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BuyerDetailsForm;
