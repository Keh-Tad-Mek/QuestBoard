import HomeStyles from "../Home/home.module.css"
import { useRef } from "react"

function postButton ({
    title,
    description,
    requirement,
    maxQuestTakers, 
    setTitleBorderColor,
    setDescriptionBorderColor,
    setRequirementBorderColor,
    setMaxQuestTakersBorderColor
}) {
    const titleTimer = useRef(null)
    const descriptionTimer = useRef(null)
    const requirementTimer = useRef(null)
    const takersTimer = useRef(null)

    const flashBorder = (setter, timerRef) => {
        setter("red")
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => setter("black"), 3000)
    }

    const handleQuestPosting = async () => {
        if (!title) {
            flashBorder(setTitleBorderColor, titleTimer)
            return
        }
        if (!description) {
            flashBorder(setDescriptionBorderColor, descriptionTimer)
            return
        }
        if (!requirement) {
            flashBorder(setRequirementBorderColor, requirementTimer)
            return
        }
        if (!maxQuestTakers) {
            flashBorder(setMaxQuestTakersBorderColor, takersTimer)
            return
        }
    }

    return (
        <button 
            className={HomeStyles.postButton}
            onClick={handleQuestPosting}
        >
            Post
        </button>
    )
}

export default postButton