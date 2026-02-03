import { StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <Text style={s.title}>Home</Text>
    </>
  );
}

const s = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});
