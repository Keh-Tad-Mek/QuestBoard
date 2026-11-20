import { useState } from "react"
import HomeStyles from "../Home/home.module.css"

function completionReq ({
    requirement,
    setRequirement,
    borderColor
}) {
    const [completionRequirementLength, setCompletionRequirementLength] = useState(0)
    const [requirementLengthDisplay, setRequirementLengthDisplay] = useState("hidden")

    const handleRequirementLength = async (requirement) => {
        setCompletionRequirementLength(requirement.length)
        setRequirement(requirement)
    }

    return (

        <div className={HomeStyles.completionReq}>
            <p>What be required of the quest taker to complete this quest?</p>
            <textarea 
                style={{
                    border: `1px solid ${borderColor}`
                }}
                name="" 
                id=""
                maxLength={2000}
                rows={5}
                value={requirement}
                onFocus={() => setRequirementLengthDisplay("visible")}
                onBlur={() => setRequirementLengthDisplay("hidden")}
                onChange={(e) => handleRequirementLength(e.currentTarget.value)}
            >
                    
            </textarea>
            <p
                style={{
                    visibility:requirementLengthDisplay,
                    margin:"0",
                    fontSize:"13px"
                }}
            >
                {completionRequirementLength}/2000
            </p>
        </div>
    )
}

export default completionReq