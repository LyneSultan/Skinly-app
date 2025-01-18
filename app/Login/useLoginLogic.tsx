import { routes } from "@/routes/server.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import AppContext from "./../context/userContext";

export const useLoginLogic = () => {
  const router = useRouter();
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const handleLogin = async () => {
    const payload = { email, password };

    if (!email || !password) {
      setErrorMessages(["All elements are required"]);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(apiUrl + routes.login, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const token = response.data.access_token;

      await AsyncStorage.setItem("authToken", token);

      setErrorMessages([]);
      setLoading(false);

      setUser(response.data.user);
      console.log("data", response.data);

      if (response.data.user.user_type === "user") {
        router.replace("/(tabs)/HomeScreen");

      } else if (response.data.user.user_type === "company") {
        router.replace("/Company");
      }

    } catch (error: any) {
      setLoading(false);
      setErrorMessages(error.response.data.message);
    }
  };

  return {
    handleLogin,
    setEmail,
    setPassword,
    errorMessages,
    loading,
  };
};
