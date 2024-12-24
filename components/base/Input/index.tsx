import { TextInput } from 'react-native-paper';
import { styles, theme } from './styles';

type InputProps = {
  label: string;
  text: string;
  password?: boolean;
}

export const Input = ({ label, text, password }: InputProps) => {
  return (
    <TextInput
      label={label}
      placeholder={text}
      secureTextEntry={password}
      mode="outlined"
      outlineStyle={styles.outline}
      theme={{ colors: theme }}
      style={{ height: 45 }}
    />
  );
};
