import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

// Sample data for recently viewed cars
const recentlyViewedCars = [
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
  // Add more cars as needed
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Search Bar */}
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => router.push("/search")}
      >
        <Ionicons name="search" size={20} color="#999" />
        <Text style={styles.searchText}>Start search</Text>
      </TouchableOpacity>

      {/* Recently Viewed Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recently viewed:</Text>
        <ScrollView>
          <View style={styles.carGrid}>
            {recentlyViewedCars.map((car) => (
              <TouchableOpacity
                key={car.id}
                style={styles.carCard}
                onPress={() =>
                  router.push({
                    pathname: "/car-details",
                    params: {
                      id: car.id,
                      title: car.title,
                      price: car.price,
                      details: car.details,
                      location: car.location,
                    },
                  })
                }
              >
                <Image source={car.image} style={styles.carImage} />
                <View style={styles.carInfo}>
                  <Text style={styles.carTitle}>{car.title}</Text>
                  <Text style={styles.carPrice}>€ {car.price},-</Text>
                  <Text style={styles.carDetails}>{car.details}</Text>
                  <Text style={styles.carLocation}>{car.location}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logo: {
    height: 30,
    width: 120,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    margin: 16,
    padding: 12,
    borderRadius: 8,
  },
  searchText: {
    color: "#999",
    marginLeft: 8,
    fontSize: 16,
  },
  section: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  carGrid: {
    gap: 16,
  },
  carCard: {
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    overflow: "hidden",
  },
  carImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  carInfo: {
    padding: 12,
  },
  carTitle: {
    color: "white",
    fontSize: 18,
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
    fontSize: 14,
    marginTop: 4,
  },
  carLocation: {
    color: "#999",
    fontSize: 14,
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#222",
    backgroundColor: "#111",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#999",
    fontSize: 12,
    marginTop: 4,
  },
});
