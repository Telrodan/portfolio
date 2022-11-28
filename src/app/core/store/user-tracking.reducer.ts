import * as UserTrackingActions from './user-tracking.actions';

const initialState = {
  users: [],
  loggedInUser: [
    {
      username: 'Admin',
      password: 'test',
    },
  ],
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
      console.log(state.users);
      const userIndex = state.users.findIndex((user) => console.log(user.id));
      console.log(action.payload.id);
      console.log(userIndex);
      const user = state.users[state.users.findIndex((user) => user.id === action.payload.id)];
      const updatedUser = {
        ...user,
        ...action.payload,
      };
      const updatedUsers = [...state.users];
      updatedUsers[state.users.findIndex((user) => user.id === action.payload.id)] = updatedUser;
      console.log(updatedUsers);
      return {
        ...state,
        users: updatedUsers,
      };
    default:
      return state;
  }
}
