import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  Alert,
  ActivityIndicator,
  TouchableHighlight,
  Linking
} from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import DeviceInfo from "react-native-device-info";
import Picker from "../Picker";
import { changeCountry } from "../../actions";
import { countries } from "../../countryList";
import AsyncStorage from "@react-native-community/async-storage";
import TitleBar from "../TitleBar";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../colors";
import LinearGradient from "react-native-linear-gradient";

class Home extends Component {
  handlePress = () => {
    // inform user of error
    Linking.openURL(this.props.link).catch(err =>
      console.error("An error occurred", err)
    );
  };

  componentWillMount() {
    //get persisted country from AsyncStorage
    this.getCountryFromDevice();
  }

  getCountryFromDevice = async () => {
    try {
      const value = await AsyncStorage.getItem("COUNTRY");
      if (value !== null) {
        this.props.changeCountry(value);
      } else {
        const countryCode = DeviceInfo.getDeviceCountry();
        for (let i = 0; i < countries.length; i++) {
          if (countryCode === countries[i].flag) {
            this.props.changeCountry(countries[i].name);
          }
        }
        if (this.props.name === null) {
          this.props.changeCountry(countries[0].name);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const flagImgUrl =
      "https://www.countryflags.io/" + this.props.flag + "/shiny/64.png";

    const getCountryView =
      this.props.name === null ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.countryWrapper}>
          <View style={styles.flag}>
            {/* check for when internet is down and cannot retrieve flag */}
            <Image
              source={{ uri: flagImgUrl }}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={styles.picker}>
            <Picker />
          </View>
        </View>
      );

    return (
      <View style={styles.parent}>
        <TitleBar
          toggle={() => {
            this.props.navigation.toggleDrawer();
          }}
          name="Where Do I Put The Paper?"
        />
        {getCountryView}
        <ScrollView style={styles.descriptionScroll}>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
        </ScrollView>
        <TouchableHighlight
          onPress={this.handlePress}
          underlayColor={colors.light}
        >
          <LinearGradient
            colors={[colors.primary, colors.primary, colors.dark]}
            style={styles.bookButton}
          >
            <View style={styles.getBookWrapper}>
              <View>
                <Text style={styles.getTheBook}>Get the book</Text>
                <Text style={styles.supportAppreciated}>
                  Your support is appreciated
                </Text>
              </View>
              <Icon name="book" color={colors.notQuiteWhite} size={60} />
            </View>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    flag: state.flag,
    description: state.description,
    link: state.link
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCountry: country => {
      dispatch(changeCountry(country));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
