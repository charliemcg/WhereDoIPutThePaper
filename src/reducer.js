import { countries } from "./countryList";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

function findCountry(payload) {
  for (let i = 0; i < countries.length; i++) {
    if (payload === countries[i].name) {
      return countries[i];
    }
  }
}

//A placeholder country with null values for initialisation purposes
function getNullCountry() {
  return {
    name: null,
    flag: null,
    description: null,
    link: null
  };
}

const reducer = (state = getNullCountry(), action) => {
  switch (action.type) {
    case "CHANGE_COUNTRY":
      let newCountry = findCountry(action.payload);
      //Persisting new country in AsyncStorage
      AsyncStorage.setItem("COUNTRY", newCountry.name);
      return {
        ...state,
        name: newCountry.name,
        flag: newCountry.flag,
        description: newCountry.description,
        link: newCountry.link
      };
    default:
      return state;
  }
};

export default reducer;
