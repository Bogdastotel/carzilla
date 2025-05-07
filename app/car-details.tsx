import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Share,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("window");

export default function CarDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this ${params.title} for €${params.price}!`,
        url: "https://carzilla.app/cars/" + params.id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCall = () => {
    // Implement call functionality
  };

  const handleMessage = () => {
    // Implement message functionality
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <SafeAreaView style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.headerButton}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Car Details</Text>
        <TouchableOpacity onPress={() => {}} style={styles.headerButton}>
          <Ionicons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView style={styles.content}>
        {/* Car Image */}
        <View style={styles.imageContainer}>
          <Image
            source={
              params.image
                ? { uri: params.image }
                : require("../assets/images/placeholder-car.png")
            }
            style={styles.carImage}
            resizeMode="contain"
          />
          <View style={styles.imageDots}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Car Info */}
        <View style={styles.infoContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.carTitle}>{params.title}</Text>
            <TouchableOpacity onPress={handleShare}>
              <Ionicons name="share-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <Text style={styles.description} numberOfLines={2}>
            {params.details ||
              "Electric side mirrors, seat heating, Navigation system, Head-up display, light sensor..."}
            <Text style={styles.readMore}> Read More</Text>
          </Text>

          {/* Overview */}
          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.overviewGrid}>
            <View style={styles.overviewItem}>
              <Ionicons name="speedometer-outline" size={24} color="#FFE94D" />
              <Text style={styles.overviewLabel}>Max Power</Text>
              <Text style={styles.overviewValue}>105hp</Text>
            </View>
            <View style={styles.overviewItem}>
              <Ionicons name="navigate-outline" size={24} color="#FFE94D" />
              <Text style={styles.overviewLabel}>Mileage</Text>
              <Text style={styles.overviewValue}>315k/mh</Text>
            </View>
            <View style={styles.overviewItem}>
              <Ionicons name="people-outline" size={24} color="#FFE94D" />
              <Text style={styles.overviewLabel}>Capacity</Text>
              <Text style={styles.overviewValue}>4 Seats</Text>
            </View>
          </View>

          {/* Price */}
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Car Price</Text>
            <Text style={styles.price}>€{params.price}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <SafeAreaView style={styles.bottomActions}>
        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <Ionicons name="call" size={24} color="black" />
          <Text style={styles.callButtonText}>Call Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageButton} onPress={handleMessage}>
          <Ionicons name="mail" size={24} color="white" />
        </TouchableOpacity>
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
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    width: width,
    height: width * 0.7,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  carImage: {
    width: "90%",
    height: "90%",
  },
  imageDots: {
    flexDirection: "row",
    gap: 8,
    position: "absolute",
    bottom: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#666",
  },
  activeDot: {
    backgroundColor: "#FFE94D",
  },
  infoContainer: {
    padding: 16,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  carTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    color: "#999",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24,
  },
  readMore: {
    color: "#FFE94D",
  },
  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  overviewGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  overviewItem: {
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    padding: 16,
    borderRadius: 12,
    width: (width - 48) / 3,
  },
  overviewLabel: {
    color: "#999",
    fontSize: 12,
    marginTop: 8,
  },
  overviewValue: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 4,
  },
  priceContainer: {
    marginBottom: 16,
  },
  priceLabel: {
    color: "#999",
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  bottomActions: {
    flexDirection: "row",
    gap: 12,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#222",
  },
  callButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFE94D",
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  callButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  messageButton: {
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1C1C1E",
    padding: 16,
    borderRadius: 12,
  },
});
