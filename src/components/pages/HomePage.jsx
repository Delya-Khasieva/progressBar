import React from 'react';

export default function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        marginTop: '50px',
      }}
    >
      <h2 style={{ fontStyle: 'italic' }}>
        Привет! Это корпоративный портал ООО “Высокая Гора”. Чтобы получить доступ к сайту -
        обратись в департамент HR.
      </h2>
    </div>
  );
}
