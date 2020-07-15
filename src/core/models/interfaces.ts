import {
  NavigationScreenProp, NavigationState, NavigationParams,
} from 'react-navigation';

export interface INavigation {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
