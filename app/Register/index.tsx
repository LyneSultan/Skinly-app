import ButtonComponent from "@/components/base/Button"
import { Input } from "@/components/base/Input"
import { base } from "@/style/base"
import { typography } from "@/style/typography"
import { Link } from "expo-router"
import { Text, View } from "react-native"
import { style } from "./style"
import { useRegisterLogic } from "./useRegisterLogic"

const Register = () => {

  const { setEmail, setName, setPassword, setPasswordConfirmation, handleRegister } = useRegisterLogic();

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
