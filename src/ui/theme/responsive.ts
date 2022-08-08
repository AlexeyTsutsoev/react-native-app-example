import { Dimensions } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

/**
 * Width from design
 */
export const LAYOUT_WIDTH = 375;
/**
 * Height from design
 */
export const LAYOUT_HEIGHT = 812;

/**
 * Height from Dimensions
 */
export const DEVICE_HEIGHT = Dimensions.get('window').height;
/**
 * Width from Dimensions
 */
export const DEVICE_WIDTH = Dimensions.get('window').width;

/**
 * Get scalable height by design
 * @param size number
 * @returns number
 */
export const hp = (size: number) =>
  heightPercentageToDP((size / LAYOUT_HEIGHT) * 100);

/**
 * Get scalable width by design
 * @param size number
 * @returns number
 */

export const wp = (size: number) =>
  widthPercentageToDP((size / LAYOUT_WIDTH) * 100);

/**
 * Default paddings
 */
export const paddings = {
  horizontal: {
    xLarge: wp(24),
    large: wp(16),
    medium: wp(12),
    small: wp(8),
    xSmall: wp(4),
  },
  vertical: {
    scrollPadding: hp(50),
    xLarge: hp(24),
    large: hp(16),
    medium: hp(12),
    small: hp(8),
    xSmall: hp(4),
  },
};
