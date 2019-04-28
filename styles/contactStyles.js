import colors from "../colors";

export default {
  parent: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.notQuiteWhite
  },
  contactWrapper: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
    height: "90%",
    justifyContent: "space-around"
  },
  website: {
    height: "15%",
    borderStyle: "solid",
    borderColor: colors.dark,
    borderWidth: 1
  },
  webTouchWrapper: {
    height: "100%",
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
  webImg: {
    width: 50,
    height: 50
  },
  email: {
    height: "15%",
    borderStyle: "solid",
    borderColor: colors.dark,
    borderWidth: 1
  },
  emailTouchWrapper: {
    height: "100%",
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
  emailImg: {
    width: 50,
    height: 50
  },
  credit: {
    height: "10%",
    marginTop: 50,
    justifyContent: "center"
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "10%",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 50
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
