import { colors } from "@/colors/colors"
import ButtonComponent from "@/components/base/Button"
import { Input } from "@/components/base/Input"
import { base } from "@/style/base"
import { typography } from "@/style/typography"
import { Link } from "expo-router"
import { Image, Text, View } from "react-native"
import { style } from "./style"
import { useRegisterLogic } from "./useRegisterLogic"

const Register = () => {

  const { setEmail, setName, setPassword, setPasswordConfirmation, handleRegister, errorMessages } = useRegisterLogic();

  return (
    <View style={{ backgroundColor: colors.background }}>

      <View style={[, base.flex, base.alignCenter, base.default,]}>

        <View style={[style.container]}>
          <View style={[base.alignCenter, base.flex, base.column, base.gap]}>
            <Image source={require('@/assets/images/logo.png')} style={[style.loginImage]} />
            <Text style={[style.title]}>Skinly</Text>
          </View>
          <View>
            <Text style={typography.h1}>Hello! Register to get started</Text>
          </View>

          <View style={style.registerForm}>
            <Input label="Name" text="Enter Your Name" onChangeText={(value) => setName(value)} />
            <Input label="Email" text="Enter Your Email" onChangeText={(value) => setEmail(value)} />
            <Input label="Password" text="Enter Your Password" password={true} onChangeText={(value) => setPassword(value)} />
            <Input label="Confirm password" text="Enter Your Password Again" onChangeText={(value) => setPasswordConfirmation(value)} />
          </View>

          {errorMessages.length > 0 && (
            <View >
              {errorMessages.map((msg, index) => (
                <Text key={index} style={style.error}>
                  * {msg}
                </Text>
              ))}
            </View>
          )}

          <ButtonComponent mode="contained" text="Register" onPress={handleRegister} />

          <View style={[base.flex, base.row, base.justifyCenter]}>
            <Text>Already have an account?  <Link href={"/Login"}><Text style={[style.register, typography.bold]}>Login</Text> </Link> </Text>
          </View>


        </View>
      </View>
    </View>

  )
}
export default Register;
