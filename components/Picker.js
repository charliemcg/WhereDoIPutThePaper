import React, { Component } from "react";
import { countries } from "../countryList";
// import { Dropdown } from "react-native-material-dropdown";
// import "react-dropdown/style.css";
import { connect } from "react-redux";
import { changeCountry } from "../actions/actions";
import { Picker } from "react-native";
import styles from "../styles/pickerStyles";

class CountryPicker extends Component {
  handleChange = event => {
    this.props.changeCountry(event);
  };
  render() {
    // let countryArr = [];
    // for (let i = 0; i < countries.length; i++) {
    //   countryArr.push({ value: countries[i].name });
    // }
    const pickerItems = countries.map(country => {
      return (
        <Picker.Item
          key={country.name}
          label={country.name}
          value={country.name}
        />
      );
    });
    // const pickerItems = <Picker.Item label="Bloody" value="Bloomin" />;
    return (
      // <Picker
      //   label="Country"
      //   fontSize={20}
      //   baseColor="#ddd"
      //   textColor="#fff"
      //   selectedItemColor="#000"
      //   animationDuration={0}
      //   itemPadding={3}
      //   data={countryArr}
      //   value={this.props.name}
      //   itemCount={8}
      //   onChangeText={value => this.handleChange(value)}
      // />
      <Picker
        selectedValue={this.props.name}
        style={styles.picker}
        onValueChange={value => this.handleChange(value)}
      >
        {pickerItems}
      </Picker>
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
)(CountryPicker);
