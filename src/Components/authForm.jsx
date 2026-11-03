import AuthStyles from "./authForm.module.css"
import { useState } from "react"
import EmailField from "./emailField"
import UserNameField from "./userNameField"
import PasswordField from "./passwordField"

function AuthForm() {
    const [email, setEmail] = useState("")
    const [emailFocused, setEmailFocused] = useState(false)
    const emailIsInvalid = email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const [password, setPassword] = useState("")
    const [passwordFocused, setPasswordFocused] = useState(false)
    const [passwordFlag, setPasswordFlag] = useState("")
    const [passwordStrength, setPasswordStrength] = useState("")
    
    const [userName, setUserName] = useState("")
    const [userNameFocused, setUserNameFocused] = useState(false)
    const [userNameFlag, setUserNameFlag] = useState("")
    



    return (
        <div className={AuthStyles.roster}>
            <div className={AuthStyles.backgroundBlur}></div>
            <h1>Sign the roster</h1>
            
            <form>
                <UserNameField 
                    userName={userName}
                    setUserName={setUserName}
                    setUserNameFocused={setUserNameFocused}
                    setUserNameFlag={setUserNameFlag}
                />

                <EmailField
                    email={email}
                    setEmail={setEmail}
                    setEmailFocused={setEmailFocused}
                    
                />

                <PasswordField
                    password={password}
                    setPassword={setPassword}
                    setPasswordFocused={setPasswordFocused}
                    setPasswordFlag={setPasswordFlag}
                    setPasswordStrength={setPasswordStrength}
                />

                <button type="submit">Take The Oath</button>

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
            </form>
        </div>
    )
}

export default AuthForm