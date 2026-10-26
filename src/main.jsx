import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouters from "./routes"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouters />
  </StrictMode>,
)
