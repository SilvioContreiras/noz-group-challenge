import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../store/getActions';

import LoginStyle from '../../styles/GlobalStyles';
import logo from '../../assets/logo.svg'

import { Container, Content } from './styles';

export default function Login() {
    const [ form, setForm ] = useState({ email: '', password: '' });

    const dispatch = useDispatch();

    function changeForm(e) {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	}

	function submitForm(e) {
		e.preventDefault();

		dispatch(authLogin(form));

		setForm({ email: '', password: '' });
	}

    return (
        <Container>
            <LoginStyle />
            <Content>
            <img src={logo} alt='logo' />

            <form onSubmit={submitForm}>
                <h2>Login</h2>

                <input 
                    name="email"
                    value={form.email}
                    onChange={changeForm}
                    placeholder="E-mail" 
                />
                <input 
                    name="password"
                    value={form.password}
                    onChange={changeForm}
                    type="password"
                    placeholder="Senha" 
                />

                <button type="submit">Entrar</button>

                <a href="remember">Esqueci minha senha</a>
                </form>   
                <a href="create">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content> 
        </Container>
    )
};

