export const validationTooltipList: any = [
  'Поле не должно быть пустым',
  'Пароль должен содержать одну заглавную или маленькую латинскую букву',
  'Пароль должен содержать минимум одну цифру',
  'Ваш пароль должен содержать не менее 6 символов',
  'Неверно введен e-mail',
];

export const required = (value: any) => {
  return value ? 'Field is valid' : undefined;
}

export const minLength8 = (value: any) => {
  return value && value.length >=6 ? 'Field is valid' : undefined;
}

export const isLettersBigOrSmall = (value: any) => {
  return value && value.match(/(?=.*?[A-Za-z])/) ? 'Field is valid' : undefined;
}

export const oneDigit = (value: any) => {
  return value && value.match(/(?=.*?[0-9])/) ? 'Field is valid' : undefined;
}

export const checkinEmail = (value: string) => {
  return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? 'Field is valid' : undefined; 
}
