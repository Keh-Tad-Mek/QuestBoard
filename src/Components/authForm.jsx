import AuthStyles from "./authForm.module.css"
import { useState, useRef } from "react"
import EmailField from "./emailField"
import UserNameField from "./userNameField"
import PasswordField from "./passwordField"
import { authClient } from "../lib/auth-client"

function AuthForm() {
    const [email, setEmail] = useState("")
    const [emailFocused, setEmailFocused] = useState(false)
    const emailIsInvalid = email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const [emailBorderColor, setEmailBorderColor] = useState("black")
    const [emailWarning, setEmailWarning] = useState("")

    const [password, setPassword] = useState("")
    const [passwordFocused, setPasswordFocused] = useState(false)
    const [passwordFlag, setPasswordFlag] = useState("")
    const [passwordStrength, setPasswordStrength] = useState("")
    const [passwordBorderColor, setPasswordBorderColor] = useState("black")
    const [passwordWarning, setPasswordWarning] = useState("")
    const [passwordValid, setPasswordValid] = useState(false)

    const [userName, setUserName] = useState("")
    const [userNameFocused, setUserNameFocused] = useState(false)
    const [userNameFlag, setUserNameFlag] = useState("")
    const [userNameBorderColor, setUserNameBorderColor] = useState("black")
    const [userNameWarning, setUserNameWarning] = useState("")

    const [formWarning, setFormWarning] = useState("")

    const timeRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const missingUserName = !userName
        const missingEmail = !email
        const missingPassword = !password

        // 1. Empty-field check takes precedence over validity
        if (missingUserName || missingEmail || missingPassword) {
            if (missingUserName) setUserNameBorderColor("red")
            if (missingEmail) setEmailBorderColor("red")
            if (missingPassword) setPasswordBorderColor("red")

            clearTimeout(timeRef.current)
            timeRef.current = setTimeout(() => {
                setFormWarning("")
                setUserNameBorderColor("black")
                setEmailBorderColor("black")
                setPasswordBorderColor("black")
            }, 5000)
            return
        }

        // 2. Validity check (generic message only)
        if (userNameFlag || emailIsInvalid || !passwordValid) {
            setFormWarning("Something you filled is wrong ya scallywag, fix that or bugger off!")
            clearTimeout(timeRef.current)
            timeRef.current = setTimeout(() => {
                setFormWarning("")
                setUserNameBorderColor("black")
                setEmailBorderColor("black")
                setPasswordBorderColor("black")
            }, 5000)
            return
        }

        // 3. All good — proceed with submission
        // await authClient.signUp(...) or whatever your logic is
    }

    return (
        <div className={AuthStyles.roster}>
            <div className={AuthStyles.backgroundBlur}></div>
            <h1>Sign the roster</h1>

            <form onSubmit={handleSubmit} noValidate>
                <UserNameField
                    userName={userName}
                    setUserName={setUserName}
                    setUserNameFocused={setUserNameFocused}
                    setUserNameFlag={setUserNameFlag}
                    borderColor={userNameBorderColor}
                />

                <EmailField
                    email={email}
                    setEmail={setEmail}
                    setEmailFocused={setEmailFocused}
                    borderColor={emailBorderColor}
                />

                <PasswordField
                    password={password}
                    setPassword={setPassword}
                    setPasswordFocused={setPasswordFocused}
                    setPasswordFlag={setPasswordFlag}
                    setPasswordStrength={setPasswordStrength}
                    borderColor={passwordBorderColor}
                    setPasswordValid={setPasswordValid}
                />

                <button type="submit">
                    Take The Oath
                </button>

                {emailFocused && emailIsInvalid && (
                    <p className={AuthStyles.flags} style={{ color: "red", margin: 0 }}>
                        That is not a valid raven address ya scallywag!!!
                    </p>
                )}

                {userNameFocused && userNameFlag && (
                    <p className={AuthStyles.flags} style={{
                        color: "red",
                        margin: 0,
                        whiteSpace: "pre-line",
                    }}>
                        {userNameFlag}
                    </p>
                )}

                {passwordFocused && passwordFlag && (
                    <p className={AuthStyles.flags} style={{
                        color: passwordStrength,
                        margin: 0,
                        whiteSpace: "pre-line",
                    }}>
                        {passwordFlag}
                    </p>
                )}

                {formWarning && (
                    <p className={AuthStyles.flags} style={{ color: "red", margin: 0 }}>
                        {formWarning}
                    </p>
                )}
            </form>
        </div>
    )
}

export default AuthForm