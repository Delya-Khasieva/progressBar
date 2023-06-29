import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar bg-body-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/logo.png" alt="logo" width="160" height="80" />
          ООО “Высокая гора”
        </a>
        <form className="d-flex">
          <a className="navbar-brand" href="/admin/users">
            Добавление сотрудника
          </a>
          <a className="navbar-brand" href="/admin/lists">
            Все шаблоны
          </a>
          <a className="navbar-brand" href="/admin/lists/my">
            Мои шаблоны
          </a>
          <a className="navbar-brand" href="/admin/lists/process/all/">
            Все листки адаптации
          </a>
          <a className="navbar-brand" href="/admin/lists/process/:id">
            Мои листки адаптации
          </a>
          <a className="btn btn-outline-success" href="/signin">
            Bxoд
          </a>
          <a className="btn btn-outline-success" href="/signin">
            Bыxoд
          </a>
        </form>
      </div>
    </nav>
  );
}
