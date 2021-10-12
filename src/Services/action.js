import {USER_ID,USERS,SELECTED_USERS,TITLE,MESSAGES} from './types'
export const setUserId = (data) => ({
    type: USER_ID,
    payload: data,
  });

  export const setSelectedUsers = (data) => (
    {
    type: SELECTED_USERS,
    payload: data,
  });

  export const setConvTitle = (data) => (
    {
    type: TITLE,
    payload: data,
  });

  export const setUsers = (data) => dispatch => {
    dispatch({
        type: USERS,
        payload: data,
    })
   }

   export const setLastMessages = (data) => dispatch => {
    dispatch({    
        type: MESSAGES,
        payload: data,
    })
   }
