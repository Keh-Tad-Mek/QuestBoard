import AuthStyles from "./authForm.module.css"
import { useState } from "react"

function AuthForm() {
    const [email, setEmail] = useState("")
    const [emailFocused, setEmailFocused] = useState(false)

    const emailIsInvalid = email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    return (
        <div className={AuthStyles.roster}>
            <div className={AuthStyles.backgroundBlur}></div>
            <h1>Sign the roster</h1>
            <form action="">
                <div className={AuthStyles.name}>
                    <label htmlFor="name">What do we call ye?</label>
                    <input id="name" type="text" />
                </div>

                <div className={AuthStyles.mail}>
                    <label htmlFor="mail">Yer raven address?</label>
                    <input
                        id="mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                    />
                </div>

                <div
                    className={AuthStyles.password}
                    style={{ marginBottom: "0.5rem" }}
                >
                    <label htmlFor="password">Yer secret word?</label>
                    <input id="password" type="password" />
                </div>

                <button type="submit">Take The Oath</button>

                {emailFocused && emailIsInvalid && (
                    <p style={{ color: "red", margin: 0 }}>
                        That is not a valid raven address ya scallywag
                    </p>
                )}
            </form>
        </div>
    )
}

export default AuthForm