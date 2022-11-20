import * as TodoListActions from './todo-list.actions';

const initialState = {
  todoLists: []
};

export function todoListReducer(
  state = initialState,
  action: TodoListActions.TodoListActions
) {
  switch (action.type) {
    case TodoListActions.ADD_LIST:
      return {
        ...state,
        todoLists: [...state.todoLists, action.payload]
      };
    case TodoListActions.ADD_LISTS:
      return {
        ...state,
        todoLists: [...state.todoLists, ...action.payload]
      };
    case TodoListActions.UPDATE_LIST:
      const todoListIndex = state.todoLists.findIndex(
        (todoList) => todoList.id === action.payload.id
      );
      const updatedTodoList = {
        ...state.todoLists[todoListIndex],
        ...action.payload.todoList
      };
      const updatedTodoLists = [...state.todoLists];
      updatedTodoLists[todoListIndex] = updatedTodoList;

      return {
        ...state,
        todoLists: updatedTodoLists
      };
    case TodoListActions.DELETE_LIST:
      return {
        ...state,
        todoLists: state.todoLists.filter((todoList, todoListIndex) => {
          return todoListIndex !== action.payload;
        })
      };
    case TodoListActions.CHECK_TASK:
      return {
        ...state
      };
    default:
      return state;
  }
}
