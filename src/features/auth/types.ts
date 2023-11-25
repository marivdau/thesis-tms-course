export type RegistrationPayload = {
  username: string;
  password: string;
  email: string;
};

export type AuthorizationPayload = {
  email: string;
  password: string;
};

export type ResetPasswordPayload = {
  email: string;
};
