import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./style";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Lyne",
    lastName: "Al-Sultan",
    email: "Lynesultane@gmail.com",
    skinType: "normal",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <View style={{ backgroundColor: colors.background }}>
      <View style={[base.default, base.flex]}>
        <View style={[style.container, base.alignCenter, base.justifyCenter]}>
          <View style={style.card}>
            <View style={[base.flex, base.row, base.spaceBetween]}>
              <Text style={style.title}>Personal Details</Text>
              <TouchableOpacity onPress={handleEditToggle}>
                <Text style={style.editButton}>{isEditing ? "save" : "edit"}</Text>
              </TouchableOpacity>
            </View>
            <View style={[style.details, base.gap]}>
              <View>
                <Text style={style.label}>first name</Text>
                {isEditing ? (
                  <TextInput
                    style={style.input}
                    value={formData.firstName}
                    onChangeText={(text) => handleChange("firstName", text)}
                  />
                ) : (
                  <Text style={style.value}>{formData.firstName}</Text>
                )}
              </View>

              <View>
                <Text style={style.label}>Last name</Text>
                {isEditing ? (
                  <TextInput
                    style={style.input}
                    value={formData.lastName}
                    onChangeText={(text) => handleChange("lastName", text)}
                  />
                ) : (
                  <Text style={style.value}>{formData.lastName}</Text>
                )}
              </View>

              <View>
                <Text style={style.label}>Email</Text>
                {isEditing ? (
                  <TextInput
                    style={style.input}
                    value={formData.email}
                    onChangeText={(text) => handleChange("email", text)}
                  />
                ) : (
                  <Text style={style.value}>{formData.email}</Text>
                )}
              </View>
              <View>
                <Text style={style.label}>Skin type</Text>
                {isEditing ? (
                  <TextInput
                    style={style.input}
                    value={formData.skinType}
                    onChangeText={(text) => handleChange("skinType", text)}
                  />
                ) : (
                  <Text style={style.value}>{formData.skinType}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
