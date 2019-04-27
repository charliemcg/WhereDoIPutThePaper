import { createAppContainer, createDrawerNavigator } from "react-navigation";
import Home from "./Home";
import About from "./About";
import Twinning from "./Twinning";
import Contact from "./Contact";
import colors from "../colors";

const Navigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: "Home"
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        drawerLabel: "About"
      }
    },
    Twinning: {
      screen: Twinning,
      navigationOptions: {
        drawerLabel: "Contribute to Toilet Twinning"
      }
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        drawerLabel: "Contact"
      }
    }
  },
  {
    // drawerBackgroundColor: "#444",
    // contentOptions: {
    //   activeTintColor: "#ddd",
    //   inactiveTintColor: "#ddd",
    //   activeBackgroundColor: "#666",
    //   inactiveBackgroundColor: "#444"
    // }
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
