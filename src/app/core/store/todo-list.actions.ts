import { Action } from '@ngrx/store';
import { Task } from '../models/task.model';
import { TodoList } from '../models/todo-list.model';

export const ADD_LIST = 'ADD_LIST';
export const ADD_LISTS = 'ADD_LISTS';
export const UPDATE_LIST = 'UPDATE_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const CHECK_TASK = 'CHECK_TASK';

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

export class CheckTask implements Action {
  readonly type = CHECK_TASK;
  constructor(public payload: Task) {}
}

export type TodoListActions =
  | AddList
  | AddLists
  | UpdateList
  | DeleteList
  | CheckTask;
