import { FILTER, ORDER } from "./types";
import axios from "axios";
const ENDPOINT = 'http://localhost:3001/rickandmorty/fav';

export const addFav = (character) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.post(ENDPOINT, character);
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      } catch (error) {
         return dispatch({
            type: "ERROR",
            payload: error.message
         });
      }
   }
 };

 export const removeFav = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(`${ENDPOINT}/${id}`)
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         });
      } catch (error) {
         return dispatch({
            type: "ERROR",
            payload: error.message
         });
      }
   }
 };

export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
};
// { type: "FILTER", payload: "Male" || "Female" || ... }

export function orderCards(order) {
    return {
        type: ORDER,
        payload: order
    }
};
// { type: "ORDER", payload: "A" || "D" }
