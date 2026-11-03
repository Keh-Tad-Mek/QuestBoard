import AuthStyles from "./authForm.module.css"

function PasswordField({
    password,
    setPassword,
    setPasswordFocused,
    setPasswordFlag,
    setPasswordStrength,
}) {

    const handlePasswordChange = (e) => {
        const val = e.currentTarget.value
        setPassword(val)

        if (val.length === 0) {
            setPasswordFlag("")
            setPasswordStrength("")
            return
        }

        const checks = {
            hasUppercase: /[A-Z]/.test(val),
            hasLowercase: /[a-z]/.test(val),
            hasNumber: /\d/.test(val),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(val),
            hasMinLength: val.length >= 8,
        }

        const missing = []
        if (!checks.hasUppercase) missing.push("no uppercase letters")
        if (!checks.hasLowercase) missing.push("no lowercase letters")
        if (!checks.hasNumber) missing.push("no numbers")
        if (!checks.hasSpecialChar) missing.push("no symbols")
        if (!checks.hasMinLength) missing.push("not the right length of at least 8")

        const score = Object.values(checks).filter(Boolean).length

        let prefix = ""
        let color = ""

        switch (score) {
            case 1:
                prefix = "Yer secret word is as weak as ye."
                color = "red"
                break
            case 2:
                prefix = "Ye'll not survive these quests with a secret word that bad."
                color = "rgb(255, 115, 0)"
                break
            case 3:
                prefix = "Secret word as dull as ye are. Sharpen it ye mongrel."
                color = "yellow"
                break
            case 4:
                prefix = "Good secret word traveler, but still not the best."
                color = "rgb(58, 182, 0)"
                break
            case 5:
            default:
                prefix = "Secret word as strong as the traveler. Commence"
                color = "green"
                break
        }

        let fullFlag = ""
        if (score === 5) {
            fullFlag = prefix
        } else {
            fullFlag = `${prefix}\n${missing.join(", ")}`
        }

        setPasswordFlag(fullFlag)
        setPasswordStrength(color)
    }

    return (
        <div className={AuthStyles.password} style={{ marginBottom: "0.5rem" }}>
            <label htmlFor="password">Yer secret word?</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
            />
        </div>
    )
}

export default PasswordField