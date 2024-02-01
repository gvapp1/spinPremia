
import MainNavigator from './src/navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/themes/theme';

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <MainNavigator />
    </NavigationContainer>
  );
}

