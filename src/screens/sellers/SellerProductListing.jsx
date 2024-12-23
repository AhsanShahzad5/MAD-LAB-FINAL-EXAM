import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";

const SellerProductListing = () => {
  const [products, setProducts] = useState([
    { id: "1", name: "Smartphone X100", price: 999, stock: 10, status: "Active" },
    { id: "2", name: "Laptop Pro", price: 1299, stock: 5, status: "Sold" },
    { id: "3", name: "Wireless Earbuds", price: 199, stock: 20, status: "Pending" },
  ]);

  const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDetails}>Price: ${item.price}</Text>
      <Text style={styles.productDetails}>Stock: {item.stock}</Text>
      <Text style={styles.productDetails}>Status: {item.status}</Text>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => console.log("Edit product:", item.name)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    alert("Product deleted!");
  };

  const handleBulkUpload = () => {
    console.log("Bulk upload initiated");
    alert("Bulk upload functionality placeholder.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product Listing & Management</Text>

      {/* Add Product and Bulk Upload Buttons */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => console.log("Add new product")}
        >
          <Text style={styles.buttonText}>Add New Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bulkUploadButton} onPress={handleBulkUpload}>
          <Text style={styles.buttonText}>Bulk Upload</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        style={styles.productList}
      />
    </View>
  );
};

export default SellerProductListing;

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
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  bulkUploadButton: {
    backgroundColor: "#FFB74D",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  productList: {
    marginTop: 20,
  },
  productItem: {
    padding: 15,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 5,
  },
  productDetails: {
    fontSize: 16,
    color: "#555",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: "#F44336",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
