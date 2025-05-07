import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const isIPhoneWithNotch = Platform.OS === "ios" && insets.bottom > 0;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFE94D",
        tabBarInactiveTintColor: "#999",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1C1C1E",
          borderTopColor: "#333",
          borderTopWidth: 1,
          paddingTop: 8,
          paddingBottom: isIPhoneWithNotch ? Math.max(insets.bottom, 20) : 8,
          height: isIPhoneWithNotch ? 88 : 64,
        },
        tabBarLabelStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={24} color={color} />
          ),
        }}
      />
        <Tabs.Screen
            name="explore"
            options={{
                title: "Explore",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="car" size={24} color={color} />
                ),
            }}
        />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
