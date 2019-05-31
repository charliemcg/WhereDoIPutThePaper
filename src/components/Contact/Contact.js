import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Linking,
  Platform,
  Alert
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
    email(EMAIL, {}).catch(err => console.error("An error occured", err));
  };

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.btnWrapper}>
          <TouchableHighlight
            onPress={() => this.handleWebsite()}
            underlayColor={colors.light}
            style={styles.touchable}
          >
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
          </TouchableHighlight>
        </View>
        <View style={styles.btnWrapper}>
          <TouchableHighlight
            onPress={() => this.handleEmail()}
            underlayColor={colors.light}
            style={styles.touchable}
          >
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
          </TouchableHighlight>
        </View>
        <View style={styles.social}>
          <View style={styles.shareText}>
            <Text style={{ fontSize: 17 }}>Share this app!</Text>
          </View>
          <TouchableHighlight
            style={styles.socialIcon}
            onPress={() => this.handleFacebook()}
            underlayColor={colors.notQuiteWhite}
          >
            <Image
              style={{ width: socialSize, height: socialSize }}
              source={facebook}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.socialIcon}
            onPress={() => this.handleTwitter()}
            underlayColor={colors.notQuiteWhite}
          >
            <Image
              style={{ width: socialSize, height: socialSize }}
              source={twitter}
            />
          </TouchableHighlight>
        </View>
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
