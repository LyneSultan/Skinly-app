import { Text, View } from "react-native";
import ButtonComponent from "./../components/base/Button/Button";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,

      }}
    >
      <ButtonComponent mode="contained" text="here" />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
