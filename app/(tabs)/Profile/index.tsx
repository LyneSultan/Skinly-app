import { colors } from "@/colors/colors";
import ButtonComponent from "@/components/base/Button";
import ProfileField from "@/components/ProfileField";
import { base } from "@/style/base";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { useProfileLogic } from "./useProfileLogic";

const Profile = () => {
  const { handleChange, handleEditToggle, handleLogOut, handlePickImage, isEditing, formData } = useProfileLogic();


  return (

    <View style={[base.default, base.flex]}>
      <View style={[style.container, base.alignCenter, base.justifyCenter]}>

        <Image
          source={require('@/assets/images/profile.png')}
          style={{ width: 400, height: 100, marginLeft: 80 }} />

        <View style={style.card}>

          <View style={[base.alignCenter, { marginBottom: 20 }]}>
            <Image
              source={{
                uri: formData.profile_picture
                  ? `${process.env.EXPO_PUBLIC_API_URL}/${formData.profile_picture}`
                  : "https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
              }}
              style={[style.profileImage]} />
            <TouchableOpacity onPress={() => handlePickImage()}>
              <Text style={{ color: colors.primary }}>Change profile image</Text>
            </TouchableOpacity>            </View>

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
              label="Email"
              value={formData.email}
              isEditing={isEditing}
              onChange={(text) => handleChange("email", text)}
            />
            <ProfileField
              label="Password"
              value={formData.password}
              isEditing={false}
              onChange={() => { }}
            />

            <ButtonComponent text="Log out" mode="outlined" onPress={handleLogOut} backgroundColor={colors.rose} />
          </View>

        </View>
      </View>
    </View>
  );
};

export default Profile;
