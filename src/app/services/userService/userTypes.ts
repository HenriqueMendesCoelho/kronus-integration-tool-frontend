export interface UserType {
  username: string;
  password: string;
}

export interface UpdateUserResponseType {
  user: UserType;
}

export interface UserUpdateType {
  password: string;
  new_password: string;
}
