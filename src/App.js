import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import NavContainer from "./components/NavContainer";
import { Platform, StatusBar, View } from "react-native";
import colors from "./colors";

/**
 * Toilet Paper icon by Freepik
 * "Icon made by Freepik from www.flaticon.com"
 */

const store = createStore(reducer);

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View
    style={{
      height: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }}
  >
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor={colors.dark}
      {...props}
    />
  </View>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyStatusBar />
        <NavContainer />
      </Provider>
    );
  }
}

export default App;
