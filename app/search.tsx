import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const vehicleTypes = [
  { id: "car", icon: "car-sport", label: "Car" },
  { id: "bicycle", icon: "bicycle", label: "Bicycle" },
  { id: "bus", icon: "bus", label: "Bus" },
  { id: "motorcycle", icon: "motorcycle", label: "Motorcycle" },
];

export default function SearchScreen() {
  const router = useRouter();
  const [selectedType, setSelectedType] = React.useState("car");

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <SafeAreaView>
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
                name={type.icon as any}
                size={24}
                color={selectedType === type.id ? "black" : "white"}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Make & Model */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="car" size={24} color="white" />
            <Text style={styles.sectionTitle}>Make & Model</Text>
          </View>
          <Pressable style={styles.selectButton}>
            <Text style={styles.selectButtonText}>Select Make & Model</Text>
          </Pressable>
        </View>

        {/* Location */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="location" size={24} color="white" />
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
            <Ionicons name="pricetag" size={24} color="white" />
            <Text style={styles.sectionTitle}>Price & Payment</Text>
          </View>
          <Pressable style={styles.selectButton}>
            <Text style={styles.selectButtonText}>Purchase Price</Text>
          </Pressable>
        </View>
      </SafeAreaView>
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
  vehicleTypes: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  vehicleTypeButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: "#1C1C1E",
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
});
