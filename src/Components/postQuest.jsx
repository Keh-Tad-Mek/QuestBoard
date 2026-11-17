import HomeStyles from "../Home/home.module.css"
import { authClient } from "../lib/auth-client"

function postQuest ({
    setDisplayQuestForm
}) {
    return (

      <div className={HomeStyles.postQuest}>
        <p className={HomeStyles.post}
            onClick={(e) => {
                setDisplayQuestForm("flex")}
            }
                
        >
            Post a quest
        </p>
      </div>
    )
}

export default postQuest