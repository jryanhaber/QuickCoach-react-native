import { StackNavigator } from 'react-navigation';
import HomeScreen from '../Containers/HomeScreen';
import LaunchScreen from '../Containers/LaunchScreen';
import LoginScreen from '../Containers/LoginScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    LaunchScreen: { screen: HomeScreen },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: { title: 'Login' },
    },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      header: {
        style: styles.header,
      },
    },
  }
);

export default PrimaryNav;
