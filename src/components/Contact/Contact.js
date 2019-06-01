import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Linking,
  Platform,
  Alert,
  Animated
} from "react-native";
import styles from "./styles";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import email from "react-native-email";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HamburgerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../colors";
import LinearGradient from "react-native-linear-gradient";
import Device from "react-native-device-detection";
import Share from "react-native-share";
import * as Animatable from "react-native-animatable";

const isiOS = Platform.OS === "ios" ? true : false;

const TWITTER_URL =
  "http://twitter.com/home?status=Where%20do%20I%20put%20the%20paper?%20An%20invaluable%20travel%20guide%20-%20http://bit.ly/faRjvQ%20-%20via%20@mattkitson";
const FACEBOOK_URL =
  "https://web.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=http%3A%2F%2Fwww.wheredoiputthepaper.com%2F&display=popup&ref=plugin&src=share_button";
const WEBSITE_URL = "http://wheredoiputthepaper.com";
const EMAIL = "matt.kitson@gmail.com";

const socialSize = Device.isTablet ? 40 : 30;

// //share via Facebook
const facebookOptions = {
  url: WEBSITE_URL,
  social: Share.Social.FACEBOOK
};

//share via Twitter
const twitterOptions = {
  url: WEBSITE_URL,
  social: Share.Social.TWITTER
};

class Contact extends Component {
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
    //each animated button needs an animated value
    this.animatedWebValue = new Animated.Value(1);
    this.animatedEmailValue = new Animated.Value(1);
    this.animatedFacebookValue = new Animated.Value(1);
    this.animatedTwitterValue = new Animated.Value(1);
  }

  //shrink selected button
  handlePressIn = valueToAnimate => {
    Animated.spring(valueToAnimate, {
      toValue: 0.9
    }).start();
  };

  //bounce the selected button
  handlePressOut = valueToAnimate => {
    Animated.spring(valueToAnimate, {
      toValue: 1
      //perform the selected button's job
    }).start(() => this.navigateToURL(valueToAnimate));
  };

  navigateToURL(valueToAnimate) {
    switch (valueToAnimate) {
      case this.animatedWebValue:
        this.handleWebsite();
        break;
      case this.animatedEmailValue:
        this.handleEmail();
        break;
      case this.animatedFacebookValue:
        this.handleFacebook();
        break;
      case this.animatedTwitterValue:
        this.handleTwitter();
        break;
    }
  }

  //redirect to Twitter
  handleTwitter = () => {
    isiOS
      ? Linking.openURL(TWITTER_URL)
      : Share.isPackageInstalled("com.twitter.android").then(
          ({ isInstalled }) => {
            isInstalled
              ? Share.shareSingle(twitterOptions)
              : //open in browser if Twitter not installed
                Linking.openURL(TWITTER_URL);
          }
        );
  };

  //redirect to Facebook
  handleFacebook = () => {
    isiOS
      ? Linking.openURL(FACEBOOK_URL)
      : Share.isPackageInstalled("com.facebook.katana").then(
          ({ isInstalled }) => {
            isInstalled
              ? Share.shareSingle(facebookOptions)
              : //open in browser if Facebook not installed
                Linking.openURL(FACEBOOK_URL);
          }
        );
  };

  //redirect to Website
  handleWebsite = () => {
    Linking.openURL(WEBSITE_URL).catch(err =>
      console.error("An error occurred", err)
    );
  };

  //open email app and populate 'to' field with author's email
  handleEmail = () => {
    email(EMAIL, {}).catch(err => {
      console.error("An error occured", err);
    });
  };

  render() {
    //the animateable buttons need to reference size values which can dynamically change
    const animatedWebStyle = {
      transform: [{ scale: this.animatedWebValue }]
    };
    const animatedEmailStyle = {
      transform: [{ scale: this.animatedEmailValue }]
    };
    const animatedFacebookStyle = {
      transform: [{ scale: this.animatedFacebookValue }]
    };
    const animatedTwitterStyle = {
      transform: [{ scale: this.animatedTwitterValue }]
    };
    return (
      <View style={styles.parent}>
        {/* view in web */}
        <View style={styles.btnWrapper}>
          <TouchableWithoutFeedback
            onPressIn={() => this.handlePressIn(this.animatedWebValue)}
            onPressOut={() => this.handlePressOut(this.animatedWebValue)}
          >
            <Animated.View style={[styles.touchable, animatedWebStyle]}>
              <LinearGradient
                colors={[colors.primary, colors.primary, colors.dark]}
                style={styles.gradient}
              >
                <View style={styles.textWrapper}>
                  <Text style={styles.btnText}>View in web</Text>
                </View>
                <View style={styles.imgWrapper}>
                  <Icon name="web" color="white" size={40} />
                </View>
              </LinearGradient>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        {/* email */}
        <View style={styles.btnWrapper}>
          <TouchableWithoutFeedback
            onPressIn={() => this.handlePressIn(this.animatedEmailValue)}
            onPressOut={() => this.handlePressOut(this.animatedEmailValue)}
          >
            <Animated.View style={[styles.touchable, animatedEmailStyle]}>
              <LinearGradient
                colors={[colors.primary, colors.primary, colors.dark]}
                style={styles.gradient}
              >
                <View style={styles.textWrapper}>
                  <Text style={styles.btnText}>Email</Text>
                </View>
                <View style={styles.imgWrapper}>
                  <Icon name="email-outline" color="white" size={40} />
                </View>
              </LinearGradient>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        {/* share */}
        <View style={styles.social}>
          <View style={styles.shareText}>
            <Text style={{ fontSize: 17 }}>Share this app!</Text>
          </View>
          <TouchableWithoutFeedback
            onPressIn={() => this.handlePressIn(this.animatedFacebookValue)}
            onPressOut={() => this.handlePressOut(this.animatedFacebookValue)}
          >
            <Animated.View style={[styles.socialIcon, animatedFacebookStyle]}>
              <Image
                style={{ width: socialSize, height: socialSize }}
                source={facebook}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPressIn={() => this.handlePressIn(this.animatedTwitterValue)}
            onPressOut={() => this.handlePressOut(this.animatedTwitterValue)}
          >
            <Animated.View style={[styles.socialIcon, animatedTwitterStyle]}>
              <Image
                style={{ width: socialSize, height: socialSize }}
                source={twitter}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        {/* credit */}
        <View style={styles.credit}>
          <Text style={styles.text}>
            Matt Kitson - {new Date().getFullYear()}
          </Text>
        </View>
      </View>
    );
  }
}

export default Contact;
