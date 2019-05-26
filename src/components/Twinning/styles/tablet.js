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
    fontSize: 22,
    color: colors.notQuiteBlack,
    padding: "10%",
    textAlign: "center"
  },
  buttonWrapper: {
    position: "absolute",
    bottom: "5%",
    left: "55%",
    right: "15%"
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
    fontSize: 22,
    textAlign: "center"
  }
};
