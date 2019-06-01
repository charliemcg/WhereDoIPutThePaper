import colors from "../../../colors";

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
    fontSize: 25,
    color: colors.notQuiteBlack,
    padding: "10%",
    textAlign: "center"
  },
  buttonWrapper: {
    position: "absolute",
    top: "86%",
    bottom: "8%",
    left: "55%",
    right: "15%"
  },
  theButton: {
    height: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: colors.dark,
    borderStyle: "solid",
    borderRadius: 7,
    justifyContent: "center"
  },
  goToWebsite: {
    color: colors.notQuiteWhite,
    fontSize: 25,
    textAlign: "center"
  }
};
