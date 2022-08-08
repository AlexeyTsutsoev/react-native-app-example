import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { HomeStackParamList } from '../../navigation/HomeStack';
import AlertService from '../../utils/services/AlertService';
import PromiseService from '../../utils/services/PromiseService';

type ScreenNavigationProp = NavigationProp<
  HomeStackParamList,
  'LottieDemoScreen'
>;
type ScreenRouteProp = RouteProp<HomeStackParamList, 'LottieDemoScreen'>;

const useLottieDemoScreen = () => {
  // MARK - Navgaion
  const navigation = useNavigation<ScreenNavigationProp>();
  const route = useRoute<ScreenRouteProp>();

  // MARK - Screen State
  const [isLoading, setLoading] = useState(false);

  // MARK - Memo
  const savedName = useMemo(() => route.params.name, [route.params.name]);

  // MARK - Callbacks
  const showAlertWithDelay = useCallback(async () => {
    await PromiseService.sleep(5000);
    AlertService.showSimpleAlert('This Alert', savedName);
  }, [savedName]);

  // MARK - Effects
  useEffect(() => {
    showAlertWithDelay();
  }, [showAlertWithDelay]);

  // MARK - Helpers
  const navigateToSceleton = () => {
    navigation.navigate('SceletonExampleScreen', { delay: 1000 });
  };

  return {
    goBack: navigation.goBack,
    isLoading,
    setLoading,
    navigateToSceleton,
    savedName,
  };
};

export default useLottieDemoScreen;
