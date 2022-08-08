import { StyleSheet } from 'react-native';
import { Theme } from '../../ui/theme/colors';

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
    },
  });

export default getStyles;
