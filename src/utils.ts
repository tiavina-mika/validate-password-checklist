import { Check, DefaultErrorOption, ValidationMessages, ErrorOption, PasswordCheckListResult, CheckPasswordOptions } from "./types";

export const validatePasswordChecklist = (password: string, messages?: ValidationMessages, options?: CheckPasswordOptions): PasswordCheckListResult => {
  // -------------- default options -------------- //
  const passwordMinLength = options?.minLength || 8;
  const allowedSpecialChar = options?.allowedSpecialChar || "!@#$%^&*(),.?\":{}|<>\\[\\]\\\\/`~;'_+=-";

  // ----------- default error messages ---------- //
  const {
    minLength = `Must be at least ${passwordMinLength} characters`,
    lowerCase = 'Must contain at least one lowercase letter',
    upperCase = 'Must contain at least one uppercase letter',
    number = 'Must contain at least one number',
    specialCharacters = 'Must contain at least one special character'
  } = messages || {};

  if (!password) return { allChecksPassed: false, validationMessages: [] };

  /**
   * all criteria checks
   */
  const checks: Check[] = [
    // password length
    {
      passed: password.length >= passwordMinLength,
      key: 'minLength'
    },
    // password has lowercase
    {
      passed: /[a-z]/.test(password),
      key: 'lowerCase'
    },
    // password has uppercase
    {
      passed: /[A-Z]/.test(password),
      key: 'upperCase'
    },
    // password has number
    {
      passed: /\d/.test(password),
      key: 'number'
    },
  ];

  const validationMessages: DefaultErrorOption = {
    minLength: { passed: false, message: minLength },
    lowerCase: { passed: false, message: lowerCase },
    upperCase: { passed: false, message: upperCase },
    number: { passed: false, message: number },
  };

  // password has special character
  if (allowedSpecialChar) {
    checks.push({
      passed: new RegExp(`[${allowedSpecialChar}]`).test(password),
      key: "specialCharacters",
    });

    (validationMessages as ErrorOption).specialCharacters = { passed: false, message: specialCharacters };
  }

  let allChecksPassed: boolean = false;

  checks.forEach((check: Check) => {
    if ((validationMessages as ErrorOption)[check.key]) {
      // check if the password passes the criteria
      if (check.passed) {
        (validationMessages as ErrorOption)[check.key] = {
          ...(validationMessages as ErrorOption)[check.key],
          passed: true,
          key: check.key
        };
        allChecksPassed = true;
      } else {
        (validationMessages as ErrorOption)[check.key] = { ...(validationMessages as ErrorOption)[check.key], key: check.key };
        allChecksPassed = false;
      }
    }
  })

  return { validationMessages: Object.values(validationMessages), allChecksPassed };
};
