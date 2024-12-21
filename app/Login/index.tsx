import ButtonComponent from "@/components/base/Button"
import { Input } from "@/components/base/Input"
import { base } from "@/style/base"
import { typography } from "@/style/typography"
import { Link } from "expo-router"
import { Image, Text, View } from "react-native"
import { style } from "./style"
import { useLoginLogic } from "./useLoginLogic"

const Login = () => {
  const { handleLogin } = useLoginLogic();
  return (
    <View style={[base.flex, base.alignCenter]}>
      <View style={[style.container]}>
        <Image source={require('@/assets/images/backIcon.png')} />

        <View>
          <Text style={typography.h1}>Welcome back! Glad to see you, Again!</Text>
        </View>

        <View style={style.loginForm}>
          <Input label="Name" text="Enter your name"></Input>
          <Input label="password" text="Enter your password" password={true}></Input>
        </View>

        <View style={base.flex}>
          <View style={style.forgetPassword}>
            <Text>Forgot Password?</Text>
          </View>
        </View>

        <ButtonComponent mode="contained" text="Login" onPress={handleLogin} />


        <View style={[base.flex, base.row, base.justifyCenter]}>
          <Text>Don ‘t have an account? <Link href="/Register"><Text style={[style.login, typography.bold]}>Register</Text> </Link> </Text>
        </View>
      </View >
    </View>)
}
export default Login;
