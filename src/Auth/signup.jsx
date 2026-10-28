import AuthForm from "/src/Components/authForm.jsx"
import AuthStyles from "./signup.module.css"

function SignUp(){
    return (
        <div className={AuthStyles.page}>
            <AuthForm />
        </div>
    )
}

export default SignUp