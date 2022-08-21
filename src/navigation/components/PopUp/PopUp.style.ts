import { StyleSheet } from 'react-native';

import { hp } from '../../../ui/theme/responsive';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  innerContainer: {
    width: '100%',
    height: '100%',

    alignItems: 'center',
    justifyContent: 'flex-end',

    paddingVertical: hp(120),
  },

  separatorStyle: {
    height: hp(10),
  },
});

export default styles;
