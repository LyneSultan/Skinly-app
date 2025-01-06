import { Text, View } from "react-native";
import { styles } from "./style";

export const StepItem = ({ stepNumber, text }: { stepNumber: number, text: string, image: any }) => {
  return (
    <View style={styles.stepContainer}>
      <View style={styles.circle}>
        <Text style={styles.stepText}>{stepNumber}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.stepDescription}>{text}</Text>
      </View>
    </View>
  );
};
