import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#f4f4f4",
          borderTopWidth: 8,
          borderTopColor: "#000000",
          height: 70,
          paddingTop: 5,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: -10,
          },
          shadowOpacity: 1,
          shadowRadius: 30,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("@/assets/icons8-casa.gif")} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={s.iconTab}
              source={require("@/assets/icons8-pesquisa.gif")}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const s = StyleSheet.create({
  iconTab: {
    width: 30,
    height: 30,
  },
});
