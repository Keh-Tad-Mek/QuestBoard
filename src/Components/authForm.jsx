import AuthStyles from "./authForm.module.css"
import { useState } from "react"
import { countries } from "countries-list"

function AuthForm() {
    const [country, setCountry] = useState("")
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
                    <input id="mail" type="email" />
                </div>

                <div className={AuthStyles.password}
                    style={{ marginBottom: "0.5rem" }}
                >
                    <label htmlFor="password">Yer secret word?</label>
                    <input id="password" type="password" />
                </div>

                <button type="submit">Take The Oath</button>
            </form>
        </div>
    )
}

export default AuthForm