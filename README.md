# validate-password-checklist

<p align="left">
A Javascript utility which can add rules to a password and return the status of each validation
</p>

<!-- [START BADGES] -->
<!-- Please keep comment here to allow auto update -->
[![NPM Version](https://img.shields.io/npm/v/validate-password-checklist?style=flat-square)](https://www.npmjs.com/package/validate-password-checklist)
[![Language](https://img.shields.io/badge/language-TypeScript-blue.svg?style=flat-square)](https://www.typescriptlang.org)
[![Release Status](https://img.shields.io/actions/github/workflow/status/tiavina-mika/validate-password-checklist/release.yml?branch=main?style=flat-square)](https://github.com/tiavina-mika/validate-password-checklist/actions)
<!-- [END BADGES] -->

## Installation

```shell

npm install validate-password-checklist

```
or
```shell

yarn add validate-password-checklist
```

## Get started

### Simple usage
```tsx
import { validatePasswordChecklist } from 'validate-password-checklist';

const result = validatePasswordChecklist('abcde');
console.log(result);

/*
[
  {
    "passed": false,
    "message": "Must be at least 8 characters",
    "key": "minLength"
  },
  {
    "passed": true,
    "message": "Must contain at least one lowercase letter",
    "key": "lowerCase"
  },
  {
    "passed": false,
    "message": "Must contain at least one uppercase letter",
    "key": "upperCase"
  },
  {
    "passed": false,
    "message": "Must contain at least one number",
    "key": "number"
  },
  {
    "passed": false,
    "message": "Must contain at least one special character",
    "key": "specialCharacters"
  }
]
*/

```


### All passed rules
```tsx
validatePasswordChecklist('abcde8=F');

/*
[
  {
    "passed": true,
    "message": "Must be at least 8 characters",
    "key": "minLength"
  },
  {
    "passed": true,
    "message": "Must contain at least one lowercase letter",
    "key": "lowerCase"
  },
  {
    "passed": true,
    "message": "Must contain at least one uppercase letter",
    "key": "upperCase"
  },
  {
    "passed": true,
    "message": "Must contain at least one number",
    "key": "number"
  },
  {
    "passed": true,
    "message": "Must contain at least one special character",
    "key": "specialCharacters"
  }
]
*/

```

### Override messages
```tsx
validatePasswordChecklist(
  'abcde8=F',
  {
    minLength: 'Devrait contenir au moins 8 caractères',
    lowerCase: 'Devrait contenir au moins une lettre minuscule',
    upperCase: 'Devrait contenir au moins une lettre majuscule',
    number: 'Devrait contenir au moins un chiffre',
    specialCharacters: 'Devrait contenir au moins un caractère spécial',
  }
)

/*
[
  {
    "passed": true,
    "message": "Devrait contenir au moins 8 caractères",
    "key": "minLength"
  },
  {
    "passed": true,
    "message": "Devrait contenir au moins une lettre minuscule",
    "key": "lowerCase"
  },
  {
    "passed": true,
    "message": "Devrait contenir au moins une lettre majuscule",
    "key": "upperCase"
  },
  {
    "passed": true,
    "message": "Devrait contenir au moins un chiffre",
    "key": "number"
  },
  {
    "passed": true,
    "message": "Devrait contenir au moins un caractère spécial",
    "key": "specialCharacters"
  }
]
*/

```

### Override options
```tsx
validatePasswordChecklist(
  'ab8fff',
  null,
  {
    minLength: 6,
    allowedSpecialChar: "="
  }
)

/*
[
  {
    "passed": true,
    "message": "Must be at least 6 characters",
    "key": "minLength"
  },
  {
    "passed": true,
    "message": "Must contain at least one lowercase letter",
    "key": "lowerCase"
  },
  {
    "passed": false,
    "message": "Must contain at least one uppercase letter",
    "key": "upperCase"
  },
  {
    "passed": true,
    "message": "Must contain at least one number",
    "key": "number"
  },
  {
    "passed": false,
    "message": "Must contain at least one special character",
    "key": "specialCharacters"
  }
]
*/

```
## Types

#### ValidationMessages

|Name |Type                          | Description |
|----------------|-------------------------------|-----------------------------
|minLength|`string`|Message to display for the minimum required password length
|lowerCase|`string`|Message to display for the lowercase validation
|upperCase|`string`|Message to display for the uppercase validation
|number|`string`|Message to display for the number validation
|specialCharacters|`string`|Message to display for the required special characters

#### CheckPasswordOptions

|Name |Type            |Default value                          | Description |
|----------------|-------------------------------|-------------------------------|-----------------------------
|minLength|`number`|8|Override the minimum required password length
|allowedSpecialChar|`string`|!@#$%^&*(),.?\":{}<>\\[\\]\\\\/`~;'_+=-|Override the allowed special characters

<br />

## Libraries using `validate-password-checklist`
[mui-password-checklist](https://www.npmjs.com/package/mui-password-checklist)

## Contributing

Get started [here](https://github.com/tiavina-mika/validate-password-checklist/blob/main/CONTRIBUTING.md).
