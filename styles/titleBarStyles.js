import colors from "../colors";

export default {
  titleBarWrapper: {
    height: "10%",
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.primary,
    flexDirection: "row",
    elevation: 10
  },
  hamburger: {
    width: 35,
    padding: 5
  },
  title: {
    position: "absolute",
    width: "100%",
    fontSize: 25,
    color: colors.notQuiteWhite,
    fontWeight: "bold",
    textAlign: "center"
  },
  paperWrapper: {
    position: "absolute",
    width: "100%",
    alignItems: "flex-end"
  },
  paperImg: {
    height: 90,
    width: 0
  }
};
