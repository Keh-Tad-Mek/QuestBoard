import AuthStyles from "./authForm.module.css"
import { authClient } from "../lib/auth-client"

function UserNameField({ 
    userName, 
    setUserName, 
    setUserNameFocused,
    setUserNameFlag,
    borderColor
}) {

    const userNameValidation = async (e) => {
        const val = e.currentTarget.value
        setUserName(val)

        const hasSymbolsOrSpaces = /[\s\W]/.test(val)

        if (hasSymbolsOrSpaces) {
            setUserNameFlag("No symbols or spaces are allowed in yer name ye mangy cur. \n What are ye, a marked rogue?")
            return
        } else if (val.length < 4 && val.length > 0) {
            setUserNameFlag("Ye are as short as yer name ye dwarf. \n Pick a longer label. ")
            return
        } else {
            setUserNameFlag("")
        }

        const { data: response, error } = await authClient.isUsernameAvailable({
            username: val
        })

        if (error) {
            console.log(error)
            return 
        }

        if (response?.available) {
            setUserNameFlag("")
        } else {
            setUserNameFlag("That name is taken you filthy imposter!!")
        }
    }

    return (
        <div className={AuthStyles.name}>
            <label htmlFor="name">What do we call ye?</label>
            <input 
                id="name" 
                type="text" 
                value={userName}
                onChange={userNameValidation}
                onFocus={() => setUserNameFocused(true)}
                onBlur={() => setUserNameFocused(false)}
                style={{
                    borderBottom: `1px solid ${borderColor}`
                }}
            />
        </div>
    )
}

export default UserNameField