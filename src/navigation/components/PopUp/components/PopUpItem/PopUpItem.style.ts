import { StyleSheet } from 'react-native';

import colors from '../../../../../ui/theme/colors';
import { wp, hp } from '../../../../../ui/theme/responsive';

const getStyles = (color?: string) =>
  StyleSheet.create({
    container: {
      width: wp(150),

      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: color ?? colors.dark.primary,

      borderRadius: 20,

      marginVertical: hp(5),
      paddingVertical: hp(5),
    },
  });

export default getStyles;
