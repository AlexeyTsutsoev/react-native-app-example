import { StyleSheet } from 'react-native';

import { EdgeInsets } from 'react-native-safe-area-context';

import { Theme } from '../../../ui/theme/colors';
import { hp, wp } from '../../../ui/theme/responsive';

const getStyles = (theme: Theme, insents: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      paddingTop: insents.top + hp(20),
      paddingBottom: hp(20),
      paddingHorizontal: wp(20),
      borderBottomColor: theme.info,
      borderBottomWidth: 1,
    },

    nonVisible: {
      width: 1,
      height: 1,

      opacity: 0,
    },
  });

export default getStyles;
