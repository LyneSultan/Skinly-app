import { Button } from 'react-native-paper';
import { styles } from './style';

interface buttonProps {
  mode: 'text' | 'outlined' | 'contained';
  text: string;
}

const ButtonComponent = ({ mode, text }: buttonProps) => {
  return (
    <Button
      mode={mode}
      onPress={() => console.log('Pressed')}
      style={styles.button}
    >
      {text}
    </Button >
  )
}

export default ButtonComponent;
