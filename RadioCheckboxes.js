import Checkbox from "expo-checkbox";
import { View, Text, StyleSheet } from "react-native";


// This allow you no default value at start compared to option where default is existed.

export default function DrinkRadioGroup(props) {

  // For toggling Radio + Checkbox list (let other become false, only selected wont)
  function toggleHandler(option) {
    for (const [key, value] of Object.entries(sugarOptions)) {
      if (key === option) {
        setOptions((prevState) => {
          return { ...prevState, [key]: !value };
        });
      } else {
        setOptions((prevState) => {
          return { ...prevState, [key]: false };
        });
      }
    }
  }
  

  //Used for rendering drink under sugar category (Checkbox + radio)
  function renderingItem(data) {
    return data.map((item) => (
      <View style={styles.checkboxContainer} key={item}>
        <Checkbox
          value={sugarOptions[item]}
          onValueChange={() => toggleSugarHandler(item)}
          style={styles.checkbox}
        />
        <Text style={styles.textCheckbox}>{item}</Text>
      </View>
    ));
  }


  
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
