import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings84234Navigator from '../features/Settings84234/navigator';
import UserProfile84227Navigator from '../features/UserProfile84227/navigator';
import Settings84226Navigator from '../features/Settings84226/navigator';
import Settings84224Navigator from '../features/Settings84224/navigator';
import SignIn284222Navigator from '../features/SignIn284222/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings84234: { screen: Settings84234Navigator },
UserProfile84227: { screen: UserProfile84227Navigator },
Settings84226: { screen: Settings84226Navigator },
Settings84224: { screen: Settings84224Navigator },
SignIn284222: { screen: SignIn284222Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
