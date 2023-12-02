import { themes } from "./global.context";
import { initialState } from "./global.context";
import { getLocalStorage } from "./localStorage";

export const initializer = (initialValue = initialState) => {
    initialValue.theme = getLocalStorage("theme", initialValue.theme);
    return initialValue;
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return{
                ...state,
                theme: state.theme.font === "black" ? themes.dark : themes.light
            }
        case "SET_DENTISTAS":
            return{
                ...state,
                data : action.data
            }
        default: 
            return state
    }
}

export const changeTheme = () => {
    return{type:"CHANGE_THEME"}
}

export const setDentists = (data) => {
    return{type:"SET_DENTISTAS", data}
}