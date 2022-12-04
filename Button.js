import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Button(props) {
  return (
    <View>
      <Pressable
        style={props.value ? styles.selectedBox : styles.noneSelectedBox}
        android_ripple={{ color: "#ccc" }}
        onPress={props.toggle}
      >
        <Text style={styles.text}>This is Button</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  noneSelectedBox: {
    width: 100,
    height: 70,
    margin: 8,
    backgroundColor: "#7B888A",
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedBox: {
    width: 100,
    height: 70,
    margin: 8,
    backgroundColor: "white",
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",

    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
