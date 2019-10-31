import React from 'react';

const Name = () => (
  <h1>mifon</h1>
);

const Lorem = () => (
  <p>Lorem Ipsum</p>
);

const List = () => {
  const items = ['1', '2', '3', '4',];
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
};

const MainContent = () => (
  <>
    <div>Main Contetn</div>
    <Name />
    <Lorem />
    <List />
  </>
);

export default MainContent;