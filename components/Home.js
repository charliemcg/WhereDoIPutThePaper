import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  Alert,
  ActivityIndicator,
  TouchableHighlight,
  Button,
  Linking
} from "react-native";
import styles from "../styles/homeStyles";
import { connect } from "react-redux";
import DeviceInfo from "react-native-device-info";
import Picker from "./Picker";
import { changeCountry } from "../actions/actions";
import { countries } from "../countryList";
import AsyncStorage from "@react-native-community/async-storage";
// import hamburgerImg from "../images/hamburger.png";
import TitleBar from "./TitleBar";
import Icon from "react-native-vector-icons/FontAwesome";

//<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

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
          <View style={styles.dropDown}>
            <Picker />
          </View>
        </View>
      );

    return (
      <View style={styles.parent}>
        {/* <View style={styles.titleBarWrapper}>
          <Text style={styles.title}>Where Do I Put The Paper?</Text>
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
          name="Where Do I Put The Paper?"
        />
        {getCountryView}
        <ScrollView style={styles.descriptionScroll}>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
          <TouchableHighlight
            onPress={this.handlePress}
            style={styles.bookButton}
          >
            <View style={styles.getBookWrapper}>
              <View>
                <Text style={styles.getTheBook}>Get the book</Text>
                <Text style={styles.supportAppreciated}>
                  Your support is appreciated
                </Text>
              </View>
              <Icon name="book" color="white" size={60} />
            </View>
          </TouchableHighlight>
        </ScrollView>
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
