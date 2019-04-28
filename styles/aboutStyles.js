import colors from "../colors";

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
    fontSize: 17,
    color: colors.notQuiteBlack,
    margin: 20,
    textAlign: "center"
  },
  buttonWrapper: {
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
    height: 70,
    justifyContent: "center"
  },
  bookButton: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
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
