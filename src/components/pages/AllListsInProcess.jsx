import React from 'react';

export default function AllListsInProcess({ allListsProcess }) {
  return (
    <div>
      <h2 style={{ marginTop: '100px' }}>Все листки адаптации</h2>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Сотрудник</th>
            <th scope="col">Отправитель</th>
            <th scope="col">Progress</th>
          </tr>
        </thead>
        <tbody>
          {allListsProcess.map((list) => (
            <tr key={list.id}>
              <th scope="row">{list.id}</th>
              <td>{list.name1}</td>
              <td>{list.User.name}</td>
              <td>%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}