export interface LoginResponseType {
  access_token: string;
  expires: Date;
}

export interface UserType {
  username: string;
  password: string;
}

export interface UpdateUserResponseType {
  user: UserType;
}
