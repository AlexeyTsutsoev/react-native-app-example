import { useColorScheme } from 'react-native';
import colors from '../ui/theme/colors';

const useTheme = () => {
  const scheme = useColorScheme();

  const theme = scheme === 'dark' ? colors.dark : colors.light;

  return theme;
};

export default useTheme;
