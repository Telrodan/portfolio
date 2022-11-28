import { LoggedInUser, User } from '../models/user.model';
import * as UserTrackingActions from './user-tracking.actions';

export interface State {
  users: User[];
  loggedInUser: LoggedInUser;
  editedUser: User;
  editedUserIndex: number;
}

export interface AppState {
  userTracking: State;
}

const initialState: State = {
  users: [],
  loggedInUser: null,
  editedUser: null,
  editedUserIndex: -1,
};

export function userTrackingReducer(
  state = initialState,
  action: UserTrackingActions.UserTrackingActions
) {
  switch (action.type) {
    case UserTrackingActions.LOGIN_USER:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case UserTrackingActions.LOGOUT_USER:
      return {
        ...state,
        loggedInUser: null,
      };
    case UserTrackingActions.ADD_USER:
      console.log(action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UserTrackingActions.ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    case UserTrackingActions.UPDATE_USER:
      const userIndex = state.users.findIndex((user) => user.id === action.payload.id);
      const user = state.users[userIndex];
      const updatedUser = {
        ...user,
        ...action.payload,
      };
      const updatedUsers = [...state.users];
      updatedUsers[userIndex] = updatedUser;
      return {
        ...state,
        users: updatedUsers,
      };
    case UserTrackingActions.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user, userIndex) => {
          return userIndex !== state.users.findIndex((user) => user.id === action.payload.id);
        }),
      };
    case UserTrackingActions.START_EDIT:
      return {
        ...state,
        editedUserIndex: action.payload,
        editedUser: { ...state.users[action.payload] },
      };
    case UserTrackingActions.STOP_EDIT:
      return {
        ...state,
        editedUserIndex: -1,
        editedUser: null,
      };
    default:
      return state;
  }
}
