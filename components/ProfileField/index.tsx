import { style } from "@/app/(tabs)/Profile/style";
import { Text, TextInput, View } from "react-native";

const ProfileField = ({ label, value, isEditing, onChange }) => (
  <View>
    <Text style={style.label}>{label}</Text>
    {isEditing ? (
      <TextInput
        style={style.input}
        value={value}
        onChangeText={onChange}
      />
    ) : (
      <Text style={style.value}>{value}</Text>
    )}
  </View>
);
export default ProfileField;
