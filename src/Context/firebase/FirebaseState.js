import React, { useReducer } from "react";
import axios from 'axios'
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../type";

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({ children }) => {
  const initialState = {
    lists: [
        {id:23,title:'item1',name:'vzg'}
    ],
    loading: false,
  };

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const fetchLists = async () => {
    showLoader()
    const res = await axios.get(`${url}/lists.json`);
   const payload = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      };
    });
    dispatch({type: FETCH_NOTES, payload });
  };

  const addList = async (title) => {

    const list = {
      title,
      date: new Date().toJSON(),
    };
    try {
      const res = await axios.post(`${url}/lists.json`, list);
      const payload = {
        ...list,
        id: res.data.name,
      };
      dispatch({
        type: ADD_NOTE,
        payload,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };
  const removeList = async (id) => {
    await axios.delete(`${url}/lists${id}.json`);
    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };
  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addList,
        removeList,
        fetchLists,
        loading: state.loading,
        lists: state.lists,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
