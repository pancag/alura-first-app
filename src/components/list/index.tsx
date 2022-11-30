import React from 'react';
import style from './list.module.scss'

function List(){
    const estudo = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'Javascript',
        tempo: '01:00:00'
    },{
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {estudo.map((estudo, index) => (
                    <li key={index} className={style.item}> 
                        <h3> {estudo.tarefa} </h3>
                        <span> {estudo.tempo} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;