import { IEstudo } from '../../../types/estudo'
import style from '../list.module.scss'

export default function Item({ tarefa, tempo, selecionado, completado, id }: IEstudo) {
    return (
        <li className={style.item}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}