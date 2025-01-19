import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

const useVerificationLogic = () => {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();
  const { code } = useLocalSearchParams<{ code: string }>();
  const [inputs, setInputs] = useState(['', '', '', '']);

  useEffect(() => {
    console.log(`Email: ${email}`);
  }, [code]);

  const handleInputChange = (value: string, index: number) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
    console.log(updatedInputs.join(''));
    console.log('here');
  };

  const handleSubmit = () => {
    const verificationCode = inputs.join('');
    console.log(`Verification Code: ${verificationCode}`);
    if (code === verificationCode) {
      router.push(`/PasswordReset?email=${email}`);
    } else {
      console.log(`verifivation${verificationCode} while code is${code}`);
    }
  };
  return {
    inputs,
    handleInputChange,
    handleSubmit,
    email,
  };
};
export default useVerificationLogic;
