import { StyleSheet } from 'react-native';
import { hp, wp } from '../../../ui/theme/responsive';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingVertical: hp(20),
    paddingHorizontal: wp(10),
  },
});

export default styles;
