import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Hello World! How are you Edit app/index.tsx to edit this screen.</Text>
      <Link href="/login" style={styles.btn}>
        Go to Login Page
      </Link>
    </View> 
  );
}

const styles = StyleSheet.create({
  view: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      },
  btn: {marginTop:20, color: "blue", width: "auto", backgroundColor: "white",  borderRadius: 2,}
});