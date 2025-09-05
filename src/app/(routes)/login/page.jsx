import LoginForm from "@/components/ui/login-form"
import "@/styles/login.scss"

export const metadata = {
    title: "Login",
};

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