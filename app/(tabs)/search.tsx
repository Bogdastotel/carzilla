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
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Sample data for search results
const searchResults = [
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
];

const windowWidth = Dimensions.get("window").width;
const columnWidth = (windowWidth - 48) / 2;

const vehicleTypes = [
  { id: "car", icon: "car-outline" as const, label: "Car" },
  { id: "bicycle", icon: "bicycle-outline" as const, label: "Bicycle" },
  { id: "bus", icon: "bus-outline" as const, label: "Bus" },
  { id: "motorcycle", icon: "bicycle-outline" as const, label: "Motorcycle" },
];

export default function SearchScreen() {
  const router = useRouter();
  const [selectedType, setSelectedType] = React.useState("car");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <View style={styles.iconButton}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
        <TouchableOpacity>
          <View style={styles.iconButton}>
            <Ionicons name="trash-outline" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Vehicle Type Selection */}
        <View style={styles.vehicleTypes}>
          {vehicleTypes.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.vehicleTypeButton,
                selectedType === type.id && styles.selectedVehicleType,
              ]}
              onPress={() => setSelectedType(type.id)}
            >
              <Ionicons
                name={type.icon}
                size={22}
                color={selectedType === type.id ? "black" : "white"}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Make & Model */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="car-outline" size={24} color="white" />
            <Text style={styles.sectionTitle}>Make & Model</Text>
          </View>
          <Pressable style={styles.selectButton}>
            <Text style={styles.selectButtonText}>Select Make & Model</Text>
          </Pressable>
        </View>

        {/* Location */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="location-outline" size={24} color="white" />
            <Text style={styles.sectionTitle}>Location</Text>
          </View>
          <Pressable style={styles.selectButton}>
            <Text style={styles.selectButtonText}>Europe</Text>
            <Ionicons name="chevron-down" size={20} color="#666" />
          </Pressable>
          <TouchableOpacity style={styles.expandButton}>
            <Ionicons name="add" size={24} color="#FFE94D" />
            <Text style={styles.expandButtonText}>
              Location, Radius (km), Cross-Border
            </Text>
          </TouchableOpacity>
        </View>

        {/* Price & Payment */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="pricetag-outline" size={24} color="white" />
            <Text style={styles.sectionTitle}>Price & Payment</Text>
          </View>
          <Pressable style={styles.selectButton}>
            <Text style={styles.selectButtonText}>Purchase Price</Text>
          </Pressable>
        </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  vehicleTypes: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  vehicleTypeButton: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedVehicleType: {
    backgroundColor: "#FFE94D",
  },
  section: {
    padding: 16,
    gap: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  selectButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 12,
  },
  selectButtonText: {
    fontSize: 16,
    color: "#666",
  },
  expandButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  expandButtonText: {
    fontSize: 14,
    color: "#FFE94D",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  navItem: {
    alignItems: "center",
  },
});
