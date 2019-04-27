import React, { Component } from "react";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "../styles/titleBarStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../colors";

class TitleBar extends Component {
  render() {
    return (
      <View style={styles.titleBarWrapper}>
        <Text style={styles.title}>{this.props.name}</Text>
        <TouchableHighlight
          style={styles.hamburger}
          onPress={this.props.toggle}
        >
          <Icon name="menu" color={colors.notQuiteWhite} size={30} />
        </TouchableHighlight>
      </View>
    );
  }
}

export default TitleBar;
