import { IEstudo } from '../../types/estudo';
import Item from './item'
import style from './list.module.scss'


function List({estudo}: {estudo: IEstudo[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {estudo.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;