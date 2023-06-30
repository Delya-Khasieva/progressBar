import React from 'react';

export default function OneQuestion({ question }) {
  return (
    <div>
      <h2>{question.title}</h2>
      {question.Answers.map((answer) => (
        <p key={answer.id}>
          <input style={{ marginRight: '5px' }} type="checkbox" />
          {answer.title}
        </p>
      ))}
    </div>
  );
}
