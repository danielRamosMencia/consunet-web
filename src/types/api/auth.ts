export type LoginResponse = {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    active: boolean;
    subscription_id?: string;
  };
};
