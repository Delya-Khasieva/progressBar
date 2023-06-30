import React, { useState } from 'react';
import OneQuestion from '../ui/OneQuestion';

export default function ListPage({ allLists, user }) {
  const [answers, setAnswers] = useState(false);

  return (
    <div style={{ marginTop: '50px', marginBottom: '20px' }}>
      <p>
        Привет, <input name="name" placeholder="Имя Фамилия" />!<br /> И добро пожаловать в команду
        Высокогорья!
        <br /> Впереди нас ждет интересное путешествие в мир нашей компании, и самым главным
        проводником будет- <input name="name" placeholder="Имя Фамилия" />.<br /> Мы подготовили для
        тебя чек-лист на первый день. Процесс выполнения будет сохраняться, поэтому ты можешь
        закрывать пункты в удобном для тебя порядке.
      </p>
      {allLists.map((el) => (
        <>
          <h2>{el.title}</h2>
          {el.Questions.map((question) => (
            <OneQuestion key={question.id} question={question} />
          ))}
        </>
      ))}
      <p>
        Классного путешествия!
        <br />
        Команда Высокой горы 💚
      </p>
      <button style={{ marginBottom: '20px' }} type="button" className="btn btn-outline-success">
        отправить
      </button>
    </div>
  );
}
