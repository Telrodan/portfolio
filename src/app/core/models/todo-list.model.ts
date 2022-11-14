import { Task } from './task.model';

export interface TodoList {
  id: string;
  name: string;
  tasks: Array<Task>;
  priority: string;
}
