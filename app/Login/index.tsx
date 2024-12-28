import ButtonComponent from "@/components/base/Button"
import { Input } from "@/components/base/Input"
import { base } from "@/style/base"
import { typography } from "@/style/typography"
import { Link } from "expo-router"
import { Text, View } from "react-native"
import { style } from "./style"
import { useLoginLogic } from "./useLoginLogic"

const Login = () => {
  const { setEmail, setPassword, handleLogin, errorMessages } = useLoginLogic();

  return (
    <View style={[base.flex, base.alignCenter, base.default]}>
      <View style={[style.container]}>

        <View>
          <Text style={typography.h1}>Welcome back! Glad to see you, Again!</Text>
        </View>

        <View style={style.loginForm}>
          <Input label="Email" text="Enter your email" onChangeText={(value) => setEmail(value)} />
          <Input label="Password" text="Enter your password" password={true} onChangeText={(password) => setPassword(password)} />
        </View>

        <View style={base.flex}>
          <View style={style.forgetPassword}>
            <Text>Forgot Password?</Text>
          </View>
        </View>

        {errorMessages.length > 0 && (
          <View >
            {errorMessages.map((msg) => (
              <Text style={style.errorText}>
                * {msg}
              </Text>
            ))}
          </View>
        )}

        <ButtonComponent mode="contained" text="Login" onPress={handleLogin} />


        <View style={[base.flex, base.row, base.justifyCenter]}>
          <Text>Don ‘t have an account? <Link href="/Register"><Text style={[style.login, typography.bold]}>Register</Text> </Link> </Text>
        </View>
      </View >
    </View>
  )
}
export default Login;
