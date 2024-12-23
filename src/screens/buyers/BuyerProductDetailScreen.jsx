import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";

const BuyerProductDetailScreen = () => {
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const product = {
    name: "Smartphone X100",
    description:
      "Experience cutting-edge technology with the Smartphone X100. It features a high-resolution camera, fast processor, and a sleek design.",
    specifications: {
      screen: "6.5-inch OLED",
      processor: "Octa-core 3.0 GHz",
      battery: "5000mAh",
      camera: "108MP + 12MP + 8MP",
    },
    price: "$999",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    seller: {
      name: "TechWorld",
      location: "New York, USA",
      ratings: "4.5/5",
    },
  };

  const handleBuyNow = () => {
    setPaymentModalVisible(true);
  };

  const handleAddToCart = () => {
    console.log("Product added to cart:", product.name);
    alert("Product added to cart!");
  };

  const handlePayment = (method) => {
    setSelectedPaymentMethod(method);
    setPaymentModalVisible(false);
    console.log(`Payment selected: ${method}`);
    alert(`Payment successful using ${method}!`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Product Images */}
      <ScrollView horizontal pagingEnabled style={styles.imageCarousel}>
        {product.images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </ScrollView>

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>

        <Text style={styles.sectionTitle}>Specifications</Text>
        <Text style={styles.specification}>
          Screen: {product.specifications.screen}
        </Text>
        <Text style={styles.specification}>
          Processor: {product.specifications.processor}
        </Text>
        <Text style={styles.specification}>
          Battery: {product.specifications.battery}
        </Text>
        <Text style={styles.specification}>
          Camera: {product.specifications.camera}
        </Text>

        {/* Seller Info */}
        <Text style={styles.sectionTitle}>Seller Information</Text>
        <View style={styles.sellerContainer}>
          <Text style={styles.sellerName}>{product.seller.name}</Text>
          <Text style={styles.sellerDetails}>Location: {product.seller.location}</Text>
          <Text style={styles.sellerDetails}>Ratings: {product.seller.ratings}</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Payment Modal */}
      <Modal visible={isPaymentModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Payment Method</Text>
            <TouchableOpacity
              style={styles.paymentOption}
              onPress={() => handlePayment("Credit Card")}
            >
              <Text style={styles.paymentText}>Credit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.paymentOption}
              onPress={() => handlePayment("PayPal")}
            >
              <Text style={styles.paymentText}>PayPal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.paymentOption}
              onPress={() => handlePayment("Digital Wallet")}
            >
              <Text style={styles.paymentText}>Digital Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setPaymentModalVisible(false)}
            >
              <Text style={styles.closeModalText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageCarousel: {
    height: 300,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    marginRight: 10,
  },
  infoContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  specification: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  sellerContainer: {
    padding: 15,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    marginBottom: 20,
  },
  sellerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 5,
  },
  sellerDetails: {
    fontSize: 16,
    color: "#555",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buyButton: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  addToCartButton: {
    backgroundColor: "#FFB74D",
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 20,
  },
  paymentOption: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#FF5722",
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  paymentText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeModalButton: {
    marginTop: 10,
  },
  closeModalText: {
    color: "#FF5722",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BuyerProductDetailScreen;
