import React, { Component } from "react";
import {
  View,
  Text,
  Linking,
  TouchableHighlight,
  Image,
  Dimensions
} from "react-native";
import styles from "../styles/twinningStyles";
import TitleBar from "./TitleBar";
import colors from "../colors";
import zambiaImg from "../images/zambiaTwinning.png";

const URL = "http://www.toilettwinning.org";

class Twinning extends Component {
  handlePress = () => {
    // inform user of error
    Linking.openURL(URL).catch(err => console.error("An error occurred", err));
  };
  render() {
    return (
      <View style={styles.parent}>
        <TitleBar
          toggle={() => {
            this.props.navigation.toggleDrawer();
          }}
          name="Toilet Twinning"
        />
        <View style={styles.aboutWrapper}>
          <Text style={styles.about}>
            As I was fiddling about with this site again, it occurred to me how
            many countries don't have access to decent water, let alone toilets.
            So, if you want to help, go to the Toilet Twinning website, donate,
            and make a difference. I've just bought a latrine in Liberia.
          </Text>
        </View>
        {/* <View style={styles.imgWrapper}> */}
        <Image
          source={zambiaImg}
          // resizeMode="center"
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").width * 0.6339
          }}
        />
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            onPress={this.handlePress}
            style={styles.theButton}
            underlayColor={colors.light}
          >
            <Text style={styles.goToWebsite}>Go To Website</Text>
          </TouchableHighlight>
        </View>
        {/* </View> */}
      </View>
    );
  }
}

export default Twinning;
