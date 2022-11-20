import { Task } from 'src/app/core/models/task.model';
import { TodoList } from 'src/app/core/models/todo-list.model';

export const LISTS: TodoList[] = [
  {
    id: 'ff808b81-6e3d-408c-bca5-3112e87061e5',
    name: 'Shopping List',
    priority: 'Low',
    tasks: []
  },
  {
    id: '32108b81-6e3d-408c-bca5-3112e87061e5',
    name: 'Action Plan',
    priority: 'Medium',
    tasks: []
  }
];

export const TASKS: Task[] = [
  {
    id: 'db066a6b-3fb7-40aa-aebb-115876ff4e08',
    listId: 'ff808b81-6e3d-408c-bca5-3112e87061e5',
    name: 'Bread',
    checked: false
  },
  {
    id: 'db066a6b-3fb1-40aa-aebb-115876ff4e08',
    listId: 'ff808b81-6e3d-408c-bca5-3112e87061e5',
    name: 'Milk',
    checked: true
  },
  {
    id: 'db066a6b-3fb3-40aa-aebb-115876ff4e08',
    listId: 'ff808b81-6e3d-408c-bca5-3112e87061e5',
    name: 'Cinamon bun',
    checked: false
  },
  {
    id: 'db066a23b-3fb3-40aa-aebb-115876ff4e08',
    listId: 'ff808b81-6e3d-408c-bca5-3112e87061e5',
    name: 'Beer',
    checked: true
  },
  {
    id: 'db066a23b-3fb3-40aa-aebb-115876f234e08',
    listId: 'ff808b81-6e3d-408c-bca5-3112e87061e5',
    name: 'Spring water',
    checked: true
  },
  {
    id: '3123-3fb3-40aa-aebb-115876f234e08',
    listId: '32108b81-6e3d-408c-bca5-3112e87061e5',
    name: 'Fix bugs',
    checked: true
  },
  {
    id: '3123-323-40aa-aebb-115876f234e08',
    listId: '32108b81-6e3d-408c-bca5-3112e87061e5',
    name: 'Mobile design',
    checked: true
  }
];
