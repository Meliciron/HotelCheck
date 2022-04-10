import React from 'react';
import './loginForm.css';

import Button from '../common/button/button';
import Input from '../common/input/input';
import SectionTitle from '../common/sectionTitle/sectionTitle';
import Container from '../common/container/container';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  emailValidationRegEx,
  passwordValidationRegEx,
} from '../../utils/regExUtil';

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
  });

  const onSubmitHandler = (data) => {
    navigate(`/Home`, { replace: true });
    localStorage.setItem('User', JSON.stringify(data));
    reset();
  };

  return (
    <Container>
      <form className="login-form" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="login-form__title-wrapper">
          <SectionTitle>Simple Hotel Check</SectionTitle>
        </div>
        <div className="login-form__inputs-wrapper">
          <Input
            {...register('email', {
              required: 'Логин обязателен к заполнению',
              pattern: emailValidationRegEx,
            })}
            id="email"
            label="Логин"
            type="email"
            error={
              errors.email
                ? errors.email.message
                  ? errors.email.message
                  : 'Логин введен неверно'
                : null
            }
            className={errors.email ? 'input_invalid' : ''}
          />
          <Input
            {...register('password', {
              required: 'Пароль обязателен к заполнению',
              minLength: {
                value: 8,
                message: 'Пароль должен содержать не менее 8 символов',
              },
              pattern: passwordValidationRegEx,
            })}
            id="password"
            label="Пароль"
            type="password"
            error={
              errors.password
                ? errors.password.message
                  ? errors.password.message
                  : 'Пароль не может содержать кириллицу'
                : null
            }
            className={errors.password ? 'input_invalid' : ''}
          />
        </div>
        <div className="login-form__btn-wrapper">
          <Button disabled={!isValid}>Войти</Button>
        </div>
      </form>
    </Container>
  );
}

export default LoginForm;
