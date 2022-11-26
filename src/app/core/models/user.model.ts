export interface User {
  id: number;
  name: string;
  username: boolean;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface LoggedInUser {
  username: string;
  password: string;
  rememberMe?: boolean;
}
