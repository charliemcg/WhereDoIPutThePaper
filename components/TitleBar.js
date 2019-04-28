import React, { Component } from "react";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "../styles/titleBarStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../colors";
import LinearGradient from "react-native-linear-gradient";

class TitleBar extends Component {
  render() {
    return (
      // <View style={styles.titleBarWrapper}>
      <LinearGradient
        // colors={["#4c669f", "#3b5998", "#192f6a"]}
        colors={[colors.primary, colors.primary, colors.dark]}
        style={styles.titleBarWrapper}
      >
        <Text style={styles.title}>{this.props.name}</Text>
        <TouchableHighlight
          style={styles.hamburger}
          onPress={this.props.toggle}
          underlayColor={colors.primary}
        >
          <Icon name="menu" color={colors.notQuiteWhite} size={30} />
        </TouchableHighlight>
      </LinearGradient>
      // {/* </View> */}
    );
  }
}

export default TitleBar;
