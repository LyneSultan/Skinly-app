import ButtonComponent from "@/components/base/Button"
import { Input } from "@/components/base/Input"
import { routes } from "@/routes/server.routes"
import { base } from "@/style/base"
import { typography } from "@/style/typography"
import axios from 'axios'
import { Link } from "expo-router"
import { Text, View } from "react-native"
import { style } from "./style"

const Login = () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const handleLogin = async () => {
    const payload = {
      email: "hello1111@gmail.com",
      password: "1111111",
    };

    const response = await axios.post(apiUrl + routes.login, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data);
  };

  return (
    <View style={[base.flex, base.alignCenter, base.default]}>
      <View style={[style.container]}>

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
