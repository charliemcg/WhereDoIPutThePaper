import colors from "../../colors";

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
  flag: {
    position: "absolute",
    width: "30%",
    alignItems: "center"
  },
  picker: {
    position: "absolute",
    width: "70%",
    right: 0,
    height: "50%"
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
    marginLeft: "6%",
    marginRight: "6%",
    marginBottom: 20,
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
