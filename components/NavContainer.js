import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import Home from "./Home";
import About from "./About";
import Twinning from "./Twinning";
import Contact from "./Contact";

// const navOptions = title => {
//   return {
//     title,
//     headerStyle: { backgroundColor: "#6200EE" },
//     headerTitleStyle: { color: "#ff0" },
//     headerTintColor: "#ffffff"
//   };
// };

// const Stack = createStackNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: navOptions("Where Do I Put The Paper?")
//   },
//   About: {
//     screen: About,
//     navigationOptions: navOptions("About")
//   },
//   Twinning: {
//     screen: Twinning,
//     navigationOptions: navOptions("Toilet Twinning")
//   },
//   Contact: {
//     screen: Contact,
//     navigationOptions: navOptions("Contact")
//   }
// });

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
    drawerBackgroundColor: "#444",
    contentOptions: {
      activeTintColor: "#ddd",
      inactiveTintColor: "#ddd",
      activeBackgroundColor: "#666",
      inactiveBackgroundColor: "#444"
    }
  }
);

export default (NavContainer = createAppContainer(Navigator));
