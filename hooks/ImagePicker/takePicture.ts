import * as ImagePicker from 'expo-image-picker';

export const TakePicture =  () => {

  const takePicture = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Permission to access camera is required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled && result.assets.length > 0) {
     return result.assets[0].uri;
    }
  }

  return {
    takePicture
  }

}
