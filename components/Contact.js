import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  TouchableHighlight,
  Linking
} from "react-native";
import styles from "../styles/contactStyles";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import webImg from "../images/web.png";
import emailImg from "../images/email.png";
import hamburgerImg from "../images/hamburger.png";
import email from "react-native-email";
import TitleBar from "./TitleBar";

const TWITTER_URL =
  "http://twitter.com/home?status=Where%20do%20I%20put%20the%20paper?%20An%20invaluable%20travel%20guide%20-%20http://bit.ly/faRjvQ%20-%20via%20@mattkitson";
const FACEBOOK_URL =
  "https://web.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=http%3A%2F%2Fwww.wheredoiputthepaper.com%2F&display=popup&ref=plugin&src=share_button";
const WEBSITE_URL = "http://wheredoiputthepaper.com";
const EMAIL = "fakeemail@needrealemail.com";

class Contact extends Component {
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
      <View>
        <View style={styles.parent}>
          {/* <View style={styles.titleWrapper}>
            <Text style={styles.title}>Contact</Text>
          </View>
          <TouchableHighlight
            style={styles.hamburger}
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <Image style={{ width: 25, height: 25 }} source={hamburgerImg} />
          </TouchableHighlight> */}
          <TitleBar
            toggle={() => {
              this.props.navigation.toggleDrawer();
            }}
          />
          <View style={styles.contactWrapper}>
            <View style={styles.website}>
              <TouchableHighlight onPress={() => this.handleWebsite()}>
                <View style={styles.webTouchWrapper}>
                  <View style={styles.webTextWrapper}>
                    <Text style={styles.webText}>View in web</Text>
                  </View>
                  <View style={styles.webImgWrapper}>
                    <Image style={styles.webImg} source={webImg} />
                  </View>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.email}>
              <TouchableHighlight onPress={() => this.handleEmail()}>
                <View style={styles.emailTouchWrapper}>
                  <View style={styles.emailTextWrapper}>
                    <Text style={styles.emailText}>Email</Text>
                  </View>
                  <View style={styles.emailImgWrapper}>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={emailImg}
                    />
                  </View>
                </View>
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
              >
                <Image style={{ width: 30, height: 30 }} source={facebook} />
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.twitter}
                onPress={() => this.handleTwitter()}
              >
                <Image style={{ width: 30, height: 30 }} source={twitter} />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Contact;
