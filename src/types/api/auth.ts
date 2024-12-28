export type UserData = {
  id: string;
  username: string;
  email: string;
  active: boolean;
  subscription_id?: string;
};

export type LoginResponse = {
  token: string;
  user_data: UserData;
  message: string;
};
