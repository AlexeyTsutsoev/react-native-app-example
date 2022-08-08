import { FC } from 'react';
import { SvgProps } from 'react-native-svg';
import { RootAppParamList } from '../../TabNavigator';
import Icon from '../../../ui/assets/svgs/bottom-icon.svg';
import Plus from '../../../ui/assets/svgs/icon-plus.svg';

export type TabItem = {
  route?: keyof RootAppParamList;
  Icon: FC<SvgProps>;
  index?: number;
};

const TAB_ITEMS: TabItem[] = [
  {
    route: 'HomeNavigator',
    Icon: Icon,
    index: 0,
  },
  {
    route: 'StoreNavigation',
    Icon: Icon,
    index: 1,
  },
  {
    Icon: Plus,
  },
  {
    route: 'OrdersNavigation',
    Icon: Icon,
    index: 2,
  },
  {
    route: 'SettingNavigation',
    Icon: Icon,
    index: 3,
  },
];

export default TAB_ITEMS;
