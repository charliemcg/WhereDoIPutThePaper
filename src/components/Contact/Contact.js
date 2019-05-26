import React, { Component } from "react";
import { View, Text, Image, TouchableHighlight, Linking } from "react-native";
import styles from "./styles";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import email from "react-native-email";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HamburgerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../colors";
import LinearGradient from "react-native-linear-gradient";
import Device from "react-native-device-detection";

const TWITTER_URL = "https://twitter.com";
// "http://twitter.com/home?status=Where%20do%20I%20put%20the%20paper?%20An%20invaluable%20travel%20guide%20-%20http://bit.ly/faRjvQ%20-%20via%20@mattkitson";
const FACEBOOK_URL = "https://www.facebook.com";
// "https://web.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=http%3A%2F%2Fwww.wheredoiputthepaper.com%2F&display=popup&ref=plugin&src=share_button";
const WEBSITE_URL = "http://wheredoiputthepaper.com";
const EMAIL = "fakeemail@needrealemail.com";

const socialSize = Device.isTablet ? 60 : 30;

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
    Linking.openURL(TWITTER_URL).catch(err =>
      console.error("An error occurred", err)
    );
  };

  //redirect to Facebook
  handleFacebook = () => {
    Linking.openURL(FACEBOOK_URL).catch(err =>
      console.error("An error occurred", err)
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
        <View style={styles.credit}>
          <Text style={styles.text}>
            Some Dude - {new Date().getFullYear()}
          </Text>
        </View>
        <View style={styles.social}>
          <TouchableHighlight
            style={styles.facebook}
            onPress={() => this.handleFacebook()}
            underlayColor={colors.notQuiteWhite}
          >
            <Image
              style={{ width: socialSize, height: socialSize }}
              source={facebook}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.twitter}
            onPress={() => this.handleTwitter()}
            underlayColor={colors.notQuiteWhite}
          >
            <Image
              style={{ width: socialSize, height: socialSize }}
              source={twitter}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Contact;
