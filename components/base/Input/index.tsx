import { TextInput } from 'react-native-paper';
import { styles, theme } from './styles';

interface inputProps {
  label: string;
  text: string;
}
export const Input = ({ label, text }: inputProps) => {

  return (
    <TextInput
      label={label}
      placeholder={text}
      value={""}
      mode="outlined"
      outlineStyle={styles.outline}
      theme={{ colors: theme }}
    />
  )
}
