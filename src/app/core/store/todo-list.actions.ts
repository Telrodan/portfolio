import { Action } from '@ngrx/store';
import { TodoList } from '../models/todo-list.model';

export const ADD_LIST = 'ADD_LIST';
export const ADD_LISTS = 'ADD_LISTS';
export const UPDATE_LIST = 'UPDATE_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export class AddList implements Action {
  readonly type = ADD_LIST;
  constructor(public payload: TodoList) {}
}

export class AddLists implements Action {
  readonly type = ADD_LISTS;
  constructor(public payload: TodoList[]) {}
}

export class UpdateList implements Action {
  readonly type = UPDATE_LIST;
  constructor(public payload: { id: string; todoList: TodoList }) {}
}

export class DeleteList implements Action {
  readonly type = DELETE_LIST;
  constructor(public payload: number) {}
}

export type TodoListActions = AddList | AddLists | UpdateList | DeleteList;
