import React from 'react';
import style from './button.module.scss'

class ButtonTest extends React.Component<{ children: React.ReactNode, type?: "button" | "submit" | "reset" | undefined }>{
    render() {
        const { type = "button" } = this.props;
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default ButtonTest