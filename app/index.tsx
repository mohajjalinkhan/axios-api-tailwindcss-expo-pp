import { StyleSheet, Text, View } from "react-native";
import "../global.css";
import RandomUser from "./RandomUser";
import "../global.css";
export default function Index() {
  return (
    <View style={style.container}>
      <RandomUser />
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
