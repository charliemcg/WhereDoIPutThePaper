import colors from "../../../colors";
import Device from "react-native-device-detection";

export default {
  parent: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.notQuiteWhite
  },
  aboutWrapper: {
    flex: 1,
    justifyContent: "center"
  },
  about: {
    justifyContent: "center",
    fontSize: 20,
    color: colors.notQuiteBlack,
    margin: 20,
    textAlign: "center"
  },
  buttonWrapper: {
    position: "absolute",
    bottom: Device.isIphoneX ? "9%" : "5%",
    left: "50%",
    right: "10%"
  },
  touchable: {
    borderRadius: 7
  },
  theButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: colors.dark,
    borderStyle: "solid",
    borderRadius: 7
  },
  goToWebsite: {
    color: colors.notQuiteWhite,
    fontSize: 17,
    textAlign: "center"
  }
};
