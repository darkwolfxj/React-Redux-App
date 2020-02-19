import axios from "axios";

export const GET_DATA = "GET_DATA";
export const UPDATE_STATE = "UPDATE_STATE";
export const SET_ERROR = "SET_ERROR"

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios
        .get("https://cors-anywhere.herokuapp.com/https://sv443.net/jokeapi/category/Programming")
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATE_STATE, res })
            }
        )
        .catch(err => {
            console.log(err)
            dispatch({ type: SET_ERROR, err })
            }
        )
}