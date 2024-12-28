import ButtonComponent from "@/components/base/Button"
import { Input } from "@/components/base/Input"
import { routes } from "@/routes/server.routes"
import { base } from "@/style/base"
import { typography } from "@/style/typography"
import axios from "axios"
import { Link, router } from "expo-router"
import { useState } from "react"
import { Text, View } from "react-native"
import { style } from "./style"

const Register = () => {
  // const { handleRegister } = useRegisterLogic();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const handleRegister = async () => {
    const payload = {
      name,
      password_confirmation,
      email,
      password,
    };
    console.log(apiUrl);

    try {
      const response = await axios.post(apiUrl + routes.register, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const token = response.data.access_token;

      // await AsyncStorage.setItem('authToken', token);

      // const storedToken = await AsyncStorage.getItem('authToken');
      // console.log('Stored Token:', storedToken);
      router.push('/(tabs)/HomeScreen')
    } catch (error) {
      console.error('Error Data:', error.response.data.message);
    };
  }

  return (
    <View style={[base.flex, base.alignCenter, base.default]}>
      <View style={[style.container]}>

        <View>
          <Text style={typography.h1}>Hello! Register to get started</Text>
        </View>

        <View style={style.registerForm}>
          <Input label="name" text="enter your name" onChangeText={(value) => setName(value)} />
          <Input label="email" text="enter your email" onChangeText={(value) => setEmail(value)} />
          <Input label="password" text="enter your password" password={true} onChangeText={(value) => setPassword(value)} />
          <Input label="Confirm password" text="enter your password again" onChangeText={(value) => setPasswordConfirmation(value)} />
        </View>
        <ButtonComponent mode="contained" text="Register" onPress={handleRegister} />


        <View style={[base.flex, base.row, base.justifyCenter]}>
          <Text>Already have an account?  <Link href={"/Login"}><Text style={[style.register, typography.bold]}>Login</Text> </Link> </Text>
        </View>

      </View>
    </View>

  )
}
export default Register;
