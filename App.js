import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/reducer";
import NavContainer from "./components/NavContainer";
import { Platform, StatusBar, View } from "react-native";
import colors from "./colors";

const store = createStore(reducer);

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View
    style={{
      backgroundColor: colors.dark,
      height: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }}
  >
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
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
