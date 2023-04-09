import React, { FC } from 'react'
import { FormInputs, InputState } from '../components/UI/FormInputs'
import { Input } from '../components/UI/Input'
import { InputStyle } from '../hoc/TopBar';


interface SignInProps {
    onSubmit: (state: SignInInputs) => void;
    inputStyle: InputStyle
}

export interface SignInInputs {
    email: string
    password: string
}

export const SignIn: FC<SignInProps> = ({ onSubmit, inputStyle }) => {

    const onSubmitForm = (state: InputState) => {
        const signUpInputs = state as SignInInputs
        onSubmit(signUpInputs)
    }

    return (
        <div style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "15px",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "5px 5px 5px gray"
        }}>
            <h3>Вход</h3>
            <FormInputs onSubmitForm={onSubmitForm} >
                <Input
                    name="email"
                    type="email"
                    label="Почта"
                    {...inputStyle}
                />
                <Input
                    name="password"
                    type="password"
                    label="Пароль"
                    {...inputStyle}
                />
                <button
                    style={{
                        margin: "2px",
                        backgroundColor: "#387aff",
                        color: "#fff",
                        borderRadius: "5px",
                        border: "1px solid #387aff"
                    }}
                    type='submit'
                >
                    Войти
                </button>
            </FormInputs>
        </div>
    )
}
