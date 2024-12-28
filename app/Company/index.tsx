import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

const Company = () => {
  return (
    <View style={[base.default]}>
      <View style={[base.gap]}>
        <Text style={[typography.h1]}>Promote your products to users effectively</Text>
        <Searchbar
          placeholder="Search"
          style={{ backgroundColor: colors.primary }} />
      </View>

    </View>
  )
}
export default Company;
