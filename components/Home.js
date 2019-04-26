import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  Alert,
  TouchableHighlight
} from "react-native";
import styles from "../styles/homeStyles";
import { connect } from "react-redux";
import Picker from "./Picker";
import hamburgerImg from "../images/hamburger.png";

//<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

class Home extends Component {
  render() {
    const flagImgUrl =
      "https://www.countryflags.io/" + this.props.flag + "/shiny/64.png";
    return (
      <View style={styles.parent}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Where Do I Put The Paper?</Text>
        </View>
        <TouchableHighlight
          style={styles.hamburger}
          onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Image style={{ width: 25, height: 25 }} source={hamburgerImg} />
        </TouchableHighlight>
        <View style={styles.countryWrapper}>
          <View style={styles.flag}>
            {/* check for when internet is down and cannot retrieve flag */}
            <Image
              source={{ uri: flagImgUrl }}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={styles.dropDown}>
            <Picker />
          </View>
        </View>
        <ScrollView style={styles.descriptionScroll}>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    flag: state.flag,
    description: state.description
  };
};

export default connect(mapStateToProps)(Home);
