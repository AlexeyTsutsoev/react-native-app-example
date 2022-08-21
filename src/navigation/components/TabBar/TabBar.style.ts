import { StyleSheet } from 'react-native';

import { EdgeInsets } from 'react-native-safe-area-context';

import { Theme } from '../../../ui/theme/colors';
import { hp, wp } from '../../../ui/theme/responsive';

const getStyles = (insents: EdgeInsets, theme: Theme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    height: hp(90),

    paddingBottom: insents.bottom,
    paddingHorizontal: wp(20),
  },

  centralTab: {
    top: -hp(15),

    backgroundColor: theme.primary,
    
    borderRadius: 100,
  }
});

export default getStyles;
