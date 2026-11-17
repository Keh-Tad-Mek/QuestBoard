import HomeStyles from "../Home/home.module.css"

function postButton () {
    return (
        <button 
            className={HomeStyles.postButton}
        >
            Post
        </button>
    )
}

export default postButton