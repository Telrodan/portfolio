import * as UserTrackingActions from './user-tracking.actions';

const initialState = {
  users: [],
  loggedInUser: [],
};

export function userTrackingReducer(
  state = initialState,
  action: UserTrackingActions.UserTrackingActions
) {
  switch (action.type) {
    case UserTrackingActions.LOGIN_USER:
      return {
        ...state,
        loggedInUser: [...state.loggedInUser, action.payload],
      };
    case UserTrackingActions.LOGOUT_USER:
      return {
        ...state,
        loggedInUser: [],
      };
    case UserTrackingActions.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UserTrackingActions.ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    default:
      return state;
  }
}
