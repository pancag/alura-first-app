import React from 'react';
import Cronometro from '../components/cronometro';
import Forms from '../components/forms'
import List from '../components/list'
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
        <Forms />
        <List />
        <Cronometro />
    </div>
  );
}

export default App;