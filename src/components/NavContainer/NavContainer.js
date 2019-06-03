import React from "react";
import { Dimensions, View, Text, Image } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  DrawerItems
} from "react-navigation";
import Home from "../Home";
import About from "../About";
import Twinning from "../Twinning";
import Contact from "../Contact";
import colors from "../../colors";
import Device from "react-native-device-detection";
import LinearGradient from "react-native-linear-gradient";
import rollImg from "../../images/PaperIconNoBackground.png";
import strings from "../../strings";

//make label text bigger for tablets
const labelFont = Device.isTablet ? 20 : 15;

const width = Dimensions.get("window").width;

const DrawerHeader = props => (
  <View>
    <LinearGradient
      colors={[colors.primary, colors.primary, colors.dark]}
      style={{
        height: "40%",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        style={{
          width: width * 0.15,
          height: width * 0.15
        }}
        source={rollImg}
      />
      <Text
        style={{
          color: "white",
          fontSize: 30,
          textAlign: "center",
          paddingLeft: "3%",
          paddingRight: "3%",
          paddingBottom: "3%"
        }}
      >
        {strings.title}
      </Text>
      <Text style={{ color: colors.notQuiteWhite }}>{strings.website}</Text>
    </LinearGradient>
    <DrawerItems {...props} />
  </View>
);

/**
 * Every screen is placed in it's own stack before being placed in the drawer navigator.
 * This is so every screen can have a navigation header.
 */

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: strings.title,
        headerTitleStyle: {
          fontSize: 17,
          width: Dimensions.get("window").width
        }
      }
    }
  },
  { headerLayoutPreset: "center" }
);

const AboutStack = createStackNavigator(
  {
    About: {
      screen: About,
      navigationOptions: {
        headerTitle: strings.about
      }
    }
  },
  { headerLayoutPreset: "center" }
);

const TwinningStack = createStackNavigator(
  {
    Twinning: {
      screen: Twinning,
      navigationOptions: {
        headerTitle: strings.toiletTwinning,
        drawerLabel: strings.contributeToiletTwinning
      }
    }
  },
  { headerLayoutPreset: "center" }
);

const ContactStack = createStackNavigator(
  {
    Contact: {
      screen: Contact,
      navigationOptions: {
        headerTitle: strings.contact
      }
    }
  },
  { headerLayoutPreset: "center" }
);

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
        drawerLabel: strings.contributeToiletTwinning
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
      inactiveBackgroundColor: colors.notQuiteWhite,
      labelStyle: {
        fontSize: labelFont
      }
    },
    contentComponent: DrawerHeader
  }
);

export default (NavContainer = createAppContainer(Navigator));
