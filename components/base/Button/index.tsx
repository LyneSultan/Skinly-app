import { colors } from '@/colors/colors';
import { Button } from 'react-native-paper';
import { styles } from './style';

type buttonProps = {
  mode?: 'text' | 'outlined' | 'contained';
  text: string;
  onPress?: () => void;
  disabled?: boolean;
}

const ButtonComponent = ({ mode = 'contained', text, onPress, disabled = false }: buttonProps) => {
  return (
    <Button
      mode={mode}
      textColor="#000000"
      onPress={onPress}
      style={[
        styles.button,
        mode === 'outlined' && {
          backgroundColor: 'white',
          borderColor: colors.secondary,
          borderWidth: 3,
        },
        disabled && { opacity: 0.5 },

      ]}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
export default ButtonComponent;
