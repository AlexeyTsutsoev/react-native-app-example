import ReactNativeHapticFeedback, {
  HapticFeedbackTypes,
  HapticOptions,
} from 'react-native-haptic-feedback';

export default class FeedbackService {
  static lightImpact() {
    ReactNativeHapticFeedback.trigger('impactLight');
  }

  static mediumImpact() {
    ReactNativeHapticFeedback.trigger('impactMedium');
  }

  static heavyImpact() {
    ReactNativeHapticFeedback.trigger('impactHeavy');
  }

  static customImpact(type: HapticFeedbackTypes, options?: HapticOptions) {
    ReactNativeHapticFeedback.trigger(type, options);
  }
}
