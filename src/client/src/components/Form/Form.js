import React from 'react'
import styles from './Form.module.css'
import Button from '../Buttons/Button'

const Form = () => {
    return (
        <form className={styles.form}>
            <h1 className={styles.h1}>Login</h1>
            <label>Usuário</label>
            <input className={styles.input} type="text" />
            <label>Senha</label>
            <input className={styles.input} type="password" />
            <Button buttonText="Entrar" />
        </form>
    )
}

export default Form