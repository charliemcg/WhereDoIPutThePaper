import { Dimensions } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import Home from "../Home";
import About from "../About";
import Twinning from "../Twinning";
import Contact from "../Contact";
import colors from "../../colors";

/**
 * Every screen is placed in it's own stack before being placed in the drawer navigator.
 * This is so every screen can have a navigation header.
 */

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: "Where Do I Put The Paper?",
      headerTitleStyle: {
        fontSize: 17,
        width: Dimensions.get("window").width
      }
    }
  }
});

const AboutStack = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: {
      headerTitle: "About"
    }
  }
});

const TwinningStack = createStackNavigator({
  Twinning: {
    screen: Twinning,
    navigationOptions: {
      headerTitle: "Toilet Twinning",
      drawerLabel: "Contribute to Toilet Twinning"
    }
  }
});

const ContactStack = createStackNavigator({
  Contact: {
    screen: Contact,
    navigationOptions: {
      headerTitle: "Contact"
    }
  }
});

const Navigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack
    },
    About: {
      screen: AboutStack
    },
    Twinning: {
      screen: TwinningStack,
      navigationOptions: {
        drawerLabel: "Contribute to Toilet Twinning"
      }
    },
    Contact: {
      screen: ContactStack
    }
  },
  {
    drawerBackgroundColor: colors.notQuiteWhite,
    contentOptions: {
      activeTintColor: colors.notQuiteWhite,
      inactiveTintColor: colors.notQuiteBlack,
      activeBackgroundColor: colors.primary,
      inactiveBackgroundColor: colors.notQuiteWhite
    }
  }
);

export default (NavContainer = createAppContainer(Navigator));
