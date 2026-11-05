import AuthStyles from "./authForm.module.css"

function EmailField({ email, setEmail, setEmailFocused, borderColor, emailIsInvalid }) {
    return (
        <div className={AuthStyles.mail}>
            <label htmlFor="mail">Yer raven address?</label>
            <input
                id="mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                style={{
                    borderBottom: `1px solid ${borderColor}`
                }}
            />
        </div>
    )
}

export default EmailField