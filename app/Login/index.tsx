import ButtonComponent from "@/components/base/Button"
import { Input } from "@/components/base/Input"
import { routes } from "@/routes/server.routes"
import { base } from "@/style/base"
import { typography } from "@/style/typography"
import axios from 'axios'
import { Link } from "expo-router"
import { useState } from "react"
import { Text, View } from "react-native"
import { style } from "./style"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const handleLogin = async () => {
    const payload = {
      email,
      password,
    };

    try {
      const response = await axios.post(apiUrl + routes.login, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log('Response:', response);
      console.log('Response Data:', response.data);
    } catch (error) {
      console.error('Error Data:', error.response.data.message);
    };
  }

  return (
    <View style={[base.flex, base.alignCenter, base.default]}>
      <View style={[style.container]}>

        <View>
          <Text style={typography.h1}>Welcome back! Glad to see you, Again!</Text>
        </View>

        <View style={style.loginForm}>
          <Input label="Email" text="Enter your email" onChangeText={handleEmailChange}> </Input>
          <Input label="password" text="Enter your password" password={true} onChangeText={handlePasswordChange}></Input>
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
