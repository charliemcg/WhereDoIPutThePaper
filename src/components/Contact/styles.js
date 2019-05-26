import colors from "../../colors";

export default {
  parent: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.notQuiteWhite,
    justifyContent: "center"
  },
  website: {
    height: "28%",
    // backgroundColor: "#ff0",
    justifyContent: "center",
    alignItems: "center"
  },
  webTouchWrapper: {
    height: "50%",
    width: "72%",
    flexDirection: "row"
  },
  webTextWrapper: {
    justifyContent: "center",
    width: "70%"
  },
  webText: {
    color: colors.notQuiteWhite,
    fontSize: 25,
    textAlign: "center"
  },
  webImgWrapper: {
    justifyContent: "center",
    width: "30%"
  },
  email: {
    height: "28%",
    // backgroundColor: "#f0f",
    justifyContent: "center",
    alignItems: "center"
  },
  emailTouchWrapper: {
    height: "50%",
    width: "72%",
    flexDirection: "row"
  },
  emailTextWrapper: {
    justifyContent: "center",
    width: "70%"
  },
  emailText: {
    color: colors.notQuiteWhite,
    fontSize: 25,
    textAlign: "center"
  },
  emailImgWrapper: {
    justifyContent: "center",
    width: "30%"
  },
  credit: {
    height: "15%",
    justifyContent: "center"
    // backgroundColor: "#0f0"
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "15%",
    // backgroundColor: "#0ff",
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
