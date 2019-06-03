import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableWithoutFeedback,
  SafeAreaView,
  Animated
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import HamburgerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../colors";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from "react-native-animatable";
import strings from "../../strings";

const URL =
  "https://www.amazon.co.uk/s?k=travel+guide&linkCode=sl2&linkId=eb60e7e2dfa44e8d2215447ead78ca11&tag=noelectextrep-21&ref=as_li_ss_tl";

class About extends Component {
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
        <Animatable.View
          animation="slideInUp"
          duration={700}
          style={styles.animationScrollWrapper}
        >
          <ScrollView style={styles.scrollWrapper}>
            <Text style={styles.about}>{strings.aboutOne}</Text>
            <Text style={styles.about}>{strings.aboutTwo}</Text>
            <Text style={styles.about}>{strings.aboutThree}</Text>
            <View>
              <TouchableWithoutFeedback
                onPressIn={() => this.handlePressIn(this.animatedValue)}
                onPressOut={() => this.handlePressOut(this.animatedValue)}
              >
                <Animated.View
                  style={[styles.animationWrapper, animationWrapper]}
                >
                  <LinearGradient
                    colors={[colors.primary, colors.primary, colors.dark]}
                    style={styles.gradient}
                  >
                    <View style={styles.getBookWrapper}>
                      <View>
                        <Text style={styles.getTheBook}>Guide books</Text>
                        <Text style={styles.supportAppreciated}>
                          Your support is appreciated
                        </Text>
                      </View>
                      <Icon
                        name="book"
                        color={colors.notQuiteWhite}
                        size={60}
                      />
                    </View>
                  </LinearGradient>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          </ScrollView>
        </Animatable.View>
      </SafeAreaView>
    );
  }
}

export default About;
