import { routes } from "@/routes/server.routes";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";

const useForgetLogic = () => {
  const [error, setError] = useState("");

  const senCode = async (email: string) => {
    setError("");
    if (!email) {
      setError("Email is required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      const response = await axios.post(process.env.EXPO_PUBLIC_API_URL + routes.veificationCode, {
        email,
      })
      const code = response.data;
      router.push(`/VerificationCode?code=${code}&&email=${email}`)
      
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    senCode,
    error
  }
}
export default  useForgetLogic;
