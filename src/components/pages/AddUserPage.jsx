import React from 'react';

export default function AddUserPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <form>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Имя
            <input
              type="name"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
            <input
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
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlFor="exampleCheck1">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            Назначить администратором
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          добавить сотрудника
        </button>
      </form>
    </div>
  );
}
