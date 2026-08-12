export type Role = 'readonly' | 'readwrite';

export interface MockUser {
  email: string;
  password: string;
  role: Role;
  name: string;
}

export type Screen = 'login' | 'mfa' | 'signup' | 'protected';