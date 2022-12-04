import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function QuitButton(props) {
  return (
    <Pressable onPress={props.onPress}>
      <Entypo
        name="circle-with-cross"
        size={35}
        color="red"
        style={{ opacity: 0.5 }}
      />
    </Pressable>
  );
}
