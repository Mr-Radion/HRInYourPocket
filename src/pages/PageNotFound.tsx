import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <h1>404</h1>
      <Link to={'/'}>на главную</Link>{' '}
    </div>
  );
}

export default ErrorPage;
