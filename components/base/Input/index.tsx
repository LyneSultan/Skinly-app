import { TextInput } from 'react-native-paper';
import { styles, theme } from './styles';

interface inputProps {
  label: string;
  text: string;
  password?: boolean
}
export const Input = ({ label, text, password }: inputProps) => {

  return (
    <TextInput
      label={label}
      placeholder={text}
      // value={""}
      secureTextEntry={password}

      mode="outlined"
      outlineStyle={styles.outline}
      theme={{ colors: theme }}
    />
  )
}
