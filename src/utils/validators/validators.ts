import React from 'react'

export const required = (value: any) => {
  return value ? 'Field is valid' : undefined;
}

export const minLength8 = (value: any) => {
  return value && value.length >=8 ? 'Field is valid' : undefined;
}

export const isLettersBigOrSmall = (value: any) => {
  return value && value.match(/(?=.*?[A-Z])/) ? 'Field is valid' : undefined;
}

export const oneDigit = (value: any) => {
  return value && value.match(/(?=.*?[0-9])/) ? 'Field is valid' : undefined;
}

export const checkinEmail = (value: string) => {
  return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? 'Field is valid' : undefined; 
}
