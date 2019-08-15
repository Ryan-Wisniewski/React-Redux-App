//https://dog.ceo/api/breed/shiba/images/ <-- correct api
import axios from 'axios';

export const FETCH_DOGS_DATA_START = 'FETCH_DOGS_DATA_START';
export const FETCH_DOGS_DATA_SUCCESS = 'FETCH_DOGS_DATA_SUCCESS';
export const FETCH_DOGS_DATA_FAILURE = 'FETCH_DOGS_DATA_FAILURE';

export const getData = () => {
    // console.log('dataInvoked')
  return dispatch => {
    dispatch({ type: FETCH_DOGS_DATA_START });
    // console.log('dispatchFETCH_DOGS_DATA_START')
    axios
      .get('https://dog.ceo/api/breed/shiba/images')
      .then(res => {
        console.log('res',res.data.message)
        dispatch({ type: FETCH_DOGS_DATA_SUCCESS, payload: res.data.message });
      })
      .catch(err => {
          console.log('you broken the api',err)
        dispatch({ type: FETCH_DOGS_DATA_FAILURE, payload: err.response });
      });
  };
};