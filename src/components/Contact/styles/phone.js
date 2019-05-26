import colors from "../../../colors";

export default {
  parent: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.notQuiteWhite,
    justifyContent: "center"
  },
  btnWrapper: {
    height: "28%",
    justifyContent: "center",
    alignItems: "center"
  },
  touchable: {
    height: "50%",
    borderRadius: 6
  },
  gradient: {
    height: "100%",
    width: "72%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.dark,
    borderStyle: "solid",
    borderRadius: 6
  },
  textWrapper: {
    justifyContent: "center",
    width: "70%"
  },
  btnText: {
    color: colors.notQuiteWhite,
    fontSize: 25,
    textAlign: "center"
  },
  imgWrapper: {
    justifyContent: "center",
    width: "30%"
  },
  credit: {
    height: "15%",
    justifyContent: "center"
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "15%",
    paddingRight: "15%",
    paddingLeft: "15%"
  },
  facebook: {
    justifyContent: "center"
  },
  twitter: {
    justifyContent: "center"
  },
  text: {
    color: colors.notQuiteBlack,
    fontSize: 15,
    textAlign: "center"
  }
};
