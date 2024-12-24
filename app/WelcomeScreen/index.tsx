import ButtonComponent from "@/components/base/Button";
import { base } from "@/style/base";
import { ImageBackground, Text, View } from "react-native";
import { style } from "./style";
import { useWelcomeLogic } from "./useWelcomeLogic";

const WelcomeScreen = () => {
  const { handleStart } = useWelcomeLogic();

  return (
    <ImageBackground
      source={require("./../../assets/images/welcome.png")}
      style={[style.background]}
      resizeMode="cover">

      <View style={[base.flex, base.alignCenter, base.spaceAround, base.default]}>

        <View>
          <Text style={[style.title]}>Skinly</Text>
        </View>

        <View></View>
        <View></View>

        <View style={[style.buttonContainer]}>
          <ButtonComponent text="Start" mode="contained" onPress={handleStart} />
        </View>

      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
