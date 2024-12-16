import ButtonComponent from "@/components/base/Button"
import { Input } from "@/components/base/Input"
import { base } from "@/style/base"
import { typography } from "@/style/typography"
import { Image, Text, View } from "react-native"
import { style } from "./style"

export const Register = () => {
  return (
    <View style={[style.container]}>
      <Image source={require('@/assets/images/backIcon.png')} />

      <View>
        <Text style={typography.h1}>Hello! Register to get started</Text>
      </View>

      <View style={style.registerForm}>
        <Input label="name" text="enter your name" />
        <Input label="email" text="enter your email" />
        <Input label="password" text="enter your password" password={true} />
        <Input label="Confirm password" text="enter your password again" />
      </View>
      <ButtonComponent mode="contained" text="Login" />


      <View style={[base.flex, base.row, base.justifyCenter]}>
        <Text>Don ‘t have an account?<Text style={[style.register, typography.bold]}>Register</Text>  </Text>
      </View>

    </View>

  )
}
