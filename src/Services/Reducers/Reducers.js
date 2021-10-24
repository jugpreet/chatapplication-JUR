import { USER_ID, USERS, SELECTED_USERS, TITLE, MESSAGES } from "../types";

const users = JSON.parse(localStorage.getItem('users'));
const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const selectedUsers = JSON.parse(localStorage.getItem('selectedUsers'));
const title = JSON.parse(localStorage.getItem('title'));

const initialState = {
  userID:  userInfo?.id||0,
  userName:  userInfo?.name||'',
  Users: users|| [],
  SelectedUsers:selectedUsers|| [],
  Title: title||'',
  Messages: 0
};
const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case USER_ID:
      localStorage.setItem('userInfo', JSON.stringify(payload))
      return {
        ...state,
        userID: payload.id,
        userName: payload.name
      }
    case USERS:
      localStorage.setItem('users', JSON.stringify(payload))
      return {
        ...state,
        Users: payload
      }
    case SELECTED_USERS:
      localStorage.setItem('selectedUsers', JSON.stringify(payload))
      return {
        ...state,
        SelectedUsers: payload
      }
    case TITLE:
      localStorage.setItem('title', JSON.stringify(payload))
      return {
        ...state,
        Title: payload
      }
    case MESSAGES:
      
      return {
        ...state,
        Messages: payload
      }
    default:
      return state;
  }
};
export { reducer };