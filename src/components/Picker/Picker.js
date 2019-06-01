import React, { Component } from "react";
import { Alert } from "react-native";
import { countries } from "../../countryList";
import { connect } from "react-redux";
import { changeCountry } from "../../actions";
import ModalSelector from "react-native-modal-selector";
import colors from "../../colors";
import Device from "react-native-device-detection";
import PropTypes from "prop-types";

//make label text bigger for tablets
const labelFont = Device.isTablet ? 25 : 15;

class Picker extends Component {
  handleChange = event => {
    this.props.changeCountry(event);
  };

  render() {
    //prepare the list of countries to be displayed in the modal selector
    const pickerItems = countries.map((val, i) => {
      return { key: i, label: String(val.name) };
    });
    return (
      <ModalSelector
        data={pickerItems}
        initValue={this.props.name}
        onChange={value => this.handleChange(value.label)}
        style={{
          height: "100%",
          width: "90%"
        }}
        selectStyle={{
          height: "100%",
          justifyContent: "center"
        }}
        selectTextStyle={{ fontSize: labelFont }}
        optionTextStyle={{ color: colors.dark }}
      />
    );
  }
}

Picker.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

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
)(Picker);
