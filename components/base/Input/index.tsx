import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { styles, theme } from './styles';

type InputProps = {
  label: string;
  text: string;
  password?: boolean;
  errorText?: string;
  hasErrors?: boolean;
  onChangeText?: (text: string) => void;
}

export const Input = ({ label, text, password, onChangeText, errorText, hasErrors }: InputProps) => {
  return (
    <View>
      <TextInput
        label={label}
        placeholder={text}
        secureTextEntry={password}
        onChangeText={onChangeText}
        mode="outlined"
        outlineStyle={styles.outline}
        theme={{ colors: theme }}
        style={{ height: 50 }}
        error={hasErrors}
      />
      {hasErrors && (
        <HelperText type="error" visible={hasErrors} >
          {errorText}
        </HelperText>
      )}

    </View>
  );
};
