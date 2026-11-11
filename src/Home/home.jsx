import { useState } from 'react'
import HomeStyles from "./home.module.css"

function App() {

  return (
    <div className={HomeStyles.page}>
      <header>
        <h1>Quest Board</h1>
      </header>
      <div className={HomeStyles.postQuest}>
        <p>Post a quest</p>
      </div>
    </div>
  )
}

export default App
