import LoginAction from "@/actions/login"
import "@/styles/login.scss"


export default async function LoginPage() {


    return (
        <>
            <section className="login">
                <div className="login__overlay">
                    <form action={LoginAction} className="login__form">
                        <h2>Log ind</h2>
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
                </div>
            </section>
        </>
    )
}