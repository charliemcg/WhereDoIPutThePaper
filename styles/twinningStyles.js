import colors from "../colors";

export default {
  parent: {
    width: "100%",
    height: "100%",
    // textAlign: "center",
    backgroundColor: colors.notQuiteWhite
    // position: "relative"
  },
  aboutWrapper: {
    // position: "absolute",
    // top: 70,
    // bottom: 90,
    // width: "100%",
    // height: "30%",
    flex: 1,
    // backgroundColor: "#ff0",
    justifyContent: "center"
  },
  about: {
    justifyContent: "center",
    fontSize: 20,
    color: colors.notQuiteBlack,
    margin: 20,
    textAlign: "center"
  },
  // imgWrapper: {
  //   // height: "70%",
  //   width: "100%",
  //   backgroundColor: "#0ff"
  // },
  // image: { width: "100%" }
  buttonWrapper: {
    position: "absolute",
    // marginTop: 500,
    bottom: "5%",
    left: "50%",
    right: "10%",
    // height: 70,
    // justifyContent: "center",
    backgroundColor: "#ff0"
    // width: 100,
    // height: 50
  },
  theButton: {
    backgroundColor: colors.primary,
    // marginLeft: 20,
    // marginRight: 20,
    // marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: colors.dark,
    borderStyle: "solid"
  },
  goToWebsite: {
    color: colors.notQuiteWhite,
    fontSize: 20,
    textAlign: "center"
  }
};
