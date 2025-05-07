import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Sample data for explore results
const exploreResults = [
  {
    id: 1,
    title: "BMW 3 Series",
    price: "45,000",
    details: "2021 • Diesel • 25,000 km",
    location: "Amsterdam, NL",
    image: require("../../assets/images/placeholder-car.png"),
  },
  {
    id: 2,
    title: "Mercedes C-Class",
    price: "52,000",
    details: "2022 • Petrol • 15,000 km",
    location: "Rotterdam, NL",
    image: require("../../assets/images/placeholder-car.png"),
  },
  {
    id: 3,
    title: "Audi A4",
    price: "48,000",
    details: "2021 • Hybrid • 30,000 km",
    location: "Utrecht, NL",
    image: require("../../assets/images/placeholder-car.png"),
  },
  {
    id: 4,
    title: "Tesla Model 3",
    price: "55,000",
    details: "2022 • Electric • 15,000 km",
    location: "The Hague, NL",
    image: require("../../assets/images/placeholder-car.png"),
  },
];

const windowWidth = Dimensions.get("window").width;
const columnWidth = (windowWidth - 48) / 2;

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options" size={24} color="#FFE94D" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => router.push("/search")}
      >
        <Ionicons name="search" size={20} color="#999" />
        <Text style={styles.searchText}>Search cars...</Text>
      </TouchableOpacity>

      {/* Results Grid */}
      <FlatList
        data={exploreResults}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.carCard, { width: columnWidth }]}
            onPress={() =>
              router.push({
                pathname: "/car-details",
                params: {
                  id: item.id,
                  title: item.title,
                  price: item.price,
                  details: item.details,
                  location: item.location,
                },
              })
            }
          >
            <Image source={item.image} style={styles.carImage} />
            <View style={styles.carInfo}>
              <Text style={styles.carTitle}>{item.title}</Text>
              <Text style={styles.carPrice}>€ {item.price},-</Text>
              <Text style={styles.carDetails}>{item.details}</Text>
              <Text style={styles.carLocation}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    margin: 16,
    marginTop: 0,
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  searchText: {
    color: "#999",
    fontSize: 16,
  },
  filterButton: {
    padding: 8,
  },
  listContent: {
    padding: 16,
  },
  columnWrapper: {
    gap: 16,
    justifyContent: "space-between",
  },
  carCard: {
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  carImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  carInfo: {
    padding: 12,
  },
  carTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  carPrice: {
    color: "#FFE94D",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  carDetails: {
    color: "#999",
    fontSize: 12,
    marginTop: 4,
  },
  carLocation: {
    color: "#999",
    fontSize: 12,
    marginTop: 4,
  },
});
