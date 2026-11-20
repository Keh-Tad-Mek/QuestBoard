import HomeStyles from "../Home/home.module.css"
import { useState } from "react"

function questTitle ({
    title,
    setTitle,
    borderColor
}) {
    const [titleLength, setTitleLength] = useState(0)
    const [titleLimitDisplay, setTitleLimitDisplay] = useState("hidden")

    const handleTitleChange = async (title) => {
        setTitleLength(title.length)
        setTitle(title)
    }

    return (
        <div className={HomeStyles.questTitle}>
            <p>What be the title of this quest?</p>
            <input 
                style={{
                    borderBottom:`1px solid ${borderColor}`

                }}
                type="text" 
                value={title}
                maxLength={50}
                onFocus={() => setTitleLimitDisplay("visible")}
                onBlur={() => setTitleLimitDisplay("hidden")}
                onChange={(e) => handleTitleChange(e.currentTarget.value)}
            />
            <p
                style={{
                    visibility:titleLimitDisplay,
                    margin:"0",
                    fontSize:"13px",
                    marginBottom:"25px"
                }}
            >
                {titleLength}/50
            </p>
        </div>
    )
}

export default questTitle