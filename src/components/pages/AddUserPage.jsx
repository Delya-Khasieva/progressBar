import React, { useState } from 'react';
import axios from 'axios';

export default function AddUserPage({ allUsers }) {
  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    axios
      .post('/signup', data)
      .then((res) => {
        if (res.status === 200) {
          window.location.href = '/admin/users';
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '50%',
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
              <input
                name="isAdmin"
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              админ
            </label>
          </div>
          <button type="submit" className="btn btn-secondary">
            добавить сотрудника
          </button>
        </form>
      </div>
      <div>
        <h2>Все пользователи</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Пользователь</th>
              <th scope="col">Роль</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((el) => (
              <tr key={el.id}>
                <th scope="row">{el.id}</th>
                <td>{el.name}</td>
                <td>{el.isAdmin ? 'админ' : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
