import React, { Component } from "react";
import { countries } from "../../countryList";
import { connect } from "react-redux";
import { changeCountry } from "../../actions";
import { Picker } from "react-native";
import styles from "./styles";

class CountryPicker extends Component {
  handleChange = event => {
    this.props.changeCountry(event);
  };
  render() {
    const pickerItems = countries.map(country => {
      return (
        <Picker.Item
          key={country.name}
          label={country.name}
          value={country.name}
        />
      );
    });
    return (
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
