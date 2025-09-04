import LoginAction from "@/actions/login"
import LoginForm from "@/components/ui/login-form"
import "@/styles/login.scss"


export default async function LoginPage() {


    return (
        <>
            <section className="login">
                <div className="login__overlay">
                    <LoginForm />
                </div>
            </section>
        </>
    )
}