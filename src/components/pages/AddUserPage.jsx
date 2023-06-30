import React, { useState } from 'react';
import axios from 'axios';

export default function AddUserPage() {
  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    axios
      .post('/signup', data)
      .then((res) => {
        if (res.status === 200) {
          window.location.href = '/';
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
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
      <form onSubmit={submitHandler}>
        {error && <p>{error}</p>}
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Имя Фамилия
            <input
              name="name"
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
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
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlFor="exampleCheck1">
            <input name="isAdmin" type="checkbox" className="form-check-input" id="exampleCheck1" />
            админ
          </label>
        </div>
        <button type="submit" className="btn btn-outline-success">
          добавить сотрудника
        </button>
      </form>
    </div>
  );
}
