import React, { Component } from "react";
import { View, TouchableHighlight, Text, Image } from "react-native";
import styles from "../styles/titleBarStyles";
import hamburgerImg from "../images/hamburger.png";

class TitleBar extends Component {
  render() {
    return (
      <View style={styles.titleBarWrapper}>
        <Text style={styles.title}>{this.props.name}</Text>
        <TouchableHighlight
          style={styles.hamburger}
          onPress={this.props.toggle}
        >
          <Image style={{ width: 25, height: 25 }} source={hamburgerImg} />
        </TouchableHighlight>
      </View>
    );
  }
}

export default TitleBar;
