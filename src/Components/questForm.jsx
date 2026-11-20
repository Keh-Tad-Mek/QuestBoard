import HomeStyles from "../Home/home.module.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import QuestTitle from "./questTitle"
import QuestDescription from "./questDescription"
import CompletionReq from "./completionReq"
import PostButton from "./postButton"
import MaxQuestTakers from "./maxQuestTakers"
import { setTokenUtil } from "better-auth/oauth2"

function questForm ({
    displayQuestForm,
    setDisplayQuestForm,
    session,
    isPending,
}) {
    const [title, setTitle] = useState("")
    const [titleBorderColor, setTitleBorderColor] = useState("black")

    const [description, setDescription] = useState("")
    const [descriptionBorderColor, setDescriptionBorderColor] = useState("black")

    const [requirement, setRequirement] = useState("")
    const [requirementBorderColor, setRequirementBorderColor] = useState("black")

    const [maxQuestTakers, setMaxQuestTakers] = useState("")
    const [maxQuestTakersBorderColor, setMaxQuestTakersBorderColor] = useState("black")

    const exitForm = async () => {
        setTitle("")
        setDescription("")
        setRequirement("")
        setMaxQuestTakers("")
        setTitleBorderColor("black")
        setDescriptionBorderColor("black")
        setRequirementBorderColor("black")
        setMaxQuestTakersBorderColor("black")
        setDisplayQuestForm("none")
    }

    return (
        <>
            {session && (
                <div className={HomeStyles.questFormBGBlur}
                    style={{
                        display:`${displayQuestForm}`
                    }}
                >
                    <div className={HomeStyles.questForm}>
                        <div className={HomeStyles.formHeader}>
                            <h2>Quest Form</h2>
                            <button className={HomeStyles.exitForm}
                                onClick={exitForm}
                            >
                                <FontAwesomeIcon icon={faXmark}/>
                            </button>
                        </div>
                        <QuestTitle 
                            title={title}
                            setTitle={setTitle}
                            borderColor={titleBorderColor}
                        />
                        
                        <QuestDescription 
                            description={description}
                            setDescription={setDescription}
                            borderColor={descriptionBorderColor}
                        />
                        <CompletionReq 
                            requirement={requirement}
                            setRequirement={setRequirement}
                            borderColor={requirementBorderColor}
                        />  
        
                        <MaxQuestTakers
                            maxQuestTakers={maxQuestTakers}
                            setMaxQuestTakers={setMaxQuestTakers}
                            borderColor={maxQuestTakersBorderColor}
                        />
        
                        <PostButton 
                            title={title}
                            description={description}
                            requirement={requirement}
                            maxQuestTakers={maxQuestTakers}
                            setTitleBorderColor={setTitleBorderColor}
                            setDescriptionBorderColor={setDescriptionBorderColor}
                            setRequirementBorderColor={setRequirementBorderColor}
                            setMaxQuestTakersBorderColor={setMaxQuestTakersBorderColor}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default questForm