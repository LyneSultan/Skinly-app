import { Button } from 'react-native-paper';
import { styles } from './style';

interface MyButtonProps {
  mode: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  text: string;
}

const ButtonComponent = ({ mode, text }: MyButtonProps) => {
  return (
    <Button
      mode={mode}
      onPress={() => console.log('Pressed')}
      style={[{ backgroundColor: styles.backgroundColor, borderRadius: styles.borderRadius }]}
    >
      {text}
    </Button >
  )
}

export default ButtonComponent;
