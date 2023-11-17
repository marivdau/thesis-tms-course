export type RegistrationPayload = {
  username: string;
  password: string;
  email: string;
  course_group?: number;
};
export type ActivationPayload = {
  uid: string;
  token: string;
};

export type ActivationResponse = {
  uid: string;
  token: string;
};

export type AuthorizationPayload = {
  email: string;
  password: string;
};

export type AuthorizationResponse = {
  access: string;
  refresh: string;
};

export type ForgotPasswordPayload = {
  email: string;
};
