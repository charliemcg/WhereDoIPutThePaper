import colors from "../colors";

export default {
  parent: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.notQuiteWhite
  },
  countryWrapper: {
    height: "20%",
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: colors.light,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 10
  },
  flag: {
    justifyContent: "center"
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.dark,
    borderBottomStyle: "solid"
  },
  dropDown: {
    paddingLeft: 30,
    paddingRight: 10,
    width: "80%",
    justifyContent: "center"
  },
  descriptionScroll: {
    height: "60%"
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
  bookButton: {
    backgroundColor: colors.primary,
    margin: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: colors.dark,
    borderStyle: "solid"
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
