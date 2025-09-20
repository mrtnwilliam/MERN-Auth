import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { AppContextProvider } from './context/AppContext.tsx'

createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
    <RouterProvider router={router} />
  </AppContextProvider>,
)
