import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  TouchableHighlight,
  Linking
} from "react-native";
import styles from "./styles";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import email from "react-native-email";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HamburgerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../colors";
import LinearGradient from "react-native-linear-gradient";

const TWITTER_URL = "https://twitter.com";
// "http://twitter.com/home?status=Where%20do%20I%20put%20the%20paper?%20An%20invaluable%20travel%20guide%20-%20http://bit.ly/faRjvQ%20-%20via%20@mattkitson";
const FACEBOOK_URL = "https://www.facebook.com";
// "https://web.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=http%3A%2F%2Fwww.wheredoiputthepaper.com%2F&display=popup&ref=plugin&src=share_button";
const WEBSITE_URL = "http://wheredoiputthepaper.com";
const EMAIL = "fakeemail@needrealemail.com";

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

  handleTwitter = () => {
    // inform user of error
    Linking.openURL(TWITTER_URL).catch(err =>
      console.error("An error occurred", err)
    );
  };
  handleFacebook = () => {
    // inform user of error
    Linking.openURL(FACEBOOK_URL).catch(err =>
      console.error("An error occurred", err)
    );
  };
  handleWebsite = () => {
    // inform user of error
    Linking.openURL(WEBSITE_URL).catch(err =>
      console.error("An error occurred", err)
    );
  };
  handleEmail = () => {
    // inform user of error
    email(EMAIL, {}).catch(err => console.error("An error occured", err));
  };
  render() {
    return (
      <View style={styles.parent}>
        <TouchableHighlight
          onPress={() => this.handleWebsite()}
          underlayColor={colors.light}
          style={styles.website}
        >
          <LinearGradient
            colors={[colors.primary, colors.primary, colors.dark]}
            style={styles.webTouchWrapper}
          >
            <View style={styles.webTextWrapper}>
              <Text style={styles.webText}>View in web</Text>
            </View>
            <View style={styles.webImgWrapper}>
              <Icon name="web" color="white" size={40} />
            </View>
          </LinearGradient>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.handleEmail()}
          underlayColor={colors.light}
          style={styles.email}
        >
          <LinearGradient
            colors={[colors.primary, colors.primary, colors.dark]}
            style={styles.emailTouchWrapper}
          >
            <View style={styles.emailTextWrapper}>
              <Text style={styles.emailText}>Email</Text>
            </View>
            <View style={styles.emailImgWrapper}>
              <Icon name="email-outline" color="white" size={40} />
            </View>
          </LinearGradient>
        </TouchableHighlight>
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
            <Image style={{ width: 30, height: 30 }} source={facebook} />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.twitter}
            onPress={() => this.handleTwitter()}
            underlayColor={colors.notQuiteWhite}
          >
            <Image style={{ width: 30, height: 30 }} source={twitter} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Contact;
