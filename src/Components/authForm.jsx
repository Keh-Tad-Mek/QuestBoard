import AuthStyles from "./authForm.module.css"

function AuthForm() {
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
                <div className={AuthStyles.password}>
                    <label htmlFor="password">Yer secret word?</label>
                    <input id="password" type="password" />
                </div>
            </form>
        </div>
    )
}

export default AuthForm