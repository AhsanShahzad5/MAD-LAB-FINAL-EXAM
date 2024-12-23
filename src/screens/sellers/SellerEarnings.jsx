import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

const SellerEarnings = () => {
  const [earnings, setEarnings] = useState({
    totalEarnings: 5000,
    withdrawn: 2000,
    available: 3000,
  });

  const [transactions, setTransactions] = useState([
    { id: "1", amount: 1000, type: "Withdrawal", date: "2024-12-15" },
    { id: "2", amount: 2000, type: "Withdrawal", date: "2024-12-01" },
    { id: "3", amount: 5000, type: "Earnings", date: "2024-11-25" },
  ]);

  const handleWithdrawRequest = () => {
    if (earnings.available > 0) {
      Alert.alert("Withdrawal Request", "Your withdrawal request has been submitted.");
      setEarnings((prevEarnings) => ({
        ...prevEarnings,
        withdrawn: prevEarnings.withdrawn + prevEarnings.available,
        available: 0,
      }));
    } else {
      Alert.alert("Insufficient Balance", "No available balance for withdrawal.");
    }
  };

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionText}>
        {item.type}: ${item.amount}
      </Text>
      <Text style={styles.transactionDate}>Date: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Earnings and Payouts</Text>

      {/* Earnings Summary */}
      <View style={styles.earningsContainer}>
        <Text style={styles.earningsText}>Total Earnings: ${earnings.totalEarnings}</Text>
        <Text style={styles.earningsText}>Withdrawn: ${earnings.withdrawn}</Text>
        <Text style={styles.earningsText}>Available: ${earnings.available}</Text>
      </View>

      {/* Withdraw Button */}
      <TouchableOpacity
        style={styles.withdrawButton}
        onPress={handleWithdrawRequest}
      >
        <Text style={styles.buttonText}>Request Withdrawal</Text>
      </TouchableOpacity>

      {/* Transaction History */}
      <Text style={styles.subHeader}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        style={styles.transactionList}
      />
    </View>
  );
};

export default SellerEarnings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 20,
    textAlign: "center",
  },
  earningsContainer: {
    backgroundColor: "#F9F9F9",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  earningsText: {
    fontSize: 18,
    color: "#555",
    marginBottom: 5,
  },
  withdrawButton: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 10,
  },
  transactionList: {
    marginBottom: 20,
  },
  transactionItem: {
    padding: 15,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    marginBottom: 10,
  },
  transactionText: {
    fontSize: 16,
    color: "#555",
  },
  transactionDate: {
    fontSize: 14,
    color: "#999",
  },
});
