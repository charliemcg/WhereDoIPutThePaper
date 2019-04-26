import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Linking,
  TouchableHighlight,
  Image
} from "react-native";
import styles from "../styles/twinningStyles";
import hamburgerImg from "../images/hamburger.png";

const URL = "http://www.toilettwinning.org";

class Twinning extends Component {
  handlePress = () => {
    // inform user of error
    Linking.openURL(URL).catch(err => console.error("An error occurred", err));
  };
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Toilet Twinning</Text>
        </View>
        <TouchableHighlight
          style={styles.hamburger}
          onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Image style={{ width: 25, height: 25 }} source={hamburgerImg} />
        </TouchableHighlight>
        <View style={styles.aboutWrapper}>
          <Text style={styles.about}>
            As I was fiddling about with this site again, it occurred to me how
            many countries don't have access to decent water, let alone toilets.
            So, if you want to help, go to the Toilet Twinning website, donate,
            and make a difference. I've just bought a latrine in Liberia.
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            color="#bb86fc"
            onPress={this.handlePress}
            title="Go to website"
          />
        </View>
      </View>
    );
  }
}

export default Twinning;
