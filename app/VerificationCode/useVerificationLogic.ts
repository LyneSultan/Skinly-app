import { routes } from "@/routes/server.routes";
import axios from "axios";

const useVerifcationLogic = () => {
  const senCode = async (email: string) => {
    try {
      const response = await axios.post(process.env.EXPO_PUBLIC_API_URL + routes.veificationCode, {
        email,
      })
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    senCode,
  }
}
export default  useVerifcationLogic;
