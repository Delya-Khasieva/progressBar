import React from 'react';

export default function OneQuestion({ question }) {
  return (
    <div>
      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{question.title}</p>
      {question.Answers.map((answer) => (
        <p key={answer.id}>
          <input style={{ marginRight: '5px' }} type="checkbox" />
          {answer.title}
        </p>
      ))}
    </div>
  );
}
