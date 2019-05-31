import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableHighlight,
  Linking,
  Platform,
  SafeAreaView
} from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import DeviceInfo from "react-native-device-info";
import Picker from "../Picker";
import { changeCountry } from "../../actions";
import { countries } from "../../countryList";
import AsyncStorage from "@react-native-community/async-storage";
import HamburgerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../colors";
import LinearGradient from "react-native-linear-gradient";

class Home extends Component {
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

  handlePress = () => {
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
      //found a country
      if (value !== null) {
        this.props.changeCountry(value);
        //no country saved. Get country from device info
      } else {
        const countryCode = DeviceInfo.getDeviceCountry();
        for (let i = 0; i < countries.length; i++) {
          if (countryCode === countries[i].flag) {
            this.props.changeCountry(countries[i].name);
          }
        }
        //still no country. Just use Afghanistan
        if (this.props.name === null) {
          this.props.changeCountry(countries[0].name);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    //to best comply with UI guidelines flags on Android will be shiny and iOS will be flat
    const flagAppearance = Platform.OS === "ios" ? "flat" : "shiny";

    //getting the country flag
    const flagImgUrl = `https://www.countryflags.io/${
      this.props.flag
    }/${flagAppearance}/64.png`;

    const getFlagView = flagImgUrl !== null && (
      <View style={styles.flag}>
        <Image source={{ uri: flagImgUrl }} style={styles.flagDimensions} />
      </View>
    );

    //This is where the user selects a country
    const getCountryView =
      this.props.name == null ? (
        <ActivityIndicator size="large" style={styles.countryWrapper} />
      ) : (
        <View style={styles.countryWrapper}>
          {getFlagView}
          <View style={styles.picker}>
            <Picker />
          </View>
        </View>
      );

    return (
      <SafeAreaView style={styles.parent}>
        {getCountryView}
        <ScrollView style={styles.descriptionScroll}>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            onPress={this.handlePress}
            underlayColor={colors.light}
            style={styles.bookButton}
          >
            <LinearGradient
              colors={[colors.primary, colors.primary, colors.dark]}
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
      </SafeAreaView>
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
