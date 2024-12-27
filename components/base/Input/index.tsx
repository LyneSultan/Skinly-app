import { HelperText, TextInput } from 'react-native-paper';
import { styles, theme } from './styles';

type InputProps = {
  label: string;
  text: string;
  password?: boolean;
  errorText?: string;
  hasErrors?: boolean;
}

export const Input = ({ label, text, password, errorText, hasErrors }: InputProps) => {
  return (
    <>
      <TextInput
        label={label}
        placeholder={text}
        secureTextEntry={password}
        mode="outlined"
        outlineStyle={styles.outline}
        theme={{ colors: theme }}
        style={{ height: 45 }}
        error={hasErrors}
      />
      {hasErrors && (
        <HelperText type="error" visible={hasErrors} >
          {errorText}
        </HelperText>
      )}

    </>
  );
};
