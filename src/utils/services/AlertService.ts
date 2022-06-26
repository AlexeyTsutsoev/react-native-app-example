import {Alert} from 'react-native';

type ShowConfirmationAlertArgs = {
  title: string;
  description?: string;
  onCancelPress?: () => void;
  onConfirmPress: () => void;
};

export default class AlertService {
  static showSimpleAlert(title: string, description?: string) {
    Alert.alert(title, description);
  }

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
