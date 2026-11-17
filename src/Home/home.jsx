import { useState } from 'react'
import HomeStyles from "./home.module.css"
import PostQuest from "../Components/postQuest.jsx"
import QuestForm from "../Components/questForm.jsx"
import { authClient } from '../lib/auth-client.js'

function App() {
  const [displayQuestForm, setDisplayQuestForm] = useState("none")
  const { data: session, isPending } = authClient.useSession()

  return (
    <div className={HomeStyles.page}>
      <header>
        <h1>Quest Board</h1>
      </header>
      <QuestForm 
        displayQuestForm={displayQuestForm}
        setDisplayQuestForm={setDisplayQuestForm}
        session={session}
        isPending={isPending}
      />
      <PostQuest 
        setDisplayQuestForm={setDisplayQuestForm}
      />
    </div>
  )
}

export default App
