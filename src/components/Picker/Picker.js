import React, { Component } from "react";
import { countries } from "../../countryList";
import { connect } from "react-redux";
import { changeCountry } from "../../actions";
import ModalSelector from "react-native-modal-selector";
import colors from "../../colors";

class CountryPicker extends Component {
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
        selectTextStyle={{ fontSize: 15 }}
        optionTextStyle={{ color: colors.dark }}
      />
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
