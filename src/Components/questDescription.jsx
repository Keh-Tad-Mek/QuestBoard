import HomeStyles from "../Home/home.module.css"
import { useState } from "react"

function questDescription ({
    description,
    setDescription
}) {
    const [descriptionLength, setDescriptionLength] = useState(0)
    const [descriptionLengthDisplay, setDescriptionLengthDisplay] = useState("hidden")

    const descriptionChangeHandler = async (description) => {
        setDescriptionLength(description.length)
        setDescription(description)
    }

    return (

        <div className={HomeStyles.questDescription}>
            <p>
                Describe the nature of yer quest.
            </p>
            <textarea 
                name="" 
                maxLength={2000}
                value={description}
                id="questDescription"
                rows={5}    
                onFocus={() => setDescriptionLengthDisplay("visible")}
                onBlur={() => setDescriptionLengthDisplay("hidden")}
                onChange={e => descriptionChangeHandler(e.currentTarget.value)}
            />
            <p
                style={{
                    visibility:descriptionLengthDisplay,
                    fontSize:"13px",
                    margin:"0"
                }}
            >
                {descriptionLength}/2000
            </p>
        </div>
    )
}

export default questDescription