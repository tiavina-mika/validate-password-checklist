import { ReactNode } from "react";

export type CheckPasswordOptions = {
  minLength?: number;
  allowedSpecialChar?: string;
};

type DefaultErrorOption = Record<'minLength' | 'lowerCase' | 'upperCase' | 'number', PasswordsComplexityPass>;
type ErrorOption = DefaultErrorOption & Record<'specialCharacters', PasswordsComplexityPass>;

export type Check = {
  passed: boolean;
  key: keyof ErrorOption;
}
export type PasswordCheckListResult = {
  validationMessages: PasswordsComplexityPass[];
  allChecksPassed: boolean;
}

export type PasswordsComplexityPass = {
  passed: boolean;
  message: string;
  key?: string;
};

export type ValidationMessages = {
  minLength: string;
  lowerCase: string;
  upperCase: string;
  number: string;
  specialCharacters: string;
}
