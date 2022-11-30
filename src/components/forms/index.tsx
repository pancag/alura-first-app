import React from 'react';
import ButtonTest from '../buttons';
import style from './forms.module.scss'

class Forms extends React.Component {
    render() {
        return (
            <form>
                <div className={style.novaTarefa}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você precisa estudar"
                        required
                    />
                </div>
                <div className={style.novaTarefa}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        placeholder="O que você precisa estudar"
                        required
                    />
                </div>
                <ButtonTest />
            </form>
        )
    }
}

export default Forms