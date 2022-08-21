import AlertService from '../../../utils/services/AlertService';
import FeedbackService from '../../../utils/services/FeedbackService';

export type PopUpItemType = {
  title: string;
  onPress?: () => void;
  color?: string;
};

// MARK - Temp
// TODO - move to react-context
export const POP_UP_ITEMS: PopUpItemType[] = [
  {
    title: 'show alert',
    onPress: () => AlertService.showSimpleAlert('Test Alert'),
  },
  {
    title: 'show animations',
    // TODO - add onPress
  },
  {
    title: 'impact',
    onPress: () => FeedbackService.lightImpact(),
  },
];
