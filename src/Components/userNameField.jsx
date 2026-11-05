import AuthStyles from "./authForm.module.css"

function UserNameField({ 
    userName, 
    setUserName, 
    setUserNameFocused,
    setUserNameFlag,
    borderColor
}) {

    const userNameValidation = (e) => {
        const val = e.currentTarget.value
        setUserName(val)

        const hasSymbolsOrSpaces = /[\s\W]/.test(val)

        if (hasSymbolsOrSpaces) {
            setUserNameFlag("No symbols or spaces are allowed in yer name ye mangy cur. \n What are ye, a marked rogue?")
        } else if (val.length < 4 && val.length > 0) {
            setUserNameFlag("Ye are as short as yer name ye dwarf. \n Pick a longer label. ")
        } else {
            setUserNameFlag("")
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