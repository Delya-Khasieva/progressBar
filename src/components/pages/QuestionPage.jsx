import React from 'react';

export default function QuestionPage() {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" aria-describedby="button-addon2" />
      <button className="btn btn-outline-secondary" type="button" id="button-addon2">
        Добавить вопрос
      </button>
    </div>
  );
}
