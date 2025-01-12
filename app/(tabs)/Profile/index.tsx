import { colors } from "@/colors/colors";
import ProfileField from "@/components/ProfileField";
import { base } from "@/style/base";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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

             <ProfileField
                label="First name"
                value={formData.firstName}
                isEditing={isEditing}
                onChange={(text) => handleChange("firstName", text)}
              />
              <ProfileField
                label="Last name"
                value={formData.lastName}
                isEditing={isEditing}
                onChange={(text) => handleChange("lastName", text)}
              />
              <ProfileField
                label="Email"
                value={formData.email}
                isEditing={isEditing}
                onChange={(text) => handleChange("email", text)}
              />
              <ProfileField
                label="Skin type"
                value={formData.skinType}
                isEditing={isEditing}
                onChange={(text) => handleChange("skinType", text)}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
