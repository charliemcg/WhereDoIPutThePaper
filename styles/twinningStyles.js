import colors from "../colors";

export default {
  parent: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    backgroundColor: colors.notQuiteWhite,
    position: "relative"
  },
  aboutWrapper: {
    position: "absolute",
    top: 70,
    bottom: 90,
    width: "100%",
    justifyContent: "center"
  },
  about: {
    justifyContent: "center",
    fontSize: 17,
    color: colors.notQuiteBlack,
    margin: 20,
    textAlign: "center"
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    height: 70,
    justifyContent: "center"
  },
  theButton: {
    backgroundColor: colors.primary,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: colors.dark,
    borderStyle: "solid"
  },
  goToWebsite: {
    color: colors.notQuiteWhite,
    fontSize: 30,
    textAlign: "center"
  }
};
