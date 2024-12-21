import { colors } from '@/colors/colors';
import { Button } from 'react-native-paper';
import { styles } from './style';

interface buttonProps {
  mode: 'text' | 'outlined' | 'contained';
  text: string;
  onPress?: () => void;
}

const ButtonComponent = ({ mode, text, onPress }: buttonProps) => {
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
      ]}
    >
      {text}
    </Button>
  );
};
export default ButtonComponent;
