import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// Mock data for recently viewed cars
const recentlyViewedCars = [
  {
    id: 1,
    title: "Ford B-Max",
    price: "7,900",
    details: "50,042 km, 06/2014",
    location: "BE-1472 Vieux-Genappe",
    image: require("../assets/images/placeholder-car.png"),
  },
  {
    id: 2,
    title: "Agados Trailer",
    price: "669",
    details: "- km -",
    location: "DE-91589 Aurach",
    image: require("../assets/images/placeholder-car.png"),
  },
  {
    id: 3,
    title: "Dacia Duster",
    price: "4,190",
    details: "204,000 km, 05/2014",
    location: "IT-29012 Caorso - Piacenza",
    image: require("../assets/images/placeholder-car.png"),
  },
  {
    id: 4,
    title: "BMW 3 Series",
    price: "15,900",
    details: "85,000 km, 03/2019",
    location: "DE-80331 München",
    image: require("../assets/images/placeholder-car.png"),
  },
  {
    id: 5,
    title: "Audi A4 Avant",
    price: "22,500",
    details: "45,600 km, 11/2020",
    location: "AT-1010 Wien",
    image: require("../assets/images/placeholder-car.png"),
  },
  {
    id: 6,
    title: "Mercedes-Benz C200",
    price: "28,900",
    details: "32,000 km, 09/2021",
    location: "CH-8001 Zürich",
    image: require("../assets/images/placeholder-car.png"),
  },
  {
    id: 7,
    title: "Volkswagen Golf",
    price: "12,490",
    details: "98,500 km, 07/2018",
    location: "NL-1012 Amsterdam",
    image: require("../assets/images/placeholder-car.png"),
  },
  {
    id: 8,
    title: "Tesla Model 3",
    price: "35,900",
    details: "55,000 km, 01/2021",
    location: "FR-75001 Paris",
    image: require("../assets/images/placeholder-car.png"),
  },
  {
    id: 9,
    title: "Porsche Macan",
    price: "45,900",
    details: "42,000 km, 04/2020",
    location: "ES-28001 Madrid",
    image: require("../assets/images/placeholder-car.png"),
  },
  {
    id: 10,
    title: "Range Rover Evoque",
    price: "39,900",
    details: "38,500 km, 12/2021",
    location: "IT-20121 Milano",
    image: require("../assets/images/placeholder-car.png"),
  },
];

export default function InitialScreen() {
  const router = useRouter();

  useEffect(() => {
    // Simulate some loading or initialization
    const timer = setTimeout(() => {
      // Navigate to the tabs layout
      router.replace("/(tabs)");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Add any loading indicators or initial animations here */}
    </View>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    position: "relative",
    backgroundColor: "#000",
  },
  logo: {
    height: 30,
    width: 120,
    position: "absolute",
    left: "55%",
    transform: [
      {
        translateX: -60,
      },
    ],
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    padding: 12,
    backgroundColor: "#222",
    borderRadius: 8,
  },
  searchText: {
    marginLeft: 8,
    color: "#999",
    fontSize: 16,
  },
  section: {
    flex: 1,
    padding: 16,
    backgroundColor: "#000",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff",
  },
  carGrid: {
    flexDirection: "column",
    gap: 16,
  },
  carCard: {
    backgroundColor: "#111",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  carImage: {
    width: "100%",
    height: 200,
    backgroundColor: "#222",
  },
  carInfo: {
    padding: 12,
  },
  carTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  carPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
    color: "#FFE94D",
  },
  carDetails: {
    fontSize: 14,
    color: "#DDDDDD",
    marginTop: 4,
  },
  carLocation: {
    fontSize: 14,
    color: "#DDDDDD",
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
