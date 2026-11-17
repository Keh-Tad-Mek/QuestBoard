import HomeStyles from "../Home/home.module.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import QuestTitle from "./questTitle"
import QuestDescription from "./questDescription"
import QuestDifficulty from "./questDifficulty"
import CompletionReq from "./completionReq"
import PostButton from "./postButton"
import { setTokenUtil } from "better-auth/oauth2"

function questForm ({
    displayQuestForm,
    setDisplayQuestForm,
    session,
    isPending,
}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [requirement, setRequirement] = useState("")

    const exitForm = async () => {
        setDisplayQuestForm("none")
    }

    return (
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
                />
                <QuestDescription 
                    description={description}
                    setDescription={setDescription}
                />
                <QuestDifficulty />
                <CompletionReq 
                    requirement={requirement}
                    setRequirement={setRequirement}
                />  
                <PostButton />
            </div>
        </div>
    )
}

export default questForm