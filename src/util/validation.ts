export enum VALIDATION_TYPE {
  EMAIL = "email",
  PASSWORD = "password",
  NAME = "name",
}

export interface UserValidation {
  type: VALIDATION_TYPE;
  isValid: boolean;
  error: string;
}

export function validateUser({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name?: string;
}): UserValidation {
  let validation = { type: VALIDATION_TYPE.EMAIL, isValid: true, error: "" };

  if (email && !validateEmail(email)) {
    validation.type = VALIDATION_TYPE.EMAIL;
    validation.isValid = false;
    validation.error = "이메일 형식이 올바르지 않습니다.";
    return validation;
  }

  if (password && !validatePassword(password)) {
    validation.type = VALIDATION_TYPE.PASSWORD;
    validation.isValid = false;
    validation.error = "비밀번호는 8자 이상, 숫자, 특수문자를 포함해야 합니다.";
    return validation;
  }

  if (name && !validateName(name)) {
    validation.type = VALIDATION_TYPE.NAME;
    validation.isValid = false;
    validation.error = "이름은 한글, 영문 2자 이상이어야 합니다.";
    return validation;
  }

  return validation;
}

export function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validatePassword(password: string) {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return regex.test(password);
}

export function validateName(name: string) {
  const regex = /^[가-힣a-zA-Z]{2,}$/;
  return regex.test(name);
}
