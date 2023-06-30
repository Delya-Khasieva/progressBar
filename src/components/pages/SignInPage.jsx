import axios from 'axios';
import React from 'react';

export default function SignInPage() {
  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target)); // [[email, admin@yandex.ru, [password, 123]]
    const response = await axios.post('/auth/signin', formData);

    if (response.status === 200) {
      window.location.href = '/lists/1';
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <form onSubmit={submitHandler} action="/auth/signin" method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-secondary">
          Войти
        </button>
      </form>
    </div>
  );
}
