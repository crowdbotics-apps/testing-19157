import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile84241Navigator from '../features/UserProfile84241/navigator';
import Settings84240Navigator from '../features/Settings84240/navigator';
import Settings84238Navigator from '../features/Settings84238/navigator';
import SignIn284236Navigator from '../features/SignIn284236/navigator';
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
UserProfile84241: { screen: UserProfile84241Navigator },
Settings84240: { screen: Settings84240Navigator },
Settings84238: { screen: Settings84238Navigator },
SignIn284236: { screen: SignIn284236Navigator },
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
