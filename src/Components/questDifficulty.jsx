import HomeStyles from "../Home/home.module.css"

function questDifficulty () {
    return (
        <div className={HomeStyles.questDifficulty}>
            <p>What be the difficulty level of this quest?</p>
            <div className={HomeStyles.difficultyChoices}>
                <label
                    style={{
                        color:"green"
                        
                    }}
                ><input type="radio" name="class" value="Easy" /> Easy</label>
                <label
                    style={{
                        color:"Yellow"
                    }}
                ><input type="radio" name="class" value="Medium" /> Medium</label>
                <label
                    style={{
                        color:"red"
                    }}
                ><input type="radio" name="class" value="Hard" /> Hard</label>
            </div>
        </div>
    )
}

export default questDifficulty