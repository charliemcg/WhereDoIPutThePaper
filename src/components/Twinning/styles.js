import colors from "../../colors";

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
    bottom: "5%",
    left: "50%",
    right: "10%",
    backgroundColor: "#ff0"
  },
  theButton: {
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
