import { Dimensions } from "react-native";
import colors from "../../../colors";
const height = Dimensions.get("window").height;

export default {
  parent: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.notQuiteWhite
  },
  countryWrapper: {
    flexDirection: "row",
    backgroundColor: colors.white,
    alignItems: "center",
    height: "20%",
    width: "100%",
    elevation: 10
  },
  // flagBackground: {
  //   width: 80,
  //   height: 80,
  //   borderRadius: 40,
  //   backgroundColor: colors.light,
  //   position: "absolute"
  // },
  flag: {
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    flex: 2
  },
  flagDimensions: {
    width: height * 0.09,
    height: height * 0.09
  },
  picker: {
    height: "50%",
    alignItems: "center",
    flex: 6
  },
  descriptionScroll: {
    height: "65%"
  },
  descriptionWrapper: {
    alignItems: "stretch",
    justifyContent: "center",
    paddingBottom: 30
  },
  description: {
    textAlign: "center",
    fontSize: 20,
    color: colors.notQuiteBlack,
    padding: 15
  },
  buttonWrapper: {
    height: "15%"
  },
  animationWrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  gradient: {
    height: "90%",
    width: "80%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.dark,
    borderStyle: "solid",
    borderRadius: 6
  },
  getBookWrapper: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  getTheBook: {
    color: colors.notQuiteWhite,
    fontSize: 30,
    textAlign: "center"
  },
  supportAppreciated: {
    color: colors.notQuiteWhite,
    fontSize: 15,
    textAlign: "center"
  }
};
