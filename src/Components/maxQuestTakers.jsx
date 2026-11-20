import HomeStyles from "../Home/home.module.css"

function maxQuestTakers ({
    maxQuestTakers,
    setMaxQuestTakers,
    borderColor
}) {
    const handleQuestTakers = async (questTakers) => {
        const digitsOnly = questTakers.replace(/\D/g, "")
        setMaxQuestTakers(digitsOnly)
    }

    return (
        <div className={HomeStyles.maxQuestTakers}>
            <p>How many travelers may take yer quest maximum?
                <br/> If yer quest is for all, then leave this blank.
            </p>
            <input 
                style={{
                    borderBottom:`1px solid ${borderColor}`
                }}
                value={maxQuestTakers}
                type="text" 
                onChange={(e) => handleQuestTakers(e.currentTarget.value)}
            />
        </div>
    )
}

export default maxQuestTakers