import { colors } from '@/colors/colors';
import { Button } from 'react-native-paper';
import { styles } from './style';

type buttonProps = {
  mode?: 'text' | 'outlined' | 'contained';
  text: string;
  onPress?: () => void;
  disabled?: boolean;
  backgroundColor?: string;
}

const ButtonComponent = ({ mode = 'contained', text, onPress, disabled = false, backgroundColor = colors.secondary }: buttonProps) => {
  return (
    <Button
      mode={mode}
      textColor="#000000"
      onPress={onPress}
      labelStyle={{ fontWeight: '700' }}
      style={[
        styles.button,
        mode === 'outlined' && {
          backgroundColor: 'white',
          borderColor: colors.rose,
          borderWidth: 3,
        },
        disabled && { opacity: 0.5 },
        backgroundColor && { backgroundColor }

      ]}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
export default ButtonComponent;
