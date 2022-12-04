import { View, Text, StyleSheet, Button } from "react-native";
import { useEffect, useLayoutEffect, useState, useContext } from "react";


export default function Modal({ route, navigation }) {

  useLayoutEffect(() =>
    navigation.setOptions({
      presentation: "transparentModal",
      headerShown: false,
      cardOverlayEnabled: true,
    })
  );


  // MAIN CODE
  return (
    // Semi-transparent background
    <View style={styles.modalContainer}>
      {/* Middle modal container*/}
      <View style={styles.innerContainer}>
        <Text>Put your contents here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    backgroundColor: "white",
    width: "90%",
    height: "90%",
    borderRadius: 8,
    elevation: 5,
    borderWidth: 6,
    borderColor: "black",
  },
});
