import colors from "../../../colors";

export default {
  parent: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    backgroundColor: colors.notQuiteWhite
  },
  scrollWrapper: {
    height: "85%"
  },
  about: {
    justifyContent: "center",
    fontSize: 20,
    color: colors.notQuiteBlack,
    margin: "5%",
    textAlign: "center"
  },
  buttonWrapper: {
    // height: "15%",
    justifyContent: "center",
    alignItems: "center"
  },
  bookButton: {
    width: "80%",
    borderWidth: 1,
    borderColor: colors.dark,
    borderStyle: "solid",
    borderRadius: 6
  },
  getBookWrapper: {
    marginTop: "3%",
    marginBottom: "3%",
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
