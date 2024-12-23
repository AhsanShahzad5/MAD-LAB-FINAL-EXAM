import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet, ScrollView
} from "react-native";

const BuyerProductsSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filters, setFilters] = useState({ price: "", location: "", ratings: "" });

  const data = [
    { id: "1", name: "Product A", category: "Electronics", price: "$50", location: "NY", ratings: "4" },
    { id: "2", name: "Product B", category: "Clothing", price: "$20", location: "LA", ratings: "5" },
    { id: "3", name: "Product C", category: "Books", price: "$10", location: "NY", ratings: "3" },
  ];

  const categories = ["All", "Electronics", "Clothing", "Books"];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const applyFilters = () => {
    let filtered = data;
    if (selectedCategory && selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }
    if (filters.price) {
      filtered = filtered.filter((item) => item.price === filters.price);
    }
    if (filters.location) {
      filtered = filtered.filter((item) => item.location === filters.location);
    }
    if (filters.ratings) {
      filtered = filtered.filter((item) => item.ratings === filters.ratings);
    }
    setFilteredData(filtered);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Products</Text>
      
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search products..."
        placeholderTextColor="#FFB74D"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      
      {/* Categories */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Category:</Text>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Filters */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filters:</Text>
        <TextInput
          style={styles.filterInput}
          placeholder="Price (e.g., $50)"
          placeholderTextColor="#FFB74D"
          onChangeText={(text) => setFilters({ ...filters, price: text })}
        />
        <TextInput
          style={styles.filterInput}
          placeholder="Location (e.g., NY)"
          placeholderTextColor="#FFB74D"
          onChangeText={(text) => setFilters({ ...filters, location: text })}
        />
        <TextInput
          style={styles.filterInput}
          placeholder="Ratings (e.g., 4)"
          placeholderTextColor="#FFB74D"
          onChangeText={(text) => setFilters({ ...filters, ratings: text })}
        />
      </View>

      <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
        <Text style={styles.applyButtonText}>Apply Filters</Text>
      </TouchableOpacity>

      {/* Products List */}
      <FlatList
        data={filteredData.length > 0 ? filteredData : data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDetails}>
              Category: {item.category} | Price: {item.price}
            </Text>
            <Text style={styles.productDetails}>
              Location: {item.location} | Ratings: {item.ratings}
            </Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 20,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#FF5722",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    color: "#FF5722",
  },
  filterContainer: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF5722",
  },
  categoryButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#FF5722",
    borderRadius: 8,
    marginVertical: 5,
    alignItems: "center",
  },
  categoryButtonActive: {
    backgroundColor: "#FF5722",
  },
  categoryText: {
    color: "#FF5722",
  },
  categoryTextActive: {
    color: "white",
  },
  filterInput: {
    borderWidth: 1,
    borderColor: "#FF5722",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    color: "#FF5722",
  },
  applyButton: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  applyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  productItem: {
    borderWidth: 1,
    borderColor: "#FF5722",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF5722",
  },
  productDetails: {
    color: "#555",
    marginTop: 5,
  },
});

export default BuyerProductsSearch;
