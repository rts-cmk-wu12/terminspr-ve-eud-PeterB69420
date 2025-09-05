"use client";

import LoginAction from "@/actions/login";

export default function LoginForm() {
    return (

        <form action={LoginAction} className="login__form">
            <h2 className="login__heading">Log ind</h2>
            <input
                type="text"
                className="login__input login__input--username"
                placeholder="brugernavn"
                name="username"
            />

            <input
                type="password"
                className="login__input login__input--password"
                placeholder="adgangskode"
                name="password"
            />
            <button type="submit" className="login__button">Log ind</button>
        </form>
    )
}