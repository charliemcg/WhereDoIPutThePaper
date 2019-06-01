import React, { Component } from "react";
import {
  View,
  Text,
  Linking,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
  Alert
} from "react-native";
import styles from "./styles";
import colors from "../../colors";
import zambiaImg from "../../images/zambiaTwinning.png";
import LinearGradient from "react-native-linear-gradient";
import HamburgerIcon from "react-native-vector-icons/MaterialCommunityIcons";

const URL = "http://www.toilettwinning.org";

class Twinning extends Component {
  static navigationOptions = ({ navigation }) => {
    //setting up the navigation header and hamburger button
    return {
      headerLeft: (
        <HamburgerIcon
          name="menu"
          color={colors.notQuiteWhite}
          size={35}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary
      }
    };
  };

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  //shrink button
  handlePressIn = valueToAnimate => {
    Animated.spring(valueToAnimate, {
      toValue: 0.9
    }).start();
  };

  //expand button
  handlePressOut = valueToAnimate => {
    Animated.spring(valueToAnimate, {
      toValue: 1
      //perform the button's job
    }).start(this.handlePress);
  };

  //redirects to website
  handlePress = () => {
    Linking.openURL(URL).catch(err => console.error("An error occurred", err));
  };

  render() {
    //the animateable buttons need to reference size values which can dynamically change
    const animationWrapper = {
      transform: [{ scale: this.animatedValue }]
    };
    return (
      <SafeAreaView style={styles.parent}>
        <View style={styles.aboutWrapper}>
          <Text style={styles.about}>
            As I was fiddling about with this site again, it occurred to me how
            many countries don't have access to decent water, let alone toilets.
            So, if you want to help, go to the Toilet Twinning website, donate,
            and make a difference. I've just bought a latrine in Liberia.
          </Text>
        </View>
        <Image
          source={zambiaImg}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").width * 0.6339
          }}
        />
        <View style={styles.buttonWrapper}>
          <TouchableWithoutFeedback
            onPressIn={() => this.handlePressIn(this.animatedValue)}
            onPressOut={() => this.handlePressOut(this.animatedValue)}
          >
            <Animated.View style={animationWrapper}>
              <LinearGradient
                colors={[colors.primary, colors.primary, colors.dark]}
                style={styles.theButton}
              >
                <Text style={styles.goToWebsite}>Go To Website</Text>
              </LinearGradient>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
}

export default Twinning;
