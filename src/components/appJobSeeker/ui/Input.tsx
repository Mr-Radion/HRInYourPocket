import React from 'react';
import classNames from 'classnames';

type InputProps = {
  setValue: any;
  value: string | number;
  type: string;
  placeholder: string | undefined;
};

const Input = ({ setValue, value, type, placeholder }: InputProps) => {
  return (
    <input
      className={classNames('input-basic', {})}
      // onChange={(event) => setValue(event.target.value)}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
