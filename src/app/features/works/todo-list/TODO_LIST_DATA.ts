import { TodoList } from 'src/app/core/models/todo-list.model';

export const TODO_LIST_DATA: TodoList[] = [
  {
    id: 'ff808b81-6e3d-408c-bca5-3112e87061e5',
    name: 'Shopping List',
    priority: 'Low',
    tasks: [
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
        id: 'db066a6b-3fb2-40aa-aebb-115876ff4e08',
        listId: 'ff808b81-6e3d-408c-bca5-3112e87061e5',
        name: 'Soft drink',
        checked: false
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
      }
    ]
  }
];
