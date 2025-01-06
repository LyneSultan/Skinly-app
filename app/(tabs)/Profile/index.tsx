import { base } from "@/style/base";
import React from "react";
import { Text, View } from "react-native";
import { style } from "./style";

const Profile = () => {
  return (
    <View style={[base.default, base.flex]}>
      <View style={[style.container, base.alignCenter, base.justifyCenter]}>
        <View style={style.card}>
          <View style={[style.details, base.gap]}>
            <View>
              <Text style={style.label}>first name</Text>
              <Text style={style.value}>Lyne</Text>
            </View>

            <View>
              <Text style={style.label}>Last name</Text>
              <Text style={style.value}>Al-Sultan</Text>
            </View>

            <View>
              <Text style={style.label}>Email</Text>
              <Text style={style.value}>Lynesultane@gmail.com</Text>
            </View>
            <View>
              <Text style={style.label}>Skin type</Text>
              <Text style={style.value}>normal</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

};



export default Profile;
