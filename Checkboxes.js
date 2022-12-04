import Checkbox from "expo-checkbox";
import { View, Text, StyleSheet } from "react-native";

export default function Checkbox() {
  //Used for rendering food under choose category (Checkbox)
  function renderingItem(data) {
    return data.map((item) => (
      <View style={styles.checkboxContainer} key={item}>
        <Checkbox
          value={chooseOptions[item]}
          onValueChange={(value) =>
            setChooseOptions((prevState) => {
              return {
                ...prevState,
                [item]: value,
              };
            })
          }
          style={styles.checkbox}
        />
        <Text style={styles.textCheckbox}>YOUR DATA NAME</Text>
      </View>
    ));
  }

  // MAIN CODE

  return <View>{renderingItem(YOURDATA)}</View>;
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 2,
    paddingVertical: 8,
    backgroundColor: "#F5F6F3",
  },
  checkbox: {
    marginHorizontal: 5,
    height: 25,
    width: 25,
    justifyContent: "center",
  },
  textCheckbox: {
    fontSize: 16,
  },
});
