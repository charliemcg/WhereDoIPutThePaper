import { countries } from "../countryList";
import { Alert } from "react-native";

function findCountry(payload) {
  for (let i = 0; i < countries.length; i++) {
    if (payload === countries[i].name) {
      return countries[i];
    }
  }
}

const reducer = (
  state = {
    name: "Afghanistan",
    flag: "AF",
    description:
      "If you can find a toilet in Afghanistan, well done! You'll also be extremely lucky to find anything approaching toilet paper, if you do, you'll end up throwing it in the same hole you've just used or burying it in the ground. You're unlikely to be a tourist in Afghanistan, and if you are, you're not going to be the sort that's worried about crapping in a hole."
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_COUNTRY":
      let newCountry = findCountry(action.payload);

      return {
        ...state,
        name: newCountry.name,
        flag: newCountry.flag,
        description: newCountry.description
      };
    default:
      return state;
  }
};

export default reducer;
