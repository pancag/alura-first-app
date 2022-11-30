import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Forms from '../components/forms'
import List from '../components/list'
import { IEstudo } from '../types/estudo';
import style from './App.module.scss'

function App() {
  const [estudo, setEstudo] = useState<IEstudo[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Forms setEstudo={setEstudo} />
      <List estudo={estudo} />
      <Cronometro />
    </div>
  );
}

export default App;