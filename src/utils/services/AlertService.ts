import { Alert } from 'react-native';

type ShowConfirmationAlertArgs = {
  title: string;
  description?: string;
  onCancelPress?: () => void;
  onConfirmPress: () => void;
};

/**
 * Service for simple work with Alert from React-Native
 */
export default class AlertService {
  /**
   * Call this method if you need inform user
   */
  static showSimpleAlert(title: string, description?: string) {
    Alert.alert(title, description);
  }

  /**
   * Base method for confirm some info from user
   */
  static showConfirmationAlert({
    title,
    description,
    onCancelPress,
    onConfirmPress,
  }: ShowConfirmationAlertArgs) {
    Alert.alert(title, description, [
      {
        text: 'Cancel',
        style: 'destructive',
        onPress: onCancelPress,
      },
      {
        text: 'Confirm',
        style: 'default',
        onPress: onConfirmPress,
      },
    ]);
  }
}
