import React from 'react';

export default function SignInPage() {
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
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-outline-success">
          Войти
        </button>
      </form>
    </div>
  );
}
